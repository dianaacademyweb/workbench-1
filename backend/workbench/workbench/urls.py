
from django.urls import path, include
from django.contrib import admin
from api.dashboard.viewset import ProjectAPIView , EmployeeViewSet , EmployeListAPIView , BoardlistApi,ProjectListAPIView,boardwisetask
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("api/users/", include(("api.routers", "api"), namespace="api")),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
  
    path('api/dashboard/employelist/<int:id>/', EmployeListAPIView.as_view(), name = 'employe' ),  
    path('api/dashboard/boardlist/<int:id>/', BoardlistApi.as_view(), name = 'board' ),
    path('api/dashboard/Projectlist/<int:id>/', ProjectListAPIView.as_view(), name = 'projectlist' ),
    path('api/dashboard/<int:organization_id>/board/<int:board_id>/tasks/',  boardwisetask.as_view(), name = 'boardwisetask' ),
    
   

    
    
    

    
    path('admin/', admin.site.urls),
]
 