from api.user.serializers import UserSerializer
from api.user.models import User
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework import mixins
from rest_framework.permissions import AllowAny
from api.user.serializers import RegisterSerializer
from api.user.serializers import MyTokenObtainPairSerializer , EmailVerificationSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from rest_framework.views import APIView

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
        
        token = RefreshToken.for_user(user).access_token
        relative_link = reverse('email-verify')
        abs_url = 'https://' + get_current_site(request).domain + relative_link + '?token=' + str(token)

        # Send verification email
        email_subject = 'Verify your email'
        email_body = f'Hi {user.username},\nPlease use the link below to verify your email:\n{abs_url}'
        send_mail(email_subject, email_body, 'dianaacademyweb@gmail.com', [user.email], fail_silently=False,)

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
    
    
class EmailVerificationView(APIView):
    serializer_class = EmailVerificationSerializer

    def get(self, request):
        token = request.GET.get('token')
        serializer = self.serializer_class(data ={'token':token})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({'detail': 'Email successfully verified.'}, status=status.HTTP_200_OK)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    # serializer_class = EmailVerificationSerializer
    # def post(self, request):
    #     serializer = self.serializer_class(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     user = serializer.validated_data
    #     return Response({'detail': 'Email successfully verified.'}, status=status.HTTP_200_OK)    
    
    
    
    
    
                 
               
