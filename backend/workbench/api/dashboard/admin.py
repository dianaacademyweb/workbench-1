from django.contrib import admin
from api.authentication.models import ActiveSession
from api.user.models import User
from api.dashboard.models import Organization,Project,Board,Task,Monitoring,MonitoringDetails,Meeting,Project_Employee_Linker,WorkProductivityDataset,AttendanceLogs

# Register your models here.
admin.site.register(ActiveSession)
admin.site.register(User)
admin.site.register(Project)
admin.site.register(Board)
admin.site.register(Organization)
admin.site.register(Task)
admin.site.register(MonitoringDetails)
admin.site.register(Meeting)
admin.site.register(Project_Employee_Linker)
admin.site.register(WorkProductivityDataset)
admin.site.register(AttendanceLogs)


