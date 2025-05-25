import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sender: { type: String, enum: ['ai', 'user'], required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  metadata: {
    emojisUsed: [String],
    containsQuestion: Boolean,
    responseTimeSec: Number
  }
});

export default mongoose.model('Message', messageSchema);
