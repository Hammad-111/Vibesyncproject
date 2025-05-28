import os
from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import RedirectResponse
import httpx
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

CLIENT_ID = os.getenv("INSTAGRAM_CLIENT_ID")
CLIENT_SECRET = os.getenv("INSTAGRAM_CLIENT_SECRET")
REDIRECT_URI = os.getenv("INSTAGRAM_REDIRECT_URI")
FRONTEND_URL = os.getenv("FRONTEND_URL")

# 1. Step: Redirect user to Instagram OAuth
@router.get("/instagram/login")
def instagram_login():
    url = (
        "https://api.instagram.com/oauth/authorize"
        f"?client_id={CLIENT_ID}"
        f"&redirect_uri={REDIRECT_URI}"
        f"&scope=user_profile,user_media"
        f"&response_type=code"
    )
    return RedirectResponse(url)

# 2. Step: Instagram redirects back with code
@router.get("/instagram/callback")
async def instagram_callback(request: Request, code: str = None, error: str = None):
    if error:
        return RedirectResponse(f"{FRONTEND_URL}/?error={error}")

    # 3. Step: Exchange code for access token
    async with httpx.AsyncClient() as client:
        token_resp = await client.post(
            "https://api.instagram.com/oauth/access_token",
            data={
                "client_id": CLIENT_ID,
                "client_secret": CLIENT_SECRET,
                "grant_type": "authorization_code",
                "redirect_uri": REDIRECT_URI,
                "code": code,
            },
            headers={"Accept": "application/json"},
        )
        if token_resp.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to get access token")
        token_data = token_resp.json()
        access_token = token_data["access_token"]
        user_id = token_data["user_id"]

        # 4. Step: Get user profile info
        profile_resp = await client.get(
            f"https://graph.instagram.com/{user_id}",
            params={
                "fields": "id,username,account_type",
                "access_token": access_token,
            },
        )
        if profile_resp.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to get user profile")
        profile = profile_resp.json()

    # 5. Step: Save user info and token in DB (pseudo code)
    # save_user_to_db(user_id, profile["username"], access_token, profile["account_type"])

    # 6. Step: Redirect to frontend with user info (or set session/cookie)
    # For demo, send username as query param (use JWT/session in production)
    return RedirectResponse(f"{FRONTEND_URL}/?username={profile['username']}&id={profile['id']}")
