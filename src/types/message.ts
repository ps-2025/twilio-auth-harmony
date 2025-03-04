
export interface Message {
  id: string;
  body: string;
  from: string;
  to: string;
  createdAt: Date;
  status: 'sending' | 'sent' | 'delivered' | 'failed';
}

export interface TwilioContextType {
  messages: Message[];
  loading: boolean;
  error: Error | null;
  sendMessage: (to: string, body: string) => Promise<void>;
  getMessages: () => Promise<void>;
}
