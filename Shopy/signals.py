from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from .models import TipoCuenta, CaracTipoCuenta, ConexionTipoCarac, Cuenta, ImagenCuenta, CuentaCarac, Carro

@receiver(post_save, sender=User)
def asignar_permisos_usuario(sender, instance, created, **kwargs):
    if created:
        # Obtener los content types de los modelos
        cuenta_content_type = ContentType.objects.get_for_model(Cuenta)
        imagen_cuenta_content_type = ContentType.objects.get_for_model(ImagenCuenta)
        cuenta_carac_content_type = ContentType.objects.get_for_model(CuentaCarac)
        carro_content_type = ContentType.objects.get_for_model(Carro)


        cuenta_permissions = Permission.objects.filter(content_type=cuenta_content_type)
        imagen_cuenta_permissions = Permission.objects.filter(content_type=imagen_cuenta_content_type)
        cuenta_carac_permissions = Permission.objects.filter(content_type=cuenta_carac_content_type)
        carro_permissions = Permission.objects.filter(content_type=carro_content_type)


        instance.user_permissions.set(cuenta_permissions | imagen_cuenta_permissions | cuenta_carac_permissions | carro_permissions)