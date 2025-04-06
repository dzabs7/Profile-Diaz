
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/50 border-b border-white/10">
      <div className="container mx-auto px-5 py-5">
        <nav className="flex items-center justify-center relative">
         <div className="hidden md:flex gap-8 justify-center">
         <a href="#home" className="text-sm text-gray-300 hover:text-white transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-white transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#certificates" className="text-sm text-gray-300 hover:text-white transition-colors relative group">
              Achievement
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <div className="md:hidden flex items-center justify-between w-full">
          <a href="#home" className="flex items-center">
              <img 
                src="/logo/logo-2.png" 
                alt="Logo" 
                className="h-7 w-auto"
              />
            </a>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden absolute right-0 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          </div>
        </nav>
        
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-white/10 mt-4 flex flex-col space-y-3">
                       <a href="#home" className="text-sm text-gray-300 hover:text-white transition-colors py-2 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors py-2 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-white transition-colors py-2 relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#certificates" className="text-sm text-gray-300 hover:text-white transition-colors py-2 relative group">
              Achievement
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
