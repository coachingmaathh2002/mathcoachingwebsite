import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { tests, Test } from '../data/testData';
import { paidStudents } from '../data/students';
import { ArrowLeft, CheckCircle, Clock, Play, User, Phone, Award, ChevronRight, ChevronLeft, Download, History, BookOpen, Lock, Star } from 'lucide-react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import jsPDF from 'jspdf';
import { CONTACT_INFO } from '../constants';

interface FreeTestsProps {
  onBack: () => void;
}

type ViewState = 'list' | 'auth' | 'test' | 'result';

interface TestAttempt {
  id: string;
  testId: string;
  testTitle: string;
  topic: string;
  score: number;
  total: number;
  date: string;
  userName: string;
}

export const FreeTests: React.FC<FreeTestsProps> = ({ onBack }) => {
  const [view, setView] = useState<ViewState | 'review'>('list');
  const [activeTab, setActiveTab] = useState<'tests' | 'paid' | 'history'>('tests');
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [history, setHistory] = useState<TestAttempt[]>([]);
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [user, setUser] = useState({ name: '', mobile: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds

  useEffect(() => {
    const savedHistory = localStorage.getItem('rajSirTestHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to parse history', e);
      }
    }
  }, []);

  React.useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (view === 'test' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [view, timeLeft]);

  React.useEffect(() => {
    if (view === 'test' && timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft, view]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartAuth = (test: Test) => {
    setSelectedTest(test);
    setAuthError('');
    setView('auth');
  };

  const handleStartTest = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    
    if (selectedTest?.isPaid) {
      const isValidStudent = paidStudents.find(
        s => s.name.toLowerCase().trim() === user.name.toLowerCase().trim() && 
             s.mobile.trim() === user.mobile.trim() && 
             s.password === user.password
      );
      
      if (!isValidStudent) {
        setAuthError('Invalid credentials. Please check your name, mobile, and password.');
        return;
      }
    }

    if (user.name && user.mobile) {
      setView('test');
      setAnswers({});
      setCurrentQuestionIndex(0);
      setTimeLeft(20 * 60); // Reset timer to 20 minutes
      window.scrollTo(0, 0);
    }
  };

  const handleAnswer = (questionId: number, optionIndex: number) => {
    if (view === 'review') return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleNext = () => {
    if (selectedTest && currentQuestionIndex < selectedTest.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (!selectedTest) return;
    
    let newScore = 0;
    selectedTest.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    
    // Save to history
    const attempt: TestAttempt = {
      id: Date.now().toString(),
      testId: selectedTest.id,
      testTitle: selectedTest.title,
      topic: selectedTest.topic,
      score: newScore,
      total: selectedTest.questions.length,
      date: new Date().toISOString(),
      userName: user.name
    };
    
    const updatedHistory = [attempt, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('rajSirTestHistory', JSON.stringify(updatedHistory));
    
    setView('result');
    window.scrollTo(0, 0);
  };

  const handleReview = () => {
    setView('review');
    setCurrentQuestionIndex(0);
    window.scrollTo(0, 0);
  };

  const resetTest = () => {
    setView('list');
    setSelectedTest(null);
    setAnswers({});
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  const downloadMarksheet = () => {
    if (!selectedTest) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const primaryColor: [number, number, number] = [219, 39, 119]; // Brand Pink
    const darkColor: [number, number, number] = [30, 41, 59]; // Slate 800
    const lightGray: [number, number, number] = [248, 250, 252]; // Slate 50

    // 1. Page Borders (Double Border for premium look)
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(1);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20);
    doc.setLineWidth(0.3);
    doc.rect(12, 12, pageWidth - 24, pageHeight - 24);

    // 2. Header Section
    doc.setTextColor(...primaryColor);
    doc.setFont("times", "bold");
    doc.setFontSize(28);
    doc.text("RAJ SIR MATH ACADEMY", pageWidth / 2, 35, { align: "center" });
    
    doc.setTextColor(...darkColor);
    doc.setFont("times", "italic");
    doc.setFontSize(14);
    doc.text("Premium Center for Mathematics Excellence", pageWidth / 2, 45, { align: "center" });

    // Decorative line
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.5);
    doc.line(40, 52, pageWidth - 40, 52);

    // 3. Report Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.setFillColor(...primaryColor);
    doc.rect(pageWidth / 2 - 55, 65, 110, 12, 'F');
    doc.text("PERFORMANCE REPORT", pageWidth / 2, 73, { align: "center" });

    // 4. Student Details Section (Boxed)
    const startY = 95;
    doc.setFillColor(...lightGray);
    doc.setDrawColor(200, 200, 200);
    doc.roundedRect(20, startY, pageWidth - 40, 45, 3, 3, 'FD');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...darkColor);
    
    // Column 1
    doc.text("Student Name:", 25, startY + 12);
    doc.text("Mobile Number:", 25, startY + 24);
    doc.text("Test Date:", 25, startY + 36);
    
    // Column 2
    doc.text("Topic:", pageWidth / 2, startY + 12);
    doc.text("Test Title:", pageWidth / 2, startY + 24);
    doc.text("Total Marks:", pageWidth / 2, startY + 36);

    doc.setFont("helvetica", "normal");
    doc.text(user.name.toUpperCase(), 60, startY + 12);
    doc.text(user.mobile, 60, startY + 24);
    doc.text(new Date().toLocaleDateString(), 60, startY + 36);
    
    doc.text(selectedTest.topic, pageWidth / 2 + 25, startY + 12);
    // Truncate title if too long
    const title = selectedTest.title.length > 30 ? selectedTest.title.substring(0, 27) + '...' : selectedTest.title;
    doc.text(title, pageWidth / 2 + 25, startY + 24);
    doc.text("20", pageWidth / 2 + 25, startY + 36);

    // 5. Performance Metrics
    const metricY = 160;
    const percentage = Math.round((score / 20) * 100);
    
    // Calculate Grade and Remarks
    let grade = 'F';
    let remark = 'Needs Improvement';
    let gradeColor: [number, number, number] = [239, 68, 68]; // Red
    
    if (percentage >= 90) { grade = 'A+'; remark = 'Outstanding Performance'; gradeColor = [34, 197, 94]; } // Green
    else if (percentage >= 80) { grade = 'A'; remark = 'Excellent Work'; gradeColor = [34, 197, 94]; }
    else if (percentage >= 70) { grade = 'B+'; remark = 'Very Good'; gradeColor = [234, 179, 8]; } // Yellow
    else if (percentage >= 60) { grade = 'B'; remark = 'Good Effort'; gradeColor = [234, 179, 8]; }
    else if (percentage >= 50) { grade = 'C'; remark = 'Average, Can do better'; gradeColor = [249, 115, 22]; } // Orange

    // Score Breakdown
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Score Breakdown", 20, metricY);
    doc.setLineWidth(0.5);
    doc.line(20, metricY + 2, 65, metricY + 2);

    doc.setFontSize(12);
    doc.text("Total Questions:", 25, metricY + 15);
    doc.text("Correct Answers:", 25, metricY + 25);
    doc.text("Incorrect Answers:", 25, metricY + 35);
    doc.text("Accuracy:", 25, metricY + 45);

    doc.setFont("helvetica", "normal");
    doc.text("20", 70, metricY + 15);
    doc.text(`${score}`, 70, metricY + 25);
    doc.text(`${20 - score}`, 70, metricY + 35);
    doc.text(`${percentage}%`, 70, metricY + 45);

    // Grade Badge
    doc.setFillColor(...gradeColor);
    doc.circle(pageWidth - 55, metricY + 25, 22, 'F');
    doc.setFillColor(255, 255, 255);
    doc.circle(pageWidth - 55, metricY + 25, 20, 'F');
    doc.setFillColor(...gradeColor);
    doc.circle(pageWidth - 55, metricY + 25, 18, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("GRADE", pageWidth - 55, metricY + 18, { align: "center" });
    doc.setFontSize(24);
    doc.text(grade, pageWidth - 55, metricY + 31, { align: "center" });

    // Remarks
    doc.setTextColor(...darkColor);
    doc.setFontSize(12);
    doc.setFont("times", "italic");
    doc.text(`Remarks: ${remark}`, pageWidth - 55, metricY + 55, { align: "center" });

    // 6. Footer
    const footerY = pageHeight - 45;
    
    // Signature
    doc.setDrawColor(...darkColor);
    doc.setLineWidth(0.5);
    doc.line(pageWidth - 70, footerY, pageWidth - 20, footerY);
    
    doc.setFont("times", "italic");
    doc.setFontSize(16);
    doc.setTextColor(...primaryColor);
    doc.text("Raj Sir", pageWidth - 45, footerY - 5, { align: "center" });
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...darkColor);
    doc.text("Authorized Signature", pageWidth - 45, footerY + 5, { align: "center" });
    doc.text("Director, Raj Sir Math Academy", pageWidth - 45, footerY + 10, { align: "center" });

    // Contact Info
    doc.setFontSize(9);
    doc.text(`Contact: ${CONTACT_INFO.phone}  |  Email: ${CONTACT_INFO.email}`, 20, footerY + 5);
    doc.text(`Address: ${CONTACT_INFO.address}`, 20, footerY + 10);

    // Official Document Note
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text("This is an electronically generated report card and does not require a physical seal.", pageWidth / 2, pageHeight - 15, { align: "center" });

    doc.save(`RajSirMathAcademy_Report_${user.name.replace(/\s+/g, '_')}.pdf`);
  };

  // Group tests by topic
  const filteredTests = tests.filter(t => activeTab === 'paid' ? t.isPaid : !t.isPaid);
  const exams = Array.from(new Set(filteredTests.map(t => t.exam)));
  const examTests = selectedExam ? filteredTests.filter(t => t.exam === selectedExam) : [];
  const testsByTopic = examTests.reduce((acc, test) => {
    if (!acc[test.topic]) acc[test.topic] = [];
    acc[test.topic].push(test);
    return acc;
  }, {} as Record<string, Test[]>);

  return (
    <div className="min-h-screen bg-dark-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-body text-slate-100">
      
      {/* Header for Test Section */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
        <button 
          onClick={view === 'list' ? onBack : () => setView('list')}
          className="flex items-center gap-2 text-slate-400 hover:text-brand-light transition-colors"
        >
          <ArrowLeft size={20} />
          <span>{view === 'list' ? 'Back to Home' : 'Back to Tests'}</span>
        </button>
        <h1 className="text-2xl font-display font-bold text-white hidden sm:block">
          Mock Tests
        </h1>
      </div>

      <AnimatePresence mode="wait">
        {/* VIEW: LIST */}
        {view === 'list' && (
          <motion.div 
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-8">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Test Your Knowledge</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Select an exam and topic below to start a practice test. Each test contains multiple choice questions in Bengali.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-dark-900 p-1 rounded-xl border border-white/5 inline-flex flex-wrap justify-center gap-1">
              <button
                onClick={() => { setActiveTab('tests'); setSelectedExam(null); setSelectedTopic(null); }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'tests' 
                    ? 'bg-brand-pink text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <BookOpen size={18} />
                Free Tests
              </button>
              <button
                onClick={() => { setActiveTab('paid'); setSelectedExam(null); setSelectedTopic(null); }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'paid' 
                    ? 'bg-brand-pink text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Lock size={18} />
                Premium Tests
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'history' 
                    ? 'bg-brand-pink text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <History size={18} />
                My History
              </button>
            </div>
          </div>

          {/* Marketing Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 border border-brand-pink/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                Unlock Premium Features!
              </h3>
              <p className="text-slate-300">
                If you want step-by-step solutions, multiple attempts, or extra features, you should buy our Premium Tests.
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setActiveTab('paid'); setSelectedExam(null); setSelectedTopic(null); }}
              className="px-6 py-3 bg-brand-pink hover:bg-brand-light text-white font-bold rounded-xl transition-colors whitespace-nowrap shadow-lg hover:shadow-brand-pink/20"
            >
              Explore Premium
            </motion.button>
          </motion.div>

          {activeTab === 'tests' || activeTab === 'paid' ? (
            <div className="space-y-12">
              {!selectedExam ? (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-brand-light mb-6 border-l-4 border-brand-pink pl-4">
                    Select Exam
                  </h3>
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {exams.map(exam => (
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        key={exam}
                        className="bg-dark-900 rounded-2xl p-6 border border-white/5 hover:border-brand-pink/50 transition-all hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
                        onClick={() => setSelectedExam(exam)}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-3 bg-dark-800 rounded-xl text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-colors">
                            <BookOpen size={24} />
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors">
                          {exam}
                        </h4>
                        <p className="text-slate-400 text-sm mb-6">
                          View available tests for {exam}.
                        </p>
                        <div className="flex items-center gap-2 text-brand-light font-medium text-sm">
                          <span>View Tests</span>
                          <ChevronRight size={16} />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ) : !selectedTopic ? (
                <div className="animate-fade-in">
                  <button 
                    onClick={() => setSelectedExam(null)}
                    className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={16} />
                    <span>Back to Exams</span>
                  </button>
                  <h3 className="text-3xl font-bold text-white mb-8">
                    {selectedExam} Topics
                  </h3>
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {Object.keys(testsByTopic).sort().map((topic) => (
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        key={topic}
                        className="bg-dark-900 rounded-2xl p-6 border border-white/5 hover:border-brand-pink/50 transition-all hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
                        onClick={() => setSelectedTopic(topic)}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-3 bg-dark-800 rounded-xl text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-colors">
                            <BookOpen size={24} />
                          </div>
                          <span className="text-xs font-mono text-slate-500 bg-dark-950 px-2 py-1 rounded border border-white/5">
                            {testsByTopic[topic].length} Tests
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors">
                          {topic}
                        </h4>
                        <p className="text-slate-400 text-sm mb-6">
                          Explore tests for {topic}.
                        </p>
                        <div className="flex items-center gap-2 text-brand-light font-medium text-sm">
                          <span>View Tests</span>
                          <ChevronRight size={16} />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <button 
                    onClick={() => setSelectedTopic(null)}
                    className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={16} />
                    <span>Back to Topics</span>
                  </button>
                  <h3 className="text-3xl font-bold text-white mb-8">
                    {selectedTopic} Tests
                  </h3>
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {testsByTopic[selectedTopic]?.map(test => (
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        key={test.id}
                        className="bg-dark-900 rounded-2xl p-6 border border-white/5 hover:border-brand-pink/50 transition-all hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
                        onClick={() => handleStartAuth(test)}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-3 bg-dark-800 rounded-xl text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-colors">
                            <Award size={24} />
                          </div>
                          <span className="text-xs font-mono text-slate-500 bg-dark-950 px-2 py-1 rounded border border-white/5">
                            {test.questions.length} Questions
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors">
                          {test.title}
                        </h4>
                        <p className="text-slate-400 text-sm mb-6">
                          Test your understanding of {test.topic} concepts.
                        </p>
                        <div className="flex items-center gap-2 text-brand-light font-medium text-sm">
                          <span>Start Test</span>
                          <Play size={16} className="fill-current" />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto animate-fade-in">
              {history.length === 0 ? (
                <div className="bg-dark-900 rounded-2xl p-12 text-center border border-white/5">
                  <History size={48} className="mx-auto text-slate-600 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">No Test History</h3>
                  <p className="text-slate-400 mb-6">You haven't taken any tests yet. Start a test to see your history here.</p>
                  <button 
                    onClick={() => setActiveTab('tests')}
                    className="px-6 py-3 bg-brand-pink hover:bg-brand-light text-white rounded-xl font-medium transition-colors"
                  >
                    Browse Tests
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {history.map((attempt) => (
                    <div key={attempt.id} className="bg-dark-900 rounded-2xl p-6 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold px-2 py-1 bg-dark-800 text-brand-pink rounded border border-white/5 uppercase tracking-wider">
                            {attempt.topic}
                          </span>
                          <span className="text-slate-500 text-sm">
                            {new Date(attempt.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white">{attempt.testTitle}</h4>
                        <p className="text-slate-400 text-sm">Student: {attempt.userName}</p>
                      </div>
                      
                      <div className="flex items-center gap-6 bg-dark-950 px-6 py-4 rounded-xl border border-white/5 w-full sm:w-auto justify-between sm:justify-start">
                        <div className="text-center">
                          <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Score</p>
                          <p className="text-2xl font-bold text-brand-light">{attempt.score}<span className="text-sm text-slate-500">/{attempt.total}</span></p>
                        </div>
                        <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                        <div className="text-center">
                          <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Percentage</p>
                          <p className={`text-2xl font-bold ${attempt.score / attempt.total >= 0.8 ? 'text-green-400' : attempt.score / attempt.total >= 0.5 ? 'text-yellow-400' : 'text-red-400'}`}>
                            {Math.round((attempt.score / attempt.total) * 100)}%
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </motion.div>
      )}

      {/* VIEW: AUTH */}
      {view === 'auth' && selectedTest && (
        <motion.div 
          key="auth"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="max-w-md mx-auto mt-12"
        >
          <div className="bg-dark-900 rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-pink">
                <User size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white">Student Details</h2>
              <p className="text-slate-400 text-sm mt-2">Enter your details to start the test</p>
            </div>

            {authError && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm text-center">
                {authError}
              </div>
            )}

            <form onSubmit={handleStartTest} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-slate-500" size={18} />
                  <input
                    type="text"
                    required
                    value={user.name}
                    onChange={e => setUser({...user, name: e.target.value})}
                    className="w-full bg-dark-950 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 text-slate-500" size={18} />
                  <input
                    type="tel"
                    required
                    value={user.mobile}
                    onChange={e => setUser({...user, mobile: e.target.value})}
                    className="w-full bg-dark-950 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>

              {selectedTest.isPaid && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-3.5 text-slate-500" size={18} />
                    <input
                      type="password"
                      required
                      value={user.password}
                      onChange={e => setUser({...user, password: e.target.value})}
                      className="w-full bg-dark-950 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-brand-pink/20 transition-all flex items-center justify-center gap-2"
                >
                  Start Test
                  <Play size={18} className="fill-current" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}

      {/* VIEW: TEST OR REVIEW */}
      {(view === 'test' || view === 'review') && selectedTest && (
        <motion.div 
          key="test"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-dark-900 rounded-2xl p-6 mb-8 border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sticky top-24 z-30 shadow-xl backdrop-blur-md bg-opacity-90">
            <div>
              <h2 className="text-lg font-bold text-white">{selectedTest.title} {view === 'review' && <span className="text-brand-pink ml-2">(Review Mode)</span>}</h2>
              <p className="text-slate-400 text-sm">Student: <span className="text-brand-light">{user.name}</span></p>
            </div>
            <div className="flex items-center gap-4">
              {view === 'test' && (
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${timeLeft < 60 ? 'bg-red-500/10 border-red-500/30 text-red-400 animate-pulse' : 'bg-dark-950 border-white/5 text-slate-300'}`}>
                  <Clock size={18} className={timeLeft < 60 ? 'text-red-400' : 'text-brand-pink'} />
                  <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-slate-300 bg-dark-950 px-4 py-2 rounded-lg border border-white/5">
                <span className="font-mono">Q: {currentQuestionIndex + 1}/{selectedTest.questions.length}</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-900 rounded-2xl p-6 md:p-8 border border-white/5 min-h-[400px] flex flex-col justify-between overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-4 mb-6">
                <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border ${
                  view === 'review' 
                    ? answers[selectedTest.questions[currentQuestionIndex].id] === selectedTest.questions[currentQuestionIndex].correctAnswer
                      ? 'bg-green-500/20 text-green-400 border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border-red-500/30'
                    : 'bg-dark-800 text-brand-light border-white/5'
                }`}>
                  {currentQuestionIndex + 1}
                </span>
                <div className="text-xl text-white font-medium pt-1 leading-relaxed">
                  <Latex>{selectedTest.questions[currentQuestionIndex].text}</Latex>
                </div>
              </div>

              <div className="space-y-4 ml-0 md:ml-14">
                {selectedTest.questions[currentQuestionIndex].options.map((option, optIndex) => {
                  const isSelected = answers[selectedTest.questions[currentQuestionIndex].id] === optIndex;
                  const isCorrect = selectedTest.questions[currentQuestionIndex].correctAnswer === optIndex;
                  
                  let optionClass = 'bg-dark-950 border-slate-800 text-slate-300 hover:border-slate-600 hover:bg-dark-800';
                  let circleClass = 'border-slate-600';
                  let innerCircleClass = 'bg-brand-pink';

                  if (view === 'review') {
                    if (isCorrect) {
                      optionClass = 'bg-green-500/10 border-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.1)]';
                      circleClass = 'border-green-500';
                      innerCircleClass = 'bg-green-500';
                    } else if (isSelected && !isCorrect) {
                      optionClass = 'bg-red-500/10 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.1)]';
                      circleClass = 'border-red-500';
                      innerCircleClass = 'bg-red-500';
                    } else {
                      optionClass = 'bg-dark-950 border-slate-800 text-slate-500 opacity-50';
                    }
                  } else if (isSelected) {
                    optionClass = 'bg-brand-pink/10 border-brand-pink text-white shadow-[0_0_15px_rgba(219,39,119,0.1)]';
                    circleClass = 'border-brand-pink';
                  }

                  return (
                    <label 
                      key={optIndex}
                      className={`flex items-center gap-4 p-5 rounded-xl border transition-all ${view === 'review' ? 'cursor-default' : 'cursor-pointer'} ${optionClass}`}
                    >
                      <input
                        type="radio"
                        name={`q-${selectedTest.questions[currentQuestionIndex].id}`}
                        className="hidden"
                        checked={isSelected}
                        onChange={() => handleAnswer(selectedTest.questions[currentQuestionIndex].id, optIndex)}
                        disabled={view === 'review'}
                      />
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${circleClass}`}>
                        {isSelected && <div className={`w-3 h-3 rounded-full ${innerCircleClass}`} />}
                      </div>
                      <span className="text-lg"><Latex>{option}</Latex></span>
                    </label>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-12 pt-6 border-t border-white/5">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-slate-300 hover:text-white hover:bg-white/5"
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              {currentQuestionIndex === selectedTest.questions.length - 1 ? (
                view === 'review' ? (
                  <button
                    onClick={() => setView('result')}
                    className="flex items-center gap-2 px-8 py-3 bg-brand-pink hover:bg-brand-light text-white rounded-xl font-bold shadow-lg transition-all hover:shadow-brand-pink/20"
                  >
                    Back to Results
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold shadow-lg transition-all hover:shadow-green-500/20"
                  >
                    Submit Test
                    <CheckCircle size={20} />
                  </button>
                )
              ) : (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-3 bg-brand-pink hover:bg-brand-light text-white rounded-xl font-bold shadow-lg transition-all hover:shadow-brand-pink/20"
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* VIEW: RESULT */}
      {view === 'result' && selectedTest && (
        <motion.div 
          key="result"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="max-w-2xl mx-auto mt-12"
        >
          <div className="bg-dark-900 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-pink to-brand-purple"></div>
            
            <div className="w-24 h-24 bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-dark-950 shadow-xl relative z-10">
              <Award size={48} className="text-yellow-400" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-2">Test Completed!</h2>
            <p className="text-slate-400 mb-8">Great job, {user.name}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-dark-950 p-6 rounded-2xl border border-white/5">
                <p className="text-slate-400 text-sm mb-1">Total Score</p>
                <p className="text-4xl font-bold text-brand-light">{score} <span className="text-lg text-slate-500">/ 20</span></p>
              </div>
              <div className="bg-dark-950 p-6 rounded-2xl border border-white/5">
                <p className="text-slate-400 text-sm mb-1">Percentage</p>
                <p className="text-4xl font-bold text-brand-purple">{Math.round((score / 20) * 100)}%</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleReview}
                className="px-8 py-3 bg-dark-800 hover:bg-dark-700 text-white rounded-xl font-medium transition-colors border border-white/10 flex items-center justify-center gap-2"
              >
                Review Answers
              </button>
              <button
                onClick={downloadMarksheet}
                className="px-8 py-3 bg-gradient-to-r from-brand-pink to-brand-purple hover:from-brand-light hover:to-brand-purple text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-pink/20 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Marksheet
              </button>
              <button
                onClick={resetTest}
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-colors border border-white/10"
              >
                Back to Tests
              </button>
            </div>

            {/* Marketing Banner in Result */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 bg-dark-950 border border-brand-pink/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-left"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={20} />
                  Want Step-by-Step Solutions?
                </h3>
                <p className="text-slate-400 text-sm">
                  Upgrade to Premium Tests for detailed solutions, unlimited attempts, and performance analytics.
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setView('list'); setActiveTab('paid'); setSelectedExam(null); setSelectedTopic(null); }}
                className="px-6 py-2 bg-brand-pink hover:bg-brand-light text-white font-bold rounded-xl transition-colors whitespace-nowrap text-sm"
              >
                Get Premium
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

    </div>
  );
};
