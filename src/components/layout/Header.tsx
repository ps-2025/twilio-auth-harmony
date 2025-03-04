
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import UserProfile from '@/components/auth/UserProfile';
import LoginButton from '@/components/auth/LoginButton';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium transition-opacity duration-300 hover:opacity-80">
          Twilio Harmony
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm transition-colors duration-300 hover:text-primary/80">
            Home
          </Link>
          <Link to="/messages" className="text-sm transition-colors duration-300 hover:text-primary/80">
            Messages
          </Link>
          <Link to="/about" className="text-sm transition-colors duration-300 hover:text-primary/80">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          {user ? (
            <UserProfile />
          ) : (
            <LoginButton />
          )}
          
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden"
            aria-label="Menu"
          >
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
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
