
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  twilioSid: String,
  status: {
    type: String,
    enum: ['sending', 'sent', 'delivered', 'failed'],
    default: 'sending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', MessageSchema);
