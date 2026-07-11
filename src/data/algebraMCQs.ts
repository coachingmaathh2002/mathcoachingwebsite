import { MCQ } from '../components/WBJEEAssignments';
import { quadExtraMCQs } from './quadMCQs';
import { complexExtraMCQs } from './complexMCQs';
import { matricesExtraMCQs } from './matricesMCQs';
import { setsExtraMCQs } from './setsMCQs';
import { binomialExtraMCQs } from './binomialMCQs';

export const quadraticEquationsMCQs: MCQ[] = [
  {
    id: 'alg-1-1',
    question: 'যদি $\\alpha, \\beta$ সমীকরণ $x^2 - px + q = 0$ এর দুটি মূল হয় এবং $\\alpha^n + \\beta^n = V_n$ হয়, তবে $V_{n+1} - pV_n + qV_{n-1}$ এর মান কত?',
    options: ['0', '1', 'p', 'q'],
    correctAnswer: 0,
    explanation: "যেহেতু $\\alpha, \\beta$ মূল, $\\alpha^2 - p\\alpha + q = 0$ এবং $\\beta^2 - p\\beta + q = 0$। $\\alpha^{n-1}$ এবং $\\beta^{n-1}$ দিয়ে গুণ করে যোগ করলে $V_{n+1} - pV_n + qV_{n-1} = 0$ পাওয়া যায়। (Newton's Sum)"
  },
  {
    id: 'alg-1-2',
    question: 'যদি $a, b, c$ বাস্তব সংখ্যা হয় এবং $a \\neq 0$, তবে $ax^2 + bx + c = 0$ এবং $2ax^2 + 3bx + 4c = 0$ সমীকরণদ্বয়ের একটি সাধারণ মূল থাকার শর্ত কী?',
    options: ['$(c-a)^2 = (2b-3c)(3a-2b)$', '$(2c-a)^2 = (b-c)(a-b)$', '$(4a-2c)^2 = (3b-4c)(2a-3b)$', '$(4a-c)^2 = (3b-2c)(2a-b)$'],
    correctAnswer: 3,
    explanation: 'ধরি সাধারণ মূল $\\alpha$। তাহলে $a\\alpha^2 + b\\alpha + c = 0$ এবং $2a\\alpha^2 + 3b\\alpha + 4c = 0$। বজ্রগুণন (Cross-multiplication) পদ্ধতি ব্যবহার করে $\\alpha^2$ এবং $\\alpha$ এর মান বের করে সমাধান করলে $(4a-c)^2 = (3b-2c)(2a-b)$ পাওয়া যায়।'
  },
  {
    id: 'alg-1-3',
    question: 'সমীকরণ $e^{\\sin x} - e^{-\\sin x} - 4 = 0$ এর বাস্তব সমাধানের সংখ্যা কত?',
    options: ['0', '1', '2', 'অসীম'],
    correctAnswer: 0,
    explanation: 'ধরি $e^{\\sin x} = t$। তাহলে $t - 1/t - 4 = 0 \\implies t^2 - 4t - 1 = 0 \\implies t = 2 \\pm \\sqrt{5}$। যেহেতু $t > 0$, $t = 2 + \\sqrt{5}$। কিন্তু $e^{\\sin x} = 2 + \\sqrt{5} \\implies \\sin x = \\ln(2 + \\sqrt{5}) > 1$, যা অসম্ভব। তাই কোনো সমাধান নেই।'
  },
  {
    id: 'alg-1-4',
    question: 'যদি $x^2 - 2x \\sec \\theta + 1 = 0$ এর মূলদ্বয় $\\alpha_1, \\beta_1$ এবং $x^2 + 2x \\tan \\theta - 1 = 0$ এর মূলদ্বয় $\\alpha_2, \\beta_2$ হয়, তবে $\\alpha_1, \\beta_1$ এবং $\\alpha_2, \\beta_2$ এর মধ্যে সম্পর্ক কী?',
    options: ['$\\alpha_1 + \\beta_1 = \\alpha_2 + \\beta_2$', '$\\alpha_1 \\beta_1 = \\alpha_2 \\beta_2$', '$\\alpha_1, \\beta_1$ বাস্তব এবং $\\alpha_2, \\beta_2$ অবাস্তব', '$\\alpha_1, \\beta_1$ এবং $\\alpha_2, \\beta_2$ উভয়ই বাস্তব'],
    correctAnswer: 3,
    explanation: 'প্রথম সমীকরণের নিরূপক $4\\sec^2\\theta - 4 = 4\\tan^2\\theta \\ge 0$। দ্বিতীয় সমীকরণের নিরূপক $4\\tan^2\\theta + 4 = 4\\sec^2\\theta > 0$। সুতরাং উভয় সমীকরণের মূলদ্বয় বাস্তব।'
  },
  {
    id: 'alg-1-5',
    question: 'যদি সমীকরণ $x^2 + ax + b = 0$ এর মূলদ্বয় $x^2 + cx + d = 0$ এর মূলদ্বয়ের ঘন (cube) হয়, তবে নিচের কোনটি সঠিক?',
    options: ['$a = c^3 - 3cd$', '$a = c^3 + 3cd$', '$b = d^3$', 'উভয় A এবং C'],
    correctAnswer: 3,
    explanation: 'ধরি দ্বিতীয় সমীকরণের মূল $\\alpha, \\beta$। তাহলে $\\alpha+\\beta = -c, \\alpha\\beta = d$। প্রথম সমীকরণের মূল $\\alpha^3, \\beta^3$। $\\alpha^3+\\beta^3 = (\\alpha+\\beta)^3 - 3\\alpha\\beta(\\alpha+\\beta) = -c^3 + 3cd = -a \\implies a = c^3 - 3cd$। এবং $\\alpha^3\\beta^3 = d^3 = b$।'
  },
  ...quadExtraMCQs
];

export const apGpMCQs: MCQ[] = [
  {
    id: 'alg-2-1',
    question: 'যদি একটি সমান্তর প্রগতির (A.P.) $p$-তম, $q$-তম এবং $r$-তম পদ যথাক্রমে $a, b, c$ হয়, তবে $a(q-r) + b(r-p) + c(p-q)$ এর মান কত?',
    options: ['0', '1', 'p+q+r', 'abc'],
    correctAnswer: 0,
    explanation: 'ধরি প্রথম পদ $A$ এবং সাধারণ অন্তর $D$। $a = A + (p-1)D$, $b = A + (q-1)D$, $c = A + (r-1)D$। মানগুলো বসালে সব পদ কেটে গিয়ে 0 হয়।'
  },
  {
    id: 'alg-2-2',
    question: 'যদি $x, y, z$ গুণোত্তর প্রগতিতে (G.P.) থাকে এবং $a^x = b^y = c^z$ হয়, তবে $\\log_b a$ এবং $\\log_c b$ এর মধ্যে সম্পর্ক কী?',
    options: ['$\\log_b a = \\log_c b$', '$\\log_b a = 2\\log_c b$', '$\\log_b a = \\frac{1}{2}\\log_c b$', '$\\log_b a = (\\log_c b)^2$'],
    correctAnswer: 0,
    explanation: 'ধরি $a^x = b^y = c^z = k$। তাহলে $x = \\log_a k, y = \\log_b k, z = \\log_c k$। যেহেতু $x, y, z$ G.P.-তে আছে, $y^2 = xz \\implies (\\log_b k)^2 = (\\log_a k)(\\log_c k) \\implies \\frac{\\log k}{\\log b} \\cdot \\frac{\\log k}{\\log b} = \\frac{\\log k}{\\log a} \\cdot \\frac{\\log k}{\\log c} \\implies \\frac{\\log a}{\\log b} = \\frac{\\log b}{\\log c} \\implies \\log_b a = \\log_c b$.'
  },
  {
    id: 'alg-2-3',
    question: 'অসীম গুণোত্তর ধারার সমষ্টি $S = 1 + \\frac{2}{3} + \\frac{6}{3^2} + \\frac{10}{3^3} + \\frac{14}{3^4} + \\dots$ এর মান কত?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 0,
    explanation: 'এটি একটি Arithmetico-Geometric Progression (A.G.P.)। $S = 1 + \\frac{2}{3} + \\frac{6}{3^2} + \\dots$। $\\frac{1}{3}S = \\frac{1}{3} + \\frac{2}{3^2} + \\dots$। বিয়োগ করলে $\\frac{2}{3}S = 1 + \\frac{1}{3} + \\frac{4}{3^2} + \\frac{4}{3^3} + \\dots = \\frac{4}{3} + \\frac{4/9}{1 - 1/3} = \\frac{4}{3} + \\frac{2}{3} = 2 \\implies S = 3$.'
  },
  {
    id: 'alg-2-4',
    question: 'যদি $a, b, c$ সমান্তর প্রগতিতে (A.P.) থাকে এবং $a^2, b^2, c^2$ গুণোত্তর প্রগতিতে (G.P.) থাকে, তবে $a:b:c$ কত হতে পারে? ($a<b<c$)',
    options: ['$1:2:3$', '$1:\\sqrt{2}:2$', '$1-\\sqrt{2} : 1 : 1+\\sqrt{2}$', '$1 : \\sqrt{3} : 3$'],
    correctAnswer: 2,
    explanation: '$2b = a+c$ এবং $b^4 = a^2c^2 \\implies b^2 = \\pm ac$। যদি $b^2 = ac$ হয়, তবে $a=b=c$। যদি $b^2 = -ac$ হয়, তবে $(a+c)^2/4 = -ac \\implies a^2 + 6ac + c^2 = 0 \\implies (a/c)^2 + 6(a/c) + 1 = 0 \\implies a/c = -3 \\pm 2\\sqrt{2}$। অনুপাতটি $1-\\sqrt{2} : 1 : 1+\\sqrt{2}$ এর সাথে মিলে যায়।'
  },
  {
    id: 'alg-2-5',
    question: '$\\sum_{r=1}^n \\frac{1}{\\sqrt{r} + \\sqrt{r+1}}$ এর মান কত?',
    options: ['$\\sqrt{n+1} - 1$', '$\\sqrt{n} - 1$', '$\\sqrt{n+1} + 1$', '$\\sqrt{n}$'],
    correctAnswer: 0,
    explanation: 'প্রতিটি পদকে করণী নিরসন (Rationalize) করলে: $\\frac{\\sqrt{r+1} - \\sqrt{r}}{(r+1) - r} = \\sqrt{r+1} - \\sqrt{r}$। যোগ করলে: $(\\sqrt{2}-\\sqrt{1}) + (\\sqrt{3}-\\sqrt{2}) + \\dots + (\\sqrt{n+1}-\\sqrt{n}) = \\sqrt{n+1} - 1$।'
  }
];

export const logarithmsMCQs: MCQ[] = [
  {
    id: 'alg-3-1',
    question: '$\\log_2 7$ একটি কী ধরনের সংখ্যা?',
    options: ['পূর্ণসংখ্যা', 'মূলদ সংখ্যা', 'অমূলদ সংখ্যা', 'মৌলিক সংখ্যা'],
    correctAnswer: 2,
    explanation: 'ধরি $\\log_2 7 = \\frac{p}{q}$ (যেখানে $p, q$ পূর্ণসংখ্যা)। তাহলে $2^{p/q} = 7 \\implies 2^p = 7^q$। এটি অসম্ভব কারণ বামপক্ষ জোড় এবং ডানপক্ষ বিজোড়। তাই এটি অমূলদ।'
  },
  {
    id: 'alg-3-2',
    question: 'যদি $\\log_x y + \\log_y x = 2$ হয়, তবে $x$ এবং $y$ এর মধ্যে সম্পর্ক কী?',
    options: ['$x = y$', '$x = 1/y$', '$x = y^2$', '$x^2 = y$'],
    correctAnswer: 0,
    explanation: 'ধরি $\\log_x y = t$। তাহলে $t + 1/t = 2 \\implies t^2 - 2t + 1 = 0 \\implies (t-1)^2 = 0 \\implies t = 1$। সুতরাং $\\log_x y = 1 \\implies y = x^1 \\implies x = y$।'
  },
  {
    id: 'alg-3-3',
    question: '$\\frac{1}{\\log_2 n} + \\frac{1}{\\log_3 n} + \\dots + \\frac{1}{\\log_{43} n}$ এর মান কত?',
    options: ['$\\log_n 43!$', '$\\log_n 43$', '$\\log_{43!} n$', '$\\frac{1}{\\log_{43!} n}$'],
    correctAnswer: 0,
    explanation: '$\\frac{1}{\\log_a b} = \\log_b a$ সূত্র ব্যবহার করে: $\\log_n 2 + \\log_n 3 + \\dots + \\log_n 43 = \\log_n (2 \\cdot 3 \\dots 43) = \\log_n (43!)$।'
  },
  {
    id: 'alg-3-4',
    question: 'সমীকরণ $x^{\\log_x (x+3)} = 7$ এর সমাধান কত?',
    options: ['4', '7', '10', 'কোনো সমাধান নেই'],
    correctAnswer: 0,
    explanation: '$a^{\\log_a b} = b$ সূত্র অনুযায়ী, $x+3 = 7 \\implies x = 4$। এখানে $x > 0$ এবং $x \\neq 1$, যা $x=4$ এর জন্য সত্য।'
  },
  {
    id: 'alg-3-5',
    question: 'যদি $a^2 + b^2 = 7ab$ হয়, তবে $\\log(\\frac{a+b}{3})$ এর মান কত?',
    options: ['$\\frac{1}{2}(\\log a + \\log b)$', '$\\log a + \\log b$', '$\\frac{1}{2}\\log(ab)$', 'উভয় A এবং C'],
    correctAnswer: 3,
    explanation: '$a^2 + b^2 + 2ab = 9ab \\implies (a+b)^2 = 9ab \\implies \\left(\\frac{a+b}{3}\\right)^2 = ab$। উভয় পাশে $\\log$ নিলে: $2\\log\\left(\\frac{a+b}{3}\\right) = \\log(ab) = \\log a + \\log b \\implies \\log\\left(\\frac{a+b}{3}\\right) = \\frac{1}{2}(\\log a + \\log b)$।'
  }
];

export const complexNumbersMCQs: MCQ[] = [
  {
    id: 'alg-4-1',
    question: 'যদি $\\omega$ এককের একটি অবাস্তব ঘনমূল (cube root of unity) হয়, তবে $(1 - \\omega + \\omega^2)^5 + (1 + \\omega - \\omega^2)^5$ এর মান কত?',
    options: ['32', '-32', '64', '128'],
    correctAnswer: 0,
    explanation: '$1 + \\omega + \\omega^2 = 0$। সুতরাং $1 + \\omega^2 = -\\omega$ এবং $1 + \\omega = -\\omega^2$। রাশিটি হলো $(-\\omega - \\omega)^5 + (-\\omega^2 - \\omega^2)^5 = (-2\\omega)^5 + (-2\\omega^2)^5 = -32\\omega^5 - 32\\omega^{10} = -32(\\omega^2 + \\omega) = -32(-1) = 32$।'
  },
  {
    id: 'alg-4-2',
    question: 'জটিল তলে $|z - 2i| + |z + 2i| = 6$ সমীকরণটি কী নির্দেশ করে?',
    options: ['বৃত্ত (Circle)', 'উপবৃত্ত (Ellipse)', 'অধিবৃত্ত (Parabola)', 'পরাবৃত্ত (Hyperbola)'],
    correctAnswer: 1,
    explanation: '$|z - z_1| + |z - z_2| = 2a$ একটি উপবৃত্ত নির্দেশ করে যদি $|z_1 - z_2| < 2a$ হয়। এখানে $z_1 = 2i, z_2 = -2i$, দূরত্ব $= 4$। $2a = 6$। যেহেতু $4 < 6$, এটি একটি উপবৃত্ত।'
  },
  {
    id: 'alg-4-3',
    question: 'যদি $z = \\frac{\\sqrt{3} + i}{2}$ হয়, তবে $z^{69}$ এর মান কত?',
    options: ['1', '-1', 'i', '-i'],
    correctAnswer: 3,
    explanation: '$z = \\cos(\\pi/6) + i\\sin(\\pi/6) = e^{i\\pi/6}$। $z^{69} = e^{i(69\\pi/6)} = e^{i(23\\pi/2)} = e^{i(11\\pi + \\pi/2)} = e^{i(11\\pi)} \\cdot e^{i\\pi/2} = (-1)(i) = -i$।'
  },
  {
    id: 'alg-4-4',
    question: 'সমীকরণ $|z|^2 + 2\\bar{z} = 0$ এর অশূন্য (non-zero) সমাধানের সংখ্যা কত?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 0,
    explanation: 'ধরি $z = x + iy$। $x^2 + y^2 + 2(x - iy) = 0 \\implies x^2 + y^2 + 2x = 0$ এবং $-2y = 0 \\implies y = 0$। $y=0$ বসালে $x^2 + 2x = 0 \\implies x=0$ বা $x=-2$। অশূন্য সমাধান হলো $z = -2$। সুতরাং ১টি।'
  },
  {
    id: 'alg-4-5',
    question: 'যদি $|z_1| = |z_2| = 1$ এবং $z_1 + z_2 = \\sqrt{3}$ হয়, তবে $\\arg(z_1) - \\arg(z_2)$ এর মান কত হতে পারে?',
    options: ['$\\pi/6$', '$\\pi/3$', '$\\pi/2$', '$\\pi/4$'],
    correctAnswer: 1,
    explanation: '$|z_1 + z_2|^2 = |z_1|^2 + |z_2|^2 + 2|z_1||z_2|\\cos(\\theta_1 - \\theta_2)$। $3 = 1 + 1 + 2(1)(1)\\cos(\\Delta\\theta) \\implies 2\\cos(\\Delta\\theta) = 1 \\implies \\cos(\\Delta\\theta) = 1/2 \\implies \\Delta\\theta = \\pi/3$।'
  },
  ...complexExtraMCQs
];

export const permutationsMCQs: MCQ[] = [
  {
    id: 'alg-5-1',
    question: 'MATHEMATICS শব্দটির বর্ণগুলো কত প্রকারে সাজানো যায় যাতে স্বরবর্ণগুলো (vowels) সর্বদা একত্রে থাকে?',
    options: ['$120960$', '$4989600$', '$100800$', '$1209600$'],
    correctAnswer: 3,
    explanation: 'স্বরবর্ণগুলো হলো A, E, A, I (৪টি)। এদেরকে একটি ব্লক ধরলে মোট বর্ণ (M, T, H, M, T, C, S, ব্লক) = ৮টি। এদের সাজানোর উপায় $\\frac{8!}{2!2!} = 10080$ (M এবং T ২টি করে)। স্বরবর্ণগুলো নিজেদের মধ্যে সাজতে পারে $\\frac{4!}{2!} = 12$ প্রকারে (A ২টি)। মোট উপায় = $10080 \\times 12 = 120960$।'
  },
  {
    id: 'alg-5-2',
    question: 'একটি সমতলে ১০টি বিন্দু আছে যার মধ্যে ৪টি সমরেখ (collinear)। এই বিন্দুগুলো যোগ করে কতগুলো ত্রিভুজ গঠন করা সম্ভব?',
    options: ['120', '116', '100', '110'],
    correctAnswer: 1,
    explanation: '১০টি বিন্দু থেকে ৩টি নিয়ে গঠিত মোট ত্রিভুজ = $^{10}C_3 = 120$। কিন্তু ৪টি সমরেখ বিন্দু দিয়ে কোনো ত্রিভুজ গঠিত হয় না, যা বাদ দিতে হবে = $^4C_3 = 4$। সুতরাং, মোট ত্রিভুজ = $120 - 4 = 116$।'
  },
  {
    id: 'alg-5-3',
    question: '$x + y + z = 15$ সমীকরণটির কতগুলো অঋণাত্মক পূর্ণসংখ্যক (non-negative integer) সমাধান আছে?',
    options: ['136', '120', '153', '105'],
    correctAnswer: 0,
    explanation: 'সূত্র: $^{n+r-1}C_{r-1}$। এখানে $n=15, r=3$। সমাধান সংখ্যা = $^{15+3-1}C_{3-1} = ^{17}C_2 = \\frac{17 \\times 16}{2} = 136$।'
  },
  {
    id: 'alg-5-4',
    question: '৬ জন পুরুষ এবং ৪ জন মহিলার মধ্য থেকে ৫ জনের একটি কমিটি গঠন করতে হবে যেখানে অন্তত ২ জন মহিলা থাকবেন। কত প্রকারে এটি করা সম্ভব?',
    options: ['186', '181', '196', '246'],
    correctAnswer: 0,
    explanation: 'সম্ভাব্য ক্ষেত্রগুলো: (২ মহিলা, ৩ পুরুষ) + (৩ মহিলা, ২ পুরুষ) + (৪ মহিলা, ১ পুরুষ)। \n= $(^4C_2 \\times ^6C_3) + (^4C_3 \\times ^6C_2) + (^4C_4 \\times ^6C_1) = (6 \\times 20) + (4 \\times 15) + (1 \\times 6) = 120 + 60 + 6 = 186$।'
  },
  {
    id: 'alg-5-5',
    question: '১ থেকে ১০০০ এর মধ্যে কতগুলো সংখ্যা আছে যা ২, ৩ বা ৫ দ্বারা বিভাজ্য নয়?',
    options: ['266', '333', '400', '267'],
    correctAnswer: 0,
    explanation: "Euler's Totient Function বা Principle of Inclusion-Exclusion ব্যবহার করে: $1000 \\times (1 - 1/2) \\times (1 - 1/3) \\times (1 - 1/5) = 1000 \\times (1/2) \\times (2/3) \\times (4/5) = 1000 \\times (8/30) = 800/3 = 266.66$। পূর্ণসংখ্যা হবে ২৬৬।"
  }
];

export const binomialMCQs: MCQ[] = [
  {
    id: 'alg-6-1',
    question: '$(x + \\frac{1}{x})^{10}$ এর বিস্তৃতিতে $x$ বর্জিত (independent of $x$) পদটি কত?',
    options: ['210', '252', '120', '45'],
    correctAnswer: 1,
    explanation: 'সাধারণ পদ $T_{r+1} = ^{10}C_r (x)^{10-r} (x^{-1})^r = ^{10}C_r x^{10-2r}$। $x$ বর্জিত পদের জন্য $10-2r = 0 \\implies r=5$। পদটি হলো $^{10}C_5 = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 252$।'
  },
  {
    id: 'alg-6-2',
    question: '$^nC_0 + ^nC_1 + ^nC_2 + \\dots + ^nC_n$ এর মান কত?',
    options: ['$2^n$', '$2^{n-1}$', '$n^2$', '$2^n - 1$'],
    correctAnswer: 0,
    explanation: '$(1+x)^n = ^nC_0 + ^nC_1 x + ^nC_2 x^2 + \\dots + ^nC_n x^n$। $x=1$ বসালে $(1+1)^n = 2^n = ^nC_0 + ^nC_1 + \\dots + ^nC_n$।'
  },
  {
    id: 'alg-6-3',
    question: '$(1 - x + x^2)^n$ এর বিস্তৃতিতে সহগগুলোর যোগফল (sum of coefficients) কত?',
    options: ['0', '1', '$2^n$', '$3^n$'],
    correctAnswer: 1,
    explanation: 'সহগগুলোর যোগফল বের করতে চলকগুলোর মান ১ বসাতে হয়। $x=1$ বসালে $(1 - 1 + 1^2)^n = 1^n = 1$।'
  },
  {
    id: 'alg-6-4',
    question: '$(2x - 3y)^{12}$ এর বিস্তৃতিতে মধ্যপদ (middle term) কোনটি?',
    options: ['$T_6$', '$T_7$', '$T_8$', '$T_6$ এবং $T_7$'],
    correctAnswer: 1,
    explanation: 'এখানে $n=12$ (জোড়)। সুতরাং মধ্যপদ একটি এবং তা হলো $(n/2 + 1)$-তম পদ = $(12/2 + 1) = 7$-তম পদ ($T_7$)।'
  },
  {
    id: 'alg-6-5',
    question: '$11^{10} - 1$ সংখ্যাটি নিচের কোনটি দ্বারা বিভাজ্য?',
    options: ['10', '100', '1000', 'উভয় A এবং B'],
    correctAnswer: 3,
    explanation: '$11^{10} = (10+1)^{10} = 1 + ^{10}C_1(10) + ^{10}C_2(10^2) + \\dots$। সুতরাং $11^{10} - 1 = 100 + 4500 + \\dots$ যা 100 দ্বারা বিভাজ্য। 100 দ্বারা বিভাজ্য মানে 10 দ্বারাও বিভাজ্য।'
  },
  ...binomialExtraMCQs
];

export const matricesMCQs: MCQ[] = [
  {
    id: 'alg-7-1',
    question: 'যদি $A$ একটি $3 \\times 3$ ম্যাট্রিক্স হয় এবং $|A| = 4$ হয়, তবে $|2A|$ এর মান কত?',
    options: ['8', '16', '32', '64'],
    correctAnswer: 2,
    explanation: 'সূত্র: $|kA| = k^n |A|$, যেখানে $n$ হলো ম্যাট্রিক্সের ক্রম (order)। এখানে $n=3, k=2$। সুতরাং $|2A| = 2^3 |A| = 8 \\times 4 = 32$।'
  },
  {
    id: 'alg-7-2',
    question: 'যদি $A$ এবং $B$ দুটি প্রতিসম (symmetric) ম্যাট্রিক্স হয়, তবে $AB - BA$ কী ধরনের ম্যাট্রিক্স?',
    options: ['প্রতিসম (Symmetric)', 'বিপ্রতিসম (Skew-symmetric)', 'কর্ণ (Diagonal)', 'অভেদক (Identity)'],
    correctAnswer: 1,
    explanation: '$(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T$। যেহেতু $A, B$ প্রতিসম, $A^T=A, B^T=B$। সুতরাং $= BA - AB = -(AB - BA)$। তাই এটি বিপ্রতিসম।'
  },
  {
    id: 'alg-7-3',
    question: 'যদি $A = \\begin{pmatrix} \\alpha & 2 \\\\ 2 & \\alpha \\end{pmatrix}$ এবং $|A^3| = 125$ হয়, তবে $\\alpha$ এর মান কত?',
    options: ['$\\pm 1$', '$\\pm 2$', '$\\pm 3$', '$\\pm 4$'],
    correctAnswer: 2,
    explanation: '$|A^3| = |A|^3 = 125 \\implies |A| = 5$। $|A| = \\alpha^2 - 4 = 5 \\implies \\alpha^2 = 9 \\implies \\alpha = \\pm 3$।'
  },
  {
    id: 'alg-7-4',
    question: 'যদি $\\omega$ এককের অবাস্তব ঘনমূল হয়, তবে $\\begin{vmatrix} 1 & \\omega & \\omega^2 \\\\ \\omega & \\omega^2 & 1 \\\\ \\omega^2 & 1 & \\omega \\end{vmatrix}$ এর মান কত?',
    options: ['0', '1', '$\\omega$', '$\\omega^2$'],
    correctAnswer: 0,
    explanation: '$C_1 \\rightarrow C_1 + C_2 + C_3$ অপারেশন করলে প্রথম কলামের প্রতিটি উপাদান $1 + \\omega + \\omega^2$ হবে। যেহেতু $1 + \\omega + \\omega^2 = 0$, প্রথম কলামটি 0 হয়ে যাবে, ফলে নির্ণায়কের মান 0 হবে।'
  },
  {
    id: 'alg-7-5',
    question: 'যদি $A$ একটি লম্ব ম্যাট্রিক্স (Orthogonal Matrix) হয়, তবে $A^{-1}$ এর মান কত?',
    options: ['$A$', '$A^T$', '$I$', '$-A$'],
    correctAnswer: 1,
    explanation: 'লম্ব ম্যাট্রিক্সের সংজ্ঞা অনুযায়ী, $A A^T = I$। উভয় পাশে $A^{-1}$ দিয়ে গুণ করলে $A^T = A^{-1}$।'
  },
  ...matricesExtraMCQs
];

export const setsMCQs: MCQ[] = [
  {
    id: 'alg-8-1',
    question: 'যদি $n(A) = 3$ এবং $n(B) = 4$ হয়, তবে $A$ থেকে $B$ তে কতগুলো এক-এক (one-one) চিত্রণ (function) গঠন করা সম্ভব?',
    options: ['12', '24', '64', '81'],
    correctAnswer: 1,
    explanation: 'এক-এক চিত্রণের সংখ্যা = $^4P_3 = \\frac{4!}{(4-3)!} = 24$।'
  },
  {
    id: 'alg-8-2',
    question: 'একটি সেটে $n$ সংখ্যক উপাদান থাকলে তার উপসেটের (subset) সংখ্যা কত?',
    options: ['$n^2$', '$2n$', '$2^n$', '$n!$'],
    correctAnswer: 2,
    explanation: 'প্রতিটি উপাদানের জন্য ২টি বিকল্প থাকে (উপসেটে থাকবে বা থাকবে না)। সুতরাং মোট উপসেট সংখ্যা $2 \\times 2 \\times \\dots n$ বার = $2^n$।'
  },
  {
    id: 'alg-8-3',
    question: 'যদি $R = \\{(x, y) : x, y \\in \\mathbb{Z}, x^2 + y^2 \\le 4\\}$ একটি সম্বন্ধ (relation) হয়, তবে $R$ এর ক্ষেত্র (Domain) কত?',
    options: ['$\\{0, 1, 2\\}$', '$\\{-2, -1, 0, 1, 2\\}$', '$\\{-2, 2\\}$', '$\\{-1, 0, 1\\}$'],
    correctAnswer: 1,
    explanation: '$x^2 \\le 4 - y^2$। $y=0$ হলে $x^2 \\le 4 \\implies x \\in \\{-2, -1, 0, 1, 2\\}$। সুতরাং ডোমেইন হলো $\\{-2, -1, 0, 1, 2\\}$।'
  },
  {
    id: 'alg-8-4',
    question: 'যদি $f(x) = \\frac{x-1}{x+1}$ হয়, তবে $f(f(x))$ এর মান কত?',
    options: ['$x$', '$-1/x$', '$-x$', '$1/x$'],
    correctAnswer: 1,
    explanation: '$f(f(x)) = \\frac{f(x)-1}{f(x)+1} = \\frac{\\frac{x-1}{x+1} - 1}{\\frac{x-1}{x+1} + 1} = \\frac{x-1-x-1}{x-1+x+1} = \\frac{-2}{2x} = -\\frac{1}{x}$।'
  },
  {
    id: 'alg-8-5',
    question: 'কোনো সেটে একটি সম্বন্ধ (relation) সমতুল্যতা সম্বন্ধ (Equivalence Relation) হবে যদি তা হয়:',
    options: ['স্বসম (Reflexive) ও প্রতিসম (Symmetric)', 'প্রতিসম ও সংক্রমণ (Transitive)', 'স্বসম, প্রতিসম ও সংক্রমণ', 'স্বসম ও সংক্রমণ'],
    correctAnswer: 2,
    explanation: 'সমতুল্যতা সম্বন্ধের সংজ্ঞা অনুযায়ী, সম্বন্ধটিকে অবশ্যই স্বসম (Reflexive), প্রতিসম (Symmetric) এবং সংক্রমণ (Transitive) হতে হবে।'
  },
  ...setsExtraMCQs
];
