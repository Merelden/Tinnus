from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import Participant, Progress, Test, Exercise, Question, QuestionOption
from django.contrib.auth.models import User

@admin.register(Participant)
class ParticipantAdmin(ModelAdmin):
    list_display = ('full_name', 'email', 'age', 'phone', 'study_group', 'created_at')
    list_filter = ('study_group',)
    search_fields = ('full_name', 'email', 'user__email')
    readonly_fields = ('created_at',)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "user":
            kwargs["queryset"] = User.objects.filter(is_superuser=False)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

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


class QuestionOptionInline(admin.TabularInline):
    model = QuestionOption
    extra = 1


@admin.register(Question)
class QuestionAdmin(ModelAdmin):
    list_display = ('id', 'text', 'type')
    search_fields = ('text',)
    list_filter = ('type',)
    inlines = [QuestionOptionInline]