from django.urls import path
from . import views

urlpatterns = [
    path('index', views.index, name='index'),
    #path('alumnosList', views.alumnosList, name='alumnosList'),
    #path('alumnosAdd', views.alumnosAdd, name='alumnosAdd'),
]