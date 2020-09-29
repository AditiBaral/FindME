# Generated by Django 3.0.8 on 2020-09-29 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0018_auto_20200928_1028'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdata',
            name='firstIntro',
            field=models.CharField(default='## Short Introduction about me ##', max_length=125),
        ),
        migrations.AlterField(
            model_name='userdata',
            name='profilePicture',
            field=models.CharField(default='/static/frontend/user.png', max_length=250),
        ),
        migrations.AlterField(
            model_name='userdata',
            name='secondIntro',
            field=models.CharField(default='Know about my skills, interest and projects here.', max_length=250),
        ),
        migrations.AlterField(
            model_name='userdata',
            name='shadowText',
            field=models.CharField(default='I am a student/ professional/ designer/ ..................', max_length=100),
        ),
        migrations.AlterField(
            model_name='userdata',
            name='theme',
            field=models.CharField(default='white', max_length=10),
        ),
        migrations.AlterField(
            model_name='userdata',
            name='userHeader',
            field=models.CharField(default='Welcome to my portfolio.', max_length=100),
        ),
    ]
