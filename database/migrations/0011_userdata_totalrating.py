# Generated by Django 3.0.8 on 2020-09-21 08:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0010_userdata_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdata',
            name='totalRating',
            field=models.IntegerField(default=0),
        ),
    ]
