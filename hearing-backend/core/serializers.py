from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Participant

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    class Meta:
        model = User
        fields = ['email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

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
        extra_kwargs = {'study_group': {'read_only': True}}

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = UserSerializer().create(user_data)
        participant = Participant.objects.create(
            user=user,
            full_name=validated_data['full_name'],
            age=validated_data['age'],
            phone=validated_data['phone'],
            email=user_data['email']
        )
        return participant