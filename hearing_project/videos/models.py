from django.db import models
from accounts.models import UserParticipant
from forms.models import Form 

class Video(models.Model):
    title = models.CharField("Название видео", max_length=255)
    file = models.FileField("Видеофайл", upload_to='videos/')
    form = models.ForeignKey(Form, on_delete=models.CASCADE, null=True, blank=True, related_name='videos')  

    def __str__(self):
        return self.title


class VideoPause(models.Model):
    user = models.ForeignKey(UserParticipant, on_delete=models.CASCADE, related_name='pauses')
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name='pauses')
    timestamp = models.FloatField("Время паузы в секундах")
    created_at = models.DateTimeField(auto_now_add=True)
    frequency = models.FloatField("Основная частота (Hz)", null=True, blank=True)


    def __str__(self):
        return f"{self.user.full_name} paused at {self.timestamp}s"

class ExerciseVideo(models.Model):
    GROUP_CHOICES = [
        ('A', 'До 5 дня'),
        ('B', 'С 6 по 30 день'),
    ]

    group = models.CharField(max_length=1, choices=GROUP_CHOICES)
    min_timestamp = models.FloatField("Минимальное значение таймкода (сек)")
    max_timestamp = models.FloatField("Максимальное значение таймкода (сек)")
    file = models.FileField("Видео упражнения", upload_to="exercises/")
    title = models.CharField("Название", max_length=255)

    def __str__(self):
        return f"{self.get_group_display()} [{self.min_timestamp}-{self.max_timestamp}]"