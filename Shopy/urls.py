from django.urls import path
from . import views

from .views import login_view


urlpatterns = [
    path('index', views.index, name='index'),
    path('vender',views.vender, name='vender'),
    path('vender/<int:id>', views.cargarCarac, name='cargarCarac'),
    path('tienda',views.tienda, name='tienda'),
    path('tienda/<int:id>',views.cargarFiltro, name='cargarFiltro'),

    path('aplicarFiltro/<int:tipo>', views.aplicarFiltro, name='aplicarFiltro'),
    path('cargarFiltroIndex/<int:tipo>', views.cargarFiltroIndex, name='cargarFiltroIndex'),
    path('filtroValores/<str:filtro>', views.filtroValores, name='filtroValores'),
    path('eliminarCuenta/<int:id>', views.eliminarCuenta, name='eliminarCuenta'),
    path('agregarAlCarro/<int:id>', views.agregarAlCarro, name='agregarAlCarro'),
    path('registro',views.registro, name='registro'),
    path('cuenta/<int:id>',views.cuenta, name='cuenta'),
    path('carro',views.carro, name='carro'),
    path('comprar',views.comprar, name='comprar'),
    path('eliminarDelCarro/<int:id>',views.eliminarDelCarro, name='eliminarDelCarro'),

    path('registro',views.registro, name='registro'),
    path('cuenta/<int:id>',views.cuenta, name='cuenta'),
    path('login/', login_view, name='login'),
    path('editar/', views.editar, name='editar'),
    path('cambiarcontra/', views.cambiarcontra, name='cambiarcontra'),

    #path('alumnosList', views.alumnosList, name='alumnosList'),
    #path('alumnosAdd', views.alumnosAdd, name='alumnosAdd'),
]
