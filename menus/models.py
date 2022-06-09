from django.db import models

class Menu(models.Model):
    name = models.CharField(max_length=100, default=None)
    price = models.PositiveIntegerField(default=None)
    image = models.ImageField(upload_to='files/covers')
    foodtypes = models.ManyToManyField(
        'foodtypes.Foodtype',
        related_name='menus'
    )
  



    def __str__(self):
        return f"{self.name} - {self.price} ({self.image})"
