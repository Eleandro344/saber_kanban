from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import QuadroViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import QuadroViewSet, TarefaViewSet

router = DefaultRouter()
router.register(r'quadros', QuadroViewSet)
router.register(r'tarefas', TarefaViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
