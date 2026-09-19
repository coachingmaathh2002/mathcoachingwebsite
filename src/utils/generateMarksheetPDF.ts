import jsPDF from 'jspdf';
import { ExamEvaluationResult, WBJEECategory } from './wbjeeExamEngine';

export interface MarksheetPDFOptions {
  candidateName: string;
  testTitle: string;
  topicTitle: string;
  registrationNo?: string;
  certId?: string;
  testDate?: string;
  evaluation: ExamEvaluationResult;
}

export function generateMarksheetPDF(options: MarksheetPDFOptions): void {
  const {
    candidateName,
    testTitle,
    topicTitle,
    registrationNo = `RSMA-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
    certId = `VERIFIED-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
    testDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
    evaluation
  } = options;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Palette
  const goldPrimary: [number, number, number] = [212, 175, 55]; // #D4AF37
  const goldDark: [number, number, number] = [160, 120, 15];
  const darkBg: [number, number, number] = [15, 23, 42]; // Slate 900
  const lightBoxBg: [number, number, number] = [248, 250, 252]; // Slate 50
  const borderGray: [number, number, number] = [226, 232, 240];

  // 1. Double Border Frame
  doc.setDrawColor(...goldPrimary);
  doc.setLineWidth(1.2);
  doc.rect(8, 8, pageWidth - 16, pageHeight - 16);

  doc.setLineWidth(0.3);
  doc.rect(10.5, 10.5, pageWidth - 21, pageHeight - 21);

  // Corner Accents
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
  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...darkBg);
  doc.text('RAJ SIR MATH ACADEMY', pageWidth / 2, 25, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...goldDark);
  doc.text('PREMIUM CENTER FOR WBJEE & JEE ADVANCED MATHEMATICS EXCELLENCE', pageWidth / 2, 30.5, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('ISO 9001:2025 Certified Examination Cell • Kolkata, West Bengal', pageWidth / 2, 35, { align: 'center' });

  doc.setDrawColor(...goldPrimary);
  doc.setLineWidth(0.5);
  doc.line(30, 39, pageWidth - 30, 39);

  // 3. Marksheet Title Ribbon
  doc.setFillColor(...goldPrimary);
  doc.rect(pageWidth / 2 - 65, 43, 130, 8.5, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('WBJEE CBT SCORECARD & MERIT PERFORMANCE MARKSHEET', pageWidth / 2, 48.5, { align: 'center' });

  // 4. Candidate & Exam Information Card
  const infoY = 56;
  doc.setFillColor(...lightBoxBg);
  doc.setDrawColor(...borderGray);
  doc.roundedRect(14, infoY, pageWidth - 28, 36, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);

  // Left Column
  doc.text('Candidate Name:', 18, infoY + 8);
  doc.text('Registration No:', 18, infoY + 16);
  doc.text('Assessment Date:', 18, infoY + 24);
  doc.text('Time Taken / Duration:', 18, infoY + 31);

  // Right Column
  doc.text('Exam Title:', pageWidth / 2 + 3, infoY + 8);
  doc.text('Chapter / Subject:', pageWidth / 2 + 3, infoY + 16);
  doc.text('Evaluation Standard:', pageWidth / 2 + 3, infoY + 24);
  doc.text('Verification Code:', pageWidth / 2 + 3, infoY + 31);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);

  const timeStr = `${Math.floor(evaluation.totalTimeSeconds / 60)}m ${evaluation.totalTimeSeconds % 60}s (Avg ${evaluation.averageTimePerQuestion}s/Q)`;

  doc.text(candidateName.toUpperCase(), 48, infoY + 8);
  doc.text(registrationNo, 48, infoY + 16);
  doc.text(testDate, 48, infoY + 24);
  doc.text(timeStr, 48, infoY + 31);

  doc.text(testTitle.length > 32 ? testTitle.substring(0, 31) + '...' : testTitle, pageWidth / 2 + 42, infoY + 8);
  doc.text(topicTitle.length > 30 ? topicTitle.substring(0, 29) + '...' : topicTitle, pageWidth / 2 + 42, infoY + 16);
  doc.text('WBJEE Category 1, 2, 3 Pattern', pageWidth / 2 + 42, infoY + 24);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...goldDark);
  doc.text(certId, pageWidth / 2 + 42, infoY + 31);

  // 5. WBJEE Category 1, 2, 3 Breakdown Table
  const catTableY = 98;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('WBJEE CATEGORY-WISE MARKS & TIME BREAKDOWN', 14, catTableY);

  const thY = catTableY + 4;
  doc.setFillColor(...darkBg);
  doc.rect(14, thY, pageWidth - 28, 7.5, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text('EXAM CATEGORY & MARKING SCHEME', 18, thY + 5);
  doc.text('QUESTIONS', 95, thY + 5);
  doc.text('CORRECT', 118, thY + 5);
  doc.text('INCORRECT', 138, thY + 5);
  doc.text('TIME SPENT', 160, thY + 5);
  doc.text('MARKS', pageWidth - 20, thY + 5, { align: 'right' });

  const catRows: {
    category: WBJEECategory;
    name: string;
    total: number;
    attempted: number;
    correct: number;
    incorrect: number;
    time: string;
    score: string;
  }[] = [
    {
      category: 1,
      name: 'Category 1 (+1.00 / -0.25 Mark)',
      total: evaluation.categorySummaries[1].totalQuestions,
      attempted: evaluation.categorySummaries[1].attempted,
      correct: evaluation.categorySummaries[1].correct,
      incorrect: evaluation.categorySummaries[1].incorrect,
      time: `${Math.floor(evaluation.categorySummaries[1].timeSpentSeconds / 60)}m ${evaluation.categorySummaries[1].timeSpentSeconds % 60}s`,
      score: `${evaluation.categorySummaries[1].marksSecured.toFixed(2)} / ${evaluation.categorySummaries[1].maxMarks.toFixed(2)}`
    },
    {
      category: 2,
      name: 'Category 2 (+2.00 / -0.50 Mark)',
      total: evaluation.categorySummaries[2].totalQuestions,
      attempted: evaluation.categorySummaries[2].attempted,
      correct: evaluation.categorySummaries[2].correct,
      incorrect: evaluation.categorySummaries[2].incorrect,
      time: `${Math.floor(evaluation.categorySummaries[2].timeSpentSeconds / 60)}m ${evaluation.categorySummaries[2].timeSpentSeconds % 60}s`,
      score: `${evaluation.categorySummaries[2].marksSecured.toFixed(2)} / ${evaluation.categorySummaries[2].maxMarks.toFixed(2)}`
    },
    {
      category: 3,
      name: 'Category 3 (+2.00 / 0.00 Multi-Correct)',
      total: evaluation.categorySummaries[3].totalQuestions,
      attempted: evaluation.categorySummaries[3].attempted,
      correct: evaluation.categorySummaries[3].correct + (evaluation.categorySummaries[3].partial > 0 ? ` (+${evaluation.categorySummaries[3].partial} Part)` : '') as any,
      incorrect: evaluation.categorySummaries[3].incorrect,
      time: `${Math.floor(evaluation.categorySummaries[3].timeSpentSeconds / 60)}m ${evaluation.categorySummaries[3].timeSpentSeconds % 60}s`,
      score: `${evaluation.categorySummaries[3].marksSecured.toFixed(2)} / ${evaluation.categorySummaries[3].maxMarks.toFixed(2)}`
    }
  ];

  let catCurrentY = thY + 7.5;
  catRows.forEach((r, idx) => {
    const isEven = idx % 2 === 0;
    doc.setFillColor(isEven ? 255 : 248, isEven ? 255 : 250, isEven ? 255 : 252);
    doc.setDrawColor(...borderGray);
    doc.rect(14, catCurrentY, pageWidth - 28, 7.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    doc.text(r.name, 18, catCurrentY + 5);

    doc.setFont('helvetica', 'normal');
    doc.text(`${r.attempted}/${r.total}`, 95, catCurrentY + 5);

    doc.setTextColor(16, 185, 129);
    doc.text(String(r.correct), 118, catCurrentY + 5);

    doc.setTextColor(239, 68, 68);
    doc.text(String(r.incorrect), 138, catCurrentY + 5);

    doc.setTextColor(71, 85, 105);
    doc.text(r.time, 160, catCurrentY + 5);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...goldDark);
    doc.text(r.score, pageWidth - 20, catCurrentY + 5, { align: 'right' });

    catCurrentY += 7.5;
  });

  // Category Table Total Row
  doc.setFillColor(254, 252, 232);
  doc.setDrawColor(...goldPrimary);
  doc.rect(14, catCurrentY, pageWidth - 28, 8, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('TOTAL / NET AGGREGATE', 18, catCurrentY + 5.5);
  doc.text(`${evaluation.totalAttempted} / ${evaluation.totalQuestions}`, 95, catCurrentY + 5.5);

  doc.setTextColor(16, 185, 129);
  doc.text(String(evaluation.totalCorrect), 118, catCurrentY + 5.5);

  doc.setTextColor(239, 68, 68);
  doc.text(String(evaluation.totalIncorrect), 138, catCurrentY + 5.5);

  doc.setTextColor(71, 85, 105);
  doc.text(`${Math.floor(evaluation.totalTimeSeconds / 60)}m ${evaluation.totalTimeSeconds % 60}s`, 160, catCurrentY + 5.5);

  doc.setFontSize(9.5);
  doc.setTextColor(...goldDark);
  doc.text(`${evaluation.netScore.toFixed(2)} / ${evaluation.maxTotalScore.toFixed(2)}`, pageWidth - 20, catCurrentY + 5.5, { align: 'right' });

  // 6. Overall Performance Cards
  const scoreCardY = catCurrentY + 13;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('OVERALL SPEED, ACCURACY & RANK ANALYSIS', 14, scoreCardY);

  const cardWidth = (pageWidth - 28 - 9) / 4;
  const cardsY = scoreCardY + 4;

  const pct = evaluation.percentage;
  let percentile = '99.5th';
  let grade = 'A+ (Ranker)';
  let remarks = 'Outstanding speed and conceptual accuracy! On track for Top 100 Rank in WBJEE.';
  if (pct >= 80) {
    percentile = '96.4th';
    grade = 'A (Advanced)';
    remarks = 'Superb mathematical precision and time management. Keep maintaining this consistency.';
  } else if (pct >= 65) {
    percentile = '88.2th';
    grade = 'B+ (Proficient)';
    remarks = 'Good performance. Work on reducing negative penalty in Category 1 and 2.';
  } else if (pct >= 50) {
    percentile = '75.0th';
    grade = 'B (Intermediate)';
    remarks = 'Satisfactory foundation. Timed practice on Category 3 multi-correct problems will raise your score.';
  } else {
    percentile = '62.0th';
    grade = 'C (Developing)';
    remarks = 'Focus on conceptual clarity and avoid hasty guesses in questions with negative marking.';
  }

  const cardsData = [
    { label: 'NET SCORE', val: `${evaluation.netScore.toFixed(2)} / ${evaluation.maxTotalScore.toFixed(2)}`, sub: `${evaluation.percentage.toFixed(1)}% Score` },
    { label: 'ACCURACY RATE', val: `${evaluation.accuracyRate}%`, sub: `${evaluation.totalCorrect} Correct / ${evaluation.totalAttempted} Attempted` },
    { label: 'AVG TIME / Q', val: `${evaluation.averageTimePerQuestion}s`, sub: `${Math.floor(evaluation.totalTimeSeconds / 60)}m Total Time` },
    { label: 'EST. WBJEE RANK', val: percentile, sub: `Grade: ${grade}` }
  ];

  cardsData.forEach((card, i) => {
    const cx = 14 + i * (cardWidth + 3);
    doc.setFillColor(15, 23, 42);
    doc.roundedRect(cx, cardsY, cardWidth, 18, 1.5, 1.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(...goldPrimary);
    doc.text(card.label, cx + cardWidth / 2, cardsY + 5, { align: 'center' });

    doc.setFontSize(10.5);
    doc.setTextColor(255, 255, 255);
    doc.text(card.val, cx + cardWidth / 2, cardsY + 11.5, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6);
    doc.setTextColor(148, 163, 184);
    doc.text(card.sub, cx + cardWidth / 2, cardsY + 15.5, { align: 'center' });
  });

  // 7. Faculty Remarks Box
  const remY = cardsY + 23;
  doc.setFillColor(254, 252, 232);
  doc.setDrawColor(...goldPrimary);
  doc.roundedRect(14, remY, pageWidth - 28, 17, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(...goldDark);
  doc.text('FACULTY EVALUATION & MENTOR REMARKS:', 18, remY + 5.5);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  doc.text(`"${remarks}"`, 18, remY + 11.5);

  // 8. Seal & Signature Footer
  const footerY = pageHeight - 38;

  // Gold Seal Stamp
  doc.setDrawColor(...goldPrimary);
  doc.setLineWidth(0.7);
  doc.circle(32, footerY + 8, 10, 'D');
  doc.setFont('times', 'bold');
  doc.setFontSize(5.5);
  doc.setTextColor(...goldDark);
  doc.text('RAJ SIR MATH', 32, footerY + 6.5, { align: 'center' });
  doc.text('ACADEMY', 32, footerY + 9, { align: 'center' });
  doc.text('★ VERIFIED ★', 32, footerY + 11.5, { align: 'center' });

  // Center QR Notice
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text('Digitally Certified WBJEE CBT Assessment Record', pageWidth / 2, footerY + 6, { align: 'center' });
  doc.text(`Verification Hash: ${certId} • Ref: ${registrationNo}`, pageWidth / 2, footerY + 10, { align: 'center' });
  doc.text('Valid for Academic Mentorship and Batch Stream Allocation', pageWidth / 2, footerY + 14, { align: 'center' });

  // Signature on Right
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.4);
  doc.line(pageWidth - 62, footerY + 10, pageWidth - 16, footerY + 10);

  doc.setFont('times', 'italic');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('Raj Das', pageWidth - 39, footerY + 7, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.text('Raj Das (M.Sc. Gold Medalist)', pageWidth - 39, footerY + 13.5, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Principal Director & Head of Math', pageWidth - 39, footerY + 17, { align: 'center' });

  // Save PDF
  const safeCandidate = candidateName.replace(/[^a-zA-Z0-9_-]/g, '_');
  const safeTitle = testTitle.replace(/[^a-zA-Z0-9_-]/g, '_');
  doc.save(`WBJEE_Marksheet_${safeCandidate}_${safeTitle}.pdf`);
}
