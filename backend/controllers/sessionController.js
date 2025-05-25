import Session from '../models/Session.js';

export const createSession = async (req, res) => {
  try {
    const { userId, platform, personality, tone } = req.body;

    const session = new Session({
      userId,
      platform,
      personality,
      tone,
    });

    await session.save();
    res.status(201).json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const endSession = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const session = await Session.findByIdAndUpdate(
      sessionId,
      { isActive: false },
      { new: true }
    );

    if (!session) return res.status(404).json({ error: 'Session not found' });

    res.status(200).json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserSessions = async (req, res) => {
  try {
    const { userId } = req.params;

    const sessions = await Session.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
