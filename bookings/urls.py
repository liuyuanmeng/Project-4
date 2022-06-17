from django.urls import URLPattern, path 
from .views import BookingView, BookingDetailView

urlpatterns = [

    path('', BookingView.as_view()),
    path('<int:pk>/', BookingDetailView.as_view())
]