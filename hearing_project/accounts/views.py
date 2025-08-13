import random
from rest_framework import status
from django.utils.timezone import now
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import FeedbackResponseSerializer
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .models import UserParticipant, FeedbackResponse

class AutoLoginView(APIView):
    def get(self, request):
        user_id = request.session.get('user_id')

        if user_id:
            return Response({'message': 'Already authenticated'}, status=200)
        elif not user_id: 
            return Response({'message': 'Already authenticated'}, status=200)

        user = UserParticipant.objects.create()
        request.session['user_id'] = user.id
        return Response({
            'message': 'New user created',
            'external_id': str(user.external_id)
        }, status=201)
    

@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        agreed = request.data.get('agreed')
        full_name = request.data.get('full_name')
        age = request.data.get('age')

        if not email or not password or not agreed or not full_name or not age:
            return Response({'error': 'All fields are required'}, status=400)

        if UserParticipant.objects.filter(email=email).exists():
            return Response({'error': 'User already exists'}, status=400)

        user = UserParticipant(
            email=email,
            full_name=full_name,
            age=age,
            agreed=agreed,
            first_entry_at=now(),
            study_days=random.choice([15, 30]),

        )
        user.set_password(password)
        user.save()

        request.session['user_id'] = user.id

        return Response({
            'message': 'Registered successfully',
            'is_new': True,
            'profile': {
                'email': user.email,
                'full_name': user.full_name,
                'age': user.age,
                'agreed': user.agreed,
                'first_entry_at': user.first_entry_at,
            }
        }, status=201)



class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = UserParticipant.objects.get(email=email)
        except UserParticipant.DoesNotExist:
            return Response({'error': 'Invalid email or password'}, status=400)

        if not user.check_password(password):
            return Response({'error': 'Invalid email or password'}, status=400)

        if user.first_entry_at is None:
            user.first_entry_at = now()
            user.save()
            is_new = True
        else:
            is_new = False

        request.session['user_id'] = user.id

        return Response({
            'message': 'Logged in successfully',
            'is_new': is_new,
            'profile': {
                'email': user.email,
                'full_name': user.full_name,
                'age': user.age,
                'agreed': user.agreed,
                'first_entry_at': user.first_entry_at,
            }
        }, status=200)



class ConsentView(APIView):
    def post(self, request):
        user_id = request.session.get('user_id')
        if not user_id:
            return Response({'error': 'Not authenticated'}, status=401)

        user = UserParticipant.objects.get(id=user_id)
        if not user.agreed:
            user.agreed = True
            user.save()
            return Response({'message': 'Consent saved'}, status=200)
        return Response({'message': 'Consent already given'}, status=200)


class MeView(APIView):
    def get(self, request):
        user_id = request.session.get('user_id')
        if not user_id:
            return Response({'authenticated': False}, status=200)

        try:
            user = UserParticipant.objects.get(id=user_id)
            days_passed = None
            if user.first_entry_at:
                days_passed = (now() - user.first_entry_at).days

            return Response({
                'authenticated': True,
                'is_new': False,
                'email': user.email,
                'full_name': user.full_name,
                'age': user.age,
                'agreed': user.agreed,
                'days_passed': days_passed,
            }, status=200)
        except UserParticipant.DoesNotExist:
            return Response({'authenticated': False}, status=200)


class ProfileUpdateView(APIView):
    def post(self, request):
        user_id = request.session.get('user_id')
        if not user_id:
            return Response({'error': 'Not authenticated'}, status=401)

        user = UserParticipant.objects.get(id=user_id)

        if user.full_name and user.age:
            return Response({'message': 'Profile already completed'}, status=200)

        full_name = request.data.get('full_name')
        age = request.data.get('age')

        if not full_name or not age:
            return Response({'error': 'full_name and age are required'}, status=400)

        user.full_name = full_name
        user.age = age
        user.save()
        return Response({'message': 'Profile saved'}, status=200)


class FeedbackResponseView(APIView):
    def post(self, request):
        user_id = request.session.get('user_id')
        if not user_id:
            return Response({'error': 'Not authenticated'}, status=401)

        try:
            user = UserParticipant.objects.get(id=user_id)
        except UserParticipant.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)

        video_id = request.data.get('video_id')
        paused_time = request.data.get('paused_time')
        feedback_text = request.data.get('feedback_text', '')

        if video_id is None or paused_time is None:
            return Response({'detail': 'Missing required fields'}, status=400)

        feedback = FeedbackResponse.objects.create(
            user=user,
            video_id=video_id,
            paused_time=paused_time,
            feedback_text=feedback_text
        )

        serializer = FeedbackResponseSerializer(feedback)
        return Response(serializer.data, status=201)
