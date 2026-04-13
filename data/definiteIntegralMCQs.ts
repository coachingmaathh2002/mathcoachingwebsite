import { MCQ } from '../components/WBJEEAssignments';

export const definiteIntegralMCQs: MCQ[] = [
  {
    id: 'calc-6-1',
    question: "$\\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x}+\\sqrt{\\cos x}} dx$ এর মান কত?",
    options: ['$\\pi/4$', '$\\pi/2$', '$\\pi$', '0'],
    correctAnswer: 0,
    explanation: "ধরি $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x}+\\sqrt{\\cos x}} dx$। King's Rule $\\int_0^a f(x) dx = \\int_0^a f(a-x) dx$ প্রয়োগ করে: $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\cos x}}{\\sqrt{\\cos x}+\\sqrt{\\sin x}} dx$। দুটি যোগ করলে $2I = \\int_0^{\\pi/2} 1 dx = \\pi/2 \\implies I = \\pi/4$।"
  },
  {
    id: 'calc-6-2',
    question: "$\\int_{-\\pi/2}^{\\pi/2} \\sin^7 x dx$ এর মান কত?",
    options: ['0', '1', '$\\pi/2$', '$\\pi$'],
    correctAnswer: 0,
    explanation: "$f(x) = \\sin^7 x$ একটি অযুগ্ম অপেক্ষক (odd function), কারণ $f(-x) = \\sin^7(-x) = -\\sin^7 x = -f(x)$। $\\int_{-a}^a f(x) dx = 0$ যদি $f(x)$ অযুগ্ম হয়। সুতরাং মান 0।"
  },
  {
    id: 'calc-6-3',
    question: "$\\int_0^\\pi x \\sin x dx$ এর মান কত?",
    options: ['$\\pi$', '$\\pi/2$', '$2\\pi$', '0'],
    correctAnswer: 0,
    explanation: "ধরি $I = \\int_0^\\pi x \\sin x dx$। King's Rule প্রয়োগ করে: $I = \\int_0^\\pi (\\pi-x) \\sin(\\pi-x) dx = \\int_0^\\pi (\\pi-x) \\sin x dx$। যোগ করলে $2I = \\pi \\int_0^\\pi \\sin x dx = \\pi [-\\cos x]_0^\\pi = \\pi(1 - (-1)) = 2\\pi \\implies I = \\pi$।"
  },
  {
    id: 'calc-6-4',
    question: "$\\int_0^{\\pi/2} \\ln(\\sin x) dx$ এর মান কত?",
    options: ['$-\\frac{\\pi}{2} \\ln 2$', '$\\frac{\\pi}{2} \\ln 2$', '$-\\pi \\ln 2$', '$\\pi \\ln 2$'],
    correctAnswer: 0,
    explanation: "এটি একটি প্রমিত নির্দিষ্ট সমাকলন (standard definite integral)। এর মান $-\\frac{\\pi}{2} \\ln 2$।"
  },
  {
    id: 'calc-6-5',
    question: "$\\int_0^1 \\frac{\\ln(1+x)}{1+x^2} dx$ এর মান কত?",
    options: ['$\\frac{\\pi}{8} \\ln 2$', '$\\frac{\\pi}{4} \\ln 2$', '$\\frac{\\pi}{2} \\ln 2$', '$\\pi \\ln 2$'],
    correctAnswer: 0,
    explanation: "ধরি $x = \\tan \\theta \\implies dx = \\sec^2 \\theta d\\theta$। সীমা হবে $0$ থেকে $\\pi/4$। $\\int_0^{\\pi/4} \\frac{\\ln(1+\\tan \\theta)}{1+\\tan^2 \\theta} \\sec^2 \\theta d\\theta = \\int_0^{\\pi/4} \\ln(1+\\tan \\theta) d\\theta$। King's Rule প্রয়োগ করলে $I = \\int_0^{\\pi/4} \\ln(1+\\tan(\\pi/4-\\theta)) d\\theta = \\int_0^{\\pi/4} \\ln(1+\\frac{1-\\tan \\theta}{1+\\tan \\theta}) d\\theta = \\int_0^{\\pi/4} \\ln(\\frac{2}{1+\\tan \\theta}) d\\theta = \\int_0^{\\pi/4} \\ln 2 d\\theta - I$। $2I = \\frac{\\pi}{4} \\ln 2 \\implies I = \\frac{\\pi}{8} \\ln 2$।"
  },
  {
    id: 'calc-6-6',
    question: "$\\lim_{n \\to \\infty} \\sum_{r=1}^n \\frac{1}{n+r}$ এর মান কত?",
    options: ['$\\ln 2$', '$\\ln 3$', '1', '0'],
    correctAnswer: 0,
    explanation: "$\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n \\frac{1}{1+r/n} = \\int_0^1 \\frac{1}{1+x} dx = [\\ln(1+x)]_0^1 = \\ln 2 - \\ln 1 = \\ln 2$।"
  },
  {
    id: 'calc-6-7',
    question: "$\\lim_{n \\to \\infty} \\sum_{r=1}^n \\frac{n}{n^2+r^2}$ এর মান কত?",
    options: ['$\\pi/4$', '$\\pi/2$', '$\\pi$', '1'],
    correctAnswer: 0,
    explanation: "$\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n \\frac{1}{1+(r/n)^2} = \\int_0^1 \\frac{1}{1+x^2} dx = [\\tan^{-1} x]_0^1 = \\pi/4$।"
  },
  {
    id: 'calc-6-8',
    question: "$\\int_0^{100\\pi} |\\sin x| dx$ এর মান কত?",
    options: ['200', '100', '50', '0'],
    correctAnswer: 0,
    explanation: "$|\\sin x|$ এর পর্যায় (period) হলো $\\pi$। $\\int_0^{100\\pi} |\\sin x| dx = 100 \\int_0^\\pi \\sin x dx = 100 [-\\cos x]_0^\\pi = 100(1 - (-1)) = 200$।"
  },
  {
    id: 'calc-6-9',
    question: "$\\int_{-1}^1 |x| dx$ এর মান কত?",
    options: ['1', '0', '2', '1/2'],
    correctAnswer: 0,
    explanation: "$|x|$ একটি যুগ্ম অপেক্ষক। $\\int_{-1}^1 |x| dx = 2 \\int_0^1 x dx = 2 [x^2/2]_0^1 = 1$।"
  },
  {
    id: 'calc-6-10',
    question: "$\\int_0^1 x(1-x)^n dx$ এর মান কত?",
    options: ['$\\frac{1}{(n+1)(n+2)}$', '$\\frac{1}{n(n+1)}$', '$\\frac{1}{n+1}$', '$\\frac{1}{n+2}$'],
    correctAnswer: 0,
    explanation: "King's Rule $\\int_0^1 f(x) dx = \\int_0^1 f(1-x) dx$ প্রয়োগ করে: $\\int_0^1 (1-x)x^n dx = \\int_0^1 (x^n - x^{n+1}) dx = [\\frac{x^{n+1}}{n+1} - \\frac{x^{n+2}}{n+2}]_0^1 = \\frac{1}{n+1} - \\frac{1}{n+2} = \\frac{1}{(n+1)(n+2)}$।"
  },
  {
    id: 'calc-6-11',
    question: "$\\int_0^{\\pi/2} \\frac{dx}{1+\\tan^3 x}$ এর মান কত?",
    options: ['$\\pi/4$', '$\\pi/2$', '$\\pi$', '0'],
    correctAnswer: 0,
    explanation: "$\\int_0^{\\pi/2} \\frac{\\cos^3 x}{\\cos^3 x + \\sin^3 x} dx$। King's Rule প্রয়োগ করলে $I = \\int_0^{\\pi/2} \\frac{\\sin^3 x}{\\sin^3 x + \\cos^3 x} dx$। যোগ করলে $2I = \\int_0^{\\pi/2} 1 dx = \\pi/2 \\implies I = \\pi/4$।"
  },
  {
    id: 'calc-6-12',
    question: "$\\int_0^\\infty \\frac{dx}{1+x^2}$ এর মান কত?",
    options: ['$\\pi/2$', '$\\pi/4$', '$\\pi$', '$\\infty$'],
    correctAnswer: 0,
    explanation: "$[\\tan^{-1} x]_0^\\infty = \\tan^{-1}(\\infty) - \\tan^{-1}(0) = \\pi/2 - 0 = \\pi/2$।"
  },
  {
    id: 'calc-6-13',
    question: "$\\int_0^2 [x^2] dx$ এর মান কত? (যেখানে $[x]$ হলো গরিষ্ঠ পূর্ণসংখ্যা অপেক্ষক)",
    options: ['$5 - \\sqrt{2} - \\sqrt{3}$', '$5 + \\sqrt{2} + \\sqrt{3}$', '$3 - \\sqrt{2} - \\sqrt{3}$', '5'],
    correctAnswer: 0,
    explanation: "$x^2$ এর মান 0 থেকে 4 এর মধ্যে পরিবর্তিত হয়। বিভাজন বিন্দুগুলো হলো $x = 1, \\sqrt{2}, \\sqrt{3}$। $\\int_0^1 0 dx + \\int_1^{\\sqrt{2}} 1 dx + \\int_{\\sqrt{2}}^{\\sqrt{3}} 2 dx + \\int_{\\sqrt{3}}^2 3 dx = 0 + (\\sqrt{2}-1) + 2(\\sqrt{3}-\\sqrt{2}) + 3(2-\\sqrt{3}) = \\sqrt{2} - 1 + 2\\sqrt{3} - 2\\sqrt{2} + 6 - 3\\sqrt{3} = 5 - \\sqrt{2} - \\sqrt{3}$।"
  },
  {
    id: 'calc-6-14',
    question: "$\\int_0^\\pi \\frac{dx}{a^2\\cos^2 x + b^2\\sin^2 x}$ এর মান কত?",
    options: ['$\\frac{\\pi}{ab}$', '$\\frac{\\pi}{2ab}$', '$\\frac{2\\pi}{ab}$', '$\\frac{\\pi^2}{ab}$'],
    correctAnswer: 0,
    explanation: "$2 \\int_0^{\\pi/2} \\frac{dx}{a^2\\cos^2 x + b^2\\sin^2 x} = 2 \\int_0^{\\pi/2} \\frac{\\sec^2 x dx}{a^2 + b^2\\tan^2 x}$। ধরি $\\tan x = t$। $2 \\int_0^\\infty \\frac{dt}{a^2 + b^2 t^2} = \\frac{2}{b^2} \\frac{b}{a} [\\tan^{-1}(\\frac{bt}{a})]_0^\\infty = \\frac{2}{ab} (\\pi/2) = \\frac{\\pi}{ab}$।"
  },
  {
    id: 'calc-6-15',
    question: "$\\int_0^{\\pi/2} \\sin^2 x \\cos^2 x dx$ এর মান কত?",
    options: ['$\\pi/16$', '$\\pi/8$', '$\\pi/4$', '$\\pi/32$'],
    correctAnswer: 0,
    explanation: "$\\frac{1}{4} \\int_0^{\\pi/2} (2\\sin x \\cos x)^2 dx = \\frac{1}{4} \\int_0^{\\pi/2} \\sin^2 2x dx = \\frac{1}{8} \\int_0^{\\pi/2} (1 - \\cos 4x) dx = \\frac{1}{8} [x - \\frac{\\sin 4x}{4}]_0^{\\pi/2} = \\frac{1}{8} (\\pi/2 - 0) = \\pi/16$।"
  },
  {
    id: 'calc-6-16',
    question: "$\\int_0^1 \\frac{dx}{\\sqrt{x(1-x)}}$ এর মান কত?",
    options: ['$\\pi$', '$\\pi/2$', '$2\\pi$', '$\\pi/4$'],
    correctAnswer: 0,
    explanation: "ধরি $x = \\sin^2 \\theta \\implies dx = 2\\sin\\theta\\cos\\theta d\\theta$। সীমা 0 থেকে $\\pi/2$। $\\int_0^{\\pi/2} \\frac{2\\sin\\theta\\cos\\theta}{\\sin\\theta\\cos\\theta} d\\theta = \\int_0^{\\pi/2} 2 d\\theta = 2(\\pi/2) = \\pi$।"
  },
  {
    id: 'calc-6-17',
    question: "$\\int_0^a \\sqrt{a^2-x^2} dx$ এর মান কত?",
    options: ['$\\frac{\\pi a^2}{4}$', '$\\frac{\\pi a^2}{2}$', '$\\pi a^2$', '$\\frac{\\pi a^2}{8}$'],
    correctAnswer: 0,
    explanation: "এটি $x^2+y^2=a^2$ বৃত্তের প্রথম চতুর্থাংশের ক্ষেত্রফল নির্দেশ করে। বৃত্তের মোট ক্ষেত্রফল $\\pi a^2$, তাই প্রথম চতুর্থাংশের ক্ষেত্রফল $\\frac{\\pi a^2}{4}$।"
  },
  {
    id: 'calc-6-18',
    question: "$\\int_{-a}^a \\sqrt{\\frac{a-x}{a+x}} dx$ এর মান কত?",
    options: ['$\\pi a$', '$\\pi a/2$', '$2\\pi a$', '0'],
    correctAnswer: 0,
    explanation: "লব ও হরকে $\\sqrt{a-x}$ দ্বারা গুণ করলে $\\int_{-a}^a \\frac{a-x}{\\sqrt{a^2-x^2}} dx = \\int_{-a}^a \\frac{a}{\\sqrt{a^2-x^2}} dx - \\int_{-a}^a \\frac{x}{\\sqrt{a^2-x^2}} dx$। দ্বিতীয় অংশটি অযুগ্ম অপেক্ষক হওয়ায় তার মান 0। প্রথম অংশ $2a \\int_0^a \\frac{dx}{\\sqrt{a^2-x^2}} = 2a [\\sin^{-1}(x/a)]_0^a = 2a (\\pi/2) = \\pi a$।"
  },
  {
    id: 'calc-6-19',
    question: "$\\int_0^{\\pi/2} \\frac{\\sin 2x}{\\sin^4 x + \\cos^4 x} dx$ এর মান কত?",
    options: ['$\\pi/2$', '$\\pi/4$', '$\\pi$', '0'],
    correctAnswer: 0,
    explanation: "$\\sin^4 x + \\cos^4 x = 1 - 2\\sin^2 x \\cos^2 x = 1 - \\frac{1}{2}\\sin^2 2x$। ধরি $\\sin^2 x = t \\implies \\sin 2x dx = dt$। সীমা 0 থেকে 1। $\\int_0^1 \\frac{dt}{t^2 + (1-t)^2} = \\int_0^1 \\frac{dt}{2t^2 - 2t + 1} = \\frac{1}{2} \\int_0^1 \\frac{dt}{(t-1/2)^2 + 1/4} = \\frac{1}{2} \\cdot 2 [\\tan^{-1}(2t-1)]_0^1 = \\tan^{-1}(1) - \\tan^{-1}(-1) = \\pi/4 - (-\\pi/4) = \\pi/2$।"
  },
  {
    id: 'calc-6-20',
    question: "$\\frac{d}{dx} \\int_0^x \\sin(t^2) dt$ এর মান কত?",
    options: ['$\\sin(x^2)$', '$2x\\sin(x^2)$', '$\\cos(x^2)$', '$2x\\cos(x^2)$'],
    correctAnswer: 0,
    explanation: "Leibnitz's Rule অনুযায়ী, $\\frac{d}{dx} \\int_{a(x)}^{b(x)} f(t) dt = f(b(x))b'(x) - f(a(x))a'(x)$। এখানে $\\sin(x^2) \\cdot 1 - 0 = \\sin(x^2)$।"
  },
  {
    id: 'calc-6-21',
    question: "$\\int_0^1 x^2 e^x dx$ এর মান কত?",
    options: ['$e-2$', '$e-1$', '$e$', '2'],
    correctAnswer: 0,
    explanation: "খণ্ডিত সমাকলন: $[x^2 e^x]_0^1 - \\int_0^1 2x e^x dx = e - 2([x e^x]_0^1 - \\int_0^1 e^x dx) = e - 2(e - [e^x]_0^1) = e - 2(e - (e-1)) = e - 2(1) = e - 2$।"
  },
  {
    id: 'calc-6-22',
    question: "$\\int_0^{\\pi/2} \\frac{\\cos x}{1+\\sin^2 x} dx$ এর মান কত?",
    options: ['$\\pi/4$', '$\\pi/2$', '$\\pi$', '1'],
    correctAnswer: 0,
    explanation: "ধরি $\\sin x = t \\implies \\cos x dx = dt$। সীমা 0 থেকে 1। $\\int_0^1 \\frac{dt}{1+t^2} = [\\tan^{-1} t]_0^1 = \\pi/4$।"
  },
  {
    id: 'calc-6-23',
    question: "$\\int_0^\\pi |\\cos x| dx$ এর মান কত?",
    options: ['2', '1', '0', '$\\pi$'],
    correctAnswer: 0,
    explanation: "$\\int_0^{\\pi/2} \\cos x dx - \\int_{\\pi/2}^\\pi \\cos x dx = [\\sin x]_0^{\\pi/2} - [\\sin x]_{\\pi/2}^\\pi = (1-0) - (0-1) = 1 + 1 = 2$।"
  },
  {
    id: 'calc-6-24',
    question: "$\\int_0^1 \\max(x, 1-x) dx$ এর মান কত?",
    options: ['3/4', '1/2', '1', '1/4'],
    correctAnswer: 0,
    explanation: "$x = 1/2$ বিন্দুতে $x$ এবং $1-x$ ছেদ করে। $0$ থেকে $1/2$ পর্যন্ত $1-x > x$ এবং $1/2$ থেকে $1$ পর্যন্ত $x > 1-x$। $\\int_0^{1/2} (1-x) dx + \\int_{1/2}^1 x dx = [x - x^2/2]_0^{1/2} + [x^2/2]_{1/2}^1 = (1/2 - 1/8) + (1/2 - 1/8) = 3/8 + 3/8 = 6/8 = 3/4$।"
  },
  {
    id: 'calc-6-25',
    question: "$\\int_0^1 \\{2x\\} dx$ এর মান কত? (যেখানে $\\{x\\}$ হলো ভগ্নাংশ অংশ অপেক্ষক)",
    options: ['1/2', '1', '1/4', '2'],
    correctAnswer: 0,
    explanation: "$\\{2x\\}$ এর পর্যায় (period) হলো $1/2$। $\\int_0^1 \\{2x\\} dx = 2 \\int_0^{1/2} \\{2x\\} dx = 2 \\int_0^{1/2} 2x dx = 4 [x^2/2]_0^{1/2} = 2(1/4) = 1/2$।"
  },
  {
    id: 'calc-6-26',
    question: "$\\int_{-\\pi/2}^{\\pi/2} \\ln\\left(\\frac{2-\\sin x}{2+\\sin x}\\right) dx$ এর মান কত?",
    options: ['0', '$\\pi$', '$\\pi/2$', '$\\ln 2$'],
    correctAnswer: 0,
    explanation: "$f(x) = \\ln\\left(\\frac{2-\\sin x}{2+\\sin x}\\right)$। $f(-x) = \\ln\\left(\\frac{2+\\sin x}{2-\\sin x}\\right) = -\\ln\\left(\\frac{2-\\sin x}{2+\\sin x}\\right) = -f(x)$। এটি অযুগ্ম অপেক্ষক, তাই সমাকলনের মান 0।"
  },
  {
    id: 'calc-6-27',
    question: "$\\int_0^{\\pi/2} \\frac{dx}{1+\\sqrt{\\tan x}}$ এর মান কত?",
    options: ['$\\pi/4$', '$\\pi/2$', '$\\pi$', '0'],
    correctAnswer: 0,
    explanation: "$\\int_0^{\\pi/2} \\frac{\\sqrt{\\cos x}}{\\sqrt{\\cos x}+\\sqrt{\\sin x}} dx$। King's Rule প্রয়োগ করলে মান $\\pi/4$ হয়।"
  },
  {
    id: 'calc-6-28',
    question: "$\\int_0^1 \\frac{e^x}{1+e^{2x}} dx$ এর মান কত?",
    options: ['$\\tan^{-1}(e) - \\pi/4$', '$\\tan^{-1}(e)$', '$\\pi/4$', '$\\tan^{-1}(e) + \\pi/4$'],
    correctAnswer: 0,
    explanation: "ধরি $e^x = t \\implies e^x dx = dt$। সীমা 1 থেকে $e$। $\\int_1^e \\frac{dt}{1+t^2} = [\\tan^{-1} t]_1^e = \\tan^{-1}(e) - \\tan^{-1}(1) = \\tan^{-1}(e) - \\pi/4$।"
  },
  {
    id: 'calc-6-29',
    question: "$\\int_0^\\pi \\cos^3 x dx$ এর মান কত?",
    options: ['0', '4/3', '2/3', '$\\pi/2$'],
    correctAnswer: 0,
    explanation: "$\\cos^3(\\pi-x) = -\\cos^3 x$। $\\int_0^{2a} f(x) dx = 0$ যদি $f(2a-x) = -f(x)$ হয়। সুতরাং মান 0।"
  },
  {
    id: 'calc-6-30',
    question: "$\\int_0^{\\pi/4} \\ln(1+\\tan x) dx$ এর মান কত?",
    options: ['$\\frac{\\pi}{8} \\ln 2$', '$\\frac{\\pi}{4} \\ln 2$', '$\\frac{\\pi}{2} \\ln 2$', '$\\pi \\ln 2$'],
    correctAnswer: 0,
    explanation: "King's Rule: $I = \\int_0^{\\pi/4} \\ln(1+\\tan(\\pi/4-x)) dx = \\int_0^{\\pi/4} \\ln(1+\\frac{1-\\tan x}{1+\\tan x}) dx = \\int_0^{\\pi/4} \\ln(\\frac{2}{1+\\tan x}) dx = \\int_0^{\\pi/4} \\ln 2 dx - I$। $2I = \\frac{\\pi}{4} \\ln 2 \\implies I = \\frac{\\pi}{8} \\ln 2$।"
  }
];
