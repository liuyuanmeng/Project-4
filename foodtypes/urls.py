from django.urls import path
from .views import FoodtypeListView


urlpatterns = [
    path('', FoodtypeListView.as_view())
]