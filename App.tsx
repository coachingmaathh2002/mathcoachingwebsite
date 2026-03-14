import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseGrid } from './components/CourseGrid';
import { About } from './components/About';
import { EnquiryForm } from './components/EnquiryForm';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FreeTests } from './components/FreeTests';
import { StudyMaterials } from './components/StudyMaterials';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'tests' | 'study-materials'>('home');

  return (
    <div className="min-h-screen flex flex-col font-body overflow-x-hidden">
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
        ) : currentView === 'tests' ? (
          <FreeTests onBack={() => setCurrentView('home')} />
        ) : (
          <StudyMaterials onBack={() => setCurrentView('home')} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;