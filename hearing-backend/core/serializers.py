from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError
from django.db import transaction, IntegrityError
from .models import Participant, Question, QuestionOption

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    class Meta:
        model = User
        fields = ['email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_email(self, value):
        # Ensure email is unique across both User and Participant
        if User.objects.filter(username=value).exists() or User.objects.filter(email=value).exists() or Participant.objects.filter(email=value).exists():
            raise serializers.ValidationError('Этот email уже занят.')
        return value

    def validate(self, attrs):
        password = attrs.get('password')
        email = attrs.get('email')
        try:
            validate_password(password, user=User(username=email, email=email))
        except DjangoValidationError as e:
            raise serializers.ValidationError({'password': list(e.messages)})
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class ParticipantSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Participant
        fields = ['user', 'full_name', 'age', 'phone', 'study_group']
        extra_kwargs = {'study_group': {'read_only': True}, 'phone': {'required': True, 'allow_blank': False}}

    def validate_phone(self, value):
        if value is None:
            raise serializers.ValidationError('Это поле обязательно.')
        value = value.strip()
        if not value:
            raise serializers.ValidationError('Это поле обязательно.')
        if Participant.objects.filter(phone=value).exists():
            raise serializers.ValidationError('Этот телефон уже занят.')
        return value

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        # Validate and create user first
        with transaction.atomic():
            user_serializer = UserSerializer(data=user_data)
            user_serializer.is_valid(raise_exception=True)
            user = user_serializer.save()
            try:
                participant = Participant.objects.create(
                    user=user,
                    full_name=validated_data['full_name'],
                    age=validated_data['age'],
                    phone=validated_data['phone'].strip(),
                    email=user_data['email']
                )
            except IntegrityError:
                raise serializers.ValidationError({'user': {'email': ['Этот email уже занят.']}})
            except DjangoValidationError as e:
                # Propagate model-level validation (e.g., capacity or balancing limits)
                raise serializers.ValidationError({'study_group': list(e.messages)})
        return participant


class QuestionOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionOption
        fields = ['label']


class QuestionSerializer(serializers.ModelSerializer):
    question = serializers.CharField(source='text')
    input = serializers.CharField(source='input_text', allow_null=True, required=False)
    options = QuestionOptionSerializer(many=True)

    class Meta:
        model = Question
        fields = ['id', 'question', 'type', 'options', 'input']