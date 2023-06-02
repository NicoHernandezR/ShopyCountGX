from django.urls import path
from . import views

urlpatterns = [
    path('index', views.index, name='index'),
    path('vender',views.vender, name='vender'),
    path('vender/<int:id>', views.cargarCarac, name='cargarCarac'),
    #path('alumnosList', views.alumnosList, name='alumnosList'),
    #path('alumnosAdd', views.alumnosAdd, name='alumnosAdd'),
]