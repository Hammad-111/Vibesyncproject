import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePic: { type: String, default: '' },
  personality: { type: String, default: 'Unknown' },
  tone: { type: String, enum: ['flirty', 'friendly'], default: 'friendly' },
  engagementScore: { type: Number, default: 0 },
  firebaseUID: { type: String, required: true, unique: true }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
