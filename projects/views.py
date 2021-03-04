from django.shortcuts import render
from projects.models import Project

def project_index(request):
    return render(request, 'project_index.html')

def project_detail(request, pk):
    project = Project.objects.get(pk=pk)
    context = {
        'project': project
    }
    return render(request, 'project_detail.html', context)