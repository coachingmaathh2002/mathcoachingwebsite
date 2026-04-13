import { MCQ } from '../components/WBJEEAssignments';

export const matricesExtraMCQs: MCQ[] = [
  {
    id: 'alg-7-6',
    question: 'যদি $A$ একটি $3 \\times 3$ ক্রমের বর্গ ম্যাট্রিক্স হয় এবং $|A| = 5$ হয়, তবে $|adj(A)|$ এর মান কত?',
    options: ['5', '25', '125', '625'],
    correctAnswer: 1,
    explanation: "আমরা জানি, $n \\times n$ ক্রমের ম্যাট্রিক্সের ক্ষেত্রে $|adj(A)| = |A|^{n-1}$। এখানে $n=3$, তাই $|adj(A)| = 5^{3-1} = 5^2 = 25$।"
  },
  {
    id: 'alg-7-7',
    question: 'যদি $A$ একটি $3 \\times 3$ ম্যাট্রিক্স হয় এবং $|A| = 2$ হয়, তবে $|adj(adj(A))|$ এর মান কত?',
    options: ['4', '8', '16', '32'],
    correctAnswer: 2,
    explanation: "সূত্র অনুযায়ী, $|adj(adj(A))| = |A|^{(n-1)^2}$। এখানে $n=3$, তাই $|A|^{(3-1)^2} = |A|^4 = 2^4 = 16$।"
  },
  {
    id: 'alg-7-8',
    question: 'যদি $A$ এবং $B$ দুটি একই ক্রমের বিপরীতযোগ্য (invertible) ম্যাট্রিক্স হয়, তবে $(AB)^{-1}$ এর মান কোনটি?',
    options: ['$A^{-1}B^{-1}$', '$B^{-1}A^{-1}$', '$AB$', '$BA$'],
    correctAnswer: 1,
    explanation: "ম্যাট্রিক্সের গুণের বিপরীতকরণ ধর্ম (Reversal law of inverse) অনুযায়ী, $(AB)^{-1} = B^{-1}A^{-1}$।"
  },
  {
    id: 'alg-7-9',
    question: 'একটি বিজোড় ক্রমের (odd order) বিপ্রতিসম (skew-symmetric) ম্যাট্রিক্সের নির্ণায়কের মান কত?',
    options: ['1', '-1', '0', 'নির্ণয় করা সম্ভব নয়'],
    correctAnswer: 2,
    explanation: "বিজোড় ক্রমের বিপ্রতিসম ম্যাট্রিক্সের নির্ণায়কের মান সর্বদা 0 হয়। কারণ $|A^T| = |-A| \\implies |A| = (-1)^n|A|$। $n$ বিজোড় হলে $|A| = -|A| \\implies 2|A| = 0 \\implies |A| = 0$।"
  },
  {
    id: 'alg-7-10',
    question: 'যদি $A^2 = A$ হয়, তবে $(I+A)^3 - 7A$ এর মান কত?',
    options: ['$A$', '$I-A$', '$I$', '$3A$'],
    correctAnswer: 2,
    explanation: "$(I+A)^3 = I^3 + 3I^2A + 3IA^2 + A^3 = I + 3A + 3A + A$ (যেহেতু $A^2=A, A^3=A$)। সুতরাং $(I+A)^3 - 7A = I + 7A - 7A = I$।"
  },
  {
    id: 'alg-7-11',
    question: 'যদি $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ হয়, তবে $A^2 - 5A$ এর মান কত?',
    options: ['$2I$', '$3I$', '$4I$', '$5I$'],
    correctAnswer: 0,
    explanation: "Cayley-Hamilton উপপাদ্য অনুযায়ী, $A^2 - Tr(A)A + |A|I = 0$। এখানে $Tr(A) = 1+4 = 5$ এবং $|A| = 4 - 6 = -2$। সুতরাং $A^2 - 5A - 2I = 0 \\implies A^2 - 5A = 2I$।"
  },
  {
    id: 'alg-7-12',
    question: 'সমীকরণ জোট $x+y+z=1$, $2x+3y+2z=2$, $ax+ay+2az=4$ এর অসংখ্য সমাধান (infinite solutions) থাকলে $a$ এর মান কত?',
    options: ['0', '1', '2', 'অস্তিত্ব নেই'],
    correctAnswer: 3,
    explanation: "অসংখ্য সমাধানের জন্য $\\Delta = 0$ হতে হবে। $\\Delta = \\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 2 \\\\ a & a & 2a \\end{vmatrix} = a \\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 2 \\\\ 1 & 1 & 2 \\end{vmatrix} = a(1) = a$। যদি $a=0$ হয়, তবে তৃতীয় সমীকরণটি $0=4$ হয়ে যায়, যা অসম্ভব। তাই $a$ এর কোনো মান নেই।"
  },
  {
    id: 'alg-7-13',
    question: 'যদি $A$ একটি লম্ব ম্যাট্রিক্স (Orthogonal matrix) হয়, তবে $|A|$ এর মান কত হতে পারে?',
    options: ['0', '1', '-1', '$\\pm 1$'],
    correctAnswer: 3,
    explanation: "লম্ব ম্যাট্রিক্সের ক্ষেত্রে $AA^T = I$। নির্ণায়ক নিলে $|A||A^T| = |I| \\implies |A|^2 = 1 \\implies |A| = \\pm 1$।"
  },
  {
    id: 'alg-7-14',
    question: 'যদি $A$ এবং $B$ দুটি $n \\times n$ ম্যাট্রিক্স হয়, তবে $Tr(AB)$ এর মান নিচের কোনটির সমান?',
    options: ['$Tr(A)Tr(B)$', '$Tr(BA)$', '$Tr(A)+Tr(B)$', '$Tr(A-B)$'],
    correctAnswer: 1,
    explanation: "ম্যাট্রিক্সের ট্রেস (Trace) এর ধর্ম অনুযায়ী, $Tr(AB) = Tr(BA)$।"
  },
  {
    id: 'alg-7-15',
    question: 'যদি $A = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$ হয়, তবে $A^{100}$ এর মান কত?',
    options: ['$I$', '$-I$', '$A$', '$-A$'],
    correctAnswer: 0,
    explanation: "$A^2 = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} = -I$। সুতরাং $A^{100} = (A^2)^{50} = (-I)^{50} = I$।"
  },
  {
    id: 'alg-7-16',
    question: 'একটি $3 \\times 3$ নির্ণায়কের প্রতিটি উপাদান 0 অথবা 1 হলে, নির্ণায়কটির সর্বোচ্চ মান কত হতে পারে?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: "0 এবং 1 উপাদান বিশিষ্ট $3 \\times 3$ নির্ণায়কের সর্বোচ্চ মান 2 হয়। উদাহরণস্বরূপ, কর্ণ বরাবর 0 এবং বাকি সব 1 হলে মান 2 হয়।"
  },
  {
    id: 'alg-7-17',
    question: 'যদি $A$ একটি $3 \\times 3$ ম্যাট্রিক্স হয় এবং $A^T A = I$ হয়, তবে $A^{-1}$ এর মান কত?',
    options: ['$A$', '$A^T$', '$I$', '$-A$'],
    correctAnswer: 1,
    explanation: "$A^T A = I$ উভয় পাশে $A^{-1}$ দিয়ে গুণ করলে $A^T A A^{-1} = I A^{-1} \\implies A^T = A^{-1}$।"
  },
  {
    id: 'alg-7-18',
    question: 'যদি $\\Delta = \\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$ হয়, তবে $\\Delta$ এর মান কত?',
    options: ['$(a-b)(b-c)(c-a)$', '$(a+b)(b+c)(c+a)$', '$abc(a-b)(b-c)(c-a)$', '0'],
    correctAnswer: 0,
    explanation: "এটি একটি সুপরিচিত Vandermonde নির্ণায়ক। এর মান $(a-b)(b-c)(c-a)$।"
  },
  {
    id: 'alg-7-19',
    question: 'যদি $A = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ হয়, তবে $A^n$ এর মান কত?',
    options: ['$\\begin{pmatrix} \\cos^n\\theta & -\\sin^n\\theta \\\\ \\sin^n\\theta & \\cos^n\\theta \\end{pmatrix}$', '$\\begin{pmatrix} \\cos(n\\theta) & -\\sin(n\\theta) \\\\ \\sin(n\\theta) & \\cos(n\\theta) \\end{pmatrix}$', '$\\begin{pmatrix} n\\cos\\theta & -n\\sin\\theta \\\\ n\\sin\\theta & n\\cos\\theta \\end{pmatrix}$', '$I$'],
    correctAnswer: 1,
    explanation: "গাণিতিক আরোহ পদ্ধতি (Mathematical Induction) প্রয়োগ করে প্রমাণ করা যায় যে $A^n = \\begin{pmatrix} \\cos(n\\theta) & -\\sin(n\\theta) \\\\ \\sin(n\\theta) & \\cos(n\\theta) \\end{pmatrix}$।"
  },
  {
    id: 'alg-7-20',
    question: 'যদি $A$ একটি প্রতিসম (symmetric) ম্যাট্রিক্স হয়, তবে $A^n$ (যেখানে $n$ ধনাত্মক পূর্ণসংখ্যা) কী ধরনের ম্যাট্রিক্স হবে?',
    options: ['প্রতিসম', 'বিপ্রতিসম', 'কর্ণ', 'অভেদক'],
    correctAnswer: 0,
    explanation: "$(A^n)^T = (A^T)^n$। যেহেতু $A$ প্রতিসম, $A^T = A$। সুতরাং $(A^n)^T = A^n$, যা প্রমাণ করে $A^n$ একটি প্রতিসম ম্যাট্রিক্স।"
  },
  {
    id: 'alg-7-21',
    question: 'যদি $A$ এবং $B$ দুটি ম্যাট্রিক্স হয় যাতে $AB = A$ এবং $BA = B$ হয়, তবে $A^2 + B^2$ এর মান কত?',
    options: ['$A+B$', '$AB$', '$I$', '0'],
    correctAnswer: 0,
    explanation: "$A^2 = A(A) = A(AB) = (AA)B$ (ভুল)। সঠিক পদ্ধতি: $A^2 = A \\cdot A = A(BA) = (AB)A = AA$ (আবার ভুল)। $A^2 = A(A) = A(BA) = (AB)A = AA$? না। $A^2 = A \\cdot A = (AB)A = A(BA) = AB = A$। একইভাবে $B^2 = B \\cdot B = (BA)B = B(AB) = BA = B$। সুতরাং $A^2 + B^2 = A + B$।"
  },
  {
    id: 'alg-7-22',
    question: 'যদি $A = \\begin{pmatrix} i & 0 \\\\ 0 & i \\end{pmatrix}$ হয়, তবে $A^{4n}$ এর মান কত ($n \\in \\mathbb{N}$)?',
    options: ['$A$', '$-A$', '$I$', '$-I$'],
    correctAnswer: 2,
    explanation: "$A = iI$। $A^{4n} = (iI)^{4n} = i^{4n} I^{4n} = (i^4)^n I = 1^n I = I$।"
  },
  {
    id: 'alg-7-23',
    question: 'যদি $\\begin{vmatrix} x & 2 \\\\ 18 & x \\end{vmatrix} = \\begin{vmatrix} 6 & 2 \\\\ 18 & 6 \\end{vmatrix}$ হয়, তবে $x$ এর মান কত?',
    options: ['6', '-6', '$\\pm 6$', '0'],
    correctAnswer: 2,
    explanation: "$x^2 - 36 = 36 - 36 \\implies x^2 - 36 = 0 \\implies x^2 = 36 \\implies x = \\pm 6$।"
  },
  {
    id: 'alg-7-24',
    question: 'যদি $A$ একটি $3 \\times 3$ ম্যাট্রিক্স হয় এবং $A^3 = 0$ হয়, তবে $(I-A)^{-1}$ এর মান কত?',
    options: ['$I+A+A^2$', '$I-A+A^2$', '$I+A$', '$I-A$'],
    correctAnswer: 0,
    explanation: "$(I-A)(I+A+A^2) = I + A + A^2 - A - A^2 - A^3 = I - A^3 = I - 0 = I$। সুতরাং $(I-A)^{-1} = I+A+A^2$।"
  },
  {
    id: 'alg-7-25',
    question: 'যদি $A = \\begin{pmatrix} 1 & a \\\\ 0 & 1 \\end{pmatrix}$ হয়, তবে $A^n$ এর মান কত?',
    options: ['$\\begin{pmatrix} 1 & a^n \\\\ 0 & 1 \\end{pmatrix}$', '$\\begin{pmatrix} 1 & na \\\\ 0 & 1 \\end{pmatrix}$', '$\\begin{pmatrix} n & a \\\\ 0 & n \\end{pmatrix}$', '$\\begin{pmatrix} 1 & a \\\\ 0 & 1 \\end{pmatrix}$'],
    correctAnswer: 1,
    explanation: "$A^2 = \\begin{pmatrix} 1 & a \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & a \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 2a \\\\ 0 & 1 \\end{pmatrix}$। একইভাবে $A^n = \\begin{pmatrix} 1 & na \\\\ 0 & 1 \\end{pmatrix}$।"
  },
  {
    id: 'alg-7-26',
    question: 'যদি $A$ এবং $B$ দুটি $n \\times n$ ম্যাট্রিক্স হয়, তবে $|AB|$ এর মান কত?',
    options: ['$|A| + |B|$', '$|A| - |B|$', '$|A||B|$', '$|A|/|B|$'],
    correctAnswer: 2,
    explanation: "নির্ণায়কের গুণের ধর্ম অনুযায়ী, $|AB| = |A||B|$।"
  },
  {
    id: 'alg-7-27',
    question: 'যদি $A$ একটি বর্গ ম্যাট্রিক্স হয়, তবে $A - A^T$ সর্বদা কী ধরনের ম্যাট্রিক্স হবে?',
    options: ['প্রতিসম', 'বিপ্রতিসম', 'অভেদক', 'শূন্য'],
    correctAnswer: 1,
    explanation: "$(A - A^T)^T = A^T - (A^T)^T = A^T - A = -(A - A^T)$। সুতরাং এটি একটি বিপ্রতিসম (skew-symmetric) ম্যাট্রিক্স।"
  },
  {
    id: 'alg-7-28',
    question: 'যদি $\\begin{vmatrix} 1 & x & x^2 \\\\ 1 & y & y^2 \\\\ 1 & z & z^2 \\end{vmatrix} = 0$ হয় এবং $x, y, z$ ভিন্ন বাস্তব সংখ্যা হয়, তবে নিচের কোনটি সঠিক?',
    options: ['$x+y+z=0$', '$xyz=0$', 'এটি সম্ভব নয়', '$xy+yz+zx=0$'],
    correctAnswer: 2,
    explanation: "নির্ণায়কটির মান $(x-y)(y-z)(z-x)$। এটি 0 হতে হলে অন্তত দুটি চলক সমান হতে হবে। কিন্তু প্রশ্নে বলা আছে $x, y, z$ ভিন্ন। তাই এটি সম্ভব নয়।"
  },
  {
    id: 'alg-7-29',
    question: 'যদি $A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 4 \\end{pmatrix}$ হয়, তবে $|A^{-1}|$ এর মান কত?',
    options: ['24', '1/24', '9', '1/9'],
    correctAnswer: 1,
    explanation: "কর্ণ ম্যাট্রিক্সের নির্ণায়ক হলো কর্ণের উপাদানগুলোর গুণফল। $|A| = 2 \\times 3 \\times 4 = 24$। আমরা জানি $|A^{-1}| = 1/|A| = 1/24$।"
  },
  {
    id: 'alg-7-30',
    question: 'যদি $A$ একটি $3 \\times 3$ ম্যাট্রিক্স হয় এবং $|A| = 0$ হয়, তবে $A(adj(A))$ এর মান কত?',
    options: ['$I$', '$0$ (শূন্য ম্যাট্রিক্স)', '$A$', '$adj(A)$'],
    correctAnswer: 1,
    explanation: "আমরা জানি $A(adj(A)) = |A|I$। যেহেতু $|A| = 0$, তাই $A(adj(A)) = 0 \\cdot I = 0$ (শূন্য ম্যাট্রিক্স)।"
  }
];
