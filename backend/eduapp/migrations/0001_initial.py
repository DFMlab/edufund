# Generated by Django 3.2.13 on 2022-05-20 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('metaURI', models.URLField(max_length=512, unique=True)),
                ('dataURI', models.URLField(max_length=512, unique=True)),
            ],
        ),
    ]
