from rest_framework import serializers
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from django.core.exceptions import ObjectDoesNotExist
from .models import Project , Employe , Board ,Task,Project_Employee_Linker, MonitoringDetails, Profile, ImageModel, Team, screenshotsModel,AttendanceLogs,Monitoring, logginout, desktopfile,ideltime, Notification, Meeting
from api.user.models import User
from django.core.mail import send_mail


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model =User
        fields =[ "id", "Organization_Email","name", "contact", "website", "address",  ]
        
class ProjectSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Project
        fields = '__all__'        
    
    
class EmployeSerializer(serializers.ModelSerializer):
    organization_id = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    username = serializers.CharField(max_length=255, required=True)
    email = serializers.EmailField(required=True)
    password =serializers.CharField(required=True, )
    e_gender = serializers.CharField(max_length=255, )
    e_contact = serializers.CharField(max_length=255, )
    e_address = serializers.CharField(max_length=255, )
    

    class Meta:
        model = Employe
        fields = ["id", "organization_id" ,"username", "email", "password", "e_gender", "e_contact" ,"e_address"]

    def validate_username(self, value):
        try:
            Employe.objects.get(username=value)
        except ObjectDoesNotExist:
            return value
        raise ValidationError({"success": False, "msg": "Username already taken."})

    def validate_email(self, value):
        try:
            
            Employe.objects.get(email=value)
        except ObjectDoesNotExist:
            return value
        raise ValidationError({"success": False, "msg": "Email already taken."})
 
    def create(self, validated_data):
        organization_id = validated_data.get("organization_id")
        username = validated_data.get("username")
        email = validated_data.get("email")
        password = validated_data.get("password")
        e_gender = validated_data.get("e_gender")
        e_contact = validated_data.get("e_contact")
        e_address = validated_data.get("e_address")
        
        
        
        # creating user instance
        user = User.objects.create_user(username=username, email=email, user_type="employe", password=password)
         
        
        # creating employe insatnce
        
        
        employe = Employe.objects.create( organization_id =organization_id,  users=user,  username=username, email=email, password=password, e_gender=e_gender, e_contact=e_contact, e_address=e_address)
        
        
        email_subject = 'here your credential'
        email_body = f'Hi {employe.username},\nPlease use the link below to verify your email:\n  your email :-{employe.email}\n your username :- {employe.username}\n your password:-{employe.password}\n '
        send_mail(email_subject, email_body, 'dianaacademyweb@gmail.com', [employe.email], fail_silently=False,)
        
        
        
        return employe
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
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
        
        
class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'       
        
        
class MeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = '__all__'       
                        
                
        
        
        
        
        
        
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
    
        
class Screenshotserilizer(serializers.ModelSerializer):
    class Meta:
        model = screenshotsModel
        fields = '__all__' 
        
class AttendanceSerilizer(serializers.ModelSerializer):
    class Meta:
        model = AttendanceLogs
        fields = '__all__'      
        
class logoutserializer(serializers.ModelSerializer):
    class Meta:
        model = logginout
        fields = '__all__'           
        
        
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'              
        
        
class monitoringserializer(serializers.ModelSerializer):
    class Meta:
        model = Monitoring
        fields = '__all__' 
        
class DesktopFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = desktopfile
        fields = '__all__'        
                        
        
class ideltimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ideltime
        fields = '__all__'        
                        
        
        
    