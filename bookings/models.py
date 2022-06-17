from django.db import models

# Create your models here.


class Booking(models.Model):
    name = models.CharField(max_length=50, default=None)
    email = models.EmailField(default=None)
    phone = models.PositiveBigIntegerField(default=None)
    number_of_guests = models.PositiveIntegerField(default=None)
    Date = models.DateField(default=None)
    time = models.TimeField(default=None)

    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='bookings',
        on_delete=models.CASCADE,
    )

    location = models.ForeignKey(
        'locations.Location',
        related_name='bookings',
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"{self.name}"
