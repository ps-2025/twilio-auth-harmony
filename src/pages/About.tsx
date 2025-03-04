
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-medium mb-4">About Twilio Harmony</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A beautiful full-stack application that integrates Twilio messaging with Google Authentication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-medium mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              Twilio Harmony was created with a simple mission: to provide a seamless communication experience that combines elegant design with powerful functionality.
            </p>
            <p className="text-muted-foreground mb-6">
              We believe that technology should be both beautiful and useful, focusing on the essential while eliminating the unnecessary.
            </p>
            <Button 
              asChild 
              className="transition-all duration-300 ease-out hover:shadow-md"
            >
              <Link to="/messages">Try It Now</Link>
            </Button>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-border bg-card shadow-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="aspect-square w-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-8">
              <div className="relative w-full max-w-xs">
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-full"></div>
                <div className="relative glass rounded-xl p-6 shadow-xl">
                  <h3 className="text-xl font-medium mb-3">Technology Stack</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      <span>React.js for frontend</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      <span>Express.js for backend</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      <span>MongoDB for database</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      <span>Twilio for messaging</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      <span>Google OAuth for authentication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary/30 rounded-lg p-8 mb-16 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h2 className="text-2xl font-medium mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-medium">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Sign In</h3>
              <p className="text-sm text-muted-foreground">
                Securely authenticate with your Google account for a personalized experience.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-medium">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Connect</h3>
              <p className="text-sm text-muted-foreground">
                Access your Twilio-powered messaging system with end-to-end security.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-medium">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Communicate</h3>
              <p className="text-sm text-muted-foreground">
                Send and receive messages through a beautiful, intuitive interface.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h2 className="text-2xl font-medium mb-6">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="transition-all duration-300 ease-out hover:shadow-md"
            >
              <Link to="/messages">Go to Messages</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="transition-all duration-300 ease-out hover:shadow-sm"
            >
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
