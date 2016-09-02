__author__ = 'emam'

from django import template

register = template.Library()


@register.filter
def brand_display(car, lang):
    name = car.model.brand.brand_name
    if lang == 'ar':
        name = car.model.brand.brand_name_ar
    return name
