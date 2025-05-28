# backend/app/api/instagram_webhook.py
from fastapi import APIRouter, Request, status
from fastapi.responses import JSONResponse
from services.message_handler import handle_incoming_message

router = APIRouter()

@router.post("/webhook")
async def instagram_webhook(request: Request):
    data = await request.json()
    try:
        await handle_incoming_message(data)
        return JSONResponse(content={"message": "OK"}, status_code=200)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

