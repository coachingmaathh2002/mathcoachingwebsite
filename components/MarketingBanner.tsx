import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

const banners = [
  {
    id: 5,
    customNode: (onNavigate?: (view: 'home' | 'tests' | 'study-materials') => void) => (
      <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-6 overflow-hidden bg-[#0a0f2c]">
        {/* Background math pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        ></div>

        {/* Left: Teacher Image (Placeholder) */}
        <div className="relative z-10 hidden md:flex flex-col items-center justify-end h-full pt-4">
           <img 
             src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
             alt="Teacher" 
             className="h-48 object-contain drop-shadow-2xl" 
             style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: '-webkit-linear-gradient(top, black 80%, transparent 100%)' }}
           />
        </div>

        {/* Center: Main Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-1 md:ml-8">
          <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg mb-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            WBJEE অংক মক টেস্ট
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-md flex items-center gap-2">
            <span className="text-yellow-400">🏆</span> ধুরন্ধর সিরিজ ব্যাচ <span className="text-yellow-400">🏆</span>
          </h2>

          <div className="flex flex-col gap-1.5 mb-4 text-white font-medium text-sm md:text-base">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" /> অধ্যায় ভিত্তিক মক টেস্ট</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" /> ৫০০০+ গুরুত্বপূর্ণ প্রশ্ন</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" /> বিস্তারিত ভিডিও সমাধান সহ</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" /> সেরা প্রস্তুতির জন্য দ্রুত রিভিশন</div>
          </div>

          <button 
            onClick={() => onNavigate && onNavigate('tests')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-8 rounded-full text-lg shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all transform hover:scale-105 border-2 border-blue-400"
          >
            আজই যুক্ত হন!
          </button>
        </div>

        {/* Right: Price Tag */}
        <div className="relative z-10 mt-6 md:mt-0 flex-shrink-0">
          <div className="bg-gradient-to-b from-blue-900 to-black border-4 border-cyan-400 rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)] transform rotate-12 hover:rotate-0 transition-all">
            <span className="text-white font-bold text-sm md:text-base">মূল্য: মাত্র</span>
            <span className="text-yellow-400 font-black text-3xl md:text-4xl drop-shadow-md">₹৯৯/-</span>
            <span className="text-white text-xs mt-1 bg-red-600 px-2 py-0.5 rounded-full whitespace-nowrap">অবিশ্বাস্য অফার!</span>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-[#0a0f2c]",
  },
  {
    id: 1,
    customNode: (onNavigate?: (view: 'home' | 'tests' | 'study-materials') => void) => (
      <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-6 overflow-hidden bg-[#1e1b4b]">
        {/* Background pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        ></div>

        {/* Left: Teacher Image (Placeholder) */}
        <div className="relative z-10 hidden md:flex flex-col items-center justify-end h-full pt-4">
           <img 
             src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
             alt="Teacher" 
             className="h-48 object-contain drop-shadow-2xl" 
             style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: '-webkit-linear-gradient(top, black 80%, transparent 100%)' }}
           />
        </div>

        {/* Center: Main Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-1 md:ml-8">
          <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg mb-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            JEE-র লক্ষ্য অর্জন করো!
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-md flex items-center gap-2">
            <span className="text-pink-400">🎯</span> JEE টার্গেট ব্যাচ <span className="text-pink-400">🎯</span>
          </h2>

          <div className="flex flex-col gap-1.5 mb-4 text-white font-medium text-sm md:text-base">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" /> একাদশ, দ্বাদশ, JEE এবং ড্রপারদের জন্য</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" /> অভিজ্ঞ শিক্ষকদের গাইডেন্স</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" /> নিয়মিত মক টেস্ট ও ডাউট ক্লিয়ারিং</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" /> সম্পূর্ণ স্টাডি মেটেরিয়াল</div>
          </div>

          <button 
            onClick={() => onNavigate && onNavigate('tests')}
            className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-8 rounded-full text-lg shadow-[0_0_15px_rgba(219,39,119,0.5)] transition-all transform hover:scale-105 border-2 border-pink-400"
          >
            ব্যাচগুলি দেখুন!
          </button>
        </div>

        {/* Right: Price Tag */}
        <div className="relative z-10 mt-6 md:mt-0 flex-shrink-0">
          <div className="bg-gradient-to-b from-purple-900 to-black border-4 border-pink-400 rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.4)] transform -rotate-12 hover:rotate-0 transition-all">
            <span className="text-white font-bold text-sm md:text-base">শুরু হচ্ছে</span>
            <span className="text-pink-400 font-black text-2xl md:text-3xl drop-shadow-md mt-1">শীঘ্রই</span>
            <span className="text-white text-xs mt-2 bg-purple-600 px-2 py-0.5 rounded-full whitespace-nowrap">সিট সীমিত!</span>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-[#1e1b4b]",
  },
  {
    id: 2,
    customNode: (onNavigate?: (view: 'home' | 'tests' | 'study-materials') => void) => (
      <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-6 overflow-hidden bg-[#064e3b]">
        {/* Background pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        ></div>

        {/* Left: Teacher Image (Placeholder) */}
        <div className="relative z-10 hidden md:flex flex-col items-center justify-end h-full pt-4">
           <img 
             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
             alt="Teacher" 
             className="h-48 object-contain drop-shadow-2xl" 
             style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: '-webkit-linear-gradient(top, black 80%, transparent 100%)' }}
           />
        </div>

        {/* Center: Main Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-1 md:ml-8">
          <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 drop-shadow-lg mb-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            WBJEE ক্র্যাক করো!
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-md flex items-center gap-2">
            <span className="text-teal-400">🚀</span> শীর্ষ র‍্যাঙ্ক গ্যারান্টি <span className="text-teal-400">🚀</span>
          </h2>

          <div className="flex flex-col gap-1.5 mb-4 text-white font-medium text-sm md:text-base">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" /> ২০২৬ পরীক্ষার্থীদের জন্য স্পেশাল ব্যাচ</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" /> বিগত বছরের প্রশ্ন সমাধান</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" /> শর্টকাট ট্রিকস ও টিপস</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" /> পার্সোনালাইজড মেন্টরশিপ</div>
          </div>

          <button 
            onClick={() => onNavigate && onNavigate('tests')}
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-8 rounded-full text-lg shadow-[0_0_15px_rgba(20,184,166,0.5)] transition-all transform hover:scale-105 border-2 border-teal-400"
          >
            এখনই যোগ দাও!
          </button>
        </div>

        {/* Right: Price Tag */}
        <div className="relative z-10 mt-6 md:mt-0 flex-shrink-0">
          <div className="bg-gradient-to-b from-emerald-900 to-black border-4 border-teal-400 rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(45,212,191,0.4)] transform rotate-12 hover:rotate-0 transition-all">
            <span className="text-white font-bold text-sm md:text-base">ভর্তি</span>
            <span className="text-teal-400 font-black text-2xl md:text-3xl drop-shadow-md mt-1">চলছে</span>
            <span className="text-white text-xs mt-2 bg-emerald-600 px-2 py-0.5 rounded-full whitespace-nowrap">দেরি করবেন না!</span>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-[#064e3b]",
  },
  {
    id: 3,
    customNode: (onNavigate?: (view: 'home' | 'tests' | 'study-materials') => void) => (
      <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-6 overflow-hidden bg-[#450a0a]">
        {/* Background pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        ></div>

        {/* Left: Teacher Image (Placeholder) */}
        <div className="relative z-10 hidden md:flex flex-col items-center justify-end h-full pt-4">
           <img 
             src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
             alt="Teacher" 
             className="h-48 object-contain drop-shadow-2xl" 
             style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: '-webkit-linear-gradient(top, black 80%, transparent 100%)' }}
           />
        </div>

        {/* Center: Main Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-1 md:ml-8">
          <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 drop-shadow-lg mb-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            ১ বছরের ফুল মক টেস্ট
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-md flex items-center gap-2">
            <span className="text-orange-400">🔥</span> ৪০% বিশাল ছাড়! <span className="text-orange-400">🔥</span>
          </h2>

          <div className="flex flex-col gap-1.5 mb-4 text-white font-medium text-sm md:text-base">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" /> সম্পূর্ণ সিলেবাস কভারেজ</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" /> রিয়েল-টাইম র‍্যাঙ্কিং</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" /> বিস্তারিত পারফরম্যান্স অ্যানালিসিস</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" /> দুর্বলতা চিহ্নিতকরণ</div>
          </div>

          <button 
            onClick={() => onNavigate && onNavigate('tests')}
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-8 rounded-full text-lg shadow-[0_0_15px_rgba(234,88,12,0.5)] transition-all transform hover:scale-105 border-2 border-orange-400"
          >
            অফারটি লুফে নাও
          </button>
        </div>

        {/* Right: Price Tag */}
        <div className="relative z-10 mt-6 md:mt-0 flex-shrink-0">
          <div className="bg-gradient-to-b from-red-900 to-black border-4 border-orange-400 rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(251,146,60,0.4)] transform -rotate-12 hover:rotate-0 transition-all">
            <span className="text-white font-bold text-sm md:text-base">প্রিমিয়াম প্যাক</span>
            <span className="text-orange-400 font-black text-3xl md:text-4xl drop-shadow-md mt-1">₹৫৯৯/-</span>
            <span className="text-white text-xs mt-2 bg-red-600 px-2 py-0.5 rounded-full whitespace-nowrap">সীমিত সময়ের জন্য</span>
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-[#450a0a]",
  }
];

interface MarketingBannerProps {
  onNavigate?: (view: 'home' | 'tests' | 'study-materials') => void;
}

export const MarketingBanner: React.FC<MarketingBannerProps> = ({ onNavigate }) => {
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
              {banner.customNode(onNavigate)}
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
