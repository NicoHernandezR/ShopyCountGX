from django.urls import path
from . import views

urlpatterns = [
    path('index', views.index, name='index'),
    path('vender',views.vender, name='vender'),
    path('vender/<int:id>', views.cargarCarac, name='cargarCarac'),
    path('tienda',views.tienda, name='tienda'),
    path('tienda/<int:id>',views.cargarFiltro, name='cargarFiltro'),
    path('aplicarFiltro/<int:tipo>', views.aplicarFiltro, name='aplicarFiltro'),
    path('filtroValores/<str:filtro>', views.filtroValores, name='filtroValores'),
    path('eliminarCuenta/<int:id>', views.eliminarCuenta, name='eliminarCuenta'),
    path('registro',views.registro, name='registro'),
    path('cuenta/<int:id>',views.cuenta, name='cuenta'),
    #path('alumnosList', views.alumnosList, name='alumnosList'),
    #path('alumnosAdd', views.alumnosAdd, name='alumnosAdd'),
]