from django.db import models

from api.user.models import User

# Create your models here.


class Organization(models.Model):
    user_type = models.ForeignKey(User, on_delete=models.CASCADE )
    orgnisation_Email = models.CharField(max_length=100 , default= "gmail.com")
    organization_name = models.CharField(max_length=100)
    organisation_contact = models.CharField(max_length=100)
    orgaisation_website = models.CharField(max_length=100)
    organisation_address = models.CharField(max_length=150)
    def __str__(self):
        return f'{self.orgnisation_id}'
    
 
          
class Employe(models.Model):
    Organization_id =models.ForeignKey(Organization, on_delete=models.CASCADE)
    e_name = models.CharField(max_length=100)
    e_email = models.EmailField()
    e_password = models.CharField(max_length=32)
    e_gender = models.CharField(max_length=25)
    e_contact = models.CharField(max_length=100)
    e_address = models.CharField(max_length=150)
    
    def __str__(self):
        return f'{self.Organization_id} {self.e_email} {self.e_password} {self.e_address} {self.e_contact} {self.e_gender}'

    class Meta:
        db_table = "employee"
class Project(models.Model):
    project_name = models.CharField(max_length=100)
    peoject_description = models.CharField(max_length=200)
    Organization_id= models.ForeignKey(Organization, on_delete=models.CASCADE)

    class Meta:
        db_table = "project"
        
class Board(models.Model):
    board_name = models.CharField(max_length=100)
    orgnisation_id = models.ForeignKey(Organization, on_delete=models.CASCADE)

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
    Project_id = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='projectids')
    orgnisation_id = models.ForeignKey(Organization, on_delete=models.CASCADE)
    Employe_id = models.ForeignKey(Employe, on_delete=models.CASCADE, related_name='employeeids')
    
    class Meta:
        db_table = "task"     
        
        
class Monitoring(models.Model):
    monitoring_title = models.CharField(max_length=200, null=True)
    monitaring_log_ts = models.CharField(max_length=200)
    Employe_id = models.ForeignKey(Employe, on_delete=models.CASCADE)
    orgnisation_id = models.ForeignKey(Organization, on_delete=models.CASCADE)

    class Meta:
        db_table = "monitoring"          
            
            
class MonitoringDetails(models.Model):
    md_title = models.CharField(max_length=200)
    md_total_time_seconds = models.CharField(max_length=200)
    md_date = models.CharField(max_length=200)
    e_id = models.ForeignKey(Employe, on_delete=models.CASCADE)
    o_id = models.ForeignKey(Organization, on_delete=models.CASCADE)

    class Meta:
        db_table = "MonitoringDetails"            
    
class Meeting(models.Model):
    m_name = models.CharField(max_length=55)
    m_desc = models.CharField(max_length=200)
    m_uuid = models.CharField(max_length=200)
    m_start_date = models.CharField(max_length=55)
    m_stop_date = models.CharField(max_length=55)
    m_start_time = models.CharField(max_length=55)
    m_stop_time = models.CharField(max_length=55)
    p_id = models.ForeignKey(Project, on_delete=models.CASCADE)
    o_id = models.ForeignKey(Organization, on_delete=models.CASCADE)

    class Meta:
        db_table = "meeting"  
        
        
class Project_Employee_Linker(models.Model):
    p_id = models.ForeignKey(Project, on_delete=models.CASCADE)
    e_id = models.ForeignKey(Employe, on_delete=models.CASCADE)
    o_id = models.ForeignKey(Organization, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('p_id', 'e_id','o_id')
        db_table = "project_emp_assign"   
        
class WorkProductivityDataset(models.Model):
    w_pds = models.CharField(max_length=255)
    w_type = models.CharField(max_length=255)
    o_id = models.ForeignKey(Organization, on_delete=models.CASCADE)

    class Meta:
        db_table = "WorkProductivityDataset"    
        
class AttendanceLogs(models.Model):
    atendance_date = models.CharField(max_length=55)
    attendance_time = models.CharField(max_length=55)
    attendance_status = models.CharField(max_length=55)
    attendance_ip_address = models.CharField(max_length=55)
    attendance_time_zone = models.CharField(max_length=55)
    attendance_lat = models.CharField(max_length=55)
    attendance_long = models.CharField(max_length=55)
    employe_id = models.ForeignKey(Employe, on_delete=models.CASCADE)
    orgnisation_id = models.ForeignKey(Organization, on_delete=models.CASCADE)

    class Meta:
        db_table = "AttendanceLogs"                       