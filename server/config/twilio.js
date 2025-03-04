
const twilio = require('twilio');

// Load environment variables
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

// Initialize Twilio client
const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

/**
 * Send an SMS message via Twilio
 *
 * @param {string} to - Recipient phone number
 * @param {string} body - Message content
 * @returns {Promise} - Twilio API response
 */
const sendSMS = async (to, body) => {
  try {
    const message = await client.messages.create({
      body,
      from: TWILIO_PHONE_NUMBER,
      to
    });
    
    return message;
  } catch (error) {
    console.error('Twilio sendSMS error:', error);
    throw error;
  }
};

/**
 * Get message status from Twilio
 *
 * @param {string} messageSid - Twilio message SID
 * @returns {Promise} - Twilio API response with message status
 */
const getMessageStatus = async (messageSid) => {
  try {
    const message = await client.messages(messageSid).fetch();
    return message.status;
  } catch (error) {
    console.error('Twilio getMessageStatus error:', error);
    throw error;
  }
};

module.exports = {
  client,
  sendSMS,
  getMessageStatus
};
