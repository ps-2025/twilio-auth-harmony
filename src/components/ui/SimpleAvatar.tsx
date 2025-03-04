
import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SimpleAvatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  fallback,
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`relative inline-block overflow-hidden rounded-full bg-gray-200 ${sizeStyles[size]} ${className}`}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      ) : (
        fallback && (
          <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-600 font-medium">
            {fallback}
          </div>
        )
      )}
    </div>
  );
};

export default SimpleAvatar;
