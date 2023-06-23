from django.urls import path
from . import views
from .views import login_view

urlpatterns = [
    path('index', views.index, name='index'),
    path('vender',views.vender, name='vender'),
    path('vender/<int:id>', views.cargarCarac, name='cargarCarac'),
    path('tienda',views.tienda, name='tienda'),
    path('tienda/<int:id>',views.cargarFiltro, name='cargarFiltro'),
    path('registro',views.registro, name='registro'),
    path('cuenta/<int:id>',views.cuenta, name='cuenta'),
    path('login/', login_view, name='login'),
    #path('alumnosList', views.alumnosList, name='alumnosList'),
    #path('alumnosAdd', views.alumnosAdd, name='alumnosAdd'),
]