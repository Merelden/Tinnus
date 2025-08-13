from django.utils.deprecation import MiddlewareMixin

class DisableCSRFMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if (
            request.path.startswith('/auth/') or
            request.path.startswith('/api/') or
            request.path.startswith('/api/videos/') or
            request.path.startswith('/admin/')
        ):
            setattr(request, '_dont_enforce_csrf_checks', True)
