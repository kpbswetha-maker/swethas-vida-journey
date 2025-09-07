import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { JourneySlideshow } from '@/components/JourneySlideshow';
import { InfoModal } from '@/components/InfoModal';
import { AdvertisementStrip } from '@/components/AdvertisementStrip';

const Index = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onInfoClick={() => setIsInfoModalOpen(true)} />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Swetha's Journey at VidaXL
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Welcome to an inspiring story of professional growth, learning, and achievement. 
              This journey showcases the incredible milestones, challenges overcome, and 
              successes celebrated throughout Swetha's career at VidaXL. From initial 
              onboarding to becoming a valued team member, discover the experiences that 
              shaped both personal and professional development in a dynamic, innovative 
              environment.
            </p>
            <p className="text-md text-muted-foreground">
              Each image below represents a significant moment in this ongoing journey 
              of excellence and continuous improvement.
            </p>
          </div>
        </div>

        {/* Journey Slideshow */}
        <div className="mb-16">
          <JourneySlideshow />
        </div>
      </main>

      {/* Advertisement Strip */}
      <AdvertisementStrip />

      {/* Info Modal */}
      <InfoModal 
        isOpen={isInfoModalOpen} 
        onClose={() => setIsInfoModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
