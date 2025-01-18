from django.db import models
from uuid import uuid4


# Create your models here.
class Application(models.Model):
    
    class Status(models.TextChoices):
        APPLIED = 'APPLIED', 'Applied'
        INTERVIEW = 'INTERVIEW', 'Interview'
        OFFER = 'OFFER', 'Offer'
        REJECTION = 'REJECTION', 'Rejection'

    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid4
    )
    company_name = models.TextField(null=False)
    position = models.TextField(null=False)
    created_at = models.DateField(
        auto_now_add = True
    )
    status = models.CharField(
        max_length = 10,
        choices = Status.choices,
        null = False,
        blank = False
    )

    def __str__(self):
        return f"{self.id}: {self.company_name} - {self.position} - {self.created_at} - {self.status}"
