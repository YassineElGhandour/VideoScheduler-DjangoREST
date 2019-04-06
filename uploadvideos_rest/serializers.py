from rest_framework import serializers
from uploadvideos.models import UploadVideos


class UploadVideosSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadVideos
        fields = ('id', 'videofile', 'positionsdb', 'videoduration')