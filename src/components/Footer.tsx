import React from 'react';
import { Facebook, Instagram, Youtube, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNav = (path: string, hash?: string) => {
    navigate(path);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer id="footer" className="bg-dark-950 text-slate-400 py-16 border-t border-brand-gold/20 font-light relative overflow-hidden">
      {/* Background Ambient Radiance */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-gold/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Presentation */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-gold via-yellow-500 to-brand-goldDark p-0.5 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <div className="w-full h-full rounded-[10px] bg-dark-950 flex items-center justify-center">
                  <span className="font-serif-royal font-black text-lg text-transparent bg-clip-text bg-accent-gradient">
                    ∑R
                  </span>
                </div>
              </div>
              <div>
                <span className="text-xl font-serif-royal font-bold text-white block">
                  Raj Sir <span className="text-brand-gold">Academy</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-brand-goldLight block">
                  Centre of Mathematical Excellence
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              West Bengal's distinguished academy dedicated to transforming mathematics learning into an intuitive, high-scoring discipline for Board, WBJEE, and Honours scholars.
            </p>

            <p className="text-xs font-bengali text-brand-gold mb-6 tracking-wide">
              "গণিত কোনো ভীতি নয় — গণিত হলো যুক্তির শুদ্ধতম সৌন্দর্য।"
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/share/17wjL1p9Hw/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-y-1 text-slate-300"
                aria-label="Facebook Page"
              >
                <Facebook size={16} />
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300 hover:-translate-y-1 text-slate-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white transition-all duration-300 hover:-translate-y-1 text-slate-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-all duration-300 hover:-translate-y-1 text-slate-300"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2 sm:col-span-6">
            <h4 className="text-white font-serif-royal font-bold text-sm tracking-wider uppercase mb-5 pb-2 border-b border-white/10">
              Academic Hub
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNav('/')} className="hover:text-brand-gold hover:translate-x-1 transition-all">
                  Home Portal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/', '#courses')} className="hover:text-brand-gold hover:translate-x-1 transition-all">
                  Course Catalog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/tests')} className="hover:text-brand-gold hover:translate-x-1 transition-all flex items-center gap-1.5">
                  <span>Mock Exam Suite</span>
                  <span className="text-[9px] px-1 bg-brand-gold/20 text-brand-gold rounded border border-brand-gold/30">Free</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/assignments')} className="hover:text-brand-gold hover:translate-x-1 transition-all">
                  Assignment Vault
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/study-material')} className="hover:text-brand-gold hover:translate-x-1 transition-all">
                  Notes & Formulas
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/notices')} className="hover:text-brand-gold hover:translate-x-1 transition-all">
                  Notice Board
                </button>
              </li>
            </ul>
          </div>
          
          {/* Courses */}
          <div className="md:col-span-3 sm:col-span-6">
            <h4 className="text-white font-serif-royal font-bold text-sm tracking-wider uppercase mb-5 pb-2 border-b border-white/10">
              Flagship Programs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNav('/', '#courses')} className="hover:text-brand-gold hover:translate-x-1 transition-all text-left">
                  WBCHSE Class 12 Sem 3 & 4
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/', '#courses')} className="hover:text-brand-gold hover:translate-x-1 transition-all text-left">
                  WBCHSE Class 11 Sem 1 & 2
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/', '#courses')} className="hover:text-brand-gold hover:translate-x-1 transition-all text-left">
                  WBJEE 2026 Mathematics Sprint
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/', '#courses')} className="hover:text-brand-gold hover:translate-x-1 transition-all text-left">
                  Madhyamik Class 10 Math
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/', '#courses')} className="hover:text-brand-gold hover:translate-x-1 transition-all text-left">
                  B.Sc Mathematics Honours (UG)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/', '#courses')} className="hover:text-brand-gold hover:translate-x-1 transition-all text-left">
                  CBSE Class 10 & 12 Boards
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-white font-serif-royal font-bold text-sm tracking-wider uppercase mb-5 pb-2 border-b border-white/10">
              Campus & Queries
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-gold flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand-gold text-slate-300 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-gold flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-gold text-slate-300 transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-dark-900 border border-brand-gold/20 flex items-center justify-between">
              <div className="text-[11px]">
                <span className="text-slate-400 block">Instant Admission Desk</span>
                <span className="text-brand-gold font-bold">Mon - Sun (9am - 9pm)</span>
              </div>
              <a 
                href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-gold text-dark-950 font-bold hover:scale-105 transition-transform"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Raj Sir Math Academy. All rights reserved.</p>
          <p className="text-slate-500 text-[11px] flex items-center gap-1.5">
            <span>Crafted for Mathematical Excellence</span>
            <span className="text-brand-gold">•</span>
            <span>West Bengal, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};