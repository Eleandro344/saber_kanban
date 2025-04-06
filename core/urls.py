from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import QuadroViewSet

router = DefaultRouter()
router.register(r'quadros', QuadroViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
