
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import SimpleButton from '@/components/ui/SimpleButton';
import SimpleAvatar from '@/components/ui/SimpleAvatar';

interface UserProfileProps {
  className?: string;
}

const UserProfile = ({ className = '' }: UserProfileProps) => {
  const { user, signOut, loading } = useAuth();

  if (!user) return null;

  const initials = user.displayName
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SimpleAvatar 
        src={user.photoURL} 
        alt={user.displayName} 
        fallback={initials} 
        className="border border-gray-200 transition-all duration-300 ease-out hover:shadow-sm"
      />
      <div className="flex flex-col">
        <p className="text-sm font-medium">{user.displayName}</p>
        <p className="text-xs text-gray-500">{user.email}</p>
      </div>
      <SimpleButton 
        variant="ghost" 
        size="sm" 
        onClick={signOut} 
        disabled={loading}
        className="ml-2"
      >
        {loading ? 'Signing out...' : 'Sign out'}
      </SimpleButton>
    </div>
  );
};

export default UserProfile;
