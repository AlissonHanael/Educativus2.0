from rest_framework import serializers
from .models import Aula, Categoria, Manual
from django.contrib.auth.models import User


class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = ('id', 'titulo_aula', 'url_aula',
                  'descricao_aula', 'categoria_aula')


class CategoriaSerializer(serializers.ModelSerializer):
    imagem_categoria = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = Categoria
        fields = ('id', 'nome_categoria', 'imagem_categoria')


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'is_staff')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'is_staff')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        is_staff = validated_data.pop('is_staff', False)
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'])
        user.is_staff = is_staff
        user.save()
        return user


class ManualSerializer(serializers.ModelSerializer):
    pdf_file = serializers.FileField(
        max_length=None, use_url=True, required=False)

    class Meta:
        model = Manual
        fields = ('id', 'titulo_pdf', 'pdf_file',
                  'descricao_pdf', 'categoria_pdf')
