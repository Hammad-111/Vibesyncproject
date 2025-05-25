import express from 'express';
import { createMessage, getMessagesBySession } from '../controllers/messageController.js';

const router = express.Router();

// POST: Create a new message
router.post('/', createMessage);

// GET: All messages of a session
router.get('/:sessionId', getMessagesBySession);

export default router;
