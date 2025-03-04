
import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useTwilio } from '@/contexts/TwilioContext';
import MessageList from '@/components/messaging/MessageList';
import MessageForm from '@/components/messaging/MessageForm';
import LoginButton from '@/components/auth/LoginButton';

const Messages = () => {
  const { user } = useAuth();
  const { getMessages } = useTwilio();
  
  useEffect(() => {
    if (user) {
      getMessages();
    }
  }, [user, getMessages]);

  if (!user) {
    return (
      <div className="min-h-screen pt-32 px-4">
        <div className="container mx-auto flex flex-col items-center text-center max-w-md">
          <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-medium mb-3">Authentication Required</h1>
          <p className="text-gray-500 mb-6">
            Please sign in with your Google account to access your messages.
          </p>
          <LoginButton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-medium mb-8">Messages</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 animate-fade-in">
            <div className="mb-4">
              <h2 className="text-xl font-medium">Your Conversations</h2>
              <p className="text-gray-500 text-sm">View and manage your message history</p>
            </div>
            <div>
              <MessageList />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="mb-4">
              <h2 className="text-xl font-medium">Send a Message</h2>
              <p className="text-gray-500 text-sm">Compose and send a new message</p>
            </div>
            <div>
              <MessageForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
