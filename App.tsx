import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseGrid } from './components/CourseGrid';
import { About } from './components/About';
import { EnquiryForm } from './components/EnquiryForm';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CourseGrid />
        <About />
        <EnquiryForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;