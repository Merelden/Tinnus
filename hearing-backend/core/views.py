from rest_framework import generics, status, serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate, login
from .models import Participant
from .serializers import ParticipantSerializer

# JWT
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

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