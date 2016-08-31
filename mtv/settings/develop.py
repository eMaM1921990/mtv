__author__ = 'emam'
from base import *

DB_NAME = 'mtv'
DB_USER = 'root'
DB_PASSWORD = '0122308791'
DB_HOST = 'localhost'
DB_PORT = '3306'
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': DB_NAME,
        'USER': DB_USER,
        'PASSWORD': DB_PASSWORD,
        'HOST': DB_HOST,  # Or an IP Address that your DB is hosted on
        'PORT': DB_PORT,
    }
}

MEDIA_ROOT = '/home/emam/'
