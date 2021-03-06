# Generated by Django 3.0.8 on 2020-09-24 17:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('skills', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('database', '0011_userdata_totalrating'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdata',
            name='interest_opt',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='skills.WorkField'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userdata',
            name='is_available',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='userdata',
            name='skill_opt',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='skills.Skill'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userdata',
            name='user',
            field=models.OneToOneField(default=0, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='userdata',
            name='userName',
            field=models.CharField(max_length=100, primary_key=True, serialize=False, unique=True),
        ),
    ]
