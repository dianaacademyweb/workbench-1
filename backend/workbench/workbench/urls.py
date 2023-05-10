
from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path("api/users/", include(("api.routers", "api"), namespace="api")),
    path('admin/', admin.site.urls),
]
