from django.utils import timezone
from django.db import transaction

try:
    # SimpleJWT authentication to extract user from JWT when session auth is not used
    from rest_framework_simplejwt.authentication import JWTAuthentication
except Exception:  # pragma: no cover
    JWTAuthentication = None

from django.apps import apps


class VisitStreakMiddleware:
    """
    Tracks how many consecutive days a user visits the app.
    Works with both session auth (request.user) and JWT (Authorization header).
    Stores data per Participant:
      - last_visit_date (date)
      - visit_streak (int)
      - max_visit_streak (int)
    """

    def __init__(self, get_response):
        self.get_response = get_response
        self.jwt_auth = JWTAuthentication() if JWTAuthentication is not None else None

    def __call__(self, request):
        user = getattr(request, 'user', None)

        # If not authenticated via session, try JWT
        if not (user and user.is_authenticated) and self.jwt_auth is not None:
            try:
                auth_res = self.jwt_auth.authenticate(request)
                if auth_res is not None:
                    user, _ = auth_res
            except Exception:
                user = None

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
