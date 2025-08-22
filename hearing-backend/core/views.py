from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.conf import settings
from django.middleware.csrf import get_token
from django.utils import timezone
from .models import Participant, Question, Test, CalmingVideoSegment
from .serializers import ParticipantSerializer, QuestionSerializer, TestSerializer

import hmac
import hashlib
import time
import re
import json
import base64
from collections import defaultdict
import requests
from django.db.models import Q


class RegisterView(generics.CreateAPIView):
    serializer_class = ParticipantSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        participant = serializer.save()
        # Авторизуем пользователя в текущей сессии сразу после регистрации
        try:
            login(request, participant.user)
        except Exception:
            pass
        # Возвращаем прежний формат ответа + csrftoken для дальнейших запросов в этой сессии
        data = ParticipantSerializer(participant).data
        data['csrftoken'] = get_token(request)
        headers = self.get_success_headers(serializer.data)
        return Response(data, status=status.HTTP_201_CREATED, headers=headers)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        field_errors = {}
        if not email:
            field_errors['email'] = ['Это поле обязательно.']
        if not password:
            field_errors['password'] = ['Это поле обязательно.']
        if field_errors:
            return Response(field_errors, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, email=email, password=password)
        if user:
            login(request, user)
            try:
                participant = Participant.objects.get(user=user)
                participant_data = ParticipantSerializer(participant).data
            except Participant.DoesNotExist:
                participant_data = None
            return Response({
                'participant': participant_data,
                'message': 'Вход выполнен успешно',
                'csrftoken': get_token(request)
            })
        return Response({'detail': 'Неверный email или пароль.'}, status=status.HTTP_400_BAD_REQUEST)


class CsrfView(APIView):
    def get(self, request):
        return Response({'csrftoken': get_token(request)})


class AuthStatusView(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            data = {
                'authenticated': True,
                'user': {
                    'id': request.user.id,
                    'username': request.user.username,
                    'email': request.user.email,
                    'first_name': request.user.first_name,
                    'last_name': request.user.last_name,
                },
                'csrftoken': get_token(request),
            }
            try:
                participant = Participant.objects.get(user=request.user)
                data['participant'] = ParticipantSerializer(participant).data
            except Participant.DoesNotExist:
                pass
            return Response(data)
        return Response(
            {'authenticated': False, 'detail': "Пользователь не авторизован"},
            status=status.HTTP_401_UNAUTHORIZED
        )


class QuestionsView(APIView):
    def get(self, request):
        """
        Returns questions in the required JSON shape:
        { "questions": [ { id, question, type, options:[{label}], input?, section } ] }
        """
        qs = Question.objects.prefetch_related('options').all()
        data = QuestionSerializer(qs, many=True).data
        return Response({'questions': data})


class StreakView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            participant = Participant.objects.get(user=request.user)
        except Participant.DoesNotExist:
            return Response({'detail': 'Участник не найден.'}, status=status.HTTP_404_NOT_FOUND)

        # Compute day based on registration date (Participant.created_at), not consecutive visits
        today = timezone.localdate()
        start_date = timezone.localtime(participant.created_at).date() if participant.created_at else today
        day = (today - start_date).days + 1
        if day < 1:
            day = 1

        group = participant.study_group
        test_days = [1, 15] if group == 15 else [1, 15, 30]
        is_test_day = day in test_days
        next_test_day = next((d for d in test_days if d > day), None)

        return Response({
            'streak': day,
            'max_streak': day,
            'last_visit_date': str(participant.last_visit_date) if getattr(participant, 'last_visit_date', None) else None,
            'study_group': group,
            'test_days': test_days,
            'is_test_day': is_test_day,
            'next_test_day': next_test_day,
        })


class SubmitTestView(APIView):
    permission_classes = [IsAuthenticated]

    @staticmethod
    def _points_from_label(label: str) -> int:
        # Ищем целое число в последних скобках, например: "все время (3)"
        if not isinstance(label, str):
            return 0
        m = re.findall(r"\((-?\d+)\)", label)
        return int(m[-1]) if m else 0

    def post(self, request):
        try:
            participant = Participant.objects.get(user=request.user)
        except Participant.DoesNotExist:
            return Response({'detail': 'Участник не найден.'}, status=status.HTTP_404_NOT_FOUND)

        day = request.data.get('day')
        answers = request.data.get('answers', [])

        # Валидация дня по группе
        allowed_days = [1, 15] if participant.study_group == 15 else [1, 15, 30]
        try:
            day = int(day)
        except (TypeError, ValueError):
            return Response({'day': ['Некорректный день. Ожидается 1, 15 или 30.']}, status=status.HTTP_400_BAD_REQUEST)
        if day not in allowed_days:
            return Response({'day': [f'День {day} недоступен для вашей группы. Доступно: {allowed_days}.']}, status=status.HTTP_400_BAD_REQUEST)

        # Подсчёт баллов
        totals = defaultdict(int)
        normalized_answers = []
        total_score = 0

        # answers: [{question: id, selected: [label]|label|None, input: str|None}]
        if not isinstance(answers, list):
            return Response({'answers': ['Ожидается список ответов.']}, status=status.HTTP_400_BAD_REQUEST)

        # Заранее загрузим все вопросы и опции
        qids = [a.get('question') for a in answers if isinstance(a, dict) and 'question' in a]
        qs = {q.id: q for q in Question.objects.filter(id__in=qids).prefetch_related('options')}

        # Для каждой опции построим маппинг native_id -> label
        options_map = {}
        for q in qs.values():
            options_map[q.id] = {opt.native_id if opt.native_id is not None else (opt.order or 0) + 1: opt.label for opt in q.options.all()}

        for a in answers:
            if not isinstance(a, dict):
                continue
            qid = a.get('question')
            selected = a.get('selected')
            free_input = a.get('input')

            q = qs.get(qid)
            if not q:
                continue

            # Нормализуем выбранные значения к списку целых (нативные id)
            if selected is None:
                selected_ids = []
            elif isinstance(selected, list):
                selected_ids = []
                for x in selected:
                    try:
                        selected_ids.append(int(x))
                    except (TypeError, ValueError):
                        pass
            else:
                try:
                    selected_ids = [int(selected)]
                except (TypeError, ValueError):
                    selected_ids = []

            # Переводим id -> label для подсчёта баллов
            labels = [options_map.get(q.id, {}).get(sid) for sid in selected_ids]
            labels = [lbl for lbl in labels if isinstance(lbl, str)]

            section = q.section or ''
            points = sum(self._points_from_label(lbl) for lbl in labels)
            totals[section] += points
            total_score += points

            normalized_answers.append({
                'question': q.id,
                'section': section,
                'selected': selected_ids,
                'input': free_input,
            })

        # Создаём/обновляем запись Test
        obj, created = Test.objects.get_or_create(
            participant=participant,
            day=day,
            defaults={
                'answers': normalized_answers,
                'total_score': total_score,
                'scores_by_section': dict(totals),
            }
        )
        if not created:
            obj.answers = normalized_answers
            obj.total_score = total_score
            obj.scores_by_section = dict(totals)
            obj.save(update_fields=['answers', 'total_score', 'scores_by_section'])

        return Response({
            'day': day,
            'total_score': total_score,
            'scores_by_section': dict(totals)
        }, status=status.HTTP_200_OK)


class MyTestsSummaryView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            participant = Participant.objects.get(user=request.user)
        except Participant.DoesNotExist:
            return Response({'detail': 'Участник не найден.'}, status=status.HTTP_404_NOT_FOUND)

        tests = Test.objects.filter(participant=participant).order_by('day')
        data = TestSerializer(tests, many=True).data
        return Response({'tests': data})


class MyTestByDayView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, day: int):
        try:
            participant = Participant.objects.get(user=request.user)
        except Participant.DoesNotExist:
            return Response({'detail': 'Участник не найден.'}, status=status.HTTP_404_NOT_FOUND)
        try:
            test = Test.objects.get(participant=participant, day=day)
        except Test.DoesNotExist:
            return Response({'detail': f'Результат за день {day} не найден.'}, status=status.HTTP_404_NOT_FOUND)
        return Response(TestSerializer(test).data)


class CalmingVideoView(APIView):
    permission_classes = [IsAuthenticated]

    def _resolve_phase(self, participant):
        today = timezone.localdate()
        start_date = timezone.localtime(participant.created_at).date() if participant.created_at else today
        day = (today - start_date).days + 1
        if day < 1:
            day = 1
        if day <= 5:
            return 'early'
        # late: 6..15 for group 15, 6..30 for group 30
        return 'late'

    def _response_for(self, phase: str, segment: int):
        seg = CalmingVideoSegment.objects.filter(phase=phase, segment=segment).first()
        if seg and getattr(seg, 'file', None):
            try:
                return {'path': seg.file.url}
            except Exception:
                pass
        # Фолбэк: сконструировать путь в соответствии с договоренностью
        return {'path': f"/videos/{phase}/{segment}.mp4"}

    def get(self, request):
        # Поддержка прежнего API через query params
        try:
            segment = int(request.query_params.get('timestamp'))
        except (TypeError, ValueError):
            return Response({'timestamp': ['Ожидается целое число от 1 до 12.']}, status=status.HTTP_400_BAD_REQUEST)
        if not (1 <= segment <= 12):
            return Response({'timestamp': ['Ожидается целое число от 1 до 12.']}, status=status.HTTP_400_BAD_REQUEST)
        group_param = request.query_params.get('group')
        if group_param in ('early', 'late'):
            phase = group_param
        else:
            try:
                participant = Participant.objects.get(user=request.user)
            except Participant.DoesNotExist:
                return Response({'detail': 'Участник не найден.'}, status=status.HTTP_404_NOT_FOUND)
            phase = self._resolve_phase(participant)
        return Response(self._response_for(phase, segment))

    def post(self, request):
        # JSON: { "timestamp": 1..12, "group": "early"|"late"? }
        try:
            segment = int(request.data.get('timestamp'))
        except (TypeError, ValueError):
            return Response({'timestamp': ['Ожидается целое число от 1 до 12.']}, status=status.HTTP_400_BAD_REQUEST)
        if not (1 <= segment <= 12):
            return Response({'timestamp': ['Ожидается целое число от 1 до 12.']}, status=status.HTTP_400_BAD_REQUEST)

        group_param = request.data.get('group')
        if group_param in ('early', 'late'):
            phase = group_param
        else:
            try:
                participant = Participant.objects.get(user=request.user)
            except Participant.DoesNotExist:
                return Response({'detail': 'Участник не найден.'}, status=status.HTTP_404_NOT_FOUND)
            phase = self._resolve_phase(participant)
        return Response(self._response_for(phase, segment))


class FeedbackSubmitView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Accepts JSON: { "feedback": "..." } (alias: "text")
        try:
            participant = Participant.objects.get(user=request.user)
        except Participant.DoesNotExist:
            return Response({'detail': 'Участник не найден.'}, status=status.HTTP_404_NOT_FOUND)

        # Determine current study day based on registration date
        today = timezone.localdate()
        start_date = timezone.localtime(participant.created_at).date() if participant.created_at else today
        day = (today - start_date).days + 1
        if day < 1:
            day = 1

        allowed_days = [1, 15] if participant.study_group == 15 else [1, 15, 30]
        if day not in allowed_days:
            return Response({'detail': f'Отзыв можно оставить только в дни {allowed_days}. Сегодняшний день: {day}.'}, status=status.HTTP_400_BAD_REQUEST)

        text = request.data.get('feedback')
        if text is None or (isinstance(text, str) and not text.strip()):
            text = request.data.get('text')
        if text is None or (isinstance(text, str) and not text.strip()):
            return Response({'feedback': ['Это поле обязательно. Передайте непустой текст.']}, status=status.HTTP_400_BAD_REQUEST)

        # Save latest feedback on participant
        participant.feedback = str(text)
        participant.save(update_fields=['feedback'])

        # Ensure a Test exists for this day; store feedback there as well
        test_obj, created = Test.objects.get_or_create(
            participant=participant,
            day=day,
            defaults={
                'answers': [],
                'total_score': 0,
                'scores_by_section': {},
            }
        )
        if not created:
            test_obj.feedback = str(text)
            test_obj.save(update_fields=['feedback'])
        else:
            # set feedback for newly created record
            test_obj.feedback = str(text)
            test_obj.save(update_fields=['feedback'])

        return Response({
            'saved': True,
            'day': day,
            'study_group': participant.study_group,
            'feedback': str(text),
        })


class TelegramAuthView(APIView):
    """
    Авторизация через Telegram Login Widget.
    Ожидает POST с полями Telegram (id, first_name, last_name, username, photo_url, auth_date, hash).
    Проверяет подпись, создаёт/находит пользователя tg_<id>, устанавливает сессию и возвращает participant (если есть).
    """

    def post(self, request):
        payload = request.data or {}
        provided_hash = payload.get('hash')
        if not provided_hash:
            return Response({'hash': ['Это поле обязательно.']}, status=status.HTTP_400_BAD_REQUEST)

        bot_token = getattr(settings, 'TELEGRAM_BOT_TOKEN', '7993827778:AAFb8m1ZBnLlu-Kn3LqraQSQFNO-RmA7qfs')
        if not bot_token:
            return Response({'detail': 'TELEGRAM_BOT_TOKEN не задан в настройках.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # Собираем data_check_string из всех полей, кроме 'hash', сортировка по ключу
        keys = [k for k in payload.keys() if k != 'hash']
        data_check_string = '\n'.join([f"{k}={payload.get(k)}" for k in sorted(keys)])

        # Вычисляем HMAC-SHA256 с ключом sha256(bot_token)
        secret_key = hashlib.sha256(bot_token.encode()).digest()
        computed_hash = hmac.new(secret_key, data_check_string.encode(), hashlib.sha256).hexdigest()

        if not hmac.compare_digest(computed_hash, str(provided_hash)):
            return Response({'detail': 'Некорректная подпись Telegram.'}, status=status.HTTP_400_BAD_REQUEST)

        # Проверяем давность (по умолчанию 24 часа)
        try:
            auth_date = int(payload.get('auth_date', '0'))
        except (TypeError, ValueError):
            auth_date = 0
        max_age = int(getattr(settings, 'TELEGRAM_LOGIN_MAX_AGE', 86400))
        if auth_date <= 0 or int(time.time()) - auth_date > max_age:
            return Response({'detail': 'Сессия Telegram устарела. Попробуйте войти снова.'}, status=status.HTTP_400_BAD_REQUEST)

        tg_id = str(payload.get('id') or '')
        if not tg_id:
            return Response({'detail': 'Не передан telegram id.'}, status=status.HTTP_400_BAD_REQUEST)

        first_name = payload.get('first_name') or ''
        last_name = payload.get('last_name') or ''
        tg_username = payload.get('username') or ''
        photo_url = payload.get('photo_url') or ''

        # Ищем/создаём пользователя
        username = f"tg_{tg_id}"
        user = User.objects.filter(username=username).first()
        created = False
        if not user:
            user = User.objects.create(
                username=username,
                first_name=first_name,
                last_name=last_name,
            )
            user.set_unusable_password()
            user.save()
            created = True
        else:
            # Обновляем имя/фамилию при необходимости
            changed = False
            if first_name and user.first_name != first_name:
                user.first_name = first_name
                changed = True
            if last_name and user.last_name != last_name:
                user.last_name = last_name
                changed = True
            if changed:
                user.save(update_fields=['first_name', 'last_name'])

        # Устанавливаем сессию и отдаём CSRF-токен
        login(request, user)
        data = {
            'new_user': created,
            'csrftoken': get_token(request),
            'telegram_profile': {
                'id': tg_id,
                'username': tg_username,
                'first_name': first_name,
                'last_name': last_name,
                'photo_url': photo_url,
            }
        }

        try:
            participant = Participant.objects.get(user=user)
            data['participant'] = ParticipantSerializer(participant).data
        except Participant.DoesNotExist:
            pass

        return Response(data)


class CompleteProfileView(APIView):
    """
    Создание Participant для уже аутентифицированного пользователя (после OAuth входа).
    POST JSON: { full_name, age, phone, email? }
    Если у пользователя нет email, обязателен email в запросе.
    Возвращает данные Participant и csrftoken.
    """
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        if Participant.objects.filter(user=user).exists():
            return Response({'detail': 'Профиль уже заполнен.'}, status=status.HTTP_400_BAD_REQUEST)

        full_name = (request.data.get('full_name') or '').strip()
        age = request.data.get('age')
        phone = (request.data.get('phone') or '').strip()
        email = (user.email or '').strip() or (request.data.get('email') or '').strip()

        field_errors = {}
        if not full_name:
            field_errors['full_name'] = ['Это поле обязательно.']
        try:
            age = int(age)
            if age <= 0 or age > 120:
                field_errors['age'] = ['Недопустимое значение возраста.']
        except (TypeError, ValueError):
            field_errors['age'] = ['Ожидается целое число.']
        if not phone:
            field_errors['phone'] = ['Это поле обязательно.']
        if not email:
            field_errors['email'] = ['Это поле обязательно.']
        if field_errors:
            return Response(field_errors, status=status.HTTP_400_BAD_REQUEST)

        # Валидация уникальности телефона и email
        if Participant.objects.filter(phone=phone).exists():
            return Response({'phone': ['Этот телефон уже занят.']}, status=status.HTTP_400_BAD_REQUEST)
        if Participant.objects.filter(email=email).exists():
            return Response({'email': ['Этот email уже занят.']}, status=status.HTTP_400_BAD_REQUEST)

        # Сохраняем email на пользователе, если пустой
        if not user.email:
            try:
                user.email = email
                user.username = user.username or email  # username уже занят для tg_/vk_, не меняем если задан
                user.save(update_fields=['email'])
            except Exception:
                # Конфликт email на User уровне игнорируем для пользователя OAuth, Participant всё равно создадим
                pass

        participant = Participant.objects.create(
            user=user,
            full_name=full_name,
            age=age,
            phone=phone,
            email=email,
        )
        return Response({
            'participant': ParticipantSerializer(participant).data,
            'csrftoken': get_token(request)
        }, status=status.HTTP_201_CREATED)


class VKIDAuthView(APIView):
    """
    Авторизация через VK ID (OAuth).
    Рекомендуемый поток: на фронтенде НЕ вызывать exchangeCode, а пересылать нам code + device_id
    из виджета OneTap. Мы обмениваем code на access_token через сервер VK и устанавливаем сессию.

    POST JSON: { "code": "...", "device_id": "..." }
    Ответ: как в TelegramAuthView: { new_user, csrftoken, vk_profile, participant? }
    """

    def post(self, request):
        """
        Поддержка двух потоков:
        1) Рекомендованный: передан code (мы обмениваем на сервере)
        2) Уже получен access_token на клиенте (мы валидируем его на сервере через users.get)
        """
        code = request.data.get('code')
        access_token_in = request.data.get('access_token')
        device_id = request.data.get('device_id')  # не используется на бэкенде

        access_token = None
        vk_user_id = None
        email = ''
        first_name = ''
        last_name = ''
        photo_url = ''

        if code:
            client_id = getattr(settings, 'VK_APP_ID', None)
            client_secret = getattr(settings, 'VK_APP_SECRET', '')
            redirect_uri = getattr(settings, 'VK_REDIRECT_URI', None)
            if not client_id or not client_secret or not redirect_uri:
                return Response({'detail': 'VK ID не настроен на сервере (проверьте VK_APP_ID, VK_APP_SECRET, VK_REDIRECT_URI).'},
                                status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            # Обмен кода на токены через VK ID (OAuth2)
            try:
                r = requests.post(
                    'https://id.vk.com/oauth2/token',
                    data={
                        'grant_type': 'authorization_code',
                        'client_id': client_id,
                        'client_secret': client_secret,
                        'redirect_uri': redirect_uri,
                        'code': code,
                    },
                    timeout=10
                )
                token_data = r.json()
            except Exception:
                return Response({'detail': 'Ошибка соединения с VK OAuth.'}, status=status.HTTP_502_BAD_GATEWAY)

            if not isinstance(token_data, dict):
                return Response({'detail': 'Некорректный ответ VK OAuth.'}, status=status.HTTP_502_BAD_GATEWAY)
            if 'error' in token_data:
                return Response({'detail': f"VK OAuth error: {token_data.get('error_description') or token_data.get('error')}"},
                                status=status.HTTP_400_BAD_REQUEST)

            access_token = token_data.get('access_token')
            id_token = token_data.get('id_token')
            vk_user_id = token_data.get('user_id') or token_data.get('uid')  # может отсутствовать для VK ID
            email = token_data.get('email') or ''

            # Пытаемся извлечь профиль из id_token (JWT)
            try:
                if id_token:
                    parts = id_token.split('.')
                    if len(parts) >= 2:
                        payload_b64 = parts[1] + '=' * (-len(parts[1]) % 4)
                        payload = json.loads(base64.urlsafe_b64decode(payload_b64.encode()).decode())
                        vk_user_id = payload.get('sub') or vk_user_id
                        first_name = payload.get('given_name') or payload.get('first_name') or first_name
                        last_name = payload.get('family_name') or payload.get('last_name') or last_name
                        photo_url = payload.get('picture') or photo_url
                        email = payload.get('email') or email
            except Exception:
                pass

            # Фолбэк: users.get, если id или ФИО не удалось получить
            if access_token and (not vk_user_id or not first_name or not last_name):
                try:
                    r2 = requests.get(
                        'https://api.vk.com/method/users.get',
                        params={'access_token': access_token, 'v': '5.131', 'fields': 'photo_100'},
                        timeout=10
                    )
                    j2 = r2.json()
                    if isinstance(j2, dict) and isinstance(j2.get('response'), list) and j2['response']:
                        u = j2['response'][0]
                        vk_user_id = u.get('id') or vk_user_id
                        first_name = u.get('first_name') or first_name
                        last_name = u.get('last_name') or last_name
                        photo_url = u.get('photo_100') or photo_url
                except Exception:
                    pass

            if not vk_user_id:
                return Response({'detail': 'VK не вернул user_id.'}, status=status.HTTP_400_BAD_REQUEST)

        elif access_token_in:
            access_token = str(access_token_in)
            # Валидируем токен реальным вызовом API и получаем профиль
            try:
                r2 = requests.get(
                    'https://api.vk.com/method/users.get',
                    params={'access_token': access_token, 'v': '5.131', 'fields': 'photo_100'},
                    timeout=10
                )
                j2 = r2.json()
            except Exception:
                return Response({'detail': 'Ошибка соединения с VK API.'}, status=status.HTTP_502_BAD_GATEWAY)

            if not isinstance(j2, dict):
                return Response({'detail': 'Некорректный ответ VK API.'}, status=status.HTTP_502_BAD_GATEWAY)
            if 'error' in j2:
                # Например, просрочен/некорректен токен
                msg = None
                try:
                    msg = j2.get('error', {}).get('error_msg')
                except Exception:
                    pass
                return Response({'detail': f'VK API error: {msg or "invalid_token"}'}, status=status.HTTP_400_BAD_REQUEST)

            resp = j2.get('response') or []
            if not resp:
                return Response({'detail': 'VK API не вернул профиль.'}, status=status.HTTP_400_BAD_REQUEST)
            u = resp[0]
            vk_user_id = u.get('id')
            if not vk_user_id:
                return Response({'detail': 'Не удалось определить user_id.'}, status=status.HTTP_400_BAD_REQUEST)
            first_name = u.get('first_name') or ''
            last_name = u.get('last_name') or ''
            photo_url = u.get('photo_100') or ''
            # email при токен-флоу обычно нет — можно принять из тела запроса, если фронт собрал
            email = (request.data.get('email') or '').strip()
        else:
            return Response({'detail': 'Передайте code (рекомендовано) или access_token.'}, status=status.HTTP_400_BAD_REQUEST)

        # Создаём/находим локального пользователя и логиним
        username = f"vk_{vk_user_id}"
        user = User.objects.filter(username=username).first()
        created = False
        if not user:
            user = User(username=username)
            if first_name:
                user.first_name = first_name
            if last_name:
                user.last_name = last_name
            if email:
                user.email = email
            user.set_unusable_password()
            try:
                user.save()
            except Exception:
                # Возможен конфликт email (unique). Сбрасываем email и сохраняем снова.
                user.email = ''
                user.save()
            created = True
        else:
            changed = False
            if first_name and user.first_name != first_name:
                user.first_name = first_name
                changed = True
            if last_name and user.last_name != last_name:
                user.last_name = last_name
                changed = True
            if email and user.email != email:
                try:
                    user.email = email
                    changed = True
                    user.save(update_fields=['first_name', 'last_name', 'email'])
                except Exception:
                    if changed:
                        user.save(update_fields=['first_name', 'last_name'])
            elif changed:
                user.save(update_fields=['first_name', 'last_name'])

        login(request, user)
        data = {
            'new_user': created,
            'csrftoken': get_token(request),
            'vk_profile': {
                'id': str(vk_user_id),
                'first_name': first_name,
                'last_name': last_name,
                'photo_url': photo_url,
            }
        }
        try:
            participant = Participant.objects.get(user=user)
            data['participant'] = ParticipantSerializer(participant).data
        except Participant.DoesNotExist:
            pass

        return Response(data)
