from rest_framework import serializers
from .models import Form, FormField, FormGroup


class FormFieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormField
        fields = ['id', 'label', 'field_type', 'required', 'options', 'order']


class FormSerializer(serializers.ModelSerializer):
    fields = FormFieldSerializer(many=True, read_only=True)

    class Meta:
        model = Form
        fields = ['id', 'title', 'fields']

class FormGroupSerializer(serializers.ModelSerializer):
    forms = FormSerializer(many=True, read_only=True)

    class Meta:
        model = FormGroup
        fields = ['id', 'title', 'forms']  


class FieldAnswerSerializer(serializers.Serializer):
    field_id = serializers.IntegerField()
    answer = serializers.CharField()


class FormResponseSerializer(serializers.Serializer):
    form_id = serializers.IntegerField()
    full_name = serializers.CharField()
    responses = FieldAnswerSerializer(many=True)
