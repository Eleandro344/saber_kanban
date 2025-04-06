from django.contrib import admin
from django.urls import path
from core.views import CustomTokenObtainPairView  # ✅ CORRETO
from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import include  # certifique-se de importar isso também

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include('core.urls')),  # 👈 Adicione esta linha

]