# Generated by Django 4.2 on 2023-05-10 11:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_categoria', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Aula',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo_aula', models.CharField(max_length=100)),
                ('url_aula', models.CharField(max_length=50, unique=True)),
                ('descricao_aula', models.TextField()),
                ('categoria_aula', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.categoria')),
            ],
        ),
    ]
