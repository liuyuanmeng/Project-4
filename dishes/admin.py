from django.contrib import admin
from .models import Dish



# Register your models here.
class DishAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
admin.site.register(Dish, DishAdmin)
