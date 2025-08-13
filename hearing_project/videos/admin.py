from django.contrib import admin
from .models import Video, VideoPause, ExerciseVideo

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'form']
    search_fields = ['title']
    list_filter = ['form']
    ordering = ['id']


@admin.register(VideoPause)
class VideoPauseAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'video', 'timestamp', 'created_at']
    list_filter = ['video']
    search_fields = ['user__full_name', 'video__title']
    ordering = ['-created_at']
    readonly_fields = ['created_at']


@admin.register(ExerciseVideo)
class ExerciseVideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'group', 'min_timestamp', 'max_timestamp')
    list_filter = ('group',)