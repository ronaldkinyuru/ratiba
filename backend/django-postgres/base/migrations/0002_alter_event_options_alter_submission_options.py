# Generated by Django 5.1.2 on 2024-10-28 14:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='event',
            options={'ordering': ['date']},
        ),
        migrations.AlterModelOptions(
            name='submission',
            options={'ordering': ['event']},
        ),
    ]
