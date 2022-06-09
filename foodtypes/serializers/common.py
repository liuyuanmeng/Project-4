from dataclasses import field
from rest_framework.serializers import ModelSerializer
from ..models import Foodtype

class FoodtypeSerializer(ModelSerializer):
    class Meta:
        model = Foodtype
        fields = '__all__'
        # fields = ('name',)
