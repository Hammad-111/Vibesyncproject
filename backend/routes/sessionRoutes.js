import express from 'express';
import {
  createSession,
  endSession,
  getUserSessions,
} from '../controllers/sessionController.js';

const router = express.Router();

router.post('/', createSession);         // Create new session
router.patch('/:sessionId/end', endSession);  // End session
router.get('/:userId', getUserSessions); // Get all sessions for user

export default router;
