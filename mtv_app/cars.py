from models import Car, MyGarage
from mtv_app.models import Brand, Models, Locations

__author__ = 'emam'


class Cars():

    def get_new_cars(self):
        return Car.objects.filter(km=0,is_active=True,is_approved=True)

    def get_hot_deals(self):
        return Car.objects.filter(is_active=True,is_approved=True).prefetch_related('model', 'location').exclude(km=0)

    def get_car_profile(self,id):
        return Car.objects.get(id=id)

    def get_my_garage(self, user):
        return MyGarage.objects.filter(user=user,is_active=True,is_approved=True).prefetch_related('car')

    def add_to_garage(self, car_id, user):
        record = MyGarage(car=Car.objects.get(id=car_id), user=user)
        record.save()
        return record

    def remove_car_from_garage(self, garage_id):
        try:
            MyGarage.objects.get(id=garage_id).delete()
            return True
        except Exception as e:
            return False

    def add_car_from_web(self, user, model_id, year, km ,color, image, location_id):
        try:
            record = Car()
            record.user_image_upload = image
            record.color = color
            record.year = year
            record.km = km
            record.model = Models.objects.get(id=model_id)
            record.location = Locations.objects.get(id=location_id)
            record.created_by = user
            record.save()
            return record
        except Exception as e:
            print str(e)
            return None



class CarUtils():
    def brand_list(self):
        return Brand.objects.all()

    def model_by_brand(self, brand_id):
        return Models.objects.filter(brand__id=brand_id)

    def locations(self):
        return Locations.objects.all()
