from rest_framework import serializers


from .models import dashboard


class dashboardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = dashboard
        fields = ('user')