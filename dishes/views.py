# rest_framework imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.exceptions import NotFound 

# custom imports
from .models import Dish
from .serializers.common import DishSerializer
from.serializers.populated import PopulatedDishSerializer




class DishListView(APIView):
    

    def get(self, _request):
        
        dishes = Dish.objects.all() 
       
        serialized_dishes = PopulatedDishSerializer(dishes, many=True)
        print('serialized data ->', serialized_dishes.data)
        return Response(serialized_dishes.data, status=status.HTTP_200_OK) 

    


# ENDPOINT: /dishes/:pk/
class DishDetailView(APIView):

    
    def get_dish(self, pk):
        try:
           
            return Dish.objects.get(pk=pk)
        except Dish.DoesNotExist as e:
            print(e)
            raise NotFound({ 'detail': str(e) })

    # GET - Return 1 item from the dishes table
    def get(self, _request, pk):
        dish = self.get_dish(pk)
        print('dish --->', dish)
        serialized_dish = DishSerializer(dish)
        return Response(serialized_dish.data, status.HTTP_200_OK)
    

    

   

