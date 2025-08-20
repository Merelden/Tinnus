from django.db import migrations

NEW_SECTION_NAMES = {
    'A': 'Анкетирование',
    'B': 'Часть 1. Тревога',
    'C': 'Часть 2: Депрессия',
    'D': 'Шкала катастрофизации тиннитуса (TCS)',
}


def _section_for_id(qid: int) -> str:
    if 1 <= qid <= 12:
        return NEW_SECTION_NAMES['A']
    if 13 <= qid <= 19:
        return NEW_SECTION_NAMES['B']
    if 20 <= qid <= 26:
        return NEW_SECTION_NAMES['C']
    return NEW_SECTION_NAMES['D']


def forwards(apps, schema_editor):
    Question = apps.get_model('core', 'Question')
    QuestionOption = apps.get_model('core', 'QuestionOption')
    Test = apps.get_model('core', 'Test')

    # Взять тексты и ids ИЗ 0016 (без изменений)
    QUESTIONS = [
        {
            "id": 1,
            "question": "С чем вы связываете появление ушного шума?",
            "type": "multiple",
            "options": [
                {"id": 1, "label": "акустическая травма"},
                {"id": 2, "label": "механическая травма"},
                {"id": 3, "label": "стресс"},
                {"id": 4, "label": "переутомление"},
                {"id": 5, "label": "прием препаратов (указать каких в следующем окне)"},
                {"id": 6, "label": "заболевания уха (указать какие в следующем окне)"},
                {"id": 7, "label": "общие заболевания (указать какие в следующем окне)"},
                {"id": 8, "label": "другое (указать в следующем окне)"}
            ],
            "input": "Добавьте информацию, связанную с появлением ушного шума, если это необходимо:"
        },
        {
            "id": 2,
            "question": "Ушной шум ощущается:",
            "type": "single",
            "options": [
                {"id": 1, "label": "всегда в правом ухе"},
                {"id": 2, "label": "всегда в левом ухе"},
                {"id": 3, "label": "то справа, то слева"},
                {"id": 4, "label": "в обоих ушах"},
                {"id": 5, "label": "в голове"}
            ]
        },
        {
            "id": 3,
            "question": "Постарайтесь описать, какой внешний звук напоминает ушной шум (например, шум моря, писк комара, и т.д.):",
            "type": "input",
            "input": "Опишите подробнее, пожалуйста"
        },
        {
            "id": 4,
            "question": "Ушной шум ощущается:",
            "type": "single",
            "options": [
                {"id": 1, "label": "ежедневно в течение всего дня"},
                {"id": 2, "label": "ежедневно, но не целый день"},
                {"id": 3, "label": "не каждый день"}
            ],
        },
        {
            "id": 5,
            "question": "Ушной шум ощущается:",
            "type": "single",
            "options": [
                {"id": 1, "label": "только в тишине"},
                {"id": 2, "label": "и в тишине, и в шуме (при разговоре)"}
            ],
        },
        {
            "id": 6,
            "question": "Характер шума",
            "type": "single",
            "options": [
                {"id": 1, "label": "постоянный"},
                {"id": 2, "label": "пульсирующий"},
                {"id": 3, "label": "прерывистый"}
            ],
        },
        {
            "id": 7,
            "question": "Какие факторы усиливают или вызывают появление шума?",
            "type": "multiple",
            "options": [
                {"id": 1, "label": "эмоциональный стресс"},
                {"id": 2, "label": "физическая нагрузка"},
                {"id": 3, "label": "переутомление, дефицит сна"},
                {"id": 4, "label": "прием алкоголя"},
                {"id": 5, "label": "нахождение в тишине"},
                {"id": 6, "label": "определенное время суток"},
                {"id": 7, "label": "фазы менструального цикла"},
                {"id": 8, "label": "обострения хронических заболеваний (указать каких далее)"},
                {"id": 9, "label": "другое (указать далее)"}
            ],
            "input": "Добавьте информацию, связанную с факторами, влияющими на ушной шум, если это необходимо:"
        },
        {
            "id": 8,
            "question": "Что приводит к ослаблению/исчезновению шума?",
            "type": "multiple",
            "options": [
                {"id": 1, "label": "прослушивание музыки, нахождение в шуме"},
                {"id": 2, "label": "прием алкоголя"},
                {"id": 3, "label": "отдых, пребывание на природе, сон"},
                {"id": 4, "label": "прием препаратов (указать каких далее)"},
                {"id": 5, "label": "другое (указать далее)"}
            ],
            "input": "Добавьте информацию о том, что влияет на ушной шум, если это необходимо:"
        },
        {
            "id": 9,
            "question": "К каким негативным эффектам приводит ушной шум?",
            "type": "multiple",
            "options": [
                {"id": 1, "label": "нарушение сна"},
                {"id": 2, "label": "тревога"},
                {"id": 3, "label": "подавленное настроение, депрессия"},
                {"id": 4, "label": "снижение концентрации внимания"},
                {"id": 5, "label": "страх"},
                {"id": 6, "label": "возбуждение"},
                {"id": 7, "label": "другое (указать далее)"}
            ],
            "input": "Добавьте информацию о том, как на вас влияет ушной шум, если это необходимо:"
        },
        {
            "id": 10,
            "question": "Обращались ли вы за психологической или психотерапевтической помощью?",
            "type": "single",
            "options": [
                {"id": 1, "label": "Да"},
                {"id": 2, "label": "Нет"}
            ]
        },
        {
            "id": 11,
            "question": "Готовы ли вы регулярно обращаться за помощью психолога или психотерапевта в формате очных консультаций для лечения ушного шума?",
            "type": "single",
            "options": [
                {"id": 1, "label": "Да"},
                {"id": 2, "label": "Нет"}
            ]
        },
        {
            "id": 12,
            "question": "Готовы ли вы самостоятельно выполнять упражнения для снижения проявлений ушного шума на регулярной основе в домашних условиях?",
            "type": "single",
            "options": [
                {"id": 1, "label": "Да"},
                {"id": 2, "label": "Нет"}
            ]
        },
        # 13-19 Anxiety
        {
            "id": 13,
            "question": "Я испытываю напряжение, мне не по себе",
            "type": "single",
            "options": [
                {"label": "все время (3)"},
                {"label": "часто (2)"},
                {"label": "время от времени, иногда (1)"},
                {"label": "совсем не испытываю (0)"}
            ]
        },
        {
            "id": 14,
            "question": "Я испытываю страх, кажется, что что-то ужасное вот-вот случиться",
            "type": "single",
            "options": [
                {"label": "определенно, это так, и страх очень велик (3)"},
                {"label": "да, это так, но страх не очень велик (2)"},
                {"label": "иногда, но это меня не беспокоит (1)"},
                {"label": "совсем не испытываю (0)"}
            ]
        },
        {
            "id": 15,
            "question": "Беспокойные мысли крутятся у меня в голове",
            "type": "single",
            "options": [
                {"label": "постоянно (3)"},
                {"label": "большую часть времени (2)"},
                {"label": "время от времени и не так часто (1)"},
                {"label": "только иногда (0)"}
            ]
        },
        {
            "id": 16,
            "question": "Я легко могу присесть и расслабиться",
            "type": "single",
            "options": [
                {"label": "определенно, это так (0)"},
                {"label": "наверное, это так (1)"},
                {"label": "лишь изредка, это так (2)"},
                {"label": "совсем не могу (3)"}
            ]
        },
        {
            "id": 17,
            "question": "Я испытываю внутреннее напряжение или дрожь",
            "type": "single",
            "options": [
                {"label": "совсем не испытываю (0)"},
                {"label": "иногда (1)"},
                {"label": "часто (2)"},
                {"label": "очень часто (3)"}
            ]
        },
        {
            "id": 18,
            "question": "Я испытываю неусидчивость, мне постоянно нужно двигаться",
            "type": "single",
            "options": [
                {"label": "определенно, это так (3)"},
                {"label": "наверное, это так (2)"},
                {"label": "лишь в некоторой степени, это так (1)"},
                {"label": "совсем не испытываю (0)"}
            ]
        },
        {
            "id": 19,
            "question": "У меня бывает внезапное чувство паники",
            "type": "single",
            "options": [
                {"label": "очень часто (3)"},
                {"label": "довольно часто (2)"},
                {"label": "не так уж и часто (1)"},
                {"label": "совсем не бывает (0)"}
            ]
        },
        # 20-26 Depression/Anhedonia
        {
            "id": 20,
            "question": "То, что приносило мне большое удовольствие, и сейчас вызывает у меня такое же чувство",
            "type": "single",
            "options": [
                {"label": "определенно, это так (0)"},
                {"label": "наверное, это так (1)"},
                {"label": "лишь в очень малой степени, это так (2)"},
                {"label": "это совсем не так (3)"}
            ]
        },
        {
            "id": 21,
            "question": "Я способен рассмеяться и увидеть в том или ином событии смешное",
            "type": "single",
            "options": [
                {"label": "определенно, это так (0)"},
                {"label": "наверное, это так (1)"},
                {"label": "лишь в очень малой степени, это так (2)"},
                {"label": "это совсем не так (3)"}
            ]
        },
        {
            "id": 22,
            "question": "Я испытываю бодрость",
            "type": "single",
            "options": [
                {"label": "совсем не испытываю (3)"},
                {"label": "очень редко (2)"},
                {"label": "иногда (1)"},
                {"label": "практически все время (0)"}
            ]
        },
        {
            "id": 23,
            "question": "Мне кажется, что я стал все делать очень медленно",
            "type": "single",
            "options": [
                {"label": "практически все время (3)"},
                {"label": "часто (2)"},
                {"label": "иногда (1)"},
                {"label": "совсем нет (0)"}
            ]
        },
        {
            "id": 24,
            "question": "Я не слежу за своей внешностью",
            "type": "single",
            "options": [
                {"label": "определенно, это так (3)"},
                {"label": "я не уделяю этому столько времени, сколько нужно (2)"},
                {"label": "может быть, я стал меньше уделять этому времени (1)"},
                {"label": "я слежу за собой так же, как и раньше (0)"}
            ]
        },
        {
            "id": 25,
            "question": "Я считаю, что мои дела (занятия, увлечения) могут принести мне чувство удовлетворения",
            "type": "single",
            "options": [
                {"label": "точно так же, как и обычно (0)"},
                {"label": "да, но не в той степени, как раньше (1)"},
                {"label": "значительно меньше, чем обычно (2)"},
                {"label": "совсем так не считаю (3)"}
            ]
        },
        {
            "id": 26,
            "question": "Я могу получать удовольствие от хорошей книги, радио - или телепрограммы",
            "type": "single",
            "options": [
                {"label": "часто (0)"},
                {"label": "иногда (1)"},
                {"label": "редко (2)"},
                {"label": "очень редко (3)"}
            ]
        },
        # 27-39 Tinnitus Catastrophizing
        {
            "id": 27,
            "question": "Я боюсь того, что шум в ушах никогда не пройдет",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        },
        {
            "id": 28,
            "question": "Я чувствую, что больше не могу его терпеть",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        },
        {
            "id": 29,
            "question": "Я думаю, что мне никогда не станет лучше",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        },
        {
            "id": 30,
            "question": "Я испытываю отчаяние из-за шума в ушах и чувствую, как оно переполняет меня",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        },
        {
            "id": 31,
            "question": "Я больше не могу выносить шум в ушах",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        },
        {
            "id": 32,
            "question": "Я боюсь, что шум в ушах станет еще сильнее",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        },
        {
            "id": 33,
            "question": "Я часто вспоминаю ситуации, когда шум в ушах был сильнее, чем сейчас, и боюсь, что это снова повторится",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        },
        {
            "id": 34,
            "question": "Я очень сильно хочу, чтобы шум в ушах полностью прошел",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        },
        {
            "id": 35,
            "question": "Я не могу перестать о нем думать",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        },
        {
            "id": 36,
            "question": "Я постоянно думаю о том, насколько сильно у меня шумит в ушах",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        },
        {
            "id": 37,
            "question": "Я постоянно думаю о том, как сильно я хочу, чтобы шум в ушах прекратился",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        },
        {
            "id": 38,
            "question": "Я ничего не могу сделать для того, чтобы шум в ушах уменьшился",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        },
        {
            "id": 39,
            "question": "Я думаю о том, может ли случится что-нибудь плохое",
            "type": "single",
            "options": [
                {"label": "совсем нет (0)"},
                {"label": "немного (1)"},
                {"label": "умеренно (2)"},
                {"label": "значительно (3)"},
                {"label": "всегда (4)"}
            ]
        }
    ]

    # 1) Полный сброс вопросов/опций
    QuestionOption.objects.all().delete()
    Question.objects.all().delete()

    # 2) Полная пересевка по 0016
    for q in QUESTIONS:
        qid = int(q['id'])
        question = Question.objects.create(
            id=qid,
            text=q['question'],
            type=q['type'],
            input_text=q.get('input'),
            section=_section_for_id(qid),
            number=qid,
        )
        for idx, opt in enumerate(q.get('options', []) or []):
            label = opt['label']
            native_id = opt.get('id') if isinstance(opt, dict) else None
            if native_id is None:
                native_id = idx + 1
            QuestionOption.objects.create(
                question=question,
                label=label,
                order=idx,
                native_id=native_id,
            )

    # 3) Приведение существующих Test.answers к компактным id из 0016 (смещение -2 для >12)
    for t in Test.objects.all().only('id', 'answers'):
        answers = getattr(t, 'answers', None)
        if not isinstance(answers, list):
            continue
        changed = False
        new_answers = []
        for a in answers:
            if not isinstance(a, dict):
                new_answers.append(a)
                continue
            a = a.copy()
            old_qid = a.get('question')
            try:
                old_qid_int = int(old_qid)
            except (TypeError, ValueError):
                new_answers.append(a)
                continue
            if old_qid_int <= 12:
                mapped_qid = old_qid_int
            elif old_qid_int in (13, 14):
                mapped_qid = old_qid_int - 2  # 11, 12 (были дубликатами)
            else:
                mapped_qid = old_qid_int - 2
            if mapped_qid != old_qid_int:
                a['question'] = mapped_qid
                changed = True
            # Обновление секции согласно новым границам
            if 1 <= old_qid_int <= 12:
                new_sec = NEW_SECTION_NAMES['A']
            elif 13 <= old_qid_int <= 19:
                new_sec = NEW_SECTION_NAMES['B']
            elif 20 <= old_qid_int <= 26:
                new_sec = NEW_SECTION_NAMES['C']
            else:
                new_sec = NEW_SECTION_NAMES['D']
            if a.get('section') != new_sec:
                a['section'] = new_sec
                changed = True
            new_answers.append(a)
        if changed:
            Test.objects.filter(pk=t.id).update(answers=new_answers)


def backwards(apps, schema_editor):
    # Невозвратная миграция
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0017_dedup_question_options'),
    ]

    operations = [
        migrations.RunPython(forwards, backwards),
    ]
