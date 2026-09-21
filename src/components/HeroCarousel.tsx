import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  Pause,
  ExternalLink
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Customized Hero Images: mock-test-hero01.webp to mock-test-hero06.webp
import hero1Webp from '../assets/hero/mock-test-hero01.webp';
import hero2Webp from '../assets/hero/mock-test-hero02.webp';
import hero3Webp from '../assets/hero/mock-test-hero03.webp';
import hero4Webp from '../assets/hero/mock-test-hero04.webp';
import hero5Webp from '../assets/hero/mock-test-hero05.webp';
import hero6Webp from '../assets/hero/mock-test-hero06.webp';

interface CustomBannerItem {
  id: string;
  webpSrc: string;
  fallbackWebp: string;
  fallbackJpg: string;
  tabNumber: string;
  tabLabel: string;
  title: string;
  link: string;
}

const CUSTOM_BANNERS: CustomBannerItem[] = [
  {
    id: 'mock-test-hero-01',
    webpSrc: hero1Webp,
    fallbackWebp: '/mock-test-hero01.webp',
    fallbackJpg: '/mock-test-hero01.jpg',
    tabNumber: '01',
    tabLabel: 'WBJEE 2026 Special',
    title: 'WBJEE Higher Mathematics Mastery & Problem Solving Sets',
    link: '/assignments'
  },
  {
    id: 'mock-test-hero-02',
    webpSrc: hero2Webp,
    fallbackWebp: '/mock-test-hero02.webp',
    fallbackJpg: '/mock-test-hero02.jpg',
    tabNumber: '02',
    tabLabel: 'Full Mock Test',
    title: 'Live Timed Online Mock Tests with Instant Rank Analysis',
    link: '/tests'
  },
  {
    id: 'mock-test-hero-03',
    webpSrc: hero3Webp,
    fallbackWebp: '/mock-test-hero03.webp',
    fallbackJpg: '/mock-test-hero03.jpg',
    tabNumber: '03',
    tabLabel: 'Coordinate & Conics',
    title: 'Circles, Parabola, Hyperbola & Analytical Geometry',
    link: '/study-materials'
  },
  {
    id: 'mock-test-hero-04',
    webpSrc: hero4Webp,
    fallbackWebp: '/mock-test-hero04.webp',
    fallbackJpg: '/mock-test-hero04.jpg',
    tabNumber: '04',
    tabLabel: 'Advanced Calculus',
    title: 'Differential Calculus & Integral Formulations Vault',
    link: '/assignments'
  },
  {
    id: 'mock-test-hero-05',
    webpSrc: hero5Webp,
    fallbackWebp: '/mock-test-hero05.webp',
    fallbackJpg: '/mock-test-hero05.jpg',
    tabNumber: '05',
    tabLabel: 'Vectors & Matrices',
    title: 'Vectors, Determinants & Linear Algebra Practice Sets',
    link: '/tests'
  },
  {
    id: 'mock-test-hero-06',
    webpSrc: hero6Webp,
    fallbackWebp: '/mock-test-hero06.webp',
    fallbackJpg: '/mock-test-hero06.jpg',
    tabNumber: '06',
    tabLabel: 'Rank Booster Bank',
    title: 'Exclusive Curated Mathematics Problem Bank by Raj Sir',
    link: '/study-materials'
  }
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto slide with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CUSTOM_BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % CUSTOM_BANNERS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + CUSTOM_BANNERS.length) % CUSTOM_BANNERS.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) nextSlide();
    else if (distance < -40) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, banner: CustomBannerItem) => {
    const target = e.currentTarget;
    const attempt = Number(target.dataset.attempt || '0');
    if (attempt === 0) {
      target.dataset.attempt = '1';
      target.src = banner.fallbackWebp;
    } else if (attempt === 1) {
      target.dataset.attempt = '2';
      target.src = banner.fallbackJpg;
    } else if (attempt === 2) {
      target.dataset.attempt = '3';
      target.src = `/banner-${banner.tabNumber}.jpg`;
    }
  };

  const handleBannerClick = (banner: CustomBannerItem) => {
    if (banner.link.startsWith('/#')) {
      const id = banner.link.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else {
      navigate(banner.link);
      window.scrollTo(0, 0);
    }
  };

  const activeBanner = CUSTOM_BANNERS[currentSlide];

  return (
    <section 
      id="hero-banners-section" 
      aria-label="Academy Banner Presentation"
      className="w-full pt-[96px] sm:pt-[106px] md:pt-[116px] pb-6 z-30 relative bg-gradient-to-b from-dark-950 via-[#070b13] to-dark-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Top Header Label & Controls */}
        <div className="flex items-center justify-between mb-2.5 px-1">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            <span className="text-[11px] font-serif-royal font-bold uppercase tracking-[0.2em] text-brand-goldLight">
              Raj Sir Math Academy • Featured Highlights
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-slate-400">
            <button
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
              className="p-1 rounded hover:bg-white/5 text-slate-400 hover:text-brand-gold transition-colors cursor-pointer"
              aria-label={isPaused ? "Play slide rotation" : "Pause slide rotation"}
            >
              {isPaused ? <Play size={13} className="text-brand-gold" /> : <Pause size={13} />}
            </button>
            <div className="flex items-center gap-1 font-serif-royal text-xs">
              <span className="font-bold text-brand-gold">{activeBanner.tabNumber}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">0{CUSTOM_BANNERS.length}</span>
            </div>
          </div>
        </div>

        {/* Main Banner Presentation Frame - True 2.2:1 Aspect Ratio (1860x846) Matching User Images */}
        <div 
          className="relative w-full rounded-xl sm:rounded-2xl md:rounded-3xl border border-brand-gold/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] bg-dark-950 overflow-hidden touch-pan-y group/carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Banner Slides Carousel */}
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {CUSTOM_BANNERS.map((banner, index) => (
              <div 
                key={banner.id}
                onClick={() => handleBannerClick(banner)}
                className="w-full flex-shrink-0 relative cursor-pointer bg-[#050811] aspect-[1860/846] flex items-center justify-center overflow-hidden select-none"
                title={`Click to explore ${banner.title}`}
              >
                {/* 100% Uncropped, High-Fidelity Banner Image with Picture & Multi-tier Fallback */}
                <picture className="w-full h-full flex items-center justify-center">
                  <source srcSet={banner.webpSrc} type="image/webp" />
                  <source srcSet={banner.fallbackWebp} type="image/webp" />
                  <img 
                    src={banner.fallbackJpg} 
                    alt={banner.title} 
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    onError={(e) => handleImageError(e, banner)}
                    className="w-full h-full object-contain md:object-cover block transition-transform duration-500 group-hover/carousel:scale-[1.008]" 
                  />
                </picture>

                {/* Subtle Hover Action Pill (applies on hover without covering static artwork) */}
                <div className="absolute top-3 right-3 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:flex items-center gap-1.5 bg-dark-950/90 backdrop-blur-md border border-brand-gold/50 px-3 py-1.5 rounded-full text-brand-gold text-xs font-serif-royal font-semibold shadow-lg">
                  <span>Explore Now</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows (Subtle, sleek, non-intrusive) */}
          <button 
            id="btn-carousel-prev"
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            aria-label="Previous Slide"
            className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-dark-950/75 hover:bg-dark-900 text-brand-gold hover:text-white rounded-full items-center justify-center backdrop-blur-md transition-all z-20 hover:scale-110 shadow-xl border border-brand-gold/40 active:scale-95 cursor-pointer opacity-85 hover:opacity-100"
          >
            <ChevronLeft size={22} />
          </button>
          
          <button 
            id="btn-carousel-next"
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            aria-label="Next Slide"
            className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-dark-950/75 hover:bg-dark-900 text-brand-gold hover:text-white rounded-full items-center justify-center backdrop-blur-md transition-all z-20 hover:scale-110 shadow-xl border border-brand-gold/40 active:scale-95 cursor-pointer opacity-85 hover:opacity-100"
          >
            <ChevronRight size={22} />
          </button>

          {/* Top Edge Gold Hairline */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent pointer-events-none" />

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark-900/80 z-20">
            <div 
              className="h-full bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold transition-all duration-500"
              style={{ width: `${((currentSlide + 1) / CUSTOM_BANNERS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Active Banner Caption & Direct Link */}
        <div className="mt-3 flex items-center justify-between px-1 text-slate-300">
          <p className="text-xs sm:text-sm font-medium truncate max-w-xl flex items-center gap-2">
            <span className="text-brand-gold font-bold font-serif-royal">{activeBanner.tabLabel}:</span>
            <span className="text-slate-300 truncate">{activeBanner.title}</span>
          </p>
          <button
            onClick={() => handleBannerClick(activeBanner)}
            className="text-xs font-serif-royal text-brand-gold hover:text-brand-goldLight underline decoration-brand-gold/50 flex items-center gap-1 cursor-pointer whitespace-nowrap ml-2 font-semibold"
          >
            <span>Explore Program</span>
            <ChevronRight size={13} />
          </button>
        </div>

      </div>
    </section>
  );
};
