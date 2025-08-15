from django.contrib.auth.password_validation import MinimumLengthValidator
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


class CustomMinimumLengthValidator(MinimumLengthValidator):
    """
    Заменяет стандартное сообщение MinimumLengthValidator на русское.
    Поведение и код ошибки (password_too_short) сохранены.
    """

    def __init__(self, min_length=8):
        self.min_length = int(min_length)

    def validate(self, password, user=None):
        if password is None:
            password = ""
        if len(password) < self.min_length:
            raise ValidationError(
                _(
                    "Этот пароль слишком короткий. Он должен содержать как минимум %(min_length)d символов."
                ),
                code="password_too_short",
                params={"min_length": self.min_length},
            )

    def get_help_text(self):
        return _(
            "Ваш пароль должен содержать как минимум %(min_length)d символов."
        ) % {"min_length": self.min_length}
