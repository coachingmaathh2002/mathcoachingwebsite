import React, { useState } from 'react';
import { Folder, FileText, ChevronRight, BookOpen, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
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
import { definiteIntegralMCQs } from '../data/definiteIntegralMCQs';
import { areaUnderCurvesMCQs } from '../data/areaUnderCurvesMCQs';
import { differentiationMCQs } from '../data/differentiationMCQs';
import { applicationsOfDerivativesMCQs } from '../data/applicationsOfDerivativesMCQs';
import { vectorAlgebraMCQs } from '../data/vectorAlgebraMCQs';
import { linesPlanes3DMCQs } from '../data/linesPlanes3DMCQs';

// ── Types ───────────────────────────────────────────────────────────────────────

export type MCQ = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type Chapter = {
  id: string;
  title: string;
  mcqs: MCQ[];
};

type Unit = {
  id: string;
  title: string;
  chapters: Chapter[];
};

// ── Data ────────────────────────────────────────────────────────────────────────

const wbjeeSyllabus: Unit[] = [
  {
    id: 'algebra',
    title: 'বীজগণিত (Algebra)',
    chapters: [
      { id: 'alg-1', title: 'দ্বিঘাত সমীকরণ (Quadratic Equations)', mcqs: quadraticEquationsMCQs },
      { id: 'alg-2', title: 'সমান্তর ও গুণোত্তর প্রগতি (AP & GP)', mcqs: apGpMCQs },
      { id: 'alg-3', title: 'লগারিদম (Logarithms)', mcqs: logarithmsMCQs },
      { id: 'alg-4', title: 'জটিল রাশি (Complex Numbers)', mcqs: complexNumbersMCQs },
      { id: 'alg-5', title: 'বিন্যাস ও সমবায় (Permutations & Combinations)', mcqs: permutationsMCQs },
      { id: 'alg-6', title: 'দ্বিপদ উপপাদ্য (Binomial Theorem)', mcqs: binomialMCQs },
      { id: 'alg-7', title: 'ম্যাট্রিক্স ও নির্ণায়ক (Matrices & Determinants)', mcqs: matricesMCQs },
      { id: 'alg-8', title: 'সেট, সম্বন্ধ ও চিত্রণ (Sets, Relations & Functions)', mcqs: setsMCQs },
    ],
  },
  {
    id: 'trigonometry',
    title: 'ত্রিকোণমিতি (Trigonometry)',
    chapters: [
      { id: 'trig-1', title: 'যৌগিক কোণ (Compound Angles)', mcqs: [] },
      { id: 'trig-2', title: 'যোগফল ও গুণফলের রূপান্তর (Transformation Formulas)', mcqs: [] },
      { id: 'trig-3', title: 'গুণিতক ও অংশ কোণ (Multiple & Sub-multiple Angles)', mcqs: [] },
      { id: 'trig-4', title: 'ত্রিকোণমিতিক সমীকরণ (Trigonometric Equations)', mcqs: [] },
      { id: 'trig-5', title: 'বিপরীত ত্রিকোণমিতিক অপেক্ষক (Inverse Trigonometric Functions)', mcqs: [] },
      { id: 'trig-6', title: 'ত্রিভুজের ধর্মাবলী (Properties of Triangles)', mcqs: [] },
    ],
  },
  {
    id: 'coordinate',
    title: 'স্থানাঙ্ক জ্যামিতি (Coordinate Geometry)',
    chapters: [
      { id: 'coord-1', title: 'সরলরেখা (Straight Lines)', mcqs: [] },
      { id: 'coord-2', title: 'বৃত্ত (Circles)', mcqs: [] },
      { id: 'coord-3', title: 'অধিবৃত্ত (Parabola)', mcqs: [] },
      { id: 'coord-4', title: 'উপবৃত্ত (Ellipse)', mcqs: [] },
      { id: 'coord-5', title: 'পরাবৃত্ত (Hyperbola)', mcqs: [] },
    ],
  },
  {
    id: 'calculus',
    title: 'ক্যালকুলাস (Calculus)',
    chapters: [
      { id: 'calc-1', title: 'সীমা (Limits)', mcqs: limitsMCQs },
      { id: 'calc-2', title: 'সন্ততা ও অবকলনযোগ্যতা (Continuity & Differentiability)', mcqs: continuityMCQs },
      { id: 'calc-3', title: 'অবকলন (Differentiation)', mcqs: differentiationMCQs },
      { id: 'calc-4', title: 'অবকলনের প্রয়োগ (Applications of Derivatives)', mcqs: applicationsOfDerivativesMCQs },
      { id: 'calc-5', title: 'অনির্দিষ্ট সমাকলন (Indefinite Integration)', mcqs: indefiniteIntegralMCQs },
      { id: 'calc-6', title: 'নির্দিষ্ট সমাকলন (Definite Integration)', mcqs: definiteIntegralMCQs },
      { id: 'calc-7', title: 'অবকল সমীকরণ (Differential Equations)', mcqs: differentialEqMCQs },
      { id: 'calc-8', title: 'ক্ষেত্রফল (Area under curves)', mcqs: areaUnderCurvesMCQs },
    ],
  },
  {
    id: 'vector3d',
    title: 'ভেক্টর ও 3D জ্যামিতি (Vectors & 3D Geometry)',
    chapters: [
      { id: 'vec-1', title: 'ভেক্টর বীজগণিত (Vector Algebra)', mcqs: vectorAlgebraMCQs },
      { id: 'vec-2', title: 'সরলরেখা ও সমতল (Lines and Planes in 3D)', mcqs: linesPlanes3DMCQs },
    ],
  },
  {
    id: 'probstat',
    title: 'সম্ভাবনা ও পরিসংখ্যান (Probability & Statistics)',
    chapters: [
      { id: 'prob-1', title: 'সম্ভাবনা (Probability)', mcqs: [] },
      { id: 'prob-2', title: 'পরিসংখ্যান (Statistics)', mcqs: [] },
    ],
  },
];

// Add some sample MCQs to the first chapter to demonstrate functionality
// (Removed as we now have actual data)

// ── Components ──────────────────────────────────────────────────────────────────

export const WBJEEAssignments: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (questionId: string, optionIndex: number) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    if (!selectedChapter) return 0;
    let score = 0;
    selectedChapter.mcqs.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
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
            onClick={() => { setSelectedUnit(null); setSelectedChapter(null); }}
            className="hover:text-indigo-600 font-medium transition-colors flex items-center gap-2"
          >
            <Folder size={16} />
            All Units
          </button>
          
          {selectedUnit && (
            <>
              <ChevronRight size={16} className="text-gray-400" />
              <button 
                onClick={() => { setSelectedChapter(null); }}
                className={`hover:text-indigo-600 transition-colors ${!selectedChapter ? 'font-bold text-indigo-600' : 'font-medium'}`}
              >
                {selectedUnit.title}
              </button>
            </>
          )}

          {selectedChapter && (
            <>
              <ChevronRight size={16} className="text-gray-400" />
              <span className="font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{selectedChapter.title}</span>
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
                      setSelectedAnswers({});
                      setShowResults(false);
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
                          {chapter.mcqs.length > 0 ? `${chapter.mcqs.length} Questions` : 'Coming Soon'}
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

          {/* Level 3: MCQs */}
          {selectedChapter && (
            <motion.div 
              key="mcqs"
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

              <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-gray-100 p-6 md:p-10 overflow-hidden relative">
                {/* Decorative background blob */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50 blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-8 pb-6 border-b border-gray-100 flex items-center gap-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                      {selectedChapter.title}
                    </span>
                  </h2>

                  {selectedChapter.mcqs.length === 0 ? (
                    <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm mb-5">
                        <FileText className="text-indigo-400" size={40} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Questions Coming Soon</h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        We are currently updating the MCQ assignments for this chapter. Please check back later!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-10">
                      {selectedChapter.mcqs.map((q, index) => (
                        <div key={q.id} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-400 to-purple-500"></div>
                          
                          <div className="flex gap-5 mb-6">
                            <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700 font-bold rounded-xl shadow-inner">
                              {index + 1}
                            </span>
                            <div className="text-lg font-semibold text-gray-800 pt-1.5 prose prose-sm max-w-none">
                              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                {q.question}
                              </ReactMarkdown>
                            </div>
                          </div>

                          <div className="space-y-3 ml-0 md:ml-15">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedAnswers[q.id] === optIdx;
                              const isCorrect = q.correctAnswer === optIdx;
                              
                              let optionClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 relative overflow-hidden ";
                              
                              if (showResults) {
                                if (isCorrect) {
                                  optionClass += "bg-emerald-50 border-emerald-400 text-emerald-900 shadow-sm";
                                } else if (isSelected && !isCorrect) {
                                  optionClass += "bg-rose-50 border-rose-300 text-rose-900";
                                } else {
                                  optionClass += "bg-gray-50 border-gray-100 text-gray-400 opacity-60";
                                }
                              } else {
                                optionClass += isSelected 
                                  ? "bg-indigo-50 border-indigo-500 text-indigo-900 shadow-md transform scale-[1.01]" 
                                  : "bg-white border-gray-100 text-gray-600 hover:border-indigo-300 hover:bg-indigo-50/30 hover:shadow-sm";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleOptionSelect(q.id, optIdx)}
                                  disabled={showResults}
                                  className={optionClass}
                                >
                                  <div className="flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-4">
                                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                        showResults 
                                          ? isCorrect ? 'border-emerald-500 bg-emerald-500' : isSelected ? 'border-rose-400 bg-rose-400' : 'border-gray-300'
                                          : isSelected ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300'
                                      }`}>
                                        {(showResults && isCorrect) || (!showResults && isSelected) ? (
                                          <div className="w-2 h-2 bg-white rounded-full"></div>
                                        ) : showResults && isSelected && !isCorrect ? (
                                          <div className="w-3 h-0.5 bg-white rounded-full rotate-45 absolute"></div>
                                        ) : null}
                                        {showResults && isSelected && !isCorrect && (
                                          <div className="w-3 h-0.5 bg-white rounded-full -rotate-45 absolute"></div>
                                        )}
                                      </div>
                                      <div className="prose prose-sm max-w-none font-medium">
                                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                          {opt}
                                        </ReactMarkdown>
                                      </div>
                                    </div>
                                    {showResults && isCorrect && <CheckCircle2 className="text-emerald-500 flex-shrink-0 ml-2" size={24} />}
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {showResults && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="ml-0 md:ml-15 mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl text-blue-900 shadow-inner"
                            >
                              <div className="flex items-center gap-2 mb-3">
                                <div className="p-1.5 bg-blue-100 rounded-lg text-blue-600">
                                  <FileText size={16} />
                                </div>
                                <span className="font-bold text-blue-800">ব্যাখ্যা (Explanation):</span>
                              </div>
                              <div className="prose prose-sm max-w-none text-blue-800/90 leading-relaxed">
                                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                  {q.explanation}
                                </ReactMarkdown>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      ))}

                      <div className="pt-8 mt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-50/50 p-6 rounded-2xl">
                        {!showResults ? (
                          <>
                            <div className="text-gray-500 font-medium">
                              Answered: <span className="text-indigo-600 font-bold">{Object.keys(selectedAnswers).length}</span> / {selectedChapter.mcqs.length}
                            </div>
                            <button
                              onClick={() => setShowResults(true)}
                              disabled={Object.keys(selectedAnswers).length !== selectedChapter.mcqs.length}
                              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transform hover:-translate-y-0.5"
                            >
                              Submit Answers
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100">
                              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                                <CheckCircle2 className="text-indigo-600" size={28} />
                              </div>
                              <div>
                                <div className="text-sm text-gray-500 font-medium">Your Score</div>
                                <div className="text-2xl font-extrabold text-gray-900">
                                  <span className="text-indigo-600">{calculateScore()}</span> <span className="text-gray-400 text-lg">/ {selectedChapter.mcqs.length}</span>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                setSelectedAnswers({});
                                setShowResults(false);
                              }}
                              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-bold rounded-xl hover:bg-gray-50 border-2 border-gray-200 transition-all shadow-sm hover:border-gray-300"
                            >
                              Retry Assignment
                            </button>
                          </>
                        )}
                      </div>
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
