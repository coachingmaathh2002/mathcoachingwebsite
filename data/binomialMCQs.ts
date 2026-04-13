import { MCQ } from '../components/WBJEEAssignments';

export const binomialExtraMCQs: MCQ[] = [
  {
    id: 'alg-9-6',
    question: '$(x + a)^n$ এর বিস্তৃতিতে সাধারণ পদ (general term) $T_{r+1}$ কোনটি?',
    options: ['$^nC_r x^{n-r} a^r$', '$^nC_r x^r a^{n-r}$', '$^nP_r x^{n-r} a^r$', '$^nC_{r+1} x^{n-r-1} a^{r+1}$'],
    correctAnswer: 0,
    explanation: "দ্বিপদ উপপাদ্য অনুযায়ী, $(x+a)^n$ এর বিস্তৃতিতে $(r+1)$-তম পদ $T_{r+1} = ^nC_r x^{n-r} a^r$।"
  },
  {
    id: 'alg-9-7',
    question: 'যদি $n$ জোড় সংখ্যা হয়, তবে $(x+a)^n$ এর বিস্তৃতিতে মধ্যপদ (middle term) কোনটি?',
    options: ['$(\\frac{n}{2})$-তম পদ', '$(\\frac{n}{2}+1)$-তম পদ', '$(\\frac{n+1}{2})$-তম পদ', '$(\\frac{n-1}{2})$-তম পদ'],
    correctAnswer: 1,
    explanation: "$n$ জোড় হলে বিস্তৃতিতে মোট পদসংখ্যা $n+1$ (বিজোড়)। তাই একটিমাত্র মধ্যপদ থাকবে, যা হলো $(\\frac{n}{2}+1)$-তম পদ।"
  },
  {
    id: 'alg-9-8',
    question: '$(x - \\frac{1}{x})^{10}$ এর বিস্তৃতিতে $x$ বর্জিত পদ (term independent of x) কোনটি?',
    options: ['-252', '252', '-120', '120'],
    correctAnswer: 0,
    explanation: "$T_{r+1} = ^{10}C_r x^{10-r} (-1/x)^r = ^{10}C_r (-1)^r x^{10-2r}$। $x$ বর্জিত পদের জন্য $10-2r = 0 \\implies r=5$। পদটি হলো $^{10}C_5 (-1)^5 = -252$।"
  },
  {
    id: 'alg-9-9',
    question: '$(1+x)^n$ এর বিস্তৃতিতে সকল দ্বিপদ সহগের (binomial coefficients) যোগফল কত?',
    options: ['$2^n$', '$2^{n-1}$', '$n^2$', '$n!$'],
    correctAnswer: 0,
    explanation: "$(1+x)^n = C_0 + C_1 x + C_2 x^2 + \\dots + C_n x^n$। $x=1$ বসালে $C_0 + C_1 + \\dots + C_n = (1+1)^n = 2^n$।"
  },
  {
    id: 'alg-9-10',
    question: '$(1+x)^n$ এর বিস্তৃতিতে জোড় স্থানীয় সহগগুলির যোগফল কত?',
    options: ['$2^n$', '$2^{n-1}$', '$2^{n+1}$', '$n 2^{n-1}$'],
    correctAnswer: 1,
    explanation: "$C_0 + C_2 + C_4 + \\dots = 2^{n-1}$।"
  },
  {
    id: 'alg-9-11',
    question: '$^nC_r + ^nC_{r-1}$ এর মান নিচের কোনটির সমান?',
    options: ['$^nC_{r+1}$', '$^{n+1}C_r$', '$^{n+1}C_{r-1}$', '$^{n-1}C_r$'],
    correctAnswer: 1,
    explanation: "এটি প্যাসকেলের সূত্র (Pascal's rule): $^nC_r + ^nC_{r-1} = ^{n+1}C_r$।"
  },
  {
    id: 'alg-9-12',
    question: '$\\sum_{r=1}^n r \\cdot ^nC_r$ এর মান কত?',
    options: ['$n 2^n$', '$n 2^{n-1}$', '$(n+1) 2^n$', '$n(n+1) 2^{n-2}$'],
    correctAnswer: 1,
    explanation: "$r \\cdot ^nC_r = n \\cdot ^{n-1}C_{r-1}$। সুতরাং $\\sum n \\cdot ^{n-1}C_{r-1} = n \\sum ^{n-1}C_{r-1} = n 2^{n-1}$।"
  },
  {
    id: 'alg-9-13',
    question: '$(x+y+z)^n$ এর বিস্তৃতিতে মোট পদের সংখ্যা কত?',
    options: ['$n+1$', '$n^2$', '$^{(n+2)}C_2$', '$^{(n+1)}C_2$'],
    correctAnswer: 2,
    explanation: "$(x_1 + x_2 + \\dots + x_k)^n$ এর বিস্তৃতিতে পদের সংখ্যা $^{(n+k-1)}C_{k-1}$। এখানে $k=3$, তাই $^{(n+2)}C_2$।"
  },
  {
    id: 'alg-9-14',
    question: '$(1-x)^{-1}$ এর বিস্তৃতিতে $x^r$ এর সহগ কত? (যেখানে $|x| < 1$)',
    options: ['1', '-1', '$r$', '$(-1)^r$'],
    correctAnswer: 0,
    explanation: "$(1-x)^{-1} = 1 + x + x^2 + \\dots + x^r + \\dots$। সুতরাং $x^r$ এর সহগ 1।"
  },
  {
    id: 'alg-9-15',
    question: '$(1-x)^{-2}$ এর বিস্তৃতিতে $x^r$ এর সহগ কত? (যেখানে $|x| < 1$)',
    options: ['$r$', '$r+1$', '$r-1$', '$(-1)^r (r+1)$'],
    correctAnswer: 1,
    explanation: "$(1-x)^{-2} = 1 + 2x + 3x^2 + \\dots + (r+1)x^r + \\dots$। সুতরাং সহগ $r+1$।"
  },
  {
    id: 'alg-9-16',
    question: '$(1+x)^n$ এর বিস্তৃতিতে $C_0^2 + C_1^2 + C_2^2 + \\dots + C_n^2$ এর মান কত?',
    options: ['$2^{2n}$', '$^{2n}C_n$', '$^{2n}C_{n-1}$', '$2^n$'],
    correctAnswer: 1,
    explanation: "$(1+x)^n (1+1/x)^n$ এর বিস্তৃতিতে $x$ বর্জিত পদ নির্ণয় করে প্রমাণ করা যায় যে সহগগুলোর বর্গের যোগফল $^{2n}C_n$।"
  },
  {
    id: 'alg-9-17',
    question: 'যদি $(1+x)^n$ এর বিস্তৃতিতে $T_2, T_3, T_4$ সমান্তর প্রগতিতে (A.P.) থাকে, তবে $n$ এর মান কত?',
    options: ['5', '7', '9', '11'],
    correctAnswer: 1,
    explanation: "$T_2 = ^nC_1 x$, $T_3 = ^nC_2 x^2$, $T_4 = ^nC_3 x^3$। সহগগুলো A.P. তে থাকলে $2 ^nC_2 = ^nC_1 + ^nC_3 \\implies 2 \\frac{n(n-1)}{2} = n + \\frac{n(n-1)(n-2)}{6} \\implies n^2-n = n + \\frac{n(n^2-3n+2)}{6} \\implies n^2-4n+5=0$ (ভুল)। সঠিক সমীকরণ $n^2 - 9n + 14 = 0 \\implies n=2, 7$। $n=2$ হলে $T_4$ থাকে না, তাই $n=7$।"
  },
  {
    id: 'alg-9-18',
    question: '$(1+x)^{15}$ এর বিস্তৃতিতে বৃহত্তম দ্বিপদ সহগ (greatest binomial coefficient) কোনটি?',
    options: ['$^{15}C_6$', '$^{15}C_7$', '$^{15}C_8$', 'উভয় B এবং C'],
    correctAnswer: 3,
    explanation: "$n$ বিজোড় হলে বৃহত্তম সহগ হয় $^nC_{(n-1)/2}$ এবং $^nC_{(n+1)/2}$। এখানে $^{15}C_7$ এবং $^{15}C_8$ সমান এবং বৃহত্তম।"
  },
  {
    id: 'alg-9-19',
    question: '$11^{10} - 1$ সংখ্যাটি নিচের কোনটি দ্বারা বিভাজ্য?',
    options: ['10', '100', '1000', 'সবগুলোই'],
    correctAnswer: 1,
    explanation: "$11^{10} - 1 = (1+10)^{10} - 1 = (1 + ^{10}C_1 10 + ^{10}C_2 10^2 + \\dots) - 1 = 100 + 100(^{10}C_2 + \\dots)$। এটি 100 দ্বারা বিভাজ্য।"
  },
  {
    id: 'alg-9-20',
    question: '$\\sum_{r=0}^n \\frac{^nC_r}{r+1}$ এর মান কত?',
    options: ['$\\frac{2^n-1}{n+1}$', '$\\frac{2^{n+1}-1}{n+1}$', '$\\frac{2^{n+1}}{n+1}$', '$\\frac{2^n}{n+1}$'],
    correctAnswer: 1,
    explanation: "$\\frac{^nC_r}{r+1} = \\frac{1}{n+1} ^{n+1}C_{r+1}$। যোগফল $\\frac{1}{n+1} \\sum_{r=0}^n ^{n+1}C_{r+1} = \\frac{1}{n+1} (^{n+1}C_1 + \\dots + ^{n+1}C_{n+1}) = \\frac{2^{n+1}-1}{n+1}$।"
  },
  {
    id: 'alg-9-21',
    question: 'যদি $(1+ax)^n$ এর বিস্তৃতিতে প্রথম তিনটি পদ যথাক্রমে $1, 8x, 24x^2$ হয়, তবে $a$ এর মান কত?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: "$T_1 = 1$, $T_2 = na x = 8x \\implies na=8$। $T_3 = \\frac{n(n-1)}{2} a^2 x^2 = 24x^2 \\implies n(n-1)a^2 = 48$। $(na)^2 \\frac{n-1}{n} = 48 \\implies 64(1-1/n) = 48 \\implies 1-1/n = 3/4 \\implies 1/n = 1/4 \\implies n=4$। $na=8 \\implies 4a=8 \\implies a=2$।"
  },
  {
    id: 'alg-9-22',
    question: '$(x+a)^{100} + (x-a)^{100}$ এর বিস্তৃতিতে মোট পদের সংখ্যা কত?',
    options: ['50', '51', '100', '101'],
    correctAnswer: 1,
    explanation: "$(x+a)^n + (x-a)^n$ এর বিস্তৃতিতে পদের সংখ্যা $n/2 + 1$ (যদি $n$ জোড় হয়)। এখানে $100/2 + 1 = 51$।"
  },
  {
    id: 'alg-9-23',
    question: 'যদি $C_0, C_1, C_2 \\dots$ $(1+x)^n$ এর বিস্তৃতির সহগ হয়, তবে $C_0 - C_1 + C_2 - \\dots + (-1)^n C_n$ এর মান কত?',
    options: ['1', '-1', '0', '$2^n$'],
    correctAnswer: 2,
    explanation: "$(1-x)^n$ এর বিস্তৃতিতে $x=1$ বসালে $C_0 - C_1 + C_2 - \\dots = (1-1)^n = 0$।"
  },
  {
    id: 'alg-9-24',
    question: '$(1-x)^{-n}$ এর বিস্তৃতিতে $x^r$ এর সহগ কত? (যেখানে $n$ ধনাত্মক পূর্ণসংখ্যা এবং $|x|<1$)',
    options: ['$^nC_r$', '$^{n+r-1}C_r$', '$^{n+r}C_r$', '$^{n-1}C_r$'],
    correctAnswer: 1,
    explanation: "ঋণাত্মক সূচকের দ্বিপদ উপপাদ্য অনুযায়ী, $(1-x)^{-n}$ এর বিস্তৃতিতে $x^r$ এর সহগ $^{n+r-1}C_r$।"
  },
  {
    id: 'alg-9-25',
    question: '$\\frac{1}{(1-x)(1-2x)}$ এর বিস্তৃতিতে $x^n$ এর সহগ কত?',
    options: ['$2^{n+1}-1$', '$2^n-1$', '$2^{n+1}+1$', '$2^n+1$'],
    correctAnswer: 0,
    explanation: "আংশিক ভগ্নাংশে (Partial fraction) প্রকাশ করলে $\\frac{1}{(1-x)(1-2x)} = \\frac{2}{1-2x} - \\frac{1}{1-x} = 2(1+2x+(2x)^2+\\dots) - (1+x+x^2+\\dots)$। $x^n$ এর সহগ $2(2^n) - 1 = 2^{n+1} - 1$।"
  },
  {
    id: 'alg-9-26',
    question: '$(1+x)^{2n}$ এর বিস্তৃতিতে মধ্যপদের সহগ কত?',
    options: ['$^{2n}C_n$', '$^{2n}C_{n-1}$', '$^{2n}C_{n+1}$', '$\\frac{1\\cdot 3\\cdot 5\\dots (2n-1)}{n!} 2^n$'],
    correctAnswer: 3,
    explanation: "মধ্যপদটি হলো $T_{n+1}$ যার সহগ $^{2n}C_n = \\frac{(2n)!}{n!n!} = \\frac{1\\cdot 3\\cdot 5\\dots (2n-1)}{n!} 2^n$।"
  },
  {
    id: 'alg-9-27',
    question: 'যদি $(1+x)^n$ এর বিস্তৃতিতে $p$-তম, $(p+1)$-তম এবং $(p+2)$-তম পদের সহগ সমান্তর প্রগতিতে থাকে, তবে কোনটি সঠিক?',
    options: ['$n^2 - n(4p+1) + 4p^2 - 2 = 0$', '$n^2 - n(4p+1) + 4p^2 = 0$', '$n^2 - 4np + 4p^2 - 2 = 0$', 'কোনোটিই নয়'],
    correctAnswer: 0,
    explanation: "সহগগুলো হলো $^nC_{p-1}, ^nC_p, ^nC_{p+1}$। $2 ^nC_p = ^nC_{p-1} + ^nC_{p+1}$ সমাধান করলে $n^2 - n(4p+1) + 4p^2 - 2 = 0$ পাওয়া যায়।"
  },
  {
    id: 'alg-9-28',
    question: '$(x^2 + \\frac{1}{x})^{15}$ এর বিস্তৃতিতে $x^{15}$ এর সহগ কত?',
    options: ['$^{15}C_5$', '$^{15}C_6$', '$^{15}C_7$', '0'],
    correctAnswer: 0,
    explanation: "$T_{r+1} = ^{15}C_r (x^2)^{15-r} (1/x)^r = ^{15}C_r x^{30-3r}$। $30-3r = 15 \\implies 3r = 15 \\implies r=5$। সহগ $^{15}C_5$।"
  },
  {
    id: 'alg-9-29',
    question: '$\\sum_{r=0}^n (-1)^r ^nC_r (\\frac{1}{2^r})$ এর মান কত?',
    options: ['$1/2^n$', '$1/2^{n-1}$', '$1$', '0'],
    correctAnswer: 0,
    explanation: "এটি $(1 - 1/2)^n$ এর বিস্তৃতি। $(1 - 1/2)^n = (1/2)^n = 1/2^n$।"
  },
  {
    id: 'alg-9-30',
    question: 'যদি $(1+x+x^2)^n = a_0 + a_1 x + a_2 x^2 + \\dots + a_{2n} x^{2n}$ হয়, তবে $a_0 + a_1 + a_2 + \\dots + a_{2n}$ এর মান কত?',
    options: ['$2^n$', '$3^n$', '$4^n$', '0'],
    correctAnswer: 1,
    explanation: "$x=1$ বসালে $a_0 + a_1 + \\dots + a_{2n} = (1+1+1^2)^n = 3^n$।"
  }
];
