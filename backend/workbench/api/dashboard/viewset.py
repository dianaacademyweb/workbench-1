from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import viewsets, status
from rest_framework.status import HTTP_401_UNAUTHORIZED
from api.dashboard.serializers import  ProfileSerializer

def org_login_required(view_func):
    def wrapper(request, *args, **kwargs):
        if 'logged_in' in request.session:
            if request.session['user_type'] == 'organisation':
                return view_func(request, *args, **kwargs)
            else:
                error_message = "You don't have privilege to access this page!"
                return Response({'error': error_message}, status=HTTP_401_UNAUTHORIZED)
        else:
            error_message = "Logout Request/ Unauthorized Request, Please login!"
            return Response({'error': error_message}, status=HTTP_401_UNAUTHORIZED)
    return wrapper

def user_login_required(view_func):
    def wrapper(request, *args, **kwargs):
        if 'logged_in' in request.session:
            if request.session['user_type'] == 'Employe':
                return view_func(request, *args, **kwargs)
            else:
                error_message = "You don't have privilege to access this page!"
                return Response({'error': error_message}, status=HTTP_401_UNAUTHORIZED)
        else:
            error_message = "Logout Request/ Unauthorized Request, Please login!"
            return Response({'error': error_message}, status=HTTP_401_UNAUTHORIZED)
    return wrapper


#@org_login_required
class ProfileViewSet(viewsets.ModelViewSet):
    http_method_names = ["post"]
    serializer_class = ProfileSerializer
    
    def update(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        Organization  = serializer.save()
        return Response({
            "success": True,
            "userID": Organization.id,
            "msg": "The user was successfully registered",
        
        }, 
            status=status.HTTP_201_CREATED
        )
        
        
        
        

    
         