from django.db import migrations, models

SECTIONS = {
    # 4 раздела:
    # 1–14: "Анкета/Анамнез"
    # 15–21: "Тревожность"
    # 22–28: "Депрессия/Анедония"
    # 29–41: "Восприятие шума"
    'A': list(range(1, 15)),
    'B': list(range(15, 22)),
    'C': list(range(22, 29)),
    'D': list(range(29, 42)),
}

SECTION_NAMES = {
    'A': 'Анкета/Анамнез',
    'B': 'Тревожность',
    'C': 'Депрессия/Анедония',
    'D': 'Восприятие шума',
}


def forwards(apps, schema_editor):
    Question = apps.get_model('core', 'Question')
    QuestionOption = apps.get_model('core', 'QuestionOption')

    # Проставим секции
    for key, qids in SECTIONS.items():
        Question.objects.filter(id__in=qids).update(section=SECTION_NAMES[key])

    # Проставим native_id = order+1 для всех опций (нативный id в рамках вопроса)
    for opt in QuestionOption.objects.all():
        native_id = (opt.order or 0) + 1
        QuestionOption.objects.filter(pk=opt.pk).update(native_id=native_id)


def backwards(apps, schema_editor):
    Question = apps.get_model('core', 'Question')
    QuestionOption = apps.get_model('core', 'QuestionOption')

    # Снимем секции
    Question.objects.update(section='')
    # Обнулим native_id
    QuestionOption.objects.update(native_id=None)


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_question_section_test_scores_by_section_and_more'),
    ]

    operations = [
        # Сначала добавим поле, затем заполним данными
        migrations.AddField(
            model_name='questionoption',
            name='native_id',
            field=models.PositiveIntegerField(null=True, blank=True),
        ),
        migrations.RunPython(forwards, backwards),
    ]
