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
    return render(request, 'our_work_specso_technologies_software_development_company_in_india.html')

def contact(request):
    return render (request, 'contact_specso_technologies_software_development_company_in_india.html')