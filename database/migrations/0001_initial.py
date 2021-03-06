# Generated by Django 3.0.8 on 2020-08-11 16:06

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userName', models.CharField(max_length=100)),
                ('theme', models.CharField(max_length=10)),
                ('profilePicture', models.CharField(max_length=250)),
                ('shadowText', models.CharField(max_length=100)),
                ('firstIntro', models.CharField(max_length=125)),
                ('secondIntro', models.CharField(max_length=250)),
                ('skills', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=50), size=None)),
                ('socialLinks', django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=150), size=None), size=None)),
                ('projects', django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=250), size=None), size=None)),
            ],
        ),
    ]
