import { Test } from '../testData';
import { topic4JeeTests } from './topic4_complex_numbers_jee';

const baseTopic4Tests: Test[] = [
  {
    id: 'complex_mock_1',
    title: '৪.১ জটিল রাশি মক টেস্ট ১ (Complex Numbers Mock 1)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "$\\sqrt{-2} \\sqrt{-3} =$ কত?",
        options: ["$\\sqrt{6}$", "$-\\sqrt{6}$", "$i\\sqrt{6}$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "$(1 + i)^5 \\times (1 - i)^5$ এর মান কত?",
        options: ["$-8$", "$8i$", "$8$", "$32$"],
        correctAnswer: 3
      },
      {
        id: 3,
        text: "$(1 + i)^4 + (1 - i)^4 =$ কত?",
        options: ["$8$", "$-8$", "$4$", "$-4$"],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "$(1 + i)^8 + (1 - i)^8$ এর মান হলো:",
        options: ["$16$", "$-16$", "$32$", "$-32$"],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "$(1 + i)^6 + (1 - i)^6$ এর মান কত?",
        options: ["$0$", "$2^7$", "$2^6$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 6,
        text: "$(1 + i)^{10}$ এর মান কত? (যেখানে $i^2 = -1$)",
        options: ["$32i$", "$64 + i$", "$24i - 32$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "যদি $i = \\sqrt{-1}$ হয়, তবে $1 + i^2 + i^3 - i^6 + i^8$ এর মান কত?",
        options: ["$2 - i$", "$1$", "$3$", "$-1$"],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "$\\frac{i^{592} + i^{590} + i^{588} + i^{586} + i^{584}}{i^{582} + i^{580} + i^{578} + i^{576} + i^{574}} - 1$ এর মান কত?",
        options: ["$-1$", "$-2$", "$-3$", "$-4$"],
        correctAnswer: 1
      },
      {
        id: 9,
        text: "যদি $i^2 = -1$ হয়, তবে $i + i^2 + i^3 + \\dots$ ধারাটির ১০০০তম পদ পর্যন্ত যোগফল কত?",
        options: ["$1$", "$-1$", "$i$", "$0$"],
        correctAnswer: 3
      },
      {
        id: 10,
        text: "যদি $(1 - i)^n = 2^n$ হয়, তবে $n$ এর মান কত?",
        options: ["$1$", "$0$", "$-1$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 11,
        text: "যদি $\\left(\\frac{1+i}{1-i}\\right)^m = 1$ হয়, তবে $m$ এর ক্ষুদ্রতম অখণ্ড মান কত?",
        options: ["$2$", "$4$", "$8$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 12,
        text: "ক্ষুদ্রতম ধনাত্মক পূর্ণসংখ্যা $n$ কত যার জন্য $\\left(\\frac{1-i}{1+i}\\right)^n$ একটি বাস্তব সংখ্যা হবে?",
        options: ["$2$", "$3$", "$4$", "$5$"],
        correctAnswer: 0
      },
      {
        id: 13,
        text: "$i^2 + i^4 + i^6 + \\dots$ ধারাটির $(2n+1)$ পদ পর্যন্ত যোগফল কত?",
        options: ["$i$", "$-i$", "$1$", "$-1$"],
        correctAnswer: 3
      },
      {
        id: 14,
        text: "$\\sum_{n=1}^{13} (i^n + i^{n+1})$ এর মান কত? (যেখানে $i = \\sqrt{-1}$)",
        options: ["$i$", "$i-1$", "$-i$", "$0$"],
        correctAnswer: 1
      },
      {
        id: 15,
        text: "$i^{1+3+5+\\dots+(2n+1)}$ এর মান হলো:",
        options: ["$i$ যদি $n$ জোড় হয়", "$1$ যদি $n$ জোড় হয়", "$1$ যদি $n$ বিজোড় হয়", "$i$ যদি $n$ জোড় হয়"],
        correctAnswer: 2
      },
      {
        id: 16,
        text: "$i^{57} + \\frac{1}{i^{125}}$ কে সরল করলে মান পাওয়া যাবে:",
        options: ["$0$", "$2i$", "$-2i$", "$2$"],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "$\\frac{(1-i)^3}{1-i^3}$ সংখ্যাটি কার সমান?",
        options: ["$i$", "$-1$", "$1$", "$-2$"],
        correctAnswer: 3
      },
      {
        id: 18,
        text: "$(1 + i)^6 + (1 - i)^3$ এর মান কত?",
        options: ["$2 + i$", "$2 - 10i$", "$-2 + i$", "$-2 - 10i$"],
        correctAnswer: 3
      },
      {
        id: 19,
        text: "যদি $(a + ib)^5 = \\alpha + i\\beta$ হয়, তবে $(b + ia)^5$ এর মান কত?",
        options: ["$\\beta + i\\alpha$", "$\\alpha - i\\beta$", "$\\beta - i\\alpha$", "$-\\alpha - i\\beta$"],
        correctAnswer: 0
      },
      {
        id: 20,
        text: "একটি ধনাত্মক পূর্ণসংখ্যা $n$ এর জন্য, $(1 - i)^n \\left(1 - \\frac{1}{i}\\right)^n$ এর মান কত?",
        options: ["$0$", "$2i^n$", "$2^n$", "$4^n$"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'complex_mock_2',
    title: '৪.২ জটিল রাশি মক টেস্ট ২ (Complex Numbers Mock 2)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "ক্ষুদ্রতম ধনাত্মক পূর্ণসংখ্যা $n$ কত যার জন্য $\\left(\\frac{1+i}{1-i}\\right)^n = -1$ হবে?",
        options: ["$1$", "$2$", "$3$", "$4$"],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "ক্ষুদ্রতম ধনাত্মক পূর্ণসংখ্যা $n$ কত যার জন্য $\\left(\\frac{2i}{1+i}\\right)^n$ একটি ধনাত্মক পূর্ণসংখ্যা হবে?",
        options: ["$2$", "$4$", "$8$", "$16$"],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "$(a + ib) < (c + id)$ উক্তিটি সঠিক হবে যদি:",
        options: ["$a^2 + b^2 = 0$", "$b^2 + c^2 = 0$", "$a^2 + c^2 = 0$", "$b^2 + d^2 = 0$"],
        correctAnswer: 3
      },
      {
        id: 4,
        text: "সঠিক উক্তিটি বেছে নিন:",
        options: ["$1 - i < 1 + i$", "$2i + 1 > -2i + 1$", "$2i > 1$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 3
      },
      {
        id: 5,
        text: "জটিল সংখ্যা $\\frac{1+2i}{1-i}$ জটিল তলের কোন পাদভাগে অবস্থিত?",
        options: ["প্রথম", "দ্বিতীয়", "তৃতীয়", "চতুর্থ"],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "যদি $|z| = 1$ এবং $\\omega = \\frac{z-1}{z+1}$ হয়, তবে $Re(\\omega)$ হলো:",
        options: ["$0$", "$\\frac{1}{|z+1|^2}$", "$\\frac{z}{|z+1|^2}$", "$\\frac{\\sqrt{2}}{|z+1|^2}$"],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "$\\frac{3+2i\\sin\\theta}{1-2i\\sin\\theta}$ রাশিটি সম্পূর্ণ কাল্পনিক হবে যদি $\\theta$ হয়:",
        options: ["$2n\\pi \\pm \\frac{\\pi}{3}$", "$n\\pi + \\frac{\\pi}{3}$", "$n\\pi \\pm \\frac{\\pi}{3}$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "যদি $z \\neq 0$ একটি জটিল সংখ্যা হয়, তবে নিচের কোনটি সঠিক?",
        options: ["$Re(z) = 0 \\implies Im(z^2) = 0$", "$Re(z^2) = 0 \\implies Im(z^2) = 0$", "$Re(z) = 0 \\implies Re(z^2) = 0$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "যদি $z_1$ এবং $z_2$ দুটি জটিল সংখ্যা হয়, তবে $Re(z_1 z_2) = $ কত?",
        options: ["$Re(z_1) Re(z_2)$", "$Re(z_1) Im(z_2)$", "$Im(z_1) Re(z_2)$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 3
      },
      {
        id: 10,
        text: "$\\frac{1}{1 - \\cos\\theta + i\\sin\\theta}$ এর বাস্তব অংশ কত?",
        options: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\tan\\frac{\\theta}{2}$", "$\\frac{1}{1-\\cos\\theta}$"],
        correctAnswer: 1
      },
      {
        id: 11,
        text: "একটি সংখ্যার গুণজ বিপরীত যদি সংখ্যাটি নিজেই হয়, তবে এর মান:",
        options: ["$i$", "$-1$", "$2$", "$-i$"],
        correctAnswer: 1
      },
      {
        id: 12,
        text: "যদি $z = 1 + i$ হয়, তবে $z^2$ এর গুণজ বিপরীত কত?",
        options: ["$2i$", "$1 - i$", "$-\\frac{i}{2}$", "$\\frac{i}{2}$"],
        correctAnswer: 2
      },
      {
        id: 13,
        text: "যদি $a = \\cos\\theta + i\\sin\\theta$ হয়, তবে $\\frac{1+a}{1-a} =$ কত?",
        options: ["$\\cot\\theta$", "$\\cot\\frac{\\theta}{2}$", "$i\\cot\\frac{\\theta}{2}$", "$i\\tan\\frac{\\theta}{2}$"],
        correctAnswer: 2
      },
      {
        id: 14,
        text: "যদি $z = x - iy$ এবং $z^{1/3} = p + iq$ হয়, তবে $(\\frac{x}{p} + \\frac{y}{q}) / (p^2 + q^2)$ এর মান:",
        options: ["$-2$", "$-1$", "$2$", "$1$"],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "যদি $(x + iy)^{1/3} = a + ib$ হয়, তবে $\\frac{x}{a} + \\frac{y}{b}$ এর মান কত?",
        options: ["$4(a^2 + b^2)$", "$4(a^2 - b^2)$", "$4(b^2 - a^2)$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "যদি $\\sqrt{3} + i = (a + ib)(c + id)$ হয়, তবে $\\tan^{-1}(\\frac{b}{a}) + \\tan^{-1}(\\frac{d}{c})$ এর মান কত?",
        options: ["$\\frac{\\pi}{3} + 2n\\pi$", "$n\\pi + \\frac{\\pi}{6}$", "$n\\pi - \\frac{\\pi}{3}$", "$2n\\pi - \\frac{\\pi}{3}$"],
        correctAnswer: 1
      },
      {
        id: 17,
        text: "$1 - i$ এর যোগজ বিপরীত হলো:",
        options: ["$0 + 0i$", "$-1 - i$", "$-1 + i$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 18,
        text: "যদি $a^2 + b^2 = 1$ হয়, তবে $\\frac{1+b+ia}{1+b-ia}$ এর মান কত?",
        options: ["$1$", "$2$", "$b + ia$", "$a + ib$"],
        correctAnswer: 2
      },
      {
        id: 19,
        text: "$\\frac{(1+i)(2+i)}{(3+i)}$ এর মান কত?",
        options: ["$-\\frac{1}{2}$", "$\\frac{1}{2}$", "$1$", "$-1$"],
        correctAnswer: 2
      },
      {
        id: 20,
        text: "$\\left\\{\\frac{2i}{1+i}\\right\\}^2$ এর মান হলো:",
        options: ["$1$", "$2i$", "$1 - i$", "$1 - 2i$"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'complex_mock_3',
    title: '৪.৩ জটিল রাশি মক টেস্ট ৩ (Complex Numbers Mock 3)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $Z_1 = (4, 5)$ এবং $Z_2 = (-3, 2)$ হয়, তবে $Z_1/Z_2$ কত?",
        options: ["$(-23/12, -2/13)$", "$(2/13, -23/13)$", "$(-2/13, -23/13)$", "$(-2/13, 23/13)$"],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "যদি $x + \\frac{1}{x} = 2\\cos\\theta$ হয়, তবে $x$ এর মান কত?",
        options: ["$\\cos\\theta + i\\sin\\theta$", "$\\cos\\theta - i\\sin\\theta$", "$\\cos\\theta \\pm i\\sin\\theta$", "$\\sin\\theta \\pm i\\cos\\theta$"],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "$a^2 - 2a\\sin x + 1 = 0$ সমীকরণটিকে সিদ্ধ করে এমন $a$ এর বাস্তব মানের সংখ্যা:",
        options: ["শূন্য", "এক", "দুই", "অসীম"],
        correctAnswer: 2
      },
      {
        id: 4,
        text: "$3^x - 2yi = 9^x - 7i$ সমীকরণটি সমাধান করলে বাস্তব $x$ ও $y$ এর মান হবে:",
        options: ["$x=0.5, y=3.5$", "$x=5, y=3$", "$x=1/2, y=7$", "$x=0, y=7$"],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "$\\frac{1-i}{1+i}$ রাশিটি কার সমান?",
        options: ["$\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}$", "$\\cos\\frac{\\pi}{2} - i\\sin\\frac{\\pi}{2}$", "$\\sin\\frac{\\pi}{2} + i\\cos\\frac{\\pi}{2}$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "$\\frac{(1+i)x-2i}{3+i} + \\frac{(2-3i)y+i}{3-i} = i$ সমীকরণটি সিদ্ধকারী $x$ ও $y$ এর মান কত?",
        options: ["$x=-1, y=3$", "$x=3, y=-1$", "$x=0, y=1$", "$x=1, y=0$"],
        correctAnswer: 1
      },
      {
        id: 7,
        text: "যদি $x + iy = \\frac{3}{2+\\cos\\theta + i\\sin\\theta}$ হয়, তবে $x^2 + y^2$ কত?",
        options: ["$3x - 4$", "$4x - 3$", "$4x + 3$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 8,
        text: "যদি $\\frac{5(-8+6i)}{(1+i)^2} = a+ib$ হয়, তবে $(a, b)$ কত?",
        options: ["$(15, 20)$", "$(20, 15)$", "$(-15, 20)$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "যদি $x = -5 + 2\\sqrt{-4}$ হয়, তবে $x^4 + 9x^3 + 35x^2 - x + 4$ এর মান কত?",
        options: ["$160$", "$-160$", "$60$", "$-60$"],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "যদি $\\begin{vmatrix} 6i & -3i & 1 \\\\ 4 & 3i & -1 \\\\ 20 & 3 & i \\end{vmatrix} = x + iy$ হয়, তবে $(x, y)$ কত?",
        options: ["$(3, 1)$", "$(1, 3)$", "$(0, 3)$", "$(0, 0)$"],
        correctAnswer: 3
      },
      {
        id: 11,
        text: "যদি $\\left( \\frac{1-i}{1+i} \\right)^{100} = a+ib$ হয়, তবে:",
        options: ["$a=2, b=-1$", "$a=1, b=0$", "$a=0, b=1$", "$a=-1, b=2$"],
        correctAnswer: 1
      },
      {
        id: 12,
        text: "$(x+iy)(2-3i) = 4+i$ সমীকরণটি সিদ্ধ করে এমন $x$ ও $y$ এর বাস্তব মান হলো:",
        options: ["$x=5/13, y=8/13$", "$x=8/13, y=5/13$", "$x=5/13, y=14/13$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 13,
        text: "$|z|-z = 1+2i$ সমীকরণের সমাধান হলো:",
        options: ["$z = 3/2 - 2i$", "$z = 3/2 + 2i$", "$z = 2i - 3/2$", "$z = -2 + 3/2i$"],
        correctAnswer: 3
      },
      {
        id: 14,
        text: "নিচের কোনটি একটি জটিল সংখ্যার ক্ষেত্রে প্রযোজ্য নয়?",
        options: ["যোগ", "বিয়োগ", "ভাগ", "অসমতা (Inequality)"],
        correctAnswer: 3
      },
      {
        id: 15,
        text: "অশূন্য জটিল সংখ্যা $x+iy$ এর গুণজ বিপরীত কত?",
        options: ["$\\frac{x-iy}{x+y}$", "$\\frac{x-iy}{x^2+y^2}$", "$\\frac{x+iy}{x^2+y^2}$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "$\\alpha$ এর কোন বাস্তব মানের জন্য $\\frac{1-i\\sin\\alpha}{1+2i\\sin\\alpha}$ রাশিটি সম্পূর্ণ বাস্তব হবে?",
        options: ["$(n+1)\\frac{\\pi}{2}$", "$(2n+1)\\frac{\\pi}{2}$", "$n\\pi$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 17,
        text: "$\\theta$ এর কোন বাস্তব মানের জন্য $\\frac{1+i\\cos\\theta}{1-2i\\cos\\theta}$ রাশিটি একটি বাস্তব সংখ্যা?",
        options: ["$n\\pi + \\pi/4$", "$n\\pi + (-1)^n \\pi/4$", "$2n\\pi \\pm \\pi/2$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "যদি $z(2-i) = 3+i$ হয়, তবে $z^{20}$ এর মান কত?",
        options: ["$1-i$", "$-1024$", "$1024$", "$1+i$"],
        correctAnswer: 1
      },
      {
        id: 19,
        text: "যদি $z_1 = \\sqrt{3}+i\\sqrt{3}$ এবং $z_2 = \\sqrt{3}+i$ হয়, তবে $z_1/z_2$ কোন পাদভাগে অবস্থিত?",
        options: ["প্রথম", "দ্বিতীয়", "তৃতীয়", "চতুর্থ"],
        correctAnswer: 0
      },
      {
        id: 20,
        text: "যদি $Re\\left(\\frac{z-8i}{z+6}\\right) = 0$ হয়, তবে $z$ কোন বক্ররেখার ওপর অবস্থিত?",
        options: ["$x^2+y^2+6x-8y=0$", "$4x-3y+24=0$", "$x^2+y^2-8=0$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'complex_mock_4',
    title: '৪.৪ জটিল রাশি মক টেস্ট ৪ (Complex Numbers Mock 4)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $z_1, z_2$ এমন জটিল সংখ্যা হয় যে $| \\frac{z_1+z_2}{z_1-z_2} | = 1$ হয়, তবে $z_1/z_2$ সংখ্যাটি হলো:",
        options: ["ধনাত্মক বাস্তব", "ঋণাত্মক বাস্তব", "কাল্পনিক বা শূন্য", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "যদি $z(1+a) = b+ic$ এবং $a^2+b^2+c^2=1$ হয়, তবে $\\frac{1+iz}{1-iz}$ কত?",
        options: ["$\\frac{a+ib}{1+c}$", "$\\frac{b-ic}{1+a}$", "$\\frac{a+ic}{1+b}$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 3,
        text: "$z^2 + (p+iq)z + r+is = 0$ সমীকরণের একটি বাস্তব মূল থাকলে নিচের কোনটি সঠিক?",
        options: ["$pqr = r^2 + p^2s$", "$prs = q^2 + r^2p$", "$qrs = p^2s + q^2r$", "$pqs = s^2 + q^2r$"],
        correctAnswer: 3
      },
      {
        id: 4,
        text: "যদি $\\sum_{k=0}^{100} i^k = x+iy$ হয়, তবে $x$ ও $y$ এর মান কত?",
        options: ["$x=-1, y=0$", "$x=1, y=1$", "$x=1, y=0$", "$x=0, y=1$"],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "যদি $\\frac{1-ix}{1+ix} = a-ib$ এবং $a^2+b^2=1$ হয়, তবে $x$ এর মান হলো:",
        options: ["$\\frac{2a}{(1+a)^2+b^2}$", "$\\frac{2b}{(1+a)^2+b^2}$", "$\\frac{2a}{(1+b)^2+a^2}$", "$\\frac{2b}{(1+b)^2+a^2}$"],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "যদি $\\frac{(p+i)^2}{2p-i} = \\mu+i\\lambda$ হয়, তবে $\\mu^2+\\lambda^2$ এর মান:",
        options: ["$\\frac{(p^2+1)^2}{4p^2-1}$", "$\\frac{(p^2-1)^2}{4p^2-1}$", "$\\frac{(p^2-1)^2}{4p^2+1}$", "$\\frac{(p^2+1)^2}{4p^2+1}$"],
        correctAnswer: 3
      },
      {
        id: 7,
        text: "যদি $(1+i)(1+2i)\\dots(1+ni) = a+ib$ হয়, তবে $2 \\cdot 5 \\cdot 10 \\dots (1+n^2)$ এর মান হলো:",
        options: ["$a^2-b^2$", "$a^2+b^2$", "$\\sqrt{a^2+b^2}$", "$\\sqrt{a^2-b^2}$"],
        correctAnswer: 1
      },
      {
        id: 8,
        text: "যদি $z = \\frac{q+ir}{1+p}$ হয়, তবে $\\frac{1+iz}{1-iz} = \\frac{r+iq}{1+p}$ হবে যদি:",
        options: ["$p^2+q^2+r^2=1$", "$p^2+q^2+r^2=2$", "$p^2+q^2-r^2=1$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "$1+i$ এর অনুবন্ধী (conjugate) হলো:",
        options: ["$i$", "$1$", "$1-i$", "$1+i$"],
        correctAnswer: 2
      },
      {
        id: 10,
        text: "$\\frac{2+5i}{4-3i}$ এর অনুবন্ধী জটিল সংখ্যাটি কত?",
        options: ["$\\frac{7-26i}{25}$", "$\\frac{-7-26i}{25}$", "$\\frac{-7+26i}{25}$", "$\\frac{7+26i}{25}$"],
        correctAnswer: 1
      },
      {
        id: 11,
        text: "$\\frac{(2+i)^2}{3+i}$ এর অনুবন্ধী জটিল সংখ্যাটি $a+ib$ আকারে হবে:",
        options: ["$\\frac{13}{2} + i\\frac{15}{2}$", "$\\frac{13}{10} + i\\frac{-15}{2}$", "$\\frac{13}{10} + i\\frac{-9}{10}$", "$\\frac{13}{10} + i\\frac{9}{10}$"],
        correctAnswer: 2
      },
      {
        id: 12,
        text: "যদি $x+iy = \\sqrt{\\frac{a+ib}{c+id}}$ হয়, তবে $(x^2+y^2)^2$ এর মান হলো:",
        options: ["$\\frac{a^2+b^2}{c^2+d^2}$", "$\\frac{a+b}{c+d}$", "$\\frac{c^2+d^2}{a^2+b^2}$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 13,
        text: "যদি $(a+ib)(c+id)(e+if)(g+ih) = A+iB$ হয়, তবে $(a^2+b^2)(c^2+d^2)(e^2+f^2)(g^2+h^2)$ এর মান হলো:",
        options: ["$A^2+B^2$", "$A^2-B^2$", "$A^2$", "$B^2$"],
        correctAnswer: 0
      },
      {
        id: 14,
        text: "যদি $z$ একটি জটিল সংখ্যা হয়, তবে $z \\cdot \\bar{z} = 0$ হবে যদি এবং কেবল যদি:",
        options: ["$z=0$", "$Re(z)=0$", "$Im(z)=0$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "ধরা যাক $z_1, z_2$ দুটি জটিল সংখ্যা এমন যে $z_1+z_2$ এবং $z_1z_2$ উভয়ই বাস্তব, তবে:",
        options: ["$z_1 = -z_2$", "$z_1 = \\bar{z_2}$", "$z_1 = -\\bar{z_2}$", "$z_1 = z_2$"],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "যেকোনো জটিল সংখ্যা $z$ এর জন্য, $\\bar{z} = 1/z$ হবে যদি এবং কেবল যদি:",
        options: ["$z$ একটি বিশুদ্ধ বাস্তব সংখ্যা", "$|z|=1$", "$z$ একটি বিশুদ্ধ কাল্পনিক সংখ্যা", "$z=1$"],
        correctAnswer: 1
      },
      {
        id: 17,
        text: "যদি $\\frac{c+i}{c-i} = a+ib$ হয় ($a, b, c$ বাস্তব), তবে $a^2+b^2$ কত?",
        options: ["$1$", "$-1$", "$c^2$", "$-c^2$"],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "যদি $z = 3+5i$ হয়, তবে $z^3 + \\bar{z} + 198$ কত?",
        options: ["$-3-5i$", "$-3+5i$", "$3+5i$", "$3-5i$"],
        correctAnswer: 0
      },
      {
        id: 19,
        text: "যদি একটি জটিল সংখ্যা তৃতীয় পাদভাগে থাকে, তবে তার অনুবন্ধী কোন পাদভাগে থাকবে?",
        options: ["প্রথম", "দ্বিতীয়", "তৃতীয়", "চতুর্থ"],
        correctAnswer: 3
      },
      {
        id: 20,
        text: "যদি $z=x+iy$ তৃতীয় পাদভাগে থাকে, তবে $\\bar{z}/z$ ও তৃতীয় পাদভাগে থাকবে যদি:",
        options: ["$x>y>0$", "$x<y<0$", "$y<x<0$", "$y>x>0$"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'complex_mock_5',
    title: '৪.৫ জটিল রাশি মক টেস্ট ৫ (Complex Numbers Mock 5)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $(1+i)z = (1-i)\\bar{z}$ হয়, তবে $z$ হলো:",
        options: ["$t(1-i), t \\in R$", "$t(1+i), t \\in R$", "$\\frac{t}{1+i}, t \\in R$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 2,
        text: "$(z+3)(\\bar{z}+3)$ এর মান কার সমান?",
        options: ["$|z+3|^2$", "$|z-3|$", "$z^2+3$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 3,
        text: "$a \\in R$ এর কোন মানের সেটের জন্য $x^2 + i(a-1)x + 5 = 0$ সমীকরণের মূলগুলো অনুবন্ধী জটিল সংখ্যা হবে?",
        options: ["$R$", "$\\{1\\}$", "$\\{a | a^2-2a+21>0\\}$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "$z^2 = \\bar{z}$ সমীকরণটির কয়টি সমাধান আছে?",
        options: ["কোনো সমাধান নেই", "দুটি সমাধান", "চারটি সমাধান", "অসীম সংখ্যক সমাধান"],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "যদি $z_1 = 9y^2-4-10ix$ এবং $z_2 = 8y^2-20i$ হয়, যেখানে $z_1 = \\bar{z_2}$, তবে $z=x+iy$ কত?",
        options: ["$-2+2i$", "$-2 \\pm 2i$", "$-2 \\pm i$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "যদি $\\alpha$ একটি জটিল ধ্রুবক হয় এমন যে $\\alpha z^2 + z + \\bar{\\alpha} = 0$ এর একটি বাস্তব মূল আছে, তবে:",
        options: ["$\\alpha + \\bar{\\alpha} = 1$", "$\\alpha + \\bar{\\alpha} = 0$", "$\\alpha + \\bar{\\alpha} = -1$", "বাস্তব মূলটির পরম মান ১"],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "$|z-5|$ এর মান কত যদি $z=x+iy$ হয়?",
        options: ["$\\sqrt{(x-5)^2 + y^2}$", "$x^2 + \\sqrt{(y-5)^2}$", "$\\sqrt{(x-y)^2 + 5^2}$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "$\\left( \\frac{3+2i}{3-2i} \\right)$ এর মডুলাস কত?",
        options: ["$1$", "$1/2$", "$2$", "$\\sqrt{2}$"],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "একক মডুলাস বিশিষ্ট দুটি জটিল সংখ্যার গুণফল হলো:",
        options: ["একক মডুলাস বিশিষ্ট", "১ এর চেয়ে কম", "১ এর চেয়ে বেশি", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 10,
        text: "দুটি জটিল সংখ্যার মডুলাস যদি ১ এর চেয়ে কম হয়, তবে তাদের যোগফলের মডুলাস:",
        options: ["১ এর চেয়ে কম", "১ এর চেয়ে বেশি", "১ এর সমান", "যেকোনোটি হতে পারে"],
        correctAnswer: 3
      },
      {
        id: 11,
        text: "যদি $z$ একটি জটিল সংখ্যা হয়, তবে নিচের কোনটি সত্য নয়?",
        options: ["$|z^2| = |z|^2$", "$|z^2| = |\\bar{z}|^2$", "$z = \\bar{z}$", "$\\bar{z^2} = \\bar{z}^2$"],
        correctAnswer: 2
      },
      {
        id: 12,
        text: "$|z+i| = |z-i|$ কে সিদ্ধ করে এমন $z$ এর মান হলো:",
        options: ["যেকোনো বাস্তব সংখ্যা", "যেকোনো জটিল সংখ্যা", "যেকোনো স্বাভাবিক সংখ্যা", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 13,
        text: "যদি $z$ এমন জটিল সংখ্যা হয় যে $(z-1)/(z+1)$ সম্পূর্ণ কাল্পনিক, তবে:",
        options: ["$|z|=0$", "$|z|=1$", "$|z|>1$", "$|z|<1$"],
        correctAnswer: 1
      },
      {
        id: 14,
        text: "$|2z-1| + |3z-2|$ এর সর্বনিম্ন মান কত?",
        options: ["$0$", "$1/2$", "$1/3$", "$2/3$"],
        correctAnswer: 2
      },
      {
        id: 15,
        text: "যেকোনো দুটি জটিল সংখ্যা $z_1, z_2$ এর জন্য $|z_1+z_2|^2 + |z_1-z_2|^2$ এর মান হলো:",
        options: ["$2|z_1|^2 |z_2|^2$", "$2|z_1|^2 + 2|z_2|^2$", "$|z_1|^2 + |z_2|^2$", "$2|z_1| \\cdot |z_2|$"],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "যদি $2z_1/3z_2$ সম্পূর্ণ কাল্পনিক হয়, তবে $|(z_1-z_2)/(z_1+z_2)|$ এর মান কত?",
        options: ["$3/2$", "$1$", "$2/3$", "$4/9$"],
        correctAnswer: 1
      },
      {
        id: 17,
        text: "যদি $z_1, z_2, z_3$ এমন জটিল সংখ্যা হয় যে $|z_1|=|z_2|=|z_3| = |1/z_1 + 1/z_2 + 1/z_3| = 1$ হয়, তবে $|z_1+z_2+z_3|$ এর মান:",
        options: ["১ এর সমান", "১ এর চেয়ে কম", "৩ এর চেয়ে বেশি", "৩ এর সমান"],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "যেকোনো দুটি জটিল সংখ্যা $z_1, z_2$ এর জন্য $|z_1 + \\sqrt{z_1^2-z_2^2}| + |z_1 - \\sqrt{z_1^2-z_2^2}|$ এর মান:",
        options: ["$|z_1|$", "$|z_2|$", "$|z_1+z_2|$", "$|z_1+z_2| + |z_1-z_2|$"],
        correctAnswer: 3
      },
      {
        id: 19,
        text: "$| \\frac{z-12}{z-8i} | = 5/3$ এবং $| \\frac{z-4}{z-8} | = 1$ সমীকরণ দুটি সিদ্ধকারী জটিল সংখ্যা $z$ কত?",
        options: ["$6$", "$6 \\pm 8i$", "$6+8i, 6+17i$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 20,
        text: "$x$ এর একটি বাস্তব মান $(\\frac{3-4ix}{3+4ix}) = \\alpha - i\\beta$ কে সিদ্ধ করবে যদি:",
        options: ["$\\alpha^2-\\beta^2 = -1$", "$\\alpha^2-\\beta^2 = 1$", "$\\alpha^2+\\beta^2 = 1$", "$\\alpha^2-\\beta^2 = 2$"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'complex_mock_6',
    title: '৪.৬ জটিল রাশি মক টেস্ট ৬ (Complex Numbers Mock 6)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "অসমতা $|z-4| < |z-2|$ নিচের কোন অঞ্চলটি প্রকাশ করে?",
        options: ["$Re(z) > 0$", "$Re(z) < 0$", "$Re(z) > 2$", "$Re(z) > 3$"],
        correctAnswer: 3
      },
      {
        id: 2,
        text: "যদি $z = 1 + i\\tan\\alpha$ হয় (যেখানে $\\pi < \\alpha < \\frac{3\\pi}{2}$), তবে $|z|$ কত?",
        options: ["$\\sec\\alpha$", "$-\\sec\\alpha$", "$\\csc\\alpha$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "যদি $z$ একটি অশূন্য জটিল সংখ্যা হয় তবে $|z|^2/z\\bar{z}$ এর মান কত?",
        options: ["$z/\\bar{z}$", "$1$", "$|z|$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "যদি $z$ একটি জটিল সংখ্যা হয় তবে নিচের কোনটি সঠিক?",
        options: ["$|z^2| > |z|^2$", "$|z^2| = |z|^2$", "$|z^2| < |z|^2$", "$|z^2| \\ge |z|^2$"],
        correctAnswer: 1
      },
      {
        id: 5,
        text: "যদি $z_1 \\neq -z_2$ এবং $|z_1+z_2| = |\\frac{1}{z_1} + \\frac{1}{z_2}|$ হয় তবে:",
        options: ["অন্তত $z_1, z_2$ এর একটি ইউনিমডুলার", "উভয়ই ইউনিমডুলার", "$z_1z_2$ ইউনিমডুলার", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "ধরা যাক $z$ একটি স্থির মডুলাসের জটিল সংখ্যা যার $z^2$ সম্পূর্ণ কাল্পনিক, তবে $z$ এর সম্ভাব্য মানের সংখ্যা:",
        options: ["$2$", "$1$", "$4$", "অসীম"],
        correctAnswer: 2
      },
      {
        id: 7,
        text: "$z^2 + |z|^2 = 0$ সমীকরণের সমাধানের সংখ্যা কত?",
        options: ["$1$", "$2$", "$3$", "অসংখ্য"],
        correctAnswer: 3
      },
      {
        id: 8,
        text: "যদি $|z| = Max \\{ |z-2|, |z+2| \\}$ হয় তবে:",
        options: ["$|z+\\bar{z}| = 1$", "$z+\\bar{z} = 2^2$", "$|z+\\bar{z}| = 2$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 9,
        text: "$\\sqrt{2i} - \\sqrt{-2i}$ এর মডুলাস কত?",
        options: ["$2$", "$\\sqrt{2}$", "$0$", "$2\\sqrt{2}$"],
        correctAnswer: 0
      },
      {
        id: 10,
        text: "যদি $z$ একটি জটিল সংখ্যা হয় তবে $|z| + |z-1|$ এর সর্বনিম্ন মান কত?",
        options: ["$1$", "$0$", "$1/2$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "$|z|$ এর সর্বোচ্চ মান কত যখন $|z + \\frac{2}{z}| = 2$?",
        options: ["$\\sqrt{3}-1$", "$\\sqrt{3}+1$", "$\\sqrt{3}$", "$\\sqrt{2+\\sqrt{3}}$"],
        correctAnswer: 1
      },
      {
        id: 12,
        text: "যদি $|z+4| \\le 3$ হয় তবে $|z+1|$ এর সর্বোচ্চ ও সর্বনিম্ন মান যথাক্রমে:",
        options: ["$6, -6$", "$6, 0$", "$7, 2$", "$0, -1$"],
        correctAnswer: 1
      },
      {
        id: 13,
        text: "$z^4 + z + 2 = 0$ সমীকরণের কোনো মূল থাকতে পারবে না এমন শর্তটি হলো:",
        options: ["$|z| < 1$", "$|z| = 1$", "$|z| > 1$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 14,
        text: "ধরা যাক $z, w$ দুটি জটিল সংখ্যা যেখানে $|z| \\le 1, |w| \\le 1$ এবং $|z+iw| = |z-iw| = 2$ তবে $z$ এর মান কত?",
        options: ["$1$ বা $i$", "$i$ বা $-i$", "$1$ বা $-1$", "$i$ বা $1$"],
        correctAnswer: 2
      },
      {
        id: 15,
        text: "যদি $|z_1| = |z_2| = \\dots = |z_n| = 1$ হয় তবে $|z_1+z_2+\\dots+z_n|$ এর মান কার সমান?",
        options: ["$1$", "$|z_1| + |z_2| + \\dots$", "$| \\frac{1}{z_1} + \\dots + \\frac{1}{z_n} |$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 16,
        text: "যদি $z_1 \\neq z_2$ এবং $|z_1| = |z_2|$ হয় এবং $z_1$ এর বাস্তব অংশ ধনাত্মক ও $z_2$ এর কাল্পনিক অংশ ঋণাত্মক হয় তবে $(z_1+z_2)/(z_1-z_2)$ হবে:",
        options: ["বিশুদ্ধ কাল্পনিক", "বাস্তব ও ধনাত্মক", "বাস্তব ও ঋণাত্মক", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "যেকোনো দুটি জটিল সংখ্যা $z_1, z_2$ এবং বাস্তব সংখ্যা $a, b$ এর জন্য $|az_1 - bz_2|^2 + |bz_1 + az_2|^2 =$ কত?",
        options: ["$(a^2+b^2)(|z_1|+|z_2|)$", "$(a^2+b^2)(|z_1|^2+|z_2|^2)$", "$(a^2+b^2)(|z_1|^2-|z_2|^2)$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 18,
        text: "যদি $|a_k| < 1, \\lambda_k \\ge 0$ এবং $\\sum \\lambda_k = 1$ হয় তবে $| \\sum \\lambda_k a_k |$ এর মান কেমন হবে?",
        options: ["১ এর সমান", "১ এর বড়", "শূন্য", "১ এর ছোট"],
        correctAnswer: 3
      },
      {
        id: 19,
        text: "যদি $z_1, z_2, z_3, z_4$ সমীকরণ $a_0 z^4 + a_1 z^3 + a_2 z^2 + a_3 z + a_4 = 0$ এর মূল হয় যেখানে সহগগুলো বাস্তব তবে:",
        options: ["$\\bar{z_1}, \\dots, \\bar{z_4}$ ও মূল", "$z_1$ অন্তত কোনো একটি $\\bar{z_k}$ এর সমান", "$-z_k$ ও মূল", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 20,
        text: "যদি $z$ শর্ত $|z+1| < |z-2|$ সিদ্ধ করে তবে $w = 3z+2+i$ সিদ্ধ করবে:",
        options: ["$|w+1| < |w-8|$", "$|w+1| < |w-7|$", "$w+\\bar{w} > 7$", "$|w+5| < |w-4|$"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'complex_mock_7',
    title: '৪.৭ জটিল রাশি মক টেস্ট ৭ (Complex Numbers Mock 7)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $|z_1-1| < 1, |z_2-2| < 2, |z_3-3| < 3$ হয় তবে $|z_1+z_2+z_3|$ এর মান:",
        options: ["৬ এর ছোট", "৩ এর বড়", "১২ এর ছোট", "৬ ও ১২ এর মাঝে"],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "যদি $|z-4+3i| \\le 1$ হয় এবং $m, n$ যথাক্রমে $|z|$ এর সর্বনিম্ন ও সর্বোচ্চ মান হয় তবে $K = (x^4+x^2+4)/x$ এর সর্বনিম্ন মান কত?",
        options: ["$n$", "$m$", "$m+n$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "$|z+1-i| = \\sqrt{2}$ এবং $|z| = 3$ সমীকরণ জোটের সমাধান সংখ্যা কত?",
        options: ["কোনো সমাধান নেই", "একটি সমাধান", "দুটি সমাধান", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "$0$ এর অ্যামপ্লিচিউড (amplitude) কত?",
        options: ["$0$", "$\\pi/2$", "$\\pi$", "অসংজ্ঞায়িত"],
        correctAnswer: 3
      },
      {
        id: 5,
        text: "জটিল সংখ্যা $-1+i\\sqrt{3}$ এর আর্গুমেন্ট কত?",
        options: ["$-60^o$", "$60^o$", "$120^o$", "$-120^o$"],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "$-1-i\\sqrt{3}$ এর আর্গুমেন্ট কত?",
        options: ["$2\\pi/3$", "$\\pi/3$", "$-\\pi/3$", "$-2\\pi/3$"],
        correctAnswer: 3
      },
      {
        id: 7,
        text: "$\\frac{1+\\sqrt{3}i}{\\sqrt{3}+i}$ এর অ্যামপ্লিচিউড কত?",
        options: ["$\\pi/6$", "$-\\pi/6$", "$\\pi/3$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "$\\frac{1+\\sqrt{3}i}{\\sqrt{3}+1}$ এর অ্যামপ্লিচিউড কত?",
        options: ["$\\pi/3$", "$-\\pi/3$", "$\\pi/6$", "$-\\pi/6$"],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "$\\frac{13-5i}{4-9i}$ জটিল সংখ্যাটির আর্গুমেন্ট কত?",
        options: ["$\\pi/3$", "$\\pi/4$", "$\\pi/5$", "$\\pi/6$"],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "যদি $z = \\frac{-2}{1+\\sqrt{3}i}$ হয় তবে $arg(z)$ কত?",
        options: ["$\\pi$", "$\\pi/3$", "$2\\pi/3$", "$\\pi/4$"],
        correctAnswer: 2
      },
      {
        id: 11,
        text: "যদি $z = \\frac{1-i\\sqrt{3}}{1+i\\sqrt{3}}$ হয় তবে $arg(z)$ কত?",
        options: ["$60^o$", "$120^o$", "$240^o$", "$300^o$"],
        correctAnswer: 2
      },
      {
        id: 12,
        text: "$\\frac{1+\\sqrt{3}i}{\\sqrt{3}-i}$ এর অ্যামপ্লিচিউড কত?",
        options: ["$0$", "$\\pi/6$", "$\\pi/3$", "$\\pi/2$"],
        correctAnswer: 3
      },
      {
        id: 13,
        text: "যদি $z = 1-\\cos\\alpha + i\\sin\\alpha$ হয় তবে $amp(z)$ কত?",
        options: ["$\\alpha/2$", "$-\\alpha/2$", "$\\frac{\\pi+\\alpha}{2}$", "$\\frac{\\pi-\\alpha}{2}$"],
        correctAnswer: 3
      },
      {
        id: 14,
        text: "যদি $z = \\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}$ হয় তবে:",
        options: ["$|z|=1, arg(z)=\\pi/4$", "$|z|=1, arg(z)=\\pi/6$", "$|z|=\\sqrt{3}/2, arg(z)=5\\pi/24$", "$|z|=\\sqrt{3}/2, arg(z)=\\tan^{-1}(1/\\sqrt{2})$"],
        correctAnswer: 1
      },
      {
        id: 15,
        text: "$\\frac{1+i}{1-i}$ এর আর্গুমেন্ট ও মডুলাস যথাক্রমে:",
        options: ["$-\\pi/2$ ও $1$", "$\\pi/2$ ও $\\sqrt{2}$", "$0$ ও $\\sqrt{2}$", "$\\pi/2$ ও $1$"],
        correctAnswer: 3
      },
      {
        id: 16,
        text: "যদি $arg(z) = \\theta$ হয় তবে $arg(\\bar{z})$ কত?",
        options: ["$\\theta$", "$-\\theta$", "$\\pi-\\theta$", "$\\theta-\\pi$"],
        correctAnswer: 1
      },
      {
        id: 17,
        text: "যদি $arg(z) < 0$ হয় তবে $arg(-z)-arg(z)$ কত?",
        options: ["$\\pi$", "$-\\pi$", "$-\\pi/2$", "$\\pi/2$"],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "ধরা যাক $z, w$ দুটি অশূন্য জটিল সংখ্যা যেখানে $|z|=|w|$ এবং $arg(z)+arg(w)=\\pi$ তবে $z$ কার সমান?",
        options: ["$w$", "$-w$", "$\\bar{w}$", "$-\\bar{w}$"],
        correctAnswer: 3
      },
      {
        id: 19,
        text: "যদি $z$ একটি জটিল সংখ্যা হয় তবে $arg(z)$ এর মুখ্য মান কোন সীমার মাঝে থাকে?",
        options: ["$-\\pi/4$ ও $\\pi/4$", "$-\\pi/2$ ও $\\pi/2$", "$-\\pi$ ও $\\pi$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 20,
        text: "জটিল সংখ্যা $-3i$ এর আর্গুমেন্টের মুখ্য মান কত?",
        options: ["$0$", "$\\pi/2$", "$-\\pi/2$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'complex_mock_8',
    title: '৪.৮ জটিল রাশি মক টেস্ট ৮ (Complex Numbers Mock 8)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $|z_1+z_2| = |z_1-z_2|$ হয় তবে $z_1$ ও $z_2$ এর আর্গুমেন্টের পার্থক্য কত?",
        options: ["$\\pi/4$", "$\\pi/3$", "$\\pi/2$", "$0$"],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "যদি $z_1, z_2$ দুটি অশূন্য জটিল সংখ্যা হয় যেখানে $|z_1+z_2| = |z_1|+|z_2|$ তবে $arg(z_1)-arg(z_2)$ কত?",
        options: ["$-\\pi$", "$-\\pi/2$", "$\\pi/2$", "$0$"],
        correctAnswer: 3
      },
      {
        id: 3,
        text: "যদি $z_1 z_2 \\dots z_n = z$ হয় তবে $arg(z_1) + \\dots + arg(z_n)$ এবং $arg(z)$ এর পার্থক্য হলো:",
        options: ["$\\pi$ এর গুণিতক", "$\\pi/2$ এর গুণিতক", "$\\pi$ এর বড়", "$\\pi$ এর ছোট"],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "যদি $z$ একটি বিশুদ্ধ বাস্তব সংখ্যা হয় যেখানে $Re(z) < 0$ তবে $arg(z) =$ কত?",
        options: ["$\\pi$", "$\\pi/2$", "$0$", "$-\\pi/2$"],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "ধরা যাক $z$ একটি বিশুদ্ধ কাল্পনিক সংখ্যা যেখানে $Im(z) < 0$ তবে $arg(z) =$ কত?",
        options: ["$\\pi$", "$\\pi/2$", "$0$", "$-\\pi/2$"],
        correctAnswer: 3
      },
      {
        id: 6,
        text: "যদি $\\bar{z}$ জটিল সংখ্যা $z$ এর অনুবন্ধী হয় তবে নিচের কোনটি ভুল?",
        options: ["$|z|=|\\bar{z}|$", "$z\\bar{z}=|z|^2$", "$\\overline{z_1+z_2} = \\bar{z_1}+\\bar{z_2}$", "$arg(z) = arg(\\bar{z})$"],
        correctAnswer: 3
      },
      {
        id: 7,
        text: "ধরা যাক $z_1, z_2$ এর মুখ্য আর্গুমেন্ট যথাক্রমে $\\alpha, \\beta$ যেখানে $\\alpha+\\beta > \\pi$ তবে $arg(z_1z_2)$ এর মুখ্য মান কত?",
        options: ["$\\alpha+\\beta+\\pi$", "$\\alpha+\\beta-\\pi$", "$\\alpha+\\beta-2\\pi$", "$\\alpha+\\beta$"],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "যদি $z = -1$ হয় তবে $arg(z^{2/3})$ এর মুখ্য মান কত?",
        options: ["$\\pi/3$", "$2\\pi/3$", "$10\\pi/3$", "$\\pi$"],
        correctAnswer: 1
      },
      {
        id: 9,
        text: "যদি $|z-1|=1$ হয় তবে নিচের কোনটি সঠিক?",
        options: ["$arg(z-1) = 2arg(z)$", "$arg(z) = \\frac{2}{3} arg(z^2-z)$", "$arg(z-1) = arg(z+1)$", "$arg(z) = 2arg(z+1)$"],
        correctAnswer: 0
      },
      {
        id: 10,
        text: "যদি $z = x+iy$ শর্ত $amp(z-1) = amp(z+3i)$ সিদ্ধ করে তবে $(x-1) : y$ কত?",
        options: ["$2:1$", "$1:3$", "$-1:3$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 11,
        text: "যদি $z(2-i2\\sqrt{3})^2 = i(\\sqrt{3}+i)^4$ হয় তবে $z$ এর অ্যামপ্লিচিউড কত?",
        options: ["$5\\pi/6$", "$-\\pi/6$", "$\\pi/6$", "$7\\pi/6$"],
        correctAnswer: 2
      },
      {
        id: 12,
        text: "যদি $z = x+iy$ এমন হয় যে $\\frac{z-1}{z+1}$ এর আর্গুমেন্ট সর্বদা $\\pi/4$ হয় তবে:",
        options: ["$x^2+y^2+y=1$", "$x^2+y^2-2y=0$", "$x^2+y^2+y=-1$", "$x^2+y^2-2y=1$"],
        correctAnswer: 3
      },
      {
        id: 13,
        text: "যদি $z_1 = 10+6i, z_2 = 4+6i$ এবং $arg(\\frac{z-z_1}{z-z_2}) = \\pi/4$ হয় তবে $|z-7-9i|$ এর মান কত?",
        options: ["$\\sqrt{2}$", "$2\\sqrt{2}$", "$3\\sqrt{2}$", "$2\\sqrt{3}$"],
        correctAnswer: 2
      },
      {
        id: 14,
        text: "যদি $z_1 = 8+4i, z_2 = 6+4i$ এবং $arg(\\frac{z-z_1}{z-z_2}) = \\pi/4$ হয় তবে $z$ সিদ্ধ করবে:",
        options: ["$|z-7-4i|=1$", "$|z-7-5i|=\\sqrt{2}$", "$|z-4i|=8$", "$|z-7i|=\\sqrt{18}$"],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "যদি $z_1, z_2$ এবং $z_3, z_4$ দুটি অনুবন্ধী জটিল সংখ্যা জোড়া হয় তবে $arg(z_1/z_4) + arg(z_2/z_3)$ কত?",
        options: ["$0$", "$\\pi/2$", "$3\\pi/2$", "$\\pi$"],
        correctAnswer: 0
      },
      {
        id: 16,
        text: "যদি $|z_1|=|z_2|=1$ এবং $Re(z_1\\bar{z_2})=0$ হয় তবে $w_1=a+ic, w_2=b+id$ সিদ্ধ করবে:",
        options: ["$|w_1|=1$", "$|w_2|=1$", "$Re(w_1\\bar{w_2})=0$", "উপরের সবগুলি"],
        correctAnswer: 3
      },
      {
        id: 17,
        text: "যদি $z_1, z_2, z_3$ তিনটি অশূন্য জটিল সংখ্যা হয় যেখানে $|z_1|=a, |z_2|=b, |z_3|=c$ এবং নির্দিষ্ট নির্ণায়ক শূন্য হয় তবে $arg(z_3/z_2)$ কার সমান?",
        options: ["$arg(\\frac{z_2-z_1}{z_3-z_1})^2$", "$arg(\\frac{z_2-z_1}{z_3-z_1})$", "$arg(\\frac{z_3-z_1}{z_2-z_1})^2$", "$arg(\\frac{z_3-z_1}{z_2-z_1})$"],
        correctAnswer: 2
      },
      {
        id: 18,
        text: "যদি $amp(\\frac{z-2}{2z+3i}) = 0$ এবং $z_0 = 3+4i$ হয় তবে:",
        options: ["$z_0\\bar{z} + \\bar{z_0}z = 12$", "$z_0\\bar{z} + z_0\\bar{z} = 12$", "$z_0\\bar{z} + \\bar{z_0}z = 0$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 19,
        text: "$z = 1+\\cos\\frac{11\\pi}{9} + i\\sin\\frac{11\\pi}{9}$ এর মুখ্য আর্গুমেন্ট ও মডুলাস যথাক্রমে:",
        options: ["$11\\pi/8$ ও $2\\cos(\\pi/18)$", "$-7\\pi/18$ ও $2\\cos(11\\pi/18)$", "$7\\pi/18$ ও $2\\cos(7\\pi/18)$", "$-\\pi/9$ ও $-2\\cos(\\pi/18)$"],
        correctAnswer: 1
      },
      {
        id: 20,
        text: "যদি $amp(z_1z_2)=0$ এবং $|z_1|=|z_2|=1$ হয় তবে:",
        options: ["$z_1+z_2=0$", "$z_1z_2=1$", "$z_1 = \\bar{z_2}$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'complex_mock_9',
    title: '৪.৯ জটিল রাশি মক টেস্ট ৯ (Complex Numbers Mock 9)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $|z_1+z_2|^2 = |z_1|^2+|z_2|^2$ হয় তবে:",
        options: ["$z_1/z_2$ বিশুদ্ধ বাস্তব", "$z_1/z_2$ বিশুদ্ধ কাল্পনিক", "$z_1\\bar{z_2} + z_2\\bar{z_1} = 0$", "$amp(z_1/z_2) = \\pi/2$"],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "ধরা যাক $z_1 = \\frac{(\\sqrt{3}+i)^2(1-\\sqrt{3}i)}{1+i}$ এবং $z_2$ অন্য একটি রাশি তবে $|z_1|=|z_2|$ হলে:",
        options: ["$|z_1|=|z_2|$", "$amp(z_1)+amp(z_2)=0$", "$3|z_1|=|z_2|$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 3,
        text: "যদি $z_1, z_2$ উভয়ই $z+\\bar{z} = 2|z-1|$ সিদ্ধ করে এবং $arg(z_1-z_2)=\\pi/4$ হয় তবে $(z_1+z_2)$ এর কাল্পনিক অংশ কত?",
        options: ["$0$", "$1$", "$2$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 4,
        text: "যদি $z = \\frac{(z_1+\\bar{z_2})z_1}{z_2\\bar{z_1}}$ হয় যেখানে $z_1=1+2i, z_2=1-i$ তবে $|z|$ ও $arg(z)$ কত?",
        options: ["$|z|=\\frac{1}{2}\\sqrt{26}, arg(z)=-\\pi+\\tan^{-1}\\frac{19}{17}$", "$|z|=\\frac{1}{2}\\sqrt{26}, arg(z)=\\tan^{-1}\\frac{19}{17}$", "$|z|=\\frac{1}{2}\\sqrt{15}, arg(z)=\\tan^{-1}\\frac{19}{17}$", "$arg(z)=-\\pi+\\tan^{-1}\\frac{19}{17}, |z|=\\frac{1}{3}\\sqrt{26}$"],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "যদি $(a_1+ib_1)\\dots(a_n+ib_n) = A+iB$ হয় তবে $\\sum \\tan^{-1}(b_i/a_i)$ কার সমান?",
        options: ["$B/A$", "$\\tan(B/A)$", "$\\tan^{-1}(B/A)$", "$\\tan^{-1}(A/B)$"],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "$2i$ এর বর্গমূল কোনটি?",
        options: ["$\\sqrt{2}i$", "$\\sqrt{2}(1+i)$", "$1+i$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 2
      },
      {
        id: 7,
        text: "$\\sqrt{-8-6i} =$ কত?",
        options: ["$1 \\pm 3i$", "$\\pm(1-3i)$", "$\\pm(1+3i)$", "$\\pm(3-i)$"],
        correctAnswer: 1
      },
      {
        id: 8,
        text: "যদি $\\sqrt{a+ib} = x+iy$ হয় তবে $\\sqrt{a-ib}$ এর সম্ভাব্য মান কি?",
        options: ["$x^2+y^2$", "$\\sqrt{x^2+y^2}$", "$x+iy$", "$x-iy$"],
        correctAnswer: 3
      },
      {
        id: 9,
        text: "যদি $(-7-24i)^{1/2} = x-iy$ হয় তবে $x^2+y^2$ কত?",
        options: ["$15$", "$25$", "$-25$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "যদি $\\sqrt{x+iy} = \\pm(a+ib)$ হয় তবে $\\sqrt{-x-iy}$ কার সমান?",
        options: ["$\\pm(b+ia)$", "$\\pm(a-ib)$", "$\\pm(b-ia)$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "$\\sqrt{i} + \\sqrt{-i}$ এর একটি মান কত?",
        options: ["$0$", "$\\sqrt{2}$", "$-i$", "$i$"],
        correctAnswer: 1
      },
      {
        id: 12,
        text: "ধরা যাক $\\sqrt{5+12i}$ ও $\\sqrt{5-12i}$ এর বাস্তব অংশ ঋণাত্মক। তবে রাশিটি সরল করলে কি হবে?",
        options: ["$\\frac{3}{2}i$", "$-\\frac{3}{2}i$", "$-3+\\frac{2}{5}i$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 13,
        text: "যদি $x + \\frac{1}{x} = \\sqrt{3}$ হয় তবে $x$ কত?",
        options: ["$\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}$", "$\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}$", "$\\sin\\frac{\\pi}{6} + i\\cos\\frac{\\pi}{6}$", "$\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}$"],
        correctAnswer: 3
      },
      {
        id: 14,
        text: "$\\sqrt{3}+i$ কে পোলার আকারে লিখলে হয়:",
        options: ["$\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}$", "$2(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6})$", "$2(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3})$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 15,
        text: "যদি $(1+i\\sqrt{3})^9 = a+ib$ হয় তবে $b$ এর মান কত?",
        options: ["$1$", "$256$", "$0$", "$9^3$"],
        correctAnswer: 2
      },
      {
        id: 16,
        text: "যদি $x=\\cos\\theta+i\\sin\\theta$ ও $y=\\cos\\phi+i\\sin\\phi$ হয় তবে $x^my^n + x^{-m}y^{-n}$ কত?",
        options: ["$\\cos(m\\theta+n\\phi)$", "$\\cos(m\\theta-n\\phi)$", "$2\\cos(m\\theta+n\\phi)$", "$2\\cos(m\\theta-n\\phi)$"],
        correctAnswer: 2
      },
      {
        id: 17,
        text: "যদি $z = (\\frac{\\sqrt{3}}{2} + \\frac{i}{2})^5 + (\\frac{\\sqrt{3}}{2} - \\frac{i}{2})^5$ হয় তবে:",
        options: ["$Re(z)=0$", "$Im(z)=0$", "$Re(z)>0, Im(z)>0$", "$Re(z)>0, Im(z)<0$"],
        correctAnswer: 1
      },
      {
        id: 18,
        text: "যদি $z = re^{i\\theta}$ হয় তবে $|e^{iz}|$ কত?",
        options: ["$e^{r\\sin\\theta}$", "$e^{-r\\sin\\theta}$", "$e^{-r\\cos\\theta}$", "$e^{r\\cos\\theta}$"],
        correctAnswer: 1
      },
      {
        id: 19,
        text: "$\\left( \\frac{1+\\cos\\phi+i\\sin\\phi}{1+\\cos\\phi-i\\sin\\phi} \\right)^n =$ কত?",
        options: ["$\\cos n\\phi - i\\sin n\\phi$", "$\\cos n\\phi + i\\sin n\\phi$", "$\\sin n\\phi + i\\cos n\\phi$", "$\\sin n\\phi - i\\cos n\\phi$"],
        correctAnswer: 1
      },
      {
        id: 20,
        text: "যদি $n$ একটি ধনাত্মক পূর্ণসংখ্যা হয় তবে $(1+i)^n + (1-i)^n$ কার সমান?",
        options: ["$(\\sqrt{2})^{n-2}\\cos\\frac{n\\pi}{4}$", "$(\\sqrt{2})^{n-2}\\sin\\frac{n\\pi}{4}$", "$(\\sqrt{2})^{n+2}\\cos\\frac{n\\pi}{4}$", "$(\\sqrt{2})^{n+2}\\sin\\frac{n\\pi}{4}$"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'complex_mock_10',
    title: '৪.১০ জটিল রাশি মক টেস্ট ১০ (Complex Numbers Mock 10)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $y = \\cos\\theta+i\\sin\\theta$ হয় তবে $y + 1/y$ কত?",
        options: ["$2\\cos\\theta$", "$2\\sin\\theta$", "$2\\csc\\theta$", "$2\\tan\\theta$"],
        correctAnswer: 0
      },
      {
        id: 2,
        text: "জটিল সংখ্যা $(i^{25})^3$ এর পোলার আকার কোনটি?",
        options: ["$\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}$", "$\\cos\\pi + i\\sin\\pi$", "$\\cos\\pi - i\\sin\\pi$", "$\\cos\\frac{\\pi}{2} - i\\sin\\frac{\\pi}{2}$"],
        correctAnswer: 3
      },
      {
        id: 3,
        text: "$e^{e^{-i\\theta}}$ এর অ্যামপ্লিচিউড কত?",
        options: ["$\\sin\\theta$", "$-\\sin\\theta$", "$e^{\\cos\\theta}$", "$e^{\\sin\\theta}$"],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "$\\sin^{-1}(e^{i\\theta})$ এর বাস্তব অংশ কোনটি?",
        options: ["$\\cos^{-1}(\\sqrt{\\sin\\theta})$", "$\\sinh^{-1}(\\sqrt{\\sin\\theta})$", "$\\sin^{-1}(\\sqrt{\\sin\\theta})$", "$\\sin^{-1}(\\sqrt{\\cos\\theta})$"],
        correctAnswer: 3
      },
      {
        id: 5,
        text: "$(1-i)^{-i}$ এর বাস্তব অংশ কোনটি?",
        options: ["$e^{-\\pi/4}\\cos(\\frac{1}{2}\\log 2)$", "$-e^{-\\pi/4}\\sin(\\frac{1}{2}\\log 2)$", "$e^{\\pi/4}\\cos(\\frac{1}{2}\\log 2)$", "$e^{-\\pi/4}\\sin(\\frac{1}{2}\\log 2)$"],
        correctAnswer: 0
      },
      {
        id: 6,
        text: "যদি $z = i\\log(2-\\sqrt{3})$ হয় তবে $\\cos z =$ কত?",
        options: ["$i$", "$2i$", "$1$", "$2$"],
        correctAnswer: 3
      },
      {
        id: 7,
        text: "$\\tan^{-1}(\\frac{5i}{3})$ এর কাল্পনিক অংশ কত?",
        options: ["$0$", "$\\infty$", "$\\log 2$", "$\\log 4$"],
        correctAnswer: 1
      },
      {
        id: 8,
        text: "$\\tan[i\\log(\\frac{a-ib}{a+ib})]$ রাশিটি সরল করলে কি হবে?",
        options: ["$\\frac{ab}{a^2+b^2}$", "$\\frac{2ab}{a^2-b^2}$", "$\\frac{ab}{a^2-b^2}$", "$\\frac{2ab}{a^2+b^2}$"],
        correctAnswer: 3
      },
      {
        id: 9,
        text: "যদি $\\log_{\\tan 30^o}(\\frac{2|z|^2+2|z|-3}{|z|+1}) < -2$ হয় তবে:",
        options: ["$|z| < 3/2$", "$|z| > 3/2$", "$|z| < 2$", "$|z| > 2$"],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "যদি $\\sin(\\log i^i) = a+ib$ হয় তবে $a$ ও $b$ এর মান যথাক্রমে:",
        options: ["$-1, 0$", "$0, -1$", "$1, 0$", "$0, 1$"],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "$\\log_2(5i)$ এর সাধারণ মান কোনটি?",
        options: ["$\\log 5 + 2ni\\pi + \\frac{i\\pi}{2}$", "$\\frac{1}{\\log 2}(\\log 5 + 2ni\\pi + \\frac{i\\pi}{2})$", "$\\frac{-1}{\\log 2}(\\log 5 + 2ni\\pi - \\frac{i\\pi}{2})$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 12,
        text: "$R(z^2)=1$ কি নির্দেশ করে?",
        options: ["পরাবৃত্ত $x^2+y^2=1$", "অধিবৃত্ত $x^2-y^2=1$", "পরাবৃত্ত বা বৃত্ত", "সবগুলো"],
        correctAnswer: 1
      },
      {
        id: 13,
        text: "যদি $z=x+iy$ ও $w = \\frac{1-iz}{z-i}$ হয় তবে $|w|=1$ কি নির্দেশ করে?",
        options: ["$z$ কাল্পনিক অক্ষের ওপর", "$z$ বাস্তব অক্ষের ওপর", "$z$ একক বৃত্তের ওপর", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 14,
        text: "যদি $|z|=2$ হয় তবে $-1+5z$ বিন্দুগুলি কোন বক্ররেখায় থাকবে?",
        options: ["বৃত্ত", "সরলরেখা", "পরাবৃত্ত", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "$\\bar{b}z + b\\bar{z} = c$ সমীকরণটি কি নির্দেশ করে?",
        options: ["একটি বৃত্ত", "একটি সরলরেখা", "একটি পরাবৃত্ত", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "যদি $z=x+iy$ ও $|z-zi|=1$ হয় তবে:",
        options: ["$z$ x-অক্ষের ওপর", "$z$ y-অক্ষের ওপর", "$z$ বৃত্তের ওপর", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "তিনটি জটিল সংখ্যা সমান্তর প্রগতিতে (A.P.) থাকলে তারা কোথায় অবস্থান করবে?",
        options: ["জটিল তলের একটি বৃত্তে", "জটিল তলের একটি সরলরেখায়", "জটিল তলের একটি পরাবৃত্তে", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 18,
        text: "$-1-i$ ও $2+3i$ বিন্দুদ্বয়ের সংযোগকারী রেখাংশের দৈর্ঘ্য কত?",
        options: ["$-5$", "$15$", "$5$", "$25$"],
        correctAnswer: 2
      },
      {
        id: 19,
        text: "$z\\bar{z} + a\\bar{z} + \\bar{a}z + b = 0$ সমীকরণটি একটি বৃত্ত নির্দেশ করবে যদি:",
        options: ["$|a|^2 = b$", "$|a|^2 > b$", "$|a|^2 < b$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 1
      },
      {
        id: 20,
        text: "যদি $z_1, z_2, z_3$ একটি সমবাহু ত্রিভুজের শীর্ষবিন্দু হয় যেখানে $|z_1|=|z_2|=|z_3|$ তবে $z_1+z_2+z_3 =$ কত?",
        options: ["$0$", "$1$", "$-1$", "এগুলোর কোনোটিই নয়"],
        correctAnswer: 0
      }
    ]
  }
];

export const topic4Tests: Test[] = [
  ...baseTopic4Tests,
  ...topic4JeeTests
];

