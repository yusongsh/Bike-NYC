from django.contrib import admin

# Register your models here.
from .models import Park, Path, Bikes

admin.site.register(Park)
admin.site.register(Path)
# admin.site.register(Review)
admin.site.register(Bikes)
