# backend/app/core/config.py
import os
from dotenv import load_dotenv

load_dotenv()

INSTAGRAM_API_TOKEN = os.getenv("INSTAGRAM_API_TOKEN")
VERIFY_TOKEN = os.getenv("VERIFY_TOKEN")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
MONGO_URL = os.getenv("MONGO_URL")