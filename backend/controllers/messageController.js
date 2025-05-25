import Message from '../models/UserMessage.js';
import Session from '../models/Session.js';

// Create and store a new message
export const createMessage = async (req, res) => {
  try {
    const { senderId, receiverId, text, tone } = req.body;

    // Optional: Check if session exists or create one
    let session = await Session.findOne({ userId: senderId, partnerId: receiverId });
    if (!session) {
      session = new Session({ userId: senderId, partnerId: receiverId });
      await session.save();
    }

    const message = new Message({
      senderId,
      receiverId,
      text,
      tone,
      sessionId: session._id,
    });

    await message.save();

    // Update session's last message
    session.messages.push(message._id);
    session.lastMessageAt = new Date();
    await session.save();

    res.status(201).json({ message: 'Message saved', data: message });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ error: 'Failed to save message' });
  }
};

// Get all messages of a session
export const getMessagesBySession = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const messages = await Message.find({ sessionId }).sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};
