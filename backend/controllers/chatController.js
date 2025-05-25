import OpenAI from 'openai';
import Message from '../models/UserMessage.js';
import Session from '../models/Session.js';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateReply = async (req, res) => {
  try {
    const { sessionId, userMessage } = req.body;

    const session = await Session.findById(sessionId).populate('user');
    if (!session || !session.user) {
      return res.status(404).json({ error: 'Session or user not found' });
    }

    const user = session.user;

    const messages = await Message.find({ sessionId }).sort({ createdAt: 1 });

    const chatHistory = messages.map((msg) => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.content,
    }));

    chatHistory.push({
      role: 'user',
      content: userMessage,
    });

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a ${user.tone || 'friendly'} chatbot. Always stay within a ${user.tone || 'friendly'} tone. The user's personality is: ${user.personality || 'unknown personality'}.`,
        },
        ...chatHistory,
      ],
    });

    const aiMessage = response.choices[0].message.content;

    await Message.create({
      sessionId,
      sender: 'user',
      content: userMessage,
    });

    await Message.create({
      sessionId,
      sender: 'ai',
      content: aiMessage,
    });

    res.status(200).json({ reply: aiMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
