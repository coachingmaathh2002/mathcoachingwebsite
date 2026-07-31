import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Settings2, Upload, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import webpHero01 from '../assets/hero/mock-test-hero01.webp';
import webpHero02 from '../assets/hero/mock-test-hero02.webp';
import webpHero03 from '../assets/hero/mock-test-hero03.webp';
import webpHero04 from '../assets/hero/mock-test-hero04.webp';
import webpHero05 from '../assets/hero/mock-test-hero05.webp';
import webpHero06 from '../assets/hero/mock-test-hero06.webp';

import { BannerItem, loadBannersFromStorage, saveBannersToStorage, clearCustomBannersStorage } from '../utils/bannerStorage';
import { BannerManagerModal } from './BannerManagerModal';

const DEFAULT_BANNERS: BannerItem[] = [
  { id: 'def-1', src: webpHero01, title: 'Master Mathematics for WBJEE & JEE Advanced', link: '/assignments', format: 'WEBP' },
  { id: 'def-2', src: webpHero02, title: 'Comprehensive WBJEE Maths Practice', link: '/tests', format: 'WEBP' },
  { id: 'def-3', src: webpHero03, title: 'Interactive Graphing & Coordinate Geometry', link: '/study-materials', format: 'WEBP' },
  { id: 'def-4', src: webpHero04, title: 'Calculus & Algebra Deep Dive Series', link: '/assignments', format: 'WEBP' },
  { id: 'def-5', src: webpHero05, title: 'Vector Algebra & Matrix Problem Solving', link: '/tests', format: 'WEBP' },
  { id: 'def-6', src: webpHero06, title: 'Structured WBJEE Mock Tests & Rank Accelerators', link: '/study-materials', format: 'WEBP' },
];

export const HeroCarousel: React.FC = () => {
  const [banners, setBanners] = useState<BannerItem[]>(() => {
    const saved = loadBannersFromStorage();
    return saved && saved.length > 0 ? saved : DEFAULT_BANNERS;
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-slide effect
  useEffect(() => {
    if (banners.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  // Adjust currentSlide index if banners array changes
  useEffect(() => {
    if (currentSlide >= banners.length) {
      setCurrentSlide(0);
    }
  }, [banners, currentSlide]);

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
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleUpdateBanners = (updatedBanners: BannerItem[]) => {
    setBanners(updatedBanners);
    saveBannersToStorage(updatedBanners);
  };

  const handleResetToDefault = () => {
    clearCustomBannersStorage();
    setBanners(DEFAULT_BANNERS);
    setCurrentSlide(0);
    toast.success('Reset to default hero banners');
  };

  return (
    <div className="w-full pt-[128px] md:pt-[138px] pb-4 z-40 relative group">
      {/* Banner Controls Bar */}
      <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-brand-pink text-xs font-semibold">
            <Sparkles size={13} />
            {banners.filter(b => b.isCustom).length > 0 ? 'Custom Banners Active' : 'Featured Banners'}
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Slide {currentSlide + 1} of {banners.length}
          </span>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-dark-800/90 hover:bg-dark-700 text-slate-200 hover:text-white border border-dark-600 rounded-xl text-xs font-medium backdrop-blur-md transition-all shadow-md hover:border-brand-pink/50 hover:shadow-brand-pink/10"
          title="Upload or manage WebP banners"
        >
          <Upload size={14} className="text-brand-pink" />
          <span>Upload Custom WebP</span>
          <Settings2 size={13} className="text-slate-400 ml-0.5" />
        </button>
      </div>

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
          {banners.map((banner, index) => (
            <div 
              key={banner.id || index}
              onClick={() => navigate(banner.link || '/assignments')}
              className="w-full flex-shrink-0 relative overflow-hidden flex items-center justify-center cursor-pointer bg-[#02051e] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
            >
              <img 
                src={banner.src} 
                alt={banner.title || `Slide ${index + 1}`} 
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.02]" 
                referrerPolicy="no-referrer"
              />

              {/* Format Badge overlay if WebP or Custom */}
              {banner.format && (
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 z-10 opacity-80 group-hover/carousel:opacity-100 transition-opacity">
                  <ImageIcon size={10} className="text-brand-pink" />
                  {banner.format}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {banners.length > 1 && (
          <>
            <button 
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all z-20 hover:scale-110 shadow-lg border border-white/10"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
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
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-brand-pink w-7 shadow-lg shadow-brand-pink/40' : 'bg-slate-600/60 hover:bg-slate-400 w-2.5'
            }`}
          />
        ))}
      </div>

      {/* Banner Manager Modal */}
      <BannerManagerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        banners={banners}
        onUpdateBanners={handleUpdateBanners}
        onResetToDefault={handleResetToDefault}
      />
    </div>
  );
};
