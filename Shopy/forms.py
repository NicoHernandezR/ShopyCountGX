from django.contrib.auth.forms import UserCreationForm
from django import forms


class CrearUsuario(UserCreationForm):
    pass
    correo = forms.EmailField(label='Correo electrónico')
