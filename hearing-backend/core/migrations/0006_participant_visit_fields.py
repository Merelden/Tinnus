from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_seed_all_questions'),
    ]

    operations = [
        migrations.AddField(
            model_name='participant',
            name='last_visit_date',
            field=models.DateField(null=True, blank=True),
        ),
        migrations.AddField(
            model_name='participant',
            name='visit_streak',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='participant',
            name='max_visit_streak',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
