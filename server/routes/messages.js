
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const { sendSMS, getMessageStatus } = require('../config/twilio');
const passport = require('passport');

// Middleware to check if user is authenticated
const isAuthenticated = passport.authenticate('jwt', { session: false });

// Get all messages for the current user
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const messages = await Message.find({ userId: req.user.id })
      .sort({ createdAt: -1 });
      
    res.json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Send a new message
router.post('/', isAuthenticated, async (req, res) => {
  try {
    const { to, body } = req.body;
    
    if (!to || !body) {
      return res.status(400).json({ error: 'To and body fields are required' });
    }

    // Send message via Twilio
    const twilioResponse = await sendSMS(to, body);
    
    // Create message in database
    const message = new Message({
      body,
      from: twilioResponse.from,
      to: twilioResponse.to,
      userId: req.user.id,
      twilioSid: twilioResponse.sid,
      status: twilioResponse.status
    });
    
    await message.save();
    
    res.status(201).json(message);
  } catch (err) {
    console.error('Error sending message:', err);
    
    // Handle Twilio specific errors
    if (err.code) {
      return res.status(400).json({ 
        error: 'Twilio error', 
        message: err.message,
        code: err.code
      });
    }
    
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific message by ID
router.get('/:id', isAuthenticated, async (req, res) => {
  try {
    const message = await Message.findOne({ 
      _id: req.params.id,
      userId: req.user.id
    });
    
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    
    res.json(message);
  } catch (err) {
    console.error('Error fetching message:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update message status
router.patch('/:id/status', isAuthenticated, async (req, res) => {
  try {
    const message = await Message.findOne({ 
      _id: req.params.id,
      userId: req.user.id
    });
    
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    
    if (message.twilioSid) {
      const status = await getMessageStatus(message.twilioSid);
      message.status = status;
      await message.save();
    }
    
    res.json(message);
  } catch (err) {
    console.error('Error updating message status:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
