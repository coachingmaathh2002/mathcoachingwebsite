import React, { useState } from 'react';
import { tests, Test } from '../data/testData';
import { ArrowLeft, CheckCircle, Clock, Play, User, Phone, Award, ChevronRight, ChevronLeft, Download } from 'lucide-react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import jsPDF from 'jspdf';
import { CONTACT_INFO } from '../constants';

interface FreeTestsProps {
  onBack: () => void;
}

type ViewState = 'list' | 'auth' | 'test' | 'result';

export const FreeTests: React.FC<FreeTestsProps> = ({ onBack }) => {
  const [view, setView] = useState<ViewState>('list');
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [user, setUser] = useState({ name: '', mobile: '' });
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleStartAuth = (test: Test) => {
    setSelectedTest(test);
    setView('auth');
  };

  const handleStartTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (user.name && user.mobile) {
      setView('test');
      setAnswers({});
      setCurrentQuestionIndex(0);
      window.scrollTo(0, 0);
    }
  };

  const handleAnswer = (questionId: number, optionIndex: number) => {
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
    setView('result');
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

    // Background
    doc.setFillColor(255, 250, 250); // Very light pinkish white
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Header Background
    doc.setFillColor(219, 39, 119); // Brand Pink
    doc.rect(0, 0, pageWidth, 40, 'F');

    // Header Text
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("Raj Sir Math Academy", pageWidth / 2, 20, { align: "center" });
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Excellence in Mathematics", pageWidth / 2, 30, { align: "center" });

    // Student Details Section
    doc.setTextColor(30, 41, 59); // Dark Slate
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("OFFICIAL MARKSHEET", pageWidth / 2, 60, { align: "center" });

    doc.setDrawColor(219, 39, 119);
    doc.setLineWidth(0.5);
    doc.line(20, 65, pageWidth - 20, 65);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    const startY = 80;
    const lineHeight = 10;

    doc.text(`Student Name: ${user.name}`, 20, startY);
    doc.text(`Mobile Number: ${user.mobile}`, 20, startY + lineHeight);
    doc.text(`Test Topic: ${selectedTest.topic}`, 20, startY + lineHeight * 2);
    doc.text(`Test Title: ${selectedTest.title}`, 20, startY + lineHeight * 3);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - 60, startY);

    // Score Box
    doc.setFillColor(240, 240, 240);
    doc.roundedRect(pageWidth / 2 - 40, startY + 50, 80, 40, 3, 3, 'F');
    
    doc.setFontSize(14);
    doc.text("Total Score", pageWidth / 2, startY + 65, { align: "center" });
    
    doc.setFontSize(22);
    doc.setTextColor(219, 39, 119);
    doc.setFont("helvetica", "bold");
    doc.text(`${score} / 20`, pageWidth / 2, startY + 80, { align: "center" });

    doc.setFontSize(12);
    doc.setTextColor(30, 41, 59);
    doc.setFont("helvetica", "normal");
    const percentage = Math.round((score / 20) * 100);
    doc.text(`(${percentage}%)`, pageWidth / 2, startY + 95, { align: "center" }); // Percentage below score

    // Footer
    const footerY = pageHeight - 40;
    
    doc.setDrawColor(200, 200, 200);
    doc.line(20, footerY, pageWidth - 20, footerY);

    doc.setFontSize(10);
    doc.text("Authorized Signature", pageWidth - 60, footerY - 10);
    // Placeholder for signature
    doc.setFont("times", "italic");
    doc.text("Raj Sir", pageWidth - 50, footerY - 20);
    
    doc.setFont("helvetica", "normal");
    doc.text(`Contact: ${CONTACT_INFO.phone}`, 20, footerY + 15);
    doc.text(`Email: ${CONTACT_INFO.email}`, 20, footerY + 20);
    doc.text(`Address: ${CONTACT_INFO.address}`, 20, footerY + 25);

    doc.save(`Marksheet_${user.name.replace(/\s+/g, '_')}_${selectedTest.id}.pdf`);
  };

  // Group tests by topic
  const testsByTopic = tests.reduce((acc, test) => {
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
          Free Mock Tests
        </h1>
      </div>

      {/* VIEW: LIST */}
      {view === 'list' && (
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Test Your Knowledge</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Select a topic below to start a free practice test. Each test contains 20 multiple choice questions in Bengali.
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(testsByTopic).map(([topic, topicTests]) => (
              <div key={topic} className="animate-fade-in">
                <h3 className="text-2xl font-bold text-brand-light mb-6 border-l-4 border-brand-pink pl-4">
                  {topic}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topicTests.map(test => (
                    <div 
                      key={test.id}
                      className="bg-dark-900 rounded-2xl p-6 border border-white/5 hover:border-brand-pink/50 transition-all hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
                      onClick={() => handleStartAuth(test)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-dark-800 rounded-xl text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-colors">
                          <Award size={24} />
                        </div>
                        <span className="text-xs font-mono text-slate-500 bg-dark-950 px-2 py-1 rounded border border-white/5">
                          20 Questions
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
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: AUTH */}
      {view === 'auth' && selectedTest && (
        <div className="max-w-md mx-auto mt-12">
          <div className="bg-dark-900 rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-pink">
                <User size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white">Student Details</h2>
              <p className="text-slate-400 text-sm mt-2">Enter your details to start the test</p>
            </div>

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
        </div>
      )}

      {/* VIEW: TEST */}
      {view === 'test' && selectedTest && (
        <div className="max-w-3xl mx-auto">
          <div className="bg-dark-900 rounded-2xl p-6 mb-8 border border-white/10 flex justify-between items-center sticky top-24 z-30 shadow-xl backdrop-blur-md bg-opacity-90">
            <div>
              <h2 className="text-lg font-bold text-white">{selectedTest.title}</h2>
              <p className="text-slate-400 text-sm">Student: <span className="text-brand-light">{user.name}</span></p>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-dark-950 px-4 py-2 rounded-lg border border-white/5">
              <Clock size={18} className="text-brand-pink" />
              <span className="font-mono">Q: {currentQuestionIndex + 1}/{selectedTest.questions.length}</span>
            </div>
          </div>

          <div className="bg-dark-900 rounded-2xl p-6 md:p-8 border border-white/5 min-h-[400px] flex flex-col justify-between">
            <div>
              <div className="flex gap-4 mb-6">
                <span className="flex-shrink-0 w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-brand-light font-bold text-lg border border-white/5">
                  {currentQuestionIndex + 1}
                </span>
                <div className="text-xl text-white font-medium pt-1 leading-relaxed">
                  <Latex>{selectedTest.questions[currentQuestionIndex].text}</Latex>
                </div>
              </div>

              <div className="space-y-4 ml-0 md:ml-14">
                {selectedTest.questions[currentQuestionIndex].options.map((option, optIndex) => (
                  <label 
                    key={optIndex}
                    className={`flex items-center gap-4 p-5 rounded-xl border cursor-pointer transition-all ${
                      answers[selectedTest.questions[currentQuestionIndex].id] === optIndex 
                        ? 'bg-brand-pink/10 border-brand-pink text-white shadow-[0_0_15px_rgba(219,39,119,0.1)]' 
                        : 'bg-dark-950 border-slate-800 text-slate-300 hover:border-slate-600 hover:bg-dark-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q-${selectedTest.questions[currentQuestionIndex].id}`}
                      className="hidden"
                      checked={answers[selectedTest.questions[currentQuestionIndex].id] === optIndex}
                      onChange={() => handleAnswer(selectedTest.questions[currentQuestionIndex].id, optIndex)}
                    />
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      answers[selectedTest.questions[currentQuestionIndex].id] === optIndex ? 'border-brand-pink' : 'border-slate-600'
                    }`}>
                      {answers[selectedTest.questions[currentQuestionIndex].id] === optIndex && <div className="w-3 h-3 bg-brand-pink rounded-full" />}
                    </div>
                    <span className="text-lg"><Latex>{option}</Latex></span>
                  </label>
                ))}
              </div>
            </div>

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
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold shadow-lg transition-all hover:shadow-green-500/20"
                >
                  Submit Test
                  <CheckCircle size={20} />
                </button>
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
        </div>
      )}

      {/* VIEW: RESULT */}
      {view === 'result' && selectedTest && (
        <div className="max-w-2xl mx-auto mt-12">
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
          </div>
        </div>
      )}

    </div>
  );
};
