from allauth.account.forms import LoginForm
from django.shortcuts import render, render_to_response

# Create your views here.
from django.template.context import RequestContext
from mtv_app.cars import Cars


def home(request):
    context = {}
    template = 'index.html'
    if not request.user.is_authenticated():
        context['login_form'] = LoginForm()
    car_instance = Cars()
    context['new_cars'] = car_instance.get_new_cars()
    context['hot_deal'] = car_instance.get_hot_deals()
    return render_to_response(template,context,context_instance=RequestContext(request))

def car_profile(request,id):
    context = {}
    template = 'car_profile.html'
    if not request.user.is_authenticated():
        context['login_form'] = LoginForm()
    car_instance = Cars()
    context['car_info'] = car_instance.get_car_profile(id)
    return render_to_response(template,context,context_instance=RequestContext(request))
