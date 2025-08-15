from django.urls import path

from .views import RegisterView, LoginView, EmailTokenObtainPairView, TelegramAuthView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    # Legacy session login (not used with JWT, kept for compatibility):
    path('login/', LoginView.as_view(), name='login'),

    # JWT endpoints:
    path('token/', EmailTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Telegram Login Widget endpoint
    path('auth/telegram/', TelegramAuthView.as_view(), name='telegram_auth'),
]