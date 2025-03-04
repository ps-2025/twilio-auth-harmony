
import React, { useState } from 'react';
import { useTwilio } from '@/contexts/TwilioContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const MessageForm = () => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const { sendMessage, loading } = useTwilio();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recipient || !message) return;
    
    await sendMessage(recipient, message);
    setMessage(''); // Clear message after sending
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col space-y-4">
        <div>
          <label htmlFor="recipient" className="text-sm font-medium mb-1 block">
            Recipient Phone Number
          </label>
          <Input
            id="recipient"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
            className="transition-all duration-300 border-border focus:ring-2 focus:ring-ring/20"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="text-sm font-medium mb-1 block">
            Message
          </label>
          <div className="relative">
            <Input
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              required
              className="pr-20 transition-all duration-300 border-border focus:ring-2 focus:ring-ring/20"
            />
            <Button
              type="submit"
              disabled={loading || !recipient || !message}
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-4"
            >
              {loading ? (
                <svg 
                  className="animate-spin h-4 w-4" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                    fill="none"
                  ></circle>
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : 'Send'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MessageForm;
