from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from .serializers.populated import PopulatedLocationSerializer
from .models import Location

# Endpoint: /locations/
class LocationListView(APIView):

    def get(self, _request):
        locations = Location.objects.all()
        serialized_locations = PopulatedLocationSerializer(locations, many=True)
        return Response(serialized_locations.data)

