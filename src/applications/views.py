from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Application
from .serializers import ApplicationSerializer
import json

# Create your views here.
@api_view(['GET'])
def get_applications(request, *args, **kwargs):

    serializer = ApplicationSerializer(
        Application.objects.all(),
        many = True
    )

    return Response(
        data = serializer.data,
        status = 200
    )

@api_view(['PUT'])
def edit_application(request, *args, **kwargs):

    request_body = request.data

    if request.content_type != "application/json":
        return Response(
            data = {
                "Message": "Wrong content type"
            },
            status = 415
        )

    try:
        existing_application = Application.objects.get(id=kwargs.get("application_id"))
        for k, v in request_body.items():
            if k == "company_name":
                existing_application.company_name = v
            elif k == "position":
                existing_application.position = v
            elif k == "status":
                if v not in dict(Application.Status.choices):
                    raise Exception()
                existing_application.status = v
        existing_application.save()

    except Application.DoesNotExist:
        return Response(
            data = {
                "Message": "Application does not exist"
            },
            status = 400
        )

    except:
        return Response(
            data = {
                "Message": "Invalid application detail(s)"
            },
            status = 400
        )

    return Response(
        data = {},
        status = 200
    )

@api_view(['POST'])
def add_application(request, *args, **kwargs):

    request_body = request.data

    if request.content_type != "application/json":
        return Response(
            data = {
                "Message": "Wrong content type"
            },
            status = 415
        )

    if "company_name" not in request_body \
        or "position" not in request_body \
        or "status" not in request_body:
        return Response(
            data = {
                "Message": "Missing application detail(s)"
            },
            status = 400
        )

    try:
        if request_body.get("status") not in dict(Application.Status.choices):
            raise Exception()
        new_application = Application.objects.create(
            company_name = request_body.get("company_name"),
            position = request_body.get("position"),
            status = request_body.get("status")
        )
        new_application.save()

    except:
        return Response(
            data = {
                "Message": "Invalid application detail(s)"
            },
            status = 400
        )

    serializer = ApplicationSerializer(new_application)

    return Response(
        data = serializer.data,
        status = 200
    )
