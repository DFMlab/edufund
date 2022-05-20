# Create your views here.
from . import serializers
from rest_framework import generics

class AddProject(generics.CreateAPIView):
    
    serializer_class = serializers.ProjectSerializer