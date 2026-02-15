import React from 'react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Das',
    role: 'WBJEE Rank 145 (2023)',
    content: "The conceptual clarity I gained here was unmatched. The faculty doesn't just solve problems; they teach you how to think mathematically. The mock tests were harder than the actual exam, which made the real WBJEE feel easy.",
    initials: 'PD',
    gradient: 'from-brand-pink to-orange-500'
  },
  {
    id: 2,
    name: 'Sourav Ganguly',
    role: 'Class 12 Board - 98% in Maths',
    content: "I was struggling with Calculus in Class 11. Joining Raj Sir Math Academy changed everything. The step-by-step approach to derivatives and integration helped me score 98/100 in my HS boards. Forever grateful!",
    initials: 'SG',
    gradient: 'from-brand-purple to-blue-500'
  },
  {
    id: 3,
    name: 'Anirban Roy',
    role: 'B.Sc Maths Honours (Jadavpur Univ)',
    content: "For Honours students, finding quality guidance is tough. The depth of analysis provided here for Real Analysis and Algebra is university-level. It bridged the gap between school math and pure mathematics perfectly.",
    initials: 'AR',
    gradient: 'from-brand-pink to-brand-purple'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-light font-bold uppercase tracking-widest text-sm mb-3 block">Student Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
            Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">Victory</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Join a legacy of high achievers who transformed their mathematical understanding with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="group relative bg-dark-950 border border-white/5 rounded-2xl p-8 hover:border-brand-pink/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-dark-800 group-hover:text-brand-pink/10 transition-colors duration-300">
                <Quote size={64} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-brand-light">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="drop-shadow-[0_0_5px_rgba(244,114,182,0.5)]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 leading-relaxed mb-8 relative z-10 font-light">
                "{testimonial.content}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} p-[2px] shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                  <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.initials}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold font-display tracking-wide">{testimonial.name}</h4>
                  <p className="text-xs text-brand-light font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};