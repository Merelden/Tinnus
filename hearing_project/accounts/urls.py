from django.urls import path
from .views import AutoLoginView, ConsentView, ProfileUpdateView, RegisterView, LoginView, MeView, FeedbackResponseView

urlpatterns = [
    path('auto-login/', AutoLoginView.as_view(), name='auto_login'),      
    path('consent/', ConsentView.as_view(), name='consent'),              
    path('profile/', ProfileUpdateView.as_view(), name='profile_update'), 
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('me/', MeView.as_view()),
    path('feedback/', FeedbackResponseView.as_view(), name='feedback-response'),

]
