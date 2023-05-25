from api.user.models import User
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from django.core.exceptions import ObjectDoesNotExist

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
    name_field = serializers.CharField(min_length =4, max_length=140)
    contact = serializers.CharField(max_length=255, required=True)
    website = serializers.CharField(max_length=255, required=True)
    addres = serializers.CharField(max_length=255, required=True)
    user_type =serializers.ChoiceField(required=True, choices = USER_TYPE_CHOICES)
    password = serializers.CharField(min_length=4, max_length=128, write_only=True)
    
    
    

    class Meta:
        model = User
        fields = ["id", "username", "email","name_field", "contact","website","addres", "user_type", "password", "is_active", "date"]

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

        
        
        
