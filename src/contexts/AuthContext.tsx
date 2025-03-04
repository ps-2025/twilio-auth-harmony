
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { AuthContextType, User } from '@/types/auth';

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();

  // Initialize auth on component mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if user is already authenticated in localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error('Authentication error:', err);
        setError(err instanceof Error ? err : new Error('Authentication failed'));
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      // In a real implementation, this would call our backend API
      // For now, we'll simulate a successful login
      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to sign in with Google');
      }

      // Simulate a user object returned from the backend
      const mockUser: User = {
        id: 'google-user-123',
        email: 'user@example.com',
        displayName: 'Demo User',
        photoURL: 'https://via.placeholder.com/150',
        createdAt: new Date(),
      };

      // Save user to state and localStorage
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      toast({
        title: "Signed in successfully",
        description: `Welcome, ${mockUser.displayName}!`,
      });
    } catch (err) {
      console.error('Google sign-in error:', err);
      setError(err instanceof Error ? err : new Error('Google sign-in failed'));
      toast({
        variant: "destructive",
        title: "Authentication failed",
        description: err instanceof Error ? err.message : "Failed to sign in with Google",
      });
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      setLoading(true);
      // In a real implementation, this would call our backend API
      // For now, we'll just clear the local state
      
      // Clear user from state and localStorage
      setUser(null);
      localStorage.removeItem('user');
      
      toast({
        title: "Signed out successfully",
      });
    } catch (err) {
      console.error('Sign out error:', err);
      setError(err instanceof Error ? err : new Error('Sign out failed'));
      toast({
        variant: "destructive",
        title: "Sign out failed",
        description: err instanceof Error ? err.message : "Failed to sign out",
      });
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    error,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
