import React, { useState, useEffect } from 'react';
import { StudentMarksheetModal } from './StudentMarksheetModal';
import { 
  Folder, 
  FileText, 
  ChevronRight, 
  BookOpen, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Trophy, 
  Target, 
  RefreshCcw, 
  Timer, 
  Sparkles, 
  Search, 
  Grid, 
  Layers, 
  Zap, 
  X, 
  Award,
  Flame,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import confetti from 'canvas-confetti';
import { 
  quadraticEquationsMCQs, 
  apGpMCQs, 
  logarithmsMCQs, 
  complexNumbersMCQs, 
  permutationsMCQs, 
  binomialMCQs, 
  matricesMCQs, 
  setsMCQs 
} from '../data/algebraMCQs';
import { limitsMCQs } from '../data/limitsMCQs';
import { continuityMCQs } from '../data/continuityMCQs';
import { differentialEqMCQs } from '../data/differentialEqMCQs';
import { indefiniteIntegralMCQs } from '../data/indefiniteIntegralMCQs';
import { 
  definiteIntegralMCQs, 
  definiteIntegralMCQsMock2, 
  definiteIntegralMCQsMock3 
} from '../data/definiteIntegralMCQs';
import { areaUnderCurvesMCQs } from '../data/areaUnderCurvesMCQs';
import { differentiationMCQs } from '../data/differentiationMCQs';
import { applicationsOfDerivativesMCQs } from '../data/applicationsOfDerivativesMCQs';
import { vectorAlgebraMCQs } from '../data/vectorAlgebraMCQs';
import { linesPlanes3DMCQs } from '../data/linesPlanes3DMCQs';
import { compoundAnglesMCQs, transformationMCQs, multipleAnglesMCQs, trigEquationsMCQs, inverseTrigMCQs, propertiesOfTrianglesMCQs } from '../data/trigMCQs';
import { straightLinesMCQs, circlesMCQs, parabolaMCQs, ellipseMCQs, hyperbolaMCQs } from '../data/coordMCQs';
import { probabilityMCQs, statisticsMCQs } from '../data/probStatMCQs';

// ── Types ───────────────────────────────────────────────────────────────────────

export type MCQ = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export type MockTest = {
  id: string;
  title: string;
  mcqs: MCQ[];
};

type Chapter = {
  id: string;
  title: string;
  mocks: MockTest[];
};

type Unit = {
  id: string;
  title: string;
  chapters: Chapter[];
};

// ── Data Generator ───────────────────────────────────────────────────────────────

const generateMocks = (prefix: string, initialMcqs: MCQ[], extraMocks: Record<number, MCQ[]> = {}): MockTest[] => {
  const mocks: MockTest[] = [
    { id: `${prefix}-mock-01`, title: 'Mock-01', mcqs: initialMcqs }
  ];
  for (let i = 2; i <= 20; i++) {
    const numStr = i.toString().padStart(2, '0');
    mocks.push({ id: `${prefix}-mock-${numStr}`, title: `Mock-${numStr}`, mcqs: extraMocks[i] || [] });
  }
  return mocks;
};

const wbjeeSyllabus: Unit[] = [
  {
    id: 'algebra',
    title: 'বীজগণিত (Algebra)',
    chapters: [
      { id: 'alg-1', title: 'দ্বিঘাত সমীকরণ (Quadratic Equations)', mocks: generateMocks('alg-1', quadraticEquationsMCQs) },
      { id: 'alg-2', title: 'সমান্তর ও গুণোত্তর প্রগতি (AP & GP)', mocks: generateMocks('alg-2', apGpMCQs) },
      { id: 'alg-3', title: 'লগারিদম (Logarithms)', mocks: generateMocks('alg-3', logarithmsMCQs) },
      { id: 'alg-4', title: 'জটিল রাশি (Complex Numbers)', mocks: generateMocks('alg-4', complexNumbersMCQs) },
      { id: 'alg-5', title: 'বিন্যাস ও সমবায় (Permutations & Combinations)', mocks: generateMocks('alg-5', permutationsMCQs) },
      { id: 'alg-6', title: 'দ্বিপদ উপপাদ্য (Binomial Theorem)', mocks: generateMocks('alg-6', binomialMCQs) },
      { id: 'alg-7', title: 'ম্যাট্রিক্স ও নির্ণায়ক (Matrices & Determinants)', mocks: generateMocks('alg-7', matricesMCQs) },
      { id: 'alg-8', title: 'সেট, সম্বন্ধ ও চিত্রণ (Sets, Relations & Functions)', mocks: generateMocks('alg-8', setsMCQs) },
    ],
  },
  {
    id: 'trigonometry',
    title: 'ত্রিকোণমিতি (Trigonometry)',
    chapters: [
      { id: 'trig-1', title: 'যৌগিক কোণ (Compound Angles)', mocks: generateMocks('trig-1', compoundAnglesMCQs) },
      { id: 'trig-2', title: 'যোগফল ও গুণফলের রূপান্তর (Transformation Formulas)', mocks: generateMocks('trig-2', transformationMCQs) },
      { id: 'trig-3', title: 'গুণিতক ও অংশ কোণ (Multiple & Sub-multiple Angles)', mocks: generateMocks('trig-3', multipleAnglesMCQs) },
      { id: 'trig-4', title: 'ত্রিকোণমিতিক সমীকরণ (Trigonometric Equations)', mocks: generateMocks('trig-4', trigEquationsMCQs) },
      { id: 'trig-5', title: 'বিপরীত ত্রিকোণমিতিক অপেক্ষক (Inverse Trigonometric Functions)', mocks: generateMocks('trig-5', inverseTrigMCQs) },
      { id: 'trig-6', title: 'ত্রিভুজের ধর্মাবলী (Properties of Triangles)', mocks: generateMocks('trig-6', propertiesOfTrianglesMCQs) },
    ],
  },
  {
    id: 'coordinate',
    title: 'স্থানাঙ্ক জ্যামিতি (Coordinate Geometry)',
    chapters: [
      { id: 'coord-1', title: 'সরলরেখা (Straight Lines)', mocks: generateMocks('coord-1', straightLinesMCQs) },
      { id: 'coord-2', title: 'বৃত্ত (Circles)', mocks: generateMocks('coord-2', circlesMCQs) },
      { id: 'coord-3', title: 'অধিবৃত্ত (Parabola)', mocks: generateMocks('coord-3', parabolaMCQs) },
      { id: 'coord-4', title: 'উপবৃত্ত (Ellipse)', mocks: generateMocks('coord-4', ellipseMCQs) },
      { id: 'coord-5', title: 'পরাবৃত্ত (Hyperbola)', mocks: generateMocks('coord-5', hyperbolaMCQs) },
    ],
  },
  {
    id: 'calculus',
    title: 'ক্যালকুলাস (Calculus)',
    chapters: [
      { id: 'calc-1', title: 'সীমা (Limits)', mocks: generateMocks('calc-1', limitsMCQs) },
      { id: 'calc-2', title: 'সন্ততা ও অবকলনযোগ্যতা (Continuity & Differentiability)', mocks: generateMocks('calc-2', continuityMCQs) },
      { id: 'calc-3', title: 'অবকলন (Differentiation)', mocks: generateMocks('calc-3', differentiationMCQs) },
      { id: 'calc-4', title: 'অবকলনের প্রয়োগ (Applications of Derivatives)', mocks: generateMocks('calc-4', applicationsOfDerivativesMCQs) },
      { id: 'calc-5', title: 'অনির্দিষ্ট সমাকলন (Indefinite Integration)', mocks: generateMocks('calc-5', indefiniteIntegralMCQs) },
      { id: 'calc-6', title: 'নির্দিষ্ট সমাকলন (Definite Integration)', mocks: generateMocks('calc-6', definiteIntegralMCQs, { 2: definiteIntegralMCQsMock2, 3: definiteIntegralMCQsMock3 }) },
      { id: 'calc-7', title: 'অবকল সমীকরণ (Differential Equations)', mocks: generateMocks('calc-7', differentialEqMCQs) },
      { id: 'calc-8', title: 'ক্ষেত্রফল (Area under curves)', mocks: generateMocks('calc-8', areaUnderCurvesMCQs) },
    ],
  },
  {
    id: 'vector3d',
    title: 'ভেক্টর ও 3D জ্যামিতি (Vectors & 3D Geometry)',
    chapters: [
      { id: 'vec-1', title: 'ভেক্টর বীজগণিত (Vector Algebra)', mocks: generateMocks('vec-1', vectorAlgebraMCQs) },
      { id: 'vec-2', title: 'সরলরেখা ও সমতল (Lines and Planes in 3D)', mocks: generateMocks('vec-2', linesPlanes3DMCQs) },
    ],
  },
  {
    id: 'probstat',
    title: 'সম্ভাবনা ও পরিসংখ্যান (Probability & Statistics)',
    chapters: [
      { id: 'prob-1', title: 'সম্ভাবনা (Probability)', mocks: generateMocks('prob-1', probabilityMCQs) },
      { id: 'prob-2', title: 'পরিসংখ্যান (Statistics)', mocks: generateMocks('prob-2', statisticsMCQs) },
    ],
  },
];

// ── Main Component ───────────────────────────────────────────────────────────────

export const WBJEEAssignments: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedMock, setSelectedMock] = useState<MockTest | null>(null);
  const [isAssignmentStarted, setIsAssignmentStarted] = useState(false);
  const [isChallengeMode, setIsChallengeMode] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false);
  
  // Search & View All Modal states
  const [searchQuery, setSearchQuery] = useState('');
  const [showViewAllModal, setShowViewAllModal] = useState(false);
  const [modalSearch, setModalSearch] = useState('');
  const [showMarksheetModal, setShowMarksheetModal] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isAssignmentStarted && isChallengeMode && timeRemaining !== null && timeRemaining > 0 && !showResults) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => (prev !== null && prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (timeRemaining === 0 && !showResults) {
      handleFinishAssignment();
    }
    return () => clearInterval(timer);
  }, [isAssignmentStarted, isChallengeMode, timeRemaining, showResults]);

  const handleOptionSelect = (questionId: string, optionIndex: number) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    if (!selectedMock) return { score: 0, correct: 0, incorrect: 0, unanswered: 0, maxScore: 0, percentage: 0 };
    
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    
    selectedMock.mcqs.forEach(q => {
      if (selectedAnswers[q.id] === undefined) {
        unanswered++;
      } else if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });
    
    let score = correct;
    if (isChallengeMode) {
      score = correct * 1 - incorrect * 0.25;
    }
    
    const maxScore = selectedMock.mcqs.length;
    const percentage = maxScore > 0 ? (Math.max(score, 0) / maxScore) * 100 : 0;
    
    return { score, correct, incorrect, unanswered, maxScore, percentage };
  };

  const handleFinishAssignment = () => {
    setShowResults(true);
    const results = calculateScore();
    if (results.percentage >= 80) {
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 },
          colors: ['#d4af37', '#f59e0b', '#fbbf24', '#ffffff']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 },
          colors: ['#d4af37', '#f59e0b', '#fbbf24', '#ffffff']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const resetAssignmentState = () => {
    setIsAssignmentStarted(false);
    setTimeRemaining(null);
    setSelectedAnswers({});
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setIsReviewing(false);
  };

  const handleNext = () => {
    if (selectedMock && currentQuestionIndex < selectedMock.mcqs.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Filtered chapters for global search
  const allChaptersList = wbjeeSyllabus.flatMap(u => u.chapters.map(c => ({ ...c, unitTitle: u.title, unitObj: u })));
  const filteredSearchChapters = searchQuery.trim() === '' ? [] : allChaptersList.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.unitTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 font-body pt-32 pb-20 relative overflow-hidden">
      {/* Background Gold Ambient Glows */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* MAIN SECTION HEADER                                        */}
        {/* ========================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-900 border border-brand-gold/30 text-brand-gold text-xs font-extrabold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <Zap size={14} className="fill-brand-gold" />
            <span>WBJEE Chapterwise Assignment Portal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight leading-tight">
            Master Every Topic with <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-300 to-amber-500">
              Interactive Mock Assignments
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            অধ্যায়ভিত্তিক MCQ প্রশ্ন, সময়সীমাবদ্ধ পরীক্ষা এবং KaTeX ফর্মুলা সম্বলিত বিস্তারিত সমাধান — WBJEE-তে সেরা র্যাংক পাওয়ার প্রস্তুতি নিন।
          </p>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 p-4 bg-dark-900/80 border border-white/10 rounded-2xl backdrop-blur-md shadow-xl">
            <div className="p-2 border-r last:border-0 border-white/10 text-center">
              <span className="block text-xl font-display font-bold text-brand-gold">6 Units</span>
              <span className="text-[11px] text-slate-400 font-medium">Full Syllabus</span>
            </div>
            <div className="p-2 border-r last:border-0 border-white/10 text-center">
              <span className="block text-xl font-display font-bold text-brand-gold">28 Chapters</span>
              <span className="text-[11px] text-slate-400 font-medium">Topic-wise Mocks</span>
            </div>
            <div className="p-2 border-r last:border-0 border-white/10 text-center">
              <span className="block text-xl font-display font-bold text-brand-gold">500+ Mocks</span>
              <span className="text-[11px] text-slate-400 font-medium">Practice & Challenge</span>
            </div>
            <div className="p-2 text-center">
              <span className="block text-xl font-display font-bold text-brand-gold">Step-by-Step</span>
              <span className="text-[11px] text-slate-400 font-medium">Detailed Solutions</span>
            </div>
          </div>

          {/* Sample Merit Certificate Trigger Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowMarksheetModal(true)}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500/20 via-brand-gold/20 to-yellow-500/20 hover:from-amber-500/30 hover:via-brand-gold/30 hover:to-yellow-500/30 text-brand-gold font-bold text-xs sm:text-sm rounded-full border border-brand-gold/40 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:scale-105 cursor-pointer"
            >
              <Award size={18} className="text-brand-gold animate-pulse" />
              <span>📜 View Sample Official Merit Marksheet & Certificate</span>
            </button>
          </div>
        </div>

        {/* Global Chapter Search Input */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-slate-400" size={18} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any WBJEE chapter (e.g., Complex Numbers, Calculus)..."
              className="w-full bg-dark-900 border border-white/10 focus:border-brand-gold/60 text-white placeholder-slate-500 rounded-2xl py-3.5 pl-11 pr-10 text-sm outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {searchQuery.trim() !== '' && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-dark-900 border border-brand-gold/30 rounded-2xl p-3 shadow-2xl z-40 max-h-80 overflow-y-auto no-scrollbar">
              {filteredSearchChapters.length === 0 ? (
                <div className="p-4 text-center text-slate-400 text-xs">
                  No matching chapters found for "{searchQuery}"
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredSearchChapters.map(chap => (
                    <button
                      key={`search-${chap.id}`}
                      onClick={() => {
                        setSelectedUnit(chap.unitObj);
                        setSelectedChapter(chap);
                        setSelectedMock(null);
                        resetAssignmentState();
                        setSearchQuery('');
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-brand-gold/10 text-left group transition-colors"
                    >
                      <div>
                        <p className="text-white font-bold text-sm group-hover:text-brand-gold transition-colors">
                          {chap.title}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {chap.unitTitle} • 20 Mock Tests
                        </p>
                      </div>
                      <ChevronRight size={16} className="text-slate-500 group-hover:text-brand-gold" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* BREADCRUMBS NAVIGATION BAR                                */}
        {/* ========================================================= */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-8 bg-dark-900/90 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/10 shadow-lg">
          <button 
            onClick={() => { 
              setSelectedUnit(null); 
              setSelectedChapter(null); 
              setSelectedMock(null);
              resetAssignmentState(); 
            }}
            className="hover:text-brand-gold font-bold transition-colors flex items-center gap-1.5 text-slate-300"
          >
            <Folder size={15} className="text-brand-gold" />
            <span>Syllabus Units</span>
          </button>
          
          {selectedUnit && (
            <>
              <ChevronRight size={14} className="text-slate-500" />
              <button 
                onClick={() => { 
                  setSelectedChapter(null); 
                  setSelectedMock(null);
                  resetAssignmentState();
                }}
                className={`hover:text-brand-gold transition-colors ${!selectedChapter ? 'font-bold text-brand-gold' : 'font-medium'}`}
              >
                {selectedUnit.title}
              </button>
            </>
          )}

          {selectedChapter && (
            <>
              <ChevronRight size={14} className="text-slate-500" />
              <button 
                onClick={() => { 
                  setSelectedMock(null); 
                  resetAssignmentState();
                }}
                className={`hover:text-brand-gold transition-colors ${!selectedMock ? 'font-bold text-brand-gold' : 'font-medium'}`}
              >
                {selectedChapter.title}
              </button>
            </>
          )}

          {selectedMock && (
            <>
              <ChevronRight size={14} className="text-slate-500" />
              <span className="font-extrabold text-dark-950 bg-brand-gold px-3 py-0.5 rounded-full shadow-sm">
                {selectedMock.title}
              </span>
            </>
          )}
        </div>

        {/* ========================================================= */}
        {/* CONTENT STATES WITH ANIMATIONS                            */}
        {/* ========================================================= */}
        <AnimatePresence mode="wait">
          
          {/* LEVEL 1: UNITS GRID */}
          {!selectedUnit && !selectedChapter && (
            <motion.div 
              key="units"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {wbjeeSyllabus.map((unit) => {
                const totalMocksCount = unit.chapters.length * 20;
                return (
                  <button
                    key={unit.id}
                    onClick={() => setSelectedUnit(unit)}
                    className="group relative flex items-start gap-5 p-7 bg-dark-900 border border-white/10 hover:border-brand-gold/60 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] text-left overflow-hidden"
                  >
                    {/* Background Subtle Hover Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/15 transition-colors pointer-events-none"></div>

                    <div className="p-4 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-dark-950 transition-all duration-300 shadow-md">
                      <Folder size={28} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-gold transition-colors line-clamp-2 leading-snug">
                        {unit.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                          {unit.chapters.length} Chapters
                        </span>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                          {totalMocksCount} Mocks
                        </span>
                      </div>
                    </div>

                    <div className="self-center">
                      <ChevronRight size={20} className="text-slate-500 group-hover:text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </motion.div>
          )}

          {/* LEVEL 2: CHAPTERS LIST */}
          {selectedUnit && !selectedChapter && (
            <motion.div 
              key="chapters"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-white">
                    {selectedUnit.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Select a chapter to access its 20 WBJEE Mock Tests
                  </p>
                </div>

                <button 
                  onClick={() => setSelectedUnit(null)}
                  className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white px-4 py-2 rounded-xl bg-dark-900 border border-white/10 hover:border-brand-gold/40 transition-all"
                >
                  <ArrowLeft size={16} />
                  <span>Back to Units</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {selectedUnit.chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => {
                      setSelectedChapter(chapter);
                      resetAssignmentState();
                    }}
                    className="group relative flex items-center justify-between p-6 bg-dark-900 rounded-3xl border border-white/10 hover:border-brand-gold/60 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-brand-gold via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex items-center gap-4 min-w-0 flex-1 pr-4">
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-brand-gold group-hover:bg-brand-gold/15 transition-colors">
                        <FileText size={22} />
                      </div>

                      <div className="min-w-0">
                        <span className="font-display font-bold text-base text-white group-hover:text-brand-gold transition-colors block truncate">
                          {chapter.title}
                        </span>
                        <span className="text-xs text-slate-400 mt-1 block">
                          20 Interactive Mock Papers
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline-block text-[11px] font-bold text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded-xl border border-brand-gold/20">
                        View Mocks
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-dark-950 text-slate-400 transition-all">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* LEVEL 2.5: MOCK TESTS POSTER GRID & VIEW ALL REDESIGN */}
          {selectedChapter && !selectedMock && (
            <motion.div 
              key="mocks"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider mb-1">
                    <Award size={14} />
                    <span>{selectedUnit?.title}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {selectedChapter.title}
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  {/* Prominent "View All Mocks" Modal Trigger Button */}
                  <button
                    onClick={() => setShowViewAllModal(true)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-brand-gold via-yellow-500 to-amber-500 text-dark-950 font-bold text-xs shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-all"
                  >
                    <Grid size={15} />
                    <span>View All 20 Mocks Grid</span>
                  </button>

                  <button 
                    onClick={() => setSelectedChapter(null)}
                    className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white px-4 py-2.5 rounded-2xl bg-dark-900 border border-white/10 hover:border-brand-gold/40 transition-all"
                  >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                </div>
              </div>

              {/* Featured Highlight Mock Card (Mock 01) */}
              <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-dark-900 border border-brand-gold/40 relative overflow-hidden shadow-[0_15px_40px_rgba(212,175,55,0.1)]">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-[10px] font-extrabold uppercase tracking-widest border border-brand-gold/30">
                      <Flame size={12} />
                      <span>Recommended WBJEE Mock</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      Mock-01: {selectedChapter.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      Complete with {selectedChapter.mocks[0].mcqs.length} High-Yield MCQs, KaTeX step-by-step explanations, and real exam timing mode.
                    </p>

                    <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                      <span className="flex items-center gap-1 text-brand-gold">
                        <Check size={14} /> Full Solutions Included
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {selectedChapter.mocks[0].mcqs.length * 2} Mins
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedMock(selectedChapter.mocks[0]);
                      resetAssignmentState();
                    }}
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500 text-dark-950 font-bold text-sm rounded-2xl hover:scale-105 transition-all shadow-[0_0_25px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2"
                  >
                    <span>Launch Mock-01</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Chapter Mocks Grid */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <Layers size={18} className="text-brand-gold" />
                  <span>All Chapter Mocks Catalog</span>
                </h3>
                <span className="text-xs text-slate-400">Showing 20 Mock Papers</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {selectedChapter.mocks.map((mock) => {
                  const hasQuestions = mock.mcqs.length > 0;
                  return (
                    <button
                      key={mock.id}
                      onClick={() => {
                        if (hasQuestions) {
                          setSelectedMock(mock);
                          resetAssignmentState();
                        }
                      }}
                      disabled={!hasQuestions}
                      className={`group relative flex flex-col items-center justify-center p-6 bg-dark-900 rounded-3xl border ${
                        hasQuestions 
                          ? 'border-white/10 hover:border-brand-gold/60 hover:shadow-[0_10px_25px_rgba(212,175,55,0.15)] hover:-translate-y-1 cursor-pointer' 
                          : 'border-white/5 opacity-50 cursor-not-allowed'
                      } transition-all duration-300 text-center overflow-hidden`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 ${
                        hasQuestions 
                          ? 'bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-dark-950' 
                          : 'bg-white/5 text-slate-600'
                      } transition-all duration-300 shadow-sm`}>
                        <FileText size={22} />
                      </div>

                      <span className="font-display font-bold text-sm text-white group-hover:text-brand-gold transition-colors">
                        {mock.title}
                      </span>

                      <span className="text-[11px] text-slate-400 mt-1">
                        {hasQuestions ? `${mock.mcqs.length} MCQs` : 'Coming Soon'}
                      </span>

                      {hasQuestions && (
                        <span className="mt-3 text-[10px] font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-full border border-brand-gold/20">
                          Ready
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* LEVEL 3: MCQ PRACTICE / CHALLENGE SELECTION & TEST CANVAS */}
          {selectedMock && (
            <motion.div 
              key="mcqs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <button 
                onClick={() => setSelectedMock(null)}
                className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white px-4 py-2 rounded-xl bg-dark-900 border border-white/10 hover:border-brand-gold/40 transition-all mb-6"
              >
                <ArrowLeft size={16} />
                <span>Back to {selectedChapter?.title} Mocks</span>
              </button>

              <div className="bg-dark-900 rounded-3xl border border-white/10 p-6 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <span className="text-brand-gold block text-xs uppercase font-extrabold tracking-wider mb-1">
                        {selectedChapter?.title}
                      </span>
                      <span>{selectedMock.title} Assignment</span>
                    </div>

                    {isAssignmentStarted && isChallengeMode && timeRemaining !== null && !showResults && (
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-base font-mono font-bold border ${
                        timeRemaining < 60 
                          ? 'bg-red-500/10 border-red-500/40 text-red-400 animate-pulse' 
                          : 'bg-dark-950 border-brand-gold/30 text-brand-gold'
                      }`}>
                        <Timer size={20} />
                        <span>{formatTime(timeRemaining)}</span>
                      </div>
                    )}
                  </h2>

                  {/* Empty State */}
                  {selectedMock.mcqs.length === 0 ? (
                    <div className="text-center py-16 bg-dark-950/60 rounded-3xl border border-dashed border-white/10">
                      <FileText className="mx-auto text-slate-600 mb-4" size={48} />
                      <h3 className="text-xl font-bold text-white mb-2">Questions Coming Soon</h3>
                      <p className="text-slate-400 text-sm max-w-md mx-auto">
                        We are finalizing the WBJEE question set for this mock test. Please check Mock-01 or other chapters!
                      </p>
                    </div>
                  ) : !isAssignmentStarted ? (
                    /* Mode Selector Screen */
                    <div className="flex flex-col items-center justify-center py-6 px-2">
                      <div className="w-20 h-20 bg-brand-gold/10 border border-brand-gold/30 rounded-full flex items-center justify-center mb-6 text-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                        <Target size={40} />
                      </div>

                      <h3 className="text-2xl font-display font-bold text-white mb-2 text-center">
                        Select Test Experience Mode
                      </h3>
                      <p className="text-slate-400 text-sm mb-10 text-center max-w-md font-light">
                        This assignment features <span className="font-bold text-brand-gold">{selectedMock.mcqs.length}</span> multiple-choice questions with step-by-step solutions.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                        {/* Practice Mode */}
                        <button
                          onClick={() => {
                            setIsChallengeMode(false);
                            setIsAssignmentStarted(true);
                          }}
                          className="group relative flex flex-col items-start p-7 bg-dark-950 rounded-3xl border border-white/10 hover:border-brand-gold/60 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden"
                        >
                          <div className="p-3.5 bg-brand-gold/10 text-brand-gold rounded-2xl mb-5 group-hover:bg-brand-gold group-hover:text-dark-950 transition-colors">
                            <BookOpen size={28} />
                          </div>

                          <h4 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                            Practice Mode
                          </h4>

                          <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                            Learn at your own speed with relaxed timing. Great for initial concept building.
                          </p>

                          <div className="mt-auto pt-4 border-t border-white/5 w-full flex items-center justify-between text-xs font-bold text-brand-gold">
                            <span>Start Practice</span>
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </button>

                        {/* Challenge Mode */}
                        <button
                          onClick={() => {
                            setIsChallengeMode(true);
                            setTimeRemaining(selectedMock.mcqs.length * 2 * 60);
                            setIsAssignmentStarted(true);
                          }}
                          className="group relative flex flex-col items-start p-7 bg-dark-950 rounded-3xl border border-amber-500/30 hover:border-amber-400 hover:shadow-[0_15px_30px_rgba(245,158,11,0.2)] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden"
                        >
                          <div className="p-3.5 bg-amber-500/10 text-amber-400 rounded-2xl mb-5 group-hover:bg-amber-500 group-hover:text-dark-950 transition-colors">
                            <Clock size={28} />
                          </div>

                          <h4 className="text-xl font-display font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                            WBJEE Timed Challenge
                          </h4>

                          <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                            Simulate real exam pressure with a {selectedMock.mcqs.length * 2} min timer and negative marking (-0.25).
                          </p>

                          <div className="mt-auto pt-4 border-t border-white/5 w-full flex items-center justify-between text-xs font-bold text-amber-400">
                            <span>Launch Exam Simulator</span>
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </button>
                      </div>
                    </div>
                  ) : showResults && !isReviewing ? (
                    /* Score Summary View */
                    <div className="w-full text-center py-6">
                      <div className="w-20 h-20 rounded-full bg-brand-gold/10 border border-brand-gold/30 mx-auto flex items-center justify-center text-brand-gold mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                        {calculateScore().percentage >= 80 ? <Trophy size={40} /> : <Target size={40} />}
                      </div>

                      <h2 className="text-3xl font-display font-bold text-white mb-2">
                        {calculateScore().percentage >= 80 ? 'Outstanding Ranker Score! 🎉' : calculateScore().percentage >= 60 ? 'Good Effort! 👏' : 'Keep Practicing! 💪'}
                      </h2>

                      <p className="text-xs text-slate-400 mb-8">
                        Completed assessment for <span className="text-brand-gold font-bold">{selectedMock.title}</span>
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-dark-950 p-5 rounded-2xl border border-white/10 text-center">
                          <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Score</span>
                          <span className="text-3xl font-display font-bold text-brand-gold">{calculateScore().score}</span>
                        </div>
                        <div className="bg-dark-950 p-5 rounded-2xl border border-emerald-500/30 text-center">
                          <span className="text-xs text-emerald-400 uppercase tracking-wider block mb-1">Correct</span>
                          <span className="text-3xl font-display font-bold text-emerald-400">{calculateScore().correct}</span>
                        </div>
                        <div className="bg-dark-950 p-5 rounded-2xl border border-red-500/30 text-center">
                          <span className="text-xs text-red-400 uppercase tracking-wider block mb-1">Incorrect</span>
                          <span className="text-3xl font-display font-bold text-red-400">{calculateScore().incorrect}</span>
                        </div>
                        <div className="bg-dark-950 p-5 rounded-2xl border border-white/10 text-center">
                          <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Unanswered</span>
                          <span className="text-3xl font-display font-bold text-slate-300">{calculateScore().unanswered}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                        <button
                          onClick={() => { setIsReviewing(true); setCurrentQuestionIndex(0); }}
                          className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500 text-dark-950 font-bold text-xs rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2"
                        >
                          <BookOpen size={16} />
                          <span>Review Solutions</span>
                        </button>

                        <button
                          onClick={() => setShowMarksheetModal(true)}
                          className="w-full sm:w-auto px-6 py-3.5 bg-dark-950 text-brand-gold font-bold text-xs rounded-2xl border border-brand-gold/40 hover:bg-brand-gold/10 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                        >
                          <Award size={16} />
                          <span>Official Merit Marksheet & Certificate</span>
                        </button>

                        <button
                          onClick={resetAssignmentState}
                          className="w-full sm:w-auto px-6 py-3.5 bg-dark-950 text-white font-bold text-xs rounded-2xl border border-white/10 hover:border-brand-gold/40 transition-all flex items-center justify-center gap-2"
                        >
                          <RefreshCcw size={16} />
                          <span>Try Again</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Active MCQ Question View */
                    <div>
                      {(() => {
                        const q = selectedMock.mcqs[currentQuestionIndex];
                        const isLastQuestion = currentQuestionIndex === selectedMock.mcqs.length - 1;
                        const progress = ((currentQuestionIndex + 1) / selectedMock.mcqs.length) * 100;

                        return (
                          <div>
                            {/* Question Progress Header */}
                            <div className="flex items-center justify-between gap-4 mb-6 bg-dark-950 p-4 rounded-2xl border border-white/10">
                              <span className="text-xs font-bold text-white bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                                Question {currentQuestionIndex + 1} of {selectedMock.mcqs.length}
                              </span>

                              <div className="flex-1 max-w-xs h-2 bg-dark-800 rounded-full overflow-hidden border border-white/5">
                                <div 
                                  className="h-full bg-gradient-to-r from-brand-gold to-yellow-300 transition-all duration-300" 
                                  style={{ width: `${progress}%` }}
                                ></div>
                              </div>
                            </div>

                            {/* Question Card */}
                            <div className="bg-dark-950 rounded-3xl p-6 sm:p-8 border border-white/10 mb-6">
                              <div className="text-lg sm:text-xl text-white font-medium leading-relaxed mb-8 prose prose-invert max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                  {q.question}
                                </ReactMarkdown>
                              </div>

                              {/* MCQ Option Radio List */}
                              <div className="space-y-3">
                                {q.options.map((opt, optIdx) => {
                                  const isSelected = selectedAnswers[q.id] === optIdx;
                                  const isCorrect = q.correctAnswer === optIdx;

                                  let cardStyle = "bg-dark-900 border-white/10 text-slate-300 hover:border-brand-gold/40";
                                  if (isReviewing) {
                                    if (isCorrect) {
                                      cardStyle = "bg-emerald-500/10 border-emerald-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.15)]";
                                    } else if (isSelected && !isCorrect) {
                                      cardStyle = "bg-red-500/10 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.15)]";
                                    } else {
                                      cardStyle = "bg-dark-900 border-white/5 text-slate-500 opacity-50";
                                    }
                                  } else if (isSelected) {
                                    cardStyle = "bg-brand-gold/15 border-brand-gold text-white shadow-[0_0_20px_rgba(212,175,55,0.2)]";
                                  }

                                  return (
                                    <button
                                      key={optIdx}
                                      onClick={() => handleOptionSelect(q.id, optIdx)}
                                      disabled={isReviewing}
                                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center gap-4 ${cardStyle}`}
                                    >
                                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                        isSelected ? 'border-brand-gold bg-brand-gold text-dark-950 font-bold text-xs' : 'border-slate-600'
                                      }`}>
                                        {isSelected && <CheckCircle2 size={16} />}
                                      </div>
                                      <div className="text-sm sm:text-base font-medium flex-1">
                                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                          {opt}
                                        </ReactMarkdown>
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Step-by-Step KaTeX Solution Box (Review Mode) */}
                              {isReviewing && (
                                <div className="mt-8 p-6 rounded-2xl bg-dark-900 border border-brand-gold/30 shadow-inner">
                                  <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-wider mb-3">
                                    <Sparkles size={16} />
                                    <span>Detailed Step-by-Step Explanation</span>
                                  </div>
                                  <div className="text-slate-200 text-sm leading-relaxed prose prose-invert max-w-none">
                                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                      {q.explanation}
                                    </ReactMarkdown>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Bottom Navigation Buttons */}
                            <div className="flex items-center justify-between gap-4">
                              <button
                                onClick={handlePrev}
                                disabled={currentQuestionIndex === 0}
                                className="px-5 py-3 rounded-2xl bg-dark-950 text-slate-300 border border-white/10 hover:border-brand-gold/40 disabled:opacity-40 transition-all text-xs font-bold flex items-center gap-2"
                              >
                                <ArrowLeft size={16} />
                                <span>Previous</span>
                              </button>

                              {!isLastQuestion ? (
                                <button
                                  onClick={handleNext}
                                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500 text-dark-950 font-bold text-xs hover:scale-105 transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] flex items-center gap-2"
                                >
                                  <span>Next Question</span>
                                  <ChevronRight size={16} />
                                </button>
                              ) : !isReviewing ? (
                                <button
                                  onClick={handleFinishAssignment}
                                  className="px-6 py-3 rounded-2xl bg-emerald-500 text-dark-950 font-bold text-xs hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-lg"
                                >
                                  <span>Submit Assignment</span>
                                  <CheckCircle2 size={16} />
                                </button>
                              ) : (
                                <button
                                  onClick={() => setIsReviewing(false)}
                                  className="px-6 py-3 rounded-2xl bg-brand-gold text-dark-950 font-bold text-xs hover:opacity-90 transition-all"
                                >
                                  Back to Dashboard
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>

      {/* ========================================================= */}
      {/* "VIEW ALL MOCKS" OVERLAY MODAL                            */}
      {/* ========================================================= */}
      <AnimatePresence>
        {showViewAllModal && selectedChapter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-dark-900 border border-brand-gold/40 rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden relative"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-dark-950">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold block mb-1">
                    Full Chapter Mocks Directory
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {selectedChapter.title} — All 20 Mock Papers
                  </h3>
                </div>

                <button
                  onClick={() => setShowViewAllModal(false)}
                  className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Search Bar */}
              <div className="p-4 bg-dark-900 border-b border-white/5">
                <div className="relative">
                  <Search className="absolute left-4 top-3 text-slate-400" size={16} />
                  <input 
                    type="text"
                    value={modalSearch}
                    onChange={(e) => setModalSearch(e.target.value)}
                    placeholder="Search mock paper (e.g., Mock-01)..."
                    className="w-full bg-dark-950 border border-white/10 focus:border-brand-gold text-white placeholder-slate-500 rounded-xl py-2.5 pl-10 pr-4 text-xs outline-none transition-all"
                  />
                </div>
              </div>

              {/* Modal Grid Body */}
              <div className="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 custom-scrollbar">
                {selectedChapter.mocks
                  .filter(m => m.title.toLowerCase().includes(modalSearch.toLowerCase()))
                  .map((mock) => {
                    const hasQuestions = mock.mcqs.length > 0;
                    return (
                      <button
                        key={`modal-${mock.id}`}
                        onClick={() => {
                          if (hasQuestions) {
                            setSelectedMock(mock);
                            resetAssignmentState();
                            setShowViewAllModal(false);
                          }
                        }}
                        disabled={!hasQuestions}
                        className={`group p-4 rounded-2xl border text-center transition-all ${
                          hasQuestions 
                            ? 'bg-dark-950 border-white/10 hover:border-brand-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] cursor-pointer' 
                            : 'bg-dark-950/40 border-white/5 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center ${
                          hasQuestions ? 'bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-dark-950' : 'bg-white/5 text-slate-600'
                        } transition-colors`}>
                          <FileText size={18} />
                        </div>

                        <span className="font-bold text-xs text-white block group-hover:text-brand-gold transition-colors">
                          {mock.title}
                        </span>

                        <span className="text-[10px] text-slate-400 block mt-1">
                          {hasQuestions ? `${mock.mcqs.length} Questions` : 'Coming Soon'}
                        </span>
                      </button>
                    );
                  })}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-white/10 bg-dark-950 text-right">
                <button
                  onClick={() => setShowViewAllModal(false)}
                  className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  Close Modal
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Official Student Merit Marksheet Modal */}
      <StudentMarksheetModal
        isOpen={showMarksheetModal}
        onClose={() => setShowMarksheetModal(false)}
        data={selectedMock ? {
          studentName: 'WBJEE Aspirant',
          testTitle: `${selectedMock.title} (${selectedChapter?.title || 'WBJEE'})`,
          topicTitle: selectedChapter?.title || 'WBJEE Mathematics',
          score: calculateScore().score,
          maxScore: calculateScore().maxScore,
          correctAnswers: calculateScore().correct,
          incorrectAnswers: calculateScore().incorrect,
          unanswered: calculateScore().unanswered,
          percentage: calculateScore().percentage,
          isChallengeMode: isChallengeMode
        } : {
          studentName: 'Rohan Sharma (Sample Candidate)',
          testTitle: 'WBJEE Rankers Mock Test 01: Calculus & Coordinate Geometry',
          topicTitle: 'Unit 2: Calculus & Coordinate Geometry',
          score: 18,
          maxScore: 20,
          correctAnswers: 18,
          incorrectAnswers: 2,
          unanswered: 0,
          percentage: 90,
          isChallengeMode: true
        }}
      />

    </div>
  );
};
