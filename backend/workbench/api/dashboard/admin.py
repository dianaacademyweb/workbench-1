from django.contrib import admin
from api.user.models import User
from api.dashboard.models import Project,Board,Task,Monitoring,MonitoringDetails,Meeting,Project_Employee_Linker,WorkProductivityDataset,AttendanceLogs, Employe,screenshotsModel, logginout, desktopfile,ideltime

# Register your models here.
admin.site.register(User)
admin.site.register(Employe)
admin.site.register(Project)
admin.site.register(Board)
admin.site.register(Task)
admin.site.register(MonitoringDetails)
admin.site.register(Meeting)
admin.site.register(Project_Employee_Linker)
admin.site.register(WorkProductivityDataset)
admin.site.register(AttendanceLogs)
admin.site.register(screenshotsModel)
admin.site.register(logginout)
admin.site.register(Monitoring)
admin.site.register(desktopfile)
admin.site.register(ideltime)






