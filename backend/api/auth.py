from fastapi.responses import HTMLResponse
from fastapi import APIRouter, Request

router = APIRouter()

# Existing auth routes...

@router.get("/auth/redirect", response_class=HTMLResponse)
async def instagram_redirect(request: Request):
    return "<h1>Instagram Login Successful. You can close this tab.</h1>"
