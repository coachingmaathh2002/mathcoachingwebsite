import React, { useState } from 'react';
import { Course } from '../types';
import { Star, Clock, Users, ArrowUpRight, Award, CheckCircle2, Eye, Sparkles } from 'lucide-react';

interface CoursePosterCardProps {
  course: Course;
  onQuickView?: (course: Course) => void;
  onEnroll?: (course: Course) => void;
}

export const CoursePosterCard: React.FC<CoursePosterCardProps> = ({ course, onQuickView, onEnroll }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleEnrollClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEnroll) {
      onEnroll(course);
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(course);
    }
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView && onQuickView(course)}
      className="group relative flex-shrink-0 w-[280px] sm:w-[320px] h-[460px] rounded-2xl bg-dark-900 border border-white/10 hover:border-brand-gold/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,175,55,0.22)] overflow-hidden cursor-pointer select-none snap-start flex flex-col justify-between"
    >
      {/* Background Poster Image with Zoom & Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={course.posterImage || 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80'} 
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-75 contrast-110"
        />
        {/* Layered Gradient for Dark Premium Poster Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/85 to-dark-950/30"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-950/40 to-dark-950 opacity-90"></div>
      </div>

      {/* Top Header Row - Badges */}
      <div className="relative z-10 p-5 flex items-start justify-between gap-2">
        {/* Category Pill */}
        <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-dark-950/80 backdrop-blur-md border border-brand-gold/30 text-brand-gold shadow-md">
          {course.category}
        </span>

        {/* Special Badge if present */}
        {course.badge && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-brand-gold to-yellow-500 text-dark-950 shadow-[0_0_15px_rgba(212,175,55,0.5)] animate-pulse">
            <Sparkles size={11} className="fill-dark-950" />
            {course.badge}
          </span>
        )}
      </div>

      {/* Center Content / Poster Artwork Typography */}
      <div className="relative z-10 px-5 pt-2 flex-grow flex flex-col justify-end">
        {/* Difficulty Level & Rating */}
        <div className="flex items-center gap-3 mb-2 text-xs">
          {course.difficulty && (
            <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 font-medium border border-white/10">
              {course.difficulty}
            </span>
          )}
          <div className="flex items-center gap-1 text-yellow-400 font-bold">
            <Star size={13} className="fill-yellow-400" />
            <span>{course.rating || 4.9}</span>
            <span className="text-slate-400 font-normal">({course.reviewsCount || 200}+)</span>
          </div>
        </div>

        {/* Course Title */}
        <h3 className="text-2xl font-display font-bold text-white leading-snug tracking-tight group-hover:text-brand-gold transition-colors duration-300 drop-shadow-md">
          {course.title}
        </h3>

        {/* Tagline */}
        {course.tagline && (
          <p className="text-xs text-brand-silver font-medium mt-1 line-clamp-1 opacity-90">
            {course.tagline}
          </p>
        )}

        {/* Description snippet */}
        <p className="text-xs text-slate-300 font-light mt-2 line-clamp-2 leading-relaxed opacity-80">
          {course.description}
        </p>

        {/* Info Badges (Duration & Enrolled) */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10 text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-brand-gold" />
            <span>{course.duration || course.highlight}</span>
          </div>
          {course.enrolledCount && (
            <div className="flex items-center gap-1.5">
              <Users size={13} className="text-brand-gold" />
              <span>{course.enrolledCount}+ Enrolled</span>
            </div>
          )}
        </div>
      </div>

      {/* Slide-Up Overlay on Hover for Syllabus Preview */}
      <div 
        className={`absolute inset-x-0 bottom-0 z-20 bg-dark-900/95 backdrop-blur-xl border-t border-brand-gold/40 p-5 transition-transform duration-400 ease-in-out flex flex-col justify-between ${
          isHovered ? 'translate-y-0 opacity-100 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ height: '65%' }}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold flex items-center gap-1">
              <Award size={14} /> Instructor
            </span>
            <span className="text-xs text-slate-300 font-semibold">{course.instructor || 'Raj Sir'}</span>
          </div>

          <p className="text-xs font-bold text-white mb-2 uppercase tracking-wide">Key Syllabus Coverage:</p>
          <ul className="space-y-1.5 mb-3 text-xs text-slate-300">
            {(course.syllabusTopics || ['Comprehensive Curriculum', 'Board Pattern Practice', 'Mock Exams & PYQs', '1-on-1 Doubt Clearing']).map((topic, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Course Fee</p>
            <p className="text-xl font-display font-bold text-white">{course.pricePlaceholder}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleQuickViewClick}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              title="Quick Preview"
            >
              <Eye size={16} />
            </button>
            <button
              onClick={handleEnrollClick}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-gold via-yellow-500 to-brand-gold hover:opacity-90 text-dark-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-brand-gold/30 transition-all hover:scale-105"
            >
              <span>Enroll</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Default Bottom Bar when not hovered */}
      <div className={`relative z-10 p-5 pt-3 border-t border-white/10 flex items-center justify-between bg-dark-950/80 backdrop-blur-md ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <div>
          <p className="text-[9px] uppercase tracking-widest text-slate-400 font-medium">Admission Fee</p>
          <p className="text-lg font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-brand-gold">
            {course.pricePlaceholder}
          </p>
        </div>

        <button 
          onClick={handleEnrollClick}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-brand-gold hover:text-dark-950 text-white border border-brand-gold/30 text-xs font-bold tracking-wide transition-all duration-300 flex items-center gap-1.5 shadow-md"
        >
          <span>Enroll</span>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
};
