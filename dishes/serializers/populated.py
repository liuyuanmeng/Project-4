from .common import DishSerializer
from foodtypes.serializers.common import FoodtypeSerializer


class PopulatedDishSerializer(DishSerializer):
    foodtype = FoodtypeSerializer(many=False)
