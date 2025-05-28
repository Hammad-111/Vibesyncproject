# backend/app/db/database.py
from pymongo import MongoClient
from core.config import MONGO_URL

client = MongoClient(MONGO_URL)
db = client["vibesync"]
