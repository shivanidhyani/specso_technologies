from django.urls import path, re_path
from . import views
from django.conf.urls import include
urlpatterns = [
				path('', views.index, name='index'),
]
