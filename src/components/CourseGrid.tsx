import React, { useState, useRef } from 'react';
import { COURSES } from '../constants';
import { Course } from '../types';
import { CoursePosterCard } from './CoursePosterCard';
import { CourseModal } from './CourseModal';
import { 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  GraduationCap, 
  Award, 
  BookOpen, 
  ArrowRight,
  LayoutGrid,
  Rows,
  Flame
} from 'lucide-react';

export const CourseGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalCourse, setActiveModalCourse] = useState<Course | null>(null);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  // Scroll Container Refs
  const featuredRowRef = useRef<HTMLDivElement>(null);
  const mainRowRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'All', label: 'All Programs', icon: <BookOpen size={15} /> },
    { id: 'Featured', label: 'Featured & Trending', icon: <Flame size={15} /> },
    { id: 'School', label: 'Board Exams (10 & 12)', icon: <GraduationCap size={15} /> },
    { id: 'Competitive', label: 'WBJEE Entrance', icon: <Award size={15} /> },
    { id: 'College', label: 'College Math Honours', icon: <Sparkles size={15} /> },
  ];

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleEnroll = (course: Course) => {
    // Select course in enquiry form if available or scroll to contact section
    const courseSelect = document.getElementById('course') as HTMLSelectElement | null;
    if (courseSelect) {
      // Try to find matching option
      const options = Array.from(courseSelect.options);
      const match = options.find(opt => 
        opt.value.toLowerCase().includes(course.id.toLowerCase()) || 
        opt.text.toLowerCase().includes(course.title.toLowerCase().slice(0, 10))
      );
      if (match) {
        courseSelect.value = match.value;
      }
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter logic
  const filteredCourses = COURSES.filter(course => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Featured') return course.featured || course.badge;
    return course.category === selectedCategory;
  });

  const featuredCourses = COURSES.filter(c => c.featured);

  return (
    <section id="courses" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-silver/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-gold font-bold text-xs tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20">
              <Zap size={14} />
              <span>Poster Course Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-300 to-amber-500">Elite Programs</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl font-light mt-3 leading-relaxed">
              Browse our interactive poster collection. From Madhyamik & HS board exams to WBJEE & University Honours.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 bg-dark-900 p-1.5 rounded-2xl border border-white/10 self-start md:self-auto shadow-inner">
            <button
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'carousel' 
                  ? 'bg-brand-gold text-dark-950 shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Rows size={16} />
              <span className="hidden sm:inline">Poster Scroll</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'grid' 
                  ? 'bg-brand-gold text-dark-950 shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid size={16} />
              <span className="hidden sm:inline">Grid View</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar snap-x">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-300 snap-start border ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-gold via-yellow-500 to-amber-500 text-dark-950 border-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.35)] scale-105'
                  : 'bg-dark-900/80 text-slate-300 border-white/10 hover:border-brand-gold/40 hover:text-white hover:bg-dark-900'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* ========================================================= */}
        {/* VIEW MODE 1: HORIZONTAL POSTER CAROUSEL (DEFAULT)          */}
        {/* ========================================================= */}
        {viewMode === 'carousel' ? (
          <div className="space-y-16">
            
            {/* Row 1: Featured & High Success Programs (Only when "All" or "Featured" is selected) */}
            {(selectedCategory === 'All' || selectedCategory === 'Featured') && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles size={20} className="text-brand-gold" />
                    <h3 className="text-xl font-display font-bold text-white">
                      Featured & Top Rated Courses
                    </h3>
                    <span className="text-xs text-brand-gold font-medium px-2.5 py-0.5 rounded-full bg-brand-gold/10 border border-brand-gold/20">
                      High Impact
                    </span>
                  </div>

                  {/* Scroll Navigation Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleScroll(featuredRowRef, 'left')}
                      className="p-2.5 rounded-xl bg-dark-900 hover:bg-dark-800 text-white border border-white/10 hover:border-brand-gold/50 transition-all active:scale-95 shadow-md"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => handleScroll(featuredRowRef, 'right')}
                      className="p-2.5 rounded-xl bg-dark-900 hover:bg-dark-800 text-white border border-white/10 hover:border-brand-gold/50 transition-all active:scale-95 shadow-md"
                      aria-label="Scroll right"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Horizontal Scroll Track */}
                <div 
                  ref={featuredRowRef}
                  className="flex gap-6 overflow-x-auto pb-6 pt-2 px-1 snap-x snap-mandatory scroll-smooth custom-scrollbar"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {featuredCourses.map((course) => (
                    <CoursePosterCard
                      key={`featured-${course.id}`}
                      course={course}
                      onQuickView={setActiveModalCourse}
                      onEnroll={handleEnroll}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Row 2: Filtered Programs Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={20} className="text-brand-gold" />
                  <h3 className="text-xl font-display font-bold text-white">
                    {selectedCategory === 'All' ? 'All Course Offerings' : `${selectedCategory} Programs`}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    ({filteredCourses.length} Courses Available)
                  </span>
                </div>

                {/* Scroll Navigation Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleScroll(mainRowRef, 'left')}
                    className="p-2.5 rounded-xl bg-dark-900 hover:bg-dark-800 text-white border border-white/10 hover:border-brand-gold/50 transition-all active:scale-95 shadow-md"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => handleScroll(mainRowRef, 'right')}
                    className="p-2.5 rounded-xl bg-dark-900 hover:bg-dark-800 text-white border border-white/10 hover:border-brand-gold/50 transition-all active:scale-95 shadow-md"
                    aria-label="Scroll right"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Main Scroll Track */}
              <div 
                ref={mainRowRef}
                className="flex gap-6 overflow-x-auto pb-6 pt-2 px-1 snap-x snap-mandatory scroll-smooth custom-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {filteredCourses.map((course) => (
                  <CoursePosterCard
                    key={`main-${course.id}`}
                    course={course}
                    onQuickView={setActiveModalCourse}
                    onEnroll={handleEnroll}
                  />
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* ========================================================= */
          /* VIEW MODE 2: RESPONSIVE POSTER GRID VIEW                   */
          /* ========================================================= */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {filteredCourses.map((course) => (
              <CoursePosterCard
                key={`grid-${course.id}`}
                course={course}
                onQuickView={setActiveModalCourse}
                onEnroll={handleEnroll}
              />
            ))}
          </div>
        )}

        {/* Bottom Callout Banner */}
        <div className="text-center mt-20">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-brand-gold/50 via-yellow-400/30 to-brand-gold/50 shadow-[0_10px_30px_rgba(212,175,55,0.15)]">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-dark-900 rounded-full text-white font-bold text-sm hover:bg-dark-800 transition-all group border border-white/5"
            >
              <span>Need help selecting the right batch? Request Free Guidance</span>
              <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>

      {/* Quick View Modal */}
      <CourseModal
        course={activeModalCourse}
        onClose={() => setActiveModalCourse(null)}
        onEnroll={handleEnroll}
      />
    </section>
  );
};
