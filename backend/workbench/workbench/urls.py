
from django.urls import path, include
from django.contrib import admin
from api.dashboard.viewset import ProjectAPIView , EmployeeViewSet , EmployeListAPIView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("api/users/", include(("api.routers", "api"), namespace="api")),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/dashboard/projects', ProjectAPIView.as_view(), name = 'projects' ),
    path('api/dashboard/employelist', EmployeListAPIView.as_view(), name = 'projects' ),
    path('admin/', admin.site.urls),
]
 