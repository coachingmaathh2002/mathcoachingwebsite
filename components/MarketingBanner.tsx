import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const banners = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  customNode: (navigate: ReturnType<typeof useNavigate>) => (
    <div 
      className="relative w-full h-full flex items-center justify-center bg-[#02051e] cursor-pointer overflow-hidden group"
      onClick={() => navigate('/assignments')}
    >
      <img 
        src={`/mock-test-banner0${i + 1}.png`} 
        alt={`Mock Test Banner 0${i + 1}`} 
        className="w-full h-full object-contain md:object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
      />
    </div>
  ),
  bgColor: "bg-[#02051e]",
}));

export const MarketingBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full bg-transparent pt-[90px] md:pt-[100px] pb-4">
      {/* Full width container, no side margins on desktop */}
      <div 
        className="relative w-full overflow-hidden shadow-md touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner) => (
            <div 
              key={banner.id}
              className={`w-full flex-shrink-0 ${banner.bgColor} relative overflow-hidden flex items-center justify-center min-h-[160px] md:min-h-[220px]`}
            >
              {banner.customNode(navigate)}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-20"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Container (Below the banner like in the image) */}
      <div className="w-full py-4 flex justify-center gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              currentSlide === index ? 'bg-brand-pink' : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
