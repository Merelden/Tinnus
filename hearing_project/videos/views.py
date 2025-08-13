import os
import librosa
import numpy as np
import ffmpeg
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Video, VideoPause, ExerciseVideo
from .serializers import VideoTimestampSerializer, VideoSerializer
from accounts.models import UserParticipant 
from django.utils.timezone import now
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


@method_decorator(csrf_exempt, name='dispatch')
class VideoListCreateAPIView(APIView):
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request):
        videos = Video.objects.all()
        serializer = VideoSerializer(videos, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request):
        serializer = VideoSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@method_decorator(csrf_exempt, name='dispatch')
class SaveVideoPauseView(APIView):
    def post(self, request):
        user_id = request.session.get('user_id')
        print(f"[DEBUG] session user_id: {user_id}")
        if not user_id:
            return Response({'error': 'Not authenticated'}, status=401)

        try:
            user = UserParticipant.objects.get(id=user_id)
            print(f"[DEBUG] Authenticated user: {user.email}")
        except UserParticipant.DoesNotExist:
            print("[ERROR] User not found")
            return Response({'error': 'User not found'}, status=404)

        serializer = VideoTimestampSerializer(data=request.data)
        if not serializer.is_valid():
            print(f"[ERROR] Serializer errors: {serializer.errors}")
            return Response(serializer.errors, status=400)

        video_id = serializer.validated_data['video'].id
        timestamp = serializer.validated_data['timestamp']
        print(f"[DEBUG] Video ID: {video_id}, Timestamp: {timestamp:.2f}")

        try:
            video = Video.objects.get(id=video_id)
        except Video.DoesNotExist:
            print("[ERROR] Video not found")
            return Response({'error': 'Video not found'}, status=404)

        video_path = os.path.join(settings.MEDIA_ROOT, video.file.name)
        tmp_dir = "./tmp"
        os.makedirs(tmp_dir, exist_ok=True)
        wav_path = os.path.join(tmp_dir, f"audio_{video_id}.wav")

        print(f"[DEBUG] Video path: {video_path}")
        print(f"[DEBUG] WAV output path: {wav_path}")

        try:
            out, err = (
                ffmpeg
                .input(video_path, ss=timestamp, t=1)
                .output(wav_path, format='wav', acodec='pcm_s16le', ac=1, ar='44100')
                .overwrite_output()
                .run(capture_stdout=True, capture_stderr=True)
            )
            print("[DEBUG] FFmpeg completed successfully")
        except ffmpeg.Error as e:
            print(f"[FFMPEG ERROR]\nSTDERR:\n{e.stderr.decode()}")
            return Response({'error': f'ffmpeg error: {e.stderr.decode()}'}, status=500)

        try:
            y, sr = librosa.load(wav_path, sr=44100)
            print(f"[DEBUG] Loaded audio — {len(y)} samples at {sr}Hz")

            if y.size == 0:
                print("[ERROR] Empty audio segment")
                return Response({'error': 'Empty audio segment'}, status=400)

            frequencies = np.abs(np.fft.rfft(y))
            freq_bins = np.fft.rfftfreq(len(y), d=1/sr)
            dominant_freq = float(freq_bins[np.argmax(frequencies)])
            print(f"[DEBUG] Dominant frequency: {dominant_freq:.2f} Hz")

        except Exception as e:
            print(f"[ERROR] Audio analysis failed: {e}")
            return Response({'error': f'Audio analysis failed: {str(e)}'}, status=500)

        VideoPause.objects.create(
            user=user,
            video=video,
            timestamp=timestamp,
            frequency=dominant_freq
        )

        print("[DEBUG] VideoPause saved to database")

        return Response({'message': f'Сохранено. Частота: {dominant_freq:.2f} Гц'}, status=201)


@method_decorator(csrf_exempt, name='dispatch')
class TodayExerciseView(APIView):
    def get(self, request):
        user_id = request.session.get('user_id')
        user = UserParticipant.objects.get(id=user_id)

        if not user.first_entry_at:
            return Response({'error': 'Missing entry date'}, status=400)

        day = (now() - user.first_entry_at).days + 1
        if day > user.study_days:
            return Response({'message': 'Study completed'}, status=200)

        group = 'A' if day <= 5 else 'B'

        last_pause = user.pauses.order_by('-created_at').first()
        if not last_pause:
            return Response({'error': 'Нет данных о паузе'}, status=404)

        # Найти видео по таймкоду
        exercise = ExerciseVideo.objects.filter(
            group=group,
            min_timestamp__lte=last_pause.timestamp,
            max_timestamp__gte=last_pause.timestamp
        ).first()

        if not exercise:
            return Response({'error': 'Нет подходящего упражнения'}, status=404)

        return Response({
            'day': day,
            'group': group,
            'timestamp': last_pause.timestamp,
            'exercise': {
                'title': exercise.title,
                'url': request.build_absolute_uri(exercise.file.url),
            }
        })