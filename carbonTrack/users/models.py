from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone

USER_TYPE_CHOICES = [
    ('KTDA manager', 'KTDA Manager'),
    ('Factory manager', 'Factory Manager'),
]

class UserManager(BaseUserManager):
    def create_user(self, email, name, phone_number=None, user_type=None, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if user_type and user_type not in dict(USER_TYPE_CHOICES):
            raise ValueError('Invalid user type')
        
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            name=name,
            phone_number=phone_number,
            type=user_type,
            created_at=timezone.now()
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, name, phone_number=None, password=None):
        user = self.create_user(
            email=email,
            name=name,
            phone_number=phone_number,
            user_type='KTDA manager', 
            password=password
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    factory_id = models.CharField(max_length=100, blank=True, null=True)  
    first_name = models.CharField(max_length=40, blank=True)
    last_name = models.CharField(max_length=40, blank=True)
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=128)
    type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image=models.URLField(max_length=500, blank=True, null=True)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']  

    def __str__(self):
        return self.first_name