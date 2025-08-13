from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Form, FormField, FormResponse, FormFieldResponse, FormGroup
from accounts.models import UserParticipant
from django.views.decorators.csrf import csrf_exempt
from .serializers import FormSerializer, FormResponseSerializer, FormGroupSerializer
from django.utils.decorators import method_decorator


@method_decorator(csrf_exempt, name='dispatch')
class FormDetailView(APIView):
    def get(self, request, form_id):
        try:
            form = Form.objects.get(pk=form_id)
        except Form.DoesNotExist:
            return Response({'error': 'Form not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = FormSerializer(form)
        return Response(serializer.data, status=200)

@method_decorator(csrf_exempt, name='dispatch')
class FormGroupDetailView(APIView):
    def get(self, request, group_id):
        try:
            group = FormGroup.objects.get(pk=group_id)
        except FormGroup.DoesNotExist:
            return Response({'error': 'Form group not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = FormGroupSerializer(group)
        return Response(serializer.data, status=200)

@method_decorator(csrf_exempt, name='dispatch')
class FormByDaysView(APIView):
    def get(self, request):
        try:
            days = int(request.query_params.get('days'))
        except (TypeError, ValueError):
            return Response({'error': 'Missing or invalid ?days parameter'}, status=400)

        days_to_group_id = {
            0: 1,
            14: 2,
            29: 3,
        }

        group_id = days_to_group_id.get(days)

        if not group_id:
            return Response({'error': 'No form group assigned for this day'}, status=404)

        try:
            group = FormGroup.objects.get(id=group_id)
        except FormGroup.DoesNotExist:
            return Response({'error': 'Form group not found'}, status=404)

        serializer = FormGroupSerializer(group)
        return Response(serializer.data)

@method_decorator(csrf_exempt, name='dispatch')
class SubmitFormView(APIView):
    def post(self, request):
        serializer = FormResponseSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        user_id = request.session.get('user_id')
        if not user_id:
            return Response({'error': 'Not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)

        try:
            user = UserParticipant.objects.get(id=user_id)
        except UserParticipant.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        form_id = serializer.validated_data['form_id']
        full_name = serializer.validated_data['full_name']
        responses = serializer.validated_data['responses']

        try:
            form = Form.objects.get(id=form_id)
        except Form.DoesNotExist:
            return Response({'error': 'Form not found'}, status=status.HTTP_404_NOT_FOUND)

        form_response = FormResponse.objects.create(
            user=user,
            form=form,
            full_name=full_name
        )

        for item in responses:
            field_id = item['field_id']
            answer = item['answer']

            try:
                field = FormField.objects.get(id=field_id, form=form)
                FormFieldResponse.objects.create(
                    response=form_response,
                    field=field,
                    answer=answer
                )
            except FormField.DoesNotExist:
                continue

        return Response({'message': 'Ответы успешно сохранены'}, status=status.HTTP_201_CREATED)
