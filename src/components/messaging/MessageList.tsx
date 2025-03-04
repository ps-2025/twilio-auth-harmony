
import React, { useEffect } from 'react';
import { useTwilio } from '@/contexts/TwilioContext';
import MessageItem from './MessageItem';
import { useAuth } from '@/contexts/AuthContext';

const MessageList = () => {
  const { messages, getMessages, loading } = useTwilio();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      getMessages();
    }
  }, [user, getMessages]);

  const isOutgoing = (phoneNumber: string) => {
    // In a real app, this would check if the message is from the user's phone
    // For demo purposes, we'll assume +15551234567 is the user's number
    return phoneNumber === '+15551234567';
  };

  if (loading && messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-muted mb-4"></div>
          <div className="h-4 w-32 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="mb-4 text-muted-foreground"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <h3 className="text-lg font-medium mb-2">No messages yet</h3>
        <p className="text-muted-foreground text-sm">
          Start a conversation by sending a message.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2 p-4 overflow-y-auto max-h-[60vh]">
      {messages.map((message) => (
        <MessageItem 
          key={message.id} 
          message={message} 
          isOutgoing={isOutgoing(message.from)} 
        />
      ))}
    </div>
  );
};

export default MessageList;
