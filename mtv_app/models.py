from __future__ import unicode_literals
from django.conf import settings
from django.contrib.auth.models import User

from django.db import models

# Create your models here.
from django.utils import timezone

MANAGED = True


class Brand(models.Model):
    brand_name = models.CharField(max_length=225, blank=True, null=True, verbose_name='Brand EN')
    brand_name_ar = models.CharField(max_length=225, blank=True, null=True, verbose_name='Brand AR')

    def __unicode__(self):
        return self.brand_name

    class Meta:
        managed = MANAGED
        db_table = 'brand'
        verbose_name_plural = 'Brands'


class Locations(models.Model):
    location_name = models.CharField(max_length=255, blank=True, null=True, verbose_name='Location EN')
    location_name_ar = models.CharField(max_length=45, blank=True, null=True, verbose_name='Location AR')

    def __unicode__(self):
        return self.location_name

    class Meta:
        managed = MANAGED
        db_table = 'locations'
        verbose_name_plural = 'Locations'


class Models(models.Model):
    model_name = models.CharField(max_length=255, blank=True, null=True, verbose_name='Model EN')
    model_name_ar = models.CharField(max_length=255, blank=True, null=True, verbose_name='Model AR')
    brand = models.ForeignKey(Brand, models.DO_NOTHING, blank=True, null=True, verbose_name='Brand')

    def __unicode__(self):
        return self.model_name

    class Meta:
        managed = MANAGED
        db_table = 'models'
        verbose_name_plural = 'Car models'


class Car(models.Model):
    model = models.ForeignKey(Models, models.DO_NOTHING, blank=True, null=True)
    year = models.CharField(max_length=45, blank=True, null=True)
    km = models.CharField(max_length=45, blank=True, null=True)
    color = models.CharField(max_length=45, blank=True, null=True)
    location = models.ForeignKey(Locations, models.DO_NOTHING, blank=True, null=True)
    price = models.FloatField(blank=True, null=True)
    user_image_upload = models.ImageField(upload_to=settings.CARS_URL, default=None)
    car_image_one = models.ImageField(upload_to=settings.CARS_URL, default=None)
    car_image_two = models.ImageField(upload_to=settings.CARS_URL, default=None)
    car_image_three = models.ImageField(upload_to=settings.CARS_URL, default=None)
    car_image_four = models.ImageField(upload_to=settings.CARS_URL, default=None)
    created_by = models.ForeignKey(User, models.CASCADE, db_column='created_by', blank=True, null=True,
                                   related_name='created_by')
    updated_by = models.ForeignKey(User, models.CASCADE, db_column='updated_by', blank=True, null=True,
                                   related_name='updated_bu')
    is_approved = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now())

    def __unicode__(self):
        return self.model

    class Meta:
        managed = MANAGED
        db_table = 'car'


class CarInspection(models.Model):
    inspection_category = models.CharField(max_length=45, blank=True, null=True)
    inspection_outline = models.CharField(max_length=45, blank=True, null=True)
    inspection_description = models.TextField(max_length=2L, blank=True, null=True)
    inspection_rate = models.IntegerField(default=0)
    car = models.ForeignKey(Car, models.CASCADE, blank=True, null=True)
    inspection_outline_ar = models.CharField(max_length=150, blank=True, null=True)
    inspection_description_ar = models.TextField(max_length=2L, blank=True, null=True)

    class Meta:
        managed = MANAGED
        db_table = 'car_inspection'


class CarOptions(models.Model):
    car_option_icon = models.CharField(max_length=45, blank=True, null=True)
    car = models.ForeignKey(Car, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = MANAGED
        db_table = 'car_options'


class MyGarage(models.Model):
    car = models.ForeignKey(Car, models.CASCADE, blank=True, null=True)
    user = models.ForeignKey(User, models.CASCADE, blank=True, null=True)

    class Meta:
        managed = MANAGED
        db_table = 'my_garage'

