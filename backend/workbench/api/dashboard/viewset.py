from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated , IsAdminUser
from rest_framework import viewsets, status
from rest_framework.status import HTTP_401_UNAUTHORIZED
from api.dashboard.serializers import  ProfileSerializer
from api.dashboard.models import Organization
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView
from rest_framework.permissions import BasePermission
from .models import Project
from .serializers import ProjectSerializer
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
    
            
                
        
        
        
        

    
         