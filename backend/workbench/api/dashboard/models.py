from django.db import models

from api.user.models import User

from django.utils import timezone

# Create your models here.
    
 
          
class Employe(models.Model):
    users = models.ForeignKey(User, related_name='employe', on_delete=models.CASCADE)
    organization_id = models.ForeignKey(User, related_name='org_id', on_delete=models.CASCADE)
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=32)
    e_gender = models.CharField(max_length=25)
    e_contact = models.CharField(max_length=100)
    e_address = models.CharField(max_length=150)
    # user_type =models.CharField(max_length=120 , default="employee")
    
    def __str__(self):
        return f'{self.username}'

    class Meta:
        db_table = "employe"

class Profile(models.Model):
    organization_id = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    # image = models.ImageField(upload_to='images/')
    contact = models.CharField(max_length=100, null=True, default=None)
    website = models.CharField(max_length=100, null = True, default=None)
    address = models.CharField(max_length=150, null =True, default=None)
    location = models.CharField(max_length = 150, null= True ,default=None)
    Gender = models.CharField(max_length=160, null=True, default=None)
    
    def __str__(self):
        return f'{self.name}'
    
class ImageModel(models.Model):
    organization_id = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.FileField(upload_to='images/')  
      


class Project(models.Model):
    project_name = models.CharField(max_length=100)
    peoject_description = models.CharField(max_length=200)
    organization_id= models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.project_name}'

    class Meta:
        db_table = "project"
        
class Board(models.Model):
    board_name = models.CharField(max_length=100)
    orgnisation_id = models.ForeignKey(User, on_delete=models.CASCADE) 
    def __str__(self):
        return f'{self.board_name}'
    class Meta:
        db_table = "board"
        
        
class Task(models.Model):
    task_name = models.CharField(max_length=55)
    task_desc = models.CharField(max_length=200)
    task_status = models.CharField(max_length=55)
    task_priority = models.CharField(max_length=30)
    task_assign_date = models.CharField(max_length=55)
    task_deadline_date = models.CharField(max_length=55)
    task_update_date = models.CharField(max_length=55, null=True)
    board_id = models.ForeignKey(Board, on_delete=models.CASCADE, related_name='boardids')
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='projectids')
    orgnisation_id = models.ForeignKey(User, on_delete=models.CASCADE)
    employe_id = models.ForeignKey(Employe, on_delete=models.CASCADE, related_name='employeeids')
    class Meta:
        db_table = "task"  
        
        
class Team(models.Model):
    organization_id= models.ForeignKey(User, on_delete=models.CASCADE)
    board_id = models.ForeignKey(Board, on_delete=models.CASCADE, related_name='board' )
    team_name = models.CharField(max_length=55)
    team_desc = models.CharField(max_length= 300)
    class Meta:
        db_table = "team" 
               
        
        
class Monitoring(models.Model):
    screen_count = models.CharField(max_length=200, null=True)
    screen_name = models.CharField(max_length=200)
    orgnisation_id = models.ForeignKey(User, on_delete=models.CASCADE)
    class Meta:
        db_table = "monitoring"          
            
            
class MonitoringDetails(models.Model):
    md_title = models.CharField(max_length=200)
    md_total_time_seconds = models.CharField(max_length=200)
    md_date = models.CharField(max_length=200)
    orgnisation_id = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "MonitoringDetails"            
    
class Meeting(models.Model):
    meating_name = models.CharField(max_length=55)
    meating_description = models.CharField(max_length=200)
    meating_url = models.CharField(max_length=200)
    project_name = models.CharField(max_length=250)
    meating_start_time = models.CharField(max_length=55)
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)
    organisation_id = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "meeting"  
        
        
class Project_Employee_Linker(models.Model):
    p_id = models.ForeignKey(Project, on_delete=models.CASCADE)
    e_id = models.ForeignKey(Employe, on_delete=models.CASCADE)
    o_id = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('p_id', 'e_id','o_id')
        db_table = "project_emp_assign"   
        
class WorkProductivityDataset(models.Model):
    w_pds = models.CharField(max_length=255)
    w_type = models.CharField(max_length=255)
    o_id = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "WorkProductivityDataset"    
        
class AttendanceLogs(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField( auto_now_add=True)
    login_time = models.DateTimeField(  auto_now_add=True )
    work_status= models.CharField(max_length=120) 
    class Meta:
        db_table = "AttendanceLogs"    
        
class logginout(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField( auto_now_add=True)
    logout_time = models.DateTimeField( auto_now_add=True)
    endreport = models.CharField(max_length=500, default=True) 
    class Meta:
        db_table = "loggingout"           
        
        
        
        
class screenshotsModel(models.Model):
    organization_id = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.FileField(upload_to='images/' )     
    time =  models.TimeField( auto_now=True, auto_now_add=False)                        




class desktopfile(models.Model):
    name = models.CharField(null=True, max_length=50)
    file = models.FileField(upload_to='desktopapp/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    
    
 
 
 
class ideltime(models.Model):
    organization_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now=False, auto_now_add=False)  
    idealtime =  models.CharField( max_length=50)   
    
    
    
    
class Notification(models.Model):
    organization_id= models.ForeignKey(User, on_delete=models.CASCADE)
    notification = models.CharField(max_length=600)
    timestamp = models.DateTimeField(auto_now_add=True)
    class Meta:
        db_table = "notification"       
    