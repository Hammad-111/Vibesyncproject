import mongoose from 'mongoose';

const engagementLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  avgResponseTime: Number,
  emojiUsageRate: Number,
  questionRate: Number,
  score: Number,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('EngagementLog', engagementLogSchema);
