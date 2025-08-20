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
from collections import defaultdict
from django.db.models import Q


class RegisterView(generics.CreateAPIView):
    serializer_class = ParticipantSerializer


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
