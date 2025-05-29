# backend/app/main.py
from fastapi import FastAPI
from api import chat_routes, auth
from api.instagram_webhook import router as instagram_router


app = FastAPI()
app.include_router(instagram_router, prefix="/api")
app.include_router(chat_routes.router, prefix="/api")
app.include_router(auth.router, prefix="/api")
