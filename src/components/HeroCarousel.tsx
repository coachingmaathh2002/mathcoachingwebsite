import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BannerItem {
  id: string;
  src: string;
  title: string;
  link?: string;
  format?: string;
}

const BANNERS: BannerItem[] = [
  { id: 'def-1', src: '/mock-test-hero01.webp?v=orig', title: 'Master Mathematics for WBJEE & JEE Advanced', link: '/assignments', format: 'WEBP' },
  { id: 'def-2', src: '/mock-test-hero02.webp?v=orig', title: 'Comprehensive WBJEE Maths Practice', link: '/tests', format: 'WEBP' },
  { id: 'def-3', src: '/mock-test-hero03.webp?v=orig', title: 'Interactive Graphing & Coordinate Geometry', link: '/study-materials', format: 'WEBP' },
  { id: 'def-4', src: '/mock-test-hero04.webp?v=orig', title: 'Calculus & Algebra Deep Dive Series', link: '/assignments', format: 'WEBP' },
  { id: 'def-5', src: '/mock-test-hero05.webp?v=orig', title: 'Vector Algebra & Matrix Problem Solving', link: '/tests', format: 'WEBP' },
  { id: 'def-6', src: '/mock-test-hero06.webp?v=orig', title: 'Structured WBJEE Mock Tests & Rank Accelerators', link: '/study-materials', format: 'WEBP' },
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-slide effect
  useEffect(() => {
    if (BANNERS.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

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
    <div className="w-full pt-[128px] md:pt-[138px] pb-4 z-40 relative group">
      {/* Main Carousel Frame */}
      <div 
        className="relative w-full max-w-full overflow-hidden shadow-2xl mx-auto touch-pan-y group/carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {BANNERS.map((banner, index) => (
            <div 
              key={banner.id || index}
              onClick={() => navigate(banner.link || '/assignments')}
              className="w-full flex-shrink-0 relative overflow-hidden flex items-center justify-center cursor-pointer bg-[#02051e] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
            >
              <img 
                src={banner.src} 
                alt={banner.title || `Slide ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]" 
                referrerPolicy="no-referrer"
              />

              {/* Format Badge overlay if WebP or Custom */}
              {banner.format && (
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 z-10 opacity-80 group-hover/carousel:opacity-100 transition-opacity">
                  <ImageIcon size={10} className="text-brand-gold" />
                  {banner.format}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {BANNERS.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              aria-label="Previous Slide"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all z-20 hover:scale-110 shadow-lg border border-white/10"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              aria-label="Next Slide"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all z-20 hover:scale-110 shadow-lg border border-white/10"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Indicators Dots */}
      <div className="w-full py-3 flex justify-center items-center gap-2.5">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-brand-gold w-7 shadow-lg shadow-brand-gold/40' : 'bg-slate-600/60 hover:bg-slate-400 w-2.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

