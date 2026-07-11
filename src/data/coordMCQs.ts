import { MCQ } from '../components/WBJEEAssignments';

export const straightLinesMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `coord-1-${i + 1}`,
  question: `মূলবিন্দু থেকে $${i+1}x + ${i+2}y = ${i+3}$ সরলরেখার লম্ব দূরত্ব কত?`,
  options: [`$\\frac{${i+3}}{\\sqrt{${(i+1)**2 + (i+2)**2}}}$`, `$\\frac{${i+3}}{${(i+1)**2 + (i+2)**2}}$`, `$\\frac{${i+1}}{\\sqrt{${(i+1)**2 + (i+2)**2}}}$`, `0`],
  correctAnswer: 0,
  explanation: `মূলবিন্দু $(0,0)$ থেকে $ax+by+c=0$ রেখার লম্ব দূরত্ব $d = \\frac{|c|}{\\sqrt{a^2+b^2}}$। এখানে $a=${i+1}, b=${i+2}, c=-${i+3}$। সুতরাং, $d = \\frac{${i+3}}{\\sqrt{${(i+1)**2 + (i+2)**2}}}$।`
}));

export const circlesMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `coord-2-${i + 1}`,
  question: `$x^2 + y^2 - ${2*(i+1)}x - ${2*(i+2)}y = 0$ বৃত্তের ব্যাসার্ধ কত?`,
  options: [`$\\sqrt{${(i+1)**2 + (i+2)**2}}$`, `${(i+1)**2 + (i+2)**2}`, `$\\sqrt{${i+1}}$`, `0`],
  correctAnswer: 0,
  explanation: `বৃত্তের সমীকরণ $x^2 + y^2 + 2gx + 2fy + c = 0$ এর ক্ষেত্রে ব্যাসার্ধ $r = \\sqrt{g^2 + f^2 - c}$। এখানে $g = -${i+1}, f = -${i+2}, c = 0$, তাই $r = \\sqrt{${(i+1)**2 + (i+2)**2}}$।`
}));

export const parabolaMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `coord-3-${i + 1}`,
  question: `$y^2 = ${4*(i+1)}x$ অধিবৃত্তের নাভিলম্বের (Latus Rectum) দৈর্ঘ্য কত?`,
  options: [`${4*(i+1)}`, `${2*(i+1)}`, `${i+1}`, `${8*(i+1)}`],
  correctAnswer: 0,
  explanation: `$y^2 = 4ax$ অধিবৃত্তের নাভিলম্বের দৈর্ঘ্য $4a$। এখানে $4a = ${4*(i+1)}$।`
}));

export const ellipseMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `coord-4-${i + 1}`,
  question: `$\\frac{x^2}{${(i+2)**2}} + \\frac{y^2}{${(i+1)**2}} = 1$ উপবৃত্তের উৎকেন্দ্রতা $e$ কত?`,
  options: [`$\\frac{\\sqrt{${(i+2)**2 - (i+1)**2}}}{${i+2}}$`, `$\\frac{${(i+2)**2 - (i+1)**2}}{${(i+2)**2}}$`, `$\\frac{\\sqrt{${(i+2)**2 + (i+1)**2}}}{${i+2}}$`, `0`],
  correctAnswer: 0,
  explanation: `উপবৃত্তের উৎকেন্দ্রতা $e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\sqrt{1 - \\frac{${(i+1)**2}}{${(i+2)**2}}} = \\sqrt{\\frac{${(i+2)**2 - (i+1)**2}}{${(i+2)**2}}} = \\frac{\\sqrt{${(i+2)**2 - (i+1)**2}}}{${i+2}}$।`
}));

export const hyperbolaMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `coord-5-${i + 1}`,
  question: `$\\frac{x^2}{${(i+1)**2}} - \\frac{y^2}{${(i+2)**2}} = 1$ পরাবৃত্তের উৎকেন্দ্রতা $e$ কত?`,
  options: [`$\\frac{\\sqrt{${(i+1)**2 + (i+2)**2}}}{${i+1}}$`, `$\\frac{\\sqrt{${(i+1)**2 - (i+2)**2}}}{${i+1}}$`, `$\\frac{${(i+1)**2 + (i+2)**2}}{${(i+1)**2}}$`, `$\\frac{\\sqrt{${(i+1)**2 + (i+2)**2}}}{${i+2}}$`],
  correctAnswer: 0,
  explanation: `পরাবৃত্তের (Hyperbola) উৎকেন্দ্রতা $e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\sqrt{1 + \\frac{${(i+2)**2}}{${(i+1)**2}}} = \\frac{\\sqrt{${(i+1)**2 + (i+2)**2}}}{${i+1}}$।`
}));
