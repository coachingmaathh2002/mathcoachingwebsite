import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StudentMarksheetModal } from './StudentMarksheetModal';
import { tests, Test } from '../data/testData';
import { paidStudents } from '../data/students';
import { ArrowLeft, CheckCircle, Clock, Play, User, Phone, Award, ChevronRight, ChevronLeft, History, BookOpen, Lock, Star, Flag, AlertTriangle, BarChart3, TrendingUp, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { useNavigate } from 'react-router-dom';

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

export const FreeTests: React.FC = () => {
  const navigate = useNavigate();
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
  const [timeLeft, setTimeLeft] = useState(0);
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(new Set());
  const [showExitWarning, setShowExitWarning] = useState(false);
  const [showMarksheetModal, setShowMarksheetModal] = useState(false);

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
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (view === 'test') {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [view]);

  const handleStartAuth = (test: Test) => {
    setSelectedTest(test);
    setAuthError('');
    setView('auth');
    window.scrollTo(0, 0);
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
      setTimeLeft((selectedTest?.duration || 20) * 60); // Reset timer based on test duration
      setMarkedForReview(new Set());
      setShowExitWarning(false);
      window.scrollTo(0, 0);
    }
  };

  const toggleMarkForReview = () => {
    if (!selectedTest) return;
    const qId = selectedTest.questions[currentQuestionIndex].id;
    setMarkedForReview(prev => {
      const newSet = new Set(prev);
      if (newSet.has(qId)) newSet.delete(qId);
      else newSet.add(qId);
      return newSet;
    });
  };

  const handleBackClick = () => {
    if (view === 'test') {
      setShowExitWarning(true);
    } else if (view !== 'list') {
      setView('list');
    } else {
      navigate('/');
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
    window.scrollTo(0, 0);
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

  // Dashboard Calculations
  const totalTests = history.length;
  const averageAccuracy = totalTests > 0 
    ? Math.round(history.reduce((acc, curr) => acc + (curr.score / curr.total), 0) / totalTests * 100) 
    : 0;
  
  const topicStats = history.reduce((acc, curr) => {
    if (!acc[curr.topic]) {
      acc[curr.topic] = { topic: curr.topic, totalScore: 0, totalQuestions: 0, attempts: 0 };
    }
    acc[curr.topic].totalScore += curr.score;
    acc[curr.topic].totalQuestions += curr.total;
    acc[curr.topic].attempts += 1;
    return acc;
  }, {} as Record<string, { topic: string, totalScore: number, totalQuestions: number, attempts: number }>);

  const topicPerformance = Object.values(topicStats).map(t => ({
    name: t.topic.substring(0, 15) + (t.topic.length > 15 ? '...' : ''),
    accuracy: Math.round((t.totalScore / t.totalQuestions) * 100),
    attempts: t.attempts
  }));

  const chartData = history.map((h, i) => ({
    name: `T${i + 1}`,
    score: Math.round((h.score / h.total) * 100),
    date: new Date(h.date).toLocaleDateString()
  }));

  return (
    <div className="min-h-screen bg-dark-950 pt-36 pb-12 px-4 sm:px-6 lg:px-8 font-body text-slate-100">
      
      {/* Header for Test Section */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
        <button 
          onClick={handleBackClick}
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
                    ? 'bg-brand-gold text-dark-950 font-bold shadow-lg shadow-brand-gold/20' 
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
                    ? 'bg-brand-gold text-dark-950 font-bold shadow-lg shadow-brand-gold/20' 
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
                    ? 'bg-brand-gold text-dark-950 font-bold shadow-lg shadow-brand-gold/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <History size={18} />
                My History
              </button>
            </div>
          </div>

          {/* Hero Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-4xl mx-auto mb-12 bg-dark-900 border border-brand-gold/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(212,175,55,0.1)]"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Star className="text-brand-gold fill-brand-gold" size={24} />
                🚀 প্রিমিয়াম ফিচার আনলক করো!
              </h3>
              <p className="text-slate-300 text-sm">
                বিস্তারিত ধাপে-ধাপে সমাধান, একাধিকবার পরীক্ষা দেওয়ার সুযোগ এবং আরও অনেক এক্সক্লুসিভ ফিচারের জন্য আজই আমাদের প্রিমিয়াম মক টেস্টগুলো কিনে নাও!
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setActiveTab('paid'); setSelectedExam(null); setSelectedTopic(null); }}
              className="px-6 py-3 bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500 text-dark-950 font-bold rounded-xl transition-all whitespace-nowrap shadow-lg shadow-brand-gold/20"
            >
              প্রিমিয়াম দেখুন
            </motion.button>
          </motion.div>

          {activeTab === 'tests' || activeTab === 'paid' ? (
            <div className="space-y-12">
              {!selectedExam ? (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-brand-gold mb-6 border-l-4 border-brand-gold pl-4">
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
                        className="relative bg-dark-900 rounded-2xl p-6 border border-white/5 hover:border-brand-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)] group cursor-pointer overflow-hidden"
                        onClick={() => setSelectedExam(exam)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 flex justify-between items-start mb-4">
                          <div className="p-3 bg-dark-800 rounded-xl text-brand-gold group-hover:bg-brand-gold group-hover:text-dark-950 transition-colors">
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
                        className="relative bg-dark-900 rounded-2xl p-6 border border-white/5 hover:border-brand-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)] group cursor-pointer overflow-hidden"
                        onClick={() => setSelectedTopic(topic)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 flex justify-between items-start mb-4">
                          <div className="p-3 bg-dark-800 rounded-xl text-brand-gold group-hover:bg-brand-gold group-hover:text-dark-950 transition-colors">
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
                        className="bg-dark-900 rounded-2xl p-6 border border-white/5 hover:border-brand-gold/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,175,55,0.15)] group cursor-pointer"
                        onClick={() => handleStartAuth(test)}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-3 bg-dark-800 rounded-xl text-brand-gold group-hover:bg-brand-gold group-hover:text-dark-950 transition-colors">
                            <Award size={24} />
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-xs font-mono text-slate-500 bg-dark-950 px-2 py-1 rounded border border-white/5">
                              {test.questions.length} Questions
                            </span>
                            <span className="text-xs font-mono text-slate-500 bg-dark-950 px-2 py-1 rounded border border-white/5 flex items-center gap-1">
                              <Clock size={12} /> {test.duration || 20} mins
                            </span>
                          </div>
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
            <div className="max-w-6xl mx-auto animate-fade-in">
              {history.length === 0 ? (
                <div className="bg-dark-900 rounded-2xl p-12 text-center border border-white/5">
                  <History size={48} className="mx-auto text-slate-600 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">No Test History</h3>
                  <p className="text-slate-400 mb-6">You haven't taken any tests yet. Start a test to see your history here.</p>
                  <button 
                    onClick={() => setActiveTab('tests')}
                    className="px-6 py-3 bg-brand-gold text-dark-950 rounded-xl font-bold transition-colors"
                  >
                    Browse Tests
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Dashboard Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-dark-900 rounded-2xl p-6 border border-white/5 flex items-center gap-4 shadow-lg">
                      <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                        <BookOpen size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Tests Completed</p>
                        <p className="text-2xl font-bold text-white">{totalTests}</p>
                      </div>
                    </div>
                    <div className="bg-dark-900 rounded-2xl p-6 border border-white/5 flex items-center gap-4 shadow-lg">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Average Accuracy</p>
                        <p className="text-2xl font-bold text-white">{averageAccuracy}%</p>
                      </div>
                    </div>
                    <div className="bg-dark-900 rounded-2xl p-6 border border-white/5 flex items-center gap-4 shadow-lg">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Best Topic</p>
                        <p className="text-xl font-bold text-white truncate">
                          {topicPerformance.length > 0 ? topicPerformance.reduce((prev, current) => (prev.accuracy > current.accuracy) ? prev : current).name : 'N/A'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Charts */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-dark-900 rounded-2xl p-6 border border-white/5 shadow-lg">
                      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <TrendingUp size={20} className="text-brand-gold" />
                        Performance Trend
                      </h3>
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                            <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
                            <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} domain={[0, 100]} />
                            <RechartsTooltip 
                              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }}
                              itemStyle={{ color: '#fff' }}
                            />
                            <Line type="monotone" dataKey="score" stroke="#f472b6" strokeWidth={3} dot={{ r: 6, fill: '#f472b6', strokeWidth: 2, stroke: '#0f172a' }} activeDot={{ r: 8 }} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="bg-dark-900 rounded-2xl p-6 border border-white/5 shadow-lg">
                      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <BarChart3 size={20} className="text-brand-gold" />
                        Topic Accuracy
                      </h3>
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={topicPerformance} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                            <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
                            <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} domain={[0, 100]} />
                            <RechartsTooltip 
                              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }}
                              itemStyle={{ color: '#fff' }}
                              cursor={{ fill: '#1e293b' }}
                            />
                            <Bar dataKey="accuracy" fill="#c084fc" radius={[4, 4, 0, 0]} maxBarSize={50} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  {/* History List */}
                  <div className="bg-dark-900 rounded-2xl p-6 border border-white/5 shadow-lg">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                      <History size={20} className="text-slate-400" />
                      Recent Attempts
                    </h3>
                    <div className="space-y-4">
                      {history.map((attempt) => (
                        <div key={attempt.id} className="bg-dark-950 rounded-xl p-5 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-white/10 transition-colors">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold px-2 py-1 bg-dark-800 text-brand-gold rounded border border-brand-gold/20 uppercase tracking-wider">
                                {attempt.topic}
                              </span>
                              <span className="text-slate-500 text-sm">
                                {new Date(attempt.date).toLocaleDateString()}
                              </span>
                            </div>
                            <h4 className="text-lg font-bold text-white">{attempt.testTitle}</h4>
                            <p className="text-slate-400 text-sm">Student: {attempt.userName}</p>
                          </div>
                          
                          <div className="flex items-center gap-6 bg-dark-900 px-6 py-4 rounded-xl border border-white/5 w-full sm:w-auto justify-between sm:justify-start">
                            <div className="text-center">
                              <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Score</p>
                              <p className="text-2xl font-bold text-brand-light">{attempt.score}<span className="text-sm text-slate-500">/{attempt.total}</span></p>
                            </div>
                            <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                            <div className="text-center">
                              <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Accuracy</p>
                              <p className={`text-2xl font-bold ${attempt.score / attempt.total >= 0.8 ? 'text-green-400' : attempt.score / attempt.total >= 0.5 ? 'text-yellow-400' : 'text-red-400'}`}>
                                {Math.round((attempt.score / attempt.total) * 100)}%
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold border border-brand-gold/20">
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
                    className="w-full bg-dark-950 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none"
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
                    className="w-full bg-dark-950 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none"
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
                  className="w-full bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500 text-dark-950 font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-brand-gold/20 transition-all flex items-center justify-center gap-2"
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
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8"
        >
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="bg-dark-900 rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sticky top-24 z-30 shadow-xl backdrop-blur-md bg-opacity-90">
              <div>
                <h2 className="text-lg font-bold text-white">{selectedTest.title} {view === 'review' && <span className="text-brand-gold ml-2">(Review Mode)</span>}</h2>
                <p className="text-slate-400 text-sm">Student: <span className="text-brand-gold">{user.name}</span></p>
              </div>
              <div className="flex items-center gap-4">
                {view === 'test' && (
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${timeLeft < 60 ? 'bg-red-500/10 border-red-500/30 text-red-400 animate-pulse' : 'bg-dark-950 border-white/5 text-slate-300'}`}>
                    <Clock size={18} className={timeLeft < 60 ? 'text-red-400' : 'text-brand-gold'} />
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
                    let innerCircleClass = 'bg-brand-gold';

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
                      optionClass = 'bg-brand-gold/10 border-brand-gold text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]';
                      circleClass = 'border-brand-gold';
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

            <div className="flex justify-between items-center mt-12 pt-6 border-t border-white/5">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-slate-300 hover:text-white hover:bg-white/5"
                >
                  <ChevronLeft size={20} />
                  Previous
                </button>

                {view === 'test' && (
                  <button
                    onClick={toggleMarkForReview}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                      markedForReview.has(selectedTest.questions[currentQuestionIndex].id)
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-dark-800 text-slate-300 hover:text-white border border-white/5'
                    }`}
                  >
                    <Flag size={18} className={markedForReview.has(selectedTest.questions[currentQuestionIndex].id) ? 'fill-current' : ''} />
                    <span className="hidden sm:inline">Mark for Review</span>
                  </button>
                )}

                {currentQuestionIndex === selectedTest.questions.length - 1 ? (
                  view === 'review' ? (
                    <button
                      onClick={() => setView('result')}
                      className="flex items-center gap-2 px-8 py-3 bg-brand-gold hover:opacity-90 text-dark-950 rounded-xl font-bold shadow-lg transition-all"
                    >
                      Back to Results
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold shadow-lg transition-all"
                    >
                      Submit Test
                      <CheckCircle size={20} />
                    </button>
                  )
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-3 bg-brand-gold hover:opacity-90 text-dark-950 rounded-xl font-bold shadow-lg transition-all shadow-brand-gold/10"
                  >
                    Next
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-dark-900 rounded-2xl p-6 border border-white/10 sticky top-24 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-brand-gold" />
                Question Palette
              </h3>
              
              <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-4 gap-2 mb-6">
                {selectedTest.questions.map((q, idx) => {
                  const isAnswered = answers[q.id] !== undefined;
                  const isMarked = markedForReview.has(q.id);
                  const isCurrent = currentQuestionIndex === idx;
                  
                  let btnClass = 'bg-dark-800 text-slate-400 border-white/5 hover:bg-dark-700';
                  
                  if (view === 'review') {
                    const isCorrect = answers[q.id] === q.correctAnswer;
                    if (isAnswered) {
                      btnClass = isCorrect ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30';
                    }
                  } else {
                    if (isMarked && isAnswered) btnClass = 'bg-purple-500/20 text-purple-400 border-purple-500/50';
                    else if (isMarked) btnClass = 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
                    else if (isAnswered) btnClass = 'bg-green-500/20 text-green-400 border-green-500/50';
                  }

                  if (isCurrent) {
                    btnClass += ' ring-2 ring-brand-gold ring-offset-2 ring-offset-dark-900';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`w-full aspect-square rounded-lg flex items-center justify-center font-mono text-sm font-medium border transition-all ${btnClass}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {view === 'test' && (
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500/50"></div>
                    <span className="text-slate-300">Answered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-yellow-500/20 border border-yellow-500/50"></div>
                    <span className="text-slate-300">Marked for Review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-purple-500/20 border border-purple-500/50"></div>
                    <span className="text-slate-300">Answered & Marked</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-dark-800 border border-white/5"></div>
                    <span className="text-slate-300">Not Answered</span>
                  </div>
                </div>
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
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500"></div>
            
            <div className="w-24 h-24 bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-dark-950 shadow-xl relative z-10 text-brand-gold border-brand-gold/30">
              <Award size={48} />
            </div>

            <h2 className="text-3xl font-bold text-white mb-2">Test Completed!</h2>
            <p className="text-slate-400 mb-8">Great job, {user.name}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-dark-950 p-6 rounded-2xl border border-white/5">
                <p className="text-slate-400 text-sm mb-1">Total Score</p>
                <p className="text-4xl font-bold text-brand-gold">{score} <span className="text-lg text-slate-500">/ 20</span></p>
              </div>
              <div className="bg-dark-950 p-6 rounded-2xl border border-white/5">
                <p className="text-slate-400 text-sm mb-1">Percentage</p>
                <p className="text-4xl font-bold text-yellow-400">{Math.round((score / 20) * 100)}%</p>
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
                onClick={() => setShowMarksheetModal(true)}
                className="px-8 py-3 bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500 text-dark-950 rounded-xl font-bold transition-all shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2"
              >
                <Award size={20} />
                Merit Marksheet & Certificate
              </button>
              <button
                onClick={resetTest}
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-colors border border-white/10"
              >
                Back to Tests
              </button>
            </div>

            {/* Hero Block in Result */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 bg-dark-950 border border-brand-gold/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-left"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Star className="text-brand-gold fill-brand-gold" size={20} />
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
                className="px-6 py-2 bg-brand-gold text-dark-950 font-bold rounded-xl transition-colors whitespace-nowrap text-sm"
              >
                Get Premium
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* EXIT WARNING MODAL */}
      <AnimatePresence>
        {showExitWarning && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-900 border border-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setShowExitWarning(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 mx-auto border border-red-500/30">
                <AlertTriangle size={32} className="text-red-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-2">Are you sure?</h3>
              <p className="text-slate-400 text-center mb-8">
                If you leave now, your progress will be lost and this attempt will not be saved.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowExitWarning(false)}
                  className="flex-1 px-6 py-3 bg-brand-gold text-dark-950 rounded-xl font-bold transition-colors"
                >
                  Resume Test
                </button>
                <button 
                  onClick={() => {
                    setShowExitWarning(false);
                    setView('list');
                  }}
                  className="flex-1 px-6 py-3 bg-dark-800 hover:bg-red-500/20 hover:text-red-400 text-slate-300 rounded-xl font-medium transition-colors border border-white/5 hover:border-red-500/30"
                >
                  Exit Test
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Official Student Merit Marksheet Modal */}
      {selectedTest && (
        <StudentMarksheetModal
          isOpen={showMarksheetModal}
          onClose={() => setShowMarksheetModal(false)}
          data={{
            studentName: user.name || 'Student Candidate',
            testTitle: selectedTest.title,
            topicTitle: selectedTest.topic || 'Mathematics',
            score: score,
            maxScore: 20,
            correctAnswers: Math.round(score),
            incorrectAnswers: Math.max(0, 20 - Math.round(score)),
            unanswered: 0,
            percentage: Math.round((score / 20) * 100),
            isChallengeMode: true
          }}
        />
      )}

    </div>
  );
};
