from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import Participant, Progress, Test, Exercise, Question, QuestionOption, CalmingVideoSegment
from django.contrib.auth.models import User
from django.utils.safestring import mark_safe
from django.utils.html import format_html
from django.http import HttpResponse
from django.contrib import messages
from django.utils import timezone
import csv

try:
    import tablib
    TABLIB_AVAILABLE = True
except Exception:
    TABLIB_AVAILABLE = False

@admin.register(Participant)
class ParticipantAdmin(ModelAdmin):
    list_display = ('full_name', 'email', 'age', 'phone', 'study_group', 'created_at')
    list_filter = ('study_group',)
    search_fields = ('full_name', 'email', 'user__email')
    readonly_fields = ('created_at',)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "user":
            kwargs["queryset"] = User.objects.filter(is_superuser=False)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

@admin.register(Progress)
class ProgressAdmin(ModelAdmin):
    list_display = ('participant', 'day', 'test_completed', 'diagnostic_completed', 'exercise_completed', 'completed_at')
    list_filter = ('day', 'test_completed', 'diagnostic_completed', 'exercise_completed')
    search_fields = ('participant__full_name',)

@admin.register(Test)
class TestAdmin(ModelAdmin):
    list_display = ('participant', 'day_badge', 'total_score', 'section_scores_short', 'created_at')
    list_filter = ('day',)
    search_fields = ('participant__full_name',)
    readonly_fields = ('created_at', 'section_scores_human', 'answers_human')
    actions = (
        'export_tests_csv_by_sections',
        'export_tests_xlsx_by_sections',
        'export_tests_xlsx_full',
        'export_research_xlsx',
    )

    fieldsets = (
        ('Основное', {
            'fields': ('participant', 'day', 'created_at')
        }),
        ('Результаты', {
            'fields': ('section_scores_human',),
            'description': 'Сумма баллов по разделам и общий итог',
            'classes': ('collapse',)
        }),
        ('Ответы пользователя', {
            'fields': ('answers_human',),
            'description': 'Читаемое представление ответов',
            'classes': ('collapse',)
        }),
    )

    @admin.display(description='День', ordering='day')
    def day_badge(self, obj):
        day = obj.day
        color = '#64748b'  # slate
        if day == 1:
            color = '#16a34a'  # green
        elif day == 15:
            color = '#2563eb'  # blue
        elif day == 30:
            color = '#ea580c'  # orange
        return format_html(
            '<span style="padding:2px 6px;border-radius:10px;background:{};color:white;font-weight:600;">{}</span>',
            color, day
        )

    @admin.display(description='Краткая сводка')
    def section_scores_short(self, obj):
        scores = obj.scores_by_section or {}
        if not isinstance(scores, dict) or not scores:
            return '—'
        parts = [f"{k}:{v}" for k, v in scores.items()]
        s = '; '.join(parts)
        if len(s) > 80:
            s = s[:77] + '...'
        return s

    @admin.action(description='Экспорт CSV (разбивка по разделам)')
    def export_tests_csv_by_sections(self, request, queryset):
        # Соберем множество всех разделов в выбранных записях
        sections = []
        seen = set()
        for obj in queryset:
            if isinstance(obj.scores_by_section, dict):
                for key in obj.scores_by_section.keys():
                    if key not in seen:
                        seen.add(key)
                        sections.append(key)
        headers = ['participant', 'day', 'total_score'] + sections

        response = HttpResponse(content_type='text/csv; charset=utf-8')
        response['Content-Disposition'] = 'attachment; filename=tests_by_sections.csv'
        writer = csv.writer(response)
        writer.writerow(headers)
        for obj in queryset.select_related('participant'):
            row = [
                getattr(obj.participant, 'full_name', str(obj.participant)),
                obj.day,
                obj.total_score,
            ]
            scores = obj.scores_by_section or {}
            row.extend([scores.get(sec, 0) for sec in sections])
            writer.writerow(row)
        return response

    @admin.action(description='Экспорт Excel (разбивка по разделам)')
    def export_tests_xlsx_by_sections(self, request, queryset):
        if not TABLIB_AVAILABLE:
            self.message_user(request, 'tablib недоступен: Excel экспорт невозможен. Убедитесь, что установлен django-import-export.', level=messages.ERROR)
            return None
        sections = []
        seen = set()
        for obj in queryset:
            if isinstance(obj.scores_by_section, dict):
                for key in obj.scores_by_section.keys():
                    if key not in seen:
                        seen.add(key)
                        sections.append(key)
        headers = ['participant', 'day', 'total_score'] + sections

        dataset = tablib.Dataset()
        dataset.headers = headers
        for obj in queryset.select_related('participant'):
            scores = obj.scores_by_section or {}
            row = [
                getattr(obj.participant, 'full_name', str(obj.participant)),
                obj.day,
                obj.total_score,
            ] + [scores.get(sec, 0) for sec in sections]
            dataset.append(row)

        data = dataset.export('xlsx')
        response = HttpResponse(data, content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename=tests_by_sections.xlsx'
        return response

    def _build_questions_index(self, tests_queryset):
        # Собираем уникальные id вопросов из ответов
        qids = set()
        for t in tests_queryset:
            answers = getattr(t, 'answers', None)
            if isinstance(answers, list):
                for a in answers:
                    if isinstance(a, dict) and a.get('question') is not None:
                        qids.add(a.get('question'))
        q_map = {}
        if qids:
            qs = Question.objects.filter(id__in=list(qids)).prefetch_related('options')
            for q in qs:
                options = {}
                for opt in q.options.all():
                    native_or_order = opt.native_id if opt.native_id is not None else (opt.order or 0) + 1
                    options[native_or_order] = opt.label
                q_map[q.id] = {
                    'text': q.text,
                    'number': getattr(q, 'number', None),
                    'section': q.section,
                    'options': options,
                }
        return q_map

    @admin.action(description='Экспорт Excel (подробно: баллы + ответы)')
    def export_tests_xlsx_full(self, request, queryset):
        if not TABLIB_AVAILABLE:
            self.message_user(request, 'tablib недоступен: Excel экспорт невозможен. Установите tablib/xlsxwriter.', level=messages.ERROR)
            return None

        # Соберем множество всех разделов для сводки
        sections = []
        seen = set()
        for obj in queryset:
            if isinstance(obj.scores_by_section, dict):
                for key in obj.scores_by_section.keys():
                    if key not in seen:
                        seen.add(key)
                        sections.append(key)

        # Подготовим индексы вопросов и опций
        tests = list(queryset.select_related('participant').order_by('participant__full_name', 'day', 'id'))
        q_index = self._build_questions_index(tests)

        # Сводка по тестам
        summary = tablib.Dataset()
        summary.title = 'Сводка'
        summary.headers = ['Участник', 'Email', 'Группа', 'День', 'Итого баллов'] + sections + ['Дата теста']
        for t in tests:
            participant = getattr(t, 'participant', None)
            full_name = getattr(participant, 'full_name', str(participant))
            email = getattr(participant, 'email', '')
            group = getattr(participant, 'study_group', '')
            row = [full_name, email, group, t.day, t.total_score]
            scores = t.scores_by_section or {}
            row.extend([scores.get(sec, 0) for sec in sections])
            created_at = getattr(t, 'created_at', None)
            if created_at:
                try:
                    dt_local = timezone.localtime(created_at)
                except Exception:
                    dt_local = created_at
                try:
                    dt_naive = timezone.make_naive(dt_local)
                except Exception:
                    dt_naive = dt_local.replace(tzinfo=None) if getattr(dt_local, 'tzinfo', None) else dt_local
                row.append(dt_naive)
            else:
                row.append('')
            summary.append(row)

        # Детальные ответы
        details = tablib.Dataset()
        details.title = 'Ответы'
        details.headers = ['Участник', 'Email', 'Группа', 'День', '№', 'Вопрос', 'Раздел', 'Выбрано', 'Свободный ввод']
        for t in tests:
            participant = getattr(t, 'participant', None)
            full_name = getattr(participant, 'full_name', str(participant))
            email = getattr(participant, 'email', '')
            group = getattr(participant, 'study_group', '')
            answers = getattr(t, 'answers', None) or []
            for a in answers:
                if not isinstance(a, dict):
                    continue
                qid = a.get('question')
                q = q_index.get(qid)
                q_text = q['text'] if q else f'Вопрос {qid}'
                q_no = q['number'] if q and q['number'] is not None else qid
                section = a.get('section') or (q['section'] if q else '')
                selected_ids = a.get('selected') or []
                labels = []
                if q:
                    for sid in selected_ids:
                        lbl = q['options'].get(sid)
                        if isinstance(lbl, str):
                            labels.append(lbl)
                selected_str = ', '.join(labels) if labels else '—'
                free_input = a.get('input') or ''
                details.append([full_name, email, group, t.day, q_no, q_text, section, selected_str, free_input])

        book = tablib.Databook([summary, details])
        data = book.export('xlsx')
        response = HttpResponse(data, content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename=tests_full.xlsx'
        return response

    @admin.action(description='Экспорт XLSX (исследование: по дням, админ+код+ответы+баллы)')
    def export_research_xlsx(self, request, queryset):
        if not TABLIB_AVAILABLE:
            self.message_user(request, 'tablib недоступен: Excel экспорт невозможен. Установите tablib/xlsxwriter.', level=messages.ERROR)
            return None

        tests = list(queryset.select_related('participant').order_by('participant__full_name', 'day', 'id'))
        if not tests:
            self.message_user(request, 'Нет данных для экспорта.', level=messages.WARNING)
            return None

        q_index = self._build_questions_index(tests)

        # Группируем по дню
        by_day = {1: [], 15: [], 30: []}
        for t in tests:
            if t.day in by_day:
                by_day[t.day].append(t)

        sheets = []
        for day in (1, 15, 30):
            day_tests = by_day.get(day) or []
            if not day_tests:
                # Можно пропускать пустые вкладки
                continue

            # Собираем порядок вопросов для этого дня (по номеру, затем по id)
            qids_set = set()
            for t in day_tests:
                answers = getattr(t, 'answers', []) or []
                for a in answers:
                    if isinstance(a, dict) and a.get('question') is not None:
                        qids_set.add(a.get('question'))
            qids = list(qids_set)
            qids.sort(key=lambda qid: (q_index.get(qid, {}).get('number') or 9999, qid))

            # Секции для итогов (объединение)
            sections = []
            seen = set()
            for t in day_tests:
                scores = getattr(t, 'scores_by_section', None) or {}
                for sec in scores.keys():
                    if sec not in seen:
                        seen.add(sec)
                        sections.append(sec)

            # Шапка
            admin_headers = ['№', 'Код участника', 'ФИО', 'Email', 'Возраст', 'Телефон', 'Группа']
            question_headers = [f"Q{(q_index.get(qid, {}).get('number') or qid):02d}" for qid in qids]
            # добавим колонку "Отзыв" в конце
            score_headers = ['Итого баллов'] + sections + ['Отзыв']

            ds = tablib.Dataset()
            ds.title = f'День {day}'
            ds.headers = admin_headers + question_headers + score_headers

            # Заполнение
            for i, t in enumerate(day_tests, start=1):
                p = getattr(t, 'participant', None)
                code = f"P{getattr(p, 'id', 0):05d}"
                row = [
                    i,
                    code,
                    getattr(p, 'full_name', ''),
                    getattr(p, 'email', ''),
                    getattr(p, 'age', ''),
                    getattr(p, 'phone', ''),
                    getattr(p, 'study_group', ''),
                ]

                # Ответы индексируем по question id
                a_map = {}
                answers = getattr(t, 'answers', []) or []
                for a in answers:
                    if isinstance(a, dict) and a.get('question') is not None:
                        a_map[a.get('question')] = a

                # Значения по вопросам
                for qid in qids:
                    a = a_map.get(qid)
                    if not a:
                        row.append('')
                        continue
                    q = q_index.get(qid)
                    labels = []
                    if q:
                        for sid in (a.get('selected') or []):
                            lbl = q['options'].get(sid)
                            if isinstance(lbl, str):
                                labels.append(lbl)
                    cell = ', '.join(labels) if labels else ''
                    if a.get('input'):
                        cell = f"{cell} | Ввод: {a.get('input')}" if cell else f"Ввод: {a.get('input')}"
                    row.append(cell)

                # Итоги
                row.append(getattr(t, 'total_score', 0))
                scores = getattr(t, 'scores_by_section', None) or {}
                row.extend([scores.get(sec, 0) for sec in sections])

                # Отзыв по дню, если есть
                row.append(getattr(t, 'feedback', '') or '')

                ds.append(row)

            sheets.append(ds)

        if not sheets:
            self.message_user(request, 'Нет данных для экспорта.', level=messages.WARNING)
            return None

        book = tablib.Databook(sheets)
        data = book.export('xlsx')
        response = HttpResponse(data, content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename=research_export.xlsx'
        return response

    @admin.display(description='Баллы по разделам')
    def section_scores_human(self, obj):
        scores = obj.scores_by_section or {}
        if not isinstance(scores, dict) or not scores:
            return mark_safe('<em>Нет данных</em>')
        items = ''.join(
            f'<li><strong>{section}:</strong> {score}</li>'
            for section, score in scores.items()
        )
        total = f'<p><strong>Итого баллов:</strong> {obj.total_score}</p>'
        return mark_safe(f'<ul>{items}</ul>{total}')

    @admin.display(description='Ответы (читаемо)')
    def answers_human(self, obj):
        answers = obj.answers or []
        if not isinstance(answers, list) or not answers:
            return mark_safe('<em>Нет ответов</em>')

        # Собираем данные вопросов и опций для отображения меток
        qids = [a.get('question') for a in answers if isinstance(a, dict) and a.get('question') is not None]
        qs = {q.id: q for q in Question.objects.filter(id__in=qids).prefetch_related('options')}

        # Маппинг: вопрос -> (native_id или вычисленный порядок) -> label
        options_map = {}
        for qid, q in qs.items():
            options_map[qid] = {}
            for opt in q.options.all():
                native_or_order = opt.native_id if opt.native_id is not None else (opt.order or 0) + 1
                options_map[qid][native_or_order] = opt.label

        items_html = []
        for a in answers:
            if not isinstance(a, dict):
                continue
            qid = a.get('question')
            q = qs.get(qid)
            if q:
                title = f'[{q.id}] {q.text}'
                section = a.get('section') or (q.section or '')
            else:
                title = f'Вопрос {qid}'
                section = a.get('section') or ''

            selected_ids = a.get('selected') or []
            labels = [options_map.get(qid, {}).get(sid) for sid in selected_ids]
            labels = [lbl for lbl in labels if isinstance(lbl, str)]
            labels_str = ', '.join(labels) if labels else '—'

            free_input = a.get('input')
            input_str = f'<div><em>Свободный ввод:</em> {free_input}</div>' if free_input else ''

            items_html.append(
                f'<li>'
                f'<div><strong>{title}</strong></div>'
                f'<div><em>Раздел:</em> {section or "—"}</div>'
                f'<div><em>Выбрано:</em> {labels_str}</div>'
                f'{input_str}'
                f'</li>'
            )

        html = '<ol>{}</ol>'.format(''.join(items_html))
        return mark_safe(html)

@admin.register(Exercise)
class ExerciseAdmin(ModelAdmin):
    list_display = ('name', 'timecode', 'phase', 'file')
    list_filter = ('phase',)
    search_fields = ('name',)


@admin.register(CalmingVideoSegment)
class CalmingVideoSegmentAdmin(ModelAdmin):
    list_display = ('phase', 'segment', 'file')
    list_filter = ('phase',)
    search_fields = ('file',)


class QuestionOptionInline(admin.TabularInline):
    model = QuestionOption
    extra = 1


@admin.register(Question)
class QuestionAdmin(ModelAdmin):
    list_display = ('id', 'text', 'type')
    search_fields = ('text',)
    list_filter = ('type',)
    inlines = [QuestionOptionInline]