from rest_framework import serializers
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from .models import Project , Employe , Board ,Task,Project_Employee_Linker, MonitoringDetails, Profile, ImageModel
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
        
class monitoringdetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonitoringDetails 
        fields = '__all__'              
        
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'       
        
# class ImageModelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ImageModel
#         fields ='__all__'  
        
        
class ImageModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageModel
        fields = ('id', 'organization_id', 'image')  
        
        
# class TaskdetailsSerializer(serializers.ModelSerializer):
#     task_name = serializers.CharField(read_only=True)
#     task_desc = serializers.CharField(read_only=True)
#     task_assign_date = serializers.CharField(read_only=True)
#     task_deadline_date = serializers.CharField(read_only=True)
#     task_update_date = serializers.CharField(read_only=True)
#     task_status = serializers.CharField(read_only=True)
#     employee_name = serializers.CharField(read_only=True)
#     project_name = serializers.CharField(read_only=True)
#     board_name = serializers.CharField(read_only=True)
    
#     class Meta:
#         fields = ['task_name', 'task_desc', 'task_assign_date','task_deadline_date', 'task_update_date','task_status','employee_name','project_name', 'board_name'  ]                   
    
        
        
        

        
        
    