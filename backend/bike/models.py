from email.headerregistry import Address

from django.db import models

# Create your models here.


class Park(models.Model):
    name = models.CharField(max_length=100)
    Address = models.CharField(max_length=512)
    park_size = models.CharField(max_length=100)
    photo_url = models.TextField()

    def __str__(self):
        return self.name


class Path(models.Model):
    name = models.CharField(max_length=100)
    length = models.CharField(max_length=100)
    start_point = models.CharField(max_length=512)
    end_point = models.CharField(max_length=512)
    elevation = models.CharField(max_length=100)
    route_type = models.CharField(max_length=100)
    photo_url = models.TextField()

    def __str__(self):
        return self.name


class Review(models.Model):
    path = models.ForeignKey(
        Path, on_delete=models.CASCADE, related_name='reviews')
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


class Bikes(models.Model):
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    description = photo_url = models.TextField()
    photo_url = models.TextField()

    def __str__(self):
        return self.name
