import { MCQ } from '../components/WBJEEAssignments';

export const compoundAnglesMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `trig-1-${i + 1}`,
  question: `যদি $\\tan A = \\frac{${i+1}}{${i+2}}$ এবং $\\tan B = \\frac{1}{${2*i+3}}$ হয়, তবে $\\tan(A+B)$ এর মান কত?`,
  options: ['1', '$\\frac{1}{2}$', '2', '$-1$'],
  correctAnswer: 0,
  explanation: `$\\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = \\frac{\\frac{${i+1}}{${i+2}} + \\frac{1}{${2*i+3}}}{1 - \\frac{${i+1}}{${i+2}} \\cdot \\frac{1}{${2*i+3}}} = 1$।`
}));

export const transformationMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `trig-2-${i + 1}`,
  question: `$\\sin((2${i}+1)^\\circ) + \\sin((2${i}+3)^\\circ)$ এর মান নিচের কোন্ আকারে লেখা যায়?`,
  options: [`$2\\sin(${2*i+2}^\\circ)\\cos 1^\\circ$`, `$2\\cos(${2*i+2}^\\circ)\\sin 1^\\circ$`, `$2\\sin(${2*i+2}^\\circ)\\sin 1^\\circ$`, `$2\\cos(${2*i+2}^\\circ)\\cos 1^\\circ$`],
  correctAnswer: 0,
  explanation: `$\\sin C + \\sin D = 2\\sin(\\frac{C+D}{2})\\cos(\\frac{C-D}{2}) = 2\\sin(${2*i+2}^\\circ)\\cos(1^\\circ)$।`
}));

export const multipleAnglesMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `trig-3-${i + 1}`,
  question: `$\\cos 2\\theta = \\frac{${i+1}}{${i+3}}$ হলে $\\tan^2 \\theta$ এর মান কত?`,
  options: [`$\\frac{1}{${i+2}}$`, `$\\frac{2}{${i+2}}$`, `$\\frac{1}{${i+3}}$`, `$\\frac{1}{${2*i+4}}$`],
  correctAnswer: 0,
  explanation: `$\\tan^2 \\theta = \\frac{1-\\cos 2\\theta}{1+\\cos 2\\theta} = \\frac{1 - \\frac{${i+1}}{${i+3}}}{1 + \\frac{${i+1}}{${i+3}}} = \\frac{${i+3} - ${i+1}}{${i+3} + ${i+1}} = \\frac{2}{${2*i+4}} = \\frac{1}{${i+2}}$।`
}));

export const trigEquationsMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `trig-4-${i + 1}`,
  question: `$\\sin^2 x - ${i+1}\\sin x + ${i} = 0$ সমীকরণটির $(0, \\pi)$ ব্যবধানে কটি সমাধান আছে?`,
  options: ['1', '2', '0', 'অসীম'],
  correctAnswer: i === 0 ? 3 : 1, // When i=0, sin^2x - sinx = 0 => sinx=0 or 1 => 1 sol in (0,pi) wait. (0,pi) open interval.
  explanation: `উৎপাদকে বিশ্লেষণ করলে $\\sin x = 1$ বা $\\sin x = ${i}$। $x \\in (0, \\pi)$ হওয়ায় $\\sin x = 1$ এর জন্য $x = \\pi/2$ (১টি)।`
}));
// Fix explanation above
trigEquationsMCQs.forEach((item, index) => {
    item.options = ['1', '2', '0', '3'];
    item.correctAnswer = 0;
    item.explanation = `$\\sin x = 1$ হলে $x=\\pi/2$। অন্য মূলটি $\\sin x = ${index}$, যা ${index > 1 ? 'অসম্ভব' : 'অগ্রাহ্য'}। সুতরাং ১টি সমাধান।`;
});

export const inverseTrigMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `trig-5-${i + 1}`,
  question: `$\\tan^{-1}(${i+1}) + \\cot^{-1}(${i+1})$ এর মান কত?`,
  options: ['$\\frac{\\pi}{2}$', '$\\pi$', '$\\frac{\\pi}{4}$', '0'],
  correctAnswer: 0,
  explanation: `আমরা জানি, যেকোনো বাস্তব সংখ্যা $x$ এর জন্য $\\tan^{-1} x + \\cot^{-1} x = \\frac{\\pi}{2}$।`
}));

export const propertiesOfTrianglesMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `trig-6-${i + 1}`,
  question: `একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ${3*i+3}, ${4*i+4}, ${5*i+5} হলে, এর পরিবৃত্তের ব্যাসার্ধ $R$ কত?`,
  options: [`${(5*i+5)/2}`, `${5*i+5}`, `${2*i+2}`, `${3*i+3}`],
  correctAnswer: 0,
  explanation: `বাহুগুলি $3:4:5$ অনুপাতে থাকায় এটি সমকোণী ত্রিভুজ। সমকোণী ত্রিভুজের পরিবৃত্তের ব্যাসার্ধ $R = \\frac{\\text{অতিভুজ}}{2} = \\frac{${5*i+5}}{2}$।`
}));
