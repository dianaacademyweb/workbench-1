# Generated by Django 4.2.1 on 2023-05-16 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_user', '0003_alter_user_user_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_type',
            field=models.CharField(choices=[('admin', 'Admin'), ('employee', 'Employee'), ('organization', 'Organization')], max_length=100, null=True),
        ),
    ]
