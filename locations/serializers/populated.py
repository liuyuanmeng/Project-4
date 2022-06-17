from .common import LocationSerializer
from bookings.serializers.common import BookingSerializer

class PopulatedLocationSerializer(LocationSerializer):
    bookings = BookingSerializer(many=True)