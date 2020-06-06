from django.urls import path, re_path
from . import views
from django.conf.urls import include
urlpatterns = [
				path('', views.index, name='index'),
				path('about_specso_technologies', views.about, name='about'),
				path('accountiee_online_billing_software', views.contact, name='accountiee'),
				path('dkaksha_online_classes_software', views.contact, name='dkaksha'),
				path('specplus_artificial_software', views.contact, name='specplus'),
				path('stack_erp_system', views.contact, name='stack'),
				path('social_connect_automation_software', views.contact, name='social_connect'),
				path('web_development_service', views.contact, name='web_development'),
				path('e_commerce_development_services', views.contact, name='e_commerce_development'),
				path('software_development_services', views.contact, name='software_development'),
				path('mobile_application_development_services', views.contact, name='mobile_application_development'),
				path('erp_development_services', views.contact, name='erp_development'),
				path('database_management_services', views.contact, name='database_management'),
				path('search_engine_optimization_services', views.contact, name='search_engine_optimization'),
				path('social_media_marketing_services', views.contact, name='social_media_marketing'),
				path('graphic_designing_services', views.contact, name='graphic_designing'),
				path('web_hosting_services', views.contact, name='web_hosting'),
				path('career_with_specso_technologies', views.career, name='career'),
				path('projects_by_specso_technologies', views.ourwork, name='ourwork'),
				path('contact_specso_technologies', views.contact, name='contact'),
				path('login_specso_technologies', views.contact, name='login'),
]