import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  platform: { type: String, enum: ['instagram', 'tiktok'], required: true },
  personality: { type: String, default: 'Unknown' },
  tone: { type: String, enum: ['flirty', 'friendly'], default: 'friendly' },
  engagementScore: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('Session', sessionSchema);
