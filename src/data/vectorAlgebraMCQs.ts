import { MCQ } from '../components/WBJEEAssignments';

export const vectorAlgebraMCQs: MCQ[] = [
  {
    id: 'vec-1-1',
    question: "যদি $\\vec{a}, \\vec{b}, \\vec{c}$ তিনটি একক ভেক্টর (unit vectors) হয় এবং $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$ হয়, তবে $\\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{c} + \\vec{c}\\cdot\\vec{a}$ এর মান কত?",
    options: ["-3/2", "3/2", "0", "-1"],
    correctAnswer: 0,
    explanation: "$|\\vec{a} + \\vec{b} + \\vec{c}|^2 = 0 \\implies |\\vec{a}|^2 + |\\vec{b}|^2 + |\\vec{c}|^2 + 2(\\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{c} + \\vec{c}\\cdot\\vec{a}) = 0$। $1 + 1 + 1 + 2(\\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{c} + \\vec{c}\\cdot\\vec{a}) = 0 \\implies \\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{c} + \\vec{c}\\cdot\\vec{a} = -3/2$।"
  },
  {
    id: 'vec-1-2',
    question: "$|\\vec{a} \\times \\vec{b}|^2 + (\\vec{a} \\cdot \\vec{b})^2$ এর মান নিচের কোনটির সমান?",
    options: ["$|\\vec{a}|^2 |\\vec{b}|^2$", "$|\\vec{a}|^2 + |\\vec{b}|^2$", "0", "$2|\\vec{a}|^2 |\\vec{b}|^2$"],
    correctAnswer: 0,
    explanation: "$|\\vec{a} \\times \\vec{b}|^2 + (\\vec{a} \\cdot \\vec{b})^2 = (|\\vec{a}||\\vec{b}|\\sin\\theta)^2 + (|\\vec{a}||\\vec{b}|\\cos\\theta)^2 = |\\vec{a}|^2 |\\vec{b}|^2 (\\sin^2\\theta + \\cos^2\\theta) = |\\vec{a}|^2 |\\vec{b}|^2$। এটি ল্যাগ্রাঞ্জের অভেদ (Lagrange's Identity) নামে পরিচিত।"
  },
  {
    id: 'vec-1-3',
    question: "যদি $\\vec{a}, \\vec{b}, \\vec{c}$ সমতলীয় (coplanar) না হয়, তবে $[\\vec{a}+\\vec{b}, \\vec{b}+\\vec{c}, \\vec{c}+\\vec{a}]$ এর মান কত?",
    options: ["$2[\\vec{a}, \\vec{b}, \\vec{c}]$", "$0$", "$[\\vec{a}, \\vec{b}, \\vec{c}]$", "$3[\\vec{a}, \\vec{b}, \\vec{c}]$"],
    correctAnswer: 0,
    explanation: "$[\\vec{a}+\\vec{b}, \\vec{b}+\\vec{c}, \\vec{c}+\\vec{a}] = (\\vec{a}+\\vec{b}) \\cdot ((\\vec{b}+\\vec{c}) \\times (\\vec{c}+\\vec{a})) = (\\vec{a}+\\vec{b}) \\cdot (\\vec{b}\\times\\vec{c} + \\vec{b}\\times\\vec{a} + \\vec{c}\\times\\vec{c} + \\vec{c}\\times\\vec{a})$। সরল করলে $\\vec{a}\\cdot(\\vec{b}\\times\\vec{c}) + \\vec{b}\\cdot(\\vec{c}\\times\\vec{a}) = [\\vec{a}, \\vec{b}, \\vec{c}] + [\\vec{b}, \\vec{c}, \\vec{a}] = 2[\\vec{a}, \\vec{b}, \\vec{c}]$।"
  },
  {
    id: 'vec-1-4',
    question: "$\\vec{a} \\times (\\vec{b} \\times \\vec{c}) + \\vec{b} \\times (\\vec{c} \\times \\vec{a}) + \\vec{c} \\times (\\vec{a} \\times \\vec{b})$ এর মান কত?",
    options: ["$\\vec{0}$", "$2[\\vec{a}, \\vec{b}, \\vec{c}]$", "$\\vec{a} + \\vec{b} + \\vec{c}$", "$[\\vec{a}, \\vec{b}, \\vec{c}](\\vec{a}+\\vec{b}+\\vec{c})$"],
    correctAnswer: 0,
    explanation: "ভেক্টর ট্রিপল প্রোডাক্টের সূত্র: $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a}\\cdot\\vec{c})\\vec{b} - (\\vec{a}\\cdot\\vec{b})\\vec{c}$। তিনটি পদ যোগ করলে সব পদ বাতিল হয়ে $\\vec{0}$ হয়। এটি জ্যাকোবি অভেদ (Jacobi Identity) নামে পরিচিত।"
  },
  {
    id: 'vec-1-5',
    question: "যদি $\\vec{a} = \\hat{i} + \\hat{j} + \\hat{k}$ এবং $\\vec{b} = \\hat{i} - \\hat{j} + \\hat{k}$ হয়, তবে $\\vec{a}$ এর উপর $\\vec{b}$ এর অভিক্ষেপ (projection) কত?",
    options: ["$1/\\sqrt{3}$", "$1/\\sqrt{2}$", "$\\sqrt{3}$", "1"],
    correctAnswer: 0,
    explanation: "$\\vec{a}$ এর উপর $\\vec{b}$ এর অভিক্ষেপ = $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|}$। $\\vec{a} \\cdot \\vec{b} = (1)(1) + (1)(-1) + (1)(1) = 1$। $|\\vec{a}| = \\sqrt{1^2+1^2+1^2} = \\sqrt{3}$। অভিক্ষেপ = $1/\\sqrt{3}$।"
  },
  {
    id: 'vec-1-6',
    question: "যদি $|\\vec{a}| = 3, |\\vec{b}| = 4$ এবং $|\\vec{a} - \\vec{b}| = 5$ হয়, তবে $|\\vec{a} + \\vec{b}|$ এর মান কত?",
    options: ["5", "7", "1", "25"],
    correctAnswer: 0,
    explanation: "$|\\vec{a} + \\vec{b}|^2 + |\\vec{a} - \\vec{b}|^2 = 2(|\\vec{a}|^2 + |\\vec{b}|^2)$। $|\\vec{a} + \\vec{b}|^2 + 25 = 2(9 + 16) = 50 \\implies |\\vec{a} + \\vec{b}|^2 = 25 \\implies |\\vec{a} + \\vec{b}| = 5$।"
  },
  {
    id: 'vec-1-7',
    question: "দুটি ভেক্টর $\\vec{a}$ এবং $\\vec{b}$ এর মধ্যবর্তী কোণ $\\theta$। যদি $\\vec{a} \\cdot \\vec{b} = |\\vec{a} \\times \\vec{b}|$ হয়, তবে $\\theta$ এর মান কত?",
    options: ["$\\pi/4$", "$\\pi/2$", "$\\pi/3$", "$\\pi/6$"],
    correctAnswer: 0,
    explanation: "$|\\vec{a}||\\vec{b}|\\cos\\theta = |\\vec{a}||\\vec{b}|\\sin\\theta \\implies \\tan\\theta = 1 \\implies \\theta = \\pi/4$।"
  },
  {
    id: 'vec-1-8',
    question: "যে সামান্তরিকের কর্ণ দুটি $\\vec{d}_1 = 3\\hat{i} + \\hat{j} - 2\\hat{k}$ এবং $\\vec{d}_2 = \\hat{i} - 3\\hat{j} + 4\\hat{k}$, তার ক্ষেত্রফল কত?",
    options: ["$5\\sqrt{3}$", "$10\\sqrt{3}$", "$5\\sqrt{2}$", "$10\\sqrt{2}$"],
    correctAnswer: 0,
    explanation: "ক্ষেত্রফল = $\\frac{1}{2} |\\vec{d}_1 \\times \\vec{d}_2|$। $\\vec{d}_1 \\times \\vec{d}_2 = \\hat{i}(4-6) - \\hat{j}(12 - (-2)) + \\hat{k}(-9-1) = -2\\hat{i} - 14\\hat{j} - 10\\hat{k}$। $|\\vec{d}_1 \\times \\vec{d}_2| = \\sqrt{4 + 196 + 100} = \\sqrt{300} = 10\\sqrt{3}$। ক্ষেত্রফল = $5\\sqrt{3}$।"
  },
  {
    id: 'vec-1-9',
    question: "যদি $\\vec{a}, \\vec{b}, \\vec{c}$ সমতলীয় হয়, তবে নিচের কোনটি সত্য?",
    options: ["$[\\vec{a}, \\vec{b}, \\vec{c}] = 0$", "$\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = \\vec{0}$", "$\\vec{a} \\cdot \\vec{b} = 0$", "$\\vec{a} \\times \\vec{b} = \\vec{0}$"],
    correctAnswer: 0,
    explanation: "তিনটি ভেক্টর সমতলীয় (coplanar) হওয়ার শর্ত হলো তাদের স্কেলার ট্রিপল প্রোডাক্ট (Scalar Triple Product) শূন্য হবে, অর্থাৎ $[\\vec{a}, \\vec{b}, \\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = 0$।"
  },
  {
    id: 'vec-1-10',
    question: "যদি $\\vec{a} = 2\\hat{i} - \\hat{j} + \\hat{k}$, $\\vec{b} = \\hat{i} + 2\\hat{j} - 3\\hat{k}$ এবং $\\vec{c} = 3\\hat{i} + a\\hat{j} + 5\\hat{k}$ সমতলীয় হয়, তবে $a$ এর মান কত?",
    options: ["-4", "4", "2", "-2"],
    correctAnswer: 0,
    explanation: "$[\\vec{a}, \\vec{b}, \\vec{c}] = 0 \\implies \\left| \\begin{matrix} 2 & -1 & 1 \\\\ 1 & 2 & -3 \\\\ 3 & a & 5 \\end{matrix} \\right| = 0$। $2(10 + 3a) - (-1)(5 - (-9)) + 1(a - 6) = 0 \\implies 20 + 6a + 14 + a - 6 = 0 \\implies 7a + 28 = 0 \\implies a = -4$।"
  },
  {
    id: 'vec-1-11',
    question: "যদি $\\vec{a}$ এবং $\\vec{b}$ দুটি একক ভেক্টর হয় এবং তাদের মধ্যবর্তী কোণ $\\theta$ হয়, তবে $\\sin(\\theta/2)$ এর মান কত?",
    options: ["$\\frac{1}{2}|\\vec{a}-\\vec{b}|$", "$\\frac{1}{2}|\\vec{a}+\\vec{b}|$", "$|\\vec{a}-\\vec{b}|$", "$|\\vec{a}+\\vec{b}|$"],
    correctAnswer: 0,
    explanation: "$|\\vec{a}-\\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 - 2|\\vec{a}||\\vec{b}|\\cos\\theta = 1 + 1 - 2\cos\\theta = 2(1-\\cos\\theta) = 4\\sin^2(\\theta/2)$। সুতরাং $\\sin(\\theta/2) = \\frac{1}{2}|\\vec{a}-\\vec{b}|$।"
  },
  {
    id: 'vec-1-12',
    question: "$\\vec{a} = \\hat{i} + \\hat{j} + \\hat{k}$ এবং $\\vec{b} = \\hat{i} - \\hat{j} + \\hat{k}$ ভেক্টর দুটির লম্বদিকে একটি একক ভেক্টর (unit vector) কোনটি?",
    options: ["$\\frac{\\hat{i} - \\hat{k}}{\\sqrt{2}}$", "$\\frac{\\hat{i} + \\hat{k}}{\\sqrt{2}}$", "$\\frac{\\hat{j} - \\hat{k}}{\\sqrt{2}}$", "$\\frac{\\hat{i} - \\hat{j}}{\\sqrt{2}}$"],
    correctAnswer: 0,
    explanation: "লম্ব ভেক্টর $\\vec{n} = \\vec{a} \\times \\vec{b} = \\hat{i}(1 - (-1)) - \\hat{j}(1 - 1) + \\hat{k}(-1 - 1) = 2\\hat{i} - 2\\hat{k}$। একক ভেক্টর = $\\frac{2\\hat{i} - 2\\hat{k}}{\\sqrt{4+4}} = \\frac{2(\\hat{i} - \\hat{k})}{2\\sqrt{2}} = \\frac{\\hat{i} - \\hat{k}}{\\sqrt{2}}$।"
  },
  {
    id: 'vec-1-13',
    question: "যদি $\\vec{a}, \\vec{b}, \\vec{c}$ তিনটি ভেক্টর হয়, তবে $(\\vec{a} \\times \\vec{b}) \\cdot (\\vec{c} \\times \\vec{d})$ এর মান কোনটি?",
    options: ["$(\\vec{a}\\cdot\\vec{c})(\\vec{b}\\cdot\\vec{d}) - (\\vec{a}\\cdot\\vec{d})(\\vec{b}\\cdot\\vec{c})$", "$(\\vec{a}\\cdot\\vec{b})(\\vec{c}\\cdot\\vec{d}) - (\\vec{a}\\cdot\\vec{c})(\\vec{b}\\cdot\\vec{d})$", "$(\\vec{a}\\cdot\\vec{d})(\\vec{b}\\cdot\\vec{c}) - (\\vec{a}\\cdot\\vec{c})(\\vec{b}\\cdot\\vec{d})$", "0"],
    correctAnswer: 0,
    explanation: "এটি ল্যাগ্রাঞ্জের অভেদ (Lagrange's Identity) এর একটি রূপ। $(\\vec{a} \\times \\vec{b}) \\cdot (\\vec{c} \\times \\vec{d}) = \\left| \\begin{matrix} \\vec{a}\\cdot\\vec{c} & \\vec{a}\\cdot\\vec{d} \\\\ \\vec{b}\\cdot\\vec{c} & \\vec{b}\\cdot\\vec{d} \\end{matrix} \\right| = (\\vec{a}\\cdot\\vec{c})(\\vec{b}\\cdot\\vec{d}) - (\\vec{a}\\cdot\\vec{d})(\\vec{b}\\cdot\\vec{c})$।"
  },
  {
    id: 'vec-1-14',
    question: "যে সামান্তরিকের সন্নিহিত বাহু দুটি $\\vec{a} = 2\\hat{i} - \\hat{j} + \\hat{k}$ এবং $\\vec{b} = 3\\hat{i} + 4\\hat{j} - \\hat{k}$, তার ক্ষেত্রফল কত?",
    options: ["$\\sqrt{155}$", "$\\sqrt{105}$", "$\\sqrt{115}$", "$\\sqrt{125}$"],
    correctAnswer: 0,
    explanation: "ক্ষেত্রফল = $|\\vec{a} \\times \\vec{b}|$। $\\vec{a} \\times \\vec{b} = \\hat{i}(1 - 4) - \\hat{j}(-2 - 3) + \\hat{k}(8 - (-3)) = -3\\hat{i} + 5\\hat{j} + 11\\hat{k}$। $|\\vec{a} \\times \\vec{b}| = \\sqrt{9 + 25 + 121} = \\sqrt{155}$।"
  },
  {
    id: 'vec-1-15',
    question: "যদি $\\vec{a}, \\vec{b}, \\vec{c}$ তিনটি অশূন্য ভেক্টর হয় এবং $\\vec{a} \\times \\vec{b} = \\vec{c}$ এবং $\\vec{b} \\times \\vec{c} = \\vec{a}$ হয়, তবে নিচের কোনটি সত্য?",
    options: ["$|\\vec{b}| = 1, |\\vec{a}| = |\\vec{c}|$", "$|\\vec{a}| = 1, |\\vec{b}| = |\\vec{c}|$", "$|\\vec{c}| = 1, |\\vec{a}| = |\\vec{b}|$", "$|\\vec{a}| = |\\vec{b}| = |\\vec{c}| = 1$"],
    correctAnswer: 0,
    explanation: "যেহেতু $\\vec{a} \\times \\vec{b} = \\vec{c}$, তাই $\\vec{c} \\perp \\vec{a}$ এবং $\\vec{c} \\perp \\vec{b}$। একইভাবে $\\vec{a} \\perp \\vec{b}$ এবং $\\vec{a} \\perp \\vec{c}$। সুতরাং $\\vec{a}, \\vec{b}, \\vec{c}$ পরস্পর লম্ব। $|\\vec{c}| = |\\vec{a}||\\vec{b}|\\sin 90^\\circ = |\\vec{a}||\\vec{b}|$। আবার $|\\vec{a}| = |\\vec{b}||\\vec{c}|\\sin 90^\\circ = |\\vec{b}||\\vec{c}|$। গুণ করলে $|\\vec{a}||\\vec{c}| = |\\vec{a}||\\vec{c}||\\vec{b}|^2 \\implies |\\vec{b}|^2 = 1 \\implies |\\vec{b}| = 1$। তাহলে $|\\vec{a}| = |\\vec{c}|$।"
  },
  {
    id: 'vec-1-16',
    question: "যদি $\\vec{r} \\cdot \\vec{a} = 0, \\vec{r} \\cdot \\vec{b} = 0$ এবং $\\vec{r} \\cdot \\vec{c} = 0$ হয় (যেখানে $\\vec{a}, \\vec{b}, \\vec{c}$ সমতলীয় নয়), তবে $\\vec{r}$ ভেক্টরটি কী হবে?",
    options: ["$\\vec{0}$", "$\\vec{a} \\times \\vec{b}$", "$\\vec{b} \\times \\vec{c}$", "$\\vec{c} \\times \\vec{a}$"],
    correctAnswer: 0,
    explanation: "যেহেতু $\\vec{a}, \\vec{b}, \\vec{c}$ সমতলীয় নয়, তারা 3D স্পেসে একটি বেসিস (basis) তৈরি করে। $\\vec{r}$ ভেক্টরটি তিনটি স্বাধীন ভেক্টরের সাথে লম্ব, যা শুধুমাত্র তখনই সম্ভব যখন $\\vec{r} = \\vec{0}$।"
  },
  {
    id: 'vec-1-17',
    question: "$\\vec{a} = \\hat{i} + \\hat{j} + \\hat{k}$ ভেক্টরটি স্থানাঙ্ক অক্ষগুলির সাথে যে কোণ উৎপন্ন করে তার মান কত?",
    options: ["$\\cos^{-1}(1/\\sqrt{3})$", "$\\cos^{-1}(1/\\sqrt{2})$", "$\\pi/4$", "$\\pi/3$"],
    correctAnswer: 0,
    explanation: "$\\vec{a}$ এর দিক কোসাইন (direction cosines) হলো $\\cos\\alpha = \\frac{1}{\\sqrt{1^2+1^2+1^2}} = 1/\\sqrt{3}$। সুতরাং $\\alpha = \\beta = \\gamma = \\cos^{-1}(1/\\sqrt{3})$।"
  },
  {
    id: 'vec-1-18',
    question: "$[\\vec{a} \\times \\vec{b}, \\vec{b} \\times \\vec{c}, \\vec{c} \\times \\vec{a}]$ এর মান কত?",
    options: ["$[\\vec{a}, \\vec{b}, \\vec{c}]^2$", "0", "$2[\\vec{a}, \\vec{b}, \\vec{c}]$", "$[\\vec{a}, \\vec{b}, \\vec{c}]$"],
    correctAnswer: 0,
    explanation: "$[\\vec{a} \\times \\vec{b}, \\vec{b} \\times \\vec{c}, \\vec{c} \\times \\vec{a}] = (\\vec{a} \\times \\vec{b}) \\cdot ((\\vec{b} \\times \\vec{c}) \\times (\\vec{c} \\times \\vec{a}))$। $(\\vec{b} \\times \\vec{c}) \\times (\\vec{c} \\times \\vec{a}) = [\\vec{b}, \\vec{c}, \\vec{a}]\\vec{c} - [\\vec{b}, \\vec{c}, \\vec{c}]\\vec{a} = [\\vec{a}, \\vec{b}, \\vec{c}]\\vec{c}$। সুতরাং $(\\vec{a} \\times \\vec{b}) \\cdot ([\\vec{a}, \\vec{b}, \\vec{c}]\\vec{c}) = [\\vec{a}, \\vec{b}, \\vec{c}] (\\vec{a} \\times \\vec{b} \\cdot \\vec{c}) = [\\vec{a}, \\vec{b}, \\vec{c}]^2$।"
  },
  {
    id: 'vec-1-19',
    question: "যদি $\\vec{a}$ এবং $\\vec{b}$ দুটি ভেক্টর হয়, তবে $(\\vec{a} + \\vec{b}) \\times (\\vec{a} - \\vec{b})$ এর মান কত?",
    options: ["$2(\\vec{b} \\times \\vec{a})$", "$2(\\vec{a} \\times \\vec{b})$", "$\\vec{0}$", "$\\vec{a} \\times \\vec{b}$"],
    correctAnswer: 0,
    explanation: "$(\\vec{a} + \\vec{b}) \\times (\\vec{a} - \\vec{b}) = \\vec{a}\\times\\vec{a} - \\vec{a}\\times\\vec{b} + \\vec{b}\\times\\vec{a} - \\vec{b}\\times\\vec{b} = \\vec{0} - \\vec{a}\\times\\vec{b} - \\vec{a}\\times\\vec{b} - \\vec{0} = -2(\\vec{a}\\times\\vec{b}) = 2(\\vec{b}\\times\\vec{a})$।"
  },
  {
    id: 'vec-1-20',
    question: "একটি ত্রিভুজের শীর্ষবিন্দুগুলির অবস্থান ভেক্টর $\\vec{a}, \\vec{b}, \\vec{c}$ হলে, ত্রিভুজটির ক্ষেত্রফল কত?",
    options: ["$\\frac{1}{2}|\\vec{a}\\times\\vec{b} + \\vec{b}\\times\\vec{c} + \\vec{c}\\times\\vec{a}|$", "$\\frac{1}{2}|\\vec{a}\\times\\vec{b}|$", "$|\\vec{a}\\times\\vec{b} + \\vec{b}\\times\\vec{c} + \\vec{c}\\times\\vec{a}|$", "$\\frac{1}{2}|\\vec{a}\\times\\vec{b} - \\vec{b}\\times\\vec{c}|$"],
    correctAnswer: 0,
    explanation: "বাহু দুটি হলো $\\vec{b}-\\vec{a}$ এবং $\\vec{c}-\\vec{a}$। ক্ষেত্রফল = $\\frac{1}{2}|(\\vec{b}-\\vec{a}) \\times (\\vec{c}-\\vec{a})| = \\frac{1}{2}|\\vec{b}\\times\\vec{c} - \\vec{b}\\times\\vec{a} - \\vec{a}\\times\\vec{c} + \\vec{a}\\times\\vec{a}| = \\frac{1}{2}|\\vec{b}\\times\\vec{c} + \\vec{a}\\times\\vec{b} + \\vec{c}\\times\\vec{a}| = \\frac{1}{2}|\\vec{a}\\times\\vec{b} + \\vec{b}\\times\\vec{c} + \\vec{c}\\times\\vec{a}|$।"
  },
  {
    id: 'vec-1-21',
    question: "যদি $\\vec{a}, \\vec{b}, \\vec{c}$ তিনটি ভেক্টর হয়, তবে $\\vec{a} \\times (\\vec{b} \\times \\vec{c})$ কোন ভেক্টরগুলির সমতলে অবস্থিত?",
    options: ["$\\vec{b}$ এবং $\\vec{c}$", "$\\vec{a}$ এবং $\\vec{b}$", "$\\vec{a}$ এবং $\\vec{c}$", "$\\vec{a}, \\vec{b}, \\vec{c}$ এর লম্ব সমতলে"],
    correctAnswer: 0,
    explanation: "ভেক্টর ট্রিপল প্রোডাক্ট $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a}\\cdot\\vec{c})\\vec{b} - (\\vec{a}\\cdot\\vec{b})\\vec{c}$। এটি $\\vec{b}$ এবং $\\vec{c}$ এর একটি রৈখিক সমবায় (linear combination), তাই এটি $\\vec{b}$ এবং $\\vec{c}$ এর সমতলে অবস্থিত।"
  },
  {
    id: 'vec-1-22',
    question: "যদি $\\vec{a} = \\hat{i} + \\hat{j}, \\vec{b} = \\hat{j} + \\hat{k}, \\vec{c} = \\hat{k} + \\hat{i}$ হয়, তবে $[\\vec{a}, \\vec{b}, \\vec{c}]$ এর মান কত?",
    options: ["2", "0", "1", "-2"],
    correctAnswer: 0,
    explanation: "$[\\vec{a}, \\vec{b}, \\vec{c}] = \\left| \\begin{matrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{matrix} \\right| = 1(1 - 0) - 1(0 - 1) + 0 = 1 + 1 = 2$।"
  },
  {
    id: 'vec-1-23',
    question: "যদি $\\vec{a}$ এবং $\\vec{b}$ অশূন্য ভেক্টর হয় এবং $|\\vec{a} + \\vec{b}| = |\\vec{a} - \\vec{b}|$ হয়, তবে $\\vec{a}$ এবং $\\vec{b}$ এর মধ্যবর্তী কোণ কত?",
    options: ["$\\pi/2$", "$\\pi/4$", "$\\pi$", "0"],
    correctAnswer: 0,
    explanation: "$|\\vec{a} + \\vec{b}|^2 = |\\vec{a} - \\vec{b}|^2 \\implies |\\vec{a}|^2 + |\\vec{b}|^2 + 2\\vec{a}\\cdot\\vec{b} = |\\vec{a}|^2 + |\\vec{b}|^2 - 2\\vec{a}\\cdot\\vec{b} \\implies 4\\vec{a}\\cdot\\vec{b} = 0 \\implies \\vec{a}\\cdot\\vec{b} = 0$। তাই কোণ $\\pi/2$।"
  },
  {
    id: 'vec-1-24',
    question: "$\\vec{a} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ এবং $\\vec{b} = -\\hat{i} + 2\\hat{j} + 4\\hat{k}$ ভেক্টর দুটির মধ্যবর্তী কোণ কত?",
    options: ["$\\cos^{-1}(0)$", "$\\cos^{-1}(1/\\sqrt{14})$", "$\\pi/2$", "$\\pi/3$"],
    correctAnswer: 2,
    explanation: "$\\vec{a} \\cdot \\vec{b} = (2)(-1) + (3)(2) + (-1)(4) = -2 + 6 - 4 = 0$। ডট গুণফল 0 হওয়ায় ভেক্টর দুটি পরস্পর লম্ব, অর্থাৎ কোণ $\\pi/2$ বা $\\cos^{-1}(0)$।"
  },
  {
    id: 'vec-1-25',
    question: "যদি $\\vec{a}, \\vec{b}, \\vec{c}$ তিনটি একক ভেক্টর হয় এবং $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = \\frac{1}{2}\\vec{b}$ হয়, তবে $\\vec{a}$ এবং $\\vec{c}$ এর মধ্যবর্তী কোণ কত? (যেখানে $\\vec{b}$ এবং $\\vec{c}$ সমান্তরাল নয়)",
    options: ["$\\pi/3$", "$\\pi/6$", "$\\pi/4$", "$\\pi/2$"],
    correctAnswer: 0,
    explanation: "$\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a}\\cdot\\vec{c})\\vec{b} - (\\vec{a}\\cdot\\vec{b})\\vec{c} = \\frac{1}{2}\\vec{b}$। যেহেতু $\\vec{b}$ এবং $\\vec{c}$ সমান্তরাল নয়, সহগ তুলনা করে: $\\vec{a}\\cdot\\vec{c} = 1/2$ এবং $\\vec{a}\\cdot\\vec{b} = 0$। $|\\vec{a}||\\vec{c}|\\cos\\theta = 1/2 \\implies (1)(1)\\cos\\theta = 1/2 \\implies \\theta = \\pi/3$।"
  },
  {
    id: 'vec-1-26',
    question: "যে সামান্তরিকের কর্ণ দুটি $\\vec{a}$ এবং $\\vec{b}$, তার ক্ষেত্রফল কত?",
    options: ["$\\frac{1}{2}|\\vec{a} \\times \\vec{b}|$", "$|\\vec{a} \\times \\vec{b}|$", "$2|\\vec{a} \\times \\vec{b}|$", "$\\frac{1}{4}|\\vec{a} \\times \\vec{b}|$"],
    correctAnswer: 0,
    explanation: "কর্ণ দেওয়া থাকলে সামান্তরিকের ক্ষেত্রফল = $\\frac{1}{2}|\\vec{d}_1 \\times \\vec{d}_2|$। এখানে কর্ণ দুটি $\\vec{a}$ এবং $\\vec{b}$, তাই ক্ষেত্রফল $\\frac{1}{2}|\\vec{a} \\times \\vec{b}|$।"
  },
  {
    id: 'vec-1-27',
    question: "যদি $\\vec{a} = \\hat{i} + \\hat{j} + \\hat{k}$ এবং $\\vec{b} = 2\\hat{i} + 3\\hat{j} + \\hat{k}$ হয়, তবে $\\vec{a} \\times \\vec{b}$ এর মান কত?",
    options: ["$-2\\hat{i} + \\hat{j} + \\hat{k}$", "$2\\hat{i} - \\hat{j} - \\hat{k}$", "$\\hat{i} - \\hat{j} + \\hat{k}$", "$-2\\hat{i} - \\hat{j} + \\hat{k}$"],
    correctAnswer: 0,
    explanation: "$\\vec{a} \\times \\vec{b} = \\left| \\begin{matrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 1 & 1 \\\\ 2 & 3 & 1 \\end{matrix} \\right| = \\hat{i}(1-3) - \\hat{j}(1-2) + \\hat{k}(3-2) = -2\\hat{i} + \\hat{j} + \\hat{k}$।"
  },
  {
    id: 'vec-1-28',
    question: "যদি $\\vec{a}$ এবং $\\vec{b}$ দুটি ভেক্টর হয়, তবে $\\vec{a} \\cdot (\\vec{a} \\times \\vec{b})$ এর মান কত?",
    options: ["0", "$|\\vec{a}|^2 |\\vec{b}|$", "1", "$|\\vec{a} \\times \\vec{b}|$"],
    correctAnswer: 0,
    explanation: "$\\vec{a} \\times \\vec{b}$ ভেক্টরটি $\\vec{a}$ এবং $\\vec{b}$ উভয়ের সাথেই লম্ব। তাই $\\vec{a}$ এর সাথে এর ডট গুণফল সর্বদা 0 হবে। এটি স্কেলার ট্রিপল প্রোডাক্ট $[\\vec{a}, \\vec{a}, \\vec{b}]$ এর সমান, যার মান 0।"
  },
  {
    id: 'vec-1-29',
    question: "যদি $\\vec{a}, \\vec{b}, \\vec{c}$ তিনটি ভেক্টর হয়, তবে $(\\vec{a} + \\vec{b}) \\cdot ((\\vec{b} + \\vec{c}) \\times (\\vec{c} + \\vec{a}))$ এর মান কত?",
    options: ["$2[\\vec{a}, \\vec{b}, \\vec{c}]$", "0", "$[\\vec{a}, \\vec{b}, \\vec{c}]$", "$3[\\vec{a}, \\vec{b}, \\vec{c}]$"],
    correctAnswer: 0,
    explanation: "এটি $[\\vec{a}+\\vec{b}, \\vec{b}+\\vec{c}, \\vec{c}+\\vec{a}]$ এর সমান, যার মান $2[\\vec{a}, \\vec{b}, \\vec{c}]$।"
  },
  {
    id: 'vec-1-30',
    question: "যদি $\\vec{a} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$ এবং $\\vec{b} = 3\\hat{i} - 6\\hat{j} + 2\\hat{k}$ হয়, তবে $\\vec{a}$ এবং $\\vec{b}$ এর মধ্যবর্তী কোণের সমদ্বিখণ্ডক (angle bisector) বরাবর একটি ভেক্টর কোনটি?",
    options: ["$5\\hat{i} - 3\\hat{j} + 8\\hat{k}$", "$5\\hat{i} + 3\\hat{j} + 8\\hat{k}$", "$\\hat{i} - 9\\hat{j} - 4\\hat{k}$", "$- \\hat{i} + 9\\hat{j} + 4\\hat{k}$"],
    correctAnswer: 0,
    explanation: "$|\\vec{a}| = \\sqrt{4+9+36} = 7$। $|\\vec{b}| = \\sqrt{9+36+4} = 7$। যেহেতু উভয়ের মান সমান, তাদের যোগফল $\\vec{a} + \\vec{b}$ কোণের সমদ্বিখণ্ডক বরাবর হবে। $\\vec{a} + \\vec{b} = (2+3)\\hat{i} + (3-6)\\hat{j} + (6+2)\\hat{k} = 5\\hat{i} - 3\\hat{j} + 8\\hat{k}$।"
  }
];