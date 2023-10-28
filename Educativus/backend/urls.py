from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from .views import RegisterAPI
from knox import views as knox_views
from .views import LoginAPI


urlpatterns = [
    path('api/aulas', views.ListaAula.as_view()),
    path('api/aulas/<int:pk>/', views.DetalhesAula.as_view()),
    path('api/categoria', views.ListaCategoria.as_view()),
    path('api/categoria/<int:pk>/', views.DetalhesCategoria.as_view()),
    path('api/manuais/', views.ListaManual.as_view()),
    path('api/manuais/<int:pk>/', views.DetalhesManual.as_view()),
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),


]


urlpatterns = format_suffix_patterns(urlpatterns)
