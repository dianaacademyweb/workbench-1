from base.api.views import (
    RegisterViewSet,
)
from rest_framework import routers
from base.views import UserViewSet
from base.autentication.views import (
    LoginViewSet,
    LogoutViewSet,
    ActiveSessionViewSet,
    
    
)

router = routers.SimpleRouter(trailing_slash=False)

router.register(r"edit", UserViewSet, basename="user-edit")

router.register(r"register", RegisterViewSet, basename="register")

router.register(r"login", LoginViewSet, basename="login")

router.register(r"checkSession", ActiveSessionViewSet, basename="check-session")

router.register(r"logout", LogoutViewSet, basename="logout")
urlpatterns = [
    *router.urls,
]