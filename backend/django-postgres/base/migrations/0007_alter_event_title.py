# Generated by Django 5.1.2 on 2024-11-01 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_alter_event_options_rename_name_event_title_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='title',
            field=models.CharField(max_length=140),
        ),
    ]
