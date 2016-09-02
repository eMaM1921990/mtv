"""mtv URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from allauth.account.views import logout
from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
from django.conf.urls.static import static
from django.views.static import serve
from mtv_app import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home, name='/'),
    url(r'^profile/(?P<id>.*)$', views.car_profile, name='car_profile'),
    url(r'^my_garage$', views.my_garage, name='my_garage'),
    url(r'^add_car_to_garage', views.add_to_garage, name='add_car_to_garage'),
    url(r'^remove_car_from_garage', views.remove_car_from_garage, name='remove_car_from_garage'),
    url(r'^garage_comparison', views.add_add_for_comparison, name='garage_comparison'),
    url(r'^about_us', views.about_us, name='about_us'),
    url(r'^contact_us', views.contact_us, name='contact_us'),
    url(r'^sell', views.sell, name='sell'),
    url(r'^buy', views.buy, name='buy'),
    url(r'^add_car_from_web', views.add_car_from_web, name='add_car_from_web'),
    url(r'^get_model_filter', views.get_model_filter, name='get_model_filter'),
    url(r'^get_model', views.get_model, name='get_model'),
    url(r'^accounts/logout/$', logout, {'next_page': '/'}, name='logout'),
    url(r'^accounts/', include('allauth.urls')),
    # Localizations #
    url(r'^i18n/', include('django.conf.urls.i18n')),
    url(r'^rosetta/', include('rosetta.urls')),
    url(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT, }),
]
if settings.DEBUG:
        urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
