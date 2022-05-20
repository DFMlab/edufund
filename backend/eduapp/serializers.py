from rest_framework import serializers
from . import models

class ProjectSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = models.ProjectModel
        
        fields = '__all__'