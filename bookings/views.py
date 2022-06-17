from email import message
from django.shortcuts import render
from .models import Booking
from locations.models import Location
from .serializers.common import BookingSerializer
from .serializers.populated import PopulatedBookingSerializer # imports the populated serializer that includes the reviews field
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, ValidationError, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from project import settings
from django.core.mail import send_mail
from datetime import date, time, datetime
# Create your views here.

class BookingView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    # GET - Returns all bookings
    def get(self, request):
        # in this controller, we just want to get all the items inside the albums table and return it as a response
        bookings = Booking.objects.all() # get all fields using all() method
        bookings_filter = list(filter((lambda booking: booking.owner == request.user), bookings))
        # .all() returns a QuerySet, we need to use the serializer to convert this into a python datatype
        serialized_bookings = PopulatedBookingSerializer(bookings_filter, many=True) # if we expect multiple items in the QuerySet, use many=True
        print('serialized data ->', serialized_bookings.data)
        return Response(serialized_bookings.data, status=status.HTTP_200_OK) # Response sends data and status back to the user as a response
    
    def post(self, request):
        request.data['owner'] = request.user.id
        location_name = request.data['location']
        date_formatted = datetime.strptime(request.data['Date'], '%Y-%m-%d').strftime('%A %d. %B %Y')
        request.data['location'] = Location.objects.get(name=request.data['location']).id
        # request.data['Date'] = datetime.strptime(request.data['Date'], '%Y-%m-%d').date()
        # request.data['time'] = datetime.strptime(request.data['time'], '%H:%M').time()
        print('request ->', request.data)
        booking_to_add = BookingSerializer(data=request.data)
        try:
            booking_to_add.is_valid(True)
            booking_to_add.save()
            to_email = request.data['email']
            mail_subject = 'My Kitchen - Booking Confirmation'
            mail_message = 'We will see you on {date} at {time} at our {location} restaurant! \n\nKind regards, \nDaisy'.format(date=date_formatted, time=request.data['time'], location=location_name)
            send_mail(subject=mail_subject, message=mail_message, from_email=settings.EMAIL_HOST_USER, recipient_list=[to_email], auth_user=settings.EMAIL_HOST_USER, auth_password=settings.EMAIL_HOST_PASSWORD)
        #  return Response(booking_to_add.data, status.HTTP_201_CREATED)
            return Response({'message': f"Thank you for booking, {request.data['name']}"}, status.HTTP_201_CREATED)
        except ValidationError:
            return Response(booking_to_add.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
        except Exception as e:
            print(e)
            return Response({'detail': str(e)}, status.HTTP_422_UNPROCESSABLE_ENTITY)


class BookingDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    def get_booking(self, pk):
        try:
            return Booking.objects.get(pk=pk)
        except Booking.DoesNotExist:
            raise NotFound("Booking not found")

    # GET - Return 1 item from the bookings table
    def get(self, request, pk):
        booking = self.get_booking(pk)
        print('booking --->', booking)
        serialized_booking = PopulatedBookingSerializer(booking)
        return Response(serialized_booking.data, status.HTTP_200_OK)

    def delete(self, request, pk):
        booking_to_delete = self.get_booking(pk)
        if booking_to_delete.owner !=request.user:
            raise PermissionDenied()
        booking_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        booking_to_update = self.get_booking(pk=pk)
        if booking_to_update.owner !=request.user:
            raise PermissionDenied()
        deserialized_booking = BookingSerializer(booking_to_update, request.data)
        try:
            deserialized_booking.is_valid()
            print(deserialized_booking)
            deserialized_booking.save()
            return Response(deserialized_booking.data, status.HTTP_202_ACCEPTED)
        except Exception as e:
            print(e)
            return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)

