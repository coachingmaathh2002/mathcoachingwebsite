import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  Download, 
  Printer, 
  Check, 
  Copy, 
  X, 
  ShieldCheck, 
  QrCode, 
  Star, 
  User, 
  Target, 
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle
} from 'lucide-react';
import jsPDF from 'jspdf';

export interface MarksheetData {
  studentName: string;
  testTitle: string;
  topicTitle: string;
  score: number;
  maxScore: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
  percentage: number;
  testDate?: string;
  isChallengeMode?: boolean;
  registrationNo?: string;
}

interface StudentMarksheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: MarksheetData;
}

export const StudentMarksheetModal: React.FC<StudentMarksheetModalProps> = ({
  isOpen,
  onClose,
  data
}) => {
  const [candidateName, setCandidateName] = useState(data.studentName || 'Student Candidate');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const testDateStr = data.testDate || new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const regNo = data.registrationNo || `RSMA-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
  const certId = `VERIFIED-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

  // Calculate Percentile & Grade
  const pct = Math.min(Math.max(data.percentage, 0), 100);
  let percentile = '99.5th';
  let grade = 'S+';
  let titleBadge = 'WBJEE AIR TOPPER TRACK';
  let remarks = 'Exceptional performance! Demonstrates outstanding mastery in problem-solving and speed.';

  if (pct >= 90) {
    percentile = '99.8th';
    grade = 'A+ (Ranker)';
    titleBadge = 'TOPPER EXCELLENCE';
    remarks = 'Outstanding mathematical rigor! High probability of securing Top 100 Rank in WBJEE.';
  } else if (pct >= 80) {
    percentile = '95.2th';
    grade = 'A (Advanced)';
    titleBadge = 'ADVANCED MERIT';
    remarks = 'Excellent conceptual clarity and strong speed accuracy. Ready for WBJEE & JEE Advanced.';
  } else if (pct >= 65) {
    percentile = '88.0th';
    grade = 'B+ (Proficient)';
    titleBadge = 'MERIT QUALIFIED';
    remarks = 'Solid performance with consistent precision. Focus on revising tricky problem sets.';
  } else if (pct >= 50) {
    percentile = '75.0th';
    grade = 'B (Intermediate)';
    titleBadge = 'QUALIFIED';
    remarks = 'Good foundational effort. Regular practice of chapterwise mock tests will boost your percentile.';
  } else {
    percentile = '60.0th';
    grade = 'C (Developing)';
    titleBadge = 'PRACTICE NEEDED';
    remarks = 'Keep practicing! Review step-by-step KaTeX solutions to master core shortcuts.';
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`${certId} | Candidate: ${candidateName} | Score: ${data.score}/${data.maxScore}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Gold Theme Palette
    const goldPrimary: [number, number, number] = [212, 175, 55]; // #D4AF37
    const goldDark: [number, number, number] = [180, 140, 20];
    const darkBg: [number, number, number] = [15, 23, 42]; // Slate 900
    const lightBoxBg: [number, number, number] = [248, 250, 252]; // Slate 50
    const borderGray: [number, number, number] = [226, 232, 240];

    // 1. Outer Double Border Frame
    doc.setDrawColor(...goldPrimary);
    doc.setLineWidth(1.5);
    doc.rect(8, 8, pageWidth - 16, pageHeight - 16);
    
    doc.setLineWidth(0.4);
    doc.rect(10.5, 10.5, pageWidth - 21, pageHeight - 21);

    // Decorative Gold Corner Squares
    const corners = [
      [10.5, 10.5],
      [pageWidth - 14.5, 10.5],
      [10.5, pageHeight - 14.5],
      [pageWidth - 14.5, pageHeight - 14.5]
    ];
    corners.forEach(([x, y]) => {
      doc.setFillColor(...goldPrimary);
      doc.rect(x, y, 4, 4, 'F');
    });

    // 2. Academy Header
    doc.setFont("times", "bold");
    doc.setFontSize(24);
    doc.setTextColor(...darkBg);
    doc.text("RAJ SIR MATH ACADEMY", pageWidth / 2, 28, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...goldDark);
    doc.text("PREMIUM CENTER FOR WBJEE & JEE ADVANCED MATHEMATICS EXCELLENCE", pageWidth / 2, 34, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text("ISO 9001:2025 Certified Examination Portal • Kolkata, West Bengal", pageWidth / 2, 39, { align: "center" });

    // Decorative Line
    doc.setDrawColor(...goldPrimary);
    doc.setLineWidth(0.6);
    doc.line(35, 43, pageWidth - 35, 43);

    // 3. Marksheet Title Ribbon
    doc.setFillColor(...goldPrimary);
    doc.rect(pageWidth / 2 - 60, 48, 120, 10, 'F');
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text("OFFICIAL MERIT PERFORMANCE MARKSHEET", pageWidth / 2, 54.5, { align: "center" });

    // 4. Candidate & Exam Information Card
    const infoY = 66;
    doc.setFillColor(...lightBoxBg);
    doc.setDrawColor(...borderGray);
    doc.roundedRect(15, infoY, pageWidth - 30, 42, 2, 2, 'FD');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);

    // Left Column
    doc.text("Candidate Name:", 20, infoY + 10);
    doc.text("Registration No:", 20, infoY + 20);
    doc.text("Test Date:", 20, infoY + 30);

    // Right Column
    doc.text("Exam Name:", pageWidth / 2 + 5, infoY + 10);
    doc.text("Chapter / Topic:", pageWidth / 2 + 5, infoY + 20);
    doc.text("Credential Verification ID:", pageWidth / 2 + 5, infoY + 30);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);

    doc.text(candidateName.toUpperCase(), 50, infoY + 10);
    doc.text(regNo, 50, infoY + 20);
    doc.text(testDateStr, 50, infoY + 30);

    doc.text(data.testTitle, pageWidth / 2 + 48, infoY + 10);
    doc.text(data.topicTitle.length > 25 ? data.topicTitle.substring(0, 24) + '...' : data.topicTitle, pageWidth / 2 + 48, infoY + 20);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...goldDark);
    doc.text(certId, pageWidth / 2 + 48, infoY + 30);

    // 5. Performance Metrics & Score Summary Table
    const tableY = 118;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(15, 23, 42);
    doc.text("SCORE ASSESSMENT & METRICS", 15, tableY);

    // Table Header
    const thY = tableY + 5;
    doc.setFillColor(...darkBg);
    doc.rect(15, thY, pageWidth - 30, 8, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text("METRIC PARAMETER", 20, thY + 5.5);
    doc.text("VALUE / RESULT", pageWidth / 2 + 20, thY + 5.5);

    // Table Rows
    const rows = [
      ["Total Questions Attempted", `${data.correctAnswers + data.incorrectAnswers} / ${data.maxScore}`],
      ["Correct Answers (+1 Mark each)", `${data.correctAnswers} Correct`],
      ["Incorrect Answers (-0.25 Mark penalty)", `${data.incorrectAnswers} Incorrect`],
      ["Unanswered Questions", `${data.unanswered} Skipped`],
      ["Net Assessment Score", `${data.score} / ${data.maxScore}`],
      ["Accuracy Percentage", `${data.percentage.toFixed(1)}%`],
      ["Estimated Rank Percentile", `${percentile} Percentile (${titleBadge})`],
      ["Performance Grade", `${grade}`]
    ];

    let currentY = thY + 8;
    rows.forEach((row, idx) => {
      const isEven = idx % 2 === 0;
      doc.setFillColor(isEven ? 255 : 248, isEven ? 255 : 250, isEven ? 255 : 252);
      doc.setDrawColor(...borderGray);
      doc.rect(15, currentY, pageWidth - 30, 7.5, 'FD');

      doc.setFont("helvetica", idx >= 4 ? "bold" : "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text(row[0], 20, currentY + 5);

      if (idx === 4 || idx === 5) {
        doc.setTextColor(...goldDark);
      } else if (idx === 1) {
        doc.setTextColor(16, 185, 129);
      } else if (idx === 2) {
        doc.setTextColor(239, 68, 68);
      } else {
        doc.setTextColor(15, 23, 42);
      }
      doc.text(row[1], pageWidth / 2 + 20, currentY + 5);

      currentY += 7.5;
    });

    // 6. Remarks Box
    const remarksY = currentY + 8;
    doc.setFillColor(254, 252, 232); // Light yellow
    doc.setDrawColor(...goldPrimary);
    doc.roundedRect(15, remarksY, pageWidth - 30, 20, 2, 2, 'FD');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...goldDark);
    doc.text("FACULTY EVALUATION & REMARKS:", 20, remarksY + 7);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    doc.text(`"${remarks}"`, 20, remarksY + 14);

    // 7. Signature & Seal Footer
    const footerY = pageHeight - 45;

    // Official Gold Stamp Graphic Box
    doc.setDrawColor(...goldPrimary);
    doc.setLineWidth(0.8);
    doc.circle(38, footerY + 10, 12, 'D');
    doc.setFont("times", "bold");
    doc.setFontSize(6.5);
    doc.setTextColor(...goldDark);
    doc.text("RAJ SIR MATH", 38, footerY + 8, { align: "center" });
    doc.text("ACADEMY", 38, footerY + 11, { align: "center" });
    doc.text("★ SEAL ★", 38, footerY + 14, { align: "center" });

    // Center QR Notice
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text("Digitally Certified by Raj Sir Math Academy", pageWidth / 2, footerY + 8, { align: "center" });
    doc.text("System Verification Code: " + certId, pageWidth / 2, footerY + 13, { align: "center" });

    // Right Signature Line
    doc.setDrawColor(15, 23, 42);
    doc.setLineWidth(0.4);
    doc.line(pageWidth - 65, footerY + 12, pageWidth - 20, footerY + 12);

    doc.setFont("times", "italic");
    doc.setFontSize(12);
    doc.setTextColor(15, 23, 42);
    doc.text("Raj Das", pageWidth - 42.5, footerY + 8, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("Raj Das (M.Sc. Gold Medalist)", pageWidth - 42.5, footerY + 16, { align: "center" });
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text("Principal Director & Head of Math", pageWidth - 42.5, footerY + 20, { align: "center" });

    // Save File
    const filename = `Marksheet_${candidateName.replace(/\s+/g, '_')}_${data.testTitle.replace(/\s+/g, '_')}.pdf`;
    doc.save(filename);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-dark-950/80 backdrop-blur-md">
        
        {/* Printable CSS injected to format A4 print clean */}
        <style>{`
          @media print {
            body * {
              visibility: hidden;
            }
            #printable-certificate, #printable-certificate * {
              visibility: visible;
            }
            #printable-certificate {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              margin: 0;
              padding: 20px;
              background: white !important;
              color: black !important;
              box-shadow: none !important;
              border-color: #D4AF37 !important;
            }
            .no-print {
              display: none !important;
            }
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-4xl bg-dark-900 border border-brand-gold/40 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden my-auto"
        >
          {/* Top Decorative Gradient Line */}
          <div className="h-2 w-full bg-gradient-to-r from-brand-gold via-yellow-300 to-amber-500"></div>

          {/* Modal Toolbar Header */}
          <div className="no-print flex items-center justify-between p-5 border-b border-white/10 bg-dark-950/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-base font-display font-bold text-white leading-tight">
                  Official Merit Marksheet & Certificate
                </h3>
                <p className="text-[11px] text-slate-400">
                  Verified Performance Credential from Raj Sir Math Academy
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={generatePDF}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-gold text-dark-950 font-bold text-xs hover:bg-yellow-400 transition-all shadow-md"
              >
                <Download size={15} />
                <span>Download PDF</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs border border-white/10 transition-all"
              >
                <Printer size={15} />
                <span className="hidden sm:inline">Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Container */}
          <div className="p-4 sm:p-8 max-h-[80vh] overflow-y-auto no-scrollbar">
            
            {/* Name Input Bar for Student Personalization */}
            <div className="no-print mb-6 p-4 rounded-2xl bg-dark-950 border border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <User size={18} className="text-brand-gold shrink-0" />
                <span className="text-xs font-bold text-slate-300 whitespace-nowrap">Candidate Name on Certificate:</span>
              </div>
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full sm:w-72 bg-dark-900 border border-white/10 focus:border-brand-gold text-white font-bold text-sm rounded-xl px-3.5 py-2 outline-none transition-all"
              />
            </div>

            {/* ========================================================= */}
            {/* PRINTABLE MARKSHEET CARD CONTAINER                       */}
            {/* ========================================================= */}
            <div 
              id="printable-certificate"
              className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border-4 border-double border-brand-gold/80 shadow-2xl relative overflow-hidden"
            >
              {/* Background Watermark Stamp */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                <Award size={400} className="text-brand-gold" />
              </div>

              {/* Gold Ribbon Badge at Top Right */}
              <div className="absolute top-6 right-6 hidden sm:flex flex-col items-end">
                <div className="px-3 py-1 bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest rounded-md shadow-md border border-amber-600">
                  {titleBadge}
                </div>
                <span className="text-[10px] font-mono text-slate-500 mt-1">{certId}</span>
              </div>

              {/* 1. Header Section */}
              <div className="text-center pb-6 border-b-2 border-brand-gold/30">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Sparkles size={13} className="text-amber-600" />
                  <span>ISO 9001:2025 Certified Academy</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight">
                  RAJ SIR MATH ACADEMY
                </h1>
                
                <p className="text-xs sm:text-sm font-semibold text-amber-700 tracking-widest uppercase mt-1">
                  Premium Center for WBJEE & JEE Advanced Mathematics Excellence
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Kolkata, West Bengal • Official Online Assessment Cell
                </p>
              </div>

              {/* 2. Certificate Title Ribbon */}
              <div className="my-6 text-center">
                <div className="inline-block bg-slate-900 text-amber-400 px-6 py-2 rounded-xl text-sm sm:text-base font-bold tracking-wider uppercase shadow-md border border-amber-500/40">
                  Merit Performance Marksheet
                </div>
              </div>

              {/* 3. Candidate & Examination Details Grid */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-500 w-28">Candidate Name:</span>
                    <span className="font-bold text-slate-900 text-sm uppercase">{candidateName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-500 w-28">Registration No:</span>
                    <span className="font-mono font-bold text-slate-800">{regNo}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-500 w-28">Assessment Date:</span>
                    <span className="font-medium text-slate-800">{testDateStr}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-500 w-28">Exam Title:</span>
                    <span className="font-bold text-slate-900">{data.testTitle}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-500 w-28">Chapter / Topic:</span>
                    <span className="font-medium text-slate-800">{data.topicTitle}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-500 w-28">Test Mode:</span>
                    <span className="font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded text-[10px]">
                      {data.isChallengeMode ? 'Timed Challenge (-0.25 Mark)' : 'Practice Assessment'}
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Score Metrics Breakdown Table */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Target size={15} className="text-amber-600" />
                  <span>Performance Assessment Breakdown</span>
                </h4>

                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3">Assessment Metric</th>
                        <th className="p-3">Questions / Count</th>
                        <th className="p-3 text-right">Score Weightage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-medium">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 flex items-center gap-2 text-slate-800">
                          <CheckCircle2 size={15} className="text-emerald-600" />
                          <span>Correct Answers</span>
                        </td>
                        <td className="p-3 font-bold text-emerald-700">{data.correctAnswers} Questions</td>
                        <td className="p-3 text-right font-bold text-emerald-700">+{data.correctAnswers}.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 flex items-center gap-2 text-slate-800">
                          <XCircle size={15} className="text-red-500" />
                          <span>Incorrect Answers</span>
                        </td>
                        <td className="p-3 font-bold text-red-600">{data.incorrectAnswers} Questions</td>
                        <td className="p-3 text-right font-bold text-red-600">
                          {data.isChallengeMode ? `-${(data.incorrectAnswers * 0.25).toFixed(2)}` : '0.00'}
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 flex items-center gap-2 text-slate-800">
                          <HelpCircle size={15} className="text-slate-400" />
                          <span>Unanswered / Skipped</span>
                        </td>
                        <td className="p-3 font-bold text-slate-600">{data.unanswered} Questions</td>
                        <td className="p-3 text-right text-slate-500">0.00</td>
                      </tr>
                      <tr className="bg-amber-50/80 font-bold text-slate-900 border-t-2 border-amber-300">
                        <td className="p-3 text-sm">Net Final Marks Secured</td>
                        <td className="p-3 text-sm">{data.score} out of {data.maxScore}</td>
                        <td className="p-3 text-right text-base text-amber-800 font-extrabold">{data.score} Marks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5. Percentile & Accuracy Highlight Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-slate-900 text-white p-4 rounded-2xl text-center">
                  <span className="text-[10px] text-amber-400 font-bold uppercase block mb-0.5">Accuracy</span>
                  <span className="text-2xl font-extrabold text-white">{pct.toFixed(1)}%</span>
                </div>
                <div className="bg-amber-500 text-slate-950 p-4 rounded-2xl text-center shadow-md">
                  <span className="text-[10px] font-bold uppercase block mb-0.5">Est. Rank Percentile</span>
                  <span className="text-2xl font-extrabold">{percentile}</span>
                </div>
                <div className="bg-slate-100 border border-slate-200 p-4 rounded-2xl text-center col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block mb-0.5">Performance Grade</span>
                  <span className="text-2xl font-extrabold text-slate-900">{grade}</span>
                </div>
              </div>

              {/* 6. Faculty Remarks Box */}
              <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-4 mb-8">
                <h5 className="text-[11px] font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-amber-600" />
                  <span>Lead Faculty Remarks & Guidance:</span>
                </h5>
                <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
                  "{remarks}"
                </p>
              </div>

              {/* 7. Verification Seal & Signature Footer */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                {/* Official Gold Seal Graphic */}
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 border-4 border-white shadow-lg flex flex-col items-center justify-center text-slate-950 shrink-0">
                    <Star size={16} className="fill-slate-950" />
                    <span className="text-[8px] font-black uppercase tracking-tighter">OFFICIAL</span>
                    <span className="text-[7px] font-bold">SEAL</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">VERIFIED MERIT CREDENTIAL</span>
                    <span className="block text-[10px] font-mono text-slate-500">Hash: {certId}</span>
                  </div>
                </div>

                {/* Signature Block */}
                <div className="text-center sm:text-right">
                  <div className="font-serif italic text-xl font-bold text-slate-900 mb-1">
                    Raj Das
                  </div>
                  <div className="h-0.5 w-32 bg-slate-900 mx-auto sm:ml-auto mb-1"></div>
                  <span className="block text-xs font-bold text-slate-900">Raj Das (M.Sc. Gold Medalist)</span>
                  <span className="block text-[10px] text-slate-500 font-medium">
                    Principal Director & Lead Faculty, Raj Sir Math Academy
                  </span>
                </div>
              </div>

            </div>

            {/* Modal Bottom Share Bar */}
            <div className="no-print mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-dark-950 border border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <QrCode size={18} className="text-brand-gold shrink-0" />
                <span>Verification ID: <strong className="text-white font-mono">{certId}</strong></span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleCopyCode}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-bold text-xs border border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                  <span>{copied ? 'Copied Verification Code!' : 'Copy Verification Info'}</span>
                </button>

                <button
                  onClick={generatePDF}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500 text-dark-950 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Download size={15} />
                  <span>Download Official PDF</span>
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
