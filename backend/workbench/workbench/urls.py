
from django.urls import path, include
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings

from api.dashboard.viewset import ProjectAPIView , EmployeListAPIView , BoardlistApi,ProjectListAPIView,boardwisetask,employewiseMonitoring,Seeimage,Seeprofile,TaskdetailsViews, Seeteams, boardwiseteams, TeamlistApi,Seescreenshots,Attendancelist, screenlist,FileDownloadView,desktop_app_download,idetimellist, employedetails
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
from api.user.viewsets import CustomTokenObtainPairView , CustomTokenRefereshview, EmailVerificationView

urlpatterns = [
    path("api/users/", include(("api.routers", "api"), namespace="api")),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', CustomTokenRefereshview.as_view(), name='token_refresh'),
  
    path('api/dashboard/employelist/<int:id>/', EmployeListAPIView.as_view(), name = 'employe' ),  
    path('api/dashboard/boardlist/<int:id>/', BoardlistApi.as_view(), name = 'board' ),
    path('api/dashboard/Projectlist/<int:id>/', ProjectListAPIView.as_view(), name = 'projectlist' ),
    path('api/dashboard/<int:organization_id>/board/<int:board_id>/tasks/',  boardwisetask.as_view(), name = 'boardwisetask' ),
    path('api/dashboard/<int:organization_id>/monitor/<int:e_id>/details/',  employewiseMonitoring.as_view(), name = 'monitoringdetails' ),
    path('api/dashboard/seeimage/<int:id>/', Seeimage.as_view(), name = 'seeimage' ),
    path('api/dashboard/seeprofile/<int:id>/', Seeprofile.as_view(), name = 'Seeprofile' ),
    path('api/dashboard/taskdetail/<int:organization_id>/', TaskdetailsViews.as_view(), name = 'seeimage' ),
    path('api/dashboard/seeteams/<int:organization_id>/',Seeteams.as_view(), name = 'seeteams' ),
    
    path('api/dashboard/boardwiseteams/<int:organization_id>/board/<int:board_id>/',boardwiseteams.as_view(), name = 'boardwiseteams' ),
    path('api/dashboard/teamlist/<int:id>/', TeamlistApi.as_view(), name = 'teamlist' ),
    path('api/verify-email/', EmailVerificationView.as_view(), name='email-verify'),
    
    path('api/dashboard/Seescreenshots/<int:id>/', Seescreenshots.as_view(), name = 'seeimage' ),
    path('api/dashboard/attendancelist/<int:id>/', Attendancelist.as_view(), name='attendance_list'),
    path('api/dashboard/screenlist/<int:id>/', screenlist.as_view(), name='screenlist'),
    path('api/dashboard/desktopapp/<int:id>/', FileDownloadView.as_view(), name='desktopapp'),
    path('api/dashboard/downloaddesktop/', desktop_app_download, name='desktopdownload'),
    path('api/dashboard/ideltime/<int:id>/', idetimellist.as_view(), name='ideltime'),
    path('api/dashboard/employedetails/<int:id>/', employedetails.as_view(), name='employedetails'),

    path('admin/', admin.site.urls),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

 