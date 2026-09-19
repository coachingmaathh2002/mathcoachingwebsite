import React from 'react';
import { ArrowRight, Sparkles, Award, GraduationCap, Trophy, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-hero-gradient min-h-[92vh] relative overflow-hidden flex flex-col justify-center pt-10 pb-16">
      {/* Background Ambience & Golden Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-brand-gold/8 rounded-full blur-[140px] pointer-events-none mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none mix-blend-screen"></div>
      
      {/* Precision Geometric Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_45%,black,transparent)] pointer-events-none"></div>

      {/* Floating Mathematical Constants in Watermark Style */}
      <div className="absolute top-24 left-8 text-brand-gold/[0.07] font-serif-royal text-8xl select-none pointer-events-none animate-float-1">
        ∫
      </div>
      <div className="absolute bottom-20 right-10 text-brand-gold/[0.06] font-serif-royal text-9xl select-none pointer-events-none animate-float-2">
        ∑
      </div>
      <div className="absolute top-1/3 right-16 text-brand-gold/[0.05] font-serif-royal text-7xl select-none pointer-events-none">
        ∇
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Prestige Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full academic-badge mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            <span className="text-xs font-serif-royal tracking-[0.18em] uppercase text-brand-goldLight font-bold">
              ESTD 2009 • ADMISSIONS OPEN 2026-27
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif-royal font-bold text-white leading-[1.12] mb-6 tracking-tight">
            Master Higher Math with <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-accent-gradient drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              Absolute Mastery
            </span>
          </h1>

          {/* Bengali Subheadline */}
          <p className="text-lg sm:text-2xl text-slate-200 font-bengali mb-5 font-normal tracking-wide flex items-center justify-center gap-2">
            গণিতে শ্রেষ্ঠত্ব অর্জন করুন — <span className="text-brand-gold font-semibold">আত্মবিশ্বাসের সাথে</span>
          </p>

          {/* Descriptive Body */}
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed mb-8 max-w-2xl font-light mx-auto">
            West Bengal's premier institute for WB Board (Class 10 & 12), WBJEE Entrance, CBSE, and B.Sc Mathematics Honours. Founded on pedagogical rigor and problem-solving intuition.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {/* Primary Golden Button */}
            <a 
              href="#courses" 
              onClick={(e) => scrollToSection(e, 'courses')}
              className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold text-dark-950 font-black text-sm tracking-wider uppercase rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] cursor-pointer"
            >
              <span>Explore Elite Courses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Glass Action */}
            <button 
              onClick={() => { navigate('/tests'); window.scrollTo(0, 0); }}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl glass-luxury text-slate-100 font-bold text-sm tracking-wider uppercase hover:border-brand-gold/60 transition-all hover:bg-dark-800/80 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] cursor-pointer group"
            >
              <Sparkles size={16} className="text-brand-gold group-hover:rotate-12 transition-transform" />
              <span>Take WBJEE Mock Test</span>
              <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-brand-gold/20 text-brand-gold font-black border border-brand-gold/30">
                FREE
              </span>
            </button>
          </div>

          {/* Quick Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-brand-gold" />
              <span>Small Batches (15-20 Max)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-brand-gold" />
              <span>100% Chapter-wise Notes</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-brand-gold" />
              <span>Live & Center Sessions</span>
            </span>
          </div>
        </div>

        {/* Prestige Stats Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-8 border-t border-brand-gold/20">
          <div className="glass-luxury rounded-2xl p-4 sm:p-5 text-center group hover:border-brand-gold/50 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Award size={18} />
            </div>
            <div className="text-2xl sm:text-3xl font-serif-royal font-bold text-white mb-0.5 group-hover:text-brand-gold transition-colors">
              15+ Years
            </div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Educational Legacy
            </p>
          </div>

          <div className="glass-luxury rounded-2xl p-4 sm:p-5 text-center group hover:border-brand-gold/50 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <GraduationCap size={18} />
            </div>
            <div className="text-2xl sm:text-3xl font-serif-royal font-bold text-white mb-0.5 group-hover:text-brand-gold transition-colors">
              10,000+
            </div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Students Mentored
            </p>
          </div>

          <div className="glass-luxury rounded-2xl p-4 sm:p-5 text-center group hover:border-brand-gold/50 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Trophy size={18} />
            </div>
            <div className="text-2xl sm:text-3xl font-serif-royal font-bold text-white mb-0.5 group-hover:text-brand-gold transition-colors">
              98.4%
            </div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Highest Board Score
            </p>
          </div>

          <div className="glass-luxury rounded-2xl p-4 sm:p-5 text-center group hover:border-brand-gold/50 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Sparkles size={18} />
            </div>
            <div className="text-2xl sm:text-3xl font-serif-royal font-bold text-white mb-0.5 group-hover:text-brand-gold transition-colors">
              Top 100
            </div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              WBJEE State Ranks
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};