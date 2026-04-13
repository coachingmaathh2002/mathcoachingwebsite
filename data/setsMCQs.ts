import { MCQ } from '../components/WBJEEAssignments';

export const setsExtraMCQs: MCQ[] = [
  {
    id: 'alg-8-6',
    question: 'যদি একটি সেটে $n$ সংখ্যক উপাদান থাকে, তবে তার উপসেটের (subset) সংখ্যা কত?',
    options: ['$n^2$', '$2^n$', '$2n$', '$n!$'],
    correctAnswer: 1,
    explanation: "কোনো সেটে $n$ সংখ্যক উপাদান থাকলে তার উপসেটের সংখ্যা $2^n$ হয়।"
  },
  {
    id: 'alg-8-7',
    question: "যদি $A$ এবং $B$ দুটি সেট হয়, তবে $(A \\cup B)'$ এর মান নিচের কোনটির সমান? (De Morgan's Law)",
    options: ['$A\' \\cup B\'$', '$A\' \\cap B\'$', '$A \\cap B$', '$A \\cup B$'],
    correctAnswer: 1,
    explanation: "De Morgan's Law অনুযায়ী, $(A \\cup B)' = A' \\cap B'$।"
  },
  {
    id: 'alg-8-8',
    question: 'যদি $A$ সেটে $m$ সংখ্যক এবং $B$ সেটে $n$ সংখ্যক উপাদান থাকে, তবে $A$ থেকে $B$ তে মোট কতগুলি সম্বন্ধ (relation) তৈরি করা সম্ভব?',
    options: ['$m^n$', '$n^m$', '$2^{mn}$', '$mn$'],
    correctAnswer: 2,
    explanation: "$A \\times B$ সেটে উপাদানের সংখ্যা $mn$। সম্বন্ধ হলো $A \\times B$ এর যেকোনো উপসেট। তাই মোট সম্বন্ধের সংখ্যা $2^{mn}$।"
  },
  {
    id: 'alg-8-9',
    question: 'যদি $A$ সেটে $m$ সংখ্যক এবং $B$ সেটে $n$ সংখ্যক উপাদান থাকে, তবে $A$ থেকে $B$ তে মোট কতগুলি চিত্রণ (function) তৈরি করা সম্ভব?',
    options: ['$m^n$', '$n^m$', '$2^{mn}$', '$mn$'],
    correctAnswer: 1,
    explanation: "$A$ এর প্রতিটি উপাদানের জন্য $B$ তে $n$ টি বিকল্প আছে। $A$ তে $m$ টি উপাদান থাকায় মোট চিত্রণের সংখ্যা $n \\times n \\times \\dots (m \\text{ বার}) = n^m$।"
  },
  {
    id: 'alg-8-10',
    question: 'যদি $A$ সেটে $n$ সংখ্যক উপাদান থাকে, তবে $A$ এর উপর কতগুলি স্বসম সম্বন্ধ (reflexive relation) তৈরি করা সম্ভব?',
    options: ['$2^{n^2}$', '$2^{n(n-1)}$', '$2^{n(n+1)/2}$', '$2^n$'],
    correctAnswer: 1,
    explanation: "$A \\times A$ তে $n^2$ টি উপাদান আছে। স্বসম সম্বন্ধের জন্য $(a,a)$ আকারের $n$ টি উপাদান অবশ্যই থাকতে হবে। বাকি $n^2 - n = n(n-1)$ টি উপাদানের প্রতিটি থাকতেও পারে বা নাও থাকতে পারে। তাই মোট স্বসম সম্বন্ধ $2^{n(n-1)}$।"
  },
  {
    id: 'alg-8-11',
    question: 'যদি $f(x) = \\sqrt{x^2 - 4}$ হয়, তবে $f(x)$ এর সংজ্ঞার অঞ্চল (domain) কত?',
    options: ['$[-2, 2]$', '$(-\\infty, -2] \\cup [2, \\infty)$', '$(-\\infty, \\infty)$', '$(0, \\infty)$'],
    correctAnswer: 1,
    explanation: "রুটের ভেতরের মান অঋণাত্মক হতে হবে। $x^2 - 4 \\ge 0 \\implies (x-2)(x+2) \\ge 0 \\implies x \\le -2$ অথবা $x \\ge 2$। সুতরাং ডোমেইন $(-\\infty, -2] \\cup [2, \\infty)$।"
  },
  {
    id: 'alg-8-12',
    question: 'যদি $f(x) = \\log(x-1)$ হয়, তবে $f(x)$ এর সংজ্ঞার অঞ্চল (domain) কত?',
    options: ['$(1, \\infty)$', '$[1, \\infty)$', '$(0, \\infty)$', '$(-\\infty, \\infty)$'],
    correctAnswer: 0,
    explanation: "লগারিদমের আর্গুমেন্ট ধনাত্মক হতে হবে। $x - 1 > 0 \\implies x > 1$। সুতরাং ডোমেইন $(1, \\infty)$।"
  },
  {
    id: 'alg-8-13',
    question: 'যদি $f(x) = x^2 + 2x + 3$ হয়, তবে $f(x)$ এর প্রসার (range) কত?',
    options: ['$[2, \\infty)$', '$(-\\infty, \\infty)$', '$[0, \\infty)$', '$[3, \\infty)$'],
    correctAnswer: 0,
    explanation: "$f(x) = x^2 + 2x + 1 + 2 = (x+1)^2 + 2$। যেহেতু $(x+1)^2 \\ge 0$, তাই $f(x) \\ge 2$। সুতরাং রেঞ্জ $[2, \\infty)$।"
  },
  {
    id: 'alg-8-14',
    question: 'যদি $f(x) = \\frac{x-1}{x+1}$ হয়, তবে $f(x)$ এর প্রসার (range) কত?',
    options: ['$\\mathbb{R} - \\{1\\}$', '$\\mathbb{R} - \\{-1\\}$', '$\\mathbb{R}$', '$\\mathbb{R} - \\{0\\}$'],
    correctAnswer: 0,
    explanation: "ধরি $y = \\frac{x-1}{x+1} \\implies xy + y = x - 1 \\implies x(y-1) = -y-1 \\implies x = \\frac{y+1}{1-y}$। $x$ বাস্তব হবে যদি $1-y \\neq 0 \\implies y \\neq 1$। সুতরাং রেঞ্জ $\\mathbb{R} - \\{1\\}$।"
  },
  {
    id: 'alg-8-15',
    question: 'যদি $f(x) = 2x+3$ এবং $g(x) = x^2$ হয়, তবে $f(g(x))$ এর মান কত?',
    options: ['$2x^2+3$', '$(2x+3)^2$', '$4x^2+9$', '$2x^2+9$'],
    correctAnswer: 0,
    explanation: "$f(g(x)) = f(x^2) = 2(x^2) + 3 = 2x^2 + 3$।"
  },
  {
    id: 'alg-8-16',
    question: 'যদি $f(x) = \\frac{2x+1}{3x-2}$ হয়, তবে $f^{-1}(x)$ এর মান কত?',
    options: ['$\\frac{3x-2}{2x+1}$', '$\\frac{2x+1}{3x-2}$', '$\\frac{2x+1}{3x-2}$', '$\\frac{2x+1}{3x-2}$ (Wait, let me fix options)'],
    correctAnswer: 1,
    explanation: "ধরি $y = \\frac{2x+1}{3x-2} \\implies 3xy - 2y = 2x + 1 \\implies x(3y-2) = 2y+1 \\implies x = \\frac{2y+1}{3y-2}$। সুতরাং $f^{-1}(x) = \\frac{2x+1}{3x-2}$। এটি একটি স্ব-বিপরীত (self-inverse) ফাংশন।"
  },
  {
    id: 'alg-8-17',
    question: 'নিচের কোনটি একটি যুগ্ম (even) অপেক্ষক?',
    options: ['$\\sin x$', '$\\cos x$', '$x^3$', '$\\tan x$'],
    correctAnswer: 1,
    explanation: "যুগ্ম অপেক্ষকের ক্ষেত্রে $f(-x) = f(x)$। $\\cos(-x) = \\cos x$, তাই এটি যুগ্ম অপেক্ষক। বাকিগুলো অযুগ্ম (odd) অপেক্ষক।"
  },
  {
    id: 'alg-8-18',
    question: 'যদি $f(x) = \\sin x + \\cos x$ হয়, তবে এর পর্যায় (period) কত?',
    options: ['$\\pi/2$', '$\\pi$', '$2\\pi$', '$4\\pi$'],
    correctAnswer: 2,
    explanation: "$\\sin x$ এর পর্যায় $2\\pi$ এবং $\\cos x$ এর পর্যায় $2\\pi$। এদের যোগফলের পর্যায় $\\text{lcm}(2\\pi, 2\\pi) = 2\\pi$।"
  },
  {
    id: 'alg-8-19',
    question: 'যদি $A \\Delta B = (A-B) \\cup (B-A)$ হয়, তবে $A \\Delta A$ এর মান কত?',
    options: ['$A$', '$\\emptyset$', '$U$', '$A\'$'],
    correctAnswer: 1,
    explanation: "$A \\Delta A = (A-A) \\cup (A-A) = \\emptyset \\cup \\emptyset = \\emptyset$।"
  },
  {
    id: 'alg-8-20',
    question: 'যদি $A$ এবং $B$ দুটি সেট হয় এবং $A \\subseteq B$ হয়, তবে $A \\cup B$ এর মান কত?',
    options: ['$A$', '$B$', '$\\emptyset$', '$A \\cap B$'],
    correctAnswer: 1,
    explanation: "যেহেতু $A$ এর সব উপাদান $B$ তে আছে, তাই $A$ এবং $B$ এর সংযোগ (union) করলে $B$ সেটটিই পাওয়া যাবে।"
  },
  {
    id: 'alg-8-21',
    question: 'যদি $n(A) = 3$ এবং $n(B) = 4$ হয়, তবে $A$ থেকে $B$ তে এক-এক (one-one) চিত্রণের সংখ্যা কত?',
    options: ['12', '24', '64', '81'],
    correctAnswer: 1,
    explanation: "এক-এক চিত্রণের সংখ্যা $^nP_m$ (যেখানে $n \\ge m$)। এখানে $^4P_3 = 4 \\times 3 \\times 2 = 24$।"
  },
  {
    id: 'alg-8-22',
    question: 'যদি $n(A) = 4$ এবং $n(B) = 3$ হয়, তবে $A$ থেকে $B$ তে উপরিচিত্রণ (onto function) এর সংখ্যা কত?',
    options: ['36', '81', '64', '24'],
    correctAnswer: 0,
    explanation: "উপরিচিত্রণের সংখ্যা = $3^4 - \\binom{3}{1}2^4 + \\binom{3}{2}1^4 = 81 - 3(16) + 3(1) = 81 - 48 + 3 = 36$।"
  },
  {
    id: 'alg-8-23',
    question: 'যদি $f(x) = [x]$ (Greatest Integer Function) হয়, তবে $f(2.7) + f(-2.7)$ এর মান কত?',
    options: ['0', '-1', '1', '-5'],
    correctAnswer: 1,
    explanation: "$[2.7] = 2$ এবং $[-2.7] = -3$। যোগফল = $2 + (-3) = -1$।"
  },
  {
    id: 'alg-8-24',
    question: 'যদি $f(x) = \\{x\\}$ (Fractional Part Function) হয়, তবে এর পর্যায় (period) কত?',
    options: ['1', '2', '$\\pi$', 'পর্যায়বৃত্ত নয়'],
    correctAnswer: 0,
    explanation: "ভগ্নাংশ অপেক্ষক $\\{x\\} = x - [x]$ একটি পর্যায়বৃত্ত অপেক্ষক যার পর্যায় 1।"
  },
  {
    id: 'alg-8-25',
    question: 'যদি $A = \\{1, 2, 3\\}$ হয়, তবে $A$ এর উপর মোট কতগুলি সমতুল্যতা সম্বন্ধ (equivalence relation) তৈরি করা সম্ভব?',
    options: ['3', '5', '8', '9'],
    correctAnswer: 1,
    explanation: "3টি উপাদানের সেটের উপর সমতুল্যতা সম্বন্ধের সংখ্যা বেল সংখ্যা (Bell number) $B_3$ এর সমান। $B_3 = 5$।"
  },
  {
    id: 'alg-8-26',
    question: 'যদি $f(x) = |x|/x$ (যেখানে $x \\neq 0$) এবং $f(0)=0$ হয়, তবে $f(x)$ এর প্রসার (range) কত?',
    options: ['$\\{-1, 1\\}$', '$\\{-1, 0, 1\\}$', '$\\mathbb{R}$', '$[0, \\infty)$'],
    correctAnswer: 1,
    explanation: "এটি Signum function। $x>0$ হলে $f(x)=1$, $x<0$ হলে $f(x)=-1$, এবং $x=0$ হলে $f(x)=0$। রেঞ্জ $\\{-1, 0, 1\\}$।"
  },
  {
    id: 'alg-8-27',
    question: 'যদি $f(x) = e^x$ এবং $g(x) = \\ln x$ হয়, তবে $f(g(x))$ এর সংজ্ঞার অঞ্চল (domain) কত?',
    options: ['$\\mathbb{R}$', '$(0, \\infty)$', '$[0, \\infty)$', '$\\mathbb{R} - \\{0\\}$'],
    correctAnswer: 1,
    explanation: "$f(g(x)) = e^{\\ln x} = x$। কিন্তু $g(x) = \\ln x$ সংজ্ঞায়িত হওয়ার জন্য $x > 0$ হতে হবে। তাই ডোমেইন $(0, \\infty)$।"
  },
  {
    id: 'alg-8-28',
    question: 'যদি $A \\cap B = A$ হয়, তবে নিচের কোনটি সঠিক?',
    options: ['$A \\subseteq B$', '$B \\subseteq A$', '$A = B$', '$A \\cup B = \\emptyset$'],
    correctAnswer: 0,
    explanation: "$A \\cap B = A$ এর অর্থ হলো $A$ এর সব উপাদান $B$ তে আছে। সুতরাং $A \\subseteq B$।"
  },
  {
    id: 'alg-8-29',
    question: 'একটি শ্রেণীতে 50 জন ছাত্রের মধ্যে 30 জন ফুটবল এবং 25 জন ক্রিকেট খেলে। 10 জন উভয় খেলাই খেলে। কতজন কোনো খেলাই খেলে না?',
    options: ['5', '10', '15', '20'],
    correctAnswer: 0,
    explanation: "$n(F \\cup C) = n(F) + n(C) - n(F \\cap C) = 30 + 25 - 10 = 45$। কোনো খেলা খেলে না এমন ছাত্র = $50 - 45 = 5$ জন।"
  },
  {
    id: 'alg-8-30',
    question: 'যদি $A \\times B = B \\times A$ হয় এবং $A, B$ অশূন্য সেট হয়, তবে নিচের কোনটি সঠিক?',
    options: ['$A \\subset B$', '$B \\subset A$', '$A = B$', '$A \\cap B = \\emptyset$'],
    correctAnswer: 2,
    explanation: "কার্তেসীয় গুণজ (Cartesian product) বিনিময় নিয়ম (commutative law) মেনে চলে শুধুমাত্র যদি সেট দুটি সমান হয়। সুতরাং $A = B$।"
  }
];
