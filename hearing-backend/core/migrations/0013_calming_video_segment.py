from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_question_number_and_update_sections'),
    ]

    operations = [
        migrations.CreateModel(
            name='CalmingVideoSegment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phase', models.CharField(choices=[('early', 'Days 1-5'), ('late', 'Days 6-30')], max_length=10)),
                ('segment', models.PositiveIntegerField()),
                ('file', models.FileField(upload_to='calming/')),
            ],
            options={
                'ordering': ['phase', 'segment'],
                'unique_together': {('phase', 'segment')},
            },
        ),
    ]
