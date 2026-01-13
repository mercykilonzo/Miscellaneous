from django.contrib import admin
from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = (
        "email", 
        "first_name", 
        "last_name", 
        "phone_number", 
        "type", 
        "user_id",
        "created_at",
    )
    list_filter = ("type", "is_staff", "is_active", "is_superuser")

    search_fields = ("email", "first_name", "last_name", "phone_number")
admin.site.register(User, UserAdmin)