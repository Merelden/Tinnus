from django.urls import path
from .views import (
    FormDetailView,
    FormGroupDetailView,
    FormByDaysView,
    SubmitFormView,
)

urlpatterns = [
    path('forms/<int:form_id>/', FormDetailView.as_view(), name='form-detail'),
    path('form-groups/<int:group_id>/', FormGroupDetailView.as_view(), name='form-group-detail'),
    path('forms/current/', FormByDaysView.as_view(), name='form-by-days'),
    path('forms/submit/', SubmitFormView.as_view(), name='form-submit'),
]
