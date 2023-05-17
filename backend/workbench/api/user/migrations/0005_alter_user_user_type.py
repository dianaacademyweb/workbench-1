# Generated by Django 4.2.1 on 2023-05-17 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_user', '0004_alter_user_user_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_type',
            field=models.CharField(choices=[('admin', 'Admin'), ('employee', 'Employee'), ('organization', 'Organization')], max_length=100),
        ),
    ]
