import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const SiteUpdates: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  const updates = [
    { 
      text: "Free Mock Test Available Now!", 
      ctaText: "Take Test", 
      action: () => navigate('/tests'),
      isNew: true
    },
    { 
      text: "New Batches Starting Soon for 2026-2027 Session!", 
      ctaText: "Enroll Now", 
      action: () => handleScrollTo('courses') 
    },
    { 
      text: "Special Discount for Early Birds" 
    },
    { 
      text: `Call Now: ${CONTACT_INFO.phone}`, 
      ctaText: "Contact Us", 
      action: () => handleScrollTo('contact') 
    },
    { 
      text: "Comprehensive Study Materials Provided", 
      ctaText: "View Materials", 
      action: () => navigate('/study-materials') 
    },
    { 
      text: "100% Success Rate in Board Exams" 
    }
  ];

  return (
    <div className="bg-gradient-to-r from-dark-950 via-[#101622] to-dark-950 text-slate-200 py-2 overflow-hidden relative z-50 flex border-b border-brand-gold/25 group shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
      <div className="absolute inset-0 bg-gold-sheen opacity-10 pointer-events-none"></div>
      <div className="flex whitespace-nowrap animate-marquee items-center w-max shrink-0 group-hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {updates.map((item, j) => (
              <React.Fragment key={j}>
                <span className="mx-6 text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2.5">
                  {j % 2 === 0 && !item.isNew && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#d4af37]" />
                  )}
                  {item.isNew && (
                    <span className="px-2 py-0.5 text-[9px] uppercase font-extrabold tracking-widest bg-gradient-to-r from-brand-gold to-yellow-400 text-dark-950 rounded-full shadow-[0_0_12px_rgba(212,175,55,0.6)]">
                      LATEST
                    </span>
                  )}
                  <span className="text-slate-200 font-medium">{item.text}</span>
                  {item.ctaText && (
                    <button 
                      onClick={item.action}
                      className="ml-2 inline-flex items-center gap-1 px-3 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-brand-gold/15 text-brand-goldLight hover:bg-brand-gold hover:text-dark-950 border border-brand-gold/40 hover:border-brand-gold rounded-full transition-all duration-300 shadow-sm cursor-pointer hover:shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                    >
                      {item.ctaText}
                      <ArrowRight size={11} />
                    </button>
                  )}
                </span>
                <span className="text-brand-gold/40 text-xs">◆</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
