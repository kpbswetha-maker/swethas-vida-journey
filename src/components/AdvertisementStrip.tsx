import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export const AdvertisementStrip: React.FC = () => {
  return (
    <div className="w-full bg-gradient-hero py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Discover Amazing Products at VidaXL
            </h3>
            <p className="text-white/90">
              Quality furniture and home essentials at unbeatable prices
            </p>
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-vidaxl-primary hover:bg-white/90 transition-all duration-300 whitespace-nowrap"
          >
            Shop Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};