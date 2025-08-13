from django.contrib import admin
from django.http import HttpResponse
import csv
from .models import UserParticipant, FeedbackResponse


@admin.register(UserParticipant)
class UserParticipantAdmin(admin.ModelAdmin):
    list_display = ('external_id', 'email', 'full_name', 'age', 'agreed', 'created_at')
    search_fields = ('email', 'full_name')
    list_filter = ('agreed', 'created_at')
    actions = ['export_user_full_data_csv', 'export_all_users_data']

    def export_user_full_data_csv(self, request, queryset):
        if queryset.count() != 1:
            self.message_user(request, "Выберите только одного пользователя", level='error')
            return

        return self._generate_csv_response([queryset.first()], filename_prefix="user")

    export_user_full_data_csv.short_description = "📥 Скачать все данные пользователя в CSV"

    def export_all_users_data(self, request, queryset):
        return self._generate_csv_response(queryset, filename_prefix="all_users")

    export_all_users_data.short_description = "📥 Скачать данные выбранных пользователей"

    def _generate_csv_response(self, users, filename_prefix):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = f'attachment; filename="{filename_prefix}_full_data.csv"'
        writer = csv.writer(response)

        for user in users:
            writer.writerow(['User ID', 'Email', 'Full Name', 'Age', 'Agreed', 'Created At', 'First Entry'])
            writer.writerow([
                user.id,
                user.email,
                user.full_name,
                user.age,
                'Yes' if user.agreed else 'No',
                user.created_at.strftime('%Y-%m-%d %H:%M'),
                user.first_entry_at.strftime('%Y-%m-%d %H:%M') if user.first_entry_at else '',
            ])

            writer.writerow([])
            writer.writerow(['--- Form Responses ---'])
            for form_response in user.formresponse_set.select_related('form').all():
                writer.writerow(['Form:', form_response.form.title, 'Submitted:', form_response.submitted_at])
                for answer in form_response.answers.select_related('field').all():
                    writer.writerow(['  ', answer.field.label, '→', answer.answer])

            writer.writerow([])
            writer.writerow(['--- Video Pauses ---'])
            for pause in user.pauses.select_related('video').all():
                writer.writerow(['Video:', pause.video.title, 'Time:', pause.timestamp, 'Hz:', pause.frequency, 'At:', pause.created_at])

            writer.writerow([])
            writer.writerow(['--- FormGroup Exports ---'])
            for export in user.formgroupexport_set.select_related('group').all():
                writer.writerow(['Group:', export.group.title, 'Export File:', export.file.name, 'Date:', export.created_at])

            writer.writerow([])

        return response



@admin.register(FeedbackResponse)
class FeedbackResponseAdmin(admin.ModelAdmin):
    list_display = ('user', 'video_id', 'paused_time', 'created_at')
    search_fields = ('user__email', 'feedback_text')
    list_filter = ('created_at',)