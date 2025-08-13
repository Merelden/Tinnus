from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import Participant, Progress, Test, Exercise

@admin.register(Participant)
class ParticipantAdmin(ModelAdmin):
    list_display = ('full_name', 'email', 'age', 'phone', 'study_group', 'consent_agreed', 'created_at')
    list_filter = ('study_group', 'consent_agreed')
    search_fields = ('full_name', 'email')
    readonly_fields = ('created_at',)

@admin.register(Progress)
class ProgressAdmin(ModelAdmin):
    list_display = ('participant', 'day', 'test_completed', 'diagnostic_completed', 'exercise_completed', 'completed_at')
    list_filter = ('day', 'test_completed', 'diagnostic_completed', 'exercise_completed')
    search_fields = ('participant__full_name',)

@admin.register(Test)
class TestAdmin(ModelAdmin):
    list_display = ('participant', 'day', 'created_at')
    list_filter = ('day',)
    search_fields = ('participant__full_name',)

@admin.register(Exercise)
class ExerciseAdmin(ModelAdmin):
    list_display = ('name', 'timecode', 'phase', 'file')
    list_filter = ('phase',)
    search_fields = ('name',)