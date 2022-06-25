from django.db import models

class Dish(models.Model):
    name = models.CharField(max_length=100, default=None)
    price = models.PositiveIntegerField(default=None)
    image = models.CharField(max_length=500)
    foodtype =  models.ForeignKey(
        'foodtypes.Foodtype',
        related_name='dishes',
        on_delete=models.CASCADE
    )




    def __str__(self):
        return f"{self.name} - {self.price} ({self.image})"
