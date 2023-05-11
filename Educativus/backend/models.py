from django.db import models

# Create your models here.


#Modelo Categoria
def up_imagem_categoria(instance, filename):
    return f'{instance.nome_categoria}-{filename}'


class Categoria(models.Model):
    nome_categoria = models.CharField(max_length=100, blank=False)
    imagem_categoria = models.ImageField(upload_to=up_imagem_categoria, blank=True)

    def __str__(self):
        return f'{self.nome_categoria}'


#Modelo Aula
class Aula(models.Model):
    titulo_aula = models.CharField(max_length=100, blank=False)
    url_aula = models.CharField(max_length=50, blank=False, unique=True)
    descricao_aula = models.TextField()
    categoria_aula = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.titulo_aula} {self.categoria_aula}'



