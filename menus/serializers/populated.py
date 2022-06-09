from .common import MenuSerializer
from foodtype.serializers.common import FoodtypeSerializer


class PopulatedMenuSerializer(MenuSerializer):
    foodtype = FoodtypeSerializer(many=True)
