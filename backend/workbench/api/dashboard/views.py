from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from .models import dashboard
from django.views.decorators.csrf import csrf_exempt



def validate_user_session(id , token):
    UserModel = get_user_model()
    try:
        user = UserModel.object.get(pk=id)
        if user.session_token == token:
            return True
        return False
    except UserModel.DoesNotExist:
        return False

@csrf_exempt
def passing(request , id , token):
    if not validate_user_session(id, token):
        return JsonResponse({'error':'please re login', 'code':'1'})
    
    
    if request.method =="POST":
        user_id = id
        username = request.Post['username']
        image = request.post['image']
        
        
        
        userModel =get_user_model()
        try:
            user = userModel.objects.get(pk = user_id)
        except userModel.DoesNotExist:
            return JsonResponse({'error':'user does not exist'})  
         