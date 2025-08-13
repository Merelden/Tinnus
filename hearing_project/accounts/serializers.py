from rest_framework import serializers
from .models import FeedbackResponse

class FeedbackResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackResponse
        fields = ['id', 'user', 'video_id', 'paused_time', 'feedback_text', 'created_at']
        read_only_fields = ['id', 'created_at']
