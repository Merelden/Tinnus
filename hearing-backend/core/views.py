from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.conf import settings
from django.middleware.csrf import get_token
from django.utils import timezone
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.template import TemplateDoesNotExist
from .models import Participant, Question, Test, CalmingVideoSegment, PasswordResetCode
from .serializers import ParticipantSerializer, QuestionSerializer, TestSerializer

import hmac
import hashlib
import time
import re
import json
import base64
import random
from collections import defaultdict
import requests
from django.db.models import Q
import logging
from datetime import datetime, date, timedelta

vk_logger = logging.getLogger('vk')
server_logger = logging.getLogger(__name__)
email_logger = logging.getLogger('email_test')


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
        return {'path': f"{phase}/{segment}.mp4"}

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


@method_decorator(csrf_exempt, name='dispatch')
class TestEmailSendView(APIView):
    """
    Тестовая отправка письма на указанный email.
    POST JSON: { email: string }
    Доступно без авторизации. Только для тестов.
    """
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        to_email = (request.data.get('email') or '').strip()
        if not to_email:
            email_logger.warning('emails.test-send: missing email in request')
            return Response({'email': ['Это поле обязательно.']}, status=status.HTTP_400_BAD_REQUEST)

        # day
        raw_day = request.data.get('day')
        try:
            day = int(raw_day) if raw_day is not None and str(raw_day).strip() != '' else 1
            if day <= 0 or day > 365:
                return Response({'day': ['Недопустимое значение.']}, status=status.HTTP_400_BAD_REQUEST)
        except (TypeError, ValueError):
            return Response({'day': ['Ожидается целое число.']}, status=status.HTTP_400_BAD_REQUEST)

        # study_group
        raw_group = request.data.get('study_group') or request.data.get('group')
        try:
            study_group = int(raw_group) if raw_group is not None and str(raw_group).strip() != '' else 30
            if study_group not in (15, 30):
                return Response({'study_group': ['Ожидается 15 или 30.']}, status=status.HTTP_400_BAD_REQUEST)
        except (TypeError, ValueError):
            return Response({'study_group': ['Ожидается 15 или 30.']}, status=status.HTTP_400_BAD_REQUEST)

        full_name = (request.data.get('full_name') or request.data.get('name') or 'Пользователь').strip()
        subject = f"NeuroTinnitus — тестовая рассылка (день {day} из {study_group})"
        context = {
            'participant': {'full_name': full_name},
            'day': day,
            'study_group': study_group,
            'site_url': getattr(settings, 'SITE_URL', ''),
        }

        # Render bodies with safe fallback
        try:
            text_body = render_to_string('emails/daily.txt', context)
        except TemplateDoesNotExist:
            text_body = (
                f"Здравствуйте, {full_name}!\n\n"
                f"Сегодня день {day} из {study_group} вашей программы.\n"
                f"Перейдите на сайт: {context['site_url']}\n\n"
                f"Хорошего дня!"
            )
        try:
            html_body = render_to_string('emails/daily.html', context)
        except TemplateDoesNotExist:
            html_body = (
                f"<p>Здравствуйте, {full_name}!</p>"
                f"<p>Сегодня день <strong>{day}</strong> из <strong>{study_group}</strong> вашей программы.</p>"
                f"<p><a href=\"{context['site_url']}\">Перейти на сайт</a></p>"
                f"<p>Хорошего дня!</p>"
            )

        try:
            msg = EmailMultiAlternatives(
                subject=subject,
                body=text_body,
                from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', None),
                to=[to_email],
            )
            msg.attach_alternative(html_body, 'text/html')
            msg.send(fail_silently=False)
            email_logger.info(f'emails.test-send: sent to={to_email} day={day} group={study_group}')
            return Response({'sent': True, 'to': to_email, 'day': day, 'study_group': study_group})
        except Exception as e:
            email_logger.exception(f'emails.test-send: error to={to_email}: {e}')
            return Response({'sent': False, 'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class PasswordResetRequestView(APIView):
    """
    Запрос на отправку кода восстановления пароля на email.
    POST JSON: { email }
    Ответ всегда 200, чтобы не раскрывать наличие аккаунта.
    """
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        email = (request.data.get('email') or '').strip()
        if not email:
            return Response({'email': ['Это поле обязательно.']}, status=status.HTTP_400_BAD_REQUEST)

        # Найдём пользователя по User.email/username или Participant.email
        user = User.objects.filter(Q(email=email) | Q(username=email)).first()
        if not user:
            p = Participant.objects.filter(email=email).select_related('user').first()
            user = p.user if p else None

        # Не раскрываем, существует ли аккаунт
        if not user:
            return Response({'sent': True})

        # Инвалидируем предыдущие активные коды
        PasswordResetCode.objects.filter(user=user, used=False).update(used=True)

        # Сгенерируем 6-значный код и сохраним с TTL 15 минут
        code = f"{random.randint(100000, 999999)}"
        expires_at = timezone.now() + timedelta(minutes=15)
        PasswordResetCode.objects.create(user=user, code=code, expires_at=expires_at)

        # Отправим письмо
        subject = 'Восстановление пароля NeuroTinnitus'
        context = {
            'code': code,
            'expires_minutes': 15,
            'site_url': getattr(settings, 'SITE_URL', ''),
        }
        text_body = (
            f"Код для восстановления пароля: {code}\n"
            f"Срок действия: 15 минут.\n"
            f"Если вы не запрашивали код, проигнорируйте это письмо.\n"
        )
        html_body = (
            f"<p>Код для восстановления пароля: <strong>{code}</strong></p>"
            f"<p>Срок действия: 15 минут.</p>"
            f"<p>Если вы не запрашивали код, просто проигнорируйте это письмо.</p>"
        )
        try:
            msg = EmailMultiAlternatives(
                subject=subject,
                body=text_body,
                from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', None),
                to=[email],
            )
            msg.attach_alternative(html_body, 'text/html')
            msg.send(fail_silently=False)
        except Exception as e:
            server_logger.warning(f'password_reset.send_email_failed: user={user.id} err={e}')
            # Не выдаём подробностей фронту
        return Response({'sent': True})


class PasswordResetConfirmView(APIView):
    """
    Подтверждение восстановления пароля.
    POST JSON: { code, new_password, confirm_password }
    """
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        code = (request.data.get('code') or '').strip()
        new_password = request.data.get('new_password') or request.data.get('password')
        confirm_password = request.data.get('confirm_password') or request.data.get('password_confirm')

        field_errors = {}
        if not code:
            field_errors['code'] = ['Это поле обязательно.']
        if not new_password:
            field_errors['new_password'] = ['Это поле обязательно.']
        if not confirm_password:
            field_errors['confirm_password'] = ['Это поле обязательно.']
        if field_errors:
            return Response(field_errors, status=status.HTTP_400_BAD_REQUEST)

        if str(new_password) != str(confirm_password):
            return Response({'confirm_password': ['Пароли не совпадают.']}, status=status.HTTP_400_BAD_REQUEST)

        # Найдём действующий код
        prc = PasswordResetCode.objects.filter(
            code=code,
            used=False,
            expires_at__gt=timezone.now(),
        ).order_by('-created_at').select_related('user').first()
        if not prc:
            return Response({'code': ['Неверный или истёкший код.']}, status=status.HTTP_400_BAD_REQUEST)

        user = prc.user
        # Проверка пароля согласно валидаторам проекта
        try:
            from django.contrib.auth.password_validation import validate_password
            validate_password(new_password, user=user)
        except Exception as e:
            # Собираем сообщения валидатора
            msgs = []
            if hasattr(e, 'messages'):
                msgs = list(e.messages)
            else:
                msgs = [str(e)]
            return Response({'new_password': msgs}, status=status.HTTP_400_BAD_REQUEST)

        # Устанавливаем пароль
        user.set_password(new_password)
        user.save(update_fields=['password'])

        # Помечаем код использованным
        prc.used = True
        prc.save(update_fields=['used'])

        return Response({'reset': True})


class TelegramAuthView(APIView):
    """
    Авторизация через Telegram Login Widget.
    Ожидает POST с полями Telegram (id, first_name, last_name, username, photo_url, auth_date, hash).
    Проверяет подпись, создаёт/находит пользователя tg_<id>, устанавливает сессию и возвращает participant (если есть).
    """
    permission_classes = [AllowAny]
    authentication_classes = []

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
        # Явно указываем backend, чтобы избежать ошибки при логине без authenticate
        login(request, user, backend='django.contrib.auth.backends.ModelBackend')
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

        # Попытаемся создать/обновить Participant, если хватает данных
        email_in = (request.data.get('email') or '').strip()
        phone_in = (request.data.get('phone') or '').strip()
        full_name = (' '.join([x for x in [first_name, last_name] if x]) or '').strip()
        full_name = (request.data.get('full_name') or full_name).strip()
        age_in = request.data.get('age')
        try:
            age_in = int(age_in)
            if age_in <= 0 or age_in > 120:
                age_in = None
        except (TypeError, ValueError):
            age_in = None

        # Сохраним email у пользователя, если он пуст
        if email_in and not user.email:
            try:
                user.email = email_in
                user.save(update_fields=['email'])
            except Exception:
                pass

        participant = Participant.objects.filter(user=user).first()
        if participant:
            changed = []
            # Имя/фамилия
            if full_name and participant.full_name != full_name:
                participant.full_name = full_name
                changed.append('full_name')
            # Телефон (дозаполнение)
            if phone_in and not participant.phone:
                participant.phone = phone_in
                changed.append('phone')
            # Email (дозаполнение с проверкой уникальности среди Participant)
            if email_in and email_in != (participant.email or ''):
                if not Participant.objects.exclude(pk=participant.pk).filter(email=email_in).exists():
                    participant.email = email_in
                    changed.append('email')
                else:
                    server_logger.warning('Email already used by another participant; skip')
            # Флаг TG-авторизации
            if not participant.is_tg_auth:
                participant.is_tg_auth = True
                changed.append('is_tg_auth')
            if changed:
                try:
                    participant.save(update_fields=changed)
                except Exception as e:
                    server_logger.warning(f'Failed to update Participant after Telegram auth: {e}')
        else:
            # Создаём Participant минимально по ФИО, остальное при наличии
            create_kwargs = {
                'user': user,
                'full_name': full_name or (tg_username or f'tg_{tg_id}'),
                'age': age_in if age_in is not None else None,
                'phone': phone_in or '',
                'is_tg_auth': True,
            }
            # Email: устанавливаем только если он не занят другим участником
            if email_in and not Participant.objects.filter(email=email_in).exists():
                create_kwargs['email'] = email_in
            else:
                create_kwargs['email'] = None
            try:
                participant = Participant.objects.create(**create_kwargs)
            except Exception as e:
                # Возможна гонка/ошибка уникальности email — повторим без email
                try:
                    create_kwargs['email'] = None
                    participant = Participant.objects.create(**create_kwargs)
                except Exception as e2:
                    server_logger.warning(f'Failed to create Participant after Telegram auth: {e2}')
                    participant = None

        if participant:
            data['participant'] = ParticipantSerializer(participant).data

        return Response(data)


class CompleteProfileView(APIView):
    """
    Создание Participant для уже аутентифицированного пользователя (после OAuth входа).
    POST JSON: { first_name, last_name, age, phone, email? }
    Если у пользователя нет email, обязателен email в запросе.
    Возвращает данные Participant и csrftoken.
    """
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        # Читаем поля для дозаполнения профиля (все — опционально)
        first_name = (request.data.get('first_name') or '').strip()
        last_name = (request.data.get('last_name') or '').strip()
        full_name = (' '.join([x for x in [first_name, last_name] if x]) or '').strip()
        phone = (request.data.get('phone') or '').strip()
        email = (request.data.get('email') or '').strip()
        age = request.data.get('age')
        try:
            age = int(age) if age is not None and str(age).strip() != '' else None
            if age is not None and (age <= 0 or age > 120):
                return Response({'age': ['Недопустимое значение возраста.']}, status=status.HTTP_400_BAD_REQUEST)
        except (TypeError, ValueError):
            return Response({'age': ['Ожидается целое число.']}, status=status.HTTP_400_BAD_REQUEST)

        participant = Participant.objects.filter(user=user).first()

        # Валидация уникальности телефона и email при передаче
        if phone:
            if Participant.objects.exclude(user=user).filter(phone=phone).exists():
                return Response({'phone': ['Этот телефон уже занят.']}, status=status.HTTP_400_BAD_REQUEST)
        if email:
            if Participant.objects.exclude(user=user).filter(email=email).exists():
                return Response({'email': ['Этот email уже занят.']}, status=status.HTTP_400_BAD_REQUEST)

        # Обновим email пользователя, если он пуст и мы получили email
        if email and not user.email:
            try:
                user.email = email
                user.save(update_fields=['email'])
            except Exception:
                pass

        # Если участник существует — обновим поля, иначе создадим минимальный профиль
        if participant:
            changed = []
            if full_name and participant.full_name != full_name:
                participant.full_name = full_name
                changed.append('full_name')
            if phone and participant.phone != phone:
                participant.phone = phone
                changed.append('phone')
            if email and email != (participant.email or ''):
                participant.email = email
                changed.append('email')
            if age is not None and participant.age != age:
                participant.age = age
                changed.append('age')
            if changed:
                participant.save(update_fields=changed)
        else:
            participant = Participant.objects.create(
                user=user,
                full_name=full_name or (user.get_full_name() or user.username),
                age=age,
                phone=phone or '',
                email=email or None,
            )

        return Response({
            'participant': ParticipantSerializer(participant).data,
            'csrftoken': get_token(request)
        }, status=status.HTTP_200_OK)


class VKIDAuthView(APIView):
    """
    Авторизация через VK ID (OAuth2 / OneTap)
    POST JSON: { code?, access_token?, device_id?, id_token?, first_name?, last_name?, email?, picture? }
    """
    def post(self, request):
        code = request.data.get('code')
        access_token_in = request.data.get('access_token')
        device_id = request.data.get('device_id')
        code_verifier = request.data.get('code_verifier') or request.data.get('codeVerifier')
        redirect_uri_override = (request.data.get('redirect_uri') or '').strip()

        access_token = None
        vk_user_id = None
        first_name = ''
        last_name = ''
        email = ''
        photo_url = ''
        phone = ''
        birthday = ''

        # --- Получение токена и профиля через code ---
        if code:
            client_id = getattr(settings, 'VK_APP_ID', None)
            client_secret = getattr(settings, 'VK_APP_SECRET', '')
            redirect_uri = getattr(settings, 'VK_REDIRECT_URI', None)
            allowed_redirects = {str(getattr(settings, 'VK_REDIRECT_URI', '')).strip(), 'https://www.neurotinnitus.ru'}
            if redirect_uri_override and redirect_uri_override in allowed_redirects:
                redirect_uri = redirect_uri_override

            if not client_id or not client_secret or not redirect_uri:
                vk_logger.error(f"VK config missing: client_id={client_id}, secret={bool(client_secret)}, redirect_uri={redirect_uri}")
                return Response({'detail': 'VK ID не настроен на сервере.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            token_data = None
            try:
                payload = {
                    'grant_type': 'authorization_code',
                    'client_id': client_id,
                    'redirect_uri': redirect_uri,
                    'code': code,
                }
                if device_id:
                    payload['device_id'] = device_id
                if code_verifier:
                    payload['code_verifier'] = code_verifier
                else:
                    payload['client_secret'] = client_secret

                r = requests.post('https://id.vk.com/oauth2/token', data=payload, timeout=10)
                token_data = r.json()
            except Exception as e:
                vk_logger.exception(f"VK token exchange error: {e}")
                return Response({'detail': 'Ошибка соединения с VK OAuth.'}, status=status.HTTP_502_BAD_GATEWAY)

            if not isinstance(token_data, dict) or 'error' in token_data:
                vk_logger.warning(f"VK OAuth error: {token_data}")
                return Response({'detail': f"VK OAuth error: {token_data.get('error_description') or token_data.get('error')}"}, status=status.HTTP_400_BAD_REQUEST)

            access_token = token_data.get('access_token')
            id_token = token_data.get('id_token')
            vk_user_id = token_data.get('user_id') or token_data.get('uid')
            email = token_data.get('email') or ''

            # Парсим id_token
            if id_token:
                try:
                    parts = id_token.split('.')
                    if len(parts) >= 2:
                        payload_b64 = parts[1] + '=' * (-len(parts[1]) % 4)
                        payload_json = json.loads(base64.urlsafe_b64decode(payload_b64.encode()).decode())
                        vk_user_id = payload_json.get('sub') or vk_user_id
                        first_name = payload_json.get('given_name') or payload_json.get('first_name') or first_name
                        last_name = payload_json.get('family_name') or payload_json.get('last_name') or last_name
                        photo_url = payload_json.get('picture') or photo_url
                        email = payload_json.get('email') or email
                except Exception as e:
                    vk_logger.exception(f"Failed to parse id_token: {e}")

        # --- flow через access_token ---
        elif access_token_in:
            access_token = str(access_token_in)
            id_token_in = request.data.get('id_token') or request.data.get('idToken')
            if id_token_in:
                try:
                    parts = id_token_in.split('.')
                    if len(parts) >= 2:
                        payload_b64 = parts[1] + '=' * (-len(parts[1]) % 4)
                        payload_json = json.loads(base64.urlsafe_b64decode(payload_b64.encode()).decode())
                        vk_user_id = payload_json.get('sub') or vk_user_id
                        first_name = payload_json.get('given_name') or payload_json.get('first_name') or first_name
                        last_name = payload_json.get('family_name') or payload_json.get('last_name') or last_name
                        photo_url = payload_json.get('picture') or photo_url
                        email = payload_json.get('email') or email
                except Exception as e:
                    vk_logger.exception(f"Failed to parse id_token (access_token flow): {e}")

        else:
            return Response({'detail': 'Передайте code или access_token.'}, status=status.HTTP_400_BAD_REQUEST)

        if access_token:
            try:
                client_id_hdr = str(getattr(settings, 'VK_APP_ID', '')).strip()
                headers = {'Authorization': f'Bearer {access_token}'}
                if client_id_hdr:
                    headers['Client-Id'] = client_id_hdr
                    headers['X-VK-APP-ID'] = client_id_hdr
                ui_resp = requests.get(
                    'https://id.vk.com/oauth2/user_info',
                    headers=headers,
                    params={'client_id': client_id_hdr} if client_id_hdr else None,
                    timeout=10
                )
                ui_data = ui_resp.json() if ui_resp is not None else {}
                vk_logger.debug(f"VK user_info: {ui_data}")
                if isinstance(ui_data, dict):
                    src = ui_data.get('user') or ui_data
                    first_name = src.get('first_name') or src.get('given_name') or first_name
                    last_name = src.get('last_name') or src.get('family_name') or last_name
                    email = src.get('email') or email
                    photo_url = src.get('avatar') or src.get('picture') or photo_url
                    phone = src.get('phone') or phone
                    birthday = src.get('birthday') or src.get('bdate') or birthday
                    ui_uid = src.get('user_id') or src.get('sub') or None
                    if ui_uid and not vk_user_id:
                        vk_user_id = str(ui_uid)
            except Exception as e:
                vk_logger.exception(f"Failed to fetch VK user_info: {e}")

        first_name = (request.data.get('first_name') or request.data.get('firstName') or first_name or '').strip()
        last_name = (request.data.get('last_name') or request.data.get('lastName') or last_name or '').strip()
        photo_url = (request.data.get('picture') or request.data.get('photo_url') or photo_url or '').strip()
        email = (request.data.get('email') or email or '').strip()
        phone = (request.data.get('phone') or phone or '').strip()
        vk_user_id = str(request.data.get('user_id') or vk_user_id)

        if not vk_user_id:
            return Response({'detail': 'VK не вернул user_id.'}, status=status.HTTP_400_BAD_REQUEST)

        username = f"vk_{vk_user_id}"
        user, created = User.objects.get_or_create(username=username)
        user.first_name = first_name or user.first_name
        user.last_name = last_name or user.last_name
        user.email = email or user.email
        if created:
            user.set_unusable_password()
        user.save(update_fields=['first_name', 'last_name', 'email'])

        login(request, user, backend='django.contrib.auth.backends.ModelBackend')

        created_participant = False
        full_name = (' '.join([x for x in [first_name, last_name] if x]) or '').strip()
        age_val = None
        if birthday:
            try:
                try:
                    bdate = datetime.strptime(birthday, '%d.%m.%Y').date()
                except ValueError:
                    bdate = datetime.strptime(birthday, '%Y-%m-%d').date()
                today = timezone.localdate()
                age_val = today.year - bdate.year - ((today.month, today.day) < (bdate.month, bdate.day))
                if age_val <= 0 or age_val > 120:
                    age_val = None
            except Exception:
                age_val = None

        participant = Participant.objects.filter(user=user).first()
        if participant:
            changed = []
            # Имя
            if full_name and participant.full_name != full_name:
                participant.full_name = full_name
                changed.append('full_name')
            # Телефон (если пуст)
            if phone and not participant.phone:
                participant.phone = phone
                changed.append('phone')
            # Email (если отличается и не занят другим участником)
            if email and email != (participant.email or ''):
                if not Participant.objects.exclude(pk=participant.pk).filter(email=email).exists():
                    participant.email = email
                    changed.append('email')
                else:
                    vk_logger.warning('Email already used by another participant; skip')
            # Флаг VK-авторизации
            if not getattr(participant, 'is_vk_auth', False):
                participant.is_vk_auth = True
                changed.append('is_vk_auth')
            if changed:
                try:
                    participant.save(update_fields=changed)
                except Exception as e:
                    vk_logger.warning(f'Failed to update Participant: {e}')
        else:
            # Создаём профиль минимально: ФИО, остальное при наличии
            try:
                participant = Participant.objects.create(
                    user=user,
                    full_name=full_name or username,
                    age=age_val if age_val is not None else None,
                    email=email or None,
                    phone=phone or '',
                    is_vk_auth=True,
                )
                created_participant = True
            except Exception as e:
                vk_logger.warning(f'Failed to create Participant automatically: {e}')

        data = {
            'new_user': created,
            'csrftoken': get_token(request),
            'vk_profile': {
                'id': vk_user_id,
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