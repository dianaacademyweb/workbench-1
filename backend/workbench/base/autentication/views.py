from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated

from base.autentication.serializers import LoginSerializer
        
from base.api.serializers import RegisterSerializer
from base.autentication.models import ActiveSession



class LoginViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    permission_classes = (AllowAny,)
    serializer_class = LoginSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        return Response(serializer.validated_data, status=status.HTTP_200_OK)

# Create your views here.
class ActiveSessionViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    http_method_names = ["post"]
    permission_classes = (IsAuthenticated,)

    def create(self, request, *args, **kwargs):
        return Response({"success": True}, status.HTTP_200_OK)



class LogoutViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    permission_classes = (IsAuthenticated,)

    def create(self, request, *args, **kwargs):
        user = request.user

        session = ActiveSession.objects.get(user=user)
        session.delete()

        return Response(
            {"success": True, "msg": "Token revoked"}, status=status.HTTP_200_OK
        )

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