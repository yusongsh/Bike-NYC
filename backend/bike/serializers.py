# from dataclasses import field
from unicodedata import lookup
from rest_framework import serializers
from .models import Park, Path, Bikes, Review


class ParkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Park
        fields = '__all__'


class BikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bikes
        fields = '__all__'


class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    paths = serializers.HyperlinkedRelatedField(
        view_name='path_list',
        read_only=True
    )
    path_id = serializers.PrimaryKeyRelatedField(
        queryset=Path.objects.all(),
        source='path'
    )

    class Meta:
        model = Review
        fields = ('id', 'name', 'description', 'paths', 'path_id')


class PathSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(
        many=True,
        read_only=True
    )
    path_url = serializers.ModelSerializer.serializer_url_field(
        view_name='path_detail'
    )

    class Meta:
        model = Path
        fields = ('id', 'name', 'length', 'start_point',
                  'end_point', 'elevation', 'route_type',
                  'photo_url', 'reviews', 'path_url', 'description')
