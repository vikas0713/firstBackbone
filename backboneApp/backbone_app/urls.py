from django.conf.urls import patterns, include, url
from django.contrib import admin
from views import *
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'backbone_app.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', index),
    url(r'^api', api),
    url(r'^admin/', include(admin.site.urls)),
)
