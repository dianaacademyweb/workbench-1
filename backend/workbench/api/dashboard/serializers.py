from rest_framework import serializers
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from api.dashboard.models import Organization
from rest_framework.exceptions import ValidationError


class ProfileSerializer(serializers.ModelSerializer):
    name =    serializers.CharField(max_length=255, required=True)
    contact = serializers.CharField(max_length =100)
    webiste = serializers.CharField(max_length=100)
    address = serializers.CharField(max_length =150)
    

    class Meta:
        model =Organization
        fields =["id","name", "contact","website", "address", ]
        
        
    def create(self, validated_data):

        return Organization.objects.create_user(**validated_data)
        
        
        
    