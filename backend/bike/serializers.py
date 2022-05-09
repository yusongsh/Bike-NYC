# from dataclasses import field
from unicodedata import lookup
from rest_framework import serializers
from .models import Park, Path, Bikes


class ParkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Park
        fields = '__all__'


class BikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bikes
        fields = '__all__'


class PathSerializer(serializers.ModelSerializer):
    class Meta:
        model = Path
        fields = '__all__'


# class ReviewSerializer(serializers.HyperlinkedModelSerializer):
#     paths = serializers.HyperlinkedRelatedField(
#         view_name='path_list',
#         read_only=True
#     )

#     class Meta:
#         model = Review
#         fields = '__all__'
