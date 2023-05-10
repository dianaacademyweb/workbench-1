from django.contrib import admin
from api.authentication.models import ActiveSession
from api.user.models import User
# Register your models here.
admin.site.register(ActiveSession)
admin.site.register(User)

