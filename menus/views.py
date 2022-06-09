# rest_framework imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.exceptions import NotFound 

# custom imports
from .models import Menu
from .serializers.common import MenuSerializer
# from .serializers.populated import PopulatedMenuSerializer




class MenuListView(APIView):
    

    def get(self, _request):
        
        menus = Menu.objects.all() 
       
        serialized_menus = MenuSerializer(menus, many=True)
        print('serialized data ->', serialized_menus.data)
        return Response(serialized_menus.data, status=status.HTTP_200_OK) 

    


# ENDPOINT: /menus/:pk/
class MenuDetailView(APIView):

    
    def get_menu(self, pk):
        try:
           
            return Menu.objects.get(pk=pk)
        except Menu.DoesNotExist as e:
            print(e)
            raise NotFound({ 'detail': str(e) })

    # GET - Return 1 item from the menus table
    def get(self, _request, pk):
        menu = self.get_menu(pk)
        print('menu --->', menu)
        serialized_menu = MenuSerializer(menu)
        return Response(serialized_menu.data, status.HTTP_200_OK)
    

    

   

