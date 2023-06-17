from django.urls import path
from . import views

urlpatterns = [
    path('index', views.index, name='index'),
    path('registro', views.registro, name='registro'),
    path('iniciodesesion', views.iniciodesesion, name='iniciodesesion'),
    #path('alumnosList', views.alumnosList, name='alumnosList'),
    #path('alumnosAdd', views.alumnosAdd, name='alumnosAdd'),
]