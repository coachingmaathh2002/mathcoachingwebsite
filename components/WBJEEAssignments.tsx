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
      { id: 'calc-1', title: 'সীমা (Limits)', mcqs: [] },
      { id: 'calc-2', title: 'সন্ততা ও অবকলনযোগ্যতা (Continuity & Differentiability)', mcqs: [] },
      { id: 'calc-3', title: 'অবকলন (Differentiation)', mcqs: [] },
      { id: 'calc-4', title: 'অবকলনের প্রয়োগ (Applications of Derivatives)', mcqs: [] },
      { id: 'calc-5', title: 'অনির্দিষ্ট সমাকলন (Indefinite Integration)', mcqs: [] },
      { id: 'calc-6', title: 'নির্দিষ্ট সমাকলন (Definite Integration)', mcqs: [] },
      { id: 'calc-7', title: 'অবকল সমীকরণ (Differential Equations)', mcqs: [] },
      { id: 'calc-8', title: 'ক্ষেত্রফল (Area under curves)', mcqs: [] },
    ],
  },
  {
    id: 'vector3d',
    title: 'ভেক্টর ও 3D জ্যামিতি (Vectors & 3D Geometry)',
    chapters: [
      { id: 'vec-1', title: 'ভেক্টর বীজগণিত (Vector Algebra)', mcqs: [] },
      { id: 'vec-2', title: 'সরলরেখা ও সমতল (Lines and Planes in 3D)', mcqs: [] },
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

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <BookOpen className="text-indigo-600" size={32} />
            WBJEE Assignments (MCQs)
          </h1>
          <p className="text-gray-600 mt-2">
            অধ্যায়ভিত্তিক MCQ প্রশ্ন ও সমাধান - WBJEE প্রস্তুতির জন্য
          </p>
        </div>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          <button 
            onClick={() => { setSelectedUnit(null); setSelectedChapter(null); }}
            className="hover:text-indigo-600 transition-colors"
          >
            All Units
          </button>
          
          {selectedUnit && (
            <>
              <ChevronRight size={16} />
              <button 
                onClick={() => { setSelectedChapter(null); }}
                className={`hover:text-indigo-600 transition-colors ${!selectedChapter ? 'font-semibold text-indigo-600' : ''}`}
              >
                {selectedUnit.title}
              </button>
            </>
          )}

          {selectedChapter && (
            <>
              <ChevronRight size={16} />
              <span className="font-semibold text-indigo-600">{selectedChapter.title}</span>
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {wbjeeSyllabus.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => setSelectedUnit(unit)}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-indigo-300 hover:shadow-md transition-all text-left group"
                >
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Folder size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {unit.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {unit.chapters.length} Chapters
                    </p>
                  </div>
                </button>
              ))}
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
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-4 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Units
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedUnit.chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => {
                      setSelectedChapter(chapter);
                      setSelectedAnswers({});
                      setShowResults(false);
                    }}
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-indigo-300 hover:shadow-md transition-all text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="text-gray-400 group-hover:text-indigo-500 transition-colors" size={20} />
                      <span className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">
                        {chapter.title}
                      </span>
                    </div>
                    <ChevronRight className="text-gray-300 group-hover:text-indigo-500 transition-colors" size={20} />
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
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-6 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to {selectedUnit?.title}
              </button>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  {selectedChapter.title} - Assignments
                </h2>

                {selectedChapter.mcqs.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                      <FileText className="text-gray-400" size={32} />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Questions Coming Soon</h3>
                    <p className="text-gray-500">
                      We are currently updating the MCQ assignments for this chapter. Please check back later!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {selectedChapter.mcqs.map((q, index) => (
                      <div key={q.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <div className="flex gap-4 mb-4">
                          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-700 font-bold rounded-full">
                            {index + 1}
                          </span>
                          <div className="text-lg font-medium text-gray-900 pt-1 prose prose-sm max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                              {q.question}
                            </ReactMarkdown>
                          </div>
                        </div>

                        <div className="space-y-3 ml-12">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = selectedAnswers[q.id] === optIdx;
                            const isCorrect = q.correctAnswer === optIdx;
                            
                            let optionClass = "w-full text-left p-4 rounded-lg border transition-all ";
                            
                            if (showResults) {
                              if (isCorrect) {
                                optionClass += "bg-green-50 border-green-500 text-green-800";
                              } else if (isSelected && !isCorrect) {
                                optionClass += "bg-red-50 border-red-300 text-red-800";
                              } else {
                                optionClass += "bg-white border-gray-200 text-gray-500 opacity-50";
                              }
                            } else {
                              optionClass += isSelected 
                                ? "bg-indigo-50 border-indigo-500 text-indigo-800 shadow-sm" 
                                : "bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50";
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleOptionSelect(q.id, optIdx)}
                                disabled={showResults}
                                className={optionClass}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="prose prose-sm max-w-none">
                                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                      {opt}
                                    </ReactMarkdown>
                                  </div>
                                  {showResults && isCorrect && <CheckCircle2 className="text-green-600 flex-shrink-0 ml-2" size={20} />}
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="ml-12 mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg text-blue-800 text-sm"
                          >
                            <span className="font-semibold">ব্যাখ্যা (Explanation):</span>
                            <div className="mt-2 prose prose-sm max-w-none text-blue-800">
                              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                {q.explanation}
                              </ReactMarkdown>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    ))}

                    <div className="pt-6 border-t border-gray-100 flex justify-end">
                      {!showResults ? (
                        <button
                          onClick={() => setShowResults(true)}
                          disabled={Object.keys(selectedAnswers).length !== selectedChapter.mcqs.length}
                          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Submit Answers
                        </button>
                      ) : (
                        <div className="flex items-center gap-6">
                          <div className="text-lg font-medium text-gray-900">
                            Your Score: <span className="text-indigo-600 font-bold text-2xl">{calculateScore()}</span> / {selectedChapter.mcqs.length}
                          </div>
                          <button
                            onClick={() => {
                              setSelectedAnswers({});
                              setShowResults(false);
                            }}
                            className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            Retry Assignment
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};
