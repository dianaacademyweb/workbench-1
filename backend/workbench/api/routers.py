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



urlpatterns = [
    *router.urls,
]
