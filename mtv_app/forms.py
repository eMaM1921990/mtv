from mtv_app.models import Profile

__author__ = 'emam'
from django import forms
from django.utils.translation import ugettext_lazy as _


class SignupForm(forms.Form):
    first_name = forms.CharField(max_length=30, label=_('First Name'),
                                 widget=forms.TextInput(
                                     attrs={'placeholder': _('First Name'), 'class': 'form-control inpu-lg'}))
    last_name = forms.CharField(max_length=30, label=_('Last Name'),
                                widget=forms.TextInput(
                                    attrs={'placeholder': _('Last Name'), 'class': 'form-control inpu-lg'}))
    email = forms.CharField(max_length=64, label=_('Email'),
                            widget=forms.TextInput(
                                attrs={'placeholder': _('E-mail address'), 'class': 'form-control inpu-lg'}))
    phone = forms.CharField(max_length=64, label=_('Phone'),
                            widget=forms.TextInput(attrs={'placeholder': _('Phone'), 'class': 'form-control inpu-lg'}))

    def signup(self, request, user):
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.email = self.cleaned_data['email']
        user.username = self.cleaned_data['email']
        user.save()

        profile = Profile()
        profile.phone_number = self.cleaned_data['phone']
        profile.user = user
        profile.save()
