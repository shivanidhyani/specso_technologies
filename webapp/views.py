from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about_specso_technologies_software_development_company_in_india.html')

def blog(request):
    return render(request, 'blog_specso_technologies_software_development_company_in_india.html')

def career(request):
    return render(request, 'career_specso_technologies_software_development_company_in_india.html')

def ourwork(request):
    return render(request, 'work_of_specso_technologies_software_development_company_in_india.html')

def contact(request):
    return render (request, 'contact_specso_technologies_software_development_company_in_india.html')

def accountiee(request):
    return render(request, 'accountiee_online_billing_software.html')

def dkaksha(request):
    return render(request, 'dkaksha_online_classes_software.html')

def specplus(request):
    return render(request, 'specplus_artificial_software.html')

def stack(request):
    return render(request, 'stack_erp_system.html')

def social_connect(request):
    return render(request, 'social_connect_automation_software.html')



