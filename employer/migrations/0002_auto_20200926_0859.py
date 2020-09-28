# Generated by Django 3.0.8 on 2020-09-26 08:59

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employer', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employerdata',
            name='skill_opt',
        ),
        migrations.RemoveField(
            model_name='jobs',
            name='skill_opt',
        ),
        migrations.AddField(
            model_name='employerdata',
            name='skills',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=50), default=list, size=None),
        ),
        migrations.AddField(
            model_name='employerdata',
            name='skills_opt',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), default=list, size=None),
        ),
        migrations.AddField(
            model_name='jobs',
            name='skills_opt',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), default=list, size=None),
        ),
    ]