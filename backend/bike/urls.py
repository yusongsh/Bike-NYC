from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('parks/', views.ParkList.as_view(), name='park_list'),
    path('bikes/', views.BikesList.as_view(), name="bikes_list"),
    path('paths/', views.PathList.as_view(), name="path_list"),
    # path('paths/<int:pk>', views.PathDetail.as_view(), name="path_detail"),
    # path('reviews/', views.ReviewList.as_view(), name="review_list"),
    # path('reviews/<int:pk>', views.ReviewDetail.as_view(), name="review_detail"),
]
