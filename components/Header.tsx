import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

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
      <div className={`transition-all duration-300 w-full border-b border-white/10 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-xl py-3 shadow-lg' : 'bg-dark-900/95 backdrop-blur-xl py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo(0,0); }} className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center shadow-[0_0_15px_rgba(219,39,119,0.5)] group-hover:shadow-[0_0_25px_rgba(219,39,119,0.7)] transition-shadow duration-300">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h6v6H4z"/>
                <path d="M14 4h6v6h-6z"/>
                <path d="M4 14h6v6H4z"/>
                <circle cx="17" cy="17" r="3"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display text-white tracking-tight drop-shadow-md">Raj Sir Math <span className="text-brand-light">Academy</span></span>
              <span className="text-xs font-medium tracking-widest text-slate-400 uppercase hidden sm:block">
                Excellence in Mathematics
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path + link.hash}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-slate-300 hover:text-brand-light font-medium transition-colors relative group text-sm uppercase tracking-wide ${location.pathname === link.path && link.path !== '/' ? 'text-brand-light font-bold' : ''}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-pink to-brand-purple transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_currentColor]"></span>
              </a>
            ))}
            
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, { path: '/', hash: '#contact' })}
              className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-brand-pink/30 hover:border-brand-pink text-white text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(219,39,119,0.3)]"
            >
              Enquire Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-brand-pink transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                className="text-lg text-slate-300 font-medium hover:text-brand-pink transition-colors border-b border-white/5 pb-2"
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