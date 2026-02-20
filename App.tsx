import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseGrid } from './components/CourseGrid';
import { About } from './components/About';
import { EnquiryForm } from './components/EnquiryForm';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FreeTests } from './components/FreeTests';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'tests'>('home');

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header onNavigate={setCurrentView} />
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero />
            <CourseGrid />
            <About />
            <EnquiryForm />
            <Testimonials />
          </>
        ) : (
          <FreeTests onBack={() => setCurrentView('home')} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;