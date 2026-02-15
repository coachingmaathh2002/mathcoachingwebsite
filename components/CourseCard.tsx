import React from 'react';
import { Course } from '../types';
import { Clock, CheckCircle2 } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group relative bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-white/5 p-[1px] overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(219,39,119,0.3)]">
      
      {/* Gradient Border Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-pink via-brand-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Inner Content Card */}
      <div className="relative h-full bg-dark-900 rounded-2xl p-6 flex flex-col z-10">
        
        {/* Decorative Top Gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-brand-pink/20 transition-colors"></div>

        {/* Popular Tag */}
        {(course.id === 'wb-10' || course.id === 'wbjee') && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-brand-light text-xs font-bold mb-4 w-fit uppercase tracking-wider shadow-[0_0_10px_rgba(219,39,119,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse"></span>
            Trending
          </div>
        )}
        
        <h3 className="text-xl font-bold text-white mb-3 font-display tracking-wide group-hover:text-brand-light transition-colors">
          {course.title}
        </h3>
        
        <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-start gap-2.5 mb-6 mt-auto bg-dark-950/50 p-3 rounded-lg border border-white/5">
          <Clock size={16} className="text-brand-pink flex-shrink-0 mt-0.5" />
          <span className="text-xs text-slate-300 font-medium">{course.highlight}</span>
        </div>
        
        <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Invest In Yourself</p>
            <p className="text-2xl font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
              {course.pricePlaceholder}
            </p>
          </div>
          <button className="px-5 py-2.5 bg-white text-dark-950 text-sm font-bold rounded-lg hover:bg-brand-light transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(244,114,182,0.5)]">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};