from api.user.serializers import UserSerializer
from api.user.models import User
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework import mixins
from rest_framework.permissions import AllowAny
from api.user.serializers import RegisterSerializer
from api.user.serializers import MyTokenObtainPairSerializer

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

class UserViewSet(
    viewsets.GenericViewSet, mixins.CreateModelMixin, mixins.UpdateModelMixin
):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    error_message = {"success": False, "msg": "Error updating user"}

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop("partial", True)
        instance = User.objects.get(id=request.data.get("userID"))
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, "_prefetched_objects_cache", None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        user_id = request.data.get("userID")

        if not user_id:
            raise ValidationError(self.error_message)

        if self.request.user.pk != int(user_id) and not self.request.user.is_superuser:
            raise ValidationError(self.error_message)

        self.update(request)

        return Response({"success": True}, status.HTTP_200_OK)




class RegisterViewSet(viewsets.ModelViewSet):
    http_method_names = ["post"]
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response(
            {
                "success": True,
                "userID": user.id,
                "msg": "The user was successfully registered",
            },
            status=status.HTTP_201_CREATED,
        ) 
        
        
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer   
    
    
class CustomTokenRefereshview(TokenRefreshView):
    serializer_class = MyTokenObtainPairSerializer              
               
