from datetime import datetime

__author__ = 'emam'


def year_list():
    return tuple((str(n), str(n)) for n in range(1995, datetime.now().year + 1))


def color_list():
    colors = [('blueblack', 'Blue black'),
              ('purple', 'Purple'),
              ('red', 'Red'),
              ('grey', 'Grey'),
              ('yellow', 'Yellow'),
              ('sky', 'Sky'),
              ('green', 'Green'),
              ('gold', 'Gold'),
              ('black', 'Black'),
              ('brown', 'Brown'),
              ('orange', 'Orange')]
    return colors

def killometer_list():
    return tuple((str(n), str(n)) for n in range(0, 500000, 10000))

def car_categories():
    categories = [('body','Body'),
        ('Engine / Transmission','Engine / Transmission'),
        ('Suspension','Suspension'),
        ('Interiors','Interiors'),
        ('Electronics / Features','Electronics / Features'),
        ]
    return categories