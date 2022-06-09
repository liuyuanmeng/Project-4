from .common import MenuSerializer
from foodtypes.serializers.common import FoodtypeSerializer


class PopulatedMenuSerializer(MenuSerializer):
    foodtypes = FoodtypeSerializer(many=True)
