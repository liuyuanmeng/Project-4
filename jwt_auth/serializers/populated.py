from .common import UserSerializer
from bookings.serializers.populated import PopulatedBookingSerializer

class PopulatedUserSerializer(UserSerializer):
    bookings = PopulatedBookingSerializer(many=True)