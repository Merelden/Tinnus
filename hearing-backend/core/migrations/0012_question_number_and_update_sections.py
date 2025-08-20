from django.db import migrations, models


SECTION_RANGES = {
    'A': list(range(1, 15)),   # 1–14
    'B': list(range(15, 22)),  # 15–21
    'C': list(range(22, 29)),  # 22–28
    'D': list(range(29, 42)),  # 29–41
}

OLD_SECTION_NAMES = {
    'A': 'Анкета/Анамнез',
    'B': 'Тревожность',
    'C': 'Депрессия/Анедония',
    'D': 'Восприятие шума',
}

NEW_SECTION_NAMES = {
    'A': 'Анкетирование',
    'B': 'Часть 1. Тревога',
    'C': 'Часть 2: Депрессия',
    'D': 'Шкала катастрофизации тиннитуса (TCS)',
}

# Преобразования по прямому соответствию старое -> новое для замены в существующих данных
OLD_TO_NEW = {
    OLD_SECTION_NAMES['A']: NEW_SECTION_NAMES['A'],
    OLD_SECTION_NAMES['B']: NEW_SECTION_NAMES['B'],
    OLD_SECTION_NAMES['C']: NEW_SECTION_NAMES['C'],
    OLD_SECTION_NAMES['D']: NEW_SECTION_NAMES['D'],
}
NEW_TO_OLD = {v: k for k, v in OLD_TO_NEW.items()}


def forwards(apps, schema_editor):
    Question = apps.get_model('core', 'Question')
    Test = apps.get_model('core', 'Test')

    # 1) Заполнить последовательные номера (number) по возрастанию id
    for idx, q in enumerate(Question.objects.order_by('id').only('id'), start=1):
        Question.objects.filter(pk=q.id).update(number=idx)

    # 2) Обновить названия секций у вопросов по диапазонам
    for key, qids in SECTION_RANGES.items():
        Question.objects.filter(id__in=qids).update(section=NEW_SECTION_NAMES[key])

    # 3) Обновить существующие записи Test: ключи в scores_by_section и section в answers
    for t in Test.objects.all().only('id', 'scores_by_section', 'answers'):
        changed = False
        # scores_by_section
        scores = getattr(t, 'scores_by_section', None)
        if isinstance(scores, dict) and scores:
            new_scores = {}
            for sec, val in scores.items():
                new_key = OLD_TO_NEW.get(sec, sec)
                new_scores[new_key] = val
            if new_scores != scores:
                t.scores_by_section = new_scores
                changed = True
        # answers
        answers = getattr(t, 'answers', None)
        if isinstance(answers, list) and answers:
            new_answers = []
            for a in answers:
                if isinstance(a, dict):
                    a = a.copy()
                    sec = a.get('section')
                    if isinstance(sec, str) and sec in OLD_TO_NEW:
                        a['section'] = OLD_TO_NEW[sec]
                new_answers.append(a)
            if new_answers != answers:
                t.answers = new_answers
                changed = True
        if changed:
            t.save(update_fields=['scores_by_section', 'answers'])


def backwards(apps, schema_editor):
    Question = apps.get_model('core', 'Question')
    Test = apps.get_model('core', 'Test')

    # 1) Обнулить number (оставим ordering на id)
    Question.objects.update(number=None)

    # 2) Вернуть старые названия секций у вопросов по диапазонам
    for key, qids in SECTION_RANGES.items():
        Question.objects.filter(id__in=qids).update(section=OLD_SECTION_NAMES[key])

    # 3) Вернуть старые ключи в Test
    for t in Test.objects.all().only('id', 'scores_by_section', 'answers'):
        changed = False
        scores = getattr(t, 'scores_by_section', None)
        if isinstance(scores, dict) and scores:
            new_scores = {}
            for sec, val in scores.items():
                old_key = NEW_TO_OLD.get(sec, sec)
                new_scores[old_key] = val
            if new_scores != scores:
                t.scores_by_section = new_scores
                changed = True
        answers = getattr(t, 'answers', None)
        if isinstance(answers, list) and answers:
            new_answers = []
            for a in answers:
                if isinstance(a, dict):
                    a = a.copy()
                    sec = a.get('section')
                    if isinstance(sec, str) and sec in NEW_TO_OLD:
                        a['section'] = NEW_TO_OLD[sec]
                new_answers.append(a)
            if new_answers != answers:
                t.answers = new_answers
                changed = True
        if changed:
            t.save(update_fields=['scores_by_section', 'answers'])


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0011_questionoption_native_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='number',
            field=models.PositiveIntegerField(unique=True, null=True, blank=True),
        ),
        migrations.RunPython(forwards, backwards),
    ]
