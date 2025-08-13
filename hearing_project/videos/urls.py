# videos/urls.py
from django.urls import path
from .views import VideoListCreateAPIView, SaveVideoPauseView, TodayExerciseView

urlpatterns = [
    path('', VideoListCreateAPIView.as_view(), name='video-list-create'),
    path('save-timestamp/', SaveVideoPauseView.as_view(), name='save-timestamp'),
    path('exercise/today/', TodayExerciseView.as_view(), name='today-exercise'),


]
