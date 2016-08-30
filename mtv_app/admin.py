from django.contrib import admin
from django.forms.widgets import TextInput, SelectMultiple
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


class InspectionForm(admin.StackedInline):
    model = CarInspection
    fk_name = 'car'
    formfield_overrides = {
        models.IntegerField: {'widget': TextInput(attrs={'size': '20', 'style': "width:15%"})},
    }
    suit_classes = 'suit-tab suit-tab-inspections'


class OptionsForm(admin.StackedInline):
    model = CarOptions
    fk_name = 'car'
    formfield_overrides = {
        models.CharField: {
            'widget': SelectMultiple(attrs={'size': '10'}),
        }
    }
    suit_classes = 'suit-tab suit-tab-options'
    max_num = 1


@admin.register(Car)
class Car(admin.ModelAdmin):
    list_display = ['id', 'model', 'year', 'km', 'color', 'location', 'price', 'is_approved', 'is_active', 'created_at']
    # list_select_related = ['model', 'model__brand']
    list_editable = list_display
    list_filter = list_display
    search_fields = list_display
    # fields = ['model', 'year', 'km', 'color', 'location', 'price', 'is_approved', 'is_active', 'car_image_one',
    # 'car_image_two', 'car_image_three', 'car_image_four']
    inlines = [InspectionForm, OptionsForm]
    fieldsets = [

        (None, {
            'classes': ('suit-tab', 'suit-tab-general',),
            'fields': ['model', 'year', 'km', 'color', 'location', 'price', 'is_approved', 'is_active', 'car_image_one',
                       'car_image_two', 'car_image_three', 'car_image_four']
        }),

    ]

    suit_form_tabs = (('general', 'General'), ('inspections', 'Inspection'), ('options', 'Options'),)









