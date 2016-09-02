import json
from allauth.account.forms import LoginForm
from allauth.account.utils import send_email_confirmation
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.http.response import HttpResponse
from django.shortcuts import render, render_to_response

# Create your views here.
from django.template.context import RequestContext
from django.template.loader import render_to_string
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_exempt
from mtv_app.cars import Cars, CarUtils
from django.utils.translation import ugettext as _
from django.core.mail import send_mail
from mtv_app.utils import year_list, killometer_list, price_list


@never_cache
def home(request):
    context = {}
    template = 'index.html'
    if not request.user.is_authenticated():
        context['login_form'] = LoginForm()
    car_instance = Cars()
    context['new_cars'] = car_instance.get_new_cars()
    context['hot_deal'] = car_instance.get_hot_deals()
    return render_to_response(template, context, context_instance=RequestContext(request))


def car_profile(request, id):
    context = {}
    template = 'car_profile.html'
    if not request.user.is_authenticated():
        context['login_form'] = LoginForm()
    car_instance = Cars()
    context['car_info'] = car_instance.get_car_profile(id)
    return render_to_response(template, context, context_instance=RequestContext(request))


@login_required
def my_garage(request):
    context = {}
    template = 'my_garage.html'
    if not request.user.is_authenticated():
        context['login_form'] = LoginForm()
    car_instance = Cars()
    context['garage'] = car_instance.get_my_garage(request.user)
    return render_to_response(template, context, context_instance=RequestContext(request))


@login_required
@csrf_exempt
def add_to_garage(request):
    if request.POST:
        valid = False
        car_instance = Cars()
        result = car_instance.add_to_garage(request.POST['id'], request.user)
        if result:
            valid = True
            message = _('Successfully add s% to your garage').format(result.car.model.brand.brand_name)
        else:
            message = _('Error during add s% to your garage').format(result.car.model.brand.brand_name)

        ret = {
            'valid': valid,
            'msg': message
        }
        return HttpResponse(json.dumps(ret, ensure_ascii=False))


@login_required
@csrf_exempt
def remove_car_from_garage(request):
    if request.POST:
        valid = False
        car_instance = Cars()
        result = car_instance.remove_car_from_garage(request.POST['id'])
        if result:
            valid = True
            message = _('Successfully remove car from your garage')
        else:
            message = _('Error during remove car from your garage')

        ret = {
            'valid': valid,
            'msg': message
        }
        return HttpResponse(json.dumps(ret, ensure_ascii=False))


@login_required
@csrf_exempt
def add_add_for_comparison(request):
    if request.POST:
        context = {}
        template = 'base/car_garage_slot_a.html' if request.POST['slot'] == 'a' else 'base/car_garage_slot_b.html'
        car_instance = Cars()
        context['car_info'] = car_instance.get_car_profile(request.POST['id'])
        strHtml = render_to_string(template, context)
        return HttpResponse(strHtml)


def about_us(request):
    context = {}
    template = 'about_us.html'
    if not request.user.is_authenticated():
        context['login_form'] = LoginForm()
    return render_to_response(template, context, context_instance=RequestContext(request))


def contact_us(request):
    context = {}
    template = 'contact_us.html'
    if not request.user.is_authenticated():
        context['login_form'] = LoginForm()
    if request.POST:
        send_mail("Inquiry From "+request.POST['mail'], request.POST['msg'], settings.DEFAULT_FROM_EMAIL, settings.EMAIL_HOST_USER)
    return render_to_response(template, context, context_instance=RequestContext(request))


def sell(request):
    context = {}
    template = 'sell.html'
    if not request.user.is_authenticated():
        context['login_form'] = LoginForm()
    car_utils_instance = CarUtils()
    context['brands'] = car_utils_instance.brand_list()
    context['years'] = year_list()
    context['kms'] = killometer_list()
    context['locations'] = car_utils_instance.locations()
    return render_to_response(template, context, context_instance=RequestContext(request))

@login_required
@csrf_exempt
def add_car_from_web(request):
    if request.POST:
        valid = False
        message = _('Error occur during add your car, please try again')
        car_instance = Cars()
        result = car_instance.add_car_from_web(request.user, request.POST['model_id'], request.POST['year'],
                                               request.POST['km'], request.POST['color'], request.FILES['image'],
                                               request.POST['location_id'])
        if result:
            valid = True
            message = _('Successfully sent your car , will come to you soon')

        ret = {
            'valid': valid,
            'message': message
        }

        return HttpResponse(json.dumps(ret,ensure_ascii=False))

@login_required
@csrf_exempt
def get_model(request):
    if request.POST:
        context = {}
        template = 'base/model_select_options.html'
        car_utils_instance = CarUtils()
        context['models'] = car_utils_instance.model_by_brand(request.POST['brandId'])
        strHtml = render_to_string(template, context)
        return HttpResponse(strHtml)

@never_cache
def buy(request):
    context = {}
    template = 'buy.html'
    if not request.user.is_authenticated():
        context['login_form'] = LoginForm()
    car_utils_instance = CarUtils()
    car_instance = Cars()
    context['brands'] = car_utils_instance.brand_list()
    context['years'] = year_list()
    context['kms'] = killometer_list()
    context['prices'] = price_list()
    context['hot_deal'] = car_instance.get_hot_deals()
    return render_to_response(template, context, context_instance=RequestContext(request))

@login_required
@csrf_exempt
def get_model_filter(request):
    if request.POST:
        context = {}
        template = 'base/model_li_data.html'
        car_utils_instance = CarUtils()
        context['models'] = car_utils_instance.model_by_brand(request.POST['brandId'])
        strHtml = render_to_string(template, context)
        return HttpResponse(strHtml)
