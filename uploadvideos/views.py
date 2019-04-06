from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from uploadvideos.models import UploadVideos
from uploadvideos_rest.serializers import UploadVideosSerializer


@csrf_exempt
def video_detail(request, id):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        video = UploadVideos.objects.get(id=id)
    except UploadVideos.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = UploadVideosSerializer(video)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = UploadVideosSerializer(video, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        video.delete()
        return HttpResponse(status=204)


@csrf_exempt
def video_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        videos = UploadVideos.objects.all()
        serializer = UploadVideosSerializer(videos, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UploadVideosSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)