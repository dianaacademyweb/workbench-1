from api.user.viewsets import RegisterViewSet
from api.dashboard.viewset import (
    ProfileViewSet,
    ProjectAPIView,
    EmployeeCreateAPIView,
    EmployeListAPIView,
    BoardCreateAPIViewset,
    TaskCreateAPIViewSet,
    ProjectEmployeLinkViewSet,
    MonitoringViewSet,
    ProfileViewSet,
    ImageUploadView,
    TeamsViewSet,
    screenshotsViewset,
    AttendanceViewset,
    monitoringviewset,
    logoutviewset,
    desktopfileupload,
    idealtimeviewSet,
    NotificationCreateapi,
    meetingViewset,
    
    
)
from rest_framework import routers
from api.user.viewsets import UserViewSet

router = routers.SimpleRouter(trailing_slash=False)

router.register(r"edit", UserViewSet, basename="user-edit")

router.register(r"register", RegisterViewSet, basename="register")

router.register(r"profile", ProfileViewSet, basename="Profile")
  
  
router.register(r"projects", ProjectAPIView, basename="project")


router.register(r"task", TaskCreateAPIViewSet, basename="task")


router.register(r"createemploye", EmployeeCreateAPIView, basename="create_Employe")

router.register(r"createboard",BoardCreateAPIViewset , basename="create_Employe")

router.register(r"projectlinker",ProjectEmployeLinkViewSet , basename="projectlinker")

router.register(r"Monitoring",MonitoringViewSet , basename="Monitoring")

router.register(r"Profile", ProfileViewSet, basename="Profile")


router.register(r"teams", TeamsViewSet, basename="teams")

router.register(r"imageupload", ImageUploadView, basename="upload")


router.register(r"screenshots", screenshotsViewset, basename="screenshots")

router.register(r"attendance", AttendanceViewset, basename="attendance")

router.register(r"monitorscreen", monitoringviewset, basename="screenmonitor")
\
router.register(r"loggingout", logoutviewset, basename="loggingout")

router.register(r"desktopapp", desktopfileupload, basename="desktoapp")

router.register(r"idealtime", idealtimeviewSet, basename="ideltime")

router.register(r"notification", NotificationCreateapi, basename="notification")


router.register(r"meeting", meetingViewset, basename="meeting")








urlpatterns = [
    *router.urls,
]
