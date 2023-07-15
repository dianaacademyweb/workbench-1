from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.status import HTTP_401_UNAUTHORIZED
from api.dashboard.serializers import  ProfileSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView
from rest_framework.permissions import BasePermission
from .models import Project, Employe, Board,Task, Project_Employee_Linker, MonitoringDetails, Profile, ImageModel, Team, screenshotsModel,AttendanceLogs
from .serializers import ProjectSerializer , EmployeSerializer ,BoardSerializer, TaskSerializer, ProjectlinkerSerializer, monitoringdetailSerializer, ProfileSerializer, ImageModelSerializer , TeamSerializer,Screenshotserilizer, AttendanceSerilizer
from rest_framework import generics
from api.user.serializers import RegisterSerializer

from django.core.mail import send_mail
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from datetime import datetime



from api.user.models import User

class IsEmployeePermission(BasePermission):
    def has_permission(self, request, view):
        user = request.user
        return user.is_authenticated and user.user_type == 'employee'
    
class IsOrganizationPermission(BasePermission):
    def has_permission(self, request, view):
        user = request.user
        return user.is_authenticated and user.user_type == 'organization'    

class ProfileViewSet(viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes =[IsOrganizationPermission]
    queryset = User.objects.all()
    http_method_names = ["post"]
    serializer_class = ProfileSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        self.perform_create(serializer)
        Organization_id  = serializer.data.get("id")
        return Response({
            "success": True,
            "userID": Organization_id,
            "msg": "The user was successfully registered",
        
        }, 
            status=status.HTTP_201_CREATED
        )
    
        
class ProjectAPIView(viewsets.ModelViewSet):
    # authentication_classes = [JWTAuthentication]
    # permission_classes =[IsOrganizationPermission]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
class ProjectListAPIView(APIView):
     def get(self ,request , id , formate =None):
        queryset = Project.objects.filter(organization_id = id )
        serializer = ProjectSerializer(queryset, many = True)
        return Response(serializer.data)    
    
class EmployeeCreateAPIView(viewsets.ModelViewSet):
    http_method_names = ["post"]
    authentication_classes = [JWTAuthentication]
    # permission_classes =[IsOrganizationPermission]
    

    serializer_class = EmployeSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        employe  = serializer.save()
        
        # token = RefreshToken.for_user(employe).access_token
        # relative_link = reverse('email-verify')
        # abs_url = 'http://' + get_current_site(request).domain + relative_link + '?token=' + str(token)

        # # Send verification email
        # email_subject = 'Verify your email'
        # email_body = f'Hi {employe.username},\nPlease use the link below to verify your email:\n{abs_url}'
        # send_mail(email_subject, email_body, 'ashishrohilla510@gmail.com', [employe.email], fail_silently=False,)

        return Response(
            {
                "success": True,
                "msg": "employee created succesfully",
                "data": serializer.data
            },
            status=status.HTTP_201_CREATED,
        ) 
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    # def create(self, request, format=None, *args ,**kwargs):
    #     user_serializer = RegisterSerializer(data=request.data)  # Assuming you have a UserSerializer for creating users
    #     employee_serializer = EmployeSerializer(data=request.data)
    #     if user_serializer.is_valid() and employee_serializer.is_valid():
    #        user = user_serializer.save()  # Save the user instance
    #        employee = employee_serializer.save()  # Associate the user with the employee instance
    #        return Response(employee_serializer.data, status=status.HTTP_201_CREATED)

    #     return Response(employee_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# class EmployeListAPIView(APIView):
#     # authentication_classes = [JWTAuthentication]
#     # permission_classes =[IsOrganizationPermission]
#     def get(self , request, id,  format=None ):
#         # queryset = Employe.objects.all()
#         # emp_details = Employe.objects.filter(id = Organization_id)
#         queryset = Employe.objects.filter(organization_id = id )
#         # print(emp_details.query)
#         serializer = EmployeSerializer(queryset, many = True)
#         return Response(serializer.data)


class EmployeListAPIView(APIView):
    
    
    
    def get(self , request, id,  format=None ):
        employe = Employe.objects.filter(organization_id = id)
        employe_data =[]
        for employes in employe:
            user = User.objects.get(username =employes.username)
            
            
            data ={
                'id':employes.id,
                'username':employes.username,
                'e_addres':employes.e_address,
                'employeid':user.id,
                'e_contact':employes.e_contact,
                'e_address':employes.e_address,
                'email':employes.email,
            }
            
            
            employe_data.append(data)
        
        response_data = {
            'employes': employe_data,
            'msg':'employes retrieved succesfully',
        }  
        
        return Response(response_data)  
            
        
        
    
    
    
    
    
    
class BoardCreateAPIViewset(viewsets.ModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
    
    
    
class BoardlistApi(APIView):
    def get(self ,request , id , formate =None):
        queryset = Board.objects.filter(orgnisation_id = id )
        serializer = BoardSerializer(queryset, many = True)
        return Response(serializer.data)
    
    
    
    
class TaskCreateAPIViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class =TaskSerializer
    
class boardwisetask(APIView):
    def get(self, request, organization_id, board_id, formate =None ):
        organization_id = self.kwargs['organization_id']
        board_id = self.kwargs['board_id'] 
        queryset =  queryset = Task.objects.filter(orgnisation_id=organization_id, board_id=board_id).all()
        serializer = TaskSerializer(queryset, many=True)
        return Response(serializer.data)
    
    
    
class ProjectEmployeLinkViewSet(viewsets.ModelViewSet):
    # authentication_classes = [JWTAuthentication]
    # permission_classes =[IsOrganizationPermission]
    queryset = Project_Employee_Linker.objects.all()
    serializer_class = ProjectlinkerSerializer
    
    
class MonitoringViewSet(viewsets.ModelViewSet):
    # authentication_classes = [JWTAuthentication]
    # permission_classes =[IsOrganizationPermission]
    queryset = MonitoringDetails.objects.all()
    serializer_class = monitoringdetailSerializer   
    
    
class employewiseMonitoring(APIView):
    def get(self, request, organization_id, e_id, formate =None ):
        organization_id = self.kwargs['organization_id']
        e_id = self.kwargs['e_id'] 
        queryset =  queryset = MonitoringDetails.objects.filter(orgnisation_id=organization_id, e_id =e_id).all()
        serializer = monitoringdetailSerializer(queryset, many=True)
        return Response(serializer.data)   
    
    
    
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer     
    
    
# class ImageUploadView(viewsets.ModelViewSet):
#     queryset = ImageModel.objects.all()
#     serializer_class = ImageModelSerializer


# class ImageUploadView(APIView):
#     def post(self, request, format=None):
#         file_obj = request.FILES['image']
#         # Do something with the file, such as saving it to the model

#         return Response({'message': 'Image uploaded successfully'})  

class ImageUploadView(viewsets.ModelViewSet):
    queryset = ImageModel.objects.all()
    serializer_class = ImageModelSerializer
    filterset_fields = ['organization_id']
    
    
class Seeimage(APIView):
    def get(self ,request , id , formate =None):
        queryset = ImageModel.objects.filter(organization_id = id )
        serializer = ImageModelSerializer(queryset, many = True)
        return Response(serializer.data)    
    
    
class Seeprofile(APIView):
    def get(self ,request , id , formate =None):
        queryset = Profile.objects.filter(organization_id = id )
        serializer = ProfileSerializer(queryset, many = True)
        return Response(serializer.data)    
        
        
        
        
        
# class TaskdetailsViews(APIView):
    
#     def get(self, request, organization_id, formate =None ):
#         organization_id = self.kwargs['organization_id'] 
#         task  = Task.objects.get(orgnisation_id=organization_id)
#         projectid = task.project_id
#         employeid = task.employe_id
#         boardid = task.board_id
#         employer = Employe.objects.get(id=employeid.id)
#         projects = Project.objects.get(id=projectid.id)
#         boards = Board.objects.get(id=boardid.id)
#         data = {
#             'task_name': task.task_name,
#             'task_desc': task.task_desc,
#             'task_assign_date': task.task_assign_date,
#             'task_deadline_date': task.task_deadline_date,
#             'task_update_date': task.task_update_date,
#             'task_status': task.task_status,
#             'project_name': projects.project_name,
#             'employee_name': employer.e_name,
#             'board_name': boards.board_name,
#             "msg": "The user details are as",
#         }
    
        
#         return Response(data,
#                             status=status.HTTP_201_CREATED,
#                         )    
        
class TaskdetailsViews(APIView):    
    def get(self, request, organization_id, format=None):
        tasks = Task.objects.filter(orgnisation_id=organization_id)
        task_data = []
        
        for task in tasks:
            project = Project.objects.get(id=task.project_id.id)
            employee = Employe.objects.get(id=task.employe_id.id)
            board = Board.objects.get(id=task.board_id.id)
            
            data = {
                'task_name': task.task_name,
                'task_desc': task.task_desc,
                'task_assign_date': task.task_assign_date,
                'task_deadline_date': task.task_deadline_date,
                'task_update_date': task.task_update_date,
                'task_status': task.task_status,
                'project_name': project.project_name,
                'employee_name': employee.username,
                'board_name': board.board_name,
            }
            
            task_data.append(data)
        
        response_data = {
            'tasks': task_data,
            'msg': 'Task details retrieved successfully.',
        }
        
        return Response(response_data)    
    
    
    
    
class TeamsViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer      
    
 
 
 
class Seeteams(APIView):    
    def get(self, request, organization_id, format=None):
        teams = Team.objects.filter(organization_id=organization_id)
        teams_data = []
        
        for teams in teams:
            board = Board.objects.get(id=teams.board_id.id)
            
            data = {
                'team_name': teams.team_name,
                'team_desc': teams.team_desc,
                'board_name': board.board_name,
            }
            
            teams_data.append(data)
        
        response_data = {
            'tasks': teams_data,
            'msg': 'Teams details retrieved successfully.',
        }
        
        return Response(response_data)    
 
 
 
 
 
 
 
 
 
    
    
class boardwiseteams(APIView):
    def get(self, request, organization_id, board_id, formate =None ):
        organization_id = self.kwargs['organization_id']
        board_id = self.kwargs['board_id'] 
        queryset =  queryset = Team.objects.filter(organization_id=organization_id, board_id=board_id).all()
        serializer = TeamSerializer(queryset, many=True)
        return Response(serializer.data)   
    
    
    
    

class TeamlistApi(APIView):
    def get(self ,request , id , formate =None):
        queryset = Team.objects.filter(organization_id = id )
        serializer = TeamSerializer(queryset, many = True)
        return Response(serializer.data) 
    
    
    
    
class screenshotsViewset(viewsets.ModelViewSet):
    queryset = screenshotsModel.objects.all()
    serializer_class = Screenshotserilizer
    filterset_fields = ['organization_id']   
    
    
         
class Seescreenshots(APIView):
    def get(self ,request , id , formate =None):
        queryset = screenshotsModel.objects.filter(organization_id = id ).order_by('-id')[:6]
        serializer = Screenshotserilizer(queryset, many = True)
        return Response(serializer.data)   
    
    
    
    
class AttendanceViewset(viewsets.ModelViewSet):
     queryset = AttendanceLogs.objects.all()
     serializer_class =  AttendanceLogs
     
     
     
class Attendancelist(APIView):
    def get(self ,request , id , formate =None):
        queryset = AttendanceLogs.objects.filter(user = id )
        serializer = AttendanceSerilizer(queryset, many = True)
        return Response(serializer.data)   
         
     
     
     
     
 
    
    
             
       
          
    
    
       
        
        
    
    

       
        
        
    
    
    
        
    
    
    
    
    
     
    
            
                
        
        
        
        

    
         