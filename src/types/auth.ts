
export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt?: Date;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: Error | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}
