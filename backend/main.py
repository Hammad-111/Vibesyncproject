# backend/app/main.py
from fastapi import FastAPI
from api import instagram_webhook, chat_routes, auth

app = FastAPI()

app.include_router(instagram_webhook.router, prefix="/api")
app.include_router(chat_routes.router, prefix="/api")
app.include_router(auth.router, prefix="/api")


# backend/app/utils.py
def format_timestamp(ts):
    from datetime import datetime
    return datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
