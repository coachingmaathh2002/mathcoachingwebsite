import { Test } from '../testData';

export const wbClass12Sem3Tests: Test[] = [
  // ==========================================
  // UNIT 1: সম্বন্ধ ও অপেক্ষক (Relations & Functions)
  // ==========================================
  {
    id: 'wb12_s3_rel_1',
    title: '১.১ সম্বন্ধ ও সম্বন্ধের প্রকারভেদ (Relations & Types of Relations)',
    topic: '১. সম্বন্ধ ও অপেক্ষক (Relations & Functions)',
    exam: 'WB Class-XII Third Semester',
    duration: 25,
    questions: [
      {
        id: 1,
        text: 'একটি অশূন্য সেট $A$-এর ওপর সংজ্ঞাত সম্বন্ধ $R$-কে স্বসম (Reflexive) বলা হবে যদি-',
        options: [
          'প্রত্যেক $a \\in A$-এর জন্য $(a, a) \\in R$',
          '$(a, b) \\in R \\implies (b, a) \\in R$',
          '$(a, b) \\in R$ এবং $(b, c) \\in R \\implies (a, c) \\in R$',
          '$(a, a) \\notin R$'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        text: 'যদি $(a, b) \\in R \\implies (b, a) \\in R$ হয়, তবে সেই সম্বন্ধটিকে কী বলে?',
        options: ['স্বসম (Reflexive)', 'প্রতিসম (Symmetric)', 'সংক্রমণ (Transitive)', 'বিপ্রতিসম (Anti-symmetric)'],
        correctAnswer: 1
      },
      {
        id: 3,
        text: 'একটি সম্বন্ধ $R$ একই সাথে স্বসম, প্রতিসম এবং সংক্রমণ হলে তাকে কী বলা হয়?',
        options: ['সমতুল্যতা সম্বন্ধ (Equivalence Relation)', 'আংশিক ক্রম সম্বন্ধ', 'একক সম্বন্ধ', 'শূন্য সম্বন্ধ'],
        correctAnswer: 0
      },
      {
        id: 4,
        text: 'সেট $A = \\{1, 2, 3\\}$-এর ওপর সংজ্ঞাত ক্ষুদ্রতম সমতুল্যতা সম্বন্ধ (Smallest Equivalence Relation) কোনটি?',
        options: [
          '$\\{(1, 1), (2, 2), (3, 3)\\}$',
          '$\\phi$',
          '$A \\times A$',
          '$\\{(1, 2), (2, 1)\\}$'
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        text: 'বাস্তব সংখ্যার সেট $\\mathbb{R}$-এ সংজ্ঞাত সম্বন্ধ $R = \\{(a, b) : a \\le b\\}$ কেমন সম্বন্ধ?',
        options: [
          'স্বসম ও সংক্রমণ কিন্তু প্রতিসম নয়',
          'সমতুল্যতা সম্বন্ধ',
          'প্রতিসম কিন্তু স্বসম নয়',
          'কোনোটিই নয়'
        ],
        correctAnswer: 0
      },
      {
        id: 6,
        text: 'একটি সমতলে অবস্থিত সরলরেখাসমূহের সেট $L$-এ সম্বন্ধ $R = \\{(l_1, l_2) : l_1 \\perp l_2\\}$ কেমন সম্বন্ধ?',
        options: ['শুধুমাত্র প্রতিসম', 'শুধুমাত্র স্বসম', 'সমতুল্যতা সম্বন্ধ', 'সংক্রমণ'],
        correctAnswer: 0
      },
      {
        id: 7,
        text: 'যদি $n(A) = n$ হয়, তবে $A$ সেটের ওপর মোট স্বসম সম্বন্ধের সংখ্যা কত?',
        options: ['$2^{n^2 - n}$', '$2^{n^2}$', '$2^n$', '$n^2$'],
        correctAnswer: 0
      },
      {
        id: 8,
        text: 'যদি $R$ একটি সমতুল্যতা সম্বন্ধ হয়, তবে $R^{-1}$ কেমন সম্বন্ধ হবে?',
        options: ['সমতুল্যতা সম্বন্ধ', 'শুধুমাত্র স্বসম', 'শুধুমাত্র প্রতিসম', 'কোনো সম্বন্ধই নয়'],
        correctAnswer: 0
      },
      {
        id: 9,
        text: 'পূর্ণসংখ্যার সেট $\\mathbb{Z}$-এ $a \\equiv b \\pmod m$ সম্বন্ধটি কী ধরনের সম্বন্ধ?',
        options: ['সমতুল্যতা সম্বন্ধ', 'শুধুমাত্র স্বসম', 'শুধুমাত্র প্রতিসম', 'শুধুমাত্র সংক্রমণ'],
        correctAnswer: 0
      },
      {
        id: 10,
        text: 'সমতুল্যতা শ্রেণি $[a]$ বলতে বোঝায় সেটের সেই সমস্ত উপাদান $x$-এর সংকলন যাতে-',
        options: ['$(x, a) \\in R$', '$(x, a) \\notin R$', '$x = a$', '$x + a = 0$'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'wb12_s3_rel_2',
    title: '১.২ চিত্রণ ও অপেক্ষকের শ্রেণিবিভাগ (Mapping & Functions)',
    topic: '১. সম্বন্ধ ও অপেক্ষক (Relations & Functions)',
    exam: 'WB Class-XII Third Semester',
    duration: 25,
    questions: [
      {
        id: 1,
        text: 'একটি অপেক্ষক $f: A \\to B$-কে একৈক (One-One বা Injective) বলা হয় যখন-',
        options: [
          '$f(x_1) = f(x_2) \\implies x_1 = x_2$',
          '$f(x_1) = f(x_2) \\implies x_1 \\neq x_2$',
          'Range of $f = B$',
          '$x_1 = x_2 \\implies f(x_1) \\neq f(x_2)$'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        text: 'একটি চিত্রণ $f: A \\to B$-কে উপরিচিত্রণ (Onto বা Surjective) বলা হবে যদি-',
        options: [
          'অপেক্ষকের পাল্লা (Range) = উপ-অঞ্চল (Co-domain $B$)',
          'Range $\\subset B$',
          '$n(A) = n(B)$',
          'প্রত্যেক উপাদান একক হয়'
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        text: 'যে অপেক্ষক একই সাথে একৈক এবং উপরিচিত্রণ (One-One and Onto) তাকে কী বলে?',
        options: ['দ্বৈকৈক চিত্রণ (Bijective)', 'বহু-এক চিত্রণ (Many-One)', 'অন্তঃচিত্রণ (Into)', 'ধ্রুবক চিত্রণ'],
        correctAnswer: 0
      },
      {
        id: 4,
        text: 'অপেক্ষক $f: \\mathbb{R} \\to \\mathbb{R}$, যেখানে $f(x) = x^2$, এটি কেমন চিত্রণ?',
        options: ['বহু-এক এবং অন্তঃচিত্রণ (Neither One-One nor Onto)', 'একৈক ও উপরিচিত্রণ', 'একৈক কিন্তু অন্তঃচিত্রণ', 'বহু-এক ও উপরিচিত্রণ'],
        correctAnswer: 0
      },
      {
        id: 5,
        text: 'অপেক্ষক $f: \\mathbb{N} \\to \\mathbb{N}$, যেখানে $f(x) = 2x$, এটি কী ধরনের চিত্রণ?',
        options: ['একৈক কিন্তু উপরিচিত্রণ নয় (Injective but not Surjective)', 'দ্বৈকৈক', 'উপরিচিত্রণ কিন্তু একৈক নয়', 'কোনোটিই নয়'],
        correctAnswer: 0
      },
      {
        id: 6,
        text: 'কোনো অপেক্ষক $f$-এর বিপরীত অপেক্ষক $f^{-1}$ অস্তিত্বশীল হওয়ার আবশ্যিক ও পর্যাপ্ত শর্ত কী?',
        options: ['$f$ দ্বৈকৈক (Bijective) হতে হবে', '$f$ শুধুমাত্র একৈক হতে হবে', '$f$ শুধুমাত্র উপরিচিত্রণ হতে হবে', '$f$ ধ্রুবক হতে হবে'],
        correctAnswer: 0
      },
      {
        id: 7,
        text: 'যদি $f: A \\to B$ এবং $g: B \\to C$ উভয়ই একৈক হয়, তবে সংযোজিত অপেক্ষক $g \\circ f: A \\to C$ কেমন হবে?',
        options: ['সর্বদাই একৈক (Injective)', 'বহু-এক', 'উপরিচিত্রণ নাও হতে পারে কিন্তু একৈক হবে না', 'সংজ্ঞাত নয়'],
        correctAnswer: 0
      },
      {
        id: 8,
        text: 'যদি $f(x) = \\frac{x-1}{x+1}$ ($x \\neq -1$) হয়, তবে $(f \\circ f)(x) = ?$',
        options: ['$-\\frac{1}{x}$', '$x$', '$\\frac{x+1}{x-1}$', '$1$'],
        correctAnswer: 0
      },
      {
        id: 9,
        text: 'যদি $n(A) = 3$ এবং $n(B) = 3$ হয়, তবে $A$ থেকে $B$-তে মোট দ্বৈকৈক (Bijective) চিত্রণের সংখ্যা কত?',
        options: ['6 (বা $3!$)', '9', '27', '8'],
        correctAnswer: 0
      },
      {
        id: 10,
        text: 'ধ্রুবক অপেক্ষক (Constant Function) $f(x) = c$ কেমন ধরনের অপেক্ষক?',
        options: ['বহু-এক চিত্রণ (Many-One)', 'একৈক চিত্রণ', 'দ্বৈকৈক চিত্রণ', 'অসংজ্ঞাত'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'wb12_s3_rel_3',
    title: '১.৩ বিপরীত বৃত্তীয় অপেক্ষকসমূহ (Inverse Trigonometric Functions)',
    topic: '১. সম্বন্ধ ও অপেক্ষক (Relations & Functions)',
    exam: 'WB Class-XII Third Semester',
    duration: 30,
    questions: [
      {
        id: 1,
        text: '$\\sin^{-1} x$-এর মুখ্যমান শাখা (Principal Value Branch) কোনটি?',
        options: [
          '$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$',
          '$[0, \\pi]$',
          '$(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$',
          '$[0, \\frac{\\pi}{2}]$'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        text: '$\\cos^{-1} x$-এর মুখ্যমান শাখা (Principal Value Branch) কোনটি?',
        options: [
          '$[0, \\pi]$',
          '$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$',
          '$(0, \\pi)$',
          '$[0, 2\\pi]$'
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        text: '$\\tan^{-1} x$-এর মুখ্যমান বিস্তার কোনটি?',
        options: [
          '$(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$',
          '$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$',
          '$[0, \\pi]$',
          '$(0, \\pi)$'
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        text: '$\\cos^{-1}(-\\frac{1}{2})$-এর মুখ্য মান (Principal value) কত?',
        options: ['$\\frac{2\\pi}{3}$', '$-\\frac{\\pi}{3}$', '$\\frac{\\pi}{3}$', '$\\frac{5\\pi}{6}$'],
        correctAnswer: 0
      },
      {
        id: 5,
        text: '$\\sin^{-1}(\\sin \\frac{2\\pi}{3})$-এর মান কত?',
        options: ['$\\frac{\\pi}{3}$', '$\\frac{2\\pi}{3}$', '$-\\frac{\\pi}{3}$', '$\\frac{\\pi}{6}$'],
        correctAnswer: 0
      },
      {
        id: 6,
        text: 'যদি $-1 \\le x \\le 1$ হয়, তবে $\\sin^{-1} x + \\cos^{-1} x = ?$',
        options: ['$\\frac{\\pi}{2}$', '$\\pi$', '$0$', '$2\\pi$'],
        correctAnswer: 0
      },
      {
        id: 7,
        text: '$\\tan^{-1}(1) + \\cos^{-1}(-\\frac{1}{2}) + \\sin^{-1}(-\\frac{1}{2}) = ?$',
        options: ['$\\frac{3\\pi}{4}$', '$\\pi$', '$\\frac{2\\pi}{3}$', '$\\frac{\\pi}{2}$'],
        correctAnswer: 0
      },
      {
        id: 8,
        text: '$\\tan^{-1} x + \\tan^{-1} y = \\tan^{-1}(\\frac{x+y}{1-xy})$ সূত্রটি প্রযোজ্য যখন-',
        options: ['$xy < 1$', '$xy > 1$', '$xy = 1$', 'সর্বদা প্রযোজ্য'],
        correctAnswer: 0
      },
      {
        id: 9,
        text: '$2\\tan^{-1} x$-কে $\\sin^{-1}$-এর আকারে প্রকাশ করলে কোনটি সঠিক? ($|x| \\le 1$)',
        options: [
          '$\\sin^{-1}(\\frac{2x}{1+x^2})$',
          '$\\sin^{-1}(\\frac{2x}{1-x^2})$',
          '$\\sin^{-1}(\\frac{1-x^2}{1+x^2})$',
          '$\\sin^{-1}(2x)$'
        ],
        correctAnswer: 0
      },
      {
        id: 10,
        text: '$\\sin(\\cos^{-1} \\frac{3}{5})$-এর মান কত?',
        options: ['$\\frac{4}{5}$', '$\\frac{3}{5}$', '$\\frac{1}{5}$', '$\\frac{2}{5}$'],
        correctAnswer: 0
      }
    ]
  },

  // ==========================================
  // UNIT 2: বীজগণিত (Algebra: Matrices & Determinants)
  // ==========================================
  {
    id: 'wb12_s3_alg_1',
    title: '২.১ ম্যাট্রিক্সের প্রকারভেদ ও প্রক্রিয়াসমূহ (Matrix Types & Operations)',
    topic: '২. বীজগণিত: ম্যাট্রিক্স ও নির্ণায়ক (Algebra: Matrices & Determinants)',
    exam: 'WB Class-XII Third Semester',
    duration: 30,
    questions: [
      {
        id: 1,
        text: 'একটি বর্গ ম্যাট্রিক্স $A$-কে প্রতিসম (Symmetric) বলা হয় যদি-',
        options: ['$A^T = A$', '$A^T = -A$', '$A^2 = I$', '$A^T A = I$'],
        correctAnswer: 0
      },
      {
        id: 2,
        text: 'একটি বিপ্রতিসম ম্যাট্রিক্সের (Skew-Symmetric Matrix) মুখ্য কর্ণের (Principal Diagonal) পদসমূহ সর্বদাই কী হয়?',
        options: ['শূন্য (Zero)', 'এক (One)', 'যেকোনো বাস্তব সংখ্যা', 'সমান ও অ-শূন্য'],
        correctAnswer: 0
      },
      {
        id: 3,
        text: 'যদি ম্যাট্রিক্স $A$-এর ক্রম $3 \\times 4$ এবং $B$-এর ক্রম $4 \\times 2$ হয়, তবে গুণফল ম্যাট্রিক্স $AB$-এর ক্রম কত হবে?',
        options: ['$3 \\times 2$', '$4 \\times 4$', '$2 \\times 3$', 'গুণন সম্ভব নয়'],
        correctAnswer: 0
      },
      {
        id: 4,
        text: 'ম্যাট্রিক্স গুণনের ক্ষেত্রে Reversal Law কোনটি?',
        options: ['$(AB)^T = B^T A^T$', '$(AB)^T = A^T B^T$', '$(AB)^T = AB$', '$(AB)^{-1} = A^{-1} B^{-1}$'],
        correctAnswer: 0
      },
      {
        id: 5,
        text: 'ম্যাট্রিক্স গুণন সাধারণত কোন নিয়ম মেনে চলে না?',
        options: ['বিনিময় নিয়ম (Commutative Law: $AB \\neq BA$)', 'সংযোগ নিয়ম (Associative Law)', 'বিচ্ছেদ নিয়ম (Distributive Law)', 'কোনোটিই নয়'],
        correctAnswer: 0
      },
      {
        id: 6,
        text: 'যেকোনো বর্গ ম্যাট্রিক্স $A$-কে কীভাবে প্রকাশ করা যায়?',
        options: [
          'একটি প্রতিসম ও একটি বিপ্রতিসম ম্যাট্রিক্সের যোগফলরূপে: $\\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$',
          'দুটি প্রতিসম ম্যাট্রিক্সের গুণফলরূপে',
          'শুধুমাত্র প্রতিসম ম্যাট্রিক্স হিসেবে',
          'কোনোটিই নয়'
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        text: 'যদি $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ হয়, তবে $A^n = ?$',
        options: ['$I$', '$nI$', '$O$', '$A^2$'],
        correctAnswer: 0
      },
      {
        id: 8,
        text: 'একটি স্কেলার ম্যাট্রিক্সের (Scalar Matrix) ক্ষেত্রে কর্ণের পদগুলো কেমন হয়?',
        options: ['পরস্পর সমান', 'সব শূন্য', 'যেকোনো সংখ্যা', 'পরস্পর বিপরীত'],
        correctAnswer: 0
      },
      {
        id: 9,
        text: 'যদি $A$ একটি $m \\times n$ ক্রমের ম্যাট্রিক্স হয়, তবে $A + B$ সংজ্ঞাত হতে হলে $B$-এর ক্রম কী হতে হবে?',
        options: ['$m \\times n$', '$n \\times m$', '$m \\times m$', '$n \\times n$'],
        correctAnswer: 0
      },
      {
        id: 10,
        text: 'যদি $A$ এবং $B$ দুটি প্রতিসম ম্যাট্রিক্স হয়, তবে $AB - BA$ কেমন ম্যাট্রিক্স?',
        options: ['বিপ্রতিসম ম্যাট্রিক্স (Skew-Symmetric)', 'প্রতিসম ম্যাট্রিক্স', 'শূন্য ম্যাট্রিক্স', 'একক ম্যাট্রিক্স'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'wb12_s3_alg_2',
    title: '২.২ নির্ণায়ক, অ্যাডজয়েন্ট ও বিপরীত ম্যাট্রিক্স (Determinants, Adjoint & Inverse)',
    topic: '২. বীজগণিত: ম্যাট্রিক্স ও নির্ণায়ক (Algebra: Matrices & Determinants)',
    exam: 'WB Class-XII Third Semester',
    duration: 30,
    questions: [
      {
        id: 1,
        text: 'যদি $A$ একটি $3 \\times 3$ ক্রমের বর্গ ম্যাট্রিক্স হয় এবং $k$ একটি স্কেলার হয়, তবে $|kA| = ?$',
        options: ['$k^3 |A|$', '$k |A|$', '$k^2 |A|$', '$3k |A|$'],
        correctAnswer: 0
      },
      {
        id: 2,
        text: 'যদি $A$ একটি $n \\times n$ ক্রমের অবিশিষ্ট ম্যাট্রিক্স (Non-singular Matrix) হয়, তবে $A \\cdot (\\text{adj } A) = ?$',
        options: ['$|A| I_n$', '$|A|^{n-1} I_n$', '$I_n$', '$O$'],
        correctAnswer: 0
      },
      {
        id: 3,
        text: 'যদি $A$ একটি $3 \\times 3$ ক্রমের ম্যাট্রিক্স হয়, তবে $|\\text{adj } A| = ?$',
        options: ['$|A|^2$', '$|A|^3$', '$|A|$', '$|A|^{-1}$'],
        correctAnswer: 0
      },
      {
        id: 4,
        text: 'ম্যাট্রিক্স $A$-এর বিপরীত ম্যাট্রিক্স $A^{-1}$ অস্তিত্বশীল হবে যদি এবং কেবল যদি-',
        options: ['$|A| \\neq 0$ (অবিশিষ্ট ম্যাট্রিক্স)', '$|A| = 0$', '$A = A^T$', '$A^2 = I$'],
        correctAnswer: 0
      },
      {
        id: 5,
        text: 'বিপরীত ম্যাট্রিক্স নির্ণয়ের সঠিক সূত্র কোনটি?',
        options: [
          '$A^{-1} = \\frac{\\text{adj } A}{|A|}$',
          '$A^{-1} = |A| \\cdot (\\text{adj } A)$',
          '$A^{-1} = \\frac{|A|}{\\text{adj } A}$',
          '$A^{-1} = (\\text{adj } A)^T$'
        ],
        correctAnswer: 0
      },
      {
        id: 6,
        text: 'যদি $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 4 \\end{bmatrix}$ হয়, তবে $|A|$ এর মান কত?',
        options: ['5', '11', '8', '-5'],
        correctAnswer: 0
      },
      {
        id: 7,
        text: 'রৈখিক সমীকরণ জোট $AX = B$-এর একটি অনন্য সমাধান (Unique Solution) থাকবে যদি-',
        options: ['$|A| \\neq 0$', '$|A| = 0$', '$B = O$', '$A = I$'],
        correctAnswer: 0
      },
      {
        id: 8,
        text: 'যদি $|A| = 0$ এবং $(\\text{adj } A)B \\neq O$ হয়, তবে সমীকরণ জোটের সমাধান কেমন হবে?',
        options: ['কোনো সমাধান নেই (অসংগত / Inconsistent)', 'অনন্য সমাধান আছে', 'অসীম সংখ্যক সমাধান আছে', 'শূন্য সমাধান'],
        correctAnswer: 0
      },
      {
        id: 9,
        text: 'যদি $A$ একটি $2 \\times 2$ ম্যাট্রিক্স হয় এবং $|A| = 4$ হয়, তবে $|A^{-1}| = ?$',
        options: ['$\\frac{1}{4}$', '4', '16', '-4'],
        correctAnswer: 0
      },
      {
        id: 10,
        text: 'যদি কোনো নির্ণায়কের দুটি সারি বা স্তম্ভ হুবহু সমান হয়, তবে নির্ণায়কের মান কত?',
        options: ['0', '1', '-1', 'অসীম'],
        correctAnswer: 0
      }
    ]
  },

  // ==========================================
  // UNIT 3: কলনবিদ্যা (Calculus: Continuity & Derivatives)
  // ==========================================
  {
    id: 'wb12_s3_calc_1',
    title: '৩.১ সন্ততা ও অবকলনযোগ্যতা (Continuity & Differentiability)',
    topic: '৩. কলনবিদ্যা: সন্ততা ও অবকলন (Calculus: Continuity & Derivatives)',
    exam: 'WB Class-XII Third Semester',
    duration: 30,
    questions: [
      {
        id: 1,
        text: '$x = a$ বিন্দুতে একটি অপেক্ষক $f(x)$ সন্তত হওয়ার শর্ত কী?',
        options: [
          '$\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)$',
          '$\\lim_{x \\to a} f(x) \\neq f(a)$',
          '$f(a) = 0$',
          '$f\'(a) = 0$'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        text: 'অপেক্ষক $f(x) = |x|$ বিন্দু $x = 0$-তে কেমন আচরণ করে?',
        options: [
          'সন্তত কিন্তু অবকলনযোগ্য নয় (Continuous but not differentiable)',
          'অবকলনযোগ্য কিন্তু সন্তত নয়',
          'সন্তত এবং অবকলনযোগ্য উভয়ই',
          'সন্ততও নয়, অবকলনযোগ্যও নয়'
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        text: 'নিচের কোন উক্তিটি সর্বদাই সত্য?',
        options: [
          'একটি অপেক্ষক অবকলনযোগ্য হলে তা নিশ্চিতভাবেই সন্তত হয়',
          'একটি অপেক্ষক সন্তত হলে তা নিশ্চিতভাবেই অবকলনযোগ্য হয়',
          'সন্ততা ও অবকলনযোগ্যতার মধ্যে কোনো সম্পর্ক নেই',
          'কোনো অপেক্ষক সর্বত্র সন্তত হতে পারে না'
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        text: 'যদি $f(x) = \\begin{cases} \\frac{\\sin 3x}{x} & x \\neq 0 \\\\ k & x = 0 \\end{cases}$ অপেক্ষকটি $x = 0$-তে সন্তত হয়, তবে $k$-এর মান কত?',
        options: ['3', '1', '0', '$\\frac{1}{3}$'],
        correctAnswer: 0
      },
      {
        id: 5,
        text: 'Greatest Integer Function $f(x) = [x]$ কোন বিন্দুগুলোতে অসন্তত (Discontinuous)?',
        options: ['সকল পূর্ণসংখ্যা বিন্দুতে ($x \\in \\mathbb{Z}$)', 'সকল বাস্তব বিন্দুতে', 'শুধুমাত্র $x=0$ বিন্দুতে', 'কোথাও নয়'],
        correctAnswer: 0
      },
      {
        id: 6,
        text: '$\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x} = ?$',
        options: ['2', '1', '0', '$e$'],
        correctAnswer: 0
      },
      {
        id: 7,
        text: '$\\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{x} = ?$',
        options: ['4', '1', '0', '$\\frac{1}{4}$'],
        correctAnswer: 0
      },
      {
        id: 8,
        text: 'যদি $f(x) = x \\sin(1/x)$ ($x \\neq 0$) এবং $f(0) = 0$ হয়, তবে $x = 0$ বিন্দুতে $f(x)$ কেমন?',
        options: ['সন্তত কিন্তু অবকলনযোগ্য নয়', 'সন্তত এবং অবকলনযোগ্য উভয়ই', 'অসন্তত', 'অসীম'],
        correctAnswer: 0
      },
      {
        id: 9,
        text: 'L\'Hôpital\'s Rule প্রযোজ্য হয় যখন সীমার রূপটি কেমন হয়?',
        options: ['$\\frac{0}{0}$ অথবা $\\frac{\\infty}{\\infty}$', '$0 \\times 1$', '$\\frac{1}{0}$', 'যেকোনো মান'],
        correctAnswer: 0
      },
      {
        id: 10,
        text: '$x = a$ বিন্দুতে $f(x)$-এর ডানদিকের অন্তরকলজ (Right-hand derivative) হলো-',
        options: [
          '$\\lim_{h \\to 0^+} \\frac{f(a+h) - f(a)}{h}$',
          '$\\lim_{h \\to 0^-} \\frac{f(a+h) - f(a)}{h}$',
          '$\\lim_{h \\to 0} \\frac{f(a+h) + f(a)}{h}$',
          '$\\frac{f(a)}{h}$'
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'wb12_s3_calc_2',
    title: '৩.২ অবকলন ও দ্বিতীয় ক্রমের অন্তরকলজ (Differentiation & Second Order Derivatives)',
    topic: '৩. কলনবিদ্যা: সন্ততা ও অবকলন (Calculus: Continuity & Derivatives)',
    exam: 'WB Class-XII Third Semester',
    duration: 30,
    questions: [
      {
        id: 1,
        text: '$\\frac{d}{dx}(\\tan^{-1} x) = ?$',
        options: ['$\\frac{1}{1+x^2}$', '$\\frac{1}{\\sqrt{1-x^2}}$', '$-\\frac{1}{1+x^2}$', '$\\frac{1}{x\\sqrt{x^2-1}}$'],
        correctAnswer: 0
      },
      {
        id: 2,
        text: '$\\frac{d}{dx}(\\sin^{-1} x) = ?$',
        options: ['$\\frac{1}{\\sqrt{1-x^2}}$', '$-\\frac{1}{\\sqrt{1-x^2}}$', '$\\frac{1}{1+x^2}$', '$\\frac{x}{\\sqrt{1-x^2}}$'],
        correctAnswer: 0
      },
      {
        id: 3,
        text: 'যদি $y = x^x$ হয়, তবে $\\frac{dy}{dx} = ?$',
        options: ['$x^x(1 + \\ln x)$', '$x \\cdot x^{x-1}$', '$x^x \\ln x$', '$x^x$'],
        correctAnswer: 0
      },
      {
        id: 4,
        text: 'যদি $x = a \\cos\\theta, y = a \\sin\\theta$ হয়, তবে $\\frac{dy}{dx} = ?$',
        options: ['$-\\cot\\theta$', '$-\\tan\\theta$', '$\\cot\\theta$', '$\\tan\\theta$'],
        correctAnswer: 0
      },
      {
        id: 5,
        text: 'যদি $y = \\ln(\\sin x)$ হয়, তবে $\\frac{dy}{dx} = ?$',
        options: ['$\\cot x$', '$\\tan x$', '$\\sec x$', '$\\text{cosec } x$'],
        correctAnswer: 0
      },
      {
        id: 6,
        text: 'যদি $y = e^{3x}$ হয়, তবে $\\frac{d^2y}{dx^2} = ?$',
        options: ['$9e^{3x}$', '$3e^{3x}$', '$6e^{3x}$', '$27e^{3x}$'],
        correctAnswer: 0
      },
      {
        id: 7,
        text: 'যদি $y = \\sin x$ হয়, তবে $\\frac{d^2y}{dx^2} + y = ?$',
        options: ['0', '$2\\sin x$', '$-\\cos x$', '1'],
        correctAnswer: 0
      },
      {
        id: 8,
        text: 'প্রাচলিক সমীকরণ $x = f(t), y = g(t)$-এর ক্ষেত্রে $\\frac{d^2y}{dx^2}$-এর সঠিক রূপ কোনটি?',
        options: [
          '$\\frac{d}{dt}(\\frac{dy}{dx}) \\cdot \\frac{dt}{dx}$',
          '$\\frac{d^2y/dt^2}{d^2x/dt^2}$',
          '$\\frac{dy/dt}{dx/dt}$',
          '$\\frac{d^2y}{dt^2} \\cdot \\frac{d^2x}{dt^2}$'
        ],
        correctAnswer: 0
      },
      {
        id: 9,
        text: 'অব্যক্ত সমীকরণ (Implicit Equation) $x^2 + y^2 = r^2$-এর ক্ষেত্রে $\\frac{dy}{dx} = ?$',
        options: ['$-\\frac{x}{y}$', '$\\frac{x}{y}$', '$-\\frac{y}{x}$', '$\\frac{y}{x}$'],
        correctAnswer: 0
      },
      {
        id: 10,
        text: '$\\frac{d}{dx}(2^x) = ?$',
        options: ['$2^x \\ln 2$', '$x 2^{x-1}$', '$\\frac{2^x}{\\ln 2}$', '$2^x$'],
        correctAnswer: 0
      }
    ]
  },

  // ==========================================
  // UNIT 4: সম্ভাবনা (Probability: Conditional & Bayes' Theorem)
  // ==========================================
  {
    id: 'wb12_s3_prob_1',
    title: '৪.১ শর্তাধীন সম্ভাবনা ও গুণন উপপাদ্য (Conditional Probability & Multiplication Theorem)',
    topic: '৪. সম্ভাবনা: শর্তাধীন ও বেয়স উপপাদ্য (Probability: Conditional & Bayes\' Theorem)',
    exam: 'WB Class-XII Third Semester',
    duration: 30,
    questions: [
      {
        id: 1,
        text: 'শর্তাধীন সম্ভাবনা (Conditional Probability) $P(A|B)$-এর সূত্র কোনটি?',
        options: [
          '$\\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0)$',
          '$\\frac{P(A \\cap B)}{P(A)}$',
          '$P(A) \\cdot P(B)$',
          '$\\frac{P(A \\cup B)}{P(B)}$'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        text: 'যদি $A$ এবং $B$ দুটি স্বাধীন ঘটনা (Independent Events) হয়, তবে $P(A \\cap B) = ?$',
        options: ['$P(A) \\cdot P(B)$', '$P(A) + P(B)$', '$0$', '$\\frac{P(A)}{P(B)}$'],
        correctAnswer: 0
      },
      {
        id: 3,
        text: 'যদি $P(A) = 0.6, P(B) = 0.3$ এবং $P(A \\cap B) = 0.18$ হয়, তবে $A$ ও $B$ ঘটনা দুটি কেমন?',
        options: ['পরস্পর স্বাধীন (Independent)', 'পরস্পর বর্জনশীল (Mutually Exclusive)', 'সমসম্ভব', 'কোনোটিই নয়'],
        correctAnswer: 0
      },
      {
        id: 4,
        text: 'যদি $P(A) = \\frac{1}{2}, P(B) = 0$ হয়, তবে $P(A|B) = ?$',
        options: ['অসংজ্ঞাত (Undefined)', '0', '$\\frac{1}{2}$', '1'],
        correctAnswer: 0
      },
      {
        id: 5,
        text: 'দুটি পরস্পর বর্জনশীল ঘটনার (Mutually Exclusive Events) ক্ষেত্রে $P(A \\cap B) = ?$',
        options: ['0', '$P(A)P(B)$', '1', '$P(A)+P(B)$'],
        correctAnswer: 0
      },
      {
        id: 6,
        text: 'যদি $P(A) = 0.4, P(B) = 0.8$ এবং $P(B|A) = 0.6$ হয়, তবে $P(A \\cup B) = ?$',
        options: ['0.96', '0.24', '0.84', '0.64'],
        correctAnswer: 0
      },
      {
        id: 7,
        text: 'একটি পাশা দুবার ছোড়া হলো। প্রাপ্ত সংখ্যা দুটির যোগফল 6 দেওয়া থাকলে 4 সংখ্যাটি অন্তত একবার আসার শর্তাধীন সম্ভাবনা কত?',
        options: ['$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{1}{6}$', '$\\frac{1}{36}$'],
        correctAnswer: 0
      },
      {
        id: 8,
        text: 'যদি $A$ এবং $B$ স্বাধীন হয়, তবে $A\'$ এবং $B\'$ ঘটনা দুটি কেমন হবে?',
        options: ['পরস্পর স্বাধীন হবে', 'পরস্পর বর্জনশীল হবে', 'অধীন হবে', 'বলা সম্ভব নয়'],
        correctAnswer: 0
      },
      {
        id: 9,
        text: '$P(A|B) + P(A\'|B) = ?$',
        options: ['1', '0', '$P(B)$', '$P(A)$'],
        correctAnswer: 0
      },
      {
        id: 10,
        text: 'একটি বাক্সে 10টি কালো ও 5টি সাদা বল আছে। প্রতিস্থাপন ছাড়া পর পর দুটি বল তুললে উভয়ই কালো হওয়ার সম্ভাবনা কত?',
        options: ['$\\frac{10}{15} \\times \\frac{9}{14} = \\frac{3}{7}$', '$\\frac{10}{15} \\times \\frac{10}{15}$', '$\\frac{5}{15}$', '$\\frac{1}{2}$'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'wb12_s3_prob_2',
    title: '৪.২ বেয়স উপপাদ্য ও সম্পূর্ণ সম্ভাবনা (Bayes\' Theorem & Total Probability)',
    topic: '৪. সম্ভাবনা: শর্তাধীন ও বেয়স উপপাদ্য (Probability: Conditional & Bayes\' Theorem)',
    exam: 'WB Class-XII Third Semester',
    duration: 35,
    questions: [
      {
        id: 1,
        text: 'সম্পূর্ণ সম্ভাবনার উপপাদ্য (Theorem of Total Probability) কোনটি?',
        options: [
          '$P(A) = \\sum_{i=1}^n P(E_i) P(A|E_i)$',
          '$P(A) = \\prod_{i=1}^n P(E_i)$',
          '$P(A) = \\sum_{i=1}^n P(A|E_i)$',
          '$P(A) = P(E_1) + P(E_2)$'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        text: 'বেয়স উপপাদ্যের (Bayes\' Theorem) গাণিতিক রূপ কোনটি?',
        options: [
          '$P(E_k|A) = \\frac{P(E_k) P(A|E_k)}{\\sum_{i=1}^n P(E_i) P(A|E_i)}$',
          '$P(E_k|A) = \\frac{P(A) P(E_k|A)}{P(E_k)}$',
          '$P(E_k|A) = \\frac{P(E_k \\cup A)}{P(A)}$',
          '$P(E_k|A) = P(E_k) \\cdot P(A)$'
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        text: 'বেয়স উপপাদ্য মূলত কোন ধরনের সম্ভাবনা নির্ণয়ে ব্যবহৃত হয়?',
        options: [
          'বিপরীত সম্ভাবনা (Inverse / Posterior Probability)',
          'শুধুমাত্র সরল সম্ভাবনা',
          'জ্যামিতিক সম্ভাবনা',
          'বর্জনশীল সম্ভাবনা'
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        text: 'বেয়স উপপাদ্যে $P(E_i)$-কে কী সম্ভাবনা বলা হয়?',
        options: ['পূর্ববর্তী সম্ভাবনা (Prior Probability)', 'পরবর্তী সম্ভাবনা (Posterior Probability)', 'শর্তাধীন সম্ভাবনা', 'সম্পূর্ণ সম্ভাবনা'],
        correctAnswer: 0
      },
      {
        id: 5,
        text: 'বেয়স উপপাদ্যে $P(E_i|A)$-কে কী সম্ভাবনা বলা হয়?',
        options: ['পরবর্তী সম্ভাবনা (Posterior Probability)', 'পূর্ববর্তী সম্ভাবনা (Prior Probability)', 'নিশ্চিত সম্ভাবনা', 'প্রাথমিক সম্ভাবনা'],
        correctAnswer: 0
      },
      {
        id: 6,
        text: 'নমুনা ক্ষেত্র $S$-এর বিভাজন (Partition) $E_1, E_2, \\dots, E_n$-এর জন্য আবশ্যক শর্ত কী?',
        options: [
          'ঘটনাগুলি পারস্পরিক বিচ্ছিন্ন ($E_i \\cap E_j = \\phi$) এবং নিঃশেষ ($\\bigcup E_i = S$)',
          'ঘটনাগুলি সম্পূর্ণ স্বাধীন',
          'প্রত্যেক $P(E_i) = 1$',
          'কোনো শর্তের প্রয়োজন নেই'
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        text: 'একটি কারখানায় দুটি মেশিন $M_1$ এবং $M_2$ যথাক্রমে 60% ও 40% পণ্য তৈরি করে। তাদের ত্রুটিপূর্ণ পণ্যের হার যথাক্রমে 2% ও 1%। উদ্দেশ্যহীনভাবে তোলা একটি পণ্য ত্রুটিপূর্ণ হলে সেটি $M_1$ তৈরি করার সম্ভাবনা কত?',
        options: ['$\\frac{3}{4}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{3}{5}$'],
        correctAnswer: 0
      },
      {
        id: 8,
        text: 'একটি থলিতে 4টি সাদা ও 6টি লাল বল আছে। দ্বিতীয় থলিতে 5টি সাদা ও 5টি লাল বল আছে। উদ্দেশ্যহীনভাবে একটি থলি নির্বাচন করে একটি বল তোলা হলো এবং সেটি সাদা পাওয়া গেল। বলটি প্রথম থলি থেকে আসার সম্ভাবনা কত?',
        options: ['$\\frac{4}{9}$', '$\\frac{5}{9}$', '$\\frac{1}{2}$', '$\\frac{2}{5}$'],
        correctAnswer: 0
      },
      {
        id: 9,
        text: 'যদি কোনো পরীক্ষায় সত্যবাদী ব্যক্তির সত্য বলার হার $\\frac{4}{5}$ হয় এবং সে একটি পাশা ছুঁড়ে বলে যে 6 এসেছে, তবে প্রকৃতপক্ষে 6 আসার সম্ভাবনা কত?',
        options: ['$\\frac{4}{9}$', '$\\frac{1}{6}$', '$\\frac{4}{5}$', '$\\frac{5}{9}$'],
        correctAnswer: 0
      },
      {
        id: 10,
        text: 'বেয়স উপপাদ্য কে প্রথম আবিষ্কার ও প্রতিষ্ঠা করেন?',
        options: ['টমাস বেয়স (Thomas Bayes)', 'পিয়ের-সাইমন লাপ্লাস (Pierre-Simon Laplace)', 'ব্লেইজ প্যাসকাল (Blaise Pascal)', 'কার্ল গাউস (Carl Gauss)'],
        correctAnswer: 0
      }
    ]
  }
];
