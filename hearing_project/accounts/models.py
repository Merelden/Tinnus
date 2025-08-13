import uuid
from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class UserParticipant(models.Model):
    external_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  
    full_name = models.CharField(max_length=255, blank=True)
    age = models.PositiveIntegerField(null=True, blank=True)
    agreed = models.BooleanField(default=False)
    first_entry_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    study_days = models.PositiveIntegerField(default=30, choices=[(15, '15 дней'), (30, '30 дней')])


    def __str__(self):
        return self.full_name or f"User {self.external_id}"

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)


class FeedbackResponse(models.Model):
    user = models.ForeignKey('UserParticipant', on_delete=models.CASCADE, related_name='feedbacks')
    video_id = models.PositiveIntegerField()
    paused_time = models.FloatField(help_text='Время, на котором пользователь поставил паузу')
    feedback_text = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feedback от {self.user.email} на видео {self.video_id} ({self.paused_time:.1f} сек)"