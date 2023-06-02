from django.shortcuts import render
from .models import TipoCuenta,ConexionTipoCarac
from .models import CaracTipoCuenta

# Create your views here.

def index(request):
    return render(request,'Shopy/index.html')

def navbar(request):
    return render(request,'Shopy/navbar.html')

def vender(request):
    print("Cargando")
    print('AYUDA')
    if request.method != "POST":
        tipoCuenta=TipoCuenta.objects.all()
        #carac = ConexionTipoCarac.objects.all()
        context={'tipoCuenta': tipoCuenta}
                #'carac' : carac}
        return render(request,'Shopy/vender.html', context)
    else:

        archivos = request.FILES.getlist('imgs')

            
        idTipo = request.POST['tipoCuenta']
        caracABuscar = ConexionTipoCarac.objects.filter(id_tipo_cuenta=idTipo)
        
        print(caracABuscar)
        
        """
        for i in request.POST:
            for j in caracABuscar:
                if i == j.nom_carac:
                    print(i)
        """
        return render(request,'Shopy/vender.html')

def cargarCarac(request, id):
    tipoCuenta = TipoCuenta.objects.all()
    if id == 0:
        return render(request, 'Shopy/vender.html', {'tipoCuenta': tipoCuenta})
    try:
        carac = ConexionTipoCarac.objects.filter(id_tipo_cuenta=id)
        return render(request, 'carac.html', {'carac': carac})
    except:
        print("Error")
    return render(request, 'Shopy/vender.html', {'tipoCuenta': tipoCuenta})


def cargarCaracv1(request, id):
    print("Ayuda")
    tipoCuenta=TipoCuenta.objects.all()
    context={'tipoCuenta': tipoCuenta}
    print(id)
    if id == 0:
        return render(request,'Shopy/vender.html', context)
    try:
        carac = ConexionTipoCarac.objects.filter(id_tipo_cuenta=id)
        context={'tipoCuenta': tipoCuenta,
                 'carac' : carac}
    except:

        print("Error")
    return render(request,'Shopy/vender.html', context)