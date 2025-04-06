
# Create your models here.
from django.db import models

class Quadro(models.Model):
    nome = models.CharField(max_length=100)
    responsavel = models.CharField(max_length=100)
    ativo = models.BooleanField(default=True)

    def __str__(self):
        return self.nome
