from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse

def index(request):
    return render(request,'specso_technologies_software_development_company_in_india.html')

def about(request):
    return render(request, 'about_specso_technologies_software_development_company_in_india.html')

def accountiee(request):
    return render(request, 'accountiee_online_billing_software_of_specso_technologies_software_development_company_in_india.html')

def dkaksha(request):
    return render(request, 'dkaksha_online_classes_software_of_specso_technologies_software_development_company_in_india.html')

def specplus(request):
    return render(request, 'specplus_artificial_software_of_specso_technologies_software_development_company_in_india.html')

def stack(request):
    return render(request, 'stack_erp_system_of_specso_technologies_software_development_company_in_india.html')

def social_connect(request):
    return render(request, 'social_connect_automatuion_software_of_specso_technologies_software_development_company_in_india.html')

def web_development(request):
    return render(request, 'web_development_services_of_specso_technologies_software_development_company_in_india.html')

def software_development(request):
    return render(request, 'software_development_services_of_specso_technologies_software_development_company_in_india.html')

def mobile_application_development(request):
    return render(request, 'mobile_application_development_services_of_specso_technologies_software_development_company_in_india.html')

def erp_development(request):
    return render(request, 'erp_development_services_of_specso_technologies_software_development_company_in_india.html')

def database_management(request):
    return render(request, 'database_management_services_of_specso_technologies_software_development_company_in_india.html')

def digital_marketing(request):
    return render(request, 'digital_marketing_services_of_specso_technologies_software_development_company_in_india.html')

def graphic_designing(request):
    return render(request, 'graphic_designing_services_of_specso_technologies_software_development_company_in_india.html')

def web_hosting(request):
    return render(request, 'web_hosting_services_of_specso_technologies_software_development_company_in_india.html')

def ourwork(request):
    return render(request,'work_of_specso_technologies_software_development_company_in_india.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('Name')
        email = request.POST.get('Email')
        phone = request.POST.get('Contact')
        message = request.POST.get('Message')
        return HttpResponse(status=201)
    else:
        return render(request,'contact_specso_technologies_software_development_company_in_india.html')

def login(request):
    if request.method == 'POST':
        username = request.POST['Username']
        password = request.POST['Password']
        if username == 'Ayush':
            if password == '@Ayush2139':
                messages.success(request,'Logged in Successfully')
                return redirect(index)
            else:
                messages.error(request,'Wrong Password')
        else:
            messages.error(request,'Wrong Username')
        return redirect(login)
    else:
        return render(request,'login_specso_technologies_software_development_company_in_india.html')

def register(request):
    if request.method == 'POST':
        Name = request.POST['Name']
        username = request.POST['Username']
        password = request.POST['Password']
        messages.success(request,'Registered Successfully ')
        return redirect(index)
    else:
        return render(request,'register_specso_technologies_software_development_company_in_india.html')

def career(request):
    return render(request, 'career_specso_technologies_software_development_company_in_india.html')