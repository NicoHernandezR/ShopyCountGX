from django.contrib.auth.forms import UserCreationForm
from django import forms


class CrearUsuario(UserCreationForm):
    pass
    nombre = forms.CharField(label='Nombre', max_length=100)
    correo = forms.EmailField(label='Correo electrónico')
    contraseña = forms.CharField(label='Contraseña', max_length=100, widget=forms.PasswordInput)