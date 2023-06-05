from django.shortcuts import render
from .models import Usuario
# Create your views here.

def index(request):
    print("index")
    return render(request,'Shopy/index.html')

def iniciodesesion(request):
    print("ini")
    return render(request,'Shopy/iniciodesesion.html')

def navbar(request):
    print("nav")
    return render(request,'Shopy/navbar.html')

def registro(request):
    if request.method != "POST":
        print("hola mundo")
        return render(request,'Shopy/registro.html')
    else:
        nom_usu = request.POST["nom_usu"]
        email = request.POST["email"]
        pw_usu = request.POST["pw_usu"]
        
        obj=Usuario.objects.create( nom_usu=nom_usu,
                                    email=email,
                                    pw_usu = pw_usu
                                    )
        obj.save()
        print("hola mundo en post")
        return render(request, 'Shopy/registro.html')