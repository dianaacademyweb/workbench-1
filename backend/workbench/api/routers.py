from api.user.viewsets import RegisterViewSet
from api.dashboard.viewset import (
    ProfileViewSet,
    ProjectAPIView,
    EmployeeViewSet
)
from rest_framework import routers
from api.user.viewsets import UserViewSet

router = routers.SimpleRouter(trailing_slash=False)

router.register(r"edit", UserViewSet, basename="user-edit")

router.register(r"register", RegisterViewSet, basename="register")

router.register(r"profile", ProfileViewSet, basename="Profile")

router.register(r"employe", EmployeeViewSet, basename="Profile")

# router.register(r"Project", ProjectAPIView, basename="Profile")

urlpatterns = [
    *router.urls,
]
