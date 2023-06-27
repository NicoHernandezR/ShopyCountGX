from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User


class CrearUsuario(UserCreationForm):
    pass
    correo = forms.EmailField(label='Correo electrónico')

class EditarUsuarioForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'email', )