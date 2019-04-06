from django.urls import path
from uploadvideos import views

urlpatterns = [
    path('videos/', views.video_list),
    path('videos/<int:id>/', views.video_detail),
]