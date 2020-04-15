from django.urls import path

from Music.api_views import MusicView

urlpatterns = [
    path('', MusicView.as_view()),
]
