from rest_framework import serializers
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from api.dashboard.models import Organization
from rest_framework.exceptions import ValidationError
from .models import Project , Employe


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model =Organization
        fields =[ "id", "Organization_Email","name", "contact", "website", "address",  ]
        
class ProjectSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Project
        fields = '__all__'        
    
    
class EmployeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employe
        fields = '__all__'
        
    
        
        
        

        
        
    