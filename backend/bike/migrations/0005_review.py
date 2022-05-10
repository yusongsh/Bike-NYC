# Generated by Django 4.0.4 on 2022-05-09 16:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0004_delete_review'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('path', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='review', to='bike.path')),
            ],
        ),
    ]