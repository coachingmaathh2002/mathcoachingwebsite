import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { MarketingBanner } from './components/MarketingBanner';
import { Hero } from './components/Hero';
import { CourseGrid } from './components/CourseGrid';
import { About } from './components/About';
import { EnquiryForm } from './components/EnquiryForm';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FreeTests } from './components/FreeTests';
import { StudyMaterials } from './components/StudyMaterials';
import { WBJEEAssignments } from './components/WBJEEAssignments';
import ScrollToTop from './components/ScrollToTop';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from './constants';

const Home = () => (
  <>
    <MarketingBanner />
    <Hero />
    <CourseGrid />
    <About />
    <FAQ />
    <EnquiryForm />
    <Testimonials />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-body overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tests" element={<FreeTests />} />
            <Route path="/study-materials" element={<StudyMaterials />} />
            <Route path="/assignments" element={<WBJEEAssignments />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] animate-pulse-slow"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
        
        <Toaster position="bottom-center" />
      </div>
    </Router>
  );
};

export default App;