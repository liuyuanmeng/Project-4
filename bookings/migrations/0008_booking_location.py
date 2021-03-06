# Generated by Django 4.0.5 on 2022-06-11 20:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0001_initial'),
        ('bookings', '0007_alter_booking_date_alter_booking_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='location',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='bookings', to='locations.location'),
            preserve_default=False,
        ),
    ]
