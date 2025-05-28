# backend/app/services/message_handler.py
from db.models import create_session, save_message
from core.engagement import calculate_engagement_score

def session_exists(user_id):
    from app.db.database import db
    return db.sessions.find_one({"user_id": user_id}) is not None

def handle_incoming_message(data):
    user_id = data["sender"]
    message = data["message"]
    if not session_exists(user_id):
        create_session(user_id)
    save_message(user_id, {"from": "user", "text": message})
    score = calculate_engagement_score(message)
    from app.db.database import db
    db.sessions.update_one({"user_id": user_id}, {"$set": {"score": score}})

def send_message(user_id, message):
    # Integration with Instagram Graph API to send message (placeholder)
    save_message(user_id, {"from": "bot", "text": message})
    return {"status": "Message sent (placeholder)"}

