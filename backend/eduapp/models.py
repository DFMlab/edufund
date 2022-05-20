from django.db import models

# Create your models here.
class ProjectModel(models.Model):
    
    email = models.EmailField()
    
    metaURI = models.URLField(max_length=512, unique=True)
    
    dataURI =  models.URLField(max_length=512, unique=True)