import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import banner1Webp from '../assets/hero/mock-test-hero01.webp';
import banner2Webp from '../assets/hero/mock-test-hero02.webp';
import banner3Webp from '../assets/hero/mock-test-hero03.webp';
import banner4Webp from '../assets/hero/mock-test-hero04.webp';
import banner5Webp from '../assets/hero/mock-test-hero05.webp';
import banner6Webp from '../assets/hero/mock-test-hero06.webp';

import banner1Jpg from '../assets/hero/mock-test-hero01.jpg';
import banner2Jpg from '../assets/hero/mock-test-hero02.jpg';
import banner3Jpg from '../assets/hero/mock-test-hero03.jpg';
import banner4Jpg from '../assets/hero/mock-test-hero04.jpg';
import banner5Jpg from '../assets/hero/mock-test-hero05.jpg';
import banner6Jpg from '../assets/hero/mock-test-hero06.jpg';

interface BannerItem {
  id: string;
  webpSrc: string;
  jpgSrc: string;
  publicFallbackWebp: string;
  publicFallbackJpg: string;
  title: string;
  subtitle?: string;
  link?: string;
  tag?: string;
}

const BANNERS: BannerItem[] = [
  { 
    id: 'banner-1', 
    webpSrc: banner1Webp, 
    jpgSrc: banner1Jpg,
    publicFallbackWebp: '/mock-test-hero01.webp',
    publicFallbackJpg: '/mock-test-hero01.jpg',
    title: 'Master Mathematics for WBJEE & JEE Advanced', 
    subtitle: 'Comprehensive Chapter-wise Problem Solving & Shortcuts',
    link: '/assignments', 
    tag: 'WBJEE SPECIAL' 
  },
  { 
    id: 'banner-2', 
    webpSrc: banner2Webp, 
    jpgSrc: banner2Jpg,
    publicFallbackWebp: '/mock-test-hero02.webp',
    publicFallbackJpg: '/mock-test-hero02.jpg',
    title: 'Comprehensive WBJEE Maths Practice & Mock Tests', 
    subtitle: 'Live Timed Tests with Instant Rank Analysis',
    link: '/tests', 
    tag: 'MOCK TESTS' 
  },
  { 
    id: 'banner-3', 
    webpSrc: banner3Webp, 
    jpgSrc: banner3Jpg,
    publicFallbackWebp: '/mock-test-hero03.webp',
    publicFallbackJpg: '/mock-test-hero03.jpg',
    title: 'Interactive Graphing & Coordinate Geometry', 
    subtitle: 'Conics, Circles, Straight Lines & 3D Geometry',
    link: '/study-materials', 
    tag: 'STUDY MODULES' 
  },
  { 
    id: 'banner-4', 
    webpSrc: banner4Webp, 
    jpgSrc: banner4Jpg,
    publicFallbackWebp: '/mock-test-hero04.webp',
    publicFallbackJpg: '/mock-test-hero04.jpg',
    title: 'Calculus & Algebra Deep Dive Series', 
    subtitle: 'Integration, Differential Equations, Limits & Continuity',
    link: '/assignments', 
    tag: 'ADVANCED CALCULUS' 
  },
  { 
    id: 'banner-5', 
    webpSrc: banner5Webp, 
    jpgSrc: banner5Jpg,
    publicFallbackWebp: '/mock-test-hero05.webp',
    publicFallbackJpg: '/mock-test-hero05.jpg',
    title: 'Vector Algebra & Matrix Problem Solving', 
    subtitle: 'High Scoring Topics with 100% Concept Clarity',
    link: '/tests', 
    tag: 'RANK BOOSTER' 
  },
  { 
    id: 'banner-6', 
    webpSrc: banner6Webp, 
    jpgSrc: banner6Jpg,
    publicFallbackWebp: '/mock-test-hero06.webp',
    publicFallbackJpg: '/mock-test-hero06.jpg',
    title: 'Structured WBJEE Mock Tests & Rank Accelerators', 
    subtitle: 'Exclusive Question Bank Curated by Raj Sir',
    link: '/study-materials', 
    tag: 'ACADEMY SPECIAL' 
  },
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
    <div id="hero-banners-section" className="w-full pt-[124px] md:pt-[134px] pb-4 z-30 relative group bg-gradient-to-b from-[#010414] via-[#020726] to-[#010414]">
      {/* Main Carousel Frame */}
      <div 
        className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6"
      >
        <div 
          className="relative w-full overflow-hidden rounded-2xl border border-brand-gold/30 shadow-[0_10px_35px_rgba(0,0,0,0.7)] bg-[#02051e] touch-pan-y group/carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {BANNERS.map((banner, index) => (
              <div 
                key={banner.id || index}
                onClick={() => navigate(banner.link || '/assignments')}
                className="w-full flex-shrink-0 relative overflow-hidden flex items-center justify-center cursor-pointer bg-[#02051e] aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] max-h-[480px]"
              >
                <picture className="w-full h-full block">
                  <source srcSet={banner.webpSrc} type="image/webp" />
                  <source srcSet={banner.jpgSrc} type="image/jpeg" />
                  <img 
                    src={banner.webpSrc} 
                    alt={banner.title || `Slide ${index + 1}`} 
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== banner.jpgSrc && target.src !== banner.publicFallbackJpg) {
                        target.src = banner.jpgSrc || banner.publicFallbackJpg;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/carousel:scale-[1.02]" 
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </picture>

                {/* Subtle gradient vignette overlay for improved text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Tag Badge */}
                {banner.tag && (
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-brand-gold/40 text-brand-gold text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 z-10 shadow-lg">
                    <Sparkles size={12} className="text-brand-gold animate-pulse" />
                    <span>{banner.tag}</span>
                  </div>
                )}

                {/* Bottom title bar */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2 pointer-events-none">
                  <div className="max-w-2xl">
                    <h2 className="text-base sm:text-xl md:text-2xl font-bold tracking-tight text-white drop-shadow-md line-clamp-1">
                      {banner.title}
                    </h2>
                    {banner.subtitle && (
                      <p className="text-xs sm:text-sm text-slate-300 drop-shadow line-clamp-1 hidden sm:block mt-1">
                        {banner.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-brand-gold bg-brand-gold/15 backdrop-blur-md border border-brand-gold/30 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    <span>Explore Now</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {BANNERS.length > 1 && (
            <>
              <button 
                id="btn-carousel-prev"
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                aria-label="Previous Slide"
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-black/60 hover:bg-black/90 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all z-20 hover:scale-110 shadow-xl border border-white/20 active:scale-95"
              >
                <ChevronLeft size={22} />
              </button>
              <button 
                id="btn-carousel-next"
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                aria-label="Next Slide"
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-black/60 hover:bg-black/90 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all z-20 hover:scale-110 shadow-xl border border-white/20 active:scale-95"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Indicators Dots */}
        <div className="w-full pt-3 pb-1 flex justify-center items-center gap-2">
          {BANNERS.map((_, index) => (
            <button
              id={`carousel-dot-${index + 1}`}
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-brand-gold w-8 shadow-md shadow-brand-gold/50' : 'bg-slate-700 hover:bg-slate-500 w-2.5'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



