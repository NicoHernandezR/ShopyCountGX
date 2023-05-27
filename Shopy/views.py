from django.shortcuts import render
from .models import TipoCuenta,ConexionTipoCarac

# Create your views here.

def index(request):
    return render(request,'Shopy/index.html')

def navbar(request):
    return render(request,'Shopy/navbar.html')

def vender(request):
     
    if request.method != "POST":
        tipoCuenta=TipoCuenta.objects.all()
        carac = ConexionTipoCarac.objects.all()
        context={'tipoCuenta': tipoCuenta,
                 'carac' : carac}
        return render(request,'Shopy/vender.html', context)
    else:
     return render(request,'Shopy/vender.html')