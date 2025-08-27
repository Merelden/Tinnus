from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import datetime

from core.services.daily_email import perform_daily_emails


class Command(BaseCommand):
    help = "Send daily program emails to participants based on their study group and start date."

    def add_arguments(self, parser):
        parser.add_argument('--date', dest='date', default=None, help='Target date YYYY-MM-DD (default: today).')
        parser.add_argument('--dry-run', action='store_true', dest='dry_run', default=False, help='Do not send or write logs.')
        parser.add_argument('--user', dest='user', default=None, help='Only for specific user id or email.')

    def handle(self, *args, **options):
        datestr = options.get('date')
        if datestr:
            try:
                target_date = datetime.strptime(datestr, '%Y-%m-%d').date()
            except ValueError:
                self.stderr.write(self.style.ERROR('Invalid --date format. Use YYYY-MM-DD.'))
                return
        else:
            target_date = timezone.localdate()

        dry_run = bool(options.get('dry_run'))
        user_filter = options.get('user')

        counters = perform_daily_emails(target_date=target_date, user=user_filter, dry_run=dry_run)
        self.stdout.write(self.style.SUCCESS(
            f"Done. Sent={counters['sent']}, Skipped={counters['skipped']}, Failed={counters['failed']} (Total considered={counters['total']})."
        ))
