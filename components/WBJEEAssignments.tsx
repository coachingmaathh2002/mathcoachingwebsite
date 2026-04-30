import React, { useState, useEffect } from 'react';
import { Folder, FileText, ChevronRight, BookOpen, ArrowLeft, CheckCircle2, Clock, Trophy, Target, AlertCircle, RefreshCcw, Timer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

// ── Data ────────────────────────────────────────────────────────────────────────

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

// Add some sample MCQs to the first chapter to demonstrate functionality
// (Removed as we now have actual data)

// ── Components ──────────────────────────────────────────────────────────────────

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
          colors: ['#4f46e5', '#9333ea', '#10b981', '#f59e0b']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 },
          colors: ['#4f46e5', '#9333ea', '#10b981', '#f59e0b']
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


  // Helper to get distinct colors for units
  const getUnitColors = (index: number) => {
    const colors = [
      { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', hover: 'hover:border-blue-400', iconBg: 'bg-blue-100', iconHover: 'group-hover:bg-blue-600' },
      { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', hover: 'hover:border-emerald-400', iconBg: 'bg-emerald-100', iconHover: 'group-hover:bg-emerald-600' },
      { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', hover: 'hover:border-purple-400', iconBg: 'bg-purple-100', iconHover: 'group-hover:bg-purple-600' },
      { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600', hover: 'hover:border-rose-400', iconBg: 'bg-rose-100', iconHover: 'group-hover:bg-rose-600' },
      { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', hover: 'hover:border-amber-400', iconBg: 'bg-amber-100', iconHover: 'group-hover:bg-amber-600' },
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-white rounded-2xl shadow-sm border border-indigo-100">
              <BookOpen className="text-indigo-600" size={36} />
            </div>
            WBJEE Assignments
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl">
            অধ্যায়ভিত্তিক MCQ প্রশ্ন ও সমাধান - WBJEE প্রস্তুতির জন্য
          </p>
        </div>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-3 text-sm text-gray-600 mb-8 bg-white/80 backdrop-blur-md px-5 py-4 rounded-2xl shadow-sm border border-gray-100/50">
          <button 
            onClick={() => { 
              setSelectedUnit(null); 
              setSelectedChapter(null); 
              setSelectedMock(null);
              resetAssignmentState(); 
            }}
            className="hover:text-indigo-600 font-medium transition-colors flex items-center gap-2"
          >
            <Folder size={16} />
            All Units
          </button>
          
          {selectedUnit && (
            <>
              <ChevronRight size={16} className="text-gray-400" />
              <button 
                onClick={() => { 
                  setSelectedChapter(null); 
                  setSelectedMock(null);
                  resetAssignmentState();
                }}
                className={`hover:text-indigo-600 transition-colors ${!selectedChapter ? 'font-bold text-indigo-600' : 'font-medium'}`}
              >
                {selectedUnit.title}
              </button>
            </>
          )}

          {selectedChapter && (
            <>
              <ChevronRight size={16} className="text-gray-400" />
              <button 
                onClick={() => { 
                  setSelectedMock(null); 
                  resetAssignmentState();
                }}
                className={`hover:text-indigo-600 transition-colors ${!selectedMock ? 'font-bold text-indigo-600' : 'font-medium'}`}
              >
                {selectedChapter.title}
              </button>
            </>
          )}

          {selectedMock && (
            <>
              <ChevronRight size={16} className="text-gray-400" />
              <span className="font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{selectedMock.title}</span>
            </>
          )}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          
          {/* Level 1: Units */}
          {!selectedUnit && !selectedChapter && (
            <motion.div 
              key="units"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {wbjeeSyllabus.map((unit, index) => {
                const colors = getUnitColors(index);
                return (
                  <button
                    key={unit.id}
                    onClick={() => setSelectedUnit(unit)}
                    className={`flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-left group ${colors.hover}`}
                  >
                    <div className={`p-4 ${colors.iconBg} ${colors.text} rounded-xl ${colors.iconHover} group-hover:text-white transition-all duration-300 shadow-inner`}>
                      <Folder size={28} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg text-gray-900 group-hover:${colors.text} transition-colors line-clamp-2`}>
                        {unit.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                          {unit.chapters.length} Chapters
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          )}

          {/* Level 2: Chapters */}
          {selectedUnit && !selectedChapter && (
            <motion.div 
              key="chapters"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <button 
                onClick={() => setSelectedUnit(null)}
                className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 mb-6 font-medium transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 w-fit hover:shadow-md"
              >
                <ArrowLeft size={18} />
                Back to Units
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {selectedUnit.chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => {
                      setSelectedChapter(chapter);
                      resetAssignmentState();
                    }}
                    className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left group relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
                        <FileText className="text-gray-400 group-hover:text-indigo-600 transition-colors" size={24} />
                      </div>
                      <div>
                        <span className="font-bold text-gray-800 group-hover:text-indigo-700 transition-colors block text-lg">
                          {chapter.title}
                        </span>
                        <span className="text-sm text-gray-500 mt-1 block">
                          20 Mock Tests
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                      <ChevronRight className="text-gray-400 group-hover:text-indigo-600 transition-colors" size={20} />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Level 2.5: Mocks */}
          {selectedChapter && !selectedMock && (
            <motion.div 
              key="mocks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <button 
                onClick={() => setSelectedChapter(null)}
                className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 mb-6 font-medium transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 w-fit hover:shadow-md"
              >
                <ArrowLeft size={18} />
                Back to {selectedUnit?.title}
              </button>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {selectedChapter.mocks.map((mock) => (
                  <button
                    key={mock.id}
                    onClick={() => {
                      setSelectedMock(mock);
                      resetAssignmentState();
                    }}
                    className={`flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border ${mock.mcqs.length > 0 ? 'border-gray-100 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1 cursor-pointer' : 'border-dashed border-gray-200 cursor-not-allowed opacity-70'} transition-all duration-300 text-center group`}
                    disabled={mock.mcqs.length === 0}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${mock.mcqs.length > 0 ? 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' : 'bg-gray-50 text-gray-400'} transition-colors`}>
                      <FileText size={24} />
                    </div>
                    <span className={`font-bold ${mock.mcqs.length > 0 ? 'text-gray-800' : 'text-gray-400'}`}>
                      {mock.title}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      {mock.mcqs.length > 0 ? `${mock.mcqs.length} Qs` : 'Coming Soon'}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Level 3: MCQs */}
          {selectedMock && (
            <motion.div 
              key="mcqs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <button 
                onClick={() => setSelectedMock(null)}
                className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 mb-6 font-medium transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 w-fit hover:shadow-md"
              >
                <ArrowLeft size={18} />
                Back to {selectedChapter?.title}
              </button>

              <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-gray-100 p-6 md:p-10 overflow-hidden relative">
                {/* Decorative background blob */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50 blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-8 pb-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 flex flex-col gap-1">
                      <span>{selectedChapter?.title}</span>
                      <span className="text-xl opacity-80">{selectedMock.title}</span>
                    </span>
                    {isAssignmentStarted && isChallengeMode && timeRemaining !== null && !showResults && (
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-lg font-bold border-2 ${timeRemaining < 60 ? 'bg-rose-50 border-rose-200 text-rose-600 animate-pulse' : 'bg-indigo-50 border-indigo-100 text-indigo-700'}`}>
                        <Timer size={24} />
                        {formatTime(timeRemaining)}
                      </div>
                    )}
                  </h2>

                  {selectedMock.mcqs.length === 0 ? (
                    <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm mb-5">
                        <FileText className="text-indigo-400" size={40} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Questions Coming Soon</h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        We are currently updating the MCQ assignments for this mock test. Please check back later!
                      </p>
                    </div>
                  ) : !isAssignmentStarted ? (
                    <div className="flex flex-col items-center justify-center py-8 px-4">
                      <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6 relative">
                        <div className="absolute inset-0 bg-indigo-200 rounded-full animate-ping opacity-20"></div>
                        <Target className="text-indigo-600" size={48} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start?</h3>
                      <p className="text-gray-500 mb-10 text-center max-w-md">
                        This assignment contains <span className="font-bold text-indigo-600">{selectedMock.mcqs.length}</span> multiple-choice questions. Choose your preferred mode below.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                        {/* Practice Mode */}
                        <button
                          onClick={() => {
                            setIsChallengeMode(false);
                            setIsAssignmentStarted(true);
                          }}
                          className="flex flex-col items-start p-6 md:p-8 bg-white rounded-3xl border-2 border-indigo-100 hover:border-indigo-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden group"
                        >
                          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <BookOpen size={100} className="text-indigo-600" />
                          </div>
                          <div className="p-4 bg-indigo-50 rounded-2xl mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                            <BookOpen className="text-indigo-600 group-hover:text-white" size={32} />
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">Practice Mode</h4>
                          <p className="text-base text-gray-500 mb-6 min-h-[3rem]">Learn at your own pace. Best for understanding concepts.</p>
                          <ul className="text-sm font-medium text-gray-600 space-y-3 mb-8 w-full">
                            <li className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
                              <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0"/>
                              <span>No Time Limit</span>
                            </li>
                            <li className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
                              <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0"/>
                              <span>Review answers instantly</span>
                            </li>
                            <li className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
                              <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0"/>
                              <span>+1 Correct / 0 Wrong</span>
                            </li>
                          </ul>
                          <span className="mt-auto px-6 py-4 w-full text-center bg-indigo-50 text-indigo-700 font-bold rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 text-lg">
                            Start Practice
                          </span>
                        </button>

                        {/* Challenge Mode */}
                        <button
                          onClick={() => {
                            setIsChallengeMode(true);
                            setTimeRemaining(selectedMock.mcqs.length * 2 * 60);
                            setIsAssignmentStarted(true);
                          }}
                          className="flex flex-col items-start p-6 md:p-8 bg-white rounded-3xl border-2 border-rose-100 hover:border-rose-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden group"
                        >
                          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Clock size={100} className="text-rose-600" />
                          </div>
                          <div className="absolute -top-4 -right-4 p-4 bg-rose-500 text-white text-xs font-bold rounded-xl rotate-12 group-hover:rotate-6 transition-transform">
                            WBJEE Sim
                          </div>
                          <div className="p-4 bg-rose-50 rounded-2xl mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                            <Clock className="text-rose-600 group-hover:text-white" size={32} />
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">Challenge Mode</h4>
                          <p className="text-base text-gray-500 mb-6 min-h-[3rem]">Simulate real exam conditions to improve time management.</p>
                          <ul className="text-sm font-medium text-gray-600 space-y-3 mb-8 w-full">
                            <li className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
                              <AlertCircle size={18} className="text-rose-500 flex-shrink-0"/>
                              <span>{selectedMock.mcqs.length * 2} Mins Timer</span>
                            </li>
                            <li className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
                              <AlertCircle size={18} className="text-rose-500 flex-shrink-0"/>
                              <span>Auto-submit when time is up</span>
                            </li>
                            <li className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
                              <AlertCircle size={18} className="text-rose-500 flex-shrink-0"/>
                              <span>+1 Correct / -0.25 Wrong</span>
                            </li>
                          </ul>
                          <span className="mt-auto px-6 py-4 w-full text-center bg-rose-50 text-rose-700 font-bold rounded-xl group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300 text-lg">
                            Start Challenge
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : showResults && !isReviewing ? (
                    <div className="w-full bg-white rounded-3xl py-8 text-center">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 mb-6 shadow-inner">
                          {calculateScore().percentage >= 80 ? <Trophy className="text-amber-500" size={48} /> : <Target className="text-indigo-600" size={48} />}
                      </div>
                      <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                          {calculateScore().percentage >= 80 ? 'Outstanding! 🎉' : calculateScore().percentage >= 60 ? 'Good Effort! 👏' : 'Keep Practicing! 💪'}
                      </h2>
                      <p className="text-lg text-gray-500 mb-10">You've completed the assessment for <span className="font-bold text-indigo-600">{selectedMock.title}</span>.</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100 border-b-4 border-b-indigo-500 text-center hover:-translate-y-1 transition-all duration-300">
                          <div className="text-sm text-gray-500 font-medium mb-2 uppercase tracking-wider">Your Score</div>
                          <div className="text-4xl font-black text-indigo-600">{calculateScore().score}</div>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 border-b-4 border-b-emerald-500 text-center hover:-translate-y-1 transition-all duration-300">
                          <div className="text-sm text-emerald-600 font-medium mb-2 uppercase tracking-wider">Correct</div>
                          <div className="text-4xl font-black text-emerald-600">{calculateScore().correct}</div>
                        </div>
                        <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 border-b-4 border-b-rose-500 text-center hover:-translate-y-1 transition-all duration-300">
                          <div className="text-sm text-rose-600 font-medium mb-2 uppercase tracking-wider">Incorrect</div>
                          <div className="text-4xl font-black text-rose-600">{calculateScore().incorrect}</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 border-b-4 border-b-gray-400 text-center hover:-translate-y-1 transition-all duration-300">
                          <div className="text-sm text-gray-500 font-medium mb-2 uppercase tracking-wider">Unanswered</div>
                          <div className="text-4xl font-black text-gray-600">{calculateScore().unanswered}</div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => { setIsReviewing(true); setCurrentQuestionIndex(0); }} className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-3">
                          <BookOpen size={20} />
                          Review Answers
                        </button>
                        <button onClick={resetAssignmentState} className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-bold rounded-xl hover:bg-gray-50 border-2 border-gray-200 transition-all shadow-sm flex items-center justify-center gap-3 hover:border-gray-300">
                          <RefreshCcw size={20} />
                          Try Again
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full animate-fadeIn" key={currentQuestionIndex}>
                      {(() => {
                        const q = selectedMock.mcqs[currentQuestionIndex];
                        const isLastQuestion = currentQuestionIndex === selectedMock.mcqs.length - 1;
                        const progress = ((currentQuestionIndex + 1) / selectedMock.mcqs.length) * 100;

                        return (
                          <div className="w-full">
                            {/* Progress / Status Header */}
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8 bg-slate-900 rounded-2xl p-4 shadow-lg border border-slate-800">
                              <div className="flex items-center gap-4 flex-1">
                                  <div className="text-white font-black bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 shadow-inner">
                                      Q.{currentQuestionIndex + 1} <span className="text-slate-400 text-sm font-medium">/ {selectedMock.mcqs.length}</span>
                                  </div>
                                  <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden max-w-[200px] md:max-w-sm border border-slate-700">
                                      <div className="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
                                  </div>
                              </div>
                            </div>

                            {/* Deep Colourful Premium Question Card */}
                            <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617] rounded-3xl p-6 md:p-10 lg:p-12 border border-indigo-500/20 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.4)] relative overflow-hidden">
                              {/* Decorative Elements */}
                              <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 blur-[100px] rounded-full pointer-events-none"></div>
                              <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

                              <div className="relative z-10">
                                  <div className="text-xl md:text-2xl font-medium text-white leading-relaxed tracking-wide mb-10 prose prose-invert prose-p:text-white prose-headings:text-white prose-strong:text-white prose-em:text-white prose-code:text-indigo-200 max-w-none">
                                      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                        {q.question}
                                      </ReactMarkdown>
                                  </div>

                                  <div className="space-y-4">
                                    {q.options.map((opt, optIdx) => {
                                      const isSelected = selectedAnswers[q.id] === optIdx;
                                      const isCorrect = q.correctAnswer === optIdx;
                                      
                                      let optionClass = "w-full text-left p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group flex items-center justify-between ";
                                      let indicatorClass = "w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ";
                                      
                                      if (isReviewing) {
                                          if (isCorrect) {
                                            optionClass += "bg-emerald-500/20 border-emerald-400 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.15)] z-10";
                                            indicatorClass += "border-emerald-400 bg-emerald-500 text-white";
                                          } else if (isSelected && !isCorrect) {
                                            optionClass += "bg-rose-500/20 border-rose-400 text-rose-100 shadow-[0_0_20px_rgba(244,63,94,0.15)] z-10";
                                            indicatorClass += "border-rose-400 bg-rose-500 text-white";
                                          } else {
                                            optionClass += "bg-slate-800/40 border-slate-700/50 text-slate-400 opacity-60";
                                            indicatorClass += "border-slate-600/50";
                                          }
                                      } else {
                                          optionClass += isSelected 
                                            ? "bg-indigo-600/40 border-indigo-400 text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] scale-[1.01] z-10"
                                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]";
                                          indicatorClass += isSelected
                                            ? "border-indigo-400 bg-indigo-500 text-white"
                                            : "border-white/30 group-hover:border-indigo-400/70 text-transparent";
                                      }

                                      return (
                                          <button
                                            key={optIdx}
                                            onClick={() => handleOptionSelect(q.id, optIdx)}
                                            disabled={isReviewing}
                                            className={optionClass}
                                          >
                                            <div className="flex items-center gap-5 relative z-10 w-full">
                                                <div className={indicatorClass}>
                                                  {isReviewing ? (
                                                      isCorrect ? <CheckCircle2 size={20} /> : (isSelected ? <div className="w-3 h-0.5 bg-white rotate-45 absolute"><div className="w-3 h-0.5 bg-white -rotate-90"></div></div> : null)
                                                  ) : (
                                                      isSelected ? <div className="w-3 h-3 bg-white rounded-full"></div> : <div className="w-2 h-2 bg-indigo-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                  )}
                                                </div>
                                                <div className={`prose-p:m-0 prose-headings:m-0 font-medium text-base md:text-lg w-full text-left flex-1 ${isSelected && !isReviewing ? 'text-white' : 'text-inherit'}`}>
                                                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                                      {opt}
                                                  </ReactMarkdown>
                                                </div>
                                            </div>
                                            {isReviewing && isCorrect && <CheckCircle2 className="text-emerald-400 flex-shrink-0 ml-4 drop-shadow-md hidden sm:block" size={28} />}
                                          </button>
                                      );
                                    })}
                                  </div>

                                  {isReviewing && (
                                    <motion.div 
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="mt-8 p-6 lg:p-8 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-inner relative overflow-hidden"
                                    >
                                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 to-indigo-500"></div>
                                      <div className="flex items-center gap-3 mb-4">
                                          <div className="p-2.5 bg-blue-500/20 rounded-xl text-blue-400 shadow-inner">
                                            <FileText size={22} />
                                          </div>
                                          <span className="font-extrabold text-blue-300 text-lg tracking-wide">ব্যাখ্যা (Explanation)</span>
                                      </div>
                                      <div className="text-blue-100/90 leading-relaxed text-base md:text-lg prose prose-invert prose-p:text-blue-100 prose-code:text-indigo-300 max-w-none">
                                          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                            {q.explanation}
                                          </ReactMarkdown>
                                      </div>
                                    </motion.div>
                                  )}
                              </div>
                            </div>

                            {/* Navigation Controls */}
                            <div className="flex items-center justify-between mt-8 md:mt-10">
                              <button
                                onClick={handlePrev}
                                disabled={currentQuestionIndex === 0}
                                className="px-6 py-4 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                              >
                                  <ArrowLeft size={20} />
                                  <span className="hidden sm:inline">Previous</span>
                              </button>

                              {/* Desktop Question Palette */}
                              <div className="hidden md:flex flex-wrap items-center justify-center gap-2.5 max-w-lg mx-6 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                  {selectedMock.mcqs.map((mq, mqIdx) => {
                                      const isAnswered = selectedAnswers[mq.id] !== undefined;
                                      const isCurrent = currentQuestionIndex === mqIdx;
                                      let dotClass = "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all border-2 ";
                                      
                                      if (isReviewing) {
                                          const correct = mq.correctAnswer === selectedAnswers[mq.id];
                                          if (isAnswered) {
                                              dotClass += correct ? "bg-emerald-50 border-emerald-400 text-emerald-700 " : "bg-rose-50 border-rose-400 text-rose-700 ";
                                          } else {
                                              dotClass += "bg-gray-50 border-gray-200 text-gray-400 ";
                                          }
                                          if (isCurrent) dotClass += "ring-2 ring-offset-2 ring-indigo-500 scale-110 ";
                                      } else {
                                          if (isCurrent) {
                                              dotClass += "border-indigo-600 ring-2 ring-indigo-100 ring-offset-2 bg-indigo-50 text-indigo-700 scale-110 ";
                                          } else if (isAnswered) {
                                              dotClass += "bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 ";
                                          } else {
                                              dotClass += "bg-white border-gray-200 text-gray-500 hover:border-indigo-300 hover:text-indigo-600 ";
                                          }
                                      }

                                      return (
                                          <button key={mqIdx} onClick={() => setCurrentQuestionIndex(mqIdx)} className={dotClass}>
                                              {mqIdx + 1}
                                          </button>
                                      );
                                  })}
                              </div>

                              {!isLastQuestion ? (
                                  <button
                                    onClick={handleNext}
                                    className="px-6 sm:px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg shadow-gray-300 hover:bg-black transition-all flex items-center gap-2 hover:-translate-y-0.5"
                                  >
                                    <span className="hidden sm:inline">Next</span>
                                    <ChevronRight size={20} />
                                  </button>
                              ) : (
                                  !isReviewing ? (
                                    <button
                                        onClick={handleFinishAssignment}
                                        className="px-6 sm:px-8 py-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-black rounded-xl shadow-xl shadow-indigo-200 hover:from-indigo-700 hover:to-fuchsia-700 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                                    >
                                        Submit
                                        <CheckCircle2 size={24} />
                                    </button>
                                  ) : (
                                    <button
                                        onClick={() => setIsReviewing(false)}
                                        className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:-translate-y-0.5"
                                    >
                                        Dashboard
                                    </button>
                                  )
                              )}
                            </div>
                            
                            {/* Mobile Question Palette */}
                            <div className="mt-8 md:hidden p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                  <Target size={14} /> Questions Review
                                </h4>
                                <div className="flex flex-wrap items-center gap-2.5">
                                  {selectedMock.mcqs.map((mq, mqIdx) => {
                                      const isAnswered = selectedAnswers[mq.id] !== undefined;
                                      const isCurrent = currentQuestionIndex === mqIdx;
                                      let dotClass = "w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all border-2 ";
                                      
                                      if (isReviewing) {
                                          const correct = mq.correctAnswer === selectedAnswers[mq.id];
                                          if (isAnswered) {
                                              dotClass += correct ? "bg-emerald-50 border-emerald-400 text-emerald-700 " : "bg-rose-50 border-rose-400 text-rose-700 ";
                                          } else {
                                              dotClass += "bg-gray-50 border-gray-200 text-gray-400 ";
                                          }
                                          if (isCurrent) dotClass += "ring-2 ring-offset-2 ring-indigo-500 ";
                                      } else {
                                          if (isCurrent) {
                                              dotClass += "border-indigo-600 bg-indigo-50 text-indigo-700 ";
                                          } else if (isAnswered) {
                                              dotClass += "bg-indigo-600 border-indigo-600 text-white ";
                                          } else {
                                              dotClass += "bg-white border-gray-200 text-gray-400 ";
                                          }
                                      }

                                      return (
                                          <button key={mqIdx} onClick={() => setCurrentQuestionIndex(mqIdx)} className={dotClass}>
                                              {mqIdx + 1}
                                          </button>
                                      );
                                  })}
                                </div>
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
    </div>
  );
};
