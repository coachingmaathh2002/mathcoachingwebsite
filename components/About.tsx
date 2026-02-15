import React from 'react';
import { UserCheck, BookOpen, Users, Trophy } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <span className="text-brand-light font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-display text-white mb-8 leading-tight">
              We Don't Just Teach.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">We Transform.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-6 font-light leading-relaxed">
              Raj Sir Math Academy has been the gold standard for mathematics education in West Bengal for over 15 years. 
              We blend traditional rigor with modern problem-solving techniques.
            </p>
            <p className="text-lg text-slate-400 mb-10 font-light leading-relaxed">
              Whether you are aiming for top ranks in WBJEE or building a solid foundation for Higher Secondary, our structured approach ensures no student is left behind.
            </p>
            
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-dark-800 border border-brand-pink/20 flex items-center justify-center flex-shrink-0 text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(219,39,119,0.1)]">
                  <UserCheck size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Expert Faculty</p>
                  <p className="text-slate-500 text-sm">Decades of experience</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-dark-800 border border-brand-pink/20 flex items-center justify-center flex-shrink-0 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.1)]">
                  <BookOpen size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Smart Material</p>
                  <p className="text-slate-500 text-sm">Digital & Print Notes</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-dark-800 border border-brand-pink/20 flex items-center justify-center flex-shrink-0 text-brand-light group-hover:bg-brand-light group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(244,114,182,0.1)]">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Small Batches</p>
                  <p className="text-slate-500 text-sm">1-on-1 Attention</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-dark-800 border border-brand-pink/20 flex items-center justify-center flex-shrink-0 text-white group-hover:bg-white group-hover:text-dark-900 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <Trophy size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Top Results</p>
                  <p className="text-slate-500 text-sm">Consistent Rankers</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image/Graphic Area */}
          <div className="relative mt-10 md:mt-0">
            {/* Pink Glow Behind */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-pink to-brand-purple rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
            
            <div className="aspect-square rounded-3xl bg-dark-950 p-2 relative z-10 border border-white/10 shadow-2xl">
              <div className="h-full w-full rounded-2xl bg-dark-900 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                
                {/* Math Pattern Background */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-pink/40 via-transparent to-transparent"></div>
                
                <div className="text-center relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                  <p className="text-8xl md:text-9xl font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 drop-shadow-2xl">∑</p>
                  <div className="h-px w-24 bg-brand-pink mx-auto my-4 shadow-[0_0_10px_#db2777]"></div>
                  <p className="text-slate-300 mt-2 font-bengali text-xl tracking-wide">শিক্ষা হল মুক্তি</p>
                  <p className="text-brand-light/60 text-xs mt-2 uppercase tracking-[0.3em]">Est. 2009</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};