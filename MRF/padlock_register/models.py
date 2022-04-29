from django.db import models

# Create your models here.


class Padlock(models.Model):
    number = models.CharField(max_length=10)
    status = models.CharField(max_length=15)
    owner = models.CharField(max_length=15)
    location = models.CharField(max_length=25)
    registration_time = models.CharField(max_length=20)
    registered_by = models.CharField(max_length=20)
