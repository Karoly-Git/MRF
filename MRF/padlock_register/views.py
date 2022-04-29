from django.shortcuts import redirect, render, get_object_or_404
from datetime import datetime
from padlock_register.models import Padlock

# Create your views here.


def padlock_register(request):
    padlocks = Padlock.objects.order_by('registration_time')

    context = {
        'padlocks': padlocks,
    }
    return render(request, 'padlock_register/index.html', context)


def record(request):
    if request.method == "POST":
        new_padlock = Padlock()
        # if request.POST.get('number') == "":
        # Styles:##  0 : OK##  1 : OK | Cancel##  2 : Abort | Retry | Ignore##  3 : Yes | No | Cancel##  4 : Yes | No##  5 : Retry | Cancel ##  6 : Cancel | Try Again | Continue
        # ctypes.windll.user32.MessageBoxW(0, "Your text", "Your title", 2)
        #    new_padlock.number = '00000'
        # else:
        new_padlock.number = request.POST.get('number')
        new_padlock.status = 'active'  # request.POST.get('number')
        new_padlock.owner = request.POST.get('owner')
        new_padlock.location = request.POST.get('location')
        new_padlock.registration_time = datetime.now().strftime("%d/%m/%Y, %H:%M:%S")
        new_padlock.registered_by = request.POST.get('registered_by')
        pin = request.POST.get('pin')
    else:
        return redirect('padlock_register')

    if pin in ['11', '22']:
        new_padlock.save()
        return redirect('padlock_register')
    else:
        return redirect('padlock_register')


def delete(request, pk):
    to_be_deleted = get_object_or_404(Padlock, pk=pk)
    to_be_deleted.delete()
    return redirect('padlock_register')
