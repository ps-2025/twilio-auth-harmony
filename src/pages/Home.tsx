
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import LoginButton from '@/components/auth/LoginButton';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-6">
                  Seamless communication with Twilio Harmony
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  A beautiful, intuitive platform that integrates Twilio messaging with Google Authentication for a seamless communication experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {user ? (
                    <Button 
                      asChild 
                      size="lg" 
                      className="transition-all duration-300 ease-out hover:shadow-md"
                    >
                      <Link to="/messages">Go to Messages</Link>
                    </Button>
                  ) : (
                    <LoginButton />
                  )}
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="transition-all duration-300 ease-out hover:shadow-sm"
                  >
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in animation-delay-300 order-first lg:order-last">
                <div className="aspect-video rounded-lg overflow-hidden border border-border bg-card shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                    <div className="w-full max-w-sm glass rounded-lg p-6 shadow-xl transform -rotate-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
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
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Twilio Messaging</h3>
                          <p className="text-sm text-muted-foreground">Real-time communication</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-end">
                          <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
                            <p className="text-sm">Hey there! How's it going?</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                            <p className="text-sm">I'm doing great! Just checking out this new messaging app.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Key Features</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">Discover what makes Twilio Harmony the perfect platform for your communication needs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-md animate-slide-in">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Seamless Integration</h3>
                <p className="text-muted-foreground">Perfectly integrated Twilio messaging services with Google Authentication for a cohesive experience.</p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-md animate-slide-in" style={{ animationDelay: "100ms" }}>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Secure Authentication</h3>
                <p className="text-muted-foreground">Google Authentication provides a secure, reliable way to access your messaging services.</p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-md animate-slide-in" style={{ animationDelay: "200ms" }}>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Cross-Platform</h3>
                <p className="text-muted-foreground">Access your messages from any device, with a responsive design that works on desktop, tablet, and mobile.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
