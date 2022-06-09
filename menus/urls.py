from django.urls import URLPattern, path
from.views import MenuListView, MenuDetailView

urlpatterns = [
    path('', MenuListView.as_view()),
    path('<int:pk>/',MenuDetailView.as_view())
]