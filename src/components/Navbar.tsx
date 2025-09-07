import React from 'react';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import vidaxlLogo from '@/assets/vidaxl-logo.png';

interface NavbarProps {
  onInfoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onInfoClick }) => {
  return (
    <nav className="w-full bg-vidaxl-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={vidaxlLogo} 
            alt="VidaXL Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="secondary"
            size="sm"
            onClick={onInfoClick}
            className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <Info className="h-4 w-4 mr-2" />
            Information
          </Button>
        </div>
      </div>
    </nav>
  );
};