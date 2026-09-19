import React from 'react';
import { UserCheck, BookOpen, Users, Trophy, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Precision Geometric Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      
      {/* Background Radiance */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full academic-badge mb-4">
            <ShieldCheck size={14} className="text-brand-gold" />
            <span className="text-xs font-serif-royal font-bold uppercase tracking-[0.2em] text-brand-goldLight">
              Institutional Heritage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-royal font-bold text-white mb-4 leading-tight">
            We Don't Merely Teach. <br />
            <span className="text-transparent bg-clip-text bg-accent-gradient">
              We Engineer Mathematical Thinkers.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Since 2009, Raj Sir Math Academy has stood as Bengal's premier benchmark for mathematics education — seamlessly uniting the rigorous discipline of board examinations with the lightning-fast heuristics of WBJEE.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Academic Credentials & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Core Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              
              <div className="glass-luxury rounded-2xl p-5 group hover:border-brand-gold/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-dark-950 transition-all shadow-sm">
                  <UserCheck size={22} />
                </div>
                <h3 className="text-base font-bold text-white font-serif-royal mb-1.5 flex items-center gap-2">
                  <span>Distinguished Faculty</span>
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  15+ years of pedagogical expertise under Raj Sir, specializing in Calculus, Coordinate Geometry, and Abstract Algebra.
                </p>
              </div>

              <div className="glass-luxury rounded-2xl p-5 group hover:border-brand-gold/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-dark-950 transition-all shadow-sm">
                  <BookOpen size={22} />
                </div>
                <h3 className="text-base font-bold text-white font-serif-royal mb-1.5">
                  Proprietary Question Banks
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Curated chapter modules with WBJEE Category 1, 2, and 3 level problems, previous 15-year solved papers, and model answers.
                </p>
              </div>

              <div className="glass-luxury rounded-2xl p-5 group hover:border-brand-gold/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-dark-950 transition-all shadow-sm">
                  <Users size={22} />
                </div>
                <h3 className="text-base font-bold text-white font-serif-royal mb-1.5">
                  Micro-Batch Mentorship
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Strict limit of 15-20 students per cohort ensuring individual attention, personal step-correction, and direct doubt clearing.
                </p>
              </div>

              <div className="glass-luxury rounded-2xl p-5 group hover:border-brand-gold/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-dark-950 transition-all shadow-sm">
                  <Trophy size={22} />
                </div>
                <h3 className="text-base font-bold text-white font-serif-royal mb-1.5">
                  Proven Rank Acceleration
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Consistent top 100 ranks in WBJEE, 95%+ marks in Higher Secondary Mathematics, and admissions into Jadavpur Univ & IITs.
                </p>
              </div>

            </div>

            {/* Ethos Quote Pill */}
            <div className="p-4 rounded-2xl bg-dark-950 border border-brand-gold/25 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 text-brand-gold font-serif font-black flex items-center justify-center text-lg flex-shrink-0">
                “
              </div>
              <div>
                <p className="text-xs sm:text-sm text-slate-200 font-medium italic">
                  "Mathematics is neither memorization nor fear — it is the purest form of structured human reason."
                </p>
                <p className="text-[11px] font-bold text-brand-gold mt-1">
                  — Raj Sir (Founder & Chief Mentor)
                </p>
              </div>
            </div>

          </div>
          
          {/* Right Column: Royal Monogram Emblem & Mentor Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer Golden Glow Aura */}
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-gold/30 via-yellow-500/20 to-amber-700/30 rounded-3xl blur-2xl opacity-60"></div>
              
              <div className="relative rounded-3xl bg-dark-950 p-6 border border-brand-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                
                {/* Faculty Card Visual */}
                <div className="rounded-2xl bg-gradient-to-b from-[#131b2b] to-dark-950 p-6 text-center border border-white/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gold-sheen opacity-10 pointer-events-none"></div>
                  
                  {/* Monogram Seal Badge */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-gold via-yellow-500 to-brand-goldDark p-0.5 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <div className="w-full h-full rounded-full bg-dark-950 flex flex-col items-center justify-center">
                      <span className="font-serif-royal font-black text-2xl text-transparent bg-clip-text bg-accent-gradient">
                        ∑R
                      </span>
                      <span className="text-[9px] font-bold text-brand-gold tracking-widest uppercase">
                        2009
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif-royal font-bold text-white mb-1">
                    Raj Sir
                  </h3>
                  <p className="text-xs font-semibold text-brand-gold tracking-wider uppercase mb-3">
                    Chief Academic Mentor & Founder
                  </p>

                  <div className="flex items-center justify-center gap-2 mb-5">
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300">
                      M.Sc Mathematics
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-[11px] text-brand-gold font-bold">
                      15+ Yrs Exp
                    </span>
                  </div>

                  <p className="text-xs text-slate-300/90 font-bengali leading-relaxed mb-5">
                    পশ্চিমবঙ্গের হাজার হাজার ছাত্রছাত্রীদের গণিতের ভয় দূর করে সফল ইঞ্জিনিয়ারিং ও বোর্ড ফলাফলের রূপকার।
                  </p>

                  <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-left text-xs">
                    <div className="bg-dark-900/80 p-2.5 rounded-xl border border-white/5">
                      <span className="text-[10px] text-slate-400 block uppercase">Board Average</span>
                      <span className="text-sm font-bold text-brand-gold">94.8%</span>
                    </div>
                    <div className="bg-dark-900/80 p-2.5 rounded-xl border border-white/5">
                      <span className="text-[10px] text-slate-400 block uppercase">WBJEE Top Ranks</span>
                      <span className="text-sm font-bold text-white">100+ Students</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};