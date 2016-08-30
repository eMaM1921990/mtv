from __future__ import unicode_literals
from django.conf import settings
from django.contrib.auth.models import User

from django.db import models

# Create your models here.
from django.utils import timezone
from mtv_app.utils import year_list, color_list, killometer_list, car_categories

MANAGED = True


class Brand(models.Model):
    brand_name = models.CharField(max_length=225,  verbose_name='Brand EN', )
    brand_name_ar = models.CharField(max_length=225,  verbose_name='Brand AR')

    def __unicode__(self):
        return self.brand_name

    class Meta:
        managed = MANAGED
        db_table = 'brand'
        verbose_name_plural = 'Brands'


class Locations(models.Model):
    location_name = models.CharField(max_length=255,  verbose_name='Location EN')
    location_name_ar = models.CharField(max_length=45,  verbose_name='Location AR')

    def __unicode__(self):
        return self.location_name

    class Meta:
        managed = MANAGED
        db_table = 'locations'
        verbose_name_plural = 'Locations'


class Models(models.Model):
    model_name = models.CharField(max_length=255,  verbose_name='Model EN')
    model_name_ar = models.CharField(max_length=255,  verbose_name='Model AR')
    brand = models.ForeignKey(Brand, models.DO_NOTHING,  verbose_name='Brand')

    def __unicode__(self):
        return self.model_name

    class Meta:
        managed = MANAGED
        db_table = 'models'
        verbose_name_plural = 'Car models'


class Car(models.Model):
    model = models.ForeignKey(Models, models.CASCADE,  verbose_name='Model ')
    year = models.CharField(max_length=45, choices=year_list() , verbose_name= 'Year')
    km = models.CharField(max_length=45,  choices=killometer_list(), verbose_name='KM')
    color = models.CharField(max_length=45,  choices=color_list(),verbose_name='Color')
    location = models.ForeignKey(Locations, models.CASCADE, blank=True, null=True, verbose_name='Location')
    price = models.FloatField(default=0,verbose_name='Price')
    user_image_upload = models.ImageField(upload_to=settings.CARS_URL, default=None)
    car_image_one = models.ImageField(upload_to=settings.CARS_URL, default=None,verbose_name='Image 1')
    car_image_two = models.ImageField(upload_to=settings.CARS_URL, default=None, verbose_name='Image 2')
    car_image_three = models.ImageField(upload_to=settings.CARS_URL, default=None, verbose_name='Image 3')
    car_image_four = models.ImageField(upload_to=settings.CARS_URL, default=None, verbose_name='Image 4')
    created_by = models.ForeignKey(User, models.CASCADE, db_column='created_by', blank=True, null=True,
                                   related_name='created_by', verbose_name='CreatedBy')
    updated_by = models.ForeignKey(User, models.CASCADE, db_column='updated_by', blank=True, null=True,
                                   related_name='updated_by', verbose_name='UpdatedBy')
    is_approved = models.BooleanField(default=False,verbose_name='Approved')
    is_active = models.BooleanField(default=False,verbose_name='Active')
    created_at = models.DateTimeField(default=timezone.now(),verbose_name='Created Date')

    def __unicode__(self):
        return self.model.model_name

    class Meta:
        managed = MANAGED
        db_table = 'car'
        verbose_name_plural = 'Cars'


class CarInspection(models.Model):
    inspection_category = models.CharField(max_length=45, blank=True, null=True, verbose_name='Category ',choices=car_categories())
    inspection_outline = models.CharField(max_length=45, blank=True, null=True, verbose_name='Outline EN')
    inspection_outline_ar = models.CharField(max_length=150, blank=True, null=True, verbose_name='Outline AR')
    inspection_description = models.TextField(max_length=2L, blank=True, null=True, verbose_name='Desc EN')
    inspection_description_ar = models.TextField(max_length=2L, blank=True, null=True, verbose_name='Desc AR')
    inspection_rate = models.IntegerField(default=0, verbose_name='Rate')
    car = models.ForeignKey(Car, models.CASCADE, blank=True, null=True)



    class Meta:
        managed = MANAGED
        db_table = 'car_inspection'
        verbose_name_plural = 'Car inspections'


class CarOptions(models.Model):
    car_option_icon = models.CharField(max_length=45,  verbose_name='Options')
    car = models.ForeignKey(Car, models.DO_NOTHING, blank=True, null=True)

    def __unicode__(self):
        return self.car_option_icon

    class Meta:
        managed = MANAGED
        db_table = 'car_options'
        verbose_name_plural = 'Car options'


class MyGarage(models.Model):
    car = models.ForeignKey(Car, models.CASCADE )
    user = models.ForeignKey(User, models.CASCADE )

    class Meta:
        managed = MANAGED
        db_table = 'my_garage'

