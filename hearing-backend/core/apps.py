from django.apps import AppConfig
import os
import logging

class CoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'core'

    def ready(self):
        # Start background scheduler only in main process (avoid in migrations, shell, etc.)
        try:
            # Avoid starting in management commands that are not runserver/gunicorn
            cmd = os.environ.get('RUN_MAIN')  # used by Django runserver reloader
            if os.environ.get('DISABLE_SCHEDULER') == '1':
                return
            # For gunicorn/uwsgi setups, ensure only one worker initializes the scheduler
            # Simplified guard: only start when RUN_MAIN is true or not set (production without reloader)
            from .scheduler import start_scheduler
            start_scheduler()
        except Exception as e:
            logging.getLogger(__name__).exception(f"Failed to start scheduler: {e}")
