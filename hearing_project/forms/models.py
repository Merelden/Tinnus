from django.db import models
from accounts.models import UserParticipant


class FormGroup(models.Model):
    title = models.CharField("Название группы форм", max_length=255)

    def __str__(self):
        return self.title


class Form(models.Model):
    title = models.CharField("Название формы", max_length=255)
    group = models.ForeignKey(FormGroup, related_name='forms', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.title


class FormField(models.Model):
    FIELD_TYPES = [
        ('text', 'Текстовое поле'),
        ('textarea', 'Многострочный текст'),
        ('select', 'Выпадающий список'),
        ('checkbox', 'Флажки (множественный выбор)'),
        ('radio', 'Радиокнопки (одиночный выбор)'),
    ]

    form = models.ForeignKey(Form, related_name='fields', on_delete=models.CASCADE)
    label = models.CharField("Надпись", max_length=255)
    field_type = models.CharField("Тип поля", max_length=20, choices=FIELD_TYPES)
    required = models.BooleanField("Обязательное", default=False)
    options = models.TextField(
        "Опции (для select / checkbox / radio)",
        blank=True,
        help_text="Через запятую: вариант 1, вариант 2, ..."
    )
    order = models.PositiveIntegerField("Порядок", default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.label


class FormResponse(models.Model):
    user = models.ForeignKey(UserParticipant, on_delete=models.CASCADE)
    form = models.ForeignKey(Form, on_delete=models.CASCADE)
    full_name = models.CharField("ФИО", max_length=255)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.form.title}"


class FormFieldResponse(models.Model):
    response = models.ForeignKey(FormResponse, related_name='answers', on_delete=models.CASCADE)
    field = models.ForeignKey(FormField, on_delete=models.CASCADE)
    answer = models.TextField("Ответ")


class FormGroupExport(models.Model):
    user = models.ForeignKey(UserParticipant, on_delete=models.CASCADE)
    group = models.ForeignKey(FormGroup, on_delete=models.CASCADE)
    file = models.FileField(upload_to='exports/')
    created_at = models.DateTimeField(auto_now_add=True)
