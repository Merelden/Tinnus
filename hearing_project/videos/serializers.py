from rest_framework import serializers
from .models import Video, VideoPause

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'title', 'file', 'form']

class VideoTimestampSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoPause
        fields = ['video', 'timestamp', 'frequency']
        read_only_fields = ['frequency']

