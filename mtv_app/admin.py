from django.contrib import admin
from models import *
# Register your models here.

@admin.register(Locations)
class Locations(admin.ModelAdmin):
    list_display = ['id', 'location_name', 'location_name_ar']
    list_per_page = 10
    list_editable = list_display
    search_fields = list_display
    list_filter = list_display


@admin.register(Brand)
class Brands(admin.ModelAdmin):
    list_display = ['id', 'brand_name', 'brand_name_ar']
    list_per_page = 10
    list_editable = list_display
    search_fields = list_display
    list_filter = list_display


@admin.register(Models)
class Model(admin.ModelAdmin):
    list_display = ['id', 'model_name', 'model_name_ar', 'brand']
    list_per_page = 10
    list_editable = list_display
    search_fields = list_display
    list_filter = list_display


@admin.register(Car)
class Car(admin.ModelAdmin):
    list_display = ['id', 'model', 'year', 'km', 'color', 'location', 'price', 'is_approved', 'is_active', 'created_at']
    list_select_related = ['model', 'model__brand']
    list_editable = list_display
    list_filter = list_display
    search_fields = list_display
    fields = ['model', 'year', 'km', 'color', 'location', 'price', 'is_approved', 'is_active', 'car_image_one',
              'car_image_two', 'car_image_three', 'car_image_four']





