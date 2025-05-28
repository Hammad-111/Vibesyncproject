# backend/app/services/personality.py
from core.openai_client import get_opening_message

def analyze_personality(user_data):
    prompt = f"Analyze this user: {user_data}"
    return get_opening_message(prompt)

