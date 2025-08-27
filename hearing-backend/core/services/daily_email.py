from datetime import date
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.template import TemplateDoesNotExist
from django.utils import timezone
import logging

from core.models import Participant, DailyEmailLog

logger = logging.getLogger(__name__)


def _program_day_for(participant, target_date: date) -> int:
    today = target_date
    start_date = timezone.localtime(participant.created_at).date() if participant.created_at else today
    day = (today - start_date).days + 1
    if day < 1:
        day = 1
    return day


def perform_daily_emails(target_date: date, user=None, dry_run: bool = False):
    qs = Participant.objects.exclude(email__isnull=True).exclude(email__exact='')
    if user:
        try:
            uid = int(user)
            qs = qs.filter(user__id=uid)
        except (TypeError, ValueError):
            qs = qs.filter(email=user)

    total = qs.count()
    counters = {"sent": 0, "skipped": 0, "failed": 0, "total": total}

    for participant in qs.iterator():
        # Avoid duplicate per date
        if DailyEmailLog.objects.filter(participant=participant, date=target_date).exists():
            counters["skipped"] += 1
            continue

        day = _program_day_for(participant, target_date)
        max_day = 15 if participant.study_group == 15 else 30
        if day > max_day:
            counters["skipped"] += 1
            continue

        context = {
            'participant': participant,
            'day': day,
            'study_group': participant.study_group,
            'site_url': getattr(settings, 'SITE_URL', ''),
        }

        subject = f"NeuroTinnitus — день {day} из {participant.study_group}"

        try:
            text_body = render_to_string('emails/daily.txt', context)
        except TemplateDoesNotExist:
            text_body = (
                f"Здравствуйте, {participant.full_name}!\n\n"
                f"Сегодня день {day} из {participant.study_group} вашей программы.\n"
                f"Перейдите на сайт: {context['site_url']}\n\n"
                f"Хорошего дня!"
            )
        try:
            html_body = render_to_string('emails/daily.html', context)
        except TemplateDoesNotExist:
            html_body = (
                f"<p>З��равствуйте, {participant.full_name}!</p>"
                f"<p>Сегодня день <strong>{day}</strong> из <strong>{participant.study_group}</strong> вашей программы.</p>"
                f"<p><a href=\"{context['site_url']}\">Перейти на сайт</a></p>"
                f"<p>Хорошего дня!</p>"
            )

        if dry_run:
            counters["skipped"] += 1
            logger.info(f"[DRY-RUN] Would send to {participant.email}: day {day}")
            continue

        try:
            msg = EmailMultiAlternatives(
                subject=subject,
                body=text_body,
                from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', None),
                to=[participant.email],
            )
            msg.attach_alternative(html_body, 'text/html')
            msg.send(fail_silently=False)
            DailyEmailLog.objects.create(participant=participant, day=day, date=target_date, status='sent')
            counters["sent"] += 1
        except Exception as e:
            DailyEmailLog.objects.create(participant=participant, day=day, date=target_date, status='failed', error=str(e))
            counters["failed"] += 1
            logger.exception(f"Failed to send to {participant.id} {participant.email}: {e}")

    return counters
