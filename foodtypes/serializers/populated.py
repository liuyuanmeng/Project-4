from .common import FoodtypeSerializer
from menus.serializers.common import MenuSerializer

class PopulatedFoodtypeSerializer(FoodtypeSerializer):
    menus = MenuSerializer(many=True)