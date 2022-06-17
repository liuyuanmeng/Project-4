from .common import FoodtypeSerializer
from dishes.serializers.common import DishSerializer

class PopulatedFoodtypeSerializer(FoodtypeSerializer):
    dishes = DishSerializer(many=True)