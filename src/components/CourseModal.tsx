import React, { useEffect } from 'react';
import { Course } from '../types';
import { X, Star, Clock, Users, Award, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onEnroll }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (course) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-dark-900 border border-brand-gold/40 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 flex flex-col my-8 max-h-[90vh]">
        {/* Header Poster Banner */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden flex-shrink-0">
          <img 
            src={course.posterImage || 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80'} 
            alt={course.title}
            className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-dark-950/80 text-slate-300 hover:text-white hover:bg-dark-950 border border-white/10 transition-colors z-20"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Badge & Category */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-dark-950/80 text-brand-gold border border-brand-gold/30">
              {course.category}
            </span>
            {course.badge && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold text-dark-950 shadow-lg">
                <Sparkles size={12} /> {course.badge}
              </span>
            )}
          </div>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow custom-scrollbar">
          <div>
            <div className="flex items-center gap-3 text-xs text-yellow-400 font-bold mb-2">
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-yellow-400" />
                <span>{course.rating || 4.9}</span>
                <span className="text-slate-400 font-normal">({course.reviewsCount || 200}+ verified student reviews)</span>
              </div>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-medium">{course.difficulty || 'All Levels'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              {course.title}
            </h2>

            {course.tagline && (
              <p className="text-sm font-semibold text-brand-gold mb-3">
                {course.tagline}
              </p>
            )}

            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {course.description}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-dark-950/60 border border-white/5 text-xs">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-brand-gold" />
              <div>
                <p className="text-slate-400 text-[10px]">Duration</p>
                <p className="text-white font-semibold">{course.duration || course.highlight}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users size={16} className="text-brand-gold" />
              <div>
                <p className="text-slate-400 text-[10px]">Enrolled</p>
                <p className="text-white font-semibold">{course.enrolledCount || 500}+ Students</p>
              </div>
            </div>

            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <Award size={16} className="text-brand-gold" />
              <div>
                <p className="text-slate-400 text-[10px]">Lead Mentor</p>
                <p className="text-white font-semibold">{course.instructor || 'Raj Sir'}</p>
              </div>
            </div>
          </div>

          {/* Syllabus Topics */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-brand-gold" /> Syllabus & Key Coverage
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {(course.syllabusTopics || [
                'Complete Chapter-wise Coverage',
                'Mock Test Series & PYQ Solutions',
                'Shortcut Methods & Time Saving Tricks',
                'Personalized Doubt Resolution'
              ]).map((topic, index) => (
                <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-dark-950/40 border border-white/5 text-xs text-slate-200">
                  <CheckCircle2 size={15} className="text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Checklist */}
          <div className="p-4 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 flex items-center gap-3 text-xs text-slate-300">
            <ShieldCheck size={24} className="text-brand-gold flex-shrink-0" />
            <p>
              Includes live interactive classes, recorded video backup, doubt solving sessions, and printed/PDF assignment sets.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 bg-dark-950 border-t border-white/10 flex items-center justify-between gap-4 flex-shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold block">Total Investment</span>
            <span className="text-2xl font-display font-bold text-white">{course.pricePlaceholder}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onEnroll(course);
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-gold via-yellow-500 to-brand-gold text-dark-950 font-bold text-sm tracking-wide flex items-center gap-2 shadow-lg shadow-brand-gold/30 hover:scale-105 transition-all"
          >
            <span>Enroll in Course</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
