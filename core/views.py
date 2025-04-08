from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Quadro
from .serializers import QuadroSerializer
from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from .models import Tarefa
from .serializers import TarefaSerializer
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class QuadroViewSet(viewsets.ModelViewSet):
    queryset = Quadro.objects.all()
    serializer_class = QuadroSerializer
    permission_classes = [IsAuthenticated]  


class TarefaViewSet(viewsets.ModelViewSet):
    queryset = Tarefa.objects.all()
    serializer_class = TarefaSerializer
