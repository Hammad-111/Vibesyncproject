import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import messageRoutes from './routes/messageRoutes.js';
import sessionRoutes from './routes/sessionRoutes.js';
import chatRoutes from './routes/chatRoutes.js';


dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use('/api/messages', messageRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/chat', chatRoutes);
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT || 5000, () => {
    console.log('Server running...');
  }))
  .catch(err => console.log(err));
