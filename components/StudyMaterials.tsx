import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, FileText, ArrowLeft, Search, ChevronRight, Lock, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { CONTACT_INFO } from '../constants';

interface StudyMaterialsProps {
  onBack: () => void;
}

type MaterialType = 'article' | 'guide' | 'notes';

interface Material {
  id: string;
  title: string;
  description: string;
  type: MaterialType;
  topic: string;
  isPremium: boolean;
  readTime: string;
  content: string;
}

const sampleContent = `
## Introduction

Mathematics is the language of the universe. In this guide, we will explore some of the most fundamental concepts that form the basis of advanced mathematics.

### Key Concepts

1. **Variables and Constants**: Understanding the difference between what changes and what remains the same.
2. **Equations**: The balance of mathematical statements.
3. **Functions**: The relationship between inputs and outputs.

### Important Formulas

Here are some essential formulas you should memorize:

*   **Quadratic Formula**: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$
*   **Pythagorean Theorem**: $a^2 + b^2 = c^2$
*   **Area of a Circle**: $A = \\pi r^2$

> "Pure mathematics is, in its way, the poetry of logical ideas." — Albert Einstein

### Practice Problems

Try solving these problems to test your understanding:

*   Solve for x: $2x + 5 = 15$
*   Find the area of a circle with a radius of 4 units.
*   Calculate the hypotenuse of a right triangle with sides 3 and 4.

Remember, consistent practice is the key to mastering mathematics. Do not rush through the concepts; take your time to understand the underlying principles.
`;

const setTheoryBengaliContent = `
## সেট তত্ত্ব (Set Theory) - এক নজরে

গণিতের অন্যতম গুরুত্বপূর্ণ একটি শাখা হলো সেট তত্ত্ব। এই নোটে আমরা সেটের প্রাথমিক ধারণা, প্রকারভেদ এবং বিভিন্ন প্রক্রিয়া সম্পর্কে জানব।

### ১. সেট (Set) কী?

বাস্তব বা চিন্তা জগতের সুনির্দিষ্ট, সুসংজ্ঞায়িত এবং পরস্পর ভিন্ন বস্তুর সমাবেশ বা সংগ্রহকে **সেট** বলে।
যেমন: প্রথম ৫টি স্বাভাবিক সংখ্যার সেট, $A = \\{1, 2, 3, 4, 5\\}$

### ২. সেটের প্রকাশ (Representation of Sets)

সেটকে প্রধানত দুটি পদ্ধতিতে প্রকাশ করা হয়:
*   **তালিকা পদ্ধতি (Roster Method)**: এই পদ্ধতিতে সেটের সকল উপাদান সুনির্দিষ্টভাবে উল্লেখ করে দ্বিতীয় বন্ধনী $\\{\\}$ এর মধ্যে আবদ্ধ করা হয়। যেমন: $A = \\{a, e, i, o, u\\}$
*   **সেট গঠন পদ্ধতি (Set-Builder Method)**: এই পদ্ধতিতে সেটের উপাদানগুলো সুনির্দিষ্টভাবে উল্লেখ না করে উপাদান নির্ধারণের জন্য সাধারণ ধর্মের উল্লেখ থাকে। যেমন: $A = \\{x : x \\text{ স্বাভাবিক সংখ্যা এবং } x < 6\\}$

### ৩. সেটের প্রকারভেদ (Types of Sets)

*   **সসীম সেট (Finite Set)**: যে সেটের উপাদান সংখ্যা গণনা করে নির্ধারণ করা যায়। যেমন: $A = \\{1, 2, 3, 4\\}$
*   **অসীম সেট (Infinite Set)**: যে সেটের উপাদান সংখ্যা গণনা করে শেষ করা যায় না। যেমন: স্বাভাবিক সংখ্যার সেট $N = \\{1, 2, 3, 4, \\dots\\}$
*   **ফাঁকা সেট (Empty/Null Set)**: যে সেটে কোনো উপাদান নেই। একে $\\emptyset$ বা $\\{\\}$ দ্বারা প্রকাশ করা হয়।
*   **সার্বিক সেট (Universal Set)**: আলোচনাধীন সকল সেট যে নির্দিষ্ট সেটের উপসেট, তাকে সার্বিক সেট $U$ বলে।
*   **উপসেট (Subset)**: $A$ সেটের প্রতিটি উপাদান যদি $B$ সেটেরও উপাদান হয়, তবে $A$ কে $B$ এর উপসেট বলে। প্রকাশ: $A \\subseteq B$
*   **প্রকৃত উপসেট (Proper Subset)**: $A \\subset B$ (অর্থাৎ $B$ তে অন্তত একটি উপাদান বেশি আছে)।

### ৪. সেটের প্রক্রিয়া (Set Operations)

*   **সংযোগ সেট (Union of Sets)**: $A \\cup B = \\{x : x \\in A \\text{ অথবা } x \\in B\\}$
*   **ছেদ সেট (Intersection of Sets)**: $A \\cap B = \\{x : x \\in A \\text{ এবং } x \\in B\\}$
*   **সেটের অন্তর (Difference of Sets)**: $A - B$ বা $A \\setminus B = \\{x : x \\in A \\text{ এবং } x \\notin B\\}$
*   **পূরক সেট (Complement of a Set)**: $A' = U - A$

### ৫. গুরুত্বপূর্ণ সূত্র (Important Formulas)

সেটের উপাদান সংখ্যা (Cardinality) সম্পর্কিত কিছু গুরুত্বপূর্ণ সূত্র:

*   $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$
*   $n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C)$

**ডি মরগানের সূত্র (De Morgan's Laws)**:
1.  $(A \\cup B)' = A' \\cap B'$
2.  $(A \\cap B)' = A' \\cup B'$

> "গণিতের সৌন্দর্য তার যুক্তির মধ্যে নিহিত।"
`;

const materials: Material[] = [
  {
    id: '1',
    title: 'Algebra Formulas Cheat Sheet',
    description: 'A comprehensive list of all important algebra formulas for quick revision.',
    type: 'notes',
    topic: 'Algebra',
    isPremium: false,
    readTime: '5 min read',
    content: `# Algebra Formulas Cheat Sheet\n\n` + sampleContent
  },
  {
    id: '2',
    title: 'Calculus Integration Techniques',
    description: 'Detailed notes on advanced integration techniques with examples.',
    type: 'guide',
    topic: 'Calculus',
    isPremium: true,
    readTime: '15 min read',
    content: `# Calculus Integration Techniques\n\n` + sampleContent
  },
  {
    id: '3',
    title: 'Trigonometry Masterclass',
    description: 'In-depth article covering basic to advanced trigonometry concepts.',
    type: 'article',
    topic: 'Trigonometry',
    isPremium: true,
    readTime: '20 min read',
    content: `# Trigonometry Masterclass\n\n` + sampleContent
  },
  {
    id: '4',
    title: 'Geometry Theorems Summary',
    description: 'Quick summary of all major geometry theorems for competitive exams.',
    type: 'notes',
    topic: 'Geometry',
    isPremium: false,
    readTime: '8 min read',
    content: `# Geometry Theorems Summary\n\n` + sampleContent
  },
  {
    id: '5',
    title: 'Probability Concepts Explained',
    description: 'Clear explanations of probability concepts with real-world examples.',
    type: 'article',
    topic: 'Probability',
    isPremium: false,
    readTime: '12 min read',
    content: `# Probability Concepts Explained\n\n` + sampleContent
  },
  {
    id: '6',
    title: 'Coordinate Geometry Basics',
    description: 'Foundational guide on coordinate geometry and its applications.',
    type: 'guide',
    topic: 'Geometry',
    isPremium: false,
    readTime: '10 min read',
    content: `# Coordinate Geometry Basics\n\n` + sampleContent
  },
  {
    id: '7',
    title: 'সেট তত্ত্ব (Set Theory) One Shot',
    description: 'A complete quick revision of Set Theory concepts in Bengali.',
    type: 'notes',
    topic: 'Set Theory',
    isPremium: false,
    readTime: '6 min read',
    content: setTheoryBengaliContent
  }
];

export const StudyMaterials: React.FC<StudyMaterialsProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'article' | 'guide' | 'notes'>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  // Prevent right click on the whole component to discourage copying
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    
    // Only apply when reading a material
    if (selectedMaterial) {
      document.addEventListener('contextmenu', handleContextMenu);
    }
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [selectedMaterial]);

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          material.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || material.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const getIcon = (type: MaterialType) => {
    switch (type) {
      case 'article': return <FileText size={24} />;
      case 'guide': return <BookOpen size={24} />;
      case 'notes': return <FileText size={24} />;
    }
  };

  const getTypeColor = (type: MaterialType) => {
    switch (type) {
      case 'article': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'guide': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'notes': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
    }
  };

  if (selectedMaterial) {
    return (
      <div className="min-h-screen bg-dark-950 pt-24 pb-20 px-4 sm:px-6 lg:px-8 print:hidden">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <button 
              onClick={() => setSelectedMaterial(null)}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Materials</span>
            </button>
            
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-brand-pink uppercase tracking-wider px-3 py-1 bg-brand-pink/10 rounded-full">
                  {selectedMaterial.topic}
                </span>
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                  <Clock size={14} />
                  {selectedMaterial.readTime}
                </span>
                {selectedMaterial.isPremium && (
                  <span className="text-xs font-bold text-amber-500 flex items-center gap-1 px-2 py-1 bg-amber-500/10 rounded-full">
                    <Lock size={12} /> Premium
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                {selectedMaterial.title}
              </h1>
              <p className="text-xl text-slate-400">
                {selectedMaterial.description}
              </p>
            </div>
          </motion.div>

          {selectedMaterial.isPremium ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-dark-900 border border-brand-pink/20 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="text-brand-pink" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Premium Content</h2>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">
                This study material is exclusively available to our premium members. Upgrade your account to access this and many other resources.
              </p>
              <button className="px-8 py-3 bg-brand-pink hover:bg-brand-light text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-brand-pink/20">
                Unlock Premium Access
              </button>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-dark-900 rounded-3xl p-6 md:p-10 border border-white/5 shadow-2xl select-none relative overflow-hidden"
            >
              {/* Watermark Overlay */}
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.06] flex flex-wrap justify-center items-center gap-10 select-none">
                {Array.from({ length: 150 }).map((_, i) => (
                  <div key={i} className="transform -rotate-45 text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
                    Raj Sir Math Academy • {CONTACT_INFO.phone}
                  </div>
                ))}
              </div>

              <div className="prose prose-invert prose-pink max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-brand-pink hover:prose-a:text-brand-light prose-blockquote:border-l-brand-pink prose-blockquote:bg-white/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-img:rounded-xl relative z-10">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm, remarkMath]} 
                  rehypePlugins={[rehypeKatex]}
                >
                  {selectedMaterial.content}
                </ReactMarkdown>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center relative z-10">
                <p className="text-sm text-slate-500">
                  © 2026 Raj Sir Math Academy. All rights reserved.
                </p>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-sm text-brand-pink hover:text-brand-light transition-colors"
                >
                  Back to top
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 pt-24 pb-20 px-4 sm:px-6 lg:px-8 print:hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Study <span className="text-brand-light">Materials</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Access our comprehensive collection of study notes, guides, and articles to boost your preparation.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input 
              type="text"
              placeholder="Search by topic or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-900 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
            {['all', 'article', 'guide', 'notes'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-6 py-2.5 rounded-xl font-medium capitalize whitespace-nowrap transition-all ${
                  activeFilter === filter 
                    ? 'bg-brand-pink text-white shadow-lg shadow-brand-pink/20' 
                    : 'bg-dark-900 text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMaterials.map((material) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={material.id}
                onClick={() => setSelectedMaterial(material)}
                className="bg-dark-900 rounded-2xl p-6 border border-white/5 hover:border-brand-pink/30 transition-all hover:shadow-xl group flex flex-col h-full relative overflow-hidden cursor-pointer"
              >
                {material.isPremium && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Lock size={12} />
                    PREMIUM
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl border ${getTypeColor(material.type)}`}>
                    {getIcon(material.type)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-pink uppercase tracking-wider mb-1 block">
                      {material.topic}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-light transition-colors pr-16">
                      {material.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {material.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-xs font-mono text-slate-500 bg-dark-950 px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-1">
                    <Clock size={14} /> {material.readTime}
                  </span>
                  
                  <span className={`flex items-center gap-1 text-sm font-bold transition-colors ${
                    material.isPremium ? 'text-slate-400 group-hover:text-amber-400' : 'text-brand-pink group-hover:text-brand-light'
                  }`}>
                    {material.isPremium ? 'Unlock to Read' : 'Read Now'} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredMaterials.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-dark-900 rounded-2xl border border-white/5"
          >
            <BookOpen size={48} className="mx-auto text-slate-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No materials found</h3>
            <p className="text-slate-400">Try adjusting your search or filters to find what you're looking for.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
