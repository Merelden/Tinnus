from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
import random

class Participant(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, blank=True)
    study_group = models.IntegerField(choices=[(15, '15 days'), (30, '30 days')])
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.pk:
            # Enforce max 100 participants and balanced 50/50 groups
            total = Participant.objects.count()
            if total >= 100:
                raise ValidationError('Достигнут лимит участников (100).')
            count15 = Participant.objects.filter(study_group=15).count()
            count30 = Participant.objects.filter(study_group=30).count()
            available = []
            if count15 < 50:
                available.append(15)
            if count30 < 50:
                available.append(30)
            if not available:
                # Fallback safety; should not happen when total < 100
                available = [15, 30]
            self.study_group = random.choice(available)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.full_name

class Progress(models.Model):
    participant = models.ForeignKey(Participant, on_delete=models.CASCADE)
    day = models.PositiveIntegerField()
    test_completed = models.BooleanField(default=False)
    diagnostic_completed = models.BooleanField(default=False)
    exercise_completed = models.BooleanField(default=False)
    exercise_timecode = models.FloatField(null=True, blank=True)
    completed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['participant', 'day']

    def __str__(self):
        return f"{self.participant.full_name} - Day {self.day}"

class Test(models.Model):
    participant = models.ForeignKey(Participant, on_delete=models.CASCADE)
    day = models.PositiveIntegerField()
    answers = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Test for {self.participant.full_name} on day {self.day}"

class Exercise(models.Model):
    name = models.CharField(max_length=100)
    file = models.FileField(upload_to='exercises/')
    timecode = models.FloatField()
    phase = models.CharField(max_length=10, choices=[('early', 'Days 1-5'), ('late', 'Days 6-30')])

    def __str__(self):
        return f"{self.name} (Timecode: {self.timecode})"