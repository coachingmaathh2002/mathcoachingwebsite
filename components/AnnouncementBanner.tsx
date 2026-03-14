import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Sparkles } from 'lucide-react';

export const AnnouncementBanner: React.FC = () => {
  const announcements = [
    "New Batches Starting Soon for 2026-2027 Session!",
    "Special Discount for Early Birds",
    `Call Now: ${CONTACT_INFO.phone}`,
    "Comprehensive Study Materials Provided",
    "100% Success Rate in Board Exams"
  ];

  return (
    <div className="bg-gradient-to-r from-brand-pink to-brand-purple text-white py-2.5 overflow-hidden relative z-50 flex border-b border-white/10">
      <div className="flex whitespace-nowrap animate-marquee items-center w-max">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {announcements.map((item, j) => (
              <React.Fragment key={j}>
                <span className="mx-6 text-sm font-bold tracking-wide flex items-center gap-2">
                  {j % 2 === 0 && <Sparkles size={14} className="text-brand-light" />}
                  {item}
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
