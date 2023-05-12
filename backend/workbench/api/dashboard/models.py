from django.db import models

from api.user.models import User

# Create your models here.


class dashboard(models.Models):
    user = models.ForeignKey(User , on_delete=models.CASCADE, null = True, blank = True)
    image = models.FileField()
    adrres= models.CharField(max_length=400, Null= True)
    Time = models.DateField( auto_now=True, auto_now_add=True)
