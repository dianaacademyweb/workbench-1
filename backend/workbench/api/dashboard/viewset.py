from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.status import HTTP_401_UNAUTHORIZED
from api.dashboard.serializers import  ProfileSerializer
from api.dashboard.models import Organization
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView
from rest_framework.permissions import BasePermission
from .models import Project, Employe
from .serializers import ProjectSerializer , EmployeSerializer
from rest_framework import generics

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
    queryset = Organization.objects.all()
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
        
class OrganizationAPIView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes =[IsOrganizationPermission]
    def get(self, request):
        
        organizations = Organization.objects.all()
        serializer = ProfileSerializer(organizations, many=True, fields=('name', 'email', 'website'))
        return Response(serializer.data)         
        
        
class ProjectAPIView(generics.ListAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes =[IsOrganizationPermission]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
    
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employe.objects.all()
    serializer_class = EmployeSerializer
    
    # def create_user(self , email, username, user_type , password = None, **Kwargs ):
    #     if password is None:
    #         raise TypeError("Superusers must have a password.")
    #     if username is None:
    #         raise TypeError("Users must have a username.")
    #     if email is None:
    #         raise TypeError("Users must have an email.")
    #     user = self.model(username=username, user_type=user_type, email=self.normalize_email(email))
    #     user.set_password(password)
    #     user.save(using=self._db)
        
    #     return user

        
        
        
    
    
    
    
    
     
    
            
                
        
        
        
        

    
         