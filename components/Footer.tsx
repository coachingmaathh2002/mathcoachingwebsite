import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-dark-950 text-slate-400 py-16 border-t border-white/5 font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center text-white font-bold">
                RS
              </div>
              <span className="text-xl font-display text-white">Raj Sir Math Academy</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering students with mathematical clarity and confidence since 2009. Join the revolution in learning.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/17wjL1p9Hw/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-light transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-brand-light transition-colors">Courses</a></li>
              <li><a href="#about" className="hover:text-brand-light transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-light transition-colors">Contact</a></li>
            </ul>
          </div>
          
           {/* Courses */}
           <div>
            <h4 className="text-white font-bold mb-6">Top Courses</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-light transition-colors">Class 10 (Madhyamik)</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Class 12 (HS)</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">WBJEE Competitive</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">B.Sc Math Honours</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.phone}</li>
              <li className="break-all">{CONTACT_INFO.email}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Raj Sir Math Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-light">Privacy Policy</a>
            <a href="#" className="hover:text-brand-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};