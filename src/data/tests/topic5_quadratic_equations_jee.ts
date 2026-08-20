import { Test } from '../testData';

export const topic5JeeTests: Test[] = [
  {
    id: 'quad_jee_mock_1',
    title: '৫.১১ দ্বিঘাত সমীকরণ JEE মক টেস্ট ১ (Quadratic Equations JEE Mock 1)',
    topic: '৫. দ্বিঘাত সমীকরণ',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "$ax^2 + bx + c = 0$ সমীকরণের প্রতিটি মূলকে 1 হ্রাস করে গঠিত সমীকরণটি $2x^2 + 8x + 2 = 0$ হলে:",
        options: ["$a = -b$", "$b = -c$", "$c = -a$", "$b = a + c$"],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "যদি $p$ ও $q$ অশূন্য ধ্রুবক হয় এবং $x^2 + px + q = 0$ সমীকরণের মূল $u$ ও $v$ হয়, তবে $qx^2 + px + 1 = 0$ সমীকরণের মূলগুলি হলো:",
        options: ["$u$ এবং $\\frac{1}{v}$", "$\\frac{1}{u}$ এবং $v$", "$\\frac{1}{u}$ এবং $\\frac{1}{v}$", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "যদি $x^2 + px + q = 0$ সমীকরণের মূলদ্বয়ের যোগফল তাদের বর্গের যোগফলের সমান হয়, তবে:",
        options: ["$p^2 - q^2 = 0$", "$p^2 + q^2 = 2q$", "$p^2 + p = 2q$", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 4,
        text: "যদি $x^2 + px + q = 0$ সমীকরণের মূলদ্বয়ের যোগফল তাদের পার্থক্যের ৩ গুণ হয়, তবে নিচের কোনটি সত্য?",
        options: ["$9p^2 = 2q$", "$2q^2 = 9p$", "$2p^2 = 9q$", "$9q^2 = 2p$"],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "যদি $ax^2 + bx + c = 0$ দ্বিঘাত সমীকরণের মূলদ্বয়ের যোগফল তাদের অন্যোন্যকের বর্গের যোগফলের সমান হয়, তবে $\\frac{b^2}{ac} + \\frac{bc}{a^2} =$",
        options: ["2", "-2", "1", "-1"],
        correctAnswer: 0
      },
      {
        id: 6,
        text: "যদি $4x^3 + 16x^2 - 9x - 36 = 0$ সমীকরণের দুটি মূলের যোগফল শূন্য হয়, তবে মূলগুলি হলো:",
        options: ["1, 2, -2", "$-2, \\frac{2}{3}, -\\frac{2}{3}$", "$-3, \\frac{3}{2}, -\\frac{3}{2}$", "$-4, \\frac{3}{2}, -\\frac{3}{2}$"],
        correctAnswer: 3
      },
      {
        id: 7,
        text: "যদি $ax^2 + bx + c = 0$ সমীকরণের মূলদ্বয় $l$ এবং $2l$ হয়, তবে:",
        options: ["$b^2 = 9ac$", "$2b^2 = 9ac$", "$b^2 = -4ac$", "$a^2 = c^2$"],
        correctAnswer: 1
      },
      {
        id: 8,
        text: "যদি $\\alpha, \\beta$ সমীকরণ $x^2 - px + 36 = 0$-এর মূল হয় এবং $\\alpha^2 + \\beta^2 = 9$ হয়, তবে $p$-এর মান হলো:",
        options: ["$\\pm 3$", "$\\pm 6$", "$\\pm 8$", "$\\pm 9$"],
        correctAnswer: 3
      },
      {
        id: 9,
        text: "যদি $\\alpha, \\beta, \\gamma$ সমীকরণ $2x^3 - 2x - 1 = 0$-এর মূল হয়, তবে $\\sum (\\alpha\\beta)^2 =$",
        options: ["-1", "3", "2", "1"],
        correctAnswer: 3
      },
      {
        id: 10,
        text: "যদি $\\alpha, \\beta$ হলো $x^2 + px + q = 0$-এর মূল এবং $\\alpha+h, \\beta+h$ হলো $x^2 + rx + s = 0$-এর মূল, তবে:",
        options: ["$\\frac{p}{r} = \\frac{q}{s}$", "$2h = \\left[\\frac{p}{q} + \\frac{r}{s}\\right]$", "$p^2 - 4q = r^2 - 4s$", "$pr^2 = qs^2$"],
        correctAnswer: 2
      },
      {
        id: 11,
        text: "বাস্তব সহগবিশিষ্ট যে দ্বিঘাত সমীকরণের একটি মূল $7 + 5i$, তা হলো:",
        options: ["$x^2 - 14x - 74 = 0$", "$x^2 + 14x + 74 = 0$", "$x^2 + 14x - 74 = 0$", "$x^2 - 14x + 74 = 0$"],
        correctAnswer: 3
      },
      {
        id: 12,
        text: "যে দ্বিঘাত সমীকরণের একটি মূল $-47 + 8\\sqrt{-3}$-এর বর্গমূল, তা হলো:",
        options: ["$x^2 + 2x + 49 = 0$", "$x^2 - 2x + 49 = 0$", "$x^2 \\pm 2x + 49 = 0$", "$x^2 \\pm 2x - 49 = 0$"],
        correctAnswer: 2
      },
      {
        id: 13,
        text: "যে দ্বিঘাত সমীকরণের একটি মূল $\\frac{1}{2 + \\sqrt{5}}$, তা হলো:",
        options: ["$x^2 + 4x - 1 = 0$", "$x^2 - 4x - 1 = 0$", "$x^2 + 4x + 1 = 0$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 14,
        text: "যে দ্বিঘাত সমীকরণের একটি মূল $2 - \\sqrt{3}$, তা হলো:",
        options: ["$x^2 - 4x + 1 = 0$", "$x^2 - 4x - 1 = 0$", "$x^2 + 4x + 1 = 0$", "$x^2 + 4x - 1 = 0$"],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "$3ax^2 + 3bx + c = 0$ সমীকরণের মূলগুলির ৩ গুণ মূলবিশিষ্ট দ্বিঘাত সমীকরণটি হলো:",
        options: ["$ax^2 + bx + c = 0$", "$ax^2 + 3bx + c = 0$", "$ax^2 + bx + 3c = 0$", "$ax^2 + 3bx + 3c = 0$"],
        correctAnswer: 3
      },
      {
        id: 16,
        text: "যদি $\\alpha, \\beta$ সমীকরণ $x^2 + px + q = 0$-এর মূল হয়, তবে $-\\frac{1}{\\alpha}, -\\frac{1}{\\beta}$ মূলবিশিষ্ট সমীকরণটি হলো:",
        options: ["$qx^2 - px + 1 = 0$", "$qx^2 + px + 1 = 0$", "$x^2 + px + q = 0$", "$x^2 - px + q = 0$"],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "যদি $ax^2 + bx + c = 0$ সমীকরণের একটি মূল $a'x^2 + b'x + c' = 0$ সমীকরণের একটি মূলের অন্যোন্যক হয়, তবে:",
        options: ["$(cc' - aa')^2 = (ba' - cb')(ab' - bc')$", "$(bb' - aa')^2 = (ca' - bc')(ab' - bc')$", "$(cc' - aa')^2 = (ba' + cb')(ab' + bc')$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "$ax^2 + bx + c = 0$ সমীকরণের একটি মূল অপরটির অন্যোন্যক হবে যদি:",
        options: ["$a + c = 0$", "$b + c = 0$", "$b - c = 0$", "$a - c = 0$"],
        correctAnswer: 3
      },
      {
        id: 19,
        text: "যদি $5x^2 + 13x + k = 0$ সমীকরণের মূলদ্বয় পরস্পরের অন্যোন্যক হয়, তবে $k$-এর মান হলো:",
        options: ["0", "5", "1/6", "6"],
        correctAnswer: 1
      },
      {
        id: 20,
        text: "যদি $x^2 = px + q$ সমীকরণের একটি মূল অপরটির অন্যোন্যক হয়, তবে সঠিক সম্পর্কটি হলো:",
        options: ["$q = -1$", "$q = 1$", "$pq = -1$", "$pq = 1$"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'quad_jee_mock_2',
    title: '৫.১২ দ্বিঘাত সমীকরণ JEE মক টেস্ট ২ (Quadratic Equations JEE Mock 2)',
    topic: '৫. দ্বিঘাত সমীকরণ',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $\\frac{x-m}{mx+1} = \\frac{x+n}{nx+1}$ দ্বিঘাত সমীকরণের মূলদ্বয় পরস্পরের অন্যোন্যক হয়, তবে:",
        options: ["$n = 0$", "$m = n$", "$m + n = 1$", "$m^2 + n^2 = 1$"],
        correctAnswer: 0
      },
      {
        id: 2,
        text: "$ax^2 + bx + c = 0$ দ্বিঘাত সমীকরণের মূলদ্বয় পরস্পরের অন্যোন্যক হবে যদি:",
        options: ["$a = \\frac{1}{c}$", "$a = c$", "$b = ac$", "$a = b$"],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "যদি $x^2 + px + 3 = 0$ সমীকরণের দুটি মূলের পরম অন্তর $\\sqrt{p}$ হয়, তবে $p =$",
        options: ["-3, 4", "4", "-3", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "যদি $x^2 - px + q = 0$ সমীকরণের মূলদ্বয়ের অন্তর 1 হয়, তবে:",
        options: ["$p^2 = 4q$", "$p^2 = 4q + 1$", "$p^2 = 4q - 1$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 5,
        text: "$x^2 - 7x - 9 = 0$ সমীকরণের মূলদ্বয়ের সাংখ্যিক অন্তর হলো:",
        options: ["5", "$2\\sqrt{85}$", "$9\\sqrt{7}$", "$\\sqrt{85}$"],
        correctAnswer: 3
      },
      {
        id: 6,
        text: "যদি $x^2 - px + 8 = 0$ সমীকরণের মূলদ্বয়ের অন্তর 2 হয়, তবে $p$-এর মান হলো:",
        options: ["$\\pm 2$", "$\\pm 4$", "$\\pm 6$", "$\\pm 8$"],
        correctAnswer: 2
      },
      {
        id: 7,
        text: "যদি $x^2 - bx + c = 0$ সমীকরণের মূলদ্বয়ের অন্তর 1 হয়, তবে:",
        options: ["$b^2 - 4c - 1 = 0$", "$b^2 - 4c = 0$", "$b^2 - 4c + 1 = 0$", "$b^2 + 4c - 1 = 0$"],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "যদি $x^2 - bx + c = 0$ এবং $x^2 - cx + b = 0$ সমীকরণের মূলদ্বয় একই পরিমাণে পৃথক হয়, তবে $b + c =$",
        options: ["4", "1", "0", "-4"],
        correctAnswer: 3
      },
      {
        id: 9,
        text: "যদি $x^2 - bx + c = 0$ সমীকরণের মূলদ্বয় দুটি ক্রমিক পূর্ণসংখ্যা হয়, তবে $b^2 - 4c =$",
        options: ["1", "2", "3", "4"],
        correctAnswer: 0
      },
      {
        id: 10,
        text: "যদি $\\alpha, \\beta$ হলো $x^2 - 3x + a = 0$ ($a \\in \\mathbb{R}$)-এর মূল এবং $\\alpha < 1 < \\beta$ হয়, তবে:",
        options: ["$a \\in (-\\infty, 2)$", "$a \\in \\left(-\\infty, \\frac{9}{4}\\right)$", "$a \\in \\left(2, \\frac{9}{4}\\right)$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "যদি $\\alpha, \\beta$ হলো $4x^2 - 16x + \\lambda = 0$ ($\\lambda \\in \\mathbb{R}$)-এর মূল এমন যে $1 < \\alpha < 2$ এবং $2 < \\beta < 3$, তবে $\\lambda$-এর পূর্ণসাংখ্যিক সমাধানের সংখ্যা হলো:",
        options: ["5", "6", "2", "3"],
        correctAnswer: 3
      },
      {
        id: 12,
        text: "যদি $X$ হলো বাস্তব সংখ্যা $p$-এর এমন একটি সেট যার জন্য $x^2 = p(x+p)$ সমীকরণের মূলদ্বয় $p$-এর চেয়ে বড় হয়, তবে $X =$",
        options: ["$\\left(-2, -\\frac{1}{2}\\right)$", "$\\left(-\\frac{1}{2}, \\frac{1}{4}\\right)$", "ফাঁকা সেট", "$(-\\infty, 0)$"],
        correctAnswer: 2
      },
      {
        id: 13,
        text: "যদি $ax^2 + bx + c = 0$ দ্বিঘাত সমীকরণের একটি মূল অপর মূলের $n$-তম ঘাত হয়, তবে $(ac^n)^{\\frac{1}{n+1}} + (a^n c)^{\\frac{1}{n+1}} =$",
        options: ["$b$", "$-b$", "$b^{\\frac{1}{n+1}}$", "$-b^{\\frac{1}{n+1}}$"],
        correctAnswer: 1
      },
      {
        id: 14,
        text: "যদি $ax^2 - bx + c = 0$ সমীকরণের একটি মূল অপরটির বর্গ হয়, তবে:",
        options: ["$a^2 c + ac^2 + 3abc - b^3 = 0$", "$a^2 c + ac^2 - 3abc + b^3 = 0$", "$a^3 + b^3 = 3abc$", "$(a+b)^3 = 3abc$"],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "$3x^2 + px + 3 = 0$ ($p > 0$) সমীকরণের একটি মূল অপরটির বর্গ হলে $p$-এর মান হলো:",
        options: ["$\\frac{1}{3}$", "1", "3", "$\\frac{2}{3}$"],
        correctAnswer: 2
      },
      {
        id: 16,
        text: "যদি $px^2 - qx + r = 0$ সমীকরণের একটি মূল অপরটির দ্বিগুণ হয়, তবে:",
        options: ["$9q^2 = 2pr$", "$2q^2 = 9pr$", "$3q^2 = 4pr$", "$4q^2 = 3pr$"],
        correctAnswer: 1
      },
      {
        id: 17,
        text: "$k$-এর যে মানের জন্য $x^2 - x + 3k = 0$ সমীকরণের একটি মূল $x^2 - x + k = 0$ সমীকরণের একটি মূলের দ্বিগুণ হবে, তা হলো:",
        options: ["1", "-2", "2", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 18,
        text: "$f(x) = ax^2 + 2x + 1$ অপেক্ষকটির একটি দ্বি-মূল (double root) থাকবে যদি:",
        options: ["$a = 0$", "$a = -1$", "$a = 1$", "$a = 2$"],
        correctAnswer: 2
      },
      {
        id: 19,
        text: "যদি $\\sin\\alpha, \\cos\\alpha$ সমীকরণ $ax^2 + bx + c = 0$-এর মূলদ্বয় হয়, তবে:",
        options: ["$a^2 - b^2 + 2ac = 0$", "$(a-c)^2 = b^2 + c^2$", "$a^2 + b^2 - 2ac = 0$", "$a^2 + b^2 + 2ac = 0$"],
        correctAnswer: 0
      },
      {
        id: 20,
        text: "যদি $ax^2 + bx + c = 0$-এর মূল $\\alpha, \\beta$ এবং $Ax^2 + Bx + c = 0$-এর মূল $\\alpha-k, \\beta-k$ হয়, তবে $\\frac{B^2 - 4Ac}{b^2 - 4ac} =$",
        options: ["$\\frac{a}{A}$", "$\\frac{A}{a}$", "$\\left(\\frac{a}{A}\\right)^2$", "$\\left(\\frac{A}{a}\\right)^2$"],
        correctAnswer: 3
      }
    ]
  },
  {
    id: 'quad_jee_mock_3',
    title: '৫.১৩ দ্বিঘাত সমীকরণ JEE মক টেস্ট ৩ (Quadratic Equations JEE Mock 3)',
    topic: '৫. দ্বিঘাত সমীকরণ',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $x^2 - 3kx + 2e^{2\\ln k} - 1 = 0$ সমীকরণের মূলদ্বয়ের গুণফল 7 হয়, তবে এর মূলগুলি বাস্তব হবে যখন:",
        options: ["$k = 1$", "$k = 2$", "$k = 3$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "যদি $a$ ও $b$ মূলদ হয় এবং $b$ পূর্ণবর্গ না হয়, তবে মূলদ সহগবিশিষ্ট যে দ্বিঘাত সমীকরণের একটি মূল $\\frac{1}{a + \\sqrt{b}}$, তা হলো:",
        options: ["$x^2 - 2ax + (a^2 - b) = 0$", "$(a^2 - b)x^2 - 2ax + 1 = 0$", "$(a^2 - b)x^2 - 2bx + 1 = 0$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "যদি $\\frac{1}{4 - 3i}$ সমীকরণ $ax^2 + bx + 1 = 0$-এর একটি মূল হয় ($a, b$ বাস্তব), তবে:",
        options: ["$a = 25, b = -8$", "$a = 25, b = 8$", "$a = 5, b = 4$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "যদি $\\alpha, \\beta, \\gamma$ সমীকরণ $x(1+x^2) + x^2(6+x) + 2 = 0$-এর মূল হয়, তবে $\\alpha^{-1} + \\beta^{-1} + \\gamma^{-1}$-এর মান হলো:",
        options: ["-3", "1/2", "-1/2", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "যদি $x^3 - 12x^2 + 39x - 28 = 0$ সমীকরণের মূলগুলি সমান্তর প্রগমনে (A.P.) থাকে, তবে তাদের সাধারণ অন্তর হলো:",
        options: ["$\\pm 1$", "$\\pm 2$", "$\\pm 3$", "$\\pm 4$"],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "$x^3 + 14x^2 - 84x - 216 = 0$ সমীকরণের মূলগুলি রয়েছে:",
        options: ["A.P.-তে", "G.P.-তে", "H.P.-তে", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 7,
        text: "যদি 3 এবং $1 + \\sqrt{2}$ মূলদ সহগবিশিষ্ট একটি ত্রিঘাত সমীকরণের দুটি মূল হয়, তবে সমীকরণটি হলো:",
        options: ["$x^3 - 5x^2 + 9x - 9 = 0$", "$x^3 - 3x^2 - 4x + 12 = 0$", "$x^3 - 5x^2 + 7x + 3 = 0$", "কোনোটিই নয়"],
        correctAnswer: 3
      },
      {
        id: 8,
        text: "$x^2 - 3x + 1 = 0$ সমীকরণের মূলদ্বয়ের বর্গের যোগফল কত?",
        options: ["5", "7", "9", "10"],
        correctAnswer: 1
      },
      {
        id: 9,
        text: "যদি $\\alpha + \\beta = 3$ এবং $\\alpha^3 + \\beta^3 = 27$ হয়, তবে $\\alpha$ ও $\\beta$ কোন সমীকরণের মূল?",
        options: ["$3x^2 + 9x + 7 = 0$", "$9x^2 - 27x + 20 = 0$", "$2x^2 - 6x + 15 = 0$", "কোনোটিই নয়"],
        correctAnswer: 3
      },
      {
        id: 10,
        text: "$\\lambda$-এর কোন মানের জন্য $x^2 + (2+\\lambda)x - \\frac{1}{2}(1+\\lambda) = 0$ সমীকরণের মূলদ্বয়ের বর্গের যোগফল সর্বনিম্ন হবে?",
        options: ["3/2", "1", "1/2", "11/4"],
        correctAnswer: 2
      },
      {
        id: 11,
        text: "$a$ ($a \\ge 3$)-এর কোন মানের জন্য $x^2 - (a-2)x + (a-3) = 0$ সমীকরণের মূলদ্বয়ের ঘনের যোগফল সর্বনিম্ন মান গ্রহণ করে?",
        options: ["3", "4", "5", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 12,
        text: "ধরি $\\alpha, \\beta$ হলো $x^2 + (3-\\lambda)x - \\lambda = 0$-এর মূল। $\\lambda$-এর কোন মানের জন্য $\\alpha^2 + \\beta^2$ সর্বনিম্ন হবে?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 2
      },
      {
        id: 13,
        text: "যদি $x^2 - (a-2)x - (a+1) = 0$ সমীকরণের মূলদ্বয়ের বর্গের যোগফল সর্বনিম্ন হয়, তবে $a$-এর মান হলো:",
        options: ["0", "2", "-1", "1"],
        correctAnswer: 3
      },
      {
        id: 14,
        text: "যদি $\\alpha, \\beta$ হলো $Ax^2 + Bx + C = 0$-এর মূল এবং $\\alpha^2, \\beta^2$ হলো $x^2 + px + q = 0$-এর মূল, তবে $p =$",
        options: ["$(B^2 - 2AC)/A^2$", "$(2AC - B^2)/A^2$", "$(B^2 - 4AC)/A^2$", "$(4AC - B^2)/A^2$"],
        correctAnswer: 1
      },
      {
        id: 15,
        text: "যদি $\\alpha, \\beta$ হলো $x^2 + x + 1 = 0$-এর মূল এবং $\\frac{\\alpha}{\\beta}, \\frac{\\beta}{\\alpha}$ হলো $x^2 + px + q = 0$-এর মূল, তবে $p =$",
        options: ["-1", "1", "-2", "2"],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "যদি $\\alpha, \\beta$ বাস্তব হয় এবং $\\alpha^2, \\beta^2$ সমীকরণ $a^2 x^2 + x + 1 - a^2 = 0$ ($a > 1$)-এর মূল হয়, তবে $\\beta^2 =$",
        options: ["$a^2$", "$1 - \\frac{1}{a^2}$", "$1 - a^2$", "$1 + a^2$"],
        correctAnswer: 1
      },
      {
        id: 17,
        text: "$x^2 - 8x + 4 = 0$ সমীকরণের মূলদ্বয়ের বিপরীতীয় মধ্যক (H.M.) হলো:",
        options: ["1", "2", "3", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "যদি $\\alpha, \\beta$ সমীকরণ $x^2 + x\\sqrt{\\alpha} + \\beta = 0$-এর মূল হয়, তবে $\\alpha$ ও $\\beta$-এর মান হলো:",
        options: ["$\\alpha = 1, \\beta = -1$", "$\\alpha = 1, \\beta = -2$", "$\\alpha = 2, \\beta = 1$", "$\\alpha = 2, \\beta = -2$"],
        correctAnswer: 1
      },
      {
        id: 19,
        text: "যদি $p$ এবং $q$ সমীকরণ $x^2 + px + q = 0$-এর মূলদ্বয় হয়, তবে:",
        options: ["$p = 1$", "$p = -2$", "$p = 1$ বা 0", "$p = -2$ বা 0"],
        correctAnswer: 0
      },
      {
        id: 20,
        text: "যদি $2x^2 - (a^2 + 8a + 1)x + a^2 - 4a = 0$ সমীকরণের মূলদ্বয় বিপরীত চিহ্নযুক্ত হয়, তবে:",
        options: ["$0 < a < 4$", "$a > 0$", "$a < 8$", "$-4 < a < 0$"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'quad_jee_mock_4',
    title: '৫.১৪ দ্বিঘাত সমীকরণ JEE মক টেস্ট ৪ (Quadratic Equations JEE Mock 4)',
    topic: '৫. দ্বিঘাত সমীকরণ',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "নিচের কোন সমীকরণের মূলদ্বয় 1 এবং -2?",
        options: ["$x^2 - x - 2 = 0$", "$x^2 + x - 2 = 0$", "$x^2 - x + 2 = 0$", "$x^2 + x + 2 = 0$"],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "যদি $x^2 + x + 1 = 0$ সমীকরণের মূলদ্বয়ের অনুপাত $m : n$ হয়, তবে:",
        options: ["$\\sqrt{\\frac{m}{n}} + \\sqrt{\\frac{n}{m}} + 1 = 0$", "$\\sqrt{m} + \\sqrt{n} + 1 = 0$", "$\\frac{m}{n} + \\frac{n}{m} + 1 = 0$", "$m + n + 1 = 0$"],
        correctAnswer: 0
      },
      {
        id: 3,
        text: "যদি $lx^2 + nx + n = 0$ সমীকরণের মূলদ্বয়ের অনুপাত $p : q$ হয়, তবে $\\sqrt{\\frac{p}{q}} + \\sqrt{\\frac{q}{p}}$ কার সমান?",
        options: ["$\\sqrt{n/l}$", "$\\sqrt{l/n}$", "$\\pm \\sqrt{n/l}$", "$-\\sqrt{l/n}$"],
        correctAnswer: 2
      },
      {
        id: 4,
        text: "যদি $12x^2 - mx + 5 = 0$ সমীকরণের মূলদ্বয়ের অনুপাত $2 : 3$ হয়, তবে $m =$",
        options: ["$5\\sqrt{10}$", "$3\\sqrt{10}$", "$2\\sqrt{10}$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "যদি $ax^2 + bx + c = 0$ সমীকরণের মূলদ্বয়ের অনুপাত $p : q$ হয়, তবে:",
        options: ["$pqb^2 + (p+q)^2 ac = 0$", "$pqb^2 - (p+q)^2 ac = 0$", "$pqa^2 - (p+q)^2 bc = 0$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "$x^3 - 9x^2 + 14x + 24 = 0$ সমীকরণের দুটি মূলের অনুপাত $3 : 2$ হলে মূলগুলি হবে:",
        options: ["6, 4, -1", "6, 4, 1", "-6, 4, 1", "-6, -4, 1"],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "$ax^2 + bx + c = 0$ সমীকরণের একটি মূল অপরটির তিনগুণ হওয়ার শর্ত হলো:",
        options: ["$b^2 = 8ac$", "$3b^2 + 16ac = 0$", "$3b^2 = 16ac$", "$b^2 + 3ac = 0$"],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "যদি $\\frac{x^2 - bx}{ax - c} = \\frac{\\lambda - 1}{\\lambda + 1}$ সমীকরণের মূলদ্বয়ের জন্য $\\alpha + \\beta = 0$ হয়, তবে $\\lambda$-এর মান হলো:",
        options: ["$\\frac{a-b}{a+b}$", "c", "1/c", "$\\frac{a+b}{a-b}$"],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "$\\frac{1}{x+a} + \\frac{1}{x+b} = \\frac{1}{x+c}$ সমীকরণে মূলদ্বয়ের গুণফল শূন্য হলে মূলদ্বয়ের যোগফল হলো:",
        options: ["0", "$\\frac{2ab}{b+c}$", "$\\frac{2bc}{b+c}$", "$-\\frac{2bc}{b+c}$"],
        correctAnswer: 3
      },
      {
        id: 10,
        text: "যদি $x^3 + px^2 + qx + r = 0$ সমীকরণের দুটি মূলের যোগফল শূন্য হয়, তবে $pq =$",
        options: ["-r", "r", "2r", "-2r"],
        correctAnswer: 1
      },
      {
        id: 11,
        text: "যদি $\\frac{1}{x+p} + \\frac{1}{x+q} = \\frac{1}{r}$ সমীকরণের মূলদ্বয় মানে সমান কিন্তু বিপরীত চিহ্নযুক্ত হয়, তবে মূলদ্বয়ের গুণফল হবে:",
        options: ["$\\frac{p^2+q^2}{2}$", "$-\\frac{(p^2+q^2)}{2}$", "$\\frac{p^2-q^2}{2}$", "$-\\frac{(p^2-q^2)}{2}$"],
        correctAnswer: 1
      },
      {
        id: 12,
        text: "$x^3 - mx^2 + 3x - 2 = 0$ সমীকরণের দুটি মূল মানে সমান কিন্তু বিপরীত চিহ্নযুক্ত হওয়ার জন্য $m$-এর মান হলো:",
        options: ["1/2", "2/3", "3/4", "4/5"],
        correctAnswer: 1
      },
      {
        id: 13,
        text: "যদি $ax^2 + bx + c = a(x-\\alpha)(x-\\beta)$ হয়, তবে $a(\\alpha x + 1)(\\beta x + 1) =$",
        options: ["$ax^2 + bx + c$", "$cx^2 - bx + a$", "$cx^2 - bx - a$", "$cx^2 + bx + a$"],
        correctAnswer: 1
      },
      {
        id: 14,
        text: "যদি $\\alpha, \\beta$ হলো $ax^2 + bx + c = 0$ ($a \\ne 0$)-এর মূল এবং $\\alpha+\\delta, \\beta+\\delta$ হলো $Ax^2 + Bx + C = 0$ ($A \\ne 0$)-এর মূল, তবে:",
        options: ["$\\frac{b^2 - 4ac}{a^2} = \\frac{B^2 - 4AC}{A^2}$", "$\\frac{b^2 - 2ac}{a^2} = \\frac{B^2 - 2AC}{A^2}$", "$\\frac{b^2 - 8ac}{a^2} = \\frac{B^2 - 8AC}{A^2}$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "ত্রিভুজ $PQR$-এ $\\angle R = \\frac{\\pi}{2}$। যদি $\\tan\\frac{P}{2}$ এবং $\\tan\\frac{Q}{2}$ সমীকরণ $ax^2 + bx + c = 0$ ($a \\ne 0$)-এর মূল হয়, তবে:",
        options: ["$a + b = c$", "$b + c = 0$", "$a + c = b$", "$b = c$"],
        correctAnswer: 0
      },
      {
        id: 16,
        text: "$x^2 - |x| - 6 = 0$ সমীকরণের সকল বাস্তব মূলের গুণফল হলো:",
        options: ["-9", "6", "9", "36"],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "যদি $ax^2 + bx + c = 0$ সমীকরণের মূলদ্বয়ের যোগফল তাদের অন্যোন্যকের বর্গের যোগফলের সমান হয়, তবে $bc^2, ca^2, ab^2$ রয়েছে:",
        options: ["A.P.-তে", "G.P.-তে", "H.P.-তে", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "$x^2 - 2x + A = 0$-এর মূল $p, q$ এবং $x^2 - 18x + B = 0$-এর মূল $r, s$। যদি $p < q < r < s$ সমান্তর প্রগমনে (A.P.) থাকে, তবে:",
        options: ["$A = 3, B = 77$", "$A = -3, B = 77$", "$A = 3, B = -77$", "$A = -3, B = -77$"],
        correctAnswer: 1
      },
      {
        id: 19,
        text: "যদি $x^2 + bx + c = 0$ এবং $x^2 + qx + r = 0$ সমীকরণদ্বয়ের মূলগুলি একই অনুপাতে থাকে, তবে:",
        options: ["$r^2 c = qb^2$", "$r^2 b = qc^2$", "$c^2 r = q^2 b$", "$b^2 r = q^2 c$"],
        correctAnswer: 3
      },
      {
        id: 20,
        text: "যদি $x^2 + px + q = 0$ সমীকরণের একটি মূল $2 + \\sqrt{3}$ হয়, তবে $p$ ও $q$-এর মান হলো:",
        options: ["-4, 1", "4, -1", "$2, \\sqrt{3}$", "$-2, -\\sqrt{3}$"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'quad_jee_mock_5',
    title: '৫.১৫ দ্বিঘাত সমীকরণ JEE মক টেস্ট ৫ (Quadratic Equations JEE Mock 5)',
    topic: '৫. দ্বিঘাত সমীকরণ',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $1 - i$ সমীকরণ $x^2 - ax + b = 0$-এর একটি মূল হয়, তবে $b =$",
        options: ["-2", "-1", "1", "2"],
        correctAnswer: 3
      },
      {
        id: 2,
        text: "যদি $\\alpha, \\beta$ হলো $x^2 + px + 1 = 0$-এর মূল এবং $\\gamma, \\delta$ হলো $x^2 + qx + 1 = 0$-এর মূল, তবে $q^2 - p^2 =$",
        options: ["$(\\alpha - \\gamma)(\\beta - \\gamma)(\\alpha + \\delta)(\\beta + \\delta)$", "$(\\alpha + \\gamma)(\\beta + \\gamma)(\\alpha - \\delta)(\\beta + \\delta)$", "$(\\alpha + \\gamma)(\\beta + \\gamma)(\\alpha + \\delta)(\\beta + \\delta)$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 3,
        text: "যদি $\\alpha, \\beta$ হলো $x^2 - px + q = 0$-এর মূল এবং $\\alpha', \\beta'$ হলো $x^2 - p'x + q' = 0$-এর মূল, তবে $(\\alpha-\\alpha')^2 + (\\beta-\\alpha')^2 + (\\alpha-\\beta')^2 + (\\beta-\\beta')^2 =$",
        options: ["$2\\{p^2 - 2q + p'^2 - 2q' - pp'\\}$", "$2\\{p^2 - 2q + p'^2 - 2q' - qq'\\}$", "$2\\{p^2 - 2q - p'^2 - 2q' - pp'\\}$", "$2\\{p^2 - 2q - p'^2 - 2q' - qq'\\}$"],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "যদি $\\alpha, \\beta$ হলো $x^2 - ax + b = 0$-এর মূল এবং $A_n = \\alpha^n + \\beta^n$ হয়, তবে নিচের কোনটি সত্য?",
        options: ["$A_{n+1} = aA_n + bA_{n-1}$", "$A_{n+1} = bA_n + aA_{n-1}$", "$A_{n+1} = aA_n - bA_{n-1}$", "$A_{n+1} = bA_n - aA_{n-1}$"],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "যদি $x^n - 1 = 0$ সমীকরণের মূলগুলি $1, a_1, a_2, \\dots, a_{n-1}$ হয়, তবে $(1-a_1)(1-a_2)\\dots(1-a_{n-1})$-এর মান হবে:",
        options: ["n", "$n^2$", "$n^n$", "0"],
        correctAnswer: 0
      },
      {
        id: 6,
        text: "যদি $\\alpha, \\beta$ হলো $6x^2 - 6x + 1 = 0$-এর মূল, তবে $\\frac{1}{2}[a + b\\alpha + c\\alpha^2 + d\\alpha^3] + \\frac{1}{2}[a + b\\beta + c\\beta^2 + d\\beta^3]$-এর মান হলো:",
        options: ["$\\frac{1}{4}(a+b+c+d)$", "$a + \\frac{b}{1} + \\frac{c}{2} + \\frac{d}{3}$", "$a - \\frac{b}{1} + \\frac{c}{2} - \\frac{d}{3}$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 7,
        text: "যদি $\\alpha_1, \\alpha_2$ হলো $x^2 - px + 1 = 0$-এর মূল এবং $\\beta_1, \\beta_2$ হলো $x^2 - qx + 1 = 0$-এর মূল এবং ভেক্টর $\\alpha_1\\hat{i} + \\beta_1\\hat{j}$ ভেক্টর $\\alpha_2\\hat{i} + \\beta_2\\hat{j}$-এর সমান্তরাল হয়, তবে:",
        options: ["$p = \\pm q$", "$p = \\pm 2q$", "$p = 2q$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "যদি $a_1 x^2 + b_1 x + c_1 = 0$-এর মূল $\\alpha_1, \\beta_1$ এবং $a_2 x^2 + b_2 x + c_2 = 0$-এর মূল $\\alpha_2, \\beta_2$ এমন হয় যে $\\alpha_1\\alpha_2 = \\beta_1\\beta_2 = 1$, তবে:",
        options: ["$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$", "$\\frac{a_1}{c_2} = \\frac{b_1}{b_2} = \\frac{c_1}{a_2}$", "$a_1 a_2 = b_1 b_2 = c_1 c_2$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 9,
        text: "যদি $qx^2 + 2x + 3q = 0$ সমীকরণের মূলদ্বয়ের যোগফল তাদের গুণফলের সমান হয়, তবে $q$-এর মান হলো:",
        options: ["$-\\frac{2}{3}$", "$\\frac{3}{2}$", "3", "-6"],
        correctAnswer: 0
      },
      {
        id: 10,
        text: "যদি $x = (\\beta-\\gamma)(\\alpha-\\delta), y = (\\gamma-\\alpha)(\\beta-\\delta), z = (\\alpha-\\beta)(\\gamma-\\delta)$ হয়, তবে $x^3 + y^3 + z^3 - 3xyz$-এর মান হলো:",
        options: ["0", "$\\alpha^6 + \\beta^6 + \\gamma^6 + \\delta^6$", "$\\alpha^6 \\beta^6 \\gamma^6 \\delta^6$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "যদি $\\alpha, \\beta, \\gamma$ সমীকরণ $x^3 + px^2 + qx + r = 0$-এর মূল হয়, তবে $(1-\\alpha^2)(1-\\beta^2)(1-\\gamma^2)$ কার সমান?",
        options: ["$(1+q)^2 - (p+r)^2$", "$(1+q)^2 + (p+r)^2$", "$(1-q)^2 + (p-r)^2$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 12,
        text: "যদি $\\alpha, \\beta, \\gamma$ সমীকরণ $x^3 + ax + b = 0$-এর মূল হয়, তবে $\\frac{\\alpha^3 + \\beta^3 + \\gamma^3}{\\alpha^2 + \\beta^2 + \\gamma^2} =$",
        options: ["$\\frac{3b}{2a}$", "$-\\frac{3b}{2a}$", "$3b$", "$2a$"],
        correctAnswer: 0
      },
      {
        id: 13,
        text: "যদি $\\alpha, \\beta$ হলো $6x^2 - 2x + 1 = 0$-এর মূল এবং $S_n = \\alpha^n + \\beta^n$, তবে $\\lim_{n\\to\\infty} \\sum_{r=1}^n S_r =$",
        options: ["5/17", "0", "3/37", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 14,
        text: "ধরি $\\alpha, \\beta$ হলো $ax^2 + bx + c = 0$-এর মূল এবং $S_n = \\alpha^n + \\beta^n$ ($n \\ge 1$); তবে প্রদত্ত ৩×৩ নির্ণায়কের মান হলো:",
        options: ["$\\frac{b^2 - 4ac}{a^4}$", "$\\frac{(a+b+c)(b^2 + 4ac)}{a^4}$", "$\\frac{(a+b+c)(b^2 - 4ac)}{a^4}$", "$\\frac{(a+b+c)^2(b^2 - 4ac)}{a^4}$"],
        correctAnswer: 3
      },
      {
        id: 15,
        text: "যদি $\\alpha, \\beta$ সমীকরণ $2x^2 + 6x + b = 0$ ($b < 0$)-এর মূল হয়, তবে $\\frac{\\alpha}{\\beta} + \\frac{\\beta}{\\alpha}$ কার চেয়ে কম?",
        options: ["2", "-2", "18", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "যদি $\\alpha, \\beta$ সমীকরণ $ax^2 + 3x + 2 = 0$ ($a < 0$)-এর মূল হয়, তবে $\\frac{\\alpha^2}{\\beta} + \\frac{\\beta^2}{\\alpha}$ কার চেয়ে বড়?",
        options: ["0", "1", "2", "কোনোটিই নয়"],
        correctAnswer: 3
      },
      {
        id: 17,
        text: "যদি $\\alpha, \\beta, \\gamma, \\sigma$ সমীকরণ $x^4 + 4x^3 - 6x^2 + 7x - 9 = 0$-এর মূল হয়, তবে $(1+\\alpha^2)(1+\\beta^2)(1+\\gamma^2)(1+\\sigma^2)$-এর মান:",
        options: ["5", "9", "11", "13"],
        correctAnswer: 3
      },
      {
        id: 18,
        text: "যদি $\\alpha$ ও $\\beta$ সমীকরণ $x^2 - p(x+1) - q = 0$-এর মূল হয়, তবে $\\frac{\\alpha^2 + 2\\alpha + 1}{\\alpha^2 + 2\\alpha + q} + \\frac{\\beta^2 + 2\\beta + 1}{\\beta^2 + 2\\beta + q}$-এর মান হলো:",
        options: ["2", "3", "0", "1"],
        correctAnswer: 3
      },
      {
        id: 19,
        text: "যদি তিনটি ধনাত্মক সংখ্যা $a, b, c$-এর A.M., G.M. ও H.M. যথাক্রমে $A, G, H$ হয়, তবে সংখ্যাগুলি মূলবিশিষ্ট সমীকরণটি হলো:",
        options: ["$x^3 - 3Ax^2 + G^3(3x-1) = 0$", "$x^3 - 3Ax^2 + 3(G^3/H)x - G^3 = 0$", "$x^3 + 3Ax^2 + 3(G^3/H)x - G^3 = 0$", "$x^3 - 3Ax^2 - 3(G^3/H)x + G^3 = 0$"],
        correctAnswer: 1
      },
      {
        id: 20,
        text: "ধরি $a = \\cos\\frac{2\\pi}{7} + i\\sin\\frac{2\\pi}{7}$, $A = a + a^2 + a^4$ এবং $B = a^3 + a^5 + a^6$; তবে $A$ ও $B$ কোন সমীকরণের মূল?",
        options: ["$x^2 - x + 2 = 0$", "$x^2 - x - 2 = 0$", "$x^2 + x + 2 = 0$", "কোনোটিই নয়"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'quad_jee_mock_6',
    title: '৫.১৬ দ্বিঘাত সমীকরণ JEE মক টেস্ট ৬ (Quadratic Equations JEE Mock 6)',
    topic: '৫. দ্বিঘাত সমীকরণ',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $\\alpha, \\beta$ হলো $x^2 - px + q = 0$-এর মূল, তবে $(\\alpha^2-\\beta^2)(\\alpha^3-\\beta^3)$ এবং $\\alpha^3\\beta^2 + \\alpha^2\\beta^3$ মূলবিশিষ্ট দ্বিঘাত সমীকরণটি হলো:",
        options: ["$x^2 - Sx + P = 0$", "$x^2 + Sx + P = 0$", "$x^2 + Sx - P = 0$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 2,
        text: "ধরি $A, G$ ও $H$ যথাক্রমে দুটি অসমান ধনাত্মক পূর্ণসংখ্যার A.M., G.M. ও H.M.। তবে $Ax^2 - |G|x - H = 0$ সমীকরণটির:",
        options: ["উভয় মূলই ভগ্নাংশ", "অন্তত একটি মূল ঋণাত্মক ভগ্নাংশ", "ঠিক একটি ধনাত্মক মূল আছে", "অন্তত একটি মূল পূর্ণসংখ্যা"],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "ধরি $x^2 - px + q = 0$ ($p, q \\in \\mathbb{R}$)-এর মূল $\\alpha, \\beta$ যেন $\\alpha + 2\\beta = 0$; তবে:",
        options: ["$2p^2 + q = 0$", "$2q^2 + p = 0$", "$q < 0$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "$x^2 - 2px + q^2 = 0$ সমীকরণের মূলগুলির A.M., G.M. ও H.M. মূলবিশিষ্ট ত্রিঘাত সমীকরণটি হলো:",
        options: ["$(x-p)(x-q)(x-p-q) = 0$", "$(x-p)(x-|q|)(px-q^2) = 0$", "$x^3 - \\left(p+|q|+\\frac{q^2}{p}\\right)x^2 + \\left(p|q|+q^2+\\frac{|q|^3}{p}\\right)x - |q|^3 = 0$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 5,
        text: "যদি $\\alpha, \\beta$ সমীকরণ $x^2 + px + q = 0$ এবং $x^{2n} + p^n x^n + q^n = 0$-এর মূল হয় এবং $\\frac{\\alpha}{\\beta}, \\frac{\\beta}{\\alpha}$ সমীকরণ $x^n + 1 + (x+1)^n = 0$-এর মূল হয়, তবে $n$ হলো:",
        options: ["একটি বিজোড় পূর্ণসংখ্যা", "একটি জোড় পূর্ণসংখ্যা", "যেকোনো পূর্ণসংখ্যা", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "যদি $\\cos^4 x + \\sin^2 x - p = 0$ ($p \\in \\mathbb{R}$)-এর বাস্তব সমাধান থাকে, তবে:",
        options: ["$p \\le 1$", "$\\frac{3}{4} \\le p \\le 1$", "$p \\ge \\frac{3}{4}$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 7,
        text: "যদি $\\lambda x^2 + \\mu x + v = 0$ সমীকরণের মূলদ্বয়ের অনুপাত $x^2 + x + 1 = 0$-এর মূলদ্বয়ের অনুপাতের সমান হয়, তবে $\\lambda, \\mu, v$ রয়েছে:",
        options: ["A.P.-তে", "G.P.-তে", "H.P.-তে", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 8,
        text: "$p, q, r, s$ পূর্ণসংখ্যা। যদি $x^2 - px + q^2 = 0$-এর মূলগুলির A.M. এবং $x^2 - rx + s^2 = 0$-এর মূলগুলির G.M. সমান হয়, তবে:",
        options: ["$q$ একটি বিজোড় পূর্ণসংখ্যা", "$r$ একটি জোড় পূর্ণসংখ্যা", "$p$ একটি জোড় পূর্ণসংখ্যা", "$s$ একটি বিজোড় পূর্ণসংখ্যা"],
        correctAnswer: 2
      },
      {
        id: 9,
        text: "যদি $4x^2 + 5k = (5k+1)x$ সমীকরণের মূলদ্বয়ের অন্তর 1 হয়, তবে $k$-এর ঋণাত্মক মানটি হলো:",
        options: ["-3", "-1/5", "-3/5", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "$(5+\\sqrt{2})x^2 - (4+\\sqrt{5})x + 8 + 2\\sqrt{5} = 0$ সমীকরণের মূলগুলির বিপরীতীয় মধ্যক (H.M.) হলো:",
        options: ["2", "4", "6", "8"],
        correctAnswer: 1
      },
      {
        id: 11,
        text: "যদি $\\alpha, \\beta$ সমীকরণ $ax^2 + c = bx$-এর মূল হয়, তবে $(a+cy)^2 = b^2 y$ সমীকরণের $y$-এর মূলগুলি হলো:",
        options: ["$\\alpha^{-1}, \\beta^{-1}$", "$\\alpha^2, \\beta^2$", "$\\alpha\\beta^{-1}, \\alpha^{-1}\\beta$", "$\\alpha^{-2}, \\beta^{-2}$"],
        correctAnswer: 3
      },
      {
        id: 12,
        text: "যদি $ax^2 - bx - c = 0$ সমীকরণের মূলদ্বয় একই পরিমাণে পরিবর্তিত হয়, তবে $a, b, c$-এর কোন রাশিটি অপরিবর্তিত থাকে?",
        options: ["$\\frac{b^2 - 4ac}{a^2}$", "$\\frac{b - 4c}{a}$", "$\\frac{b^2 + 4ac}{a^2}$", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 13,
        text: "যদি $\\alpha, \\beta$ হলো $x^2 - px + q = 0$-এর মূল, তবে $\\alpha^2 - \\beta^2$ এবং $\\alpha^3 - \\beta^3$ মূলবিশিষ্ট দ্বিঘাত সমীকরণের মূলদ্বয়ের গুণফল হলো:",
        options: ["$p(p^2 - q)^2$", "$p(p^2 - q)(p^2 - 4q)$", "$p(p^2 - 4q)(p^2 + q)$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 14,
        text: "$x^2 + 7x - 1 = 0$ সমীকরণের মূলগুলির A.M. এবং H.M. মূলবিশিষ্ট দ্বিঘাত সমীকরণটি হলো:",
        options: ["$14x^2 + 14x - 45 = 0$", "$45x^2 - 14x + 14 = 0$", "$14x^2 + 45x - 14 = 0$", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 15,
        text: "যদি $z_0 = \\alpha + i\\beta$, তবে $x^3 - 2(1+\\alpha)x^2 + (4\\alpha+\\alpha^2+\\beta^2)x - 2(\\alpha^2+\\beta^2) = 0$ ত্রিঘাত সমীকরণের মূলগুলি হলো:",
        options: ["$2, z_0, \\bar{z}_0$", "$1, z_0, -z_0$", "$2, z_0, -z_0$", "$2, -z_0, \\bar{z}_0$"],
        correctAnswer: 0
      },
      {
        id: 16,
        text: "ধরি $a, b, c \\in \\mathbb{R}, a \\ne 0$। যদি $\\alpha$ হলো $a^2 x^2 + bx + c = 0$-এর মূল, $\\beta$ হলো $a^2 x^2 - bx - c = 0$-এর মূল এবং $0 < \\alpha < \\beta$ হয়, তবে $a^2 x^2 + 2bx + 2c = 0$-এর একটি মূল $\\gamma$ সর্বদা সিদ্ধ করে:",
        options: ["$\\gamma = \\frac{1}{2}(\\alpha+\\beta)$", "$\\gamma = \\alpha + \\frac{\\beta}{2}$", "$\\gamma = \\alpha$", "$\\alpha < \\gamma < \\beta$"],
        correctAnswer: 3
      },
      {
        id: 17,
        text: "যদি সকল $x \\in \\mathbb{R}$-এর জন্য $(\\lambda^2+\\lambda-2)x^2 + (\\lambda+2)x < 1$ হয়, তবে $\\lambda$ যে ব্যবধিতে থাকে:",
        options: ["$(-2, 1)$", "$\\left(-2, \\frac{2}{5}\\right)$", "$\\left(\\frac{2}{5}, 1\\right)$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 18,
        text: "সকল $x \\in \\mathbb{R}$-এর জন্য $(k-2)x^2 + 8x + k + 4 > 0$ হওয়ার জন্য $k$-এর ক্ষুদ্রতম পূর্ণসাংখ্যিক মান হলো:",
        options: ["5", "4", "3", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 19,
        text: "$\\lambda$-এর যে মানের সেটের জন্য $x^2 - (\\lambda^2 - 5\\lambda + 5)x + (2\\lambda^2 - 3\\lambda - 4) = 0$ সমীকরণের মূলদ্বয়ের যোগফল ও গুণফল উভয়ই 1-এর চেয়ে কম হয়, তা হলো:",
        options: ["$\\left(-1, \\frac{5}{2}\\right)$", "(1, 4)", "$\\left[1, \\frac{5}{2}\\right]$", "$\\left(1, \\frac{5}{2}\\right)$"],
        correctAnswer: 3
      },
      {
        id: 20,
        text: "$5^x + (2\\sqrt{3})^{2x} - 169$ রাশিটি সর্বদা ধনাত্মক হওয়ার জন্য $x$-এর মানের সেট হলো:",
        options: ["$[3, +\\infty)$", "$[2, +\\infty)$", "$(2, +\\infty)$", "কোনোটিই নয়"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'quad_jee_mock_7',
    title: '৫.১৭ দ্বিঘাত সমীকরণ JEE মক টেস্ট ৭ (Quadratic Equations JEE Mock 7)',
    topic: '৫. দ্বিঘাত সমীকরণ',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $4^x - (a-3)2^x + a - 4 = 0$ থেকে প্রাপ্ত $x$-এর সকল বাস্তব মান অ-ধনাত্মক হয়, তবে:",
        options: ["$a \\in (4, 5]$", "$a \\in (0, 4)$", "$a \\in (4, +\\infty)$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 2,
        text: "যদি $ax^2 + bx + 6 = 0$ ($a, b \\in \\mathbb{R}$) সমীকরণের দুটি ভিন্ন বাস্তব মূল না থাকে, তবে $3a + b$-এর সর্বনিম্ন মান হলো:",
        options: ["4", "-1", "1", "-2"],
        correctAnswer: 3
      },
      {
        id: 3,
        text: "যদি $ab = 2a + 3b$ ($a > 0, b > 0$) হয়, তবে $ab$-এর সর্বনিম্ন মান হলো:",
        options: ["12", "24", "1/4", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "$\\{x^2 - (k-2)x + k^2\\}\\{x^2 + kx + (2k-1)\\}$ রাশিটি একটি পূর্ণবর্গ রাশি হওয়ার জন্য $k$-এর মানের সংখ্যা:",
        options: ["1", "2", "0", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "যদি $x^2 - bx + c = 0$ সমীকরণের সমান পূর্ণসাংখ্যিক মূল থাকে, তবে:",
        options: ["$b$ এবং $c$ পূর্ণসংখ্যা", "$b$ এবং $c$ জোড় পূর্ণসংখ্যা", "$b$ জোড় পূর্ণসংখ্যা এবং $c$ একটি ধনাত্মক পূর্ণসংখ্যার পূর্ণবর্গ", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "ধরি দুটি ধনাত্মক সংখ্যা $a, b$-এর A.M., G.M. ও H.M. যথাক্রমে $A, G, H$। তবে $A$ ও $H$ মূলবিশিষ্ট দ্বিঘাত সমীকরণটি হলো:",
        options: ["$Ax^2 - (A^2+G^2)x + AG^2 = 0$", "$Ax^2 - (A^2+H^2)x + AH^2 = 0$", "$Hx^2 - (H^2+G^2)x + HG^2 = 0$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "যদি $x^2 + y^2 + z^2 = 1$ হয়, তবে $xy + yz + zx$-এর মান যে ব্যবধিতে থাকে:",
        options: ["$[1/2, 2]$", "[-1, 2]", "$[-1/2, 1]$", "$[-1, 1/2]$"],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "যদি $px^2 + qx + r = 0$ সমীকরণের কোনো বাস্তব মূল না থাকে এবং $p, q, r$ বাস্তব যেন $p + r > 0$, তবে:",
        options: ["$p - q + r < 0$", "$p - q + r > 0$", "$p + r = q$", "সবগুলিই সঠিক"],
        correctAnswer: 1
      },
      {
        id: 9,
        text: "$x^2 - 2x - \\lambda = 0$ ($\\lambda \\ne 0$) দ্বিঘাত সমীকরণটির:",
        options: ["বাস্তব মূল থাকতে পারে না যদি $\\lambda < -1$", "মূলদ মূল থাকতে পারে যদি $\\lambda$ পূর্ণবর্গ হয়", "পূর্ণসাংখ্যিক মূল থাকতে পারে না যদি $n^2 - 1 < \\lambda < n^2 + 2n$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 10,
        text: "$\\left(\\frac{\\gamma}{\\alpha}\\right)^2$ এবং $\\left(\\frac{\\beta}{\\alpha}\\right)^2$ মূলবিশিষ্ট দ্বিঘাত সমীকরণটি (যেখানে $\\alpha, \\beta, \\gamma$ হলো $x^3 + 27 = 0$-এর মূল) হলো:",
        options: ["$x^2 - x + 1 = 0$", "$x^2 + 3x + 9 = 0$", "$x^2 + x + 1 = 0$", "$x^2 - 3x + 9 = 0$"],
        correctAnswer: 2
      },
      {
        id: 11,
        text: "যদি $a, b$ হলো $x^2 + px + 1 = 0$-এর বাস্তব মূল এবং $c, d$ হলো $x^2 + qx + 1 = 0$-এর বাস্তব মূল, তবে $(a-c)(b-c)(a+d)(b+d)$ বিভাজ্য হবে:",
        options: ["$a+b+c+d$", "$a+b-c-d$", "$a-b+c-d$", "$a-b-c-d$"],
        correctAnswer: 0
      },
      {
        id: 12,
        text: "যদি $0 < a < 5, 0 < b < 5$ এবং $\\frac{x^2+5}{2} = x - 2\\cos(a+bx)$ অন্তত একটি বাস্তব $x$-এর জন্য সিদ্ধ হয়, তবে $a+b$-এর বৃহত্তম মান হলো:",
        options: ["$\\pi$", "$\\pi/2$", "$3\\pi$", "$4\\pi$"],
        correctAnswer: 2
      },
      {
        id: 13,
        text: "$a(x^2 - y^2) + \\lambda(xy + y + 1) + 1$-কে রৈখিক মূলদ উৎপাদকে বিশ্লেষণ করা সম্ভব হলে:",
        options: ["$\\lambda = 1$", "$\\lambda = \\frac{4a^2}{a-1}, a \\ne 1$", "$\\lambda = 0, a = 1$", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 14,
        text: "যদি $\\alpha, \\beta$ সমীকরণ $x^2 + x + 3 = 0$-এর মূল হয়, তবে $3x^2 + 5x + 3 = 0$ সমীকরণের একটি মূল হলো:",
        options: ["$\\frac{\\alpha}{\\beta}$", "$\\frac{\\beta}{\\alpha}$", "$\\frac{\\alpha}{\\beta} + \\frac{\\beta}{\\alpha}$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "যদি $\\alpha, \\beta$ হলো $x^2 - 2ax + b^2 = 0$-এর মূল এবং $\\gamma, \\delta$ হলো $x^2 - 2bx + a^2 = 0$-এর মূল, তবে:",
        options: ["$\\alpha, \\beta$-এর A.M. = $\\gamma, \\delta$-এর G.M.", "$\\alpha, \\beta$-এর G.M. = $\\gamma, \\delta$-এর A.M.", "$\\alpha, \\beta, \\gamma, \\delta$ A.P.-তে আছে", "$\\alpha, \\beta, \\gamma, \\delta$ G.P.-তে আছে"],
        correctAnswer: 0
      },
      {
        id: 16,
        text: "যদি $ax^2 - 4x + a^2 = 0$ সমীকরণের মূলগুলি কাল্পনিক হয় এবং মূলদ্বয়ের যোগফল তাদের গুণফলের সমান হয়, তবে $a =$",
        options: ["-2", "4", "2", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 17,
        text: "যদি $x^2 + bx + a = 0$ এবং $x^2 + ax + b = 0$ ($a \\ne b$) সমীকরণদ্বয়ের একটি সাধারণ মূল থাকে, তবে:",
        options: ["$a + b = 1$", "$a - b = 1$", "$a + b = -1$", "$a + b = 0$"],
        correctAnswer: 2
      },
      {
        id: 18,
        text: "যদি $x^2 + 2x + 3\\lambda = 0$ এবং $2x^2 + 3x + 5\\lambda = 0$ সমীকরণদ্বয়ের একটি অশূন্য সাধারণ মূল থাকে, তবে $\\lambda =$",
        options: ["2", "-1", "1", "3"],
        correctAnswer: 2
      },
      {
        id: 19,
        text: "যদি $x^2 + ax + 10 = 0$ এবং $x^2 + bx - 10 = 0$ সমীকরণের একটি সাধারণ মূল থাকে, তবে $a^2 - b^2 =$",
        options: ["10", "20", "30", "40"],
        correctAnswer: 3
      },
      {
        id: 20,
        text: "যদি $a_1 x^2 + b_1 x + c_1 = 0$ এবং $a_2 x^2 + b_2 x + c_2 = 0$ সমীকরণের একটি সাধারণ মূল থাকে, তবে $(a_1 b_2 - a_2 b_1)(b_1 c_2 - c_1 b_2)$-এর মান:",
        options: ["$-(a_1 c_2 - a_2 c_1)^2$", "$(a_1 a_2 - c_1 c_2)^2$", "$(a_1 c_1 - a_2 c_2)^2$", "$(a_1 c_2 - c_1 a_2)^2$"],
        correctAnswer: 3
      }
    ]
  },
  {
    id: 'quad_jee_mock_8',
    title: '৫.১৮ দ্বিঘাত সমীকরণ JEE মক টেস্ট ৮ (Quadratic Equations JEE Mock 8)',
    topic: '৫. দ্বিঘাত সমীকরণ',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $a_1 x^2 + b_1 x + c_1 = 0$ এবং $a_2 x^2 + b_2 x + c_2 = 0$ সমীকরণের মূলগুলি একই হয়, তবে:",
        options: ["$a_1 = a_2, b_1 = b_2, c_1 = c_2$", "$c_1 = c_2 = 0$", "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$", "$a_1 = b_1 = c_1; a_2 = b_2 = c_2$"],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "যদি $(k^2+1)x^2 + 13x + 4k = 0$ সমীকরণের একটি মূল অপরটির অন্যোন্যক হয়, তবে $k$-এর মান হলো:",
        options: ["$-2 + \\sqrt{3}$", "$2 - \\sqrt{3}$", "1", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "যদি $x^2 - 5x + 4^{\\log_2 \\lambda} = 0$ সমীকরণের মূলদ্বয়ের গুণফল 8 হয়, তবে $\\lambda =$",
        options: ["$\\pm 2\\sqrt{2}$", "$2\\sqrt{2}$", "3", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "যদি $x^2 + px + 1 = 0$ সমীকরণের মূলদ্বয়ের পরম অন্তর $\\sqrt{3}p$-কে অতিক্রম করে, তবে:",
        options: ["$p < -1$ বা $p > 4$", "$p > 4$", "$-1 < p < 4$", "$0 \\le p < 4$"],
        correctAnswer: 1
      },
      {
        id: 5,
        text: "যদি $\\alpha, \\beta$ হলো $x^2 + px + q = 0$-এর মূল এবং $\\gamma, \\delta$ হলো $x^2 + px - r = 0$-এর মূল, তবে $(\\alpha-\\gamma)(\\alpha-\\delta) =$",
        options: ["$q + r$", "$q - r$", "$-(q + r)$", "$-(p + q + r)$"],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "যদি $2x^2 + 3x + 5\\lambda = 0$ এবং $x^2 + 2x + 3\\lambda = 0$ সমীকরণদ্বয়ের একটি সাধারণ মূল থাকে, তবে $\\lambda =$",
        options: ["0", "-1", "0, -1", "2, -1"],
        correctAnswer: 2
      },
      {
        id: 7,
        text: "যদি $x^2 + px + q = 0$ এবং $x^2 + \\alpha x + \\beta = 0$ ($p \\ne \\alpha, q \\ne \\beta$) সমীকরণদ্বয়ের একটি সাধারণ মূল থাকে, তবে তার মান হবে:",
        options: ["$\\frac{q-\\beta}{\\alpha-p}$", "$\\frac{p\\beta - \\alpha q}{q-\\beta}$", "$\\frac{q-\\beta}{\\alpha-p}$ বা $\\frac{p\\beta - \\alpha q}{q-\\beta}$", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "যদি $ax^2 + bx + c = 0$ এবং $bx^2 + cx + a = 0$ ($a \\ne 0$)-এর একটি সাধারণ মূল থাকে, তবে $\\frac{a^3 + b^3 + c^3}{abc} =$",
        options: ["1", "2", "3", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 9,
        text: "যদি $x^2 + px + q = 0$ এবং $x^2 + qx + p = 0$ সমীকরণদ্বয়ের একটি সাধারণ মূল থাকে, তবে $p + q + 1 =$",
        options: ["0", "1", "2", "-1"],
        correctAnswer: 0
      },
      {
        id: 10,
        text: "যদি $x^2 + px + qr = 0$, $x^2 + qx + rp = 0$ এবং $x^2 + rx + pq = 0$ সমীকরণ তিনটির প্রতি জোড়ার একটি সাধারণ মূল থাকে, তবে তিনটি সাধারণ মূলের গুণফল হলো:",
        options: ["$pqr$", "$2pqr$", "$p^2 q^2 r^2$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "যদি $x^2 + px + qr = 0$ এবং $x^2 + qx + pr = 0$ সমীকরণের একটি সাধারণ মূল থাকে, তবে তাদের অন্য মূলদ্বয়ের যোগফল ও গুণফল যথাক্রমে:",
        options: ["$r, pq$", "$-r, pq$", "$pq, r$", "$-pq, r$"],
        correctAnswer: 1
      },
      {
        id: 12,
        text: "$a$-এর যে মানের জন্য $x^3 + ax + 1 = 0$ এবং $x^4 + ax^2 + 1 = 0$ সমীকরণদ্বয়ের একটি সাধারণ মূল থাকে, তা হলো:",
        options: ["2", "-2", "0", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 13,
        text: "যদি $ax^2 + bx + c = 0$ এবং $cx^2 + bx + a = 0$ ($a \\ne c$) সমীকরণের একটি ঋণাত্মক সাধারণ মূল থাকে, তবে $a - b + c$-এর মান:",
        options: ["0", "2", "1", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 14,
        text: "যদি $x^2 + ax + b = 0$ এবং $x^2 + bx + a = 0$ ($a \\ne b$)-এর একটি সাধারণ মূল $\\alpha$ হয়, তবে:",
        options: ["$a + b = 1$", "$\\alpha + 1 = 0$", "$\\alpha = 1$", "$a + b + 1 = 0$"],
        correctAnswer: 2
      },
      {
        id: 15,
        text: "যদি $\\alpha$ সমীকরণ $2x(2x+1) = 1$-এর একটি মূল হয়, তবে অপর মূলটি হলো:",
        options: ["$3\\alpha^3 - 4\\alpha$", "$-2\\alpha(\\alpha+1)$", "$4\\alpha^3 - 3\\alpha$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "$x^3 + 2x^2 + 2x + 1 = 0$ এবং $1 + x^{130} + x^{1988} = 0$ সমীকরণদ্বয়ের সাধারণ মূলগুলি হলো (যেখানে $\\omega$ হলো ১-এর কাল্পনিক ঘনমূল):",
        options: ["$\\omega$", "$\\omega^2$", "-1", "$\\omega - \\omega^2$"],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "যদি $a, b, c$ মূলদ ও অসমান হয়, তবে $(b-c)x^2 + (c-a)x + a - b = 0$ এবং $a(b-c)x^2 + b(c-a)x + c(a-b) = 0$ সমীকরণদ্বয়:",
        options: ["মূলদ মূলবিশিষ্ট", "অন্তত একটির মূলদ মূল থাকবে", "ঠিক একটি সাধারণ মূল আছে", "অন্তত একটি সাধারণ মূল আছে"],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "যদি $ax^2 + bx + c = 0$ এবং $x^3 + 3x^2 + 3x + 2 = 0$ সমীকরণদ্বয়ের দুটি সাধারণ মূল থাকে, তবে:",
        options: ["$a = b \\ne c$", "$a = -b = c$", "$a = b = c$", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 19,
        text: "যদি $ax^2 + bx + a = 0$ এবং $x^3 - 2x^2 + 2x - 1 = 0$ সমীকরণদ্বয়ের দুটি সাধারণ মূল থাকে, তবে $a + b$ অবশ্যই সমান হবে:",
        options: ["1", "-1", "0", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 20,
        text: "যদি $a, b, c$ গুণোত্তর প্রগমনে থাকে, তবে $ax^2 + 2bx + c = 0$ এবং $dx^2 + 2ex + f = 0$-এর একটি সাধারণ মূল থাকবে যদি $\\frac{d}{a}, \\frac{e}{b}, \\frac{f}{c}$ থাকে:",
        options: ["A.P.-তে", "G.P.-তে", "H.P.-তে", "কোনোটিই নয়"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'quad_jee_mock_9',
    title: '৫.১৯ দ্বিঘাত সমীকরণ JEE মক টেস্ট ৯ (Quadratic Equations JEE Mock 9)',
    topic: '৫. দ্বিঘাত সমীকরণ',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $x^2 + ix + a = 0$ এবং $x^2 - 2x + ia = 0$ ($a \\ne 0$)-এর একটি সাধারণ মূল থাকে, তবে:",
        options: ["$a$ বাস্তব", "$a = \\frac{1}{2} + i$", "$a = \\frac{1}{2} - i$", "অন্য মূলটিও সাধারণ হবে"],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "যদি $x^2 - 2r p_r x + r = 0$ ($r = 1, 2, 3$) সমীকরণ তিনটির প্রতি জোড়ার ঠিক একটি সাধারণ মূল থাকে, তবে ট্রিপলেট $(p_1, p_2, p_3)$-এর সমাধান সংখ্যা হলো:",
        options: ["2", "1", "9", "27"],
        correctAnswer: 0
      },
      {
        id: 3,
        text: "যদি $x, y, z$ একটি গুণোত্তর প্রগমনের (G.P.) তিনটি ক্রমিক পদ হয় ($x > 0$, সাধারণ অনুপাত $r$), তবে $z + 3x > 4y$ অসমতাটি সিদ্ধ হয় যদি:",
        options: ["$r \\in (-\\infty, 1)$", "$r = \\frac{24}{5}$", "$r \\in (3, +\\infty)$", "$r = \\frac{1}{2}$"],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "$x$ বাস্তব হলে $x^2 - 6x + 13$-এর মান কার চেয়ে কম হবে না?",
        options: ["4", "6", "7", "8"],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "$x$ বাস্তব হলে $x^2 - 6x + 10$-এর সর্বনিম্ন মান হলো:",
        options: ["1", "2", "3", "10"],
        correctAnswer: 0
      },
      {
        id: 6,
        text: "$(-3, 3/2)$ ব্যবধিতে $x^2 - 3x + 3$-এর ক্ষুদ্রতম মান হলো:",
        options: ["3/4", "5", "-15", "-20"],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "যদি $x = 2 + 2^{1/3} + 2^{2/3}$ হয়, তবে $x^3 - 6x^2 + 6x$ কার সমান?",
        options: ["2", "-2", "0", "1"],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "$x$ বাস্তব হলে $x^2 - 8x + 17$-এর সর্বনিম্ন মান হলো:",
        options: ["-1", "0", "1", "2"],
        correctAnswer: 2
      },
      {
        id: 9,
        text: "$x$ বাস্তব হলে $5 + 4x - 4x^2$-এর সর্বোচ্চ মান হবে:",
        options: ["5", "6", "1", "2"],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "$ax^2 + bx + c$ রাশির চিহ্ন '$a$'-এর চিহ্নের অনুরূপ হবে যদি:",
        options: ["$b^2 - 4ac > 0$", "$b^2 - 4ac = 0$", "$b^2 - 4ac \\le 0$", "$b$ এবং $c$-এর চিহ্ন $a$-এর অনুরূপ হয়"],
        correctAnswer: 2
      },
      {
        id: 11,
        text: "$x^2 + 2bx + c$-এর মান সর্বদা ধনাত্মক হবে যদি:",
        options: ["$b^2 - 4c > 0$", "$b^2 - 4c < 0$", "$c^2 < b$", "$b^2 < c$"],
        correctAnswer: 3
      },
      {
        id: 12,
        text: "$a$-এর যে মানের জন্য $(a^2-1)x^2 + 2(a-1)x + 2$ যেকোনো বাস্তব $x$-এর জন্য ধনাত্মক হয়, তা হলো:",
        options: ["$a \\ge 1$", "$a \\le 1$", "$a > -3$", "$a < -3$ বা $a > 1$"],
        correctAnswer: 3
      },
      {
        id: 13,
        text: "$x$ বাস্তব হলে $\\frac{x^2 - 3x + 4}{x^2 + 3x + 4}$ রাশিটির সর্বোচ্চ ও সর্বনিম্ন মান হবে:",
        options: ["2, 1", "5, 1/5", "7, 1/7", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 14,
        text: "$x$ বাস্তব হলে $\\frac{x^2 + 34x - 71}{x^2 + 2x - 7}$-এর মান যে দুটি সংখ্যার মাঝে থাকবে না:",
        options: ["-9 এবং -5", "-5 এবং 9", "0 এবং 9", "5 এবং 9"],
        correctAnswer: 3
      },
      {
        id: 15,
        text: "সংলগ্ন চিত্রে $y = ax^2 + bx + c$-এর লেখচিত্র দেখানো হয়েছে। তবে:",
        options: ["$a < 0$", "$b^2 < 4ac$", "$c > 0$", "$a$ এবং $b$ বিপরীত চিহ্নযুক্ত"],
        correctAnswer: 3
      },
      {
        id: 16,
        text: "যদি $x + 2$ রাশিটি $px^2 + qx + r$ এবং $qx^2 + px + r$-এর একটি সাধারণ উৎপাদক হয়, তবে:",
        options: ["$p = q = r$", "$p = q$ বা $p + q + r = 0$", "$p = r$ বা $p + q + r = 0$", "$q = r$ বা $p + q + r = 0$"],
        correctAnswer: 1
      },
      {
        id: 17,
        text: "$x^2 - 11x + a$ এবং $x^2 - 14x + 2a$-এর একটি সাধারণ উৎপাদক থাকবে যদি $a =$",
        options: ["24", "0, 24", "3, 24", "0, 3"],
        correctAnswer: 1
      },
      {
        id: 18,
        text: "যদি $x^2 - 3x + 2$ রাশিটি $x^4 - px^2 + q$-এর একটি উৎপাদক হয়, তবে:",
        options: ["$p = 4, q = 5$", "$p = 5, q = 4$", "$p = -5, q = -4$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 19,
        text: "যদি $x + 1$ রাশিটি $x^4 - (p-3)x^3 - (3p-5)x^2 + (2p-7)x + 6$-এর একটি উৎপাদক হয়, তবে $p =$",
        options: ["-4", "4", "-1", "1"],
        correctAnswer: 1
      },
      {
        id: 20,
        text: "যদি $x^2 + px + 1$ রাশিটি $ax^3 + bx + c$-এর একটি উৎপাদক হয়, তবে:",
        options: ["$a^2 + c^2 = -ab$", "$a^2 - c^2 = -ab$", "$a^2 - c^2 = ab$", "কোনোটিই নয়"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'quad_jee_mock_10',
    title: '৫.২০ দ্বিঘাত সমীকরণ JEE মক টেস্ট ১০ (Quadratic Equations JEE Mock 10)',
    topic: '৫. দ্বিঘাত সমীকরণ',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "$x^3 - 3px + 2q$ রাশিটি $x^2 + 2ax + a^2$ আকারের একটি উৎপাদক দ্বারা বিভাজ্য হওয়ার শর্ত হলো:",
        options: ["$3p = 2q$", "$3p + 2q = 0$", "$p^3 = q^2$", "$27p^3 = 4q^2$"],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "$x$ বাস্তব হলে $\\frac{(x-a)(x-b)}{x-c}$ সকল বাস্তব মান গ্রহণ করবে যখন:",
        options: ["$a < b < c$", "$a > b > c$", "$a < c < b$", "সর্বদা"],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "ধরি $y = \\sqrt{\\frac{(x+1)(x-3)}{x-2}}$; তবে $x$-এর যে সকল বাস্তব মানের জন্য $y$ বাস্তব মান গ্রহণ করে তা হলো:",
        options: ["$-1 \\le x < 2$ বা $x \\ge 3$", "$-1 \\le x < 3$ বা $x > 2$", "$1 \\le x < 2$ বা $x \\ge 3$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "$x^2 = 3x - y - 2$ বক্ররেখার লেখচিত্রটি:",
        options: ["$x = 1$ এবং $x = 3/2$ রেখার মধ্যে", "$x = 1$ এবং $x = 2$ রেখার মধ্যে", "$4y = 1$ রেখার সম্পূর্ণ নিচে", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "যদি $x^2 + px + 1$ রাশিটি $ax^3 + bx + c$-এর একটি উৎপাদক হয়, তবে:",
        options: ["$a^2 + c^2 = -ab$", "$a^2 - c^2 = -ab$", "$a^2 - c^2 = ab$", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "যদি $x + \\lambda y - 2$ এবং $x - \\mu y + 1$ রাশিদ্বয় $6x^2 - xy - y^2 - 6x + 8y - 12$-এর উৎপাদক হয়, তবে:",
        options: ["$\\lambda = \\frac{1}{3}, \\mu = \\frac{1}{2}$", "$\\lambda = 2, \\mu = 3$", "$\\lambda = \\frac{1}{3}, \\mu = -\\frac{1}{2}$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "সকল বাস্তব $x$-এর জন্য $\\frac{x^2-2x+4}{x^2+2x+4}$ রাশিটির মান $\\frac{1}{3}$ এবং 3-এর মধ্যে থাকলে, $\\frac{9 \\cdot 3^{2x} + 6 \\cdot 3^x + 4}{9 \\cdot 3^{2x} - 6 \\cdot 3^x + 4}$ যে ব্যবধিতে থাকবে:",
        options: ["$\\frac{1}{3}$ এবং 3", "-2 এবং 0", "-1 এবং 1", "0 এবং 2"],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "যদি $x, y, z$ বাস্তব ও ভিন্ন হয়, তবে $u = x^2 + 4y^2 + 9z^2 - 6yz - 3zx - 2xy$ সর্বদা:",
        options: ["অঋণাত্মক", "অ-ধনাত্মক", "শূন্য", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "যদি $x + y$ এবং $y + 3x$ রাশিদ্বয় $\\lambda x^3 - \\mu x^2 y + xy^2 + y^3$-এর দুটি উৎপাদক হয়, তবে তৃতীয় উৎপাদকটি হলো:",
        options: ["$y + 3x$", "$y - 3x$", "$y - x$", "কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "যদি $\\log_{10} x + \\log_{10} y \\ge 2$ হয়, তবে $x + y$-এর ক্ষুদ্রতম সম্ভাব্য মান হলো:",
        options: ["10", "30", "20", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 11,
        text: "যদি $[\\sin x] = |x|$-এর সমাধানের সংখ্যা $\\alpha$ হয় এবং $[-1, 1]$ ব্যবধিতে $\\cos(x^2+xe^x-[x])$-এর বৃহত্তম মান $m$ হয়, তবে:",
        options: ["$\\alpha = m$", "$\\alpha < m$", "$\\alpha > m$", "$\\alpha \\ne m$"],
        correctAnswer: 0
      },
      {
        id: 12,
        text: "যদি $f(x) = 3^x + 4^x + 5^x - 6^x$ হয়, তবে $f(x) < f(3)$ সত্য হবে:",
        options: ["$x$-এর কেবল একটি মানের জন্য", "$x$-এর কোনো মানের জন্য নয়", "$x$-এর কেবল দুটি মানের জন্য", "$x$-এর অসংখ্য মানের জন্য"],
        correctAnswer: 3
      },
      {
        id: 13,
        text: "যদি $f(x) = \\sum_{r=0}^{100} a_r x^r$ এবং $f(0)$ ও $f(1)$ বিজোড় সংখ্যা হয়, তবে যেকোনো পূর্ণসংখ্যা $x$-এর জন্য:",
        options: ["$f(x)$ বিজোড় বা জোড় হবে $x$ বিজোড় বা জোড় হওয়ার প্রেক্ষিতে", "$f(x)$ জোড় বা বিজোড় হবে $x$ বিজোড় বা জোড় হওয়ার প্রেক্ষিতে", "$x$-এর সকল পূর্ণসাংখ্যিক মানের জন্য $f(x)$ জোড়", "$x$-এর সকল পূর্ণসাংখ্যিক মানের জন্য $f(x)$ বিজোড়"],
        correctAnswer: 3
      },
      {
        id: 14,
        text: "যদি $x \\in [2, 4]$ হয়, তবে $x^2 - 6x + 5$ রাশিটির জন্য:",
        options: ["সর্বনিম্ন মান = -4", "সর্বোচ্চ মান = 4", "সর্বনিম্ন মান = 3", "সর্বোচ্চ মান = -3"],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "$a$-এর যে মানের জন্য $(a^2-1)x^2 + 2(a-1)x + 2$ যেকোনো $x$-এর জন্য ধনাত্মক হয়, তা হলো:",
        options: ["$a \\ge 1$", "$a \\le 1$", "$a \\ge -3$", "$a \\le -3$ বা $a \\ge 1$"],
        correctAnswer: 3
      },
      {
        id: 16,
        text: "ধরি $f(x)$ একটি দ্বিঘাত রাশি যা সকল বাস্তব $x$-এর জন্য ধনাত্মক; তবে সকল বাস্তব $x$-এর জন্য $10[f(x) + f(-x)]$-এর মান:",
        options: ["> 0", "$\\ge 0$", "< 0", "$\\le 0$"],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "$n \\to \\infty$ হলে $\\sum_{k=1}^n \\left(x - \\frac{1}{k+1}\\right)\\left(x - \\frac{1}{k}\\right)$ দ্বিঘাত রাশিটির ধ্রুবক পদ হবে:",
        options: ["-1", "0", "1", "কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 18,
        text: "ধরি $f(x) = (1+b^2)x^2 + 2bx + 1$ এবং $m(b)$ হলো $f(x)$-এর সর্বনিম্ন মান। $b$ পরিবর্তিত হলে $m(b)$-এর পাল্লা (range) হলো:",
        options: ["[0, 1]", "[0, 1/2]", "[1/2, 1]", "(0, 1]"],
        correctAnswer: 3
      },
      {
        id: 19,
        text: "যদি $p(x)$ একটি বহুপদী হয় যা $p(x^2) + 2x^2 + 10x = 2xp(x+1) + 3$ অভেদকে সিদ্ধ করে, তবে $p(x) =$",
        options: ["$2x + 3$", "$3x - 4$", "$3x + 2$", "$2x - 3$"],
        correctAnswer: 0
      },
      {
        id: 20,
        text: "ধরি $y = \\frac{\\sin x \\cos 3x}{\\cos x \\sin 3x}$; তবে $y$-এর সম্ভাব্য মানের সেট হলো:",
        options: ["$y = \\frac{1}{3}$ হতে পারে", "$y = 3$ হতে পারে", "$\\left(-\\infty, \\frac{1}{3}\\right) \\cup (3, \\infty)$", "$\\left(-\\infty, \\frac{1}{3}\\right] \\cup (3, \\infty)$"],
        correctAnswer: 2
      }
    ]
  }
];
