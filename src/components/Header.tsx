import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SiteUpdates } from './SiteUpdates';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', hash: '' },
    { name: 'Mock Tests', path: '/tests', hash: '' },
    { name: 'Study Materials', path: '/study-materials', hash: '' },
    { name: 'Assignments', path: '/assignments', hash: '' },
    { name: 'Courses', path: '/', hash: '#courses' },
    { name: 'About Us', path: '/', hash: '#about' },
    { name: 'Testimonials', path: '/', hash: '#testimonials' },
    { name: 'Contact', path: '/', hash: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { path: string, hash: string }) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== link.path) {
      navigate(link.path + link.hash);
      if (!link.hash) {
        window.scrollTo(0, 0);
      }
    } else {
      if (link.hash) {
        const id = link.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
    >
      <SiteUpdates />
      <div className={`transition-all duration-300 w-full border-b ${
        scrolled ? 'glass-nav py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-brand-gold/20' : 'bg-dark-950/90 backdrop-blur-xl py-3.5 border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo(0,0); }} className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-brand-gold via-yellow-500 to-brand-goldDark flex items-center justify-center p-0.5 shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transition-all duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-[10px] bg-dark-950 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/25 to-transparent opacity-60"></div>
                <span className="font-serif-royal font-black text-lg md:text-xl text-transparent bg-clip-text bg-accent-gradient tracking-wider">
                  ∑R
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif-royal font-bold text-white tracking-wide drop-shadow-sm flex items-center gap-1.5">
                Raj Sir <span className="text-transparent bg-clip-text bg-accent-gradient">Academy</span>
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-brand-gold/80 uppercase hidden sm:block">
                Centre of Mathematical Excellence
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path && (!link.hash || location.hash === link.hash);
              return (
                <a
                  key={link.name}
                  href={link.path + link.hash}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`font-medium transition-all relative py-1 text-xs tracking-wider uppercase ${
                    isActive 
                      ? 'text-brand-gold font-bold' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-brand-gold to-yellow-300 transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_8px_#d4af37]' : 'w-0 hover:w-full'
                  }`}></span>
                </a>
              );
            })}
            
            {/* Quick Mock Test Highlight Button */}
            <button
              onClick={() => { navigate('/tests'); window.scrollTo(0, 0); }}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-brand-goldLight bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/40 hover:border-brand-gold transition-all duration-300 flex items-center gap-1.5 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              Free Mock Tests
            </button>

            {/* Enquire CTA */}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, { path: '/', hash: '#contact' })}
              className="relative group px-5 py-2 rounded-xl bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold text-dark-950 text-xs font-extrabold tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_28px_rgba(212,175,55,0.6)]"
            >
              Enquire Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-brand-gold hover:border-brand-gold/40 transition-colors"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div 
        className={`fixed inset-y-0 right-0 w-72 bg-dark-950 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden border-l border-white/10 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-bold text-white">Menu</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path + link.hash}
                onClick={(e) => handleNavClick(e, link)}
                className="text-lg text-slate-300 font-medium hover:text-brand-gold transition-colors border-b border-white/5 pb-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};