from rest_framework import generics
from .serializers import ParkSerializer, BikesSerializer, PathSerializer
from .models import Park, Path, Bikes


class ParkList(generics.ListCreateAPIView):
    queryset = Park.objects.all()
    serializer_class = ParkSerializer


class ParkDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Park.objects.all()
    serializer_class = ParkSerializer


class BikesList(generics.ListCreateAPIView):
    queryset = Bikes.objects.all()
    serializer_class = BikesSerializer


class BikesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bikes.objects.all()
    serializer_class = BikesSerializer


class PathList(generics.ListCreateAPIView):
    queryset = Path.objects.all()
    serializer_class = PathSerializer


class PathDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Path.objects.all()
    serializer_class = PathSerializer


# class ReviewList(generics.ListCreateAPIView):
#     queryset = Review.objects.all()
#     serializer_class = ReviewSerializer


# class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Review.objects.all()
#     serializer_class = ReviewSerializer
