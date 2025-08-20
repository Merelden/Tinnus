from django.db import migrations


def dedup_options(apps, schema_editor):
    Question = apps.get_model('core', 'Question')
    QuestionOption = apps.get_model('core', 'QuestionOption')

    for q in Question.objects.all().only('id'):
        # 1) Удалить дубликаты (одинаковые native_id и label)
        opts = list(QuestionOption.objects.filter(question_id=q.id).order_by('order', 'id'))
        seen = set()
        to_delete = []
        for opt in opts:
            key = (getattr(opt, 'native_id', None), (opt.label or '').strip())
            if key in seen:
                to_delete.append(opt.id)
            else:
                seen.add(key)
        if to_delete:
            QuestionOption.objects.filter(id__in=to_delete).delete()

        # 2) Нормализовать порядок и native_id
        remaining = list(QuestionOption.objects.filter(question_id=q.id).order_by('native_id', 'order', 'id'))
        # Сортируем по native_id (если есть), иначе по order, затем id
        remaining.sort(key=lambda o: (o.native_id if getattr(o, 'native_id', None) is not None else (o.order or 0) + 1, o.order, o.id))
        for idx, opt in enumerate(remaining):
            desired_order = idx
            desired_native = opt.native_id if getattr(opt, 'native_id', None) is not None else (idx + 1)
            updates = {}
            if opt.order != desired_order:
                updates['order'] = desired_order
            if opt.native_id != desired_native:
                updates['native_id'] = desired_native
            if updates:
                QuestionOption.objects.filter(pk=opt.pk).update(**updates)


def backwards(apps, schema_editor):
    # Невозвратная миграция: восстановить удалённые дубликаты невозможно
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0016_reseed_questions_compact_ids'),
    ]

    operations = [
        migrations.RunPython(dedup_options, backwards),
    ]
