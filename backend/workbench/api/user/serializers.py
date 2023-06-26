from api.user.models import User
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from django.core.exceptions import ObjectDoesNotExist
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import json

import jwt
from django.conf import settings

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, User):
        token = super().get_token(User)

        # Add custom claims
        token['name'] = User.username
        token['type']= User.user_type
        # ...

        return token




class UserSerializer(serializers.ModelSerializer):
    date = serializers.DateTimeField(read_only=True)

    class Meta:
        model = User
        fields = ["id", "username", "email", "user_type","date"]
        read_only_field = ["id"]
        
        

class RegisterSerializer(serializers.ModelSerializer):
    USER_TYPE_CHOICES = (
        ('employee', 'Employee'),
        ('organization', 'Organization'),
    )
    username = serializers.CharField(max_length=255, required=True)
    email = serializers.EmailField(required=True)
    user_type =serializers.ChoiceField(required=True, choices = USER_TYPE_CHOICES)
    password = serializers.CharField(min_length=4, max_length=128, write_only=True)
    

    class Meta:
        model = User
        fields = ["id", "username", "email", "user_type", "password",]

    def validate_username(self, value):
        try:
            User.objects.get(username=value)
        except ObjectDoesNotExist:
            return value
        raise ValidationError({"success": False, "msg": "Username already taken."})

    def validate_email(self, value):
        try:
            
            User.objects.get(email=value)
        except ObjectDoesNotExist:
            return value
        raise ValidationError({"success": False, "msg": "Email already taken."})

    def create(self, validated_data):
        
        return User.objects.create_user(**validated_data)        






class EmailVerificationSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=555)

    def verify_email(self, token):
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(id=payload['user_id'])
            if not user.is_active:
                user.is_active = True
                user.save()
            return user
        except jwt.ExpiredSignatureError:
            raise serializers.ValidationError('Verification link has expired.')
        except jwt.DecodeError:
            raise serializers.ValidationError('Invalid token.')
        except User.DoesNotExist:
            raise serializers.ValidationError('User with this token does not exist.')

    def validate(self, data):
        token = data['token']
        user = self.verify_email(token)
        return user
        
        
        
