import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do you teach in Bengali or English medium?",
    answer: "Both! We provide bilingual explanations (Bengali & English) so students from West Bengal Board (WBBSE/WBCHSE) as well as CBSE/ICSE can grasp concepts intuitively without language barriers."
  },
  {
    question: "Do you provide online classes for students outside Kolkata?",
    answer: "Yes, we host high-definition interactive live classes with digital whiteboard pen tablets, recorded backup sessions, and instant doubt chat on our portal."
  },
  {
    question: "What is the batch size and personal attention model?",
    answer: "We strictly cap our batches at 15-20 students. This guarantees that Raj Sir reviews every student's step-by-step working and provides personalized feedback."
  },
  {
    question: "Are printed notes and WBJEE question banks provided?",
    answer: "Absolutely. Enrolled students receive printed chapter modules, previous 15-year chapter-wise solved archives, formula cheat sheets, and weekly timed mock tests."
  },
  {
    question: "How are doubt-clearing sessions scheduled?",
    answer: "Beyond regular lecture hours, we host dedicated weekend 1-on-1 doubt clinics where students can resolve difficult problems from any standard textbook (S.N. Dey, ML Khanna, RD Sharma, Cengage)."
  },
  {
    question: "What are the payment options and refund policies?",
    answer: "Fees can be remitted monthly or semester-wise via UPI, net banking, or at our academy office. We also provide trial demo sessions prior to final enrollment."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full academic-badge mb-4">
            <HelpCircle size={14} className="text-brand-gold" />
            <span className="text-xs font-serif-royal font-bold uppercase tracking-[0.2em] text-brand-goldLight">
              Clarity & Admissions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-royal font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-accent-gradient">Inquiries</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto">
            Everything you need to know about our batches, methodology, language mediums, and enrolment process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-dark-950/90 border-brand-gold/50 shadow-[0_10px_35px_rgba(212,175,55,0.18)]' 
                    : 'bg-dark-950/50 border-white/10 hover:border-brand-gold/30 hover:bg-dark-950/80'
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-serif-royal font-medium transition-colors duration-300 ${
                    isOpen ? 'text-brand-gold' : 'text-slate-200 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    isOpen ? 'bg-brand-gold text-dark-950 rotate-180' : 'bg-white/5 text-slate-400 group-hover:text-white'
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
