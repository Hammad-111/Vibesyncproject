# backend/app/db/models.py
def create_session(user_id):
    from db.database import db
    db.sessions.insert_one({"user_id": user_id, "messages": [], "personality": {}, "score": 0})

def save_message(user_id, message):
    from app.db.database import db
    db.sessions.update_one({"user_id": user_id}, {"$push": {"messages": message}})

