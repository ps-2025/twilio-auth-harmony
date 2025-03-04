
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true
  },
  photoURL: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  phoneNumber: String
});

module.exports = mongoose.model('User', UserSchema);
