import React from 'react';
import { Quote, Star, GraduationCap, Award, TrendingUp } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Das',
    role: 'WBJEE Rank 145 (2023)',
    content: "The conceptual clarity I gained here was unmatched. The faculty doesn't just solve problems; they teach you how to think mathematically. The mock tests were harder than the actual exam, which made the real WBJEE feel easy.",
    initials: 'PD',
    gradient: 'from-brand-pink to-orange-500',
    icon: <Award size={16} className="text-white" />
  },
  {
    id: 2,
    name: 'Sourav Ganguly',
    role: 'Class 12 Board - 98% in Maths',
    content: "I was struggling with Calculus in Class 11. Joining Raj Sir Math Academy changed everything. The step-by-step approach to derivatives and integration helped me score 98/100 in my HS boards. Forever grateful!",
    initials: 'SG',
    gradient: 'from-brand-purple to-blue-500',
    icon: <TrendingUp size={16} className="text-white" />
  },
  {
    id: 3,
    name: 'Anirban Roy',
    role: 'B.Sc Maths Honours (Jadavpur Univ)',
    content: "For Honours students, finding quality guidance is tough. The depth of analysis provided here for Real Analysis and Algebra is university-level. It bridged the gap between school math and pure mathematics perfectly.",
    initials: 'AR',
    gradient: 'from-brand-pink to-brand-purple',
    icon: <GraduationCap size={16} className="text-white" />
  },
  {
    id: 4,
    name: 'Riya Sen',
    role: 'JEE Main 99.2 Percentile',
    content: "Raj Sir's short tricks for Coordinate Geometry and Algebra saved me so much time during the actual JEE Main. The study material is perfectly aligned with the latest NTA pattern.",
    initials: 'RS',
    gradient: 'from-emerald-400 to-teal-500',
    icon: <Award size={16} className="text-white" />
  },
  {
    id: 5,
    name: 'Aritra Banerjee',
    role: 'Class 10 ICSE - 100/100',
    content: "I used to fear math, but the foundation batch completely removed my phobia. The interactive doubt-clearing sessions and regular assignments kept me on track throughout the year.",
    initials: 'AB',
    gradient: 'from-orange-400 to-red-500',
    icon: <TrendingUp size={16} className="text-white" />
  },
  {
    id: 6,
    name: 'Sneha Mitra',
    role: 'ISI Entrance Cleared',
    content: "If you are aiming for ISI or CMI, this is the place. The focus on subjective problem-solving and logical reasoning is exactly what you need to crack these prestigious exams.",
    initials: 'SM',
    gradient: 'from-blue-400 to-indigo-500',
    icon: <GraduationCap size={16} className="text-white" />
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden" id="testimonials">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800 border border-white/10 mb-6">
            <Star size={16} className="text-brand-pink fill-brand-pink" />
            <span className="text-slate-300 font-medium text-sm tracking-wide uppercase">Student Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">Victory</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Don't just take our word for it. Hear from the students who transformed their mathematical understanding and achieved their dream scores.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`group relative bg-dark-900 border border-white/5 rounded-3xl p-8 hover:border-brand-pink/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(219,39,119,0.3)] flex flex-col justify-between overflow-hidden ${
                index === 1 || index === 4 ? 'lg:translate-y-8' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-dark-800 group-hover:text-brand-pink/10 transition-colors duration-500">
                  <Quote size={80} fill="currentColor" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 text-brand-light relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(244,114,182,0.6)]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-300 leading-relaxed mb-8 relative z-10 font-light text-lg">
                  "{testimonial.content}"
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                <div className="relative">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} p-[2px] shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-dark-950 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.initials}
                    </div>
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center border-2 border-dark-900 shadow-sm`}>
                    {testimonial.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg tracking-wide">{testimonial.name}</h4>
                  <p className="text-sm text-brand-light font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-brand-pink to-brand-purple">
            <div className="bg-dark-950 rounded-full px-8 py-4 flex items-center gap-4">
              <span className="text-white font-medium">Ready to write your own success story?</span>
              <a href="#courses" className="text-brand-light font-bold hover:text-white transition-colors flex items-center gap-1">
                Explore Courses <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};