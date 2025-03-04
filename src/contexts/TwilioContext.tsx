
import React, { createContext, useContext, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Message, TwilioContextType } from '@/types/message';
import { useAuth } from './AuthContext';

// Create context with default values
const TwilioContext = createContext<TwilioContextType>({
  messages: [],
  loading: false,
  error: null,
  sendMessage: async () => {},
  getMessages: async () => {},
});

// Custom hook to use the Twilio context
export const useTwilio = () => useContext(TwilioContext);

export const TwilioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();
  const { user } = useAuth();

  // Get messages
  const getMessages = async () => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "Please sign in to view messages",
      });
      return;
    }

    try {
      setLoading(true);
      // In a real implementation, this would call our backend API
      // For now, we'll simulate fetching messages
      const response = await fetch('/api/messages', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }

      // Simulate messages returned from the backend
      const mockMessages: Message[] = [
        {
          id: '1',
          body: 'Hello there!',
          from: '+15551234567',
          to: '+15559876543',
          createdAt: new Date(Date.now() - 3600000),
          status: 'delivered',
        },
        {
          id: '2',
          body: 'How are you doing today?',
          from: '+15559876543',
          to: '+15551234567',
          createdAt: new Date(Date.now() - 1800000),
          status: 'delivered',
        },
      ];

      setMessages(mockMessages);
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError(err instanceof Error ? err : new Error('Failed to fetch messages'));
      toast({
        variant: "destructive",
        title: "Failed to fetch messages",
        description: err instanceof Error ? err.message : "An error occurred while fetching messages",
      });
    } finally {
      setLoading(false);
    }
  };

  // Send a message
  const sendMessage = async (to: string, body: string) => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "Please sign in to send messages",
      });
      return;
    }

    try {
      setLoading(true);
      // In a real implementation, this would call our backend API
      // For now, we'll simulate sending a message
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ to, body }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Simulate a new message
      const newMessage: Message = {
        id: Date.now().toString(),
        body,
        from: '+15551234567', // This would be the user's phone number or a Twilio number
        to,
        createdAt: new Date(),
        status: 'sent',
      };

      setMessages((prev) => [...prev, newMessage]);
      
      toast({
        title: "Message sent",
        description: "Your message has been sent successfully",
      });
    } catch (err) {
      console.error('Error sending message:', err);
      setError(err instanceof Error ? err : new Error('Failed to send message'));
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: err instanceof Error ? err.message : "An error occurred while sending your message",
      });
    } finally {
      setLoading(false);
    }
  };

  const value = {
    messages,
    loading,
    error,
    sendMessage,
    getMessages,
  };

  return <TwilioContext.Provider value={value}>{children}</TwilioContext.Provider>;
};
