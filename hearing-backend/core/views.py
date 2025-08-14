from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from .models import Participant
from .serializers import ParticipantSerializer

class RegisterView(generics.CreateAPIView):
    serializer_class = ParticipantSerializer

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)
        if user:
            login(request, user)
            participant = Participant.objects.get(user=user)
            return Response({
                'participant': ParticipantSerializer(participant).data,
                'message': 'Logged in successfully'
            })
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)