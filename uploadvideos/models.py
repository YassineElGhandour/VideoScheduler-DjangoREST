import uuid

from django.db import models


def scramble_uploaded_filename(instance, filename):
    # It could be any extension
    extension = filename.split(".")[-1]
    return "{}.{}".format(uuid.uuid4(), extension)


class UploadVideos(models.Model):
    videofile = models.FileField(upload_to=scramble_uploaded_filename, null=True, verbose_name="")
    positionsdb = models.CharField(max_length=255, default='{}')
    videoduration = models.CharField(max_length=255, default='0')


def __str__(self):
    return str(self.videofile)
