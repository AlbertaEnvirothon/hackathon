from .models import Application
from rest_framework import serializers

class ApplicationSerializer(serializers.ModelSerializer):

    # created_at = serializers.DateField(source='created_at')

    class Meta:
        model = Application
        fields = [
            'id',
            'company_name',
            'created_at',
            'status'
        ]
