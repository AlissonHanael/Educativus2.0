from django.contrib import admin

from .models import Categoria, Aula, Manual


admin.site.register(Categoria)
admin.site.register(Aula)
admin.site.register(Manual)
