from django.contrib import admin
from .models import Usuario,TipoCuenta, CaracTipoCuenta, ConexionTipoCarac
from .models import Cuenta, ImagenCuenta, CuentaCarac, Carro

# Register your models here.
admin.site.register(Usuario)
admin.site.register(TipoCuenta)
admin.site.register(CaracTipoCuenta)
admin.site.register(ConexionTipoCarac)
admin.site.register(Cuenta)
admin.site.register(ImagenCuenta)
admin.site.register(CuentaCarac)
admin.site.register(Carro)