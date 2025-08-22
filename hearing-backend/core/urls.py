from django.urls import path

from .views import RegisterView, LoginView, TelegramAuthView, VKIDAuthView, CompleteProfileView, QuestionsView, StreakView, CsrfView, SubmitTestView, MyTestsSummaryView, MyTestByDayView, AuthStatusView, CalmingVideoView, FeedbackSubmitView

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

    # VK ID endpoint
    path('auth/vk/', VKIDAuthView.as_view(), name='vkid_auth'),

    # Complete profile after OAuth
    path('auth/complete-profile/', CompleteProfileView.as_view(), name='complete_profile'),

    # Questions endpoint
    path('questions/', QuestionsView.as_view(), name='questions'),

    # Streak endpoint
    path('streak/', StreakView.as_view(), name='streak'),

    # Tests endpoints
    path('tests/submit/', SubmitTestView.as_view(), name='tests_submit'),
    path('tests/mine/', MyTestsSummaryView.as_view(), name='tests_mine'),
    path('tests/mine/<int:day>/', MyTestByDayView.as_view(), name='tests_mine_by_day'),

    # Calming video segment endpoint
    path('calming/', CalmingVideoView.as_view(), name='calming_video'),

    # Feedback endpoint
    path('feedback/submit/', FeedbackSubmitView.as_view(), name='feedback_submit'),
]