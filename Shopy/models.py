from django.db import models

# Create your models here.
class Usuario(models.Model):
    id_usu = models.AutoField(db_column='id_usu', primary_key=True)
    nom_usu = models.CharField(max_length=25, blank=False, null=False)
    email = models.EmailField(unique=True, max_length=100, blank=True, null=True)
    pw_usu = models.CharField(max_length=25, blank=False, null=False)
    
    
    def __str__(self):
        return str(self.nom_usu)
    
    
class TipoCuenta(models.Model):
    id_tipo_cuenta = models.AutoField(db_column='id_tipo_cuenta', primary_key=True)
    nom_tipo_cuenta = models.CharField(max_length=25, blank=False, null=False)
    
    def __str__(self):
        return str(self.nom_tipo_cuenta) 
    

class CaracTipoCuenta(models.Model):
    id_carac = models.AutoField(db_column='id_carac', primary_key=True)
    nom_carac = models.CharField(max_length=25, blank=False, null=False)
    min_carac = models.IntegerField()
    max_carac = models.IntegerField()
    
    def __str__(self):
        return str(self.nom_carac)
    
class ConexionTipoCarac(models.Model):
    id_tipo_cuenta = models.ForeignKey('TipoCuenta',on_delete=models.CASCADE, db_column='id_tipo_cuenta')  
    id_carac = models.ForeignKey('CaracTipoCuenta',on_delete=models.CASCADE, db_column='id_carac')
      
    def __str__(self):
        return str(self.id_tipo_cuenta) + " " + str(self.id_carac)
      
class Cuenta(models.Model):
    id_cuenta = models.AutoField(db_column='id_cuenta', primary_key=True)
    id_tipo_cuenta = models.ForeignKey('TipoCuenta',on_delete=models.CASCADE, db_column='id_tipo_cuenta')
    carac_desc = models.CharField(max_length=25, blank=False, null=False)
    precio = models.IntegerField()
    info_ext = models.TextField(blank=False, null=False)
    
class ImagenCuenta(models.Model):
    id_img = models.AutoField(db_column='id_img', primary_key=True)
    id_cuenta = models.ForeignKey('Cuenta',on_delete=models.CASCADE, db_column='id_carac')
    img = models.ImageField(upload_to="ImagenesCuentas", null=True)

    
    
class CuentaCarac(models.Model):
    id_carac = models.ForeignKey('CaracTipoCuenta',on_delete=models.CASCADE, db_column='id_carac')
    id_cuenta = models.ForeignKey('Cuenta',on_delete=models.CASCADE, db_column='id_cuenta')
    valor = models.IntegerField()
    
    def __str__(self):
        return str(self.valor)
    

    