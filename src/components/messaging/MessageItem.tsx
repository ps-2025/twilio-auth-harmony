
import React from 'react';
import { Message } from '@/types/message';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

interface MessageItemProps {
  message: Message;
  isOutgoing?: boolean;
}

const MessageItem = ({ message, isOutgoing = false }: MessageItemProps) => {
  const formattedTime = formatDistanceToNow(new Date(message.createdAt), { addSuffix: true });
  
  return (
    <div className={cn(
      "flex w-full mb-4",
      isOutgoing ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm",
        isOutgoing 
          ? "bg-primary text-primary-foreground rounded-tr-none" 
          : "bg-secondary text-secondary-foreground rounded-tl-none"
      )}>
        <p className="text-sm">{message.body}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs opacity-70">{formattedTime}</span>
          
          {isOutgoing && (
            <span className="text-xs opacity-70 ml-2">
              {message.status === 'delivered' && (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="inline-block"
                >
                  <path d="M18 6L7 17l-5-5" />
                </svg>
              )}
              {message.status === 'sending' && 'Sending...'}
              {message.status === 'failed' && 'Failed'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
