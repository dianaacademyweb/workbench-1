from rest_framework import serializers
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from .models import Project , Employe , Board ,Task,Project_Employee_Linker
from api.user.models import User


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model =User
        fields =[ "id", "Organization_Email","name", "contact", "website", "address",  ]
        
class ProjectSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Project
        fields = '__all__'        
    
    
class EmployeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employe
        fields = '__all__'
        
class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model =Board
        fields ='__all__'      
        
        
class TaskSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Task
        fields ='__all__'   
        
        
class ProjectlinkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project_Employee_Linker
        fields = '__all__'               
        
    
        
        
        

        
        
    