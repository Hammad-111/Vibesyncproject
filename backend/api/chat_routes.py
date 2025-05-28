# backend/app/api/chat_routes.py
from fastapi import APIRouter, Request
from services.message_handler import send_message

router = APIRouter()

@router.post("/chat/send")
async def send_chat_message(request: Request):
    body = await request.json()
    recipient_id = body.get("recipient_id")
    message = body.get("message")
    return await send_message(recipient_id, message)