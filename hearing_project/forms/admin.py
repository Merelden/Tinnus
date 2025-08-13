from django.contrib import admin
from .models import Form, FormField, FormResponse, FormFieldResponse, FormGroup
from django.forms.models import BaseInlineFormSet
from django.db import models


class FormInline(admin.TabularInline):
    model = Form
    extra = 0
    show_change_link = True
    fields = ['title']
    readonly_fields = ['title']
    can_delete = False


@admin.register(FormGroup)
class FormGroupAdmin(admin.ModelAdmin):
    list_display = ['id', 'title']
    inlines = [FormInline]
    search_fields = ['title']


class FormFieldInlineFormSet(BaseInlineFormSet):
    def save_new(self, form, commit=True):
        instance = super().save_new(form, commit=False)

        max_order = FormField.objects.filter(form=instance.form).aggregate(
            models.Max('order')
        )['order__max'] or 0

        if instance.order == 0:
            instance.order = max_order + 1

        if commit:
            instance.save()
        return instance


class FormFieldInline(admin.TabularInline):
    model = FormField
    formset = FormFieldInlineFormSet
    extra = 1
    fields = ['label', 'field_type', 'required', 'options', 'order']
    verbose_name = "Поле формы"
    verbose_name_plural = "Поля формы"


@admin.register(Form)
class FormAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'group']
    inlines = [FormFieldInline]
    search_fields = ['title']
    list_filter = ['group']


@admin.register(FormField)
class FormFieldAdmin(admin.ModelAdmin):
    list_display = ['label', 'field_type', 'form', 'required', 'order']
    list_filter = ['field_type', 'required']
    search_fields = ['label', 'form__title']


class FormFieldResponseInline(admin.TabularInline):
    model = FormFieldResponse
    extra = 0
    readonly_fields = ['field', 'answer']
    can_delete = False


@admin.register(FormResponse)
class FormResponseAdmin(admin.ModelAdmin):
    list_display = ['id', 'form', 'user', 'full_name', 'submitted_at']
    list_filter = ['form']
    search_fields = ['full_name', 'user__email']
    inlines = [FormFieldResponseInline]
    readonly_fields = ['user', 'form', 'full_name', 'submitted_at']


@admin.register(FormFieldResponse)
class FormFieldResponseAdmin(admin.ModelAdmin):
    list_display = ['get_form_title', 'get_field_label', 'answer']
    list_filter = ['field__form']
    search_fields = ['answer', 'field__label', 'field__form__title']

    def get_field_label(self, obj):
        return obj.field.label
    get_field_label.short_description = 'Вопрос'

    def get_form_title(self, obj):
        return obj.field.form.title
    get_form_title.short_description = 'Форма'
