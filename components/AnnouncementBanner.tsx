import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const AnnouncementBanner: React.FC = () => {
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

  const announcements = [
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
    <div className="bg-gradient-to-r from-brand-pink to-brand-purple text-white py-2.5 overflow-hidden relative z-50 flex border-b border-white/10 group">
      <div className="flex whitespace-nowrap animate-marquee items-center w-max group-hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {announcements.map((item, j) => (
              <React.Fragment key={j}>
                <span className="mx-6 text-sm font-bold tracking-wide flex items-center gap-3">
                  {j % 2 === 0 && !item.isNew && <Sparkles size={14} className="text-brand-light" />}
                  {item.isNew && (
                    <span className="px-2 py-0.5 text-[10px] uppercase font-black bg-yellow-400 text-black rounded-md animate-pulse shadow-[0_0_10px_rgba(250,204,21,0.6)]">
                      NEW
                    </span>
                  )}
                  {item.text}
                  {item.ctaText && (
                    <button 
                      onClick={item.action}
                      className="ml-2 flex items-center gap-1 px-3 py-1 text-[11px] uppercase tracking-wider font-bold bg-white text-brand-purple hover:bg-brand-light hover:text-white rounded-full transition-colors shadow-sm cursor-pointer"
                    >
                      {item.ctaText}
                      <ArrowRight size={12} />
                    </button>
                  )}
                </span>
                <span className="text-white/30">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
