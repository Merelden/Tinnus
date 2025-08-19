from django.utils import timezone
from django.db import transaction


from django.apps import apps


class VisitStreakMiddleware:
    """
    Tracks user last visit date and keeps historical visit streak fields for compatibility.
    Authentication: session-based only (request.user). No JWT support.
    Note: Business logic for "streak" in API responses is now based on registration date, not consecutive visits.
    Stores data per Participant:
      - last_visit_date (date)
      - visit_streak (int)
      - max_visit_streak (int)
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        user = getattr(request, 'user', None)
        if user and getattr(user, 'is_authenticated', False):
            self._update_visit_streak(user_id=user.id)
        response = self.get_response(request)
        return response

    @staticmethod
    def _update_visit_streak(user_id: int) -> None:
        today = timezone.localdate()
        Participant = apps.get_model('core', 'Participant')

        # Run inside its own transaction boundary to be safe even if view errors later
        # and guard against race conditions with select_for_update
        with transaction.atomic():
            try:
                participant = Participant.objects.select_for_update().get(user_id=user_id)
            except Participant.DoesNotExist:
                return

            last = getattr(participant, 'last_visit_date', None)
            streak = getattr(participant, 'visit_streak', 0) or 0
            max_streak = getattr(participant, 'max_visit_streak', 0) or 0

            if last == today:
                # Already counted today
                return

            if last is None:
                streak = 1
            else:
                delta = (today - last).days
                if delta == 1:
                    streak += 1
                elif delta > 1:
                    streak = 1
                else:
                    # Future-dated or same-day handled above; in any odd case, avoid decrement
                    streak = max(1, streak)

            max_streak = max(max_streak, streak)

            participant.last_visit_date = today
            participant.visit_streak = streak
            participant.max_visit_streak = max_streak
            participant.save(update_fields=[
                'last_visit_date', 'visit_streak', 'max_visit_streak'
            ])
