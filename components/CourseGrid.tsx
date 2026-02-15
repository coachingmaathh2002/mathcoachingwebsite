import React from 'react';
import { COURSES } from '../constants';
import { CourseCard } from './CourseCard';
import { ArrowRight, Zap } from 'lucide-react';

export const CourseGrid: React.FC = () => {
  return (
    <section id="courses" className="py-24 bg-dark-950 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-pink/30 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-brand-light font-bold text-sm tracking-widest uppercase mb-3">
            <Zap size={16} />
            <span>Our Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            Elite Math Courses
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            From board exams to competitive engineering tests, select the program that fits your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-brand-pink via-brand-purple to-brand-pink">
            <a href="#contact" className="inline-flex items-center gap-3 px-8 py-3 bg-dark-900 rounded-full text-white font-semibold hover:bg-dark-800 transition-all group">
              <span>Get Free Guidance</span>
              <ArrowRight className="w-5 h-5 text-brand-light group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};