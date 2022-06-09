from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers.populated import PopulatedFoodtypeSerializer
from .models import Foodtype

# Create your views here.


class FoodtypeListView(APIView):
    def get(self, _request):
        foodtypes = Foodtype.objects.all()
        serialized_foodtypes = PopulatedFoodtypeSerializer(foodtypes, many=True)
        return Response(serialized_foodtypes.data)