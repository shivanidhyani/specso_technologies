from django.urls import path, re_path
from . import views
from django.conf.urls import include
urlpatterns = [
				path('', views.index, name='index'),
				path('about_specso_technologies', views.about, name='about'),
				path('blogs_of_specso_technologies', views.blog, name='blog'),
				path('career_with_specso_technologies', views.career, name='career'),
				path('projects_by_specso_technologies', views.ourwork, name='ourwork'),
				path('contact_specso_technologies', views.contact, name='contact'),
]
