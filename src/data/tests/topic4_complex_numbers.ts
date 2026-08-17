import { Test } from '../testData';

export const topic4Tests: Test[] = [
  {
    id: 'complex_t1',
    title: '৪.১ কাল্পনিক একক ও জটিল বীজগাণিতিক ধর্ম (Imaginary Unit & Complex Algebra)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      { id: 1, text: "$i^2$ এর মান কত?", options: ["$-1$", "$1$", "$i$", "$-i$"], correctAnswer: 0 },
      { id: 2, text: "$i^{4n+3}$ এর মান কত ($n \\in \\mathbb{Z}$)?", options: ["$-i$", "$i$", "$1$", "$-1$"], correctAnswer: 0 },
      { id: 3, text: "$i + i^2 + i^3 + i^4$ এর মান কত?", options: ["0", "1", "$i$", "$-1$"], correctAnswer: 0 },
      { id: 4, text: "$z = 3 - 4i$ হলে, $\\text{Re}(z)$ এবং $\\text{Im}(z)$ এর মান কত?", options: ["3 এবং $-4$", "3 এবং 4", "$-3$ এবং 4", "$-3$ এবং $-4$"], correctAnswer: 0 },
      { id: 5, text: "যদি $a + ib = c + id$ হয় ($a, b, c, d \\in \\mathbb{R}$), তবে-", options: ["$a = c$ এবং $b = d$", "$a = d$ এবং $b = c$", "$a + b = c + d$", "$ab = cd$"], correctAnswer: 0 },
      { id: 6, text: "$\\frac{1}{i}$ এর মান কার সমান?", options: ["$-i$", "$i$", "$1$", "$-1$"], correctAnswer: 0 },
      { id: 7, text: "$(1 + i)^2$ এর সরলতম মান কোনটি?", options: ["$2i$", "$-2i$", "$2$", "0"], correctAnswer: 0 },
      { id: 8, text: "$(1 - i)^2$ এর সরলতম মান কোনটি?", options: ["$-2i$", "$2i$", "$-2$", "2"], correctAnswer: 0 },
      { id: 9, text: "$\\frac{1+i}{1-i}$ এর মান কত?", options: ["$i$", "$-i$", "$1$", "$-1$"], correctAnswer: 0 },
      { id: 10, text: "$\\frac{1-i}{1+i}$ এর মান কত?", options: ["$-i$", "$i$", "$1$", "$-1$"], correctAnswer: 0 },
      { id: 11, text: "$i^{-35}$ এর মান কত?", options: ["$i$", "$-i$", "$1$", "$-1$"], correctAnswer: 0 },
      { id: 12, text: "যদি $x + iy = (1+i)(1+2i)$ হয়, তবে $x$ ও $y$ এর মান কত?", options: ["$x = -1, y = 3$", "$x = 1, y = 3$", "$x = 3, y = -1$", "$x = -1, y = -3$"], correctAnswer: 0 },
      { id: 13, text: "কোনো জটিল রাশি $z$ বিশুদ্ধ কাল্পনিক (Purely Imaginary) হবে যদি-", options: ["$\\text{Re}(z) = 0$", "$\\text{Im}(z) = 0$", "$z = \\bar{z}$", "$|z| = 0$"], correctAnswer: 0 },
      { id: 14, text: "কোনো জটিল রাশি $z$ বাস্তব (Real) হবে যদি-", options: ["$\\text{Im}(z) = 0$", "$\\text{Re}(z) = 0$", "$z = -\\bar{z}$", "$z + \\bar{z} = 0$"], correctAnswer: 0 },
      { id: 15, text: "$\\sqrt{-25} \\times \\sqrt{-4}$ এর মান কত?", options: ["$-10$", "$10$", "$10i$", "$-10i$"], correctAnswer: 0 },
      { id: 16, text: "$(2 + 3i) + (-5 + 7i)$ এর মান কত?", options: ["$-3 + 10i$", "$7 + 10i$", "$-3 + 4i$", "$3 - 10i$"], correctAnswer: 0 },
      { id: 17, text: "$i^{1000} + i^{1001} + i^{1002} + i^{1003}$ এর মান কত?", options: ["0", "1", "$i$", "$-1$"], correctAnswer: 0 },
      { id: 18, text: "যদি $(x+iy)(2-3i) = 4+i$ হয়, তবে $x$ ও $y$ এর মান কত?", options: ["$x = 5/13, y = 14/13$", "$x = 14/13, y = 5/13$", "$x = 1, y = 2$", "$x = -5/13, y = 14/13$"], correctAnswer: 0 },
      { id: 19, text: "$z = a + ib$ এর যোগাত্মক বিপরীত (Additive Inverse) কী?", options: ["$-a - ib$", "$a - ib$", "$-a + ib$", "$\\frac{a - ib}{a^2 + b^2}$"], correctAnswer: 0 },
      { id: 20, text: "$z = 3 + 4i$ এর গুণাত্মক বিপরীত (Multiplicative Inverse) কী?", options: ["$\\frac{3 - 4i}{25}$", "$\\frac{3 + 4i}{25}$", "$\\frac{3 - 4i}{5}$", "$-3 - 4i$"], correctAnswer: 0 }
    ]
  },
  {
    id: 'complex_t2',
    title: '৪.২ অনুবন্ধী, মডিউলাস ও অ্যাম্প্লিচিউড (Conjugate, Modulus & Argument)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      { id: 1, text: "$z = a + ib$ এর অনুবন্ধী জটিল রাশি (Conjugate) $\\bar{z}$ কী?", options: ["$a - ib$", "$-a + ib$", "$-a - ib$", "$b + ia$"], correctAnswer: 0 },
      { id: 2, text: "$z \\cdot \\bar{z}$ কার সমান?", options: ["$|z|^2$", "$|z|$", "$z^2$", "$0$"], correctAnswer: 0 },
      { id: 3, text: "$z = 3 - 4i$ এর পরম মান বা মডিউলাস $|z|$ কত?", options: ["5", "25", "7", "1"], correctAnswer: 0 },
      { id: 4, text: "$z = -1 + i\\sqrt{3}$ এর মুখ্য আর্গুমেন্ট (Principal Argument) $\\text{Arg}(z)$ কত?", options: ["$2\\pi/3$", "$\\pi/3$", "$5\\pi/6$", "$-\\pi/3$"], correctAnswer: 0 },
      { id: 5, text: "মুখ্য আর্গুমেন্ট $\\theta$ এর সীমানা কত?", options: ["$-\\pi < \\theta \\le \\pi$", "$0 \\le \\theta < 2\\pi$", "$0 < \\theta \\le \\pi$", "$-\\pi/2 \\le \\theta \\le \\pi/2$"], correctAnswer: 0 },
      { id: 6, text: "$z = -1 - i$ এর মুখ্য আর্গুমেন্ট কত?", options: ["$-3\\pi/4$", "$5\\pi/4$", "$3\\pi/4$", "$-\\pi/4$"], correctAnswer: 0 },
      { id: 7, text: "$z = 1 - i$ এর মুখ্য আর্গুমেন্ট কত?", options: ["$-\\pi/4$", "$\\pi/4$", "$7\\pi/4$", "$3\\pi/4$"], correctAnswer: 0 },
      { id: 8, text: "$|z_1 z_2|$ কার সমান?", options: ["$|z_1| \\cdot |z_2|$", "$|z_1| + |z_2|$", "$|z_1| / |z_2|$", "$|z_1|^2 |z_2|^2$"], correctAnswer: 0 },
      { id: 9, text: "$\\arg(z_1 z_2)$ কার সমান?", options: ["$\\arg(z_1) + \\arg(z_2)$", "$\\arg(z_1) - \\arg(z_2)$", "$\\arg(z_1) \\cdot \\arg(z_2)$", "$\\frac{\\arg(z_1)}{\\arg(z_2)}$"], correctAnswer: 0 },
      { id: 10, text: "$\\arg(z_1 / z_2)$ কার সমান?", options: ["$\\arg(z_1) - \\arg(z_2)$", "$\\arg(z_1) + \\arg(z_2)$", "$\\arg(z_1) / \\arg(z_2)$", "$\\arg(z_2) - \\arg(z_1)$"], correctAnswer: 0 },
      { id: 11, text: "যদি $|z| = 1$ হয়, তবে $\\bar{z}$ কার সমান?", options: ["$1/z$", "$z$", "$-z$", "$-1/z$"], correctAnswer: 0 },
      { id: 12, text: "$\\overline{z_1 + z_2}$ কার সমান?", options: ["$\\bar{z}_1 + \\bar{z}_2$", "$\\bar{z}_1 - \\bar{z}_2$", "$\\bar{z}_1 \\cdot \\bar{z}_2$", "$z_1 + z_2$"], correctAnswer: 0 },
      { id: 13, text: "$z + \\bar{z}$ এর মান কত?", options: ["$2\\text{Re}(z)$", "$2\\text{Im}(z)$", "$2i\\text{Im}(z)$", "0"], correctAnswer: 0 },
      { id: 14, text: "$z - \\bar{z}$ এর মান কত?", options: ["$2i\\text{Im}(z)$", "$2\\text{Re}(z)$", "$2\\text{Im}(z)$", "0"], correctAnswer: 0 },
      { id: 15, text: "ত্রিভুজ অসমতা (Triangle Inequality) কোনটি?", options: ["$|z_1 + z_2| \\le |z_1| + |z_2|$", "$|z_1 + z_2| \\ge |z_1| + |z_2|$", "$|z_1 + z_2| = |z_1| + |z_2|$", "$|z_1 - z_2| \\le |z_1| - |z_2|$"], correctAnswer: 0 },
      { id: 16, text: "$z = i$ এর মডিউলাস ও মুখ্য আর্গুমেন্ট কত?", options: ["মডিউলাস 1, আর্গুমেন্ট $\\pi/2$", "মডিউলাস 1, আর্গুমেন্ট 0", "মডিউলাস 0, আর্গুমেন্ট $\\pi/2$", "মডিউলাস 1, আর্গুমেন্ট $\\pi$"], correctAnswer: 0 },
      { id: 17, text: "$z = -5$ এর মুখ্য আর্গুমেন্ট কত?", options: ["$\\pi$", "$0$", "$-\\pi$", "$\\pi/2$"], correctAnswer: 0 },
      { id: 18, text: "$|z - z_0| = r$ আর্গ্যান্ড সমতলে কী নির্দেশ করে?", options: ["$z_0$ কেন্দ্র ও $r$ ব্যাসার্ধবিশিষ্ট বৃত্ত", "একটি সরলরেখা", "একটি উপবৃত্ত", "একটি পরাবৃত্ত"], correctAnswer: 0 },
      { id: 19, text: "যদি $\\arg(z) = \\theta$ হয়, তবে $\\arg(\\bar{z})$ কত?", options: ["$-\\theta$", "$\\theta$", "$\\pi - \\theta$", "$\\pi + \\theta$"], correctAnswer: 0 },
      { id: 20, text: "$z = 1 + i\\sqrt{3}$ কে পোলার আকারে (Polar Form) প্রকাশ করলে কী হবে?", options: ["$2(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3})$", "$2(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6})$", "$\\sqrt{2}(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3})$", "$4(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3})$"], correctAnswer: 0 }
    ]
  },
  {
    id: 'complex_t3',
    title: '৪.৩ বর্গমূল ও এককের ঘনমূল (Square Roots & Cube Roots of Unity)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      { id: 1, text: "$i$ এর বর্গমূল কোনটি?", options: ["$\\pm \\frac{1+i}{\\sqrt{2}}$", "$\\pm \\frac{1-i}{\\sqrt{2}}$", "$\\pm (1+i)$", "$\\pm (1-i)$"], correctAnswer: 0 },
      { id: 2, text: "$-i$ এর বর্গমূল কোনটি?", options: ["$\\pm \\frac{1-i}{\\sqrt{2}}$", "$\\pm \\frac{1+i}{\\sqrt{2}}$", "$\\pm (1-i)$", "$\\pm i$"], correctAnswer: 0 },
      { id: 3, text: "$7 + 24i$ এর বর্গমূল কত?", options: ["$\\pm (4 + 3i)$", "$\\pm (3 + 4i)$", "$\\pm (4 - 3i)$", "$\\pm (3 - 4i)$"], correctAnswer: 0 },
      { id: 4, text: "এককের কাল্পনিক ঘনমূল $\\omega$ ও $\\omega^2$ হলে, $1 + \\omega + \\omega^2 = ?$", options: ["0", "1", "$-1$", "3"], correctAnswer: 0 },
      { id: 5, text: "$\\omega^3$ এর মান কত?", options: ["1", "$-1$", "$0$", "$i$"], correctAnswer: 0 },
      { id: 6, text: "$\\omega^{3n+1}$ এর মান কত ($n \\in \\mathbb{Z}$)?", options: ["$\\omega$", "$\\omega^2$", "1", "0"], correctAnswer: 0 },
      { id: 7, text: "$\\omega$ এর মান কোনটি?", options: ["$\\frac{-1 + i\\sqrt{3}}{2}$", "$\\frac{1 + i\\sqrt{3}}{2}$", "$\\frac{-1 - \\sqrt{3}}{2}$", "$\\frac{1 - i\\sqrt{3}}{2}$"], correctAnswer: 0 },
      { id: 8, text: "$(1 - \\omega + \\omega^2)^5 + (1 + \\omega - \\omega^2)^5$ এর মান কত?", options: ["32", "$-32$", "64", "0"], correctAnswer: 0 },
      { id: 9, text: "এককের তিনটি ঘনমূল আর্গ্যান্ড চিত্রে যে ত্রিভুজ গঠন করে তা কী রূপ?", options: ["সমবাহু ত্রিভুজ", "সমকোণী ত্রিভুজ", "সমদ্বিবাহু ত্রিভুজ", "বিষমবাহু ত্রিভুজ"], correctAnswer: 0 },
      { id: 10, text: "$\\frac{a + b\\omega + c\\omega^2}{c + a\\omega + b\\omega^2}$ এর মান কত?", options: ["$\\omega^2$", "$\\omega$", "1", "0"], correctAnswer: 0 },
      { id: 11, text: "$-1 + i\\sqrt{3}$ এর পোলার আকার কোনটি?", options: ["$2(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3})$", "$2(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3})$", "$\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}$", "$2(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6})$"], correctAnswer: 0 },
      { id: 12, text: "$x^2 + x + 1 = 0$ সমীকরণের বীজ দুটি কী?", options: ["$\\omega, \\omega^2$", "$1, \\omega$", "$1, \\omega^2$", "$-1, -\\omega$"], correctAnswer: 0 },
      { id: 13, text: "$x^2 - x + 1 = 0$ সমীকরণের বীজ দুটি কী?", options: ["$-\\omega, -\\omega^2$", "$\\omega, \\omega^2$", "$-\\omega, \\omega^2$", "$\\omega, -\\omega^2$"], correctAnswer: 0 },
      { id: 14, text: "$(-1 + i\\sqrt{3})^{3n} + (-1 - i\\sqrt{3})^{3n}$ এর মান কত?", options: ["$2^{3n+1}$", "$2^{3n}$", "$0$", "$-2^{3n}$"], correctAnswer: 0 },
      { id: 15, text: "$(1 + \\omega)(1 + \\omega^2)(1 + \\omega^4)(1 + \\omega^8)$ এর মান কত?", options: ["1", "0", "$\\omega$", "$\\omega^2$"], correctAnswer: 0 },
      { id: 16, text: "$-7 - 24i$ এর বর্গমূল কত?", options: ["$\\pm (3 - 4i)$", "$\\pm (4 - 3i)$", "$\\pm (3 + 4i)$", "$\\pm (4 + 3i)$"], correctAnswer: 0 },
      { id: 17, text: "$1/\\omega$ কার সমান?", options: ["$\\omega^2$", "$\\omega$", "1", "$-1$"], correctAnswer: 0 },
      { id: 18, text: "$\\bar{\\omega}$ কার সমান?", options: ["$\\omega^2$", "$\\omega$", "$-\\omega$", "1"], correctAnswer: 0 },
      { id: 19, text: "যদি $x = a + b, y = a\\omega + b\\omega^2, z = a\\omega^2 + b\\omega$ হয়, তবে $x+y+z = ?$", options: ["0", "$3(a+b)$", "$a+b$", "$3ab$"], correctAnswer: 0 },
      { id: 20, text: "উপরের রাশিতে $xyz$ এর মান কত?", options: ["$a^3 + b^3$", "$a^3 - b^3$", "$3ab$", "$0$"], correctAnswer: 0 }
    ]
  },
  {
    id: 'complex_t4',
    title: '৪.৪ জটিল রাশির আর্গুমেন্ট, সঞ্চারপথ ও মডিউলাস (Argument, Modulus & Locus - WBJEE & JEE Main)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 25,
    questions: [
      {
        id: 1,
        text: "$(\\sin 40^\\circ + i \\cos 40^\\circ)^5$ এর মুখ্য আর্গুমেন্ট (Principal Amplitude) হলো—",
        options: ["$-110^\\circ$", "$70^\\circ$", "$110^\\circ$", "$-70^\\circ$"],
        correctAnswer: 0
      },
      {
        id: 2,
        text: "আর্গ্যান্ড সমতলে $A$ এবং $B$ দুটি বিন্দু এমন যে $AB$ রেখাংশটি $(0, 0)$ বিন্দুতে সমদ্বিখণ্ডিত হয়। তৃতীয় পাদে অবস্থিত $A$ বিন্দুর মুখ্য আর্গুমেন্ট $\\theta$ হলে, $B$ বিন্দুর মুখ্য আর্গুমেন্ট কত?",
        options: ["$\\pi + \\theta$", "$-\\theta$", "$\\pi - \\theta$", "$\\theta - \\pi$"],
        correctAnswer: 0
      },
      {
        id: 3,
        text: "যদি $\\operatorname{Im}(z) > 0$ হয়, তবে $\\arg(z) - \\arg(-z)$ এর মান কত?",
        options: ["$\\pi$", "$-\\pi$", "$\\frac{\\pi}{2}$", "$-\\frac{\\pi}{2}$"],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "যদি $\\left(\\frac{3}{2} + i\\frac{\\sqrt{3}}{2}\\right)^{50} = 3^{25}(x + iy)$ হয় (যেখানে $x, y \\in \\mathbb{R}$), তবে ক্রমজোড় $(x, y)$ এর মান কোনটি?",
        options: ["$\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$", "$(-3, 0)$", "$(0, 3)$", "$(0, -3)$"],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "যেসব জটিল সংখ্যা $z$-এর জন্য $\\arg\\left(\\frac{z-2}{z+2}\\right) = \\frac{\\pi}{3}$ হয়, তাদের দ্বারা গঠিত বিন্দুগুলির সঞ্চারপথ হলো—",
        options: ["একটি বৃত্ত (A circle)", "একটি সরলরেখা (A straight line)", "একটি উপবৃত্ত (An ellipse)", "একটি পরাবৃত্ত (A parabola)"],
        correctAnswer: 0
      },
      {
        id: 6,
        text: "ধরি $z$ একটি বিশুদ্ধ কাল্পনিক সংখ্যা যাতে $\\operatorname{Im}(z) < 0$। তবে $\\arg(z)$ এর মান কত?",
        options: ["$-\\pi/2$", "$\\pi/2$", "$\\pi$", "$0$"],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "যেকোনো অশূন্য জটিল সংখ্যা $z$ এর ক্ষেত্রে, $\\arg(z) + \\arg(\\bar{z})$ এর মান কত?",
        options: ["$0$", "$\\pi$", "$-\\pi$", "$\\pi/2$"],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "যদি $z = \\left(\\frac{\\sqrt{3}}{2} + \\frac{i}{2}\\right)^5 + \\left(\\frac{\\sqrt{3}}{2} - \\frac{i}{2}\\right)^5$ হয়, তবে নিচের কোনটি সত্য?",
        options: ["$\\operatorname{Im}(z) = 0$", "$\\operatorname{Re}(z) = 0$", "$\\operatorname{Re}(z) > 0, \\operatorname{Im}(z) > 0$", "$\\operatorname{Re}(z) > 0, \\operatorname{Im}(z) < 0$"],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "যদি $\\sin x + i \\cos 2x$ এবং $\\cos x - i \\sin 2x$ পরস্পর অনুবন্ধী (Conjugate) হয়, তবে $x$-এর মান কত?",
        options: ["কোনোটিই নয় (কোনো বাস্তব সমাধান নেই)", "$n\\pi$", "$\\left(n + \\frac{1}{2}\\right)\\frac{\\pi}{2}$", "$0$"],
        correctAnswer: 0
      },
      {
        id: 10,
        text: "যদি $\\frac{z_1 - 2z_2}{2 - z_1\\bar{z}_2}$ একটি বিশুদ্ধ কাল্পনিক সংখ্যা হয় ($|z_2| \\neq 1$), তবে $\\left|\\frac{6z_1 - 8z_2}{4z_1 + 3z_2}\\right|$ এর মান কত?",
        options: ["2", "1", "$\\sqrt{2}$", "4"],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "যদি $\\log_{\\frac{1}{\\sqrt{2}}} \\left(\\frac{|z|^2 - |z| + 1}{|z| + 2}\\right) > 2$ হয়, তবে $z$-এর সঞ্চারপথ কী হবে?",
        options: ["কোনোটিই নয় ($|z| < 3/2$)", "$|z| > 5$", "$|z| \\le 5$", "$|z| < 1$"],
        correctAnswer: 0
      },
      {
        id: 12,
        text: "ত্রিভুজ $ABC$-এর শীর্ষবিন্দুগুলির অবস্থান জটিল সংখ্যা যথাক্রমে $z_1, z_2, z_3$ এবং ভরকেন্দ্র $G$। যদি $z=0$ বিন্দুটি $AG$ রেখাংশের মধ্যবিন্দু হয়, তবে কোনটি সঠিক?",
        options: ["$4z_1 + z_2 + z_3 = 0$", "$z_1 + z_2 + z_3 = 0$", "$z_1 + 4z_2 + 4z_3 = 0$", "$4z_1 + z_2 - z_3 = 0$"],
        correctAnswer: 0
      },
      {
        id: 13,
        text: "যেকোনো দুটি জটিল সংখ্যা $z_1, z_2$-এর জন্য $\\left|z_1 + \\sqrt{z_1^2 - z_2^2}\\right| + \\left|z_1 - \\sqrt{z_1^2 - z_2^2}\\right|$ এর মান কত?",
        options: ["$|z_1 + z_2| + |z_1 - z_2|$", "$2(|z_1|^2 + |z_2|^2)$", "$(|z_1| + |z_2|)^2$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 14,
        text: "যদি $\\operatorname{Im}\\left(\\frac{2z+1}{iz+1}\\right) = 1$ হয়, তবে $z$-এর সঞ্চারপথ হলো—",
        options: ["একটি বৃত্ত (A circle)", "একটি সরলরেখা (A straight line)", "একটি পরাবৃত্ত (A parabola)", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "আর্গ্যান্ড সমতলে ক্রমানুসারে গৃহীত একটি সামান্তরিকের চারটি শীর্ষবিন্দু $z_1, z_2, z_3, z_4$ হলে কোনটি সঠিক?",
        options: ["$z_1 + z_3 = z_2 + z_4$", "$z_1 - z_4 = z_2 - z_3$", "$z_1 - z_2 = z_3 - z_4$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 16,
        text: "যদি $z_r = \\cos\\left(\\frac{\\pi}{2^r}\\right) + i \\sin\\left(\\frac{\\pi}{2^r}\\right)$ ($r = 1, 2, \\dots, \\infty$) হয়, তবে $z_1 z_2 z_3 \\dots \\infty$ এর গুণফল কত?",
        options: ["$-1$", "$1$", "$0$", "$i$"],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "যদি $|z - 2| \\le \\sqrt{2}$ হয়, তবে $\\left|\\frac{3 + i(z-1)}{3 - i(z-1)}\\right|$ এর সর্বোচ্চ মান কত?",
        options: ["$3 + 2\\sqrt{2}$", "$\\sqrt{2}$", "$2\\sqrt{2}$", "$2 + \\sqrt{2}$"],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "ধরি $z = x + iy$, যেখানে $x, y \\in \\mathbb{Z}$। $z\\bar{z}^3 + \\bar{z}z^3 = 350$ সমীকরণের বীজগুলি যে আয়তক্ষেত্রের শীর্ষবিন্দু নির্দেশ করে তার ক্ষেত্রফল কত?",
        options: ["48", "32", "40", "80"],
        correctAnswer: 0
      },
      {
        id: 19,
        text: "যদি $k = 4n + 7$ হয় ($n \\in \\mathbb{Z}$), তবে $i^k$ এর মান কত?",
        options: ["$-i$", "$i$", "$-1$", "$1$"],
        correctAnswer: 0
      },
      {
        id: 20,
        text: "$\\arg\\left(\\frac{z-1}{z+1}\\right) = \\frac{\\pi}{3}$ শর্তটি সিদ্ধকারী বিন্দু $z$-এর সঞ্চারপথ হলো—",
        options: ["একটি বৃত্ত (Circle)", "একটি পরাবৃত্ত (Parabola)", "সরলরেখা যুগল (Pair of straight lines)", "কোনোটিই নয়"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'complex_t5',
    title: '৪.৫ এককের মূলসমূহ, বীজগণিত ও জ্যামিতিক প্রয়োগ (Roots of Unity, Geometry & Advanced Equations - WBJEE & JEE Main)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 25,
    questions: [
      {
        id: 1,
        text: "$(x - 1)^3 + 8 = 0$ সমীকরণের বীজ তিনটি কী কী?",
        options: ["$-1, 1 - 2\\omega, 1 - 2\\omega^2$", "$-1, 1 + 2\\omega, 1 + 2\\omega^2$", "$2, 2\\omega, 2\\omega^2$", "$2, 1 + 2\\omega, 1 + 2\\omega^2$"],
        correctAnswer: 0
      },
      {
        id: 2,
        text: "যদি $n$ এমন একটি পূর্ণসংখ্যা হয় যা 3-এর গুণিতক নয়, তবে $1 + \\omega^n + \\omega^{2n}$ এর মান কত?",
        options: ["0", "1", "$-1$", "3"],
        correctAnswer: 0
      },
      {
        id: 3,
        text: "যদি $n = 6k$ ($k \\in \\mathbb{Z}$) হয়, তবে $\\left(\\frac{1-i\\sqrt{3}}{2}\\right)^n + \\left(\\frac{-1-i\\sqrt{3}}{2}\\right)^n$ এর মান কত?",
        options: ["2", "-1", "0", "1"],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "$(1-\\omega+\\omega^2)^5 + (1+\\omega-\\omega^2)^5$ এর মান কত (যেখানে $\\omega$ এককের কাল্পনিক ঘনমূল)?",
        options: ["32", "-32", "$32\\omega$", "0"],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "যদি $x + \\frac{1}{x} = 2 \\cos \\theta$ হয়, তবে যেকোনো পূর্ণসংখ্যা $n$-এর জন্য $x^n + \\frac{1}{x^n} = ?$",
        options: ["$2 \\cos n\\theta$", "$2 \\sin n\\theta$", "$2i \\cos n\\theta$", "$2i \\sin n\\theta$"],
        correctAnswer: 0
      },
      {
        id: 6,
        text: "যদি $\\omega \\neq 1$ এককের একটি ঘনমূল হয়, তবে শ্রেণি $S = 1 + 2\\omega + 3\\omega^2 + \\dots + 3n\\omega^{3n-1}$ এর সমষ্টি কত?",
        options: ["$\\frac{3n}{\\omega - 1}$", "$3n(\\omega - 1)$", "$\\frac{\\omega - 1}{3n}$", "$0$"],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "যদি $a = \\sqrt{2i}$ হয়, তবে নিচের কোনটি সঠিক?",
        options: ["$a = 1 + i$", "$a = 1 - i$", "$a = -\\sqrt{2}i$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "আর্গ্যান্ড সমতলে $z$, $iz$, $z + iz$ জটিল সংখ্যা তিনটি দ্বারা গঠিত ত্রিভুজের ক্ষেত্রফল কত?",
        options: ["$\\frac{1}{2}|z|^2$", "$|z|^2$", "$2|z|^2$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "$z^3 + 2z^2 + 2z + 1 = 0$ এবং $z^{1985} + z^{100} + 1 = 0$ সমীকরণদ্বয়ের সাধারণ বীজগুলি (Common roots) হলো—",
        options: ["$\\omega, \\omega^2$", "$1, \\omega, \\omega^2$", "$-1, \\omega, \\omega^2$", "$-\\omega, -\\omega^2$"],
        correctAnswer: 0
      },
      {
        id: 10,
        text: "এককের তিনটি ঘনমূল আর্গ্যান্ড সমতলে যে বৃত্তের উপর অবস্থান করে তার সমীকরণ কোনটি?",
        options: ["$|z| = 1$", "$|z - 1| = 1$", "$|z + 1| = 1$", "$|z - \\omega| = 1$"],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "যদি $1, \\alpha_1, \\alpha_2, \\dots, \\alpha_{n-1}$ এককের $n$-তম মূলগুলি হয়, তবে $(2 - \\alpha_1)(2 - \\alpha_2) \\dots (2 - \\alpha_{n-1})$ এর মান—",
        options: ["$2^n - 1$", "$2^n$", "$2^n + 1$", "$n$"],
        correctAnswer: 0
      },
      {
        id: 12,
        text: "$\\tan\\left[i \\log\\left(\\frac{a - ib}{a + ib}\\right)\\right]$ রাশিটির সরলতম মান কোনটি?",
        options: ["$\\frac{2ab}{a^2 - b^2}$", "$\\frac{ab}{a^2 + b^2}$", "$\\frac{ab}{a^2 - b^2}$", "$\\frac{2ab}{a^2 + b^2}$"],
        correctAnswer: 0
      },
      {
        id: 13,
        text: "যদি $z^2 = -1$ হয়, তবে $\\arg(z^{20})$ এর মুখ্য মান (Principal value) কত?",
        options: ["$0$", "$\\pi$", "$\\pi/2$", "$-\\pi$"],
        correctAnswer: 0
      },
      {
        id: 14,
        text: "যদি $iz^3 + z^2 - z + i = 0$ হয়, তবে $|z|$ এর মান কত?",
        options: ["$1$", "$2$", "$0$", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "$\\frac{1}{1 - \\cos \\theta + i \\sin \\theta}$ জটিল রাশিটির বাস্তব অংশ (Real part) হলো—",
        options: ["$\\frac{1}{2}$", "$1$", "$-\\frac{1}{2} \\tan(\\theta/2)$", "$2$"],
        correctAnswer: 0
      },
      {
        id: 16,
        text: "যদি $z\\bar{z} + (3 - 4i)z + (3 + 4i)\\bar{z} = 0$ একটি বৃত্তের সমীকরণ নির্দেশ করে, তবে বৃত্তটির ক্ষেত্রফল (বর্গ এককে) কত?",
        options: ["$25\\pi$", "$5\\pi$", "$10\\pi$", "$25\\pi^2$"],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "যদি $\\alpha, \\beta, \\gamma$ সংখ্যা তিনটি $p$ ($p < 0$) এর তিনটি ঘনমূল হয়, তবে যেকোনো $x, y, z$-এর জন্য $\\frac{x\\alpha + y\\beta + z\\gamma}{x\\beta + y\\gamma + z\\alpha}$ এর মান কত?",
        options: ["$\\omega^2$", "$\\omega$", "$-\\omega$", "$-\\omega^2$"],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "যদি $(a_1 + ib_1)(a_2 + ib_2) \\dots (a_n + ib_n) = A + iB$ হয়, তবে $(a_1^2 + b_1^2)(a_2^2 + b_2^2) \\dots (a_n^2 + b_n^2)$ এর মান—",
        options: ["$A^2 + B^2$", "$1$", "$A + B$", "$\\frac{1}{A^2} + \\frac{1}{B^2}$"],
        correctAnswer: 0
      },
      {
        id: 19,
        text: "যেসব জটিল সংখ্যা $z$-এর জন্য $|z| - 2 = |z - i| - |z + 5i| = 0$ হয়, তাদের সঞ্চারপথ হলো—",
        options: ["একটি নির্দিষ্ট একক বিন্দু $(0, -2)$", "মূলবিন্দুকেন্দ্রিক একটি বৃত্ত", "মূলবিন্দুগামী একটি সরলরেখা", "কোনোটিই নয়"],
        correctAnswer: 0
      },
      {
        id: 20,
        text: "$-5 - 12i$ জটিল সংখ্যাটির বর্গমূল কোনটি?",
        options: ["$\\pm(2 - 3i)$", "$\\pm(3 + 2i)$", "$\\pm(3 - 2i)$", "$\\pm(2 + 3i)$"],
        correctAnswer: 0
      },
      {
        id: 21,
        text: "$|z|^2 + 7\\bar{z} = 0$ সমীকরণের সমাধান হলো—",
        options: ["$z = 0$ এবং $z = -7$", "$z = 0$ এবং $z = 7$", "$z = 7$ এবং $z = -7$", "কেবল $z = 0$"],
        correctAnswer: 0
      },
      {
        id: 22,
        text: "যদি $\\frac{3 + 2i \\sin \\theta}{1 - 2i \\sin \\theta}$ একটি বিশুদ্ধ কাল্পনিক সংখ্যা হয়, তবে $\\theta$ এর সাধারণ মান—",
        options: ["$n\\pi \\pm \\frac{\\pi}{3}$", "$n\\pi \\pm \\frac{\\pi}{6}$", "$n\\pi \\pm \\frac{\\pi}{4}$", "$n\\pi$"],
        correctAnswer: 0
      },
      {
        id: 23,
        text: "যদি $0 < a, b < 1$ হয় এবং $z_1 = a + i$, $z_2 = 1 + bi$, $z_3 = 0$ বিন্দু তিনটি একটি সমবাহু ত্রিভুজ গঠন করে, তবে—",
        options: ["$a = b = 2 - \\sqrt{3}$", "$a = b = \\sqrt{2} - 1$", "$a = b = 2 + \\sqrt{3}$", "$a = b = \\sqrt{3} - 1$"],
        correctAnswer: 0
      }
    ]
  }
];
