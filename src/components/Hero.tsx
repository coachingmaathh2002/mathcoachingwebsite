import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-hero-gradient min-h-screen relative overflow-hidden flex items-center">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-silver/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
      
      {/* Floating Neon Math Symbols */}
      <div className="absolute animate-float-1 text-brand-gold/20 pointer-events-none drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]" style={{ top: '15%', left: '10%' }}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor">
          <text x="10" y="55" fontSize="50" fontFamily="serif" fontWeight="bold">π</text>
        </svg>
      </div>
      <div className="absolute animate-float-2 text-brand-silver/20 pointer-events-none drop-shadow-[0_0_10px_rgba(226,232,240,0.2)]" style={{ top: '60%', left: '85%' }}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          <text x="5" y="45" fontSize="40" fontFamily="serif" fontWeight="bold">∫</text>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 text-center md:text-left mt-16 md:mt-0">
        <div className="max-w-4xl mx-auto md:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-brand-gold/30 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-light"></span>
            </span>
            <span className="text-sm text-slate-300 font-medium tracking-wide">Admissions Open for 2026</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-white leading-[1.1] mb-8 text-glow">
            Master Math with <br />
            <span className="text-transparent bg-clip-text bg-accent-gradient">
              Confidence
            </span>
          </h1>
          
          {/* Bengali Headline */}
          <p className="text-xl md:text-3xl text-slate-300 font-bengali mb-6 font-light">
            গণিতে দক্ষতা অর্জন করুন <span className="text-brand-gold font-medium">আত্মবিশ্বাসের সাথে</span>
          </p>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl font-light mx-auto md:mx-0">
            Expert guidance for West Bengal Board, CBSE, WBJEE, and Honours. 
            Unlock your potential with our scientifically designed curriculum.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <div className="relative group inline-block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-yellow-200 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500 group-hover:duration-200"></div>
              <a 
                href="#courses" 
                onClick={(e) => scrollToSection(e, 'courses')}
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-dark-950 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-brand-gold/30"
              >
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Explore Courses</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform text-brand-gold" />
              </a>
            </div>
            <a 
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:bg-white/5 hover:border-slate-500 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <Sparkles size={18} className="text-brand-gold" />
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-slate-500 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/60">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/0 via-brand-gold/50 to-brand-gold/0"></div>
      </div>
    </section>
  );
};