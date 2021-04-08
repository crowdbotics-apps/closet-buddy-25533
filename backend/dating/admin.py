from django.contrib import admin
from .models import Setting, Profile, Inbox, Dislike, Match, UserPhoto, Like

admin.site.register(Profile)
admin.site.register(Setting)
admin.site.register(Dislike)
admin.site.register(Like)
admin.site.register(Inbox)
admin.site.register(UserPhoto)
admin.site.register(Match)

# Register your models here.
