import { MCQ } from '../components/WBJEEAssignments';

export const areaUnderCurvesMCQs: MCQ[] = [
  {
    id: 'calc-8-1',
    question: "$y = x^2$ এবং $y = x$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['1/6', '1/3', '1/2', '1'],
    correctAnswer: 0,
    explanation: "ছেদবিন্দু: $x^2 = x \\implies x(x-1) = 0 \\implies x=0, 1$। ক্ষেত্রফল = $\\int_0^1 (x - x^2) dx = [x^2/2 - x^3/3]_0^1 = 1/2 - 1/3 = 1/6$ বর্গ একক।"
  },
  {
    id: 'calc-8-2',
    question: "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ উপবৃত্তের সম্পূর্ণ ক্ষেত্রফল কত?",
    options: ['$\\pi ab$', '$\\pi a^2$', '$\\pi b^2$', '$2\\pi ab$'],
    correctAnswer: 0,
    explanation: "উপবৃত্তের ক্ষেত্রফল = $4 \\int_0^a y dx = 4 \\int_0^a \\frac{b}{a}\\sqrt{a^2-x^2} dx = \\frac{4b}{a} [\\frac{x}{2}\\sqrt{a^2-x^2} + \\frac{a^2}{2}\\sin^{-1}(x/a)]_0^a = \\frac{4b}{a} (\\frac{a^2}{2} \\cdot \\frac{\\pi}{2}) = \\pi ab$।"
  },
  {
    id: 'calc-8-3',
    question: "$y^2 = 4ax$ এবং $x^2 = 4ay$ অধিবৃত্ত দুটি দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['$\\frac{16a^2}{3}$', '$\\frac{8a^2}{3}$', '$\\frac{4a^2}{3}$', '$\\frac{32a^2}{3}$'],
    correctAnswer: 0,
    explanation: "ছেদবিন্দু: $x^4/(16a^2) = 4ax \\implies x^4 = 64a^3x \\implies x=0, 4a$। ক্ষেত্রফল = $\\int_0^{4a} (\\sqrt{4ax} - \\frac{x^2}{4a}) dx = [2\\sqrt{a} \\frac{x^{3/2}}{3/2} - \\frac{x^3}{12a}]_0^{4a} = \\frac{4\\sqrt{a}}{3} (8a\\sqrt{a}) - \\frac{64a^3}{12a} = \\frac{32a^2}{3} - \\frac{16a^2}{3} = \\frac{16a^2}{3}$।"
  },
  {
    id: 'calc-8-4',
    question: "$y = \\sin x$ বক্ররেখা এবং $x$-অক্ষ দ্বারা $x=0$ থেকে $x=\\pi$ পর্যন্ত সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['2', '1', '$\\pi$', '$\\pi/2$'],
    correctAnswer: 0,
    explanation: "ক্ষেত্রফল = $\\int_0^\\pi \\sin x dx = [-\\cos x]_0^\\pi = -(-1) - (-1) = 2$ বর্গ একক।"
  },
  {
    id: 'calc-8-5',
    question: "$y = |x-1|$ এবং $y = 1$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['1', '2', '1/2', '3/2'],
    correctAnswer: 0,
    explanation: "ছেদবিন্দু: $|x-1| = 1 \\implies x-1 = \\pm 1 \\implies x=0, 2$। এটি একটি ত্রিভুজ গঠন করে যার ভূমি 2 (0 থেকে 2) এবং উচ্চতা 1। ক্ষেত্রফল = $\\frac{1}{2} \\times 2 \\times 1 = 1$ বর্গ একক।"
  },
  {
    id: 'calc-8-6',
    question: "$y = e^x$, $x=0$, $y=0$ এবং $x=1$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['$e-1$', '$e$', '$e+1$', '1'],
    correctAnswer: 0,
    explanation: "ক্ষেত্রফল = $\\int_0^1 e^x dx = [e^x]_0^1 = e^1 - e^0 = e - 1$ বর্গ একক।"
  },
  {
    id: 'calc-8-7',
    question: "$y^2 = x$ এবং $y = |x|$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['1/6', '1/3', '1/2', '1'],
    correctAnswer: 0,
    explanation: "প্রথম চতুর্থাংশে $y = x$ এবং $y^2 = x \\implies x^2 = x \\implies x=0, 1$। ক্ষেত্রফল = $\\int_0^1 (\\sqrt{x} - x) dx = [\\frac{2}{3}x^{3/2} - x^2/2]_0^1 = 2/3 - 1/2 = 1/6$ বর্গ একক।"
  },
  {
    id: 'calc-8-8',
    question: "$y = \\ln x$, $x$-অক্ষ এবং $x=e$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['1', '$e$', '$e-1$', '$e+1$'],
    correctAnswer: 0,
    explanation: "$y = \\ln x$ $x$-অক্ষকে $x=1$ বিন্দুতে ছেদ করে। ক্ষেত্রফল = $\\int_1^e \\ln x dx = [x \\ln x - x]_1^e = (e \\ln e - e) - (1 \\ln 1 - 1) = (e - e) - (0 - 1) = 1$ বর্গ একক।"
  },
  {
    id: 'calc-8-9',
    question: "$x^2 + y^2 = a^2$ বৃত্তের ক্ষেত্রফল কত?",
    options: ['$\\pi a^2$', '$2\\pi a^2$', '$\\pi a^2/2$', '$\\pi a^2/4$'],
    correctAnswer: 0,
    explanation: "বৃত্তের ক্ষেত্রফল = $4 \\int_0^a \\sqrt{a^2-x^2} dx = 4 [\\frac{x}{2}\\sqrt{a^2-x^2} + \\frac{a^2}{2}\\sin^{-1}(x/a)]_0^a = 4 (\\frac{a^2}{2} \\cdot \\frac{\\pi}{2}) = \\pi a^2$।"
  },
  {
    id: 'calc-8-10',
    question: "$y = x^3$ এবং $y = x$ দ্বারা সীমাবদ্ধ মোট অঞ্চলের ক্ষেত্রফল কত?",
    options: ['1/2', '1/4', '1', '2'],
    correctAnswer: 0,
    explanation: "ছেদবিন্দু: $x^3 = x \\implies x(x^2-1) = 0 \\implies x=-1, 0, 1$। প্রতিসাম্যের কারণে মোট ক্ষেত্রফল = $2 \\int_0^1 (x - x^3) dx = 2 [x^2/2 - x^4/4]_0^1 = 2(1/2 - 1/4) = 2(1/4) = 1/2$ বর্গ একক।"
  },
  {
    id: 'calc-8-11',
    question: "$y = 2x - x^2$ এবং $x$-অক্ষ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['4/3', '2/3', '8/3', '1/3'],
    correctAnswer: 0,
    explanation: "$x$-অক্ষকে ছেদ করে: $2x - x^2 = 0 \\implies x(2-x) = 0 \\implies x=0, 2$। ক্ষেত্রফল = $\\int_0^2 (2x - x^2) dx = [x^2 - x^3/3]_0^2 = 4 - 8/3 = 4/3$ বর্গ একক।"
  },
  {
    id: 'calc-8-12',
    question: "$y = \\cos x$, $y = \\sin x$, $x=0$ এবং $x=\\pi/4$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['$\\sqrt{2}-1$', '$\\sqrt{2}+1$', '$1-1/\\sqrt{2}$', '$\\sqrt{2}$'],
    correctAnswer: 0,
    explanation: "$0$ থেকে $\\pi/4$ পর্যন্ত $\\cos x \\ge \\sin x$। ক্ষেত্রফল = $\\int_0^{\\pi/4} (\\cos x - \\sin x) dx = [\\sin x + \\cos x]_0^{\\pi/4} = (1/\\sqrt{2} + 1/\\sqrt{2}) - (0 + 1) = \\sqrt{2} - 1$ বর্গ একক।"
  },
  {
    id: 'calc-8-13',
    question: "$xy = c^2$, $x$-অক্ষ, $x=a$ এবং $x=b$ ($b>a>0$) দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['$c^2 \\ln(b/a)$', '$c^2 \\ln(a/b)$', '$c^2(b-a)$', '$c^2/ab$'],
    correctAnswer: 0,
    explanation: "ক্ষেত্রফল = $\\int_a^b y dx = \\int_a^b \\frac{c^2}{x} dx = c^2 [\\ln x]_a^b = c^2(\\ln b - \\ln a) = c^2 \\ln(b/a)$।"
  },
  {
    id: 'calc-8-14',
    question: "$y = \\sqrt{x}$ এবং $y = x^2$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['1/3', '1/6', '1/2', '2/3'],
    correctAnswer: 0,
    explanation: "ছেদবিন্দু: $x^2 = \\sqrt{x} \\implies x^4 = x \\implies x(x^3-1) = 0 \\implies x=0, 1$। ক্ষেত্রফল = $\\int_0^1 (\\sqrt{x} - x^2) dx = [\\frac{2}{3}x^{3/2} - x^3/3]_0^1 = 2/3 - 1/3 = 1/3$ বর্গ একক।"
  },
  {
    id: 'calc-8-15',
    question: "$y^2 = 4x$ এবং $x=3$ রেখা দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['$8\\sqrt{3}$', '$4\\sqrt{3}$', '$16\\sqrt{3}/3$', '$8\\sqrt{3}/3$'],
    correctAnswer: 0,
    explanation: "প্রতিসাম্যের কারণে ক্ষেত্রফল = $2 \\int_0^3 \\sqrt{4x} dx = 4 \\int_0^3 x^{1/2} dx = 4 [\\frac{2}{3}x^{3/2}]_0^3 = \\frac{8}{3} (3\\sqrt{3}) = 8\\sqrt{3}$ বর্গ একক।"
  },
  {
    id: 'calc-8-16',
    question: "$y = x^2 - 4x + 3$ এবং $x$-অক্ষ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['4/3', '8/3', '2/3', '5/3'],
    correctAnswer: 0,
    explanation: "$x$-অক্ষকে ছেদ করে: $x^2 - 4x + 3 = 0 \\implies (x-1)(x-3) = 0 \\implies x=1, 3$। এই অংশে $y < 0$। ক্ষেত্রফল = $|\\int_1^3 (x^2 - 4x + 3) dx| = |[x^3/3 - 2x^2 + 3x]_1^3| = |(9 - 18 + 9) - (1/3 - 2 + 3)| = |0 - 4/3| = 4/3$ বর্গ একক।"
  },
  {
    id: 'calc-8-17',
    question: "$y = |x|$ এবং $y = 2 - |x|$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['2', '4', '1', '3'],
    correctAnswer: 0,
    explanation: "ছেদবিন্দু: $|x| = 2 - |x| \\implies 2|x| = 2 \\implies |x| = 1 \\implies x = \\pm 1$। এটি একটি বর্গক্ষেত্র গঠন করে যার কর্ণ 2। ক্ষেত্রফল = $\\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 2 \\times 2 = 2$ বর্গ একক। বিকল্পভাবে: $2 \\int_0^1 (2-x - x) dx = 2 \\int_0^1 (2-2x) dx = 2[2x - x^2]_0^1 = 2(2-1) = 2$।"
  },
  {
    id: 'calc-8-18',
    question: "$y = \\tan x$, $x=\\pi/4$ এবং $x$-অক্ষ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['$\\frac{1}{2}\\ln 2$', '$\\ln 2$', '$\\frac{1}{2}$', '$\\frac{\\pi}{4}$'],
    correctAnswer: 0,
    explanation: "ক্ষেত্রফল = $\\int_0^{\\pi/4} \\tan x dx = [\\ln|\\sec x|]_0^{\\pi/4} = \\ln(\\sqrt{2}) - \\ln(1) = \\frac{1}{2}\\ln 2$ বর্গ একক।"
  },
  {
    id: 'calc-8-19',
    question: "$x^2 + y^2 = 4$ বৃত্ত এবং $x+y=2$ সরলরেখা দ্বারা সীমাবদ্ধ ক্ষুদ্রতর অঞ্চলের ক্ষেত্রফল কত?",
    options: ['$\\pi - 2$', '$\\pi - 1$', '$2\\pi - 2$', '$\\pi/2 - 1$'],
    correctAnswer: 0,
    explanation: "ছেদবিন্দু: $(0,2)$ এবং $(2,0)$। প্রথম চতুর্থাংশে বৃত্তের ক্ষেত্রফল $\\frac{1}{4} \\pi (2)^2 = \\pi$। সরলরেখা দ্বারা গঠিত ত্রিভুজের ক্ষেত্রফল $\\frac{1}{2} \\times 2 \\times 2 = 2$। ক্ষুদ্রতর অঞ্চলের ক্ষেত্রফল = $\\pi - 2$ বর্গ একক।"
  },
  {
    id: 'calc-8-20',
    question: "$y = e^{-x}$, $x=0$ এবং ধনাত্মক $x$-অক্ষ ($x \\to \\infty$) দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['1', '$e$', '$\\infty$', '1/2'],
    correctAnswer: 0,
    explanation: "ক্ষেত্রফল = $\\int_0^\\infty e^{-x} dx = [-e^{-x}]_0^\\infty = 0 - (-1) = 1$ বর্গ একক।"
  },
  {
    id: 'calc-8-21',
    question: "$y^2 = x^3$ এবং $x=1$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['4/5', '2/5', '1/5', '8/5'],
    correctAnswer: 0,
    explanation: "প্রতিসাম্যের কারণে ক্ষেত্রফল = $2 \\int_0^1 y dx = 2 \\int_0^1 x^{3/2} dx = 2 [\\frac{x^{5/2}}{5/2}]_0^1 = 2 \\times \\frac{2}{5} = 4/5$ বর্গ একক।"
  },
  {
    id: 'calc-8-22',
    question: "$y = \\sin^{-1} x$, $y$-অক্ষ এবং $y=\\pi/2$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['1', '$\\pi/2$', '$\\pi/2 - 1$', '2'],
    correctAnswer: 0,
    explanation: "ক্ষেত্রফল = $\\int_0^{\\pi/2} x dy = \\int_0^{\\pi/2} \\sin y dy = [-\\cos y]_0^{\\pi/2} = 0 - (-1) = 1$ বর্গ একক।"
  },
  {
    id: 'calc-8-23',
    question: "$y = x|x|$, $x=-1$ এবং $x=1$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['2/3', '1/3', '0', '4/3'],
    correctAnswer: 0,
    explanation: "$y = x^2$ ($x \\ge 0$) এবং $y = -x^2$ ($x < 0$)। মোট ক্ষেত্রফল = $\\int_{-1}^0 |-x^2| dx + \\int_0^1 |x^2| dx = \\int_{-1}^0 x^2 dx + \\int_0^1 x^2 dx = [x^3/3]_{-1}^0 + [x^3/3]_0^1 = (0 - (-1/3)) + (1/3 - 0) = 1/3 + 1/3 = 2/3$ বর্গ একক।"
  },
  {
    id: 'calc-8-24',
    question: "$y = \\frac{1}{1+x^2}$, $x=0$, $x=1$ এবং $x$-অক্ষ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['$\\pi/4$', '$\\pi/2$', '$\\pi$', '1'],
    correctAnswer: 0,
    explanation: "ক্ষেত্রফল = $\\int_0^1 \\frac{1}{1+x^2} dx = [\\tan^{-1} x]_0^1 = \\pi/4 - 0 = \\pi/4$ বর্গ একক।"
  },
  {
    id: 'calc-8-25',
    question: "$y = x^2$ এবং $y = \\frac{2}{1+x^2}$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['$\\pi - 2/3$', '$\\pi/2 - 1/3$', '$2\\pi - 4/3$', '$\\pi - 1/3$'],
    correctAnswer: 0,
    explanation: "ছেদবিন্দু: $x^2 = \\frac{2}{1+x^2} \\implies x^4+x^2-2=0 \\implies (x^2+2)(x^2-1)=0 \\implies x = \\pm 1$। ক্ষেত্রফল = $\\int_{-1}^1 (\\frac{2}{1+x^2} - x^2) dx = 2 \\int_0^1 (\\frac{2}{1+x^2} - x^2) dx = 2 [2\\tan^{-1} x - x^3/3]_0^1 = 2(2(\\pi/4) - 1/3) = 2(\\pi/2 - 1/3) = \\pi - 2/3$ বর্গ একক।"
  },
  {
    id: 'calc-8-26',
    question: "$y = \\sec^2 x$, $x=0$, $x=\\pi/4$ এবং $x$-অক্ষ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['1', '$\\sqrt{2}$', '$\\pi/4$', '2'],
    correctAnswer: 0,
    explanation: "ক্ষেত্রফল = $\\int_0^{\\pi/4} \\sec^2 x dx = [\\tan x]_0^{\\pi/4} = 1 - 0 = 1$ বর্গ একক।"
  },
  {
    id: 'calc-8-27',
    question: "$y = x e^x$, $x=1$ এবং $x$-অক্ষ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['1', '$e$', '$e-1$', '$e+1$'],
    correctAnswer: 0,
    explanation: "ক্ষেত্রফল = $\\int_0^1 x e^x dx = [x e^x - e^x]_0^1 = (e - e) - (0 - 1) = 1$ বর্গ একক।"
  },
  {
    id: 'calc-8-28',
    question: "$y = \\sin 2x$, $x=0$, $x=\\pi/2$ এবং $x$-অক্ষ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['1', '2', '1/2', '$\\pi/2$'],
    correctAnswer: 0,
    explanation: "ক্ষেত্রফল = $\\int_0^{\\pi/2} \\sin 2x dx = [-\\frac{\\cos 2x}{2}]_0^{\\pi/2} = -\\frac{1}{2}(\\cos \\pi - \\cos 0) = -\\frac{1}{2}(-1 - 1) = 1$ বর্গ একক।"
  },
  {
    id: 'calc-8-29',
    question: "$y^2 = 4a(x+a)$ এবং $y^2 = 4b(b-x)$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['$\\frac{8}{3}(a+b)\\sqrt{ab}$', '$\\frac{4}{3}(a+b)\\sqrt{ab}$', '$\\frac{8}{3}\\sqrt{ab}$', '$\\frac{4}{3}\\sqrt{ab}$'],
    correctAnswer: 0,
    explanation: "ছেদবিন্দু: $4a(x+a) = 4b(b-x) \\implies ax+a^2 = b^2-bx \\implies x(a+b) = b^2-a^2 \\implies x = b-a$। $y^2 = 4a(b-a+a) = 4ab \\implies y = \\pm 2\\sqrt{ab}$। ক্ষেত্রফল = $\\int_{-2\\sqrt{ab}}^{2\\sqrt{ab}} (x_2 - x_1) dy = \\int_{-2\\sqrt{ab}}^{2\\sqrt{ab}} ((b - y^2/4b) - (y^2/4a - a)) dy = \\int_{-2\\sqrt{ab}}^{2\\sqrt{ab}} (a+b - \\frac{y^2(a+b)}{4ab}) dy = 2(a+b) [y - \\frac{y^3}{12ab}]_0^{2\\sqrt{ab}} = 2(a+b) (2\\sqrt{ab} - \\frac{8ab\\sqrt{ab}}{12ab}) = 2(a+b) (2\\sqrt{ab} - \\frac{2}{3}\\sqrt{ab}) = 2(a+b) \\frac{4}{3}\\sqrt{ab} = \\frac{8}{3}(a+b)\\sqrt{ab}$।"
  },
  {
    id: 'calc-8-30',
    question: "$|x| + |y| = 1$ দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত?",
    options: ['2', '1', '4', '1/2'],
    correctAnswer: 0,
    explanation: "এটি একটি বর্গক্ষেত্র গঠন করে যার শীর্ষবিন্দুগুলো হলো $(1,0), (0,1), (-1,0), (0,-1)$। এর কর্ণ $d = 2$। ক্ষেত্রফল = $\\frac{1}{2} d^2 = \\frac{1}{2} (2)^2 = 2$ বর্গ একক। বিকল্পভাবে, প্রথম চতুর্থাংশে ক্ষেত্রফল $\\frac{1}{2} \\times 1 \\times 1 = 1/2$। মোট ক্ষেত্রফল $4 \\times 1/2 = 2$।"
  }
];
