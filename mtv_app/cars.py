from models import Car

__author__ = 'emam'


class Cars():

    def get_new_cars(self):
        return Car.objects.filter(km=0)

    def get_hot_deals(self):
        return Car.objects.all().prefetch_related('model', 'location').exclude(km=0)

    def get_car_profile(self,id):
        return Car.objects.get(id=id).prefetch_related('model', 'location')