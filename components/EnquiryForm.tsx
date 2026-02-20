import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const EnquiryForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API Call
    setTimeout(() => {
      setStatus('success');
      e.currentTarget.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark-950 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-brand-light font-bold uppercase tracking-widest text-sm mb-3 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
            Start Your Journey
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Have questions about fees, batches, or the curriculum? Reach out to us directly.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a href={`tel:${CONTACT_INFO.phone}`} className="group p-8 bg-dark-900 rounded-2xl border border-white/5 hover:border-brand-pink/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(219,39,119,0.2)]">
              <div className="w-14 h-14 rounded-full bg-dark-800 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-pink group-hover:text-white text-brand-pink transition-colors">
                <Phone size={24} />
              </div>
              <p className="text-white font-bold text-lg mb-1">Call Us</p>
              <p className="text-slate-400 group-hover:text-brand-light transition-colors">{CONTACT_INFO.phone}</p>
            </a>
            
            <a href={`mailto:${CONTACT_INFO.email}`} className="group p-8 bg-dark-900 rounded-2xl border border-white/5 hover:border-brand-pink/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(219,39,119,0.2)]">
              <div className="w-14 h-14 rounded-full bg-dark-800 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-pink group-hover:text-white text-brand-pink transition-colors">
                <Mail size={24} />
              </div>
              <p className="text-white font-bold text-lg mb-1">Email Us</p>
              <p className="text-slate-400 group-hover:text-brand-light transition-colors">{CONTACT_INFO.email}</p>
            </a>
            
            <div className="group p-8 bg-dark-900 rounded-2xl border border-white/5 hover:border-brand-pink/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(219,39,119,0.2)]">
              <div className="w-14 h-14 rounded-full bg-dark-800 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-pink group-hover:text-white text-brand-pink transition-colors">
                <MapPin size={24} />
              </div>
              <p className="text-white font-bold text-lg mb-1">Visit Us</p>
              <p className="text-slate-400 group-hover:text-brand-light transition-colors">{CONTACT_INFO.address}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
           <div className="bg-dark-900 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-pink/10 rounded-full blur-[80px]"></div>

            {status === 'success' ? (
              <div className="text-center py-12 relative z-10">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-display">Enquiry Sent!</h3>
                <p className="text-slate-400 mb-8 text-lg">We will be in touch with you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-brand-light font-bold hover:text-white transition-colors border-b-2 border-brand-light pb-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                  <p className="text-slate-500 text-sm mt-2">Fields marked with * are required</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 ml-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-5 py-3 bg-dark-950 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2 ml-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="w-full px-5 py-3 bg-dark-950 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 00000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 ml-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-5 py-3 bg-dark-950 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-slate-300 mb-2 ml-1">Interested Course *</label>
                    <select
                      name="course"
                      id="course"
                      required
                      defaultValue=""
                      className="w-full px-5 py-3 bg-dark-950 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all appearance-none"
                    >
                      <option value="" disabled>Select a course</option>
                      <option value="Class 10">WB Board Class 10</option>
                      <option value="Class 11">WB Board Class 11</option>
                      <option value="Class 12">WB Board Class 12</option>
                      <option value="WBJEE">WBJEE Competitive</option>
                      <option value="CBSE">CBSE (Class 5-12)</option>
                      <option value="UG Honours">UG Maths Honours</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 ml-1">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="w-full px-5 py-3 bg-dark-950 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                    placeholder="Any specific questions regarding timing or fees?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-accent-gradient text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(219,39,119,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};