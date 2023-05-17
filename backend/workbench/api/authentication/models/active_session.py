from django.db import models


class ActiveSession(models.Model):
    user = models.ForeignKey("api_user.User", on_delete=models.CASCADE, related_name='active_sessions')
    token = models.CharField(max_length=255)
    date = models.DateTimeField(auto_now_add=True)
    user_type = models.CharField(max_length=100, blank=True)
    
    def save (self, *args, **kwargs):
        if not self.user_type:
            self.user_type = self.user.user_type
        super().save(*args, **kwargs)    