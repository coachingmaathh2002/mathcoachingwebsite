import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const bannerImages = [
  '/mock-test-hero01.png',
  '/mock-test-hero02.png',
  '/mock-test-hero03.png',
  '/mock-test-hero04.png',
  '/mock-test-hero05.png',
  '/mock-test-hero06.png',
];

export const MarketingBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full pt-[80px] md:pt-[90px] pb-4 z-40 relative">
      <div 
        className="relative w-full max-w-full overflow-hidden shadow-md mx-auto touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerImages.map((src, index) => (
            <div 
              key={index}
              onClick={() => navigate('/assignments')}
              className="w-full flex-shrink-0 relative overflow-hidden flex items-center justify-center cursor-pointer bg-[#02051e] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
            >
              <img 
                src={src} 
                alt={`Banner ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
            </div>
          ))}
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors z-20"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="w-full py-4 flex justify-center gap-3">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-brand-pink w-6' : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

