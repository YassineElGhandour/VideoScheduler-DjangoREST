# Generated by Django 2.1 on 2018-09-09 13:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('uploadvideos', '0008_uploadvideos_positionsdb'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='uploadvideos',
            name='hourvid',
        ),
        migrations.RemoveField(
            model_name='uploadvideos',
            name='minutevid',
        ),
    ]
