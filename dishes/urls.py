from django.urls import URLPattern, path
from.views import DishListView, DishDetailView

urlpatterns = [
    path('', DishListView.as_view()),
    path('<int:pk>/',DishDetailView.as_view())
]