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

    # Visit tracking
    last_visit_date = models.DateField(null=True, blank=True)
    visit_streak = models.PositiveIntegerField(default=0)
    max_visit_streak = models.PositiveIntegerField(default=0)

    def save(self, *args, **kwargs):
        if not self.pk:

            total = Participant.objects.count()
            remainder = total % 100

            count15 = 0
            count30 = 0
            if remainder > 0:
                group_vals = list(
                    Participant.objects.order_by('-id').values_list('study_group', flat=True)[:remainder]
                )
                count15 = sum(1 for g in group_vals if g == 15)
                count30 = sum(1 for g in group_vals if g == 30)
            available = []
            if count15 < 50:
                available.append(15)
            if count30 < 50:
                available.append(30)
            if not available:
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


class Question(models.Model):
    TYPE_CHOICES = [
        ('single', 'single'),
        ('multiple', 'multiple'),
    ]

    text = models.TextField()
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    input_text = models.TextField(blank=True, null=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return f"[{self.id}] {self.text[:50]}{'...' if len(self.text) > 50 else ''}"


class QuestionOption(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='options')
    label = models.CharField(max_length=255)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.label