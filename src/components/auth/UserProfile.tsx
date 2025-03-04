
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface UserProfileProps {
  className?: string;
}

const UserProfile = ({ className }: UserProfileProps) => {
  const { user, signOut, loading } = useAuth();

  if (!user) return null;

  const initials = user.displayName
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Avatar className="h-10 w-10 border border-border transition-all duration-300 ease-out hover:shadow-sm">
        <AvatarImage src={user.photoURL} alt={user.displayName} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="text-sm font-medium">{user.displayName}</p>
        <p className="text-xs text-muted-foreground">{user.email}</p>
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={signOut} 
        disabled={loading}
        className="ml-2"
      >
        {loading ? 'Signing out...' : 'Sign out'}
      </Button>
    </div>
  );
};

export default UserProfile;
