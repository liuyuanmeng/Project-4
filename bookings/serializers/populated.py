from .common import BookingSerializer
from locations.serializers.common import LocationSerializer
from jwt_auth.serializers.common import UserSerializer
class PopulatedBookingSerializer(BookingSerializer):
    owner = UserSerializer()
    location = LocationSerializer()
