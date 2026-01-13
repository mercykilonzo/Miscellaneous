from django.contrib import admin

# Register your models here.

from .models import Factory, MCU, Emission

admin.site.register(Factory)
admin.site.register(MCU)
admin.site.register(Emission)