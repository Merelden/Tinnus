from django.db import migrations


def forwards(apps, schema_editor):
    Question = apps.get_model('core', 'Question')

    # 1) Remove old duplicates that were left from early seed migration 0004
    # IDs 13 and 14 duplicate questions 11 and 12 in the first section
    Question.objects.filter(id__in=[13, 14]).delete()

    # 2) Reassign sequential numbers (Question.number) to be contiguous by id
    # Clear numbers first to avoid transient unique conflicts
    Question.objects.update(number=None)
    for idx, q in enumerate(Question.objects.order_by('id').only('id'), start=1):
        Question.objects.filter(pk=q.id).update(number=idx)


def backwards(apps, schema_editor):
    # No-op: do not recreate duplicates; numbering can be recalculated by previous migrations if needed
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0014_alter_question_options'),
    ]

    operations = [
        migrations.RunPython(forwards, backwards),
    ]
