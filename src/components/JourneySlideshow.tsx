import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import photo1 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.18.52 PM.jpeg';
import photo2 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.33.34 PM.jpeg';
import photo3 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.33.48 PM.jpeg';
import photo4 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.35.01 PM.jpeg';
import photo5 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.35.56 PM.jpeg';
import photo6 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.36.20 PM.jpeg';
import photo7 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.36.40 PM.jpeg';
import photo8 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.37.54 PM.jpeg';
import photo9 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.38.28 PM.jpeg';
import photo10 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.39.03 PM.jpeg';
import photo11 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.39.04 PM.jpeg';
import photo12 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.39.22 PM.jpeg';
import photo13 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.39.45 PM.jpeg';
import photo14 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.40.59 PM.jpeg';
import photo15 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.41.42 PM.jpeg';
import photo16 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.42.11 PM.jpeg';
import photo17 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.45.23 PM.jpeg';
import photo18 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.46.12 PM.jpeg';
import photo19 from '@/assets/Photos/WhatsApp Image 2025-09-07 at 12.51.11 PM.jpeg';

const journeyImages = [
  photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
  photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19
];

export const JourneySlideshow: React.FC = () => {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Shuffle images on component mount
  useEffect(() => {
    // Always show photo1 first, shuffle the rest
    const [first, ...rest] = journeyImages;
    const shuffledRest = rest.sort(() => Math.random() - 0.5);
    setShuffledImages([first, ...shuffledRest]);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="embla overflow-hidden rounded-xl shadow-2xl" ref={emblaRef}>
        <div className="embla__container flex">
          {shuffledImages.map((image, index) => (
            <div key={index} className="embla__slide flex-none w-full">
              <img
                src={image}
                alt={`Journey milestone ${index + 1}`}
                className="w-full h-64 md:h-[28rem] lg:h-[36rem] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/50 hover:bg-white/90 transition-all duration-300"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/50 hover:bg-white/90 transition-all duration-300"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};