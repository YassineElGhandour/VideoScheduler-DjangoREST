from django.conf.urls import url, include
from rest_framework import routers

from uploadvideos_rest.viewsets import UploadVideosViewSet

router = routers.DefaultRouter()
router.register('videos', UploadVideosViewSet, 'videos')

urlpatterns = [
    url(r'^', include(router.urls)),

]
