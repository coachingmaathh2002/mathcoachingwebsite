import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const banners = [
  {
    id: 5,
    title: "WBJEE অংক মক টেস্ট",
    highlight: "ধুরন্ধর সিরিজ ব্যাচ",
    subtitle: "অধ্যায় ভিত্তিক মক টেস্ট • ৫০০০+ প্রশ্ন • ভিডিও সমাধান",
    buttonText: "মাত্র ₹৯৯/- এ যোগ দিন",
    bgColor: "bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 1,
    title: "আমাদের সাথে তোমার JEE-র লক্ষ্য অর্জন করো!",
    highlight: "JEE ব্যাচ",
    subtitle: (
      <>
        একাদশ, দ্বাদশ, JEE এবং ড্রপারদের জন্য
      </>
    ),
    buttonText: "ব্যাচগুলি দেখুন!",
    bgColor: "bg-[#003399]", // Dark blue
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Placeholder for teacher
  },
  {
    id: 2,
    title: "শীর্ষ র‍্যাঙ্ক সহ WBJEE ক্র্যাক করো!",
    highlight: "WBJEE টার্গেট",
    subtitle: "২০২৬ পরীক্ষার্থীদের জন্য স্পেশাল ব্যাচ",
    buttonText: "এখনই যোগ দাও!",
    bgColor: "bg-[#4c1d95]", // Purple
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "নতুন আপডেট! সম্পূর্ণ বিনামূল্যে",
    highlight: "ফ্রি মক টেস্ট",
    subtitle: "আমাদের আপডেটেড ফ্রি মক টেস্ট দিয়ে প্রস্তুতি যাচাই করো",
    buttonText: "এখনই শুরু করো",
    bgColor: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500", // Colorful and attracting
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "৪০% বিশাল ছাড়!",
    highlight: "১ বছরের ফুল মক টেস্ট",
    subtitle: "প্রিমিয়াম প্যাক মাত্র ৫৯৯ টাকায়!",
    buttonText: "অফারটি লুফে নাও",
    bgColor: "bg-gradient-to-r from-slate-900 to-slate-700", // Premium dark look
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  }
];

export const MarketingBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="w-full bg-transparent pt-[90px] md:pt-[100px] pb-4">
      {/* Full width container, no side margins on desktop */}
      <div className="relative w-full overflow-hidden shadow-md">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner) => (
            <div 
              key={banner.id}
              className={`w-full flex-shrink-0 ${banner.bgColor} relative overflow-hidden flex items-center justify-center min-h-[160px] md:min-h-[220px]`}
            >
              {/* Background Image on the right with gradient fade */}
              <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 z-0">
                <img 
                  src={banner.image} 
                  alt="Banner background" 
                  className="w-full h-full object-cover object-center opacity-30 md:opacity-50"
                  style={{ 
                    maskImage: 'linear-gradient(to right, transparent 0%, black 50%)', 
                    WebkitMaskImage: '-webkit-linear-gradient(left, transparent 0%, black 50%)' 
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Centered Content */}
              <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-4 md:py-6 flex flex-col items-center justify-center text-center">
                
                {/* Highlight (Yellow Text) */}
                <h2 className="text-[#FBBF24] font-extrabold text-xl md:text-4xl tracking-wide mb-2 md:mb-3 drop-shadow-md uppercase">
                  {banner.highlight}
                </h2>

                {/* Title (Bordered Box) */}
                <div className="border border-white md:border-2 px-4 py-1.5 md:px-8 md:py-2 rounded-full mb-3 md:mb-5 bg-black/10 backdrop-blur-sm">
                  <h3 className="text-white font-bold text-xs md:text-2xl tracking-wide drop-shadow-md">
                    {banner.title}
                  </h3>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
                  <p className="text-white text-xs md:text-lg font-medium drop-shadow-md">
                    {banner.subtitle}
                  </p>
                  <div className="hidden md:block w-px h-6 bg-white/60"></div>
                  <button className="bg-white text-slate-900 font-bold px-4 py-1.5 md:px-6 md:py-2 rounded text-xs md:text-sm hover:bg-brand-light hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 uppercase tracking-wide">
                    {banner.buttonText}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-20"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Container (Below the banner like in the image) */}
      <div className="w-full py-4 flex justify-center gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              currentSlide === index ? 'bg-brand-pink' : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
