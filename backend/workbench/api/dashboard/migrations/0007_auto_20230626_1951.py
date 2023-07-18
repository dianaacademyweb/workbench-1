# Generated by Django 3.2.19 on 2023-06-26 14:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('dashboard', '0006_auto_20230626_1950'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employe',
            name='users',
        ),
        migrations.AlterField(
            model_name='employe',
            name='organization_id',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='employe', to=settings.AUTH_USER_MODEL),
        ),
    ]
