from django.urls import path

from .views import RegisterView, LoginView, TelegramAuthView, QuestionsView, StreakView, CsrfView, SubmitTestView, MyTestsSummaryView, MyTestByDayView, AuthStatusView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    # Session login endpoint:
    path('login/', LoginView.as_view(), name='login'),

    # CSRF endpoint
    path('csrf/', CsrfView.as_view(), name='csrf'),

    # Auth status endpoint
    path('auth/status/', AuthStatusView.as_view(), name='auth_status'),

    # Telegram Login Widget endpoint
    path('auth/telegram/', TelegramAuthView.as_view(), name='telegram_auth'),

    # Questions endpoint
    path('questions/', QuestionsView.as_view(), name='questions'),

    # Streak endpoint
    path('streak/', StreakView.as_view(), name='streak'),

    # Tests endpoints
    path('tests/submit/', SubmitTestView.as_view(), name='tests_submit'),
    path('tests/mine/', MyTestsSummaryView.as_view(), name='tests_mine'),
    path('tests/mine/<int:day>/', MyTestByDayView.as_view(), name='tests_mine_by_day'),
]