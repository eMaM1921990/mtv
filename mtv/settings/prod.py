__author__ = 'emam'
from base import *

DB_NAME = 'eMaM151987$mtv'
DB_USER = 'eMaM151987'
DB_PASSWORD = 'Azsxdcfv1234'
DB_HOST = 'eMaM151987.mysql.pythonanywhere-services.com'
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

MEDIA_ROOT = '/home/eMaM151987/'
# STATIC_ROOT = os.path.join(BASE_DIR, 'static')
