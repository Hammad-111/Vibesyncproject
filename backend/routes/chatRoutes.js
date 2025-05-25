import express from 'express';
import { generateReply } from '../controllers/chatController.js';

const router = express.Router();

router.post('/reply', generateReply);

export default router;
