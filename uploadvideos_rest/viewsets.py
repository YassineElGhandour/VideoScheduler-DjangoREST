from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, filters
from rest_framework.permissions import AllowAny

from uploadvideos_rest.serializers import UploadVideosSerializer
from uploadvideos.models import UploadVideos


class UploadVideosViewSet(viewsets.ModelViewSet):
    queryset = UploadVideos.objects.all()
    serializer_class = UploadVideosSerializer

    permission_classes = (AllowAny,)
