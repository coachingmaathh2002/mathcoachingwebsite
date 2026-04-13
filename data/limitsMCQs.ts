import { MCQ } from '../components/WBJEEAssignments';

export const limitsMCQs: MCQ[] = [
  {
    id: 'calc-1-1',
    question: '$\\lim_{x \\to 0} \\frac{\\sin(x^2)}{1 - \\cos x}$ এর মান কত?',
    options: ['0', '1', '2', 'অস্তিত্ব নেই'],
    correctAnswer: 2,
    explanation: "$\\lim_{x \\to 0} \\frac{\\sin(x^2)}{1 - \\cos x} = \\lim_{x \\to 0} \\frac{\\sin(x^2)}{x^2} \\cdot \\frac{x^2}{1 - \\cos x}$। আমরা জানি $\\lim_{x \\to 0} \\frac{\\sin(x^2)}{x^2} = 1$ এবং $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$। সুতরাং, সীমাটি হবে $1 \\cdot \\frac{1}{1/2} = 2$।"
  },
  {
    id: 'calc-1-2',
    question: '$\\lim_{x \\to \\infty} \\left( \\frac{x+2}{x-1} \\right)^{x+3}$ এর মান কত?',
    options: ['$e^2$', '$e^3$', '$e$', '$e^{-1}$'],
    correctAnswer: 1,
    explanation: "এটি $1^\\infty$ আকারের সীমা। $\\lim_{x \\to \\infty} \\left( 1 + \\frac{3}{x-1} \\right)^{x+3} = e^{\\lim_{x \\to \\infty} (x+3) \\cdot \\frac{3}{x-1}} = e^3$।"
  },
  {
    id: 'calc-1-3',
    question: '$\\lim_{x \\to 0} \\frac{e^x - e^{-x} - 2x}{x - \\sin x}$ এর মান কত?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: "L'Hopital's Rule প্রয়োগ করে: $f'(x)/g'(x) = \\frac{e^x + e^{-x} - 2}{1 - \\cos x}$। আবার প্রয়োগ করলে: $\\frac{e^x - e^{-x}}{\\sin x}$। আবার প্রয়োগ করলে: $\\frac{e^x + e^{-x}}{\\cos x}$। $x \\to 0$ বসালে $\\frac{1+1}{1} = 2$।"
  },
  {
    id: 'calc-1-4',
    question: '$\\lim_{n \\to \\infty} \\frac{1^p + 2^p + \\dots + n^p}{n^{p+1}}$ ($p > -1$) এর মান কত?',
    options: ['$\\frac{1}{p}$', '$\\frac{1}{p+1}$', '$\\frac{1}{p-1}$', '0'],
    correctAnswer: 1,
    explanation: "এটি নির্দিষ্ট সমাকলনের (Definite Integral) সাহায্যে সীমার মান নির্ণয়। $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n \\left(\\frac{r}{n}\\right)^p = \\int_0^1 x^p dx = \\left[ \\frac{x^{p+1}}{p+1} \\right]_0^1 = \\frac{1}{p+1}$।"
  },
  {
    id: 'calc-1-5',
    question: '$\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}$ এর মান কত?',
    options: ['1/2', '1', '0', '-1/2'],
    correctAnswer: 0,
    explanation: "$\\frac{\\tan x - \\sin x}{x^3} = \\frac{\\sin x (1 - \\cos x)}{x^3 \\cos x} = \\left( \\frac{\\sin x}{x} \\right) \\cdot \\left( \\frac{1 - \\cos x}{x^2} \\right) \\cdot \\frac{1}{\\cos x}$। $x \\to 0$ হলে মান হবে $1 \\cdot \\frac{1}{2} \\cdot 1 = 1/2$।"
  },
  {
    id: 'calc-1-6',
    question: '$\\lim_{x \\to \\pi/2} (\\sec x - \\tan x)$ এর মান কত?',
    options: ['0', '1', '$\\infty$', '-1'],
    correctAnswer: 0,
    explanation: "$\\sec x - \\tan x = \\frac{1 - \\sin x}{\\cos x}$। L'Hopital's Rule প্রয়োগ করলে $\\frac{-\\cos x}{-\\sin x} = \\cot x$। $x \\to \\pi/2$ হলে $\\cot(\\pi/2) = 0$।"
  },
  {
    id: 'calc-1-7',
    question: '$\\lim_{x \\to 0} \\frac{\\sqrt{1+x} - 1}{x}$ এর মান কত?',
    options: ['1', '1/2', '0', 'অস্তিত্ব নেই'],
    correctAnswer: 1,
    explanation: "লব ও হরকে অনুবন্ধী (conjugate) দ্বারা গুণ করলে: $\\frac{1+x-1}{x(\\sqrt{1+x}+1)} = \\frac{1}{\\sqrt{1+x}+1}$। $x \\to 0$ বসালে $\\frac{1}{1+1} = 1/2$।"
  },
  {
    id: 'calc-1-8',
    question: '$\\lim_{x \\to 0} \\frac{a^x - b^x}{x}$ এর মান কত?',
    options: ['$\\ln(a/b)$', '$\\ln(ab)$', '$\\ln(a-b)$', '0'],
    correctAnswer: 0,
    explanation: "$\\frac{a^x - 1 - (b^x - 1)}{x} = \\frac{a^x - 1}{x} - \\frac{b^x - 1}{x}$। সীমা নিলে $\\ln a - \\ln b = \\ln(a/b)$।"
  },
  {
    id: 'calc-1-9',
    question: '$\\lim_{x \\to 0} x \\sin(1/x)$ এর মান কত?',
    options: ['1', '0', '$\\infty$', 'অস্তিত্ব নেই'],
    correctAnswer: 1,
    explanation: "$-1 \\le \\sin(1/x) \\le 1 \\implies -|x| \\le x \\sin(1/x) \\le |x|$। Squeeze Theorem অনুযায়ী, যেহেতু $\\lim_{x \\to 0} |x| = 0$, তাই $\\lim_{x \\to 0} x \\sin(1/x) = 0$।"
  },
  {
    id: 'calc-1-10',
    question: '$\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x}$ এর মান কত?',
    options: ['0', '1', 'e', '$\\infty$'],
    correctAnswer: 1,
    explanation: "এটি একটি প্রমিত সীমা (standard limit)। L'Hopital's Rule প্রয়োগ করলে $\\frac{1/(1+x)}{1}$। $x \\to 0$ বসালে 1।"
  },
  {
    id: 'calc-1-11',
    question: '$\\lim_{x \\to \\infty} x(\\ln(x+1) - \\ln x)$ এর মান কত?',
    options: ['0', '1', 'e', '$\\infty$'],
    correctAnswer: 1,
    explanation: "$x \\ln\\left(1 + \\frac{1}{x}\\right) = \\ln\\left(1 + \\frac{1}{x}\\right)^x$। $x \\to \\infty$ হলে $\\left(1 + \\frac{1}{x}\\right)^x \\to e$। সুতরাং $\\ln(e) = 1$।"
  },
  {
    id: 'calc-1-12',
    question: '$\\lim_{x \\to 0} \\frac{1 - \\cos(1 - \\cos x)}{x^4}$ এর মান কত?',
    options: ['1/2', '1/4', '1/8', '1/16'],
    correctAnswer: 2,
    explanation: "$\\frac{1 - \\cos(1 - \\cos x)}{(1 - \\cos x)^2} \\cdot \\frac{(1 - \\cos x)^2}{x^4}$। প্রথম অংশের সীমা 1/2 এবং দ্বিতীয় অংশের সীমা $(1/2)^2 = 1/4$। সুতরাং $1/2 \\cdot 1/4 = 1/8$।"
  },
  {
    id: 'calc-1-13',
    question: '$\\lim_{x \\to 0} \\frac{[x]}{x}$ এর মান কত? (যেখানে $[x]$ হলো গরিষ্ঠ পূর্ণসংখ্যা অপেক্ষক)',
    options: ['0', '1', '$\\infty$', 'অস্তিত্ব নেই'],
    correctAnswer: 3,
    explanation: "ডানদিকের সীমা (RHL): $x \\to 0^+$ হলে $[x] = 0$, তাই RHL = 0। বামদিকের সীমা (LHL): $x \\to 0^-$ হলে $[x] = -1$, তাই LHL = $\\lim_{x \\to 0^-} \\frac{-1}{x} = \\infty$। যেহেতু LHL $\\neq$ RHL, সীমার অস্তিত্ব নেই।"
  },
  {
    id: 'calc-1-14',
    question: '$\\lim_{n \\to \\infty} \\frac{n!}{(n+1)! - n!}$ এর মান কত?',
    options: ['0', '1', '$\\infty$', '-1'],
    correctAnswer: 0,
    explanation: "$\\frac{n!}{n!(n+1 - 1)} = \\frac{1}{n}$। $n \\to \\infty$ হলে $\\frac{1}{n} \\to 0$।"
  },
  {
    id: 'calc-1-15',
    question: '$\\lim_{x \\to \\pi/4} \\frac{\\sin x - \\cos x}{x - \\pi/4}$ এর মান কত?',
    options: ['$\\sqrt{2}$', '$1/\\sqrt{2}$', '1', '0'],
    correctAnswer: 0,
    explanation: "L'Hopital's Rule প্রয়োগ করলে: $\\frac{\\cos x + \\sin x}{1}$। $x \\to \\pi/4$ বসালে $\\cos(\\pi/4) + \\sin(\\pi/4) = 1/\\sqrt{2} + 1/\\sqrt{2} = \\sqrt{2}$।"
  },
  {
    id: 'calc-1-16',
    question: '$\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$ এর মান কত?',
    options: ['1/3', '1/6', '1/2', '0'],
    correctAnswer: 1,
    explanation: "L'Hopital's Rule তিনবার প্রয়োগ করলে: $\\frac{1 - \\cos x}{3x^2} \\to \\frac{\\sin x}{6x} \\to \\frac{\\cos x}{6}$। $x \\to 0$ বসালে $1/6$।"
  },
  {
    id: 'calc-1-17',
    question: '$\\lim_{x \\to 1} (1-x) \\tan(\\frac{\\pi x}{2})$ এর মান কত?',
    options: ['$\\pi/2$', '$2/\\pi$', '$\\pi$', '$1/\\pi$'],
    correctAnswer: 1,
    explanation: "ধরি $1-x = y \\implies x = 1-y$। $\\lim_{y \\to 0} y \\tan(\\frac{\\pi(1-y)}{2}) = \\lim_{y \\to 0} y \\tan(\\frac{\\pi}{2} - \\frac{\\pi y}{2}) = \\lim_{y \\to 0} y \\cot(\\frac{\\pi y}{2}) = \\lim_{y \\to 0} \\frac{y}{\\sin(\\pi y/2)} \\cdot \\cos(\\pi y/2) = \\frac{1}{\\pi/2} \\cdot 1 = 2/\\pi$।"
  },
  {
    id: 'calc-1-18',
    question: '$\\lim_{x \\to 0} \\left(\\frac{1}{x} - \\frac{1}{e^x-1}\\right)$ এর মান কত?',
    options: ['1/2', '1', '0', '-1/2'],
    correctAnswer: 0,
    explanation: "$\\frac{e^x - 1 - x}{x(e^x - 1)}$। L'Hopital's Rule প্রয়োগ করলে $\\frac{e^x - 1}{e^x - 1 + x e^x}$। আবার প্রয়োগ করলে $\\frac{e^x}{e^x + e^x + x e^x} = \\frac{e^x}{e^x(2+x)} = \\frac{1}{2+x}$। $x \\to 0$ বসালে $1/2$।"
  },
  {
    id: 'calc-1-19',
    question: '$\\lim_{x \\to \\infty} (\\sqrt{x^2+x+1} - \\sqrt{x^2+1})$ এর মান কত?',
    options: ['1/2', '1', '0', '$\\infty$'],
    correctAnswer: 0,
    explanation: "অনুবন্ধী দ্বারা গুণ করলে $\\frac{x^2+x+1 - (x^2+1)}{\\sqrt{x^2+x+1} + \\sqrt{x^2+1}} = \\frac{x}{\\sqrt{x^2+x+1} + \\sqrt{x^2+1}}$। লব ও হরকে $x$ দ্বারা ভাগ করলে $\\frac{1}{\\sqrt{1+1/x+1/x^2} + \\sqrt{1+1/x^2}}$। $x \\to \\infty$ বসালে $\\frac{1}{1+1} = 1/2$।"
  },
  {
    id: 'calc-1-20',
    question: '$\\lim_{n \\to \\infty} \\left(\\cos \\frac{x}{2} \\cos \\frac{x}{4} \\dots \\cos \\frac{x}{2^n}\\right)$ এর মান কত?',
    options: ['$\\frac{\\sin x}{x}$', '$\\frac{x}{\\sin x}$', '$\\sin x$', '$\\cos x$'],
    correctAnswer: 0,
    explanation: "আমরা জানি $\\cos \\frac{x}{2} \\cos \\frac{x}{4} \\dots \\cos \\frac{x}{2^n} = \\frac{\\sin x}{2^n \\sin(x/2^n)}$। $\\lim_{n \\to \\infty} \\frac{\\sin x}{x} \\cdot \\frac{x/2^n}{\\sin(x/2^n)} = \\frac{\\sin x}{x} \\cdot 1 = \\frac{\\sin x}{x}$।"
  },
  {
    id: 'calc-1-21',
    question: '$\\lim_{x \\to 0} \\frac{\\sin^{-1} x - \\tan^{-1} x}{x^3}$ এর মান কত?',
    options: ['1/2', '1/6', '1/3', '1'],
    correctAnswer: 0,
    explanation: "Maclaurin Series ব্যবহার করে: $\\sin^{-1} x \\approx x + x^3/6$ এবং $\\tan^{-1} x \\approx x - x^3/3$। $\\sin^{-1} x - \\tan^{-1} x \\approx x^3/6 - (-x^3/3) = x^3/2$। সুতরাং সীমাটি হবে $1/2$।"
  },
  {
    id: 'calc-1-22',
    question: '$\\lim_{x \\to 0} \\frac{1^x + 2^x + 3^x - 3}{x}$ এর মান কত?',
    options: ['$\\ln 6$', '$\\ln 2$', '$\\ln 3$', '0'],
    correctAnswer: 0,
    explanation: "$\\lim_{x \\to 0} \\frac{(1^x-1) + (2^x-1) + (3^x-1)}{x} = \\ln 1 + \\ln 2 + \\ln 3 = \\ln(1 \\cdot 2 \\cdot 3) = \\ln 6$।"
  },
  {
    id: 'calc-1-23',
    question: '$\\lim_{x \\to a} \\frac{x^x - a^a}{x - a}$ এর মান কত?',
    options: ['$a^a (1 + \\ln a)$', '$a^a \\ln a$', '$a^a$', '$1 + \\ln a$'],
    correctAnswer: 0,
    explanation: "ধরি $f(x) = x^x$। সীমাটি হলো $f'(a)$। $f(x) = e^{x \\ln x} \\implies f'(x) = e^{x \\ln x} (1 + \\ln x) = x^x (1 + \\ln x)$। সুতরাং $f'(a) = a^a (1 + \\ln a)$।"
  },
  {
    id: 'calc-1-24',
    question: '$\\lim_{x \\to 0} \\frac{\\int_0^x \\sin(t^2) dt}{x^3}$ এর মান কত?',
    options: ['1/3', '1', '0', '$\\infty$'],
    correctAnswer: 0,
    explanation: "L'Hopital's Rule এবং Leibnitz's Rule প্রয়োগ করে: $\\lim_{x \\to 0} \\frac{\\sin(x^2)}{3x^2} = \\frac{1}{3} \\lim_{x \\to 0} \\frac{\\sin(x^2)}{x^2} = 1/3$।"
  },
  {
    id: 'calc-1-25',
    question: '$\\lim_{x \\to \\infty} \\left(\\frac{x^2+2x-1}{2x^2-3x-2}\\right)^{\\frac{2x+1}{x-1}}$ এর মান কত?',
    options: ['0', '1/2', '1/4', '$\\infty$'],
    correctAnswer: 2,
    explanation: "ভিত্তির সীমা $\\lim_{x \\to \\infty} \\frac{x^2(1+2/x-1/x^2)}{x^2(2-3/x-2/x^2)} = 1/2$। সূচকের সীমা $\\lim_{x \\to \\infty} \\frac{2x+1}{x-1} = 2$। সুতরাং সম্পূর্ণ সীমা $(1/2)^2 = 1/4$।"
  },
  {
    id: 'calc-1-26',
    question: '$\\lim_{x \\to 0} (\\cos x)^{\\cot^2 x}$ এর মান কত?',
    options: ['$e^{-1/2}$', '$e^{1/2}$', '$e$', '1'],
    correctAnswer: 0,
    explanation: "এটি $1^\\infty$ আকারের সীমা। $\\lim_{x \\to 0} e^{\\cot^2 x (\\cos x - 1)} = e^{\\lim_{x \\to 0} \\frac{\\cos x - 1}{\\tan^2 x}} = e^{\\lim_{x \\to 0} \\frac{\\cos x - 1}{x^2} \\cdot \\frac{x^2}{\\tan^2 x}} = e^{-1/2 \\cdot 1} = e^{-1/2}$।"
  },
  {
    id: 'calc-1-27',
    question: '$\\lim_{x \\to 0} \\frac{|x|}{x}$ এর মান কত?',
    options: ['1', '-1', '0', 'অস্তিত্ব নেই'],
    correctAnswer: 3,
    explanation: "ডানদিকের সীমা (RHL) = $\\lim_{x \\to 0^+} \\frac{x}{x} = 1$। বামদিকের সীমা (LHL) = $\\lim_{x \\to 0^-} \\frac{-x}{x} = -1$। যেহেতু LHL $\\neq$ RHL, সীমার অস্তিত্ব নেই।"
  },
  {
    id: 'calc-1-28',
    question: '$\\lim_{n \\to \\infty} \\frac{1}{n^2} \\sum_{r=1}^n r e^{r/n}$ এর মান কত?',
    options: ['1', 'e', 'e-1', '1-e'],
    correctAnswer: 0,
    explanation: "এটি নির্দিষ্ট সমাকলনের সাহায্যে সীমার মান নির্ণয়। $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n \\frac{r}{n} e^{r/n} = \\int_0^1 x e^x dx = [x e^x - e^x]_0^1 = (e - e) - (0 - 1) = 1$।"
  },
  {
    id: 'calc-1-29',
    question: '$\\lim_{x \\to \\infty} x \\sin(\\frac{1}{x})$ এর মান কত?',
    options: ['1', '0', '$\\infty$', 'অস্তিত্ব নেই'],
    correctAnswer: 0,
    explanation: "ধরি $y = 1/x$। $x \\to \\infty$ হলে $y \\to 0$। সীমাটি হবে $\\lim_{y \\to 0} \\frac{\\sin y}{y} = 1$।"
  },
  {
    id: 'calc-1-30',
    question: '$\\lim_{x \\to 0} \\frac{e^{\\alpha x} - e^{\\beta x}}{x}$ এর মান কত?',
    options: ['$\\alpha - \\beta$', '$\\alpha + \\beta$', '$\\alpha \\beta$', '$\\alpha / \\beta$'],
    correctAnswer: 0,
    explanation: "L'Hopital's Rule প্রয়োগ করলে $\\frac{\\alpha e^{\\alpha x} - \\beta e^{\\beta x}}{1}$। $x \\to 0$ বসালে $\\alpha - \\beta$।"
  }
];
