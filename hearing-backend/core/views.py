from rest_framework import generics, status, serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.conf import settings
from .models import Participant, Question
from .serializers import ParticipantSerializer, QuestionSerializer

# JWT
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken

import hmac
import hashlib
import time

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
                'message': 'Вход выполнен успешно'
            })
        return Response({'detail': 'Неверный email или пароль.'}, status=status.HTTP_400_BAD_REQUEST)

class EmailTokenObtainPairSerializer(TokenObtainPairSerializer):

    username_field = 'email'

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        field_errors = {}
        if not email:
            field_errors['email'] = ['Это поле обязательно.']
        if not password:
            field_errors['password'] = ['Это поле обязательно.']
        if field_errors:
            raise serializers.ValidationError(field_errors)

        user = authenticate(request=self.context.get('request'), email=email, password=password)
        if not user or not user.is_active:
            raise AuthenticationFailed('Неверный email или пароль.')
        self.user = user
        refresh = self.get_token(self.user)
        data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

        try:
            participant = Participant.objects.get(user=user)
            data['participant'] = ParticipantSerializer(participant).data
        except Participant.DoesNotExist:
            pass
        return data

class EmailTokenObtainPairView(TokenObtainPairView):
    serializer_class = EmailTokenObtainPairSerializer


class QuestionsView(APIView):
    def get(self, request):
        """
        Returns questions in the required JSON shape:
        { "questions": [ { id, question, type, options:[{label}], input? } ] }
        """
        qs = Question.objects.prefetch_related('options').all()
        data = QuestionSerializer(qs, many=True).data
        return Response({ 'questions': data })


class StreakView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            participant = Participant.objects.get(user=request.user)
        except Participant.DoesNotExist:
            return Response({'detail': 'Участник не найден.'}, status=status.HTTP_404_NOT_FOUND)

        streak = participant.visit_streak or 0
        max_streak = participant.max_visit_streak or 0
        last_date = participant.last_visit_date
        group = participant.study_group

        # Test days depend on assigned study group: 15-day group => [1, 15]; 30-day group => [1, 15, 30]
        test_days = [1, 15] if group == 15 else [1, 15, 30]
        is_test_day = (streak in test_days) and streak > 0
        next_test_day = next((d for d in test_days if d > streak), None)

        return Response({
            'streak': streak,
            'max_streak': max_streak,
            'last_visit_date': str(last_date) if last_date else None,
            'study_group': group,
            'test_days': test_days,
            'is_test_day': is_test_day,
            'next_test_day': next_test_day,
        })


class TelegramAuthView(APIView):
    """
    Авторизация через Telegram Login Widget.
    Ожидает POST с полями Telegram (id, first_name, last_name, username, photo_url, auth_date, hash).
    Проверяет подпись, создаёт/находит пользователя tg_<id>, возвращает JWT и participant (если есть).
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

        # Выдаём JWT
        refresh = RefreshToken.for_user(user)
        data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'new_user': created,
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