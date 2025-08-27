from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger
from django.utils import timezone
from django.db import transaction
import logging

from core.models import DailyEmailRun
from core.services.daily_email import perform_daily_emails

logger = logging.getLogger(__name__)


_scheduler = None


def _run_daily_job():
    today = timezone.localdate()
    # Guard: ensure only one run per day
    try:
        with transaction.atomic():
            run, created = DailyEmailRun.objects.select_for_update().get_or_create(date=today)
            if not created and run.status in ('running', 'finished'):
                # Already running or finished for today
                logger.info(f"DailyEmailRun already exists for {today} with status {run.status}; skipping job")
                return
            run.status = 'running'
            run.error = None
            run.sent = run.skipped = run.failed = 0
            run.save()
    except Exception as e:
        logger.exception(f"Failed to acquire daily run lock: {e}")
        return

    try:
        counters = perform_daily_emails(target_date=today)
        DailyEmailRun.objects.filter(date=today).update(
            sent=counters.get('sent', 0),
            skipped=counters.get('skipped', 0),
            failed=counters.get('failed', 0),
            status='finished',
            finished_at=timezone.now(),
        )
        logger.info(f"Daily email run finished: {counters}")
    except Exception as e:
        DailyEmailRun.objects.filter(date=today).update(status='failed', error=str(e), finished_at=timezone.now())
        logger.exception(f"Daily email run failed: {e}")


def start_scheduler():
    global _scheduler
    if _scheduler is not None:
        return _scheduler
    scheduler = BackgroundScheduler(timezone=str(timezone.get_current_timezone()))
    # Run every day at 09:00 server time. Adjust as needed via env if necessary.
    scheduler.add_job(_run_daily_job, CronTrigger(hour=9, minute=0))
    scheduler.start()
    _scheduler = scheduler
    logger.info("BackgroundScheduler for daily emails started (09:00).")
    return _scheduler
