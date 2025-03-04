
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 mt-20 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Twilio Harmony</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A beautiful integration of Twilio messaging with Google Authentication.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/messages" 
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  Messages
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            © {currentYear} Twilio Harmony. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
