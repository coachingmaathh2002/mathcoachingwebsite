import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do you provide online classes?",
    answer: "Yes, we provide both online and offline classes. Our online classes are live and interactive, ensuring you get the same quality of education from the comfort of your home."
  },
  {
    question: "What is the batch size?",
    answer: "We keep our batch sizes small (usually 15-20 students) to ensure personalized attention and effective doubt-clearing for every student."
  },
  {
    question: "Are study materials provided?",
    answer: "Absolutely! We provide comprehensive study materials, including printed notes, practice sheets, and access to our digital library with mock tests."
  },
  {
    question: "How can I pay the fees?",
    answer: "Fees can be paid monthly or annually. We accept UPI, bank transfers, and cash payments at our center."
  },
  {
    question: "Do you offer doubt-clearing sessions?",
    answer: "Yes, we have dedicated doubt-clearing sessions every weekend where students can ask questions one-on-one with the faculty."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800 border border-white/10 mb-6">
            <HelpCircle size={16} className="text-brand-pink" />
            <span className="text-slate-300 font-medium text-sm tracking-wide uppercase">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-dark-800/50 border-brand-pink/30' : 'bg-dark-950 hover:border-white/10'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown 
                  className={`text-brand-pink transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                  size={20} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-400 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
