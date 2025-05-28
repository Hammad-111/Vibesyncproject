# backend/app/core/openai_client.py
import openai
from core.config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

def get_opening_message(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return response["choices"][0]["message"]["content"].strip()
