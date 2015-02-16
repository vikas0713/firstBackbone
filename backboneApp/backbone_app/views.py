from django.shortcuts import render_to_response
from django.http import HttpResponse
import json

def index(request):
    return render_to_response("index.html")
def api(request):
    txt=open("../static/api","r")
    data=json.load(txt);
    return HttpResponse(data)