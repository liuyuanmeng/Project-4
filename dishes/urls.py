from django.urls import URLPattern, path
from .views import DishListView, DishDetailView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', DishListView.as_view()),
    path('<int:pk>/',DishDetailView.as_view())
]
