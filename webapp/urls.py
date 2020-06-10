from django.urls import path
from . import views
from django.conf import settings
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('', views.index, name='index'),
    path('about_specso_technologies/', views.about, name='about'),
    path('accountiee_online_billing_software', views.accountiee, name='accountiee'),
    path('dkaksha_online_classes_software', views.dkaksha, name='dkaksha'),
    path('specplus_artificial_software', views.specplus, name='specplus'),
    path('stack_erp_system', views.stack, name='stack'),
    path('social_connect_automation_software', views.social_connect, name='social_connect'),
    path('web_development_service', views.web_development, name='web_development'),
    path('software_development_services', views.software_development, name='software_development'),
    path('mobile_application_development_services', views.mobile_application_development, name='mobile_application_development'),
    path('erp_development_services', views.erp_development, name='erp_development'),
    path('database_management_services', views.database_management, name='database_management'),
    path('social_media_marketing_services', views.digital_marketing, name='digital_marketing'),
    path('graphic_designing_services', views.graphic_designing, name='graphic_designing'),
    path('web_hosting_services', views.web_hosting, name='web_hosting'),
    path('specso_technologies_work/', views.ourwork, name='ourwork'),
    path('contact_specso_technologies/', views.contact, name='contact'),
    path('login_to_specso_technologies/', views.login, name='login'),
    path('register_to_specso_technologies/', views.register, name='register'),
    path('join_specso_technologies/', views.career, name='career'),

]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
