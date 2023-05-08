from django.contrib import admin
from base.models import User
from base.autentication.models import ActiveSession


admin.site.register(User )

# Register your models here.
admin.site.register(ActiveSession)
