import React, { useState, useRef } from 'react';
import { 
  Quote, 
  Star, 
  GraduationCap, 
  Award, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles, 
  Users,
  Trophy
} from 'lucide-react';

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  initials: string;
  category: 'Competitive' | 'Board' | 'College';
  achievement: string;
  courseName: string;
  avatar: string;
  gradient: string;
  featured?: boolean;
  icon: React.ReactNode;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Priya Das',
    role: 'WBJEE Rank 145 (2023)',
    category: 'Competitive',
    achievement: 'WBJEE Rank 145',
    courseName: 'WBJEE Full Maths Mastery',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    content: "The conceptual clarity I gained here was unmatched. The faculty doesn't just solve problems; they teach you how to think mathematically. The mock tests were harder than the actual exam, which made the real WBJEE feel easy.",
    initials: 'PD',
    gradient: 'from-brand-gold via-yellow-500 to-amber-600',
    featured: true,
    icon: <Award size={16} className="text-dark-950" />
  },
  {
    id: 2,
    name: 'Sourav Ganguly',
    role: 'Class 12 Board - 98% in Maths',
    category: 'Board',
    achievement: '98/100 HS Board Score',
    courseName: 'WB Board Class 12 (Semester 3 & 4)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    content: "I was struggling with Calculus in Class 11. Joining Raj Sir Math Academy changed everything. The step-by-step approach to derivatives and integration helped me score 98/100 in my HS boards. Forever grateful!",
    initials: 'SG',
    gradient: 'from-amber-400 via-yellow-500 to-yellow-600',
    featured: false,
    icon: <TrendingUp size={16} className="text-dark-950" />
  },
  {
    id: 3,
    name: 'Anirban Roy',
    role: 'B.Sc Maths Honours (Jadavpur Univ)',
    category: 'College',
    achievement: 'Jadavpur Univ Top Ranker',
    courseName: 'UG Maths Honours (B.Sc)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    content: "For Honours students, finding quality guidance is tough. The depth of analysis provided here for Real Analysis and Algebra is university-level. It bridged the gap between school math and pure mathematics perfectly.",
    initials: 'AR',
    gradient: 'from-brand-gold to-yellow-500',
    featured: false,
    icon: <GraduationCap size={16} className="text-dark-950" />
  },
  {
    id: 4,
    name: 'Riya Sen',
    role: 'JEE Main 99.2 Percentile',
    category: 'Competitive',
    achievement: '99.2 Percentile in JEE',
    courseName: 'WBJEE & JEE Competitive Sprint',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    content: "Raj Sir's short tricks for Coordinate Geometry and Algebra saved me so much time during the actual JEE Main. The study material is perfectly aligned with the latest NTA pattern.",
    initials: 'RS',
    gradient: 'from-yellow-300 via-brand-gold to-amber-500',
    featured: true,
    icon: <Award size={16} className="text-dark-950" />
  },
  {
    id: 5,
    name: 'Aritra Banerjee',
    role: 'Class 10 ICSE - 100/100',
    category: 'Board',
    achievement: '100/100 Perfect Score',
    courseName: 'WB Board & ICSE Class 10 Foundation',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
    content: "I used to fear math, but the foundation batch completely removed my phobia. The interactive doubt-clearing sessions and regular assignments kept me on track throughout the year.",
    initials: 'AB',
    gradient: 'from-yellow-500 to-yellow-700',
    featured: false,
    icon: <TrendingUp size={16} className="text-dark-950" />
  },
  {
    id: 6,
    name: 'Sneha Mitra',
    role: 'ISI Entrance Cleared',
    category: 'Competitive',
    achievement: 'ISI Entrance Cracked',
    courseName: 'ISI & CMI Special Subjective Prep',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    content: "If you are aiming for ISI or CMI, this is the place. The focus on subjective problem-solving and logical reasoning is exactly what you need to crack these prestigious exams.",
    initials: 'SM',
    gradient: 'from-slate-200 via-slate-400 to-brand-silver',
    featured: false,
    icon: <GraduationCap size={16} className="text-dark-950" />
  }
];

export const Testimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);
  const scrollRowRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'All', label: 'All Stories' },
    { id: 'Competitive', label: 'Competitive (WBJEE / ISI)' },
    { id: 'Board', label: 'Board Exams (Class 10 & 12)' },
    { id: 'College', label: 'University Honours' }
  ];

  const filteredTestimonials = TESTIMONIALS.filter(t => {
    if (activeCategory === 'All') return true;
    return t.category === activeCategory;
  });

  const featuredTestimonial = TESTIMONIALS[featuredIndex] || TESTIMONIALS[0];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRowRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden" id="testimonials">
      {/* Background Decorative Lines & Radial Gloom */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-900 border border-brand-gold/30 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <Sparkles size={14} className="fill-brand-gold" />
            <span>Verified Student Triumphs</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Real Stories. Real Results. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-300 to-amber-500">
              Unstoppable Mastery.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Discover how students transformed math phobia into top ranks, 100/100 board scores, and admissions into premier institutes under Raj Sir's guidance.
          </p>
        </div>

        {/* Statistics Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 p-6 sm:p-8 rounded-3xl bg-dark-900/60 border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="text-center p-2 border-r last:border-0 border-white/10">
            <div className="flex items-center justify-center gap-1.5 text-brand-gold mb-1">
              <Trophy size={20} />
              <span className="text-2xl sm:text-3xl font-display font-bold text-white">150+</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">WBJEE & JEE Rankers</p>
          </div>

          <div className="text-center p-2 border-r last:border-0 border-white/10">
            <div className="flex items-center justify-center gap-1.5 text-brand-gold mb-1">
              <Star size={20} className="fill-brand-gold" />
              <span className="text-2xl sm:text-3xl font-display font-bold text-white">4.9 / 5</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Average Student Rating</p>
          </div>

          <div className="text-center p-2 border-r last:border-0 border-white/10">
            <div className="flex items-center justify-center gap-1.5 text-brand-gold mb-1">
              <GraduationCap size={20} />
              <span className="text-2xl sm:text-3xl font-display font-bold text-white">98%</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Board Distinction Rate</p>
          </div>

          <div className="text-center p-2">
            <div className="flex items-center justify-center gap-1.5 text-brand-gold mb-1">
              <Users size={20} />
              <span className="text-2xl sm:text-3xl font-display font-bold text-white">100%</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Verified Student Reviews</p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-gold via-yellow-500 to-amber-500 text-dark-950 border-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.35)] scale-105'
                  : 'bg-dark-900/80 text-slate-300 border-white/10 hover:border-brand-gold/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ========================================================= */}
        {/* FEATURED EDITORIAL TESTIMONIAL POSTER                     */}
        {/* ========================================================= */}
        <div className="mb-20">
          <div className="relative rounded-3xl bg-dark-900 border border-brand-gold/50 overflow-hidden shadow-[0_20px_60px_rgba(212,175,55,0.15)] group transition-all duration-500">
            {/* Ambient Background Gradient Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-gold/20 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Student Image & Achievements */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  {/* Glowing Ring */}
                  <div className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full p-[3px] bg-gradient-to-br ${featuredTestimonial.gradient} shadow-[0_0_30px_rgba(212,175,55,0.3)]`}>
                    <img 
                      src={featuredTestimonial.avatar} 
                      alt={featuredTestimonial.name}
                      className="w-full h-full object-cover rounded-full filter contrast-105"
                    />
                  </div>

                  {/* Badge Icon */}
                  <div className={`absolute bottom-1 right-2 w-10 h-10 rounded-full bg-gradient-to-br ${featuredTestimonial.gradient} flex items-center justify-center border-4 border-dark-900 shadow-xl`}>
                    {featuredTestimonial.icon}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                  {featuredTestimonial.name}
                </h3>
                
                <p className="text-sm font-bold text-brand-gold mb-3">
                  {featuredTestimonial.role}
                </p>

                {/* Key Result Banner */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4 shadow-inner">
                  <Trophy size={14} />
                  <span>{featuredTestimonial.achievement}</span>
                </div>

                {/* Course Name */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <ShieldCheck size={14} className="text-brand-gold" />
                  <span>Verified Student • {featuredTestimonial.courseName}</span>
                </div>
              </div>

              {/* Right Column: Editorial Quote & Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  {/* Top Row: Quote Icon & Stars */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1 text-brand-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" className="drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
                      ))}
                    </div>
                    <div className="text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors">
                      <Quote size={56} fill="currentColor" />
                    </div>
                  </div>

                  {/* Main Editorial Quote */}
                  <blockquote className="text-lg sm:text-2xl font-display font-medium text-white leading-relaxed tracking-tight italic mb-8">
                    "{featuredTestimonial.content}"
                  </blockquote>
                </div>

                {/* Featured Switcher Selector Dots / Thumbnails */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Switch Spotlight Story:
                  </span>

                  <div className="flex items-center gap-2">
                    {TESTIMONIALS.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => setFeaturedIndex(idx)}
                        className={`relative p-0.5 rounded-full transition-all duration-300 ${
                          featuredIndex === idx 
                            ? 'ring-2 ring-brand-gold scale-110 shadow-[0_0_15px_rgba(212,175,55,0.5)]' 
                            : 'opacity-50 hover:opacity-100'
                        }`}
                        title={item.name}
                      >
                        <img 
                          src={item.avatar} 
                          alt={item.name} 
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* HORIZONTALLY SCROLLABLE POSTER TESTIMONIAL SHOWCASE        */}
        {/* ========================================================= */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                <span>More Student Success Stories</span>
              </h3>
              <p className="text-xs text-slate-400 font-light mt-1">
                Swipe or use navigation controls to browse detailed testimonials
              </p>
            </div>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="p-3 rounded-2xl bg-dark-900 hover:bg-dark-800 text-white border border-white/10 hover:border-brand-gold/50 transition-all active:scale-95 shadow-lg"
                aria-label="Scroll testimonials left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="p-3 rounded-2xl bg-dark-900 hover:bg-dark-800 text-white border border-white/10 hover:border-brand-gold/50 transition-all active:scale-95 shadow-lg"
                aria-label="Scroll testimonials right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Scroll Track */}
          <div 
            ref={scrollRowRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 px-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="group relative flex-shrink-0 w-[300px] sm:w-[360px] bg-dark-900 border border-white/10 hover:border-brand-gold/60 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)] flex flex-col justify-between snap-start overflow-hidden select-none"
              >
                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div>
                  {/* Top Bar: Achievement Badge + Stars */}
                  <div className="flex items-center justify-between gap-2 mb-6 relative z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-brand-gold/10 text-brand-gold border border-brand-gold/30">
                      {testimonial.achievement}
                    </span>

                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Body */}
                  <div className="relative z-10 mb-6">
                    <Quote size={28} className="text-brand-gold/20 mb-2" fill="currentColor" />
                    <p className="text-slate-300 text-sm leading-relaxed font-light line-clamp-5">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>

                {/* Bottom Student Profile */}
                <div className="relative z-10 pt-5 border-t border-white/10 flex items-center gap-3.5 mt-auto">
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full p-[2px] bg-gradient-to-br ${testimonial.gradient} shadow-md`}>
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center border-2 border-dark-900 shadow-sm`}>
                      {testimonial.icon}
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-bold text-sm truncate group-hover:text-brand-gold transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-brand-gold font-medium truncate">
                      {testimonial.role}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">
                      {testimonial.courseName}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
            <div className="bg-dark-950 rounded-full px-8 py-4 flex flex-col sm:flex-row items-center gap-4">
              <span className="text-white font-medium text-sm sm:text-base">Ready to write your own success story?</span>
              <a 
                href="#courses" 
                className="px-6 py-2.5 bg-gradient-to-r from-brand-gold to-yellow-500 text-dark-950 font-bold text-sm rounded-full hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-md"
              >
                <span>Explore Courses</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
