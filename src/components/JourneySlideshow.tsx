import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import journey1 from '@/assets/journey1.jpg';
import journey2 from '@/assets/journey2.jpg';
import journey3 from '@/assets/journey3.jpg';

const journeyImages = [journey1, journey2, journey3];

export const JourneySlideshow: React.FC = () => {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Shuffle images on component mount
  useEffect(() => {
    const shuffled = [...journeyImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
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
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
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