from django.db import models
# Create your models here.

class ActiveSession(models.Model):
    user = models.ForeignKey("base.User", on_delete=models.CASCADE)
    token = models.CharField(max_length=255)
    date = models.DateTimeField(auto_now_add=True)
