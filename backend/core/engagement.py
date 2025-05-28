# backend/app/core/engagement.py
def calculate_engagement_score(message):
    score = 0
    if any(p in message for p in ["?", "!", ":)", "😂", "❤️"]):
        score += 1
    if len(message) > 50:
        score += 1
    return score