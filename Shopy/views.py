from django.shortcuts import render,redirect

from .models import TipoCuenta,ConexionTipoCarac,ImagenCuenta
from .models import CaracTipoCuenta,Cuenta,CuentaCarac, Carro
from django.db.models import F, Q
from .forms import CrearUsuario
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Sum

from django.contrib import messages
from .models import TipoCuenta,ConexionTipoCarac,ImagenCuenta
from .models import CaracTipoCuenta,Cuenta,CuentaCarac
from django.db.models import F, Q
from .forms import CrearUsuario, EditarUsuarioForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import update_session_auth_hash, logout
from django.contrib.auth.decorators import login_required


# Create your views here.

def index(request):
    return render(request,'Shopy/index.html')

def navbar(request):
    return render(request,'Shopy/navbar.html')

def cuenta(request,id):

    cuentaV = Cuenta.objects.get(id = id)
    imagenes = ImagenCuenta.objects.filter(id_cuenta=cuentaV)
    carac = CuentaCarac.objects.filter(id_cuenta=cuentaV)

    context = {
        'cuenta':  cuentaV,
        'imagenes': imagenes,
        'carac' : carac
    }


    return render(request, 'Shopy/cuenta.html', context)




def vender(request):
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
        
        caracDesc = request.POST['destacar']
        precio = request.POST['precio']
        infoExtra = request.POST['info_extra']

        tpCuenta = TipoCuenta.objects.get(id_tipo_cuenta = idTipo)

        user = request.user

        maxC = Cuenta.objects.count()

        caracValor = 0

        for i in caracABuscar:
            carac = CaracTipoCuenta.objects.get(nom_carac=i.id_carac)
            if caracDesc == carac.nom_carac:
                caracValor = request.POST[carac.nom_carac]


        cuentaV = Cuenta.objects.create(
            id_cuenta=user,
            id_tipo_cuenta=tpCuenta,
            carac_desc=caracDesc,
            carac_valor=caracValor,
            precio=precio,
            info_ext=infoExtra,
            id = maxC + 1
        )
        cuentaV.save()

        for i in caracABuscar:
            
            carac = CaracTipoCuenta.objects.get(nom_carac=i.id_carac)
            valor = request.POST[carac.nom_carac]
            cuentaCarac = CuentaCarac.objects.create(id_carac = carac,
                                                     id_cuenta = cuentaV,
                                                     valor = valor)
            cuentaCarac.save()
        
        for i in archivos:
            print(type(i))
            imgn = ImagenCuenta.objects.create(id_cuenta = cuentaV,
                                              img = i)
            imgn.save()
        #context={'mensaje':"OK, datos grabados..."}
        #return render(request, 'Shopy/index.html', context)
        print('Cuenta Agregada')
        return redirect(to='cuenta', id=cuentaV.id)

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


def tienda(request):

    """    
    tipoCuenta = TipoCuenta.objects.all()
    cuentas = Cuenta.objects.all()
    cuentasCarac = CuentaCarac.objects.all()

    context = {'tipoCuenta' : tipoCuenta,
                'cuentas' : cuentas,
                'cuentasCarac' : cuentasCarac}"""
    
    user = request.user
    tipoCuenta = TipoCuenta.objects.all()
    context = {}
    context.update({
        'tipoCuenta' : tipoCuenta,
    })

    if user.is_authenticated:
        cuentas_usu = Cuenta.objects.filter(id_cuenta = user)
        cuentas_usu_cant = cuentas_usu.count()
        
        cuentas_vender = Cuenta.objects.filter(~Q(id_cuenta=user))

        context.update({'cuentas_usu':cuentas_usu})
        context.update({'cuentas_usu_cant':cuentas_usu_cant})

        context.update({'cuentas_vender':cuentas_vender})

    else:
        cuentas_vender = Cuenta.objects.all()

        context.update({'cuentas_vender':cuentas_vender})


    


    return render(request, 'Shopy/tienda.html', context)


def cargarFiltro(request, id):
    tipoCuenta = TipoCuenta.objects.all()

    if id == 0:
        return render(request, 'filtro_carac.html')
    try:
        carac = ConexionTipoCarac.objects.filter(id_tipo_cuenta=id)
        return render(request, 'filtro_carac.html', {'carac': carac})
    except:
        print("Error")
    return render(request, 'Shopy/tienda.html', {'tipoCuenta': tipoCuenta})


def registro(request):


    if request.method == 'POST':
        form = CrearUsuario(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(request, username=username, password=password)
            login(request, user)
            return redirect('index')  # Cambia 'inicio' con la URL de la página a la que deseas redirigir después del registro exitoso
    else:
        form = CrearUsuario()
    return render(request, 'Shopy/registro.html', {'form': form})

def aplicarFiltro(request, tipo):

    user = request.user
    context = {}
    print(type(tipo))
    print(tipo)

    

    if user.is_authenticated:


        if tipo != 0:
            cuentas_vender = Cuenta.objects.filter(~Q(id_cuenta=user), id_tipo_cuenta=tipo)

            context.update({'cuentas_vender':cuentas_vender})

        else:
            cuentas_vender = Cuenta.objects.filter(~Q(id_cuenta=user))
            
            context.update({'cuentas_vender':cuentas_vender})


    else:

        if tipo!= 0:
            cuentas_vender = Cuenta.objects.filter(id_tipo_cuenta=tipo)

            context.update({'cuentas_vender':cuentas_vender})

        else:
            cuentas_vender = Cuenta.objects.all()

            context.update({'cuentas_vender':cuentas_vender})

    return render(request, 'cuentas_vender.html', context)

def cargarFiltroIndex(request, tipo):
    user = request.user
    context = {}

    print(type(tipo))
    print(tipo)


    if user.is_authenticated:
        cuentas_usu = Cuenta.objects.filter(id_cuenta = user)
        cuentas_usu_cant = cuentas_usu.count()
        print(cuentas_usu)
        print("cuentas_usu")
        
        context.update({'cuentas_usu':cuentas_usu})
        context.update({'cuentas_usu_cant':cuentas_usu_cant})

        if tipo != 0:
            cuentas_vender = Cuenta.objects.filter(~Q(id_cuenta=user), id_tipo_cuenta=tipo)
            print(cuentas_vender)
            context.update({'cuentas_vender':cuentas_vender})
            

        else:
            cuentas_vender = Cuenta.objects.filter(~Q(id_cuenta=user))
            
            context.update({'cuentas_vender':cuentas_vender})
            print('else 1')

    else:

        if tipo!= 0:
            cuentas_vender = Cuenta.objects.filter(id_tipo_cuenta=tipo)

            context.update({'cuentas_vender':cuentas_vender})
            print('if 2')

        else:
            cuentas_vender = Cuenta.objects.all()

            context.update({'cuentas_vender':cuentas_vender})
            print('else 2')

    return render(request, 'Shopy/tienda.html', context)


def filtroValores(request, filtro):
    

    filtrosTupla = []
    tipo = int()
    subcadenas = filtro.split('@')
    for subcadena in subcadenas:
        if '=' in subcadena:
            clave, valor = subcadena.split('=')
            if clave == 'tipo':
                tipo = int(valor)
            else:
                filtrosTupla.append((clave, valor))

    user = request.user
    context = {}

    listaCuentas = []
    listaCaracs = []

    if user.is_authenticated:
        #cuentas_vender = Cuenta.objects.filter(~Q(id_cuenta=user), id_tipo_cuenta=tipo)

        # Filtrar por el tipo de cuenta
        if tipo:

            consulta_combinada = Q()

            for i in filtrosTupla:
                consulta_combinada |= Q(carac_valor=i[1], carac_desc=i[0])
            
            
            cuentas_vender = Cuenta.objects.filter(consulta_combinada, ~Q(id_cuenta=user), id_tipo_cuenta=tipo)

            context.update({'cuentas_vender': cuentas_vender})
    
    else:

    
        consulta_combinada = Q()
        for i in filtrosTupla:
            consulta_combinada |= Q(carac_valor=i[1], carac_desc=i[0])

        cuentas_vender = Cuenta.objects.filter(consulta_combinada, id_tipo_cuenta=tipo)

        context.update({'cuentas_vender': cuentas_vender})

    return render(request, 'cuentas_vender.html', context)



def eliminarCuenta(request, id):

    user = request.user

    if user.is_authenticated:
        context = {}
        try:
            cuentaV = Cuenta.objects.get(id=id)
            cuentaV.delete()
            mensaje = "Los datos fueron eliminados con éxito!!!"
            cuentas_usu = Cuenta.objects.filter(id_cuenta=user)
            context = {'cuentas_usu': cuentas_usu, 'mensaje': mensaje}
        except:
            mensaje = "Error D:"
            cuentas_usu = Cuenta.objects.filter(id_cuenta=user)
            context = {'cuentas_usu': cuentas_usu, 'mensaje': mensaje}

        return render(request, 'cuentas_usu.html', context)
        # Llamar a la función tienda para actualizar la página
    else:
        return render(request, 'cuentas_usu.html')
     


def agregarAlCarro(request, id):

    user = request.user
    if user.is_authenticated:
        context = {}
        cuentaV = Cuenta.objects.get(id=id)
        try:
            ag = Carro.objects.get(cuenta=cuentaV, user = user)

            context.update({'mensaje': 'La Cuenta ya esta en el carro'})
            return render(request, 'mensaje.html', context)
            # La consulta encontró una fila
            # Aquí puedes realizar las acciones que deseas cuando la consulta devuelve una fila

        except ObjectDoesNotExist:
        
            agregar =  Carro.objects.create(
                user = user,
                cuenta = cuentaV
            )
            agregar.save()

            context.update({'mensaje': 'La Cuenta fue agregada al carro.'})
            return render(request, 'mensaje.html', context)
    return render(request, 'Shopy/tienda.html')


def carro(request):

    user = request.user
    context = {}

    contenido = Carro.objects.filter(user = user)
    total = contenido.aggregate(total=Sum('cuenta__precio'))
    stringTipos = contenido.values_list('cuenta__id_tipo_cuenta__nom_tipo_cuenta', flat=True).distinct()
    tipos_cuenta_string = ', '.join(stringTipos)

    context.update({'contenido':contenido})
    context.update({'total':total})
    context.update({'stringTipos':tipos_cuenta_string})


    return render(request, 'Shopy/carro.html', context)


def eliminarDelCarro(request, id):

    user = request.user
    cuentaV = Cuenta.objects.get(id = id)
    carroElement = Carro.objects.get(user = user, cuenta = cuentaV)
    carroElement.delete()

    context = {}

    contenido = Carro.objects.filter(user = user)

    context.update({'contenido':contenido})


    return render(request, 'contenido_carro.html', context)


def comprar(request):

    user = request.user

    carro = Carro.objects.filter(user=user)
    cuentas_a_eliminar = carro.values_list('cuenta', flat=True)
    Cuenta.objects.filter(id__in=cuentas_a_eliminar).delete()

    context = {}
    context.update({'comprar':"Cuentas Compradas"})

    return render(request,'contenido_carro.html', context)







def login_view(request):
    if request.method == 'POST':
        # Validar el formulario
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            # Obtener las credenciales del formulario
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            # Verificar si el usuario está registrado
            user = authenticate(username=username, password=password)
            if user is not None:
                # El usuario está registrado, realizar la autenticación y redireccionar a otra página
                login(request, user)
                return redirect(to='index')
            else:
                # El usuario no está registrado, agregar mensaje de error
                return render(request, 'login', {'messagge':'El usuario no está registrado'})
               
        else:
            # El formulario no es válido, mostrar el formulario con los errores
            pass
    else:
        # Mostrar el formulario vacío
        form = AuthenticationForm()

    return render(request, 'registration/login.html', {'form': form})


@login_required
def editar(request):
    if request.method == 'POST':
        form = EditarUsuarioForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('index')  # Redirige a la página de perfil o a donde desees

    else:
        form = EditarUsuarioForm(instance=request.user)

    return render(request, 'Shopy/editar.html', {'form': form})


def cambiarcontra(request):
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)
            logout(request)  # Cierra la sesión del usuario
            return redirect('login')  # Redirige a la página de login para volver iniciar sesion ya que cambio la contraseña
    else:
        form = PasswordChangeForm(request.user)
    return render(request, 'Shopy/cambiarcontra.html', {'form': form})

