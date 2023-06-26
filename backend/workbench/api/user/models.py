from django.db import models

from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)


class UserManager(BaseUserManager):
    def create_user(self, username, email, user_type,  password=None, **kwargs):
        """Create and return a `User` with an email, username and password."""
        if password is None:
            raise TypeError("Superusers must have a password.")
        if username is None:
            raise TypeError("Users must have a username.")
        if email is None:
            raise TypeError("Users must have an email.")

        user = self.model(username=username, user_type=user_type, email=self.normalize_email(email),)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, email, user_type, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError("Superusers must have a password.")
        if email is None:
            raise TypeError("Superusers must have an email.")
        if username is None:
            raise TypeError("Superusers must have an username.")
     

        user = self.create_user(username, email,  user_type, password)
        user.is_active = True
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
    

        return user


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)
    user_type = models.CharField(max_length=100,null=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username","user_type"]

    objects = UserManager()
    def __str__(self):
        return f"{self.username}"
    
    
   


