import { Test } from '../testData';

export const topic4JeeTests: Test[] = [
  {
    id: 'complex_jee_mock_1',
    title: '৪.১১ জটিল রাশি JEE মক টেস্ট ১ (Complex Numbers JEE Mock 1)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $z_1, z_2, z_3$ একটি ত্রিভুজ $ABC$-এর শীর্ষবিন্দু হয় যার ভরকেন্দ্র $G$, এবং $z = 0$ যদি $AG$-এর মধ্যবিন্দু হয়, তবে নিচের কোনটি সঠিক?",
        options: [
          "$z_1 + z_2 + z_3 = 0$",
          "$z_1 + 4z_2 + z_3 = 0$",
          "$z_1 + z_2 + 4z_3 = 0$",
          "$4z_1 + z_2 + z_3 = 0$"
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        text: "সকল জটিল সংখ্যা $z_1, z_2$ এর জন্য যেখানে $|z_1| = 12$ এবং $|z_2 - 3 - 4i| = 5$, $|z_1 - z_2|$-এর সর্বনিম্ন মান কত?",
        options: [
          "$0$",
          "$2$",
          "$7$",
          "$17$"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "যদি জটিল তলে $z_1, z_2, z_3$ একটি সমবাহু ত্রিভুজের শীর্ষবিন্দু হয়, তবে $z_1^2 + z_2^2 + z_3^2$-এর মান কার সমান?",
        options: [
          "$\\frac{z_1}{z_2} + \\frac{z_2}{z_3} + \\frac{z_3}{z_1}$",
          "$z_1 z_2 + z_2 z_3 + z_3 z_1$",
          "$z_1 z_2 - z_2 z_3 - z_3 z_1$",
          "$\\frac{z_1 - z_2}{z_2 - z_3}$"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "ধরা যাক $z$ একটি জটিল সংখ্যা। তবে ভেক্টর $z$ এবং $-iz$-এর মধ্যবর্তী কোণ কত?",
        options: [
          "$\\pi$",
          "$0$",
          "$-\\frac{\\pi}{2}$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "যদি $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ হয়, তবে $\\Delta ABC$-এর জন্য $e^{iA} \\cdot e^{iB} \\cdot e^{iC}$-এর মান কত?",
        options: [
          "$-i$",
          "$1$",
          "$-1$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "যদি $\\operatorname{Re}\\left(\\frac{z+4}{2z-i}\\right) = \\frac{1}{2}$ হয়, তবে $z$ বিন্দুটি যার ওপর অবস্থিত তা হলো:",
        options: [
          "একটি বৃত্ত",
          "একটি উপবৃত্ত",
          "একটি সরলরেখা",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 7,
        text: "ধরা যাক $z_1$ এবং $z_2$ এমন দুটি জটিল সংখ্যা যেন $\\frac{z_1}{z_2} + \\frac{z_2}{z_1} = 1$, তবে:",
        options: [
          "$z_1, z_2$ সমরেখ",
          "$z_1, z_2$ এবং মূলবিন্দু একটি সমকোণী ত্রিভুজ গঠন করে",
          "$z_1, z_2$ এবং মূলবিন্দু একটি সমবাহু ত্রিভুজ গঠন করে",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "নিচের কোন সমীকরণটি বৃত্ত নির্দেশ করে না?",
        options: [
          "$\\operatorname{Re}\\left(\\frac{1+z}{1-z}\\right) = 0$",
          "$z\\bar{z} + iz - i\\bar{z} + 1 = 0$",
          "$\\arg\\left(\\frac{z-1}{z+1}\\right) = \\frac{\\pi}{2}$",
          "$\\left|\\frac{z-1}{z+1}\\right| = 1$"
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        text: "ধরা যাক $z_1$ এবং $z_2$ এককের দুটি অবাস্তব ঘনমূল এবং $|z - z_1|^2 + |z - z_2|^2 = \\lambda$ হলো $z_1, z_2$-কে ব্যাসের প্রান্তবিন্দু ধরে গঠিত বৃত্তের সমীকরণ, তবে $\\lambda$-এর মান কত?",
        options: [
          "$4$",
          "$3$",
          "$2$",
          "$\\sqrt{2}$"
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "ধরা যাক $\\alpha$ এবং $\\beta$ দুটি নির্দিষ্ট অশূন্য জটিল সংখ্যা এবং $z$ একটি চলক জটিল সংখ্যা। যদি $\\alpha\\bar{z} + \\bar{\\alpha}z + 1 = 0$ এবং $\\beta\\bar{z} + \\bar{\\beta}z - 1 = 0$ সরলরেখা দুটি পরস্পর লম্ব হয়, তবে:",
        options: [
          "$\\alpha\\beta + \\bar{\\alpha}\\bar{\\beta} = 0$",
          "$\\alpha\\beta - \\bar{\\alpha}\\bar{\\beta} = 0$",
          "$\\bar{\\alpha}\\beta - \\alpha\\bar{\\beta} = 0$",
          "$\\alpha\\bar{\\beta} + \\bar{\\alpha}\\beta = 0$"
        ],
        correctAnswer: 3
      },
      {
        id: 11,
        text: "যদি $P$ এবং $P'$ যথাক্রমে জটিল সংখ্যা $z_1$ এবং এর যোগজ বিপরীত নির্দেশ করে, তবে $PP'$-কে ব্যাস ধরে বৃত্তের সমীকরণ কোনটি?",
        options: [
          "$z\\bar{z} + z_1\\bar{z}_1 = 0$",
          "$z\\bar{z} - z_1\\bar{z}_1 = 0$",
          "$z\\bar{z}_1 + \\bar{z}z_1 = 0$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 12,
        text: "আর্গন্ড চিত্রে $1, \\frac{1+i}{\\sqrt{2}}$ এবং $i$ বিন্দু তিনটি শীর্ষবিন্দু ধরে গঠিত ত্রিভুজটি হলো:",
        options: [
          "বিষমবাহু",
          "সমবাহু",
          "সমদ্বিবাহু",
          "সমকোণী"
        ],
        correctAnswer: 2
      },
      {
        id: 13,
        text: "যদি $P, Q, R, S$ যথাক্রমে $4 + i, 1 + 6i, -4 + 3i, -1 - 2i$ জটিল সংখ্যা দ্বারা নির্দেশিত হয়, তবে $PQRS$ একটি:",
        options: [
          "আয়তক্ষেত্র",
          "বর্গক্ষেত্র",
          "রম্বস",
          "সামান্তরিক"
        ],
        correctAnswer: 1
      },
      {
        id: 14,
        text: "ধরা যাক জটিল তলে $A, B, C$ বিন্দু তিনটি যথাক্রমে $z_1, z_2, z_3$ নির্দেশ করে। যদি $\\Delta ABC$-এর পরিকেন্দ্র মূলবিন্দুতে থাকে, তবে লম্ববিন্দু কোন জটিল সংখ্যা দ্বারা নির্দেশিত হবে?",
        options: [
          "$z_1 + z_2 - z_3$",
          "$z_2 + z_3 - z_1$",
          "$z_3 + z_1 - z_2$",
          "$z_1 + z_2 + z_3$"
        ],
        correctAnswer: 3
      },
      {
        id: 15,
        text: "একটি জটিল সংখ্যাকে $i$ দিয়ে গুণ করলে নির্দেশক ভেক্টরটি কত কোণে আবর্তিত হয়?",
        options: [
          "$180^\\circ$",
          "$90^\\circ$",
          "$60^\\circ$",
          "$360^\\circ$"
        ],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "ধরা যাক $z$ এমন একটি জটিল সংখ্যা যা $|z - 5i| \\le 1$ সিদ্ধ করে যেন $\\operatorname{amp}(z)$ সর্বনিম্ন হয়। তবে $z$-এর মান:",
        options: [
          "$\\frac{2\\sqrt{6}}{5} + \\frac{24}{5}i$",
          "$\\frac{24}{5} + \\frac{2\\sqrt{6}}{5}i$",
          "$\\frac{2\\sqrt{6}}{5} - \\frac{24}{5}i$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "যদি $\\omega$ এমন একটি জটিল সংখ্যা হয় যা $\\left|\\omega + \\frac{1}{\\omega}\\right| = 2$ সিদ্ধ করে, তবে মূলবিন্দু থেকে $\\omega$-এর সর্বোচ্চ দূরত্ব কত?",
        options: [
          "$2 + \\sqrt{3}$",
          "$1 + \\sqrt{2}$",
          "$1 + \\sqrt{3}$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 18,
        text: "যদি $|z - 25i| \\le 15$ হয়, তবে $|\\max\\operatorname{amp}(z) - \\min\\operatorname{amp}(z)| = $ কত?",
        options: [
          "$\\cos^{-1}\\left(\\frac{3}{5}\\right)$",
          "$\\pi - 2\\cos^{-1}\\left(\\frac{3}{5}\\right)$",
          "$\\frac{\\pi}{2} + \\cos^{-1}\\left(\\frac{3}{5}\\right)$",
          "$\\sin^{-1}\\left(\\frac{3}{5}\\right) - \\cos^{-1}\\left(\\frac{3}{5}\\right)$"
        ],
        correctAnswer: 1
      },
      {
        id: 19,
        text: "যদি $z_1, z_2$ এমন দুটি জটিল সংখ্যা হয় যে $\\left|\\frac{z_1-z_2}{z_1+z_2}\\right| = 1$ এবং $iz_1 = kz_2$ (যেখানে $k \\in \\mathbb{R}$), তবে $z_1 - z_2$ এবং $z_1 + z_2$-এর মধ্যবর্তী কোণ হলো:",
        options: [
          "$\\tan^{-1}\\left(\\frac{2k}{k^2+1}\\right)$",
          "$\\tan^{-1}\\left(\\frac{2k}{1-k^2}\\right)$",
          "$-2\\tan^{-1} k$",
          "$2\\tan^{-1} k$"
        ],
        correctAnswer: 2
      },
      {
        id: 20,
        text: "যদি জটিল সংখ্যা $z = x + iy$-এর অন্তত একটি মান $|z + \\sqrt{2}| = a^2 - 3a + 2$ শর্ত এবং $|z + i\\sqrt{2}| < a^2$ অসমতা সিদ্ধ করে, তবে:",
        options: [
          "$a > 2$",
          "$a = 2$",
          "$a < 2$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'complex_jee_mock_2',
    title: '৪.১২ জটিল রাশি JEE মক টেস্ট ২ (Complex Numbers JEE Mock 2)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "স্থানাঙ্কের মূলবিন্দু থেকে $\\left|z + \\frac{1}{z}\\right| = a$ সমীকরণ সিদ্ধকারী বিন্দু $z$-এর সর্বোচ্চ দূরত্ব কত?",
        options: [
          "$\\frac{1}{2}(\\sqrt{a^2+1} + a)$",
          "$\\frac{1}{2}(\\sqrt{a^2+2} + a)$",
          "$\\frac{1}{2}(\\sqrt{a^2+4} + a)$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "ধরা যাক $a$ এমন একটি জটিল সংখ্যা যেন $|a| < 1$ এবং $z_1, z_2, \\dots$ একটি বহুভুজের শীর্ষবিন্দু যেখানে $z_k = 1 + a + a^2 + \\dots + a^{k-1}$, তবে বহুভুজটির শীর্ষবিন্দুগুলি যে বৃত্তের অভ্যন্তরে অবস্থিত তা হলো:",
        options: [
          "$|z - a| = a$",
          "$\\left|z - \\frac{1}{1-a}\\right| = |1 - a|$",
          "$\\left|z - \\frac{1}{1-a}\\right| = \\frac{1}{|1 - a|}$",
          "$|z - (1 - a)| = |1 - a|$"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "যদি $a, b, c$ এবং $u, v, w$ দুটি ত্রিভুজের শীর্ষবিন্দু নির্দেশক জটিল সংখ্যা হয় যেখানে $c = (1-r)a + rb$ এবং $w = (1-r)u + rv$ ($r$ একটি জটিল সংখ্যা), তবে ত্রিভুজ দুটি:",
        options: [
          "একই ক্ষেত্রফল বিশিষ্ট",
          "সদৃশ (Similar)",
          "সর্বসম (Congruent)",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "যদি $z_1, z_2, z_3, z_4$ আর্গন্ড তলে চারটি বিন্দুর নির্দেশক হয় এবং $z$ এমন একটি বিন্দু যেন $|z - z_1| = |z - z_2| = |z - z_3| = |z - z_4|$, তবে $z_1, z_2, z_3, z_4$ বিন্দুগুলি:",
        options: [
          "বৃত্তস্থ (Concyclic)",
          "সামান্তরিকের শীর্ষবিন্দু",
          "রম্বসের শীর্ষবিন্দু",
          "একই সরলরেখায় অবস্থিত"
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "$ABCD$ একটি রম্বস যার কর্ণ $AC$ এবং $BD$ পরস্পরকে $M$ বিন্দুতে ছেদ করে এবং $BD = 2AC$ সিদ্ধ করে। যদি $D$ এবং $M$ বিন্দু দুটি যথাক্রমে $1+i$ এবং $2-i$ নির্দেশ করে, তবে $A$ বিন্দুটি কোন জটিল সংখ্যা নির্দেশ করে?",
        options: [
          "$3 - \\frac{1}{2}i$ বা $1 - \\frac{3}{2}i$",
          "$\\frac{3}{2} - i$ বা $\\frac{1}{2} - 3i$",
          "$\\frac{1}{2} - i$ বা $1 - \\frac{1}{2}i$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 6,
        text: "ধরা যাক $|Z| = 2$ বৃত্তে অন্তর্লিখিত একটি সমবাহু ত্রিভুজের শীর্ষবিন্দু $Z_1, Z_2, Z_3$। যদি $Z_1 = 1 + i\\sqrt{3}$ হয়, তবে $Z_3$ এবং $Z_2$-এর মান যথাক্রমে:",
        options: [
          "$-2, 1 - i\\sqrt{3}$",
          "$2, 1 + i\\sqrt{3}$",
          "$1 + i\\sqrt{3}, -2$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "যদি $a$ এবং $b$, $0$ ও $1$-এর মধ্যবর্তী দুটি বাস্তব সংখ্যা হয় যেন $z_1 = a + i, z_2 = 1 + bi$ এবং $z_3 = 0$ একটি সমবাহু ত্রিভুজ গঠন করে, তবে:",
        options: [
          "$a = b = 2 + \\sqrt{3}$",
          "$a = b = 2 - \\sqrt{3}$",
          "$a = 2 - \\sqrt{3}, b = 2 + \\sqrt{3}$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 8,
        text: "ধরা যাক $z^2 + az + b = 0$ সমীকরণের মূল দুটি $z_1$ ও $z_2$ (যেখানে $z$ জটিল সংখ্যা)। আরও ধরা যাক মূলবিন্দু, $z_1$ ও $z_2$ একটি সমবাহু ত্রিভুজ গঠন করে। তবে:",
        options: [
          "$a^2 = b$",
          "$a^2 = 2b$",
          "$a^2 = 3b$",
          "$a^2 = 4b$"
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        text: "যদি $z_1, z_2, z_3, z_4$ ঘড়ির কাঁটার বিপরীত দিকে একটি রম্বসের শীর্ষবিন্দু নির্দেশ করে, তবে:",
        options: [
          "$z_1 - z_2 + z_3 - z_4 = 0$",
          "$z_1 + z_2 = z_3 + z_4$",
          "$\\operatorname{amp}\\left(\\frac{z_3-z_4}{z_1-z_3}\\right) = \\frac{\\pi}{2}$",
          "$\\operatorname{amp}\\left(\\frac{z_1-z_2}{z_3-z_4}\\right) = \\frac{\\pi}{2}$"
        ],
        correctAnswer: 2
      },
      {
        id: 10,
        text: "$z_1 = a + ib$ এবং $z_2 = \\frac{1}{-a+ib}$ বিন্দু দুটির সংযোগকারী সরলরেখা কোন বিন্দুর মধ্য দিয়ে যায়?",
        options: [
          "মূলবিন্দু (Origin)",
          "$z = 1 + i0$",
          "$z = 0 + i$",
          "$z = 1 + i$"
        ],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "যদি আর্গন্ড তলে $A, B, C$ বিন্দু তিনটি যথাক্রমে $z_1, z_2, z_3$ নির্দেশ করে যেন $z_1 = \\frac{\\lambda z_2 + z_3}{\\lambda + 1}$ (যেখানে $\\lambda \\in \\mathbb{R}$), তবে $BC$ রেখা থেকে $A$-এর দূরত্ব কত?",
        options: [
          "$\\lambda$",
          "$\\frac{\\lambda}{\\lambda+1}$",
          "$1$",
          "$0$"
        ],
        correctAnswer: 3
      },
      {
        id: 12,
        text: "$1 + z + z^3 + z^4 = 0$ সমীকরণের মূলগুলি যার শীর্ষবিন্দু নির্দেশ করে তা হলো:",
        options: [
          "একটি বর্গক্ষেত্র",
          "একটি সমবাহু ত্রিভুজ",
          "একটি রম্বস",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 13,
        text: "জটিল সংখ্যা $z_1, z_2, z_3$ যথাক্রমে $C$ বিন্দুতে সমকোণ বিশিষ্ট একটি সমদ্বিবাহু সমকোণী ত্রিভুজের শীর্ষবিন্দু $A, B, C$ নির্দেশ করলে:",
        options: [
          "$(z_1 - z_3)^2 = 2(z_1 - z_2)(z_3 - z_2)$",
          "$(z_1 - z_2)^2 = 2(z_1 - z_3)(z_3 - z_2)$",
          "$(z_1 + z_2)^2 = 2(z_1 - z_2)(z_3 + z_2)$",
          "$(z_1 + z_3)^2 = 2(z_1 + z_2)(z_3 + z_2)$"
        ],
        correctAnswer: 1
      },
      {
        id: 14,
        text: "$ABCD$ একটি বর্গক্ষেত্র যার শীর্ষবিন্দুগুলি ঘড়ির কাঁটার বিপরীত দিকে নেওয়া হয়েছে। যদি $A$ জটিল সংখ্যা $z$ নির্দেশ করে এবং কর্ণের ছেদবিন্দু মূলবিন্দু হয়, তবে $D$ বিন্দুটি কোন জটিল সংখ্যা নির্দেশ করে?",
        options: [
          "$iz$",
          "$\\bar{z}$",
          "$-z$",
          "$-iz$"
        ],
        correctAnswer: 3
      },
      {
        id: 15,
        text: "$\\frac{1}{(\\sqrt{3}-i)^{25}}$ জটিল সংখ্যাটির নির্দেশক ভেক্টর বাস্তব অক্ষের ধনাত্মক দিকের সাথে যে কোণ তৈরি করে তা হলো:",
        options: [
          "$\\frac{2\\pi}{3}$",
          "$-\\frac{\\pi}{6}$",
          "$\\frac{5\\pi}{6}$",
          "$\\frac{\\pi}{6}$"
        ],
        correctAnswer: 3
      },
      {
        id: 16,
        text: "যদি $z_0, z_1$ সঞ্চারপথ $|z - 1| = 1$-এর ওপর দুটি বিন্দু $P, Q$ নির্দেশ করে এবং $PQ$ রেখাংশ $z = 1$ বিন্দুতে $\\pi/2$ কোণ উৎপন্ন করে, তবে $z_1$-এর মান:",
        options: [
          "$1 + i(z_0 - 1)$",
          "$\\frac{i}{z_0 - 1}$",
          "$1 - i(z_0 - 1)$",
          "$i(z_0 - 1)$"
        ],
        correctAnswer: 2
      },
      {
        id: 17,
        text: "যদি $z^n \\sin\\theta_0 + z^{n-1}\\sin\\theta_1 + \\dots + z\\sin\\theta_{n-1} + \\sin\\theta_n = 2$ হয়, তবে সমীকরণটির সকল মূলের অবস্থান:",
        options: [
          "$|z| = \\frac{1}{2}$ বৃত্তের বাইরে",
          "$|z| = \\frac{1}{2}$ বৃত্তের ভেতরে",
          "$|z| = \\frac{1}{2}$ বৃত্তের ওপর",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "ধরা যাক $z_1, z_2, z_3$ হলো $|z| = 1$ বৃত্তকে পরিলিখিত একটি সমবাহু ত্রিভুজের শীর্ষবিন্দু। যদি $z_1 = 1 + \\sqrt{3}i$ হয় এবং শীর্ষবিন্দুগুলি ঘড়ির কাঁটার বিপরীত দিকে থাকে, তবে $z_2$ হলো:",
        options: [
          "$1 - \\sqrt{3}i$",
          "$2$",
          "$\\frac{1}{2}(1 - \\sqrt{3}i)$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 3
      },
      {
        id: 19,
        text: "আর্গন্ড তলে $z = 4 - 3i$ ভেক্টরটিকে ঘড়ির কাঁটার দিকে $180^\\circ$ কোণে ঘুরিয়ে ৩ গুণ প্রসারিত করা হলো। নতুন ভেক্টরটির জটিল সংখ্যা রূপ কোনটি?",
        options: [
          "$12 + 9i$",
          "$12 - 9i$",
          "$-12 - 9i$",
          "$-12 + 9i$"
        ],
        correctAnswer: 3
      },
      {
        id: 20,
        text: "ভেক্টর $z = 3 - 4i$-কে ঘড়ির কাঁটার বিপরীত দিকে $180^\\circ$ কোণে ঘুরিয়ে $2.5$ গুণ প্রসারিত করা হলো। প্রাপ্ত নতুন ভেক্টরের জটিল সংখ্যা রূপ কোনটি?",
        options: [
          "$\\frac{15}{2} - 10i$",
          "$-\\frac{15}{2} + 10i$",
          "$-\\frac{15}{2} - 10i$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'complex_jee_mock_3',
    title: '৪.১৩ জটিল রাশি JEE মক টেস্ট ৩ (Complex Numbers JEE Mock 3)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $z_1$ এবং $z_2$ যেকোনো দুটি জটিল সংখ্যা হয়, তবে নিচের কোনটি সত্য?",
        options: [
          "$|z_1 + z_2| = |z_1| + |z_2|$",
          "$|z_1 - z_2| = |z_1| - |z_2|$",
          "$|z_1 + z_2| \\le |z_1| + |z_2|$",
          "$|z_1 - z_2| \\le |z_1| - |z_2|$"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "যেকোনো দুটি জটিল সংখ্যা $z_1, z_2$-এর জন্য নিচের কোনটি সঠিক?",
        options: [
          "$|z_1 z_2| = |z_1| |z_2|$",
          "$\\arg(z_1 z_2) = (\\arg z_1)(\\arg z_2)$",
          "$|z_1 + z_2| = |z_1| + |z_2|$",
          "$|z_1 - z_2| \\ge |z_1| - |z_2|$"
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        text: "যদি $z_1, z_2 \\in \\mathbb{C}$ হয়, তবে নিচের কোনটি সঠিক?",
        options: [
          "$|z_1 + z_2| \\ge |z_1| + |z_2|$",
          "$|z_1 - z_2| \\ge |z_1| + |z_2|$",
          "$|z_1 - z_2| \\le |z_1| - |z_2|$",
          "$|z_1 + z_2| \\ge |z_1| - |z_2|$"
        ],
        correctAnswer: 3
      },
      {
        id: 4,
        text: "নিচের কোন উক্তিটি সত্য?",
        options: [
          "$|x - y| = |x| - |y|$",
          "$|x + y| \\le |x| - |y|$",
          "$|x - y| \\ge |x| - |y|$",
          "$|x + y| \\ge |x| - |y|$"
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "$|z_1 + z_2|^2 + |z_1 - z_2|^2$-এর মান কত?",
        options: [
          "$\\frac{1}{2}[|z_1|^2 + |z_2|^2]$",
          "$2[|z_1|^2 + |z_2|^2]$",
          "$2[|z_1|^2 - |z_2|^2]$",
          "$\\frac{1}{2}[|z_1|^2 - |z_2|^2]$"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "যদি $z, iz$ এবং $z + iz$ একটি ত্রিভুজের শীর্ষবিন্দু হয় যার ক্ষেত্রফল ২ বর্গ একক, তবে $|z|$-এর মান কত?",
        options: [
          "$-2$",
          "$2$",
          "$4$",
          "$8$"
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        text: "যদি জটিল তলে $z, z + iz$ এবং $iz$ বিন্দু তিনটি দ্বারা গঠিত ত্রিভুজের ক্ষেত্রফল ১৮ হয়, তবে $|z|$-এর মান কত?",
        options: [
          "$6$",
          "$9$",
          "$3\\sqrt{2}$",
          "$2\\sqrt{3}$"
        ],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "যদি $A, B, C$ বিন্দু তিনটি যথাক্রমে $3 + 4i, 5 - 2i, -1 + 16i$ নির্দেশ করে, তবে $A, B, C$ হলো:",
        options: [
          "সমরেখ (Collinear)",
          "সমবাহু ত্রিভুজের শীর্ষবিন্দু",
          "সমদ্বিবাহু ত্রিভুজের শীর্ষবিন্দু",
          "সমকোণী ত্রিভুজের শীর্ষবিন্দু"
        ],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "যদি $z_1 = 1 + i, z_2 = -2 + 3i$ এবং $z_3 = ai/3$ বিন্দু তিনটি সমরেখ হয়, তবে $a$-এর মান কত?",
        options: [
          "$-1$",
          "$3$",
          "$4$",
          "$5$"
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        text: "আর্গন্ড চিত্রে $z_1, z_2, z_3$ শীর্ষবিন্দু বিশিষ্ট ত্রিভুজের ক্ষেত্রফল কত?",
        options: [
          "$\\frac{1}{4iz_1}\\sum |z_2 - z_3| |z_1|^2$",
          "$\\frac{1}{2}|z_1||z_2|$",
          "$\\frac{1}{3}|z_1|^2$",
          "$\\sum \\frac{\\bar{z}_1 - \\bar{z}_3}{4iz_1}$"
        ],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "আর্গন্ড তলে $1 + i, i - 1, 2i$ বিন্দু তিনটি দ্বারা গঠিত ত্রিভুজের ক্ষেত্রফল কত?",
        options: [
          "$1/2$",
          "$1$",
          "$\\sqrt{2}$",
          "$2$"
        ],
        correctAnswer: 1
      },
      {
        id: 12,
        text: "জটিল সংখ্যা $0, z, ze^{i\\alpha}$ ($0 < \\alpha < \\pi$) দ্বারা গঠিত ত্রিভুজের ক্ষেত্রফল কত?",
        options: [
          "$\\frac{1}{2}|z|^2 \\cos\\alpha$",
          "$\\frac{1}{2}|z|^2 \\sin\\alpha$",
          "$\\frac{1}{2}|z|^2 \\sin\\alpha\\cos\\alpha$",
          "$\\frac{1}{2}|z|^2$"
        ],
        correctAnswer: 1
      },
      {
        id: 13,
        text: "যদি $z^3 + iz^2 + 2i = 0$-এর মূলগুলি আর্গন্ড তলে $\\Delta ABC$-এর শীর্ষবিন্দু হয়, তবে ত্রিভুজটির ক্ষেত্রফল কত?",
        options: [
          "$\\frac{3\\sqrt{7}}{2}$",
          "$\\frac{3\\sqrt{7}}{4}$",
          "$2$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 14,
        text: "যদি $2z_1 - 3z_2 + z_3 = 0$ হয়, তবে $z_1, z_2, z_3$ কী নির্দেশ করে?",
        options: [
          "একটি ত্রিভুজের তিনটি শীর্ষবিন্দু",
          "তিনটি সমরেখ বিন্দু",
          "একটি রম্বসের তিনটি শীর্ষবিন্দু",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 15,
        text: "জটিল সংখ্যা $z = x + iy$ যা $\\left|\\frac{z-5i}{z+5i}\\right| = 1$ সিদ্ধ করে, তা কোথায় অবস্থিত?",
        options: [
          "বাস্তব অক্ষ (x-অক্ষ)",
          "$y = 5$ সরলরেখা",
          "মূলবিন্দুগামী একটি বৃত্ত",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 16,
        text: "যদি $z = x + iy$ এমন জটিল সংখ্যা হয় যেন $\\left|z + \\frac{i}{2}\\right|^2 = \\left|z - \\frac{i}{2}\\right|^2$, তবে $z$-এর সঞ্চারপথ হলো:",
        options: [
          "$2y = x$",
          "$y = x$",
          "y-অক্ষ",
          "x-অক্ষ"
        ],
        correctAnswer: 3
      },
      {
        id: 17,
        text: "যদি $\\arg(z - a) = \\frac{\\pi}{4}$ হয় (যেখানে $a \\in \\mathbb{R}$), তবে $z \\in \\mathbb{C}$-এর সঞ্চারপথ হলো:",
        options: [
          "অধিবৃত্ত",
          "পরাবৃত্ত",
          "উপবৃত্ত",
          "সরলরেখা"
        ],
        correctAnswer: 3
      },
      {
        id: 18,
        text: "$\\left|\\frac{z-1}{z-i}\\right| = 1$ সমীকরণ দ্বারা প্রদত্ত $z$-এর সঞ্চারপথ হলো:",
        options: [
          "একটি বৃত্ত",
          "একটি উপবৃত্ত",
          "একটি সরলরেখা",
          "একটি পরাবৃত্ত"
        ],
        correctAnswer: 2
      },
      {
        id: 19,
        text: "$|iz - 1| + |z - i| = 2$ সমীকরণ সিদ্ধকারী বিন্দু $z$-এর সঞ্চারপথ হলো:",
        options: [
          "একটি সরলরেখা",
          "একটি বৃত্ত",
          "একটি উপবৃত্ত",
          "একজোড়া সরলরেখা"
        ],
        correctAnswer: 0
      },
      {
        id: 20,
        text: "যদি $\\frac{2z+1}{iz+1}$-এর কাল্পনিক অংশ $-2$ হয়, তবে জটিল তলে $z$-এর সঞ্চারপথ হলো:",
        options: [
          "একটি বৃত্ত",
          "একটি সরলরেখা",
          "একটি পরাবৃত্ত",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'complex_jee_mock_4',
    title: '৪.১৪ জটিল রাশি JEE মক টেস্ট ৪ (Complex Numbers JEE Mock 4)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "$|z - 1| = |z + i|$ দ্বারা নির্দেশিত সঞ্চারপথ হলো:",
        options: [
          "$1$ ব্যাসার্ধের বৃত্ত",
          "$(1, 0)$ ও $(0, -1)$ নাভি বিশিষ্ট উপবৃত্ত",
          "মূলবিন্দুগামী একটি সরলরেখা",
          "$(1, 0)$ ও $(0, 1)$ সংযোগকারী রেখাকে ব্যাস ধরে বৃত্ত"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "যদি $z^2 + |z|z + |z|^2 = 0$ হয়, তবে $z$-এর সঞ্চারপথ হলো:",
        options: [
          "একটি বৃত্ত",
          "একটি সরলরেখা",
          "একজোড়া সরলরেখা",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "যদি $z = x + iy$ এবং $|z - 2 + i| = |z - 3 - i|$ হয়, তবে $z$-এর সঞ্চারপথ হলো:",
        options: [
          "$2x + 4y - 5 = 0$",
          "$2x - 4y - 5 = 0$",
          "$x + 2y = 0$",
          "$x - 2y + 5 = 0$"
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "যদি $z - 2 - 3i$-এর অ্যামপ্লিচিউড $\\pi/4$ হয়, তবে $z = x + iy$-এর সঞ্চারপথ হলো:",
        options: [
          "$x + y - 1 = 0$",
          "$x - y - 1 = 0$",
          "$x + y + 1 = 0$",
          "$x - y + 1 = 0$"
        ],
        correctAnswer: 3
      },
      {
        id: 5,
        text: "যদি $z = x + iy$ এবং $\\arg\\left(\\frac{z-2}{z+2}\\right) = \\frac{\\pi}{6}$ হয়, তবে $z$-এর সঞ্চারপথ হলো:",
        options: [
          "একটি সরলরেখা",
          "একটি বৃত্ত",
          "একটি পরাবৃত্ত",
          "একটি উপবৃত্ত"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "যদি $z = (\\lambda + 3) + i\\sqrt{5 - \\lambda^2}$ হয়, তবে $z$-এর সঞ্চারপথ হলো:",
        options: [
          "বৃত্ত",
          "সরলরেখা",
          "পরাবৃত্ত",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "একটি জটিল সংখ্যা $z$ এমন যে $\\arg\\left(\\frac{z-2}{z+2}\\right) = \\frac{\\pi}{3}$। সংখ্যাটির নির্দেশক বিন্দু যার ওপর অবস্থান করবে:",
        options: [
          "একটি উপবৃত্ত",
          "একটি পরাবৃত্ত",
          "একটি বৃত্ত",
          "একটি সরলরেখা"
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "সমীকরণ $|z - 5i| \\div |z + 5i| = 12$ ($z = x + iy$) কী নির্দেশ করে?",
        options: [
          "বৃত্ত",
          "উপবৃত্ত",
          "পরাবৃত্ত",
          "কোনো বাস্তব বক্ররেখা নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "যদি $\\frac{|z-2|}{|z-3|} = 2$ একটি বৃত্ত নির্দেশ করে, তবে এর ব্যাসার্ধ কত?",
        options: [
          "$1$",
          "$1/3$",
          "$3/4$",
          "$2/3$"
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        text: "আর্গন্ড চিত্রে একটি বিন্দু $z$ এমনভাবে গতিশীল যেন $|z - 3i| = 2$, তবে এর সঞ্চারপথ হবে:",
        options: [
          "y-অক্ষ",
          "একটি সরলরেখা",
          "একটি বৃত্ত",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 11,
        text: "একটি বৃত্তের ব্যাসার্ধ $r$ এবং কেন্দ্র $z_0$ হলে বৃত্তটির সমীকরণ হলো:",
        options: [
          "$z\\bar{z} - z\\bar{z}_0 - \\bar{z}z_0 + z_0\\bar{z}_0 = r^2$",
          "$z\\bar{z} + z\\bar{z}_0 - \\bar{z}z_0 + z_0\\bar{z}_0 = r^2$",
          "$z\\bar{z} - z\\bar{z}_0 + \\bar{z}z_0 - z_0\\bar{z}_0 = r^2$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 12,
        text: "যদি $|z + \\bar{z}| + |z - \\bar{z}| = 2$ হয়, তবে $z$ কোথায় অবস্থিত?",
        options: [
          "একটি সরলরেখায়",
          "একটি বর্গক্ষেত্রের ওপর",
          "একটি বৃত্তে",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 13,
        text: "যদি $z = x + iy$ হয়, তবে $z\\bar{z} + 2(z + \\bar{z}) + c = 0$ সমীকরণটি প্রকাশ করে:",
        options: [
          "একটি বৃত্ত",
          "সরলরেখা",
          "সমান্তরাল সরলরেখা",
          "বিন্দু"
        ],
        correctAnswer: 0
      },
      {
        id: 14,
        text: "$|z + 1 - i| = |z + i - 1|$ সমীকরণটি প্রকাশ করে:",
        options: [
          "একটি সরলরেখা",
          "একটি বৃত্ত",
          "একটি পরাবৃত্ত",
          "একটি অধিবৃত্ত"
        ],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "$z\\bar{z} + (2 - 3i)z + (2 + 3i)\\bar{z} + 4 = 0$ দ্বারা নির্দেশিত বৃত্তের ব্যাসার্ধ কত?",
        options: [
          "$2$",
          "$3$",
          "$4$",
          "$6$"
        ],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "আর্গন্ড চিত্রে $|z - 4i| + |z + 4i| = 10$ সমীকরণ সিদ্ধকারী সকল বিন্দু $z$ যার ওপর অবস্থিত:",
        options: [
          "সরলরেখা",
          "বৃত্ত",
          "উপবৃত্ত",
          "পরাবৃত্ত"
        ],
        correctAnswer: 2
      },
      {
        id: 17,
        text: "যখন $\\frac{z+i}{z+2}$ সম্পূর্ণ কাল্পনিক হয়, তখন আর্গন্ড চিত্রে $z$-এর সঞ্চারপথ হলো:",
        options: [
          "$\\frac{\\sqrt{5}}{2}$ ব্যাসার্ধের বৃত্ত",
          "$\\frac{5}{4}$ ব্যাসার্ধের বৃত্ত",
          "সরলরেখা",
          "পরাবৃত্ত"
        ],
        correctAnswer: 0
      },
      {
        id: 18,
        text: "যদি $\\log_{\\sqrt{3}}\\left(\\frac{|z|^2 - |z| + 1}{2 + |z|}\\right) < 2$ হয়, তবে $z$-এর সঞ্চারপথ হলো:",
        options: [
          "$|z| = 5$",
          "$|z| < 5$",
          "$|z| > 5$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 19,
        text: "আর্গন্ড তলে $|z - 1| + |z + 1| \\le 4$ দ্বারা নির্ধারিত অঞ্চলটি হলো:",
        options: [
          "উপবৃত্তের অভ্যন্তরীণ অঞ্চল",
          "বৃত্তের বহিঃস্থ অঞ্চল",
          "উপবৃত্তের অভ্যন্তরীণ অঞ্চল ও এর পরিধি",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 20,
        text: "$|z + i| - |z - i| = k$ সমীকরণটি একটি অধিবৃত্ত নির্দেশ করবে যদি:",
        options: [
          "$-2 < k < 2$",
          "$k > 2$",
          "$0 < k < 2$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'complex_jee_mock_5',
    title: '৪.১৫ জটিল রাশি JEE মক টেস্ট ৫ (Complex Numbers JEE Mock 5)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "সমীকরণ $|z - i| - |z + i| = k$ ($k > 0$) একটি উপবৃত্ত নির্দেশ করতে পারে যদি $k$ হয়:",
        options: [
          "$1$",
          "$2$",
          "$4$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "যদি $|z| = 2$ এবং $5z - 1$-এর সঞ্চারপথ $a$ ব্যাসার্ধের বৃত্ত হয় এবং $z_1^2 + z_2^2 - 2z_1z_2\\cos\\theta = 0$ হয়, তবে $|z_1| : |z_2| = $ কত?",
        options: [
          "$a : 1$",
          "$2a : 1$",
          "$a : 10$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "আর্গন্ড তলে $\\log_{1/2}\\left(\\frac{|z-1|+4}{3|z-1|-2}\\right) > 1$ অসমতা সিদ্ধকারী $z$-এর সঞ্চারপথ হলো (যেখানে $|z - 1| \\ne 2/3$):",
        options: [
          "একটি বৃত্ত",
          "একটি বৃত্তের অভ্যন্তর",
          "বৃত্তের বহির্ভাগ",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        text: "ধরা যাক $z = 1 - t + i\\sqrt{t^2 + t + 2}$ যেখানে $t$ বাস্তব পরামিতি। আর্গন্ড তলে $z$-এর সঞ্চারপথ হলো:",
        options: [
          "একটি অধিবৃত্ত",
          "একটি উপবৃত্ত",
          "একটি সরলরেখা",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "যে বৃত্তটি $|z - z_1| = a$ এবং $|z - z_2| = b$ বৃত্তদ্বয়কে বহিঃস্থভাবে স্পর্শ করে, তার কেন্দ্রের সঞ্চারপথ হবে:",
        options: [
          "একটি উপবৃত্ত",
          "একটি অধিবৃত্ত",
          "একটি বৃত্ত",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "$i^{1/3}$-এর মান কোনটি?",
        options: [
          "$\\frac{\\sqrt{3}+i}{2}$",
          "$\\frac{\\sqrt{3}-i}{2}$",
          "$\\frac{1+i\\sqrt{3}}{2}$",
          "$\\frac{1-i\\sqrt{3}}{2}$"
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "যদি $z = (1 + i\\sqrt{3})^{100}$ হয়, তবে $\\frac{\\operatorname{Re}(z)}{\\operatorname{Im}(z)}$ কার সমান?",
        options: [
          "$2^{100}$",
          "$2^{50}$",
          "$\\frac{1}{\\sqrt{3}}$",
          "$\\sqrt{3}$"
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "$(-1 + i\\sqrt{3})^{20}$-এর মান কার সমান?",
        options: [
          "$2^{20}(-1 + i\\sqrt{3})^{20}$",
          "$2^{20}(1 - i\\sqrt{3})^{20}$",
          "$2^{20}(-1 - i\\sqrt{3})^{20}$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        text: "$(-\\sqrt{3} + i)^{53}$ এর মান কত? (যেখানে $i^2 = -1$)",
        options: [
          "$2^{53}(\\sqrt{3} + 2i)$",
          "$2^{52}(\\sqrt{3} + i)$",
          "$2^{53}\\left(\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i\\right)$",
          "$2^{53}(\\sqrt{3} - i)$"
        ],
        correctAnswer: 2
      },
      {
        id: 10,
        text: "যদি $z = \\frac{\\sqrt{3}+i}{2}$ হয়, তবে $z^{69}$-এর মান কত?",
        options: [
          "$-i$",
          "$i$",
          "$1$",
          "$-1$"
        ],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "যদি $a = \\sqrt{2i}$ হয়, তবে নিচের কোনটি সঠিক?",
        options: [
          "$a = 1 + i$",
          "$a = 1 - i$",
          "$a = -(\\sqrt{2})i$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 12,
        text: "যদি $z = \\cos\\theta + i\\sin\\theta$ হয়, তবে $z^n + \\frac{1}{z^n}$-এর মান কত?",
        options: [
          "$\\cos 2n\\theta$",
          "$2\\cos n\\theta$",
          "$2\\sin n\\theta$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 13,
        text: "$(-i)^{1/3}$-এর মান কত?",
        options: [
          "$\\frac{1+\\sqrt{3}i}{2}$",
          "$\\frac{1-\\sqrt{3}i}{2}$",
          "$\\frac{-\\sqrt{3}-i}{2}$",
          "$\\frac{\\sqrt{3}-i}{2}$"
        ],
        correctAnswer: 2
      },
      {
        id: 14,
        text: "$(\\sin\\theta + i\\cos\\theta)^n$-এর মান কার সমান?",
        options: [
          "$\\cos n\\theta + i\\sin n\\theta$",
          "$\\sin n\\theta + i\\cos n\\theta$",
          "$\\cos n\\left(\\frac{\\pi}{2}-\\theta\\right) + i\\sin n\\left(\\frac{\\pi}{2}-\\theta\\right)$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 15,
        text: "$\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)^{3/4}$-এর সকল মূলের গুণফল কত?",
        options: [
          "$-1$",
          "$1$",
          "$3/2$",
          "$-1/2$"
        ],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "$\\left[\\frac{1+\\cos(\\pi/8)+i\\sin(\\pi/8)}{1+\\cos(\\pi/8)-i\\sin(\\pi/8)}\\right]^8$-এর মান কত?",
        options: [
          "$-1$",
          "$0$",
          "$1$",
          "$2$"
        ],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "$\\left(\\frac{\\cos\\theta+i\\sin\\theta}{\\sin\\theta+i\\cos\\theta}\\right)^4$ কার সমান?",
        options: [
          "$\\sin 8\\theta - i\\cos 8\\theta$",
          "$\\cos 8\\theta - i\\sin 8\\theta$",
          "$\\sin 8\\theta + i\\cos 8\\theta$",
          "$\\cos 8\\theta + i\\sin 8\\theta$"
        ],
        correctAnswer: 3
      },
      {
        id: 18,
        text: "$\\frac{(\\cos\\theta+i\\sin\\theta)^4}{(\\sin\\theta+i\\cos\\theta)^5}$ কার সমান?",
        options: [
          "$\\cos\\theta - i\\sin\\theta$",
          "$\\cos 9\\theta - i\\sin 9\\theta$",
          "$\\sin\\theta - i\\cos\\theta$",
          "$\\sin 9\\theta - i\\cos 9\\theta$"
        ],
        correctAnswer: 3
      },
      {
        id: 19,
        text: "$\\frac{(\\cos\\alpha+i\\sin\\alpha)^4}{(\\sin\\beta+i\\cos\\beta)^5} = $ কত?",
        options: [
          "$\\cos(4\\alpha+5\\beta) + i\\sin(4\\alpha+5\\beta)$",
          "$\\cos(4\\alpha+5\\beta) - i\\sin(4\\alpha+5\\beta)$",
          "$\\sin(4\\alpha+5\\beta) - i\\cos(4\\alpha+5\\beta)$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 20,
        text: "$\\frac{(\\cos 2\\theta-i\\sin 2\\theta)^4(\\cos 4\\theta+i\\sin 4\\theta)^{-5}}{(\\cos 3\\theta+i\\sin 3\\theta)^{-2}(\\cos 3\\theta-i\\sin 3\\theta)^{-9}}$-কে $x + iy$ আকারে প্রকাশ করলে পাওয়া যায়:",
        options: [
          "$\\cos 49\\theta - i\\sin 49\\theta$",
          "$\\cos 23\\theta - i\\sin 23\\theta$",
          "$\\cos 49\\theta + i\\sin 49\\theta$",
          "$\\cos 21\\theta + i\\sin 21\\theta$"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'complex_jee_mock_6',
    title: '৪.১৬ জটিল রাশি JEE মক টেস্ট ৬ (Complex Numbers JEE Mock 6)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $\\left(\\frac{1+\\cos\\theta+i\\sin\\theta}{i+\\sin\\theta+i\\cos\\theta}\\right)^4 = \\cos n\\theta + i\\sin n\\theta$ হয়, তবে $n$-এর মান:",
        options: [
          "$1$",
          "$2$",
          "$3$",
          "$4$"
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        text: "$\\frac{(\\cos\\alpha+i\\sin\\alpha)(\\cos\\beta+i\\sin\\beta)}{(\\cos\\gamma+i\\sin\\gamma)(\\cos\\delta+i\\sin\\delta)}$-এর মান কত?",
        options: [
          "$\\cos(\\alpha+\\beta-\\gamma-\\delta) - i\\sin(\\alpha+\\beta-\\gamma-\\delta)$",
          "$\\cos(\\alpha+\\beta-\\gamma-\\delta) + i\\sin(\\alpha+\\beta-\\gamma-\\delta)$",
          "$\\sin(\\alpha+\\beta-\\gamma-\\delta) - i\\cos(\\alpha+\\beta-\\gamma-\\delta)$",
          "$\\sin(\\alpha+\\beta-\\gamma-\\delta) + i\\cos(\\alpha+\\beta-\\gamma-\\delta)$"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "$\\left[\\frac{1-\\cos(\\pi/10)+i\\sin(\\pi/10)}{1-\\cos(\\pi/10)-i\\sin(\\pi/10)}\\right]^{10}$-এর মান কত?",
        options: [
          "$0$",
          "$-1$",
          "$1$",
          "$2$"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "যদি $z = \\frac{1+i\\sqrt{3}}{\\sqrt{3}+i}$ হয়, তবে $(z)^{100}$ কোন পাদভাগে অবস্থান করে?",
        options: [
          "I পাদভাগ",
          "II পাদভাগ",
          "III পাদভাগ",
          "IV পাদভাগ"
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "$(\\cos 2\\theta+i\\sin 2\\theta)^{-5}(\\cos 3\\theta-i\\sin 3\\theta)^6(\\sin\\theta-i\\cos\\theta)^3$-এর $A + iB$ রূপ কোনটি?",
        options: [
          "$(\\cos 25\\theta + i\\sin 25\\theta)$",
          "$i(\\cos 25\\theta + i\\sin 25\\theta)$",
          "$i(\\cos 25\\theta - i\\sin 25\\theta)$",
          "$(\\cos 25\\theta - i\\sin 25\\theta)$"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "$\\frac{(\\cos x+i\\sin x)(\\cos y+i\\sin y)}{(\\cot u+i)(1+i\\tan v)}$-এর $A + iB$ রূপ কোনটি?",
        options: [
          "$\\sin u\\cos v[\\cos(x+y-u-v) + i\\sin(x+y-u-v)]$",
          "$\\sin u\\cos v[\\cos(x+y+u+v) + i\\sin(x+y+u+v)]$",
          "$\\sin u\\cos v[\\cos(x+y+u+v) - i\\sin(x+y+u+v)]$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "$\\sum_{k=1}^6 \\left(\\sin\\frac{2\\pi k}{7} - i\\cos\\frac{2\\pi k}{7}\\right)$-এর মান কত?",
        options: [
          "$-1$",
          "$0$",
          "$-i$",
          "$i$"
        ],
        correctAnswer: 3
      },
      {
        id: 8,
        text: "যদি $x_n = \\cos\\left(\\frac{\\pi}{3^n}\\right) + i\\sin\\left(\\frac{\\pi}{3^n}\\right)$ হয়, তবে $x_1 x_2 x_3 \\dots \\infty$-এর মান কত?",
        options: [
          "$1$",
          "$-1$",
          "$i$",
          "$-i$"
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        text: "যদি $x_n = \\cos\\left(\\frac{\\pi}{4^n}\\right) + i\\sin\\left(\\frac{\\pi}{4^n}\\right)$ হয়, তবে $x_1 x_2 x_3 \\dots \\infty = $ কত?",
        options: [
          "$\\frac{1+i\\sqrt{3}}{2}$",
          "$\\frac{-1+i\\sqrt{3}}{2}$",
          "$\\frac{1-i\\sqrt{3}}{2}$",
          "$\\frac{-1-i\\sqrt{3}}{2}$"
        ],
        correctAnswer: 0
      },
      {
        id: 10,
        text: "$(\\cos\\theta + i\\sin\\theta)\\left(\\cos\\frac{\\theta}{2} + i\\sin\\frac{\\theta}{2}\\right)\\left(\\cos\\frac{\\theta}{2^2} + i\\sin\\frac{\\theta}{2^2}\\right)\\dots$-এর অসীম গুণফলের মান:",
        options: [
          "$\\cos 2\\theta - i\\sin 2\\theta$",
          "$\\cos 2\\theta + i\\sin 2\\theta$",
          "$\\sin 2\\theta - i\\cos 2\\theta$",
          "$\\sin 2\\theta + i\\cos 2\\theta$"
        ],
        correctAnswer: 1
      },
      {
        id: 11,
        text: "$\\left(\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}\\right)\\left(\\cos\\frac{\\pi}{2^2} + i\\sin\\frac{\\pi}{2^2}\\right)\\dots \\infty$-এর মান কত?",
        options: [
          "$-1$",
          "$1$",
          "$0$",
          "$2$"
        ],
        correctAnswer: 0
      },
      {
        id: 12,
        text: "যদি $z_i = \\cos\\frac{i\\pi}{10} + i\\sin\\frac{i\\pi}{10}$ হয়, তবে $z_1 z_2 z_3 z_4$-এর মান কত?",
        options: [
          "$-1$",
          "$1$",
          "$-2$",
          "$2$"
        ],
        correctAnswer: 0
      },
      {
        id: 13,
        text: "যদি $2\\cos\\alpha = a + \\frac{1}{a}$ এবং $2\\cos\\beta = b + \\frac{1}{b}$ হয়, তবে $ab + \\frac{1}{ab}$-এর মান কত?",
        options: [
          "$2\\cos(\\alpha+\\beta)$",
          "$2\\sin(\\alpha+\\beta)$",
          "$2\\cos(\\alpha-\\beta)$",
          "$4\\cos\\alpha\\cos\\beta$"
        ],
        correctAnswer: 0
      },
      {
        id: 14,
        text: "$\\frac{(\\sin\\pi/8 + i\\cos\\pi/8)^8}{(\\sin\\pi/8 - i\\cos\\pi/8)^8} = $ কত?",
        options: [
          "$-1$",
          "$0$",
          "$1$",
          "$2i$"
        ],
        correctAnswer: 2
      },
      {
        id: 15,
        text: "যদি $(\\cos\\theta + i\\sin\\theta)(\\cos 2\\theta + i\\sin 2\\theta)\\dots(\\cos n\\theta + i\\sin n\\theta) = 1$ হয়, তবে $\\theta$-এর মান কত?",
        options: [
          "$4m\\pi$",
          "$\\frac{2m\\pi}{n(n+1)}$",
          "$\\frac{4m\\pi}{n(n+1)}$",
          "$\\frac{m\\pi}{n(n+1)}$"
        ],
        correctAnswer: 2
      },
      {
        id: 16,
        text: "যদি $\\cos\\alpha + \\cos\\beta + \\cos\\gamma = \\sin\\alpha + \\sin\\beta + \\sin\\gamma = 0$ হয়, তবে $\\cos 3\\alpha + \\cos 3\\beta + \\cos 3\\gamma$ কার সমান?",
        options: [
          "$0$",
          "$\\cos(\\alpha+\\beta+\\gamma)$",
          "$3\\cos(\\alpha+\\beta+\\gamma)$",
          "$3\\sin(\\alpha+\\beta+\\gamma)$"
        ],
        correctAnswer: 2
      },
      {
        id: 17,
        text: "যদি $\\cos\\alpha + \\cos\\beta + \\cos\\gamma = 0 = \\sin\\alpha + \\sin\\beta + \\sin\\gamma$ হয়, তবে $\\cos 2\\alpha + \\cos 2\\beta + \\cos 2\\gamma$-এর মান কত?",
        options: [
          "$2\\cos(\\alpha+\\beta+\\gamma)$",
          "$\\cos 2(\\alpha+\\beta+\\gamma)$",
          "$0$",
          "$1$"
        ],
        correctAnswer: 2
      },
      {
        id: 18,
        text: "যদি $\\sin\\alpha + \\sin\\beta + \\sin\\gamma = 0 = \\cos\\alpha + \\cos\\beta + \\cos\\gamma$ হয়, তবে $\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma$-এর মান কত?",
        options: [
          "$2/3$",
          "$3/2$",
          "$1/2$",
          "$1$"
        ],
        correctAnswer: 1
      },
      {
        id: 19,
        text: "যদি $a = \\cos(2\\pi/7) + i\\sin(2\\pi/7)$ হয়, তবে যে দ্বিঘাত সমীকরণের মূলদ্বয় $\\alpha = a + a^2 + a^4$ এবং $\\beta = a^3 + a^5 + a^6$, তা হলো:",
        options: [
          "$x^2 - x + 2 = 0$",
          "$x^2 + x - 2 = 0$",
          "$x^2 - x - 2 = 0$",
          "$x^2 + x + 2 = 0$"
        ],
        correctAnswer: 3
      },
      {
        id: 20,
        text: "যদি $x^2 - x + 1 = 0$ হয়, তবে $\\sum_{n=1}^5 \\left(x^n + \\frac{1}{x^n}\\right)^2$-এর মান কত?",
        options: [
          "$8$",
          "$10$",
          "$12$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'complex_jee_mock_7',
    title: '৪.১৭ জটিল রাশি JEE মক টেস্ট ৭ (Complex Numbers JEE Mock 7)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $n_1, n_2$ ধনাত্মক পূর্ণসংখ্যা হয়, তবে $(1+i)^{n_1} + (1+i^3)^{n_1} + (1+i^5)^{n_2} + (1+i^7)^{n_2}$ একটি বাস্তব সংখ্যা হবে যদি এবং কেবল যদি:",
        options: [
          "$n_1 = n_2 + 1$",
          "$n_1 + 1 = n_2$",
          "$n_1 = n_2$",
          "$n_1, n_2$ যেকোনো দুটি ধনাত্মক পূর্ণসংখ্যা"
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        text: "যদি $a = \\cos\\alpha + i\\sin\\alpha, b = \\cos\\beta + i\\sin\\beta, c = \\cos\\gamma + i\\sin\\gamma$ এবং $\\frac{b}{c} + \\frac{c}{a} + \\frac{a}{b} = 1$ হয়, তবে $\\cos(\\beta-\\gamma) + \\cos(\\gamma-\\alpha) + \\cos(\\alpha-\\beta)$-এর মান:",
        options: [
          "$3/2$",
          "$-3/2$",
          "$0$",
          "$1$"
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        text: "যদি $\\cos A + \\cos B + \\cos C = 0, \\sin A + \\sin B + \\sin C = 0$ এবং $A + B + C = 180^\\circ$ হয়, তবে $\\cos 3A + \\cos 3B + \\cos 3C$-এর মান:",
        options: [
          "$3$",
          "$-3$",
          "$\\sqrt{3}$",
          "$0$"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "$\\log z + \\log z^2 + \\dots + \\log z^n = 0$ সমীকরণ সিদ্ধকারী $z$-এর মান কত?",
        options: [
          "$\\cos\\frac{4m\\pi}{n(n+1)} + i\\sin\\frac{4m\\pi}{n(n+1)}, m = 1, 2, \\dots$",
          "$\\cos\\frac{4m\\pi}{n(n+1)} - i\\sin\\frac{4m\\pi}{n(n+1)}, m = 1, 2, \\dots$",
          "$\\sin\\frac{4m\\pi}{n} + i\\cos\\frac{4m\\pi}{n}, m = 1, 2, \\dots$",
          "$0$"
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "$-1$-এর ঘনমূলগুলির গুণফল কার সমান?",
        options: [
          "$0$",
          "$1$",
          "$-1$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "এককের একটি ঘনমূল হলো:",
        options: [
          "$\\frac{-1+i\\sqrt{3}}{2}$",
          "$\\frac{1+i\\sqrt{3}}{2}$",
          "$\\frac{1-i\\sqrt{3}}{2}$",
          "$\\frac{\\sqrt{3}-i}{2}$"
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "যে দুটি সংখ্যার প্রতিটির বর্গ অন্যটির সমান, তারা হলো:",
        options: [
          "$\\omega, \\omega^3$",
          "$-i, i$",
          "$-1, 1$",
          "$\\omega, \\omega^2$"
        ],
        correctAnswer: 3
      },
      {
        id: 8,
        text: "যদি $1, \\omega, \\omega^2$ এককের ঘনমূল হয়, তবে তাদের গুণফল কত?",
        options: [
          "$0$",
          "$\\omega$",
          "$-1$",
          "$1$"
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        text: "$(8)^{1/3}$-এর মান হলো:",
        options: [
          "$-1 + i\\sqrt{3}$",
          "$-1 - i\\sqrt{3}$",
          "$2$",
          "এগুলোর সবকটি"
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        text: "যদি $\\left(\\frac{1+i\\sqrt{3}}{1-i\\sqrt{3}}\\right)^n$ একটি পূর্ণসংখ্যা হয়, তবে $n$-এর মান:",
        options: [
          "$1$",
          "$2$",
          "$3$",
          "$4$"
        ],
        correctAnswer: 2
      },
      {
        id: 11,
        text: "$\\left(\\frac{\\sqrt{3}+i}{2}\\right)^6 + \\left(\\frac{i-\\sqrt{3}}{2}\\right)^6$ কার সমান?",
        options: [
          "$-2$",
          "$0$",
          "$2$",
          "$1$"
        ],
        correctAnswer: 0
      },
      {
        id: 12,
        text: "যদি $\\frac{1+\\sqrt{3}i}{2}$ সমীকরণ $x^4 - x^3 + x - 1 = 0$-এর একটি মূল হয়, তবে এর বাস্তব মূলগুলি হলো:",
        options: [
          "$1, 1$",
          "$-1, -1$",
          "$1, -1$",
          "$1, 2$"
        ],
        correctAnswer: 2
      },
      {
        id: 13,
        text: "যদি $z = \\frac{\\sqrt{3}+i}{-2}$ হয়, তবে $z^{69}$-এর মান কত?",
        options: [
          "$1$",
          "$-1$",
          "$i$",
          "$-i$"
        ],
        correctAnswer: 2
      },
      {
        id: 14,
        text: "যদি $\\omega$ এককের জটিল ঘনমূল হয়, তবে $n$-এর ধনাত্মক অখণ্ড মানের জন্য $\\omega \\cdot \\omega^2 \\cdot \\omega^3 \\dots \\omega^n$-এর গুণফল হবে:",
        options: [
          "$\\frac{1-i\\sqrt{3}}{2}$",
          "$\\frac{-1-i\\sqrt{3}}{2}$",
          "$1$",
          "(b) এবং (c) উভয়ই"
        ],
        correctAnswer: 3
      },
      {
        id: 15,
        text: "যদি $\\omega (\\ne 1)$ এককের ঘনমূল হয় এবং $(1+\\omega)^7 = A + B\\omega$ হয়, তবে $A$ ও $B$ যথাক্রমে:",
        options: [
          "$0, 1$",
          "$1, 0$",
          "$1, 1$",
          "$-1, 1$"
        ],
        correctAnswer: 2
      },
      {
        id: 16,
        text: "যদি $\\omega$ এককের ঘনমূল হয়, তবে $(1+\\omega-\\omega^2)(1-\\omega+\\omega^2) = $ কত?",
        options: [
          "$1$",
          "$0$",
          "$2$",
          "$4$"
        ],
        correctAnswer: 3
      },
      {
        id: 17,
        text: "যদি $1$-এর ঘনমূল $\\omega$ হয়, তবে $(3 + \\omega + 3\\omega^2)^4$-এর মান কত?",
        options: [
          "$0$",
          "$16$",
          "$16\\omega$",
          "$16\\omega^2$"
        ],
        correctAnswer: 2
      },
      {
        id: 18,
        text: "যদি $1, \\omega, \\omega^2$ এককের তিনটি ঘনমূল হয়, তবে $(3 + \\omega^2 + \\omega^4)^6 = $ কত?",
        options: [
          "$64$",
          "$729$",
          "$2$",
          "$0$"
        ],
        correctAnswer: 0
      },
      {
        id: 19,
        text: "$\\frac{a+b\\omega+c\\omega^2}{b+c\\omega+a\\omega^2} + \\frac{a+b\\omega+c\\omega^2}{c+a\\omega+b\\omega^2}$-এর মান কত হবে?",
        options: [
          "$1$",
          "$-1$",
          "$2$",
          "$-2$"
        ],
        correctAnswer: 1
      },
      {
        id: 20,
        text: "যদি $\\omega$ এককের অবাস্তব ঘনমূল হয়, তবে $(a+b)(a+b\\omega)(a+b\\omega^2)$-এর মান:",
        options: [
          "$a^3 + b^3$",
          "$a^3 - b^3$",
          "$a^2 + b^2$",
          "$a^2 - b^2$"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'complex_jee_mock_8',
    title: '৪.১৮ জটিল রাশি JEE মক টেস্ট ৮ (Complex Numbers JEE Mock 8)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $\\omega$ এককের কাল্পনিক ঘনমূল হয়, তবে $(1+\\omega-\\omega^2)^7$ কার সমান?",
        options: [
          "$128\\omega$",
          "$-128\\omega$",
          "$128\\omega^2$",
          "$-128\\omega^2$"
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        text: "যদি $\\omega$ এককের ঘনমূল হয়, তবে $(3+5\\omega+3\\omega^2)^2 + (3+3\\omega+5\\omega^2)^2 = $ কত?",
        options: [
          "$4$",
          "$0$",
          "$-4$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "যদি $\\omega$ এককের একটি কাল্পনিক ঘনমূল হয়, তবে $\\sin\\left[(\\omega^{10}+\\omega^{23})\\pi - \\frac{\\pi}{4}\\right]$-এর মান কত?",
        options: [
          "$-\\sqrt{3}/2$",
          "$-1/\\sqrt{2}$",
          "$1/\\sqrt{2}$",
          "$\\sqrt{3}/2$"
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        text: "যদি $1, \\omega, \\omega^2$ এককের তিনটি ঘনমূল হয়, তবে $a+b+c=0$ হলে $(a+b\\omega+c\\omega^2)^3 + (a+b\\omega^2+c\\omega)^3$-এর মান কত?",
        options: [
          "$27abc$",
          "$0$",
          "$3abc$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "$(1-\\omega+\\omega^2)^6(1-\\omega^2+\\omega)^6$-এর মান কত, যেখানে $\\omega, \\omega^2$ এককের ঘনমূল?",
        options: [
          "$128\\omega$",
          "$-128\\omega^2$",
          "$-128\\omega$",
          "$128\\omega^2$"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "যদি $\\omega$ এককের ঘনমূল হয়, তবে $(1-\\omega+\\omega^2)^5 + (1+\\omega-\\omega^2)^5$-এর মান কত?",
        options: [
          "$16$",
          "$32$",
          "$48$",
          "$-32$"
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        text: "যদি $\\omega$ এককের জটিল ঘনমূল হয়, তবে $225 + (3\\omega+8\\omega^2)^2 + (3\\omega^2+8\\omega)^2 = $ কত?",
        options: [
          "$72$",
          "$192$",
          "$200$",
          "$248$"
        ],
        correctAnswer: 3
      },
      {
        id: 8,
        text: "যদি $x = a, y = b\\omega, z = c\\omega^2$ হয়, যেখানে $\\omega$ এককের একটি জটিল ঘনমূল, তবে $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = $ কত?",
        options: [
          "$3$",
          "$1$",
          "$0$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        text: "যদি $x = a+b, y = a\\omega+b\\omega^2, z = a\\omega^2+b\\omega$ হয়, তবে $x^3+y^3+z^3$-এর মান কার সমান?",
        options: [
          "$a^3+b^3$",
          "$3(a^3+b^3)$",
          "$3(a^2+b^2)$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "যদি $\\omega$ একক ব্যতীত এককের একটি $n$-তম মূল হয়, তবে $1 + \\omega + \\omega^2 + \\dots + \\omega^{n-1}$-এর মান:",
        options: [
          "$0$",
          "$1$",
          "$-1$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 11,
        text: "যদি $\\omega$ এককের জটিল ঘনমূল হয়, তবে $(1+\\omega)(1+\\omega^2)(1+\\omega^4)(1+\\omega^8)\\dots$ $2n$ সংখ্যক উৎপাদক পর্যন্ত গুণফল কত?",
        options: [
          "$0$",
          "$1$",
          "$-1$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 12,
        text: "$(1+2\\omega+\\omega^2)^{3n} - (1+\\omega+2\\omega^2)^{3n}$-এর মান কত?",
        options: [
          "$0$",
          "$1$",
          "$\\omega$",
          "$\\omega^2$"
        ],
        correctAnswer: 0
      },
      {
        id: 13,
        text: "যদি $\\alpha$ এবং $\\beta$ এককের কাল্পনিক ঘনমূল হয়, তবে $\\alpha^4 + \\beta^{28} + \\frac{1}{\\alpha\\beta}$-এর মান কত?",
        options: [
          "$1$",
          "$-1$",
          "$0$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 14,
        text: "যদি এককের ঘনমূলগুলি $1, \\omega, \\omega^2$ হয়, তবে $(x-2)^3 + 27 = 0$ সমীকরণের মূলগুলি হলো:",
        options: [
          "$-1, -1, -1$",
          "$-1, -\\omega, -\\omega^2$",
          "$-1, 2+3\\omega, 2+3\\omega^2$",
          "$-1, 2-3\\omega, 2-3\\omega^2$"
        ],
        correctAnswer: 3
      },
      {
        id: 15,
        text: "যদি $\\alpha, \\beta$ এককের অবাস্তব ঘনমূল হয়, তবে $\\alpha\\beta + \\alpha^5 + \\beta^5$ কার সমান?",
        options: [
          "$1$",
          "$0$",
          "$-1$",
          "$3$"
        ],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "যদি $\\alpha$ এবং $\\beta$ এককের কাল্পনিক ঘনমূল হয়, তবে $\\alpha^4 + \\beta^4 + \\frac{1}{\\alpha\\beta} = $ কত?",
        options: [
          "$3$",
          "$0$",
          "$1$",
          "$2$"
        ],
        correctAnswer: 1
      },
      {
        id: 17,
        text: "যদি $\\omega$ এককের একটি ঘনমূল হয়, তবে $\\begin{vmatrix} x+1 & \\omega & \\omega^2 \\\\ \\omega & x+\\omega^2 & 1 \\\\ \\omega^2 & 1 & x+\\omega \\end{vmatrix} = 0$ সমীকরণের একটি মূল হলো:",
        options: [
          "$x = 1$",
          "$x = \\omega$",
          "$x = \\omega^2$",
          "$x = 0$"
        ],
        correctAnswer: 3
      },
      {
        id: 18,
        text: "যদি $1, \\omega, \\omega^2$ এককের ঘনমূল হয়, তবে $\\Delta = \\begin{vmatrix} 1 & \\omega^n & \\omega^{2n} \\\\ \\omega^n & \\omega^{2n} & 1 \\\\ \\omega^{2n} & 1 & \\omega^n \\end{vmatrix}$-এর মান কার সমান?",
        options: [
          "$0$",
          "$1$",
          "$\\omega$",
          "$\\omega^2$"
        ],
        correctAnswer: 0
      },
      {
        id: 19,
        text: "যদি $\\omega (\\ne 1)$ এককের ঘনমূল হয়, তবে $\\begin{vmatrix} 1 & 1+i+\\omega^2 & \\omega^2 \\\\ 1-i & -1 & \\omega^2-1 \\\\ -i & -i+\\omega-1 & -1 \\end{vmatrix}$ নির্ণায়কটির মান কত?",
        options: [
          "$0$",
          "$1$",
          "$\\omega$",
          "$i$"
        ],
        correctAnswer: 0
      },
      {
        id: 20,
        text: "যদি $\\omega$ সমীকরণ $z^3 = 1$-এর একটি জটিল মূল হয়, তবে $\\omega + \\omega^{\\left(\\frac{1}{2} + \\frac{3}{8} + \\frac{9}{32} + \\frac{27}{128} + \\dots\\right)}$-এর মান কত?",
        options: [
          "$-1$",
          "$0$",
          "$9$",
          "$i$"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'complex_jee_mock_9',
    title: '৪.১৯ জটিল রাশি JEE মক টেস্ট ৯ (Complex Numbers JEE Mock 9)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "এককের $n$ সংখ্যক $n$-তম মূলগুলির গুণফল হলো:",
        options: [
          "$1$",
          "$-1$",
          "$(-1)^{n-1}$",
          "$(-1)^n$"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "ধরা যাক $\\omega_n = \\cos\\frac{2\\pi}{n} + i\\sin\\frac{2\\pi}{n}$ ($i^2 = -1$), তবে $(x+y\\omega_3+z\\omega_3^2)(x+y\\omega_3^2+z\\omega_3)$ কার সমান?",
        options: [
          "$0$",
          "$x^2+y^2+z^2$",
          "$x^2+y^2+z^2-yz-zx-xy$",
          "$x^2+y^2+z^2+yz+zx+xy$"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "যদি $p$, $n$-এর গুণিতক না হয়, তবে এককের $n$-তম মূলগুলির $p$-তম ঘাতের যোগফল কত?",
        options: [
          "$0$",
          "$1$",
          "$n$",
          "$p$"
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "যদি $n > 1$ একটি ধনাত্মক পূর্ণসংখ্যা হয় এবং $z$ একটি জটিল সংখ্যা হয় যা $z^n = (z+1)^n$ সিদ্ধ করে, তবে:",
        options: [
          "$\\operatorname{Re}(z) < 0$",
          "$\\operatorname{Re}(z) > 0$",
          "$\\operatorname{Re}(z) = 0$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "যদি $z_1, z_2, z_3, z_4$ সমীকরণ $z^4 = 1$-এর মূল হয়, তবে $\\sum_{i=1}^{4} z_i^3$-এর মান কত?",
        options: [
          "$0$",
          "$1$",
          "$i$",
          "$1+i$"
        ],
        correctAnswer: 0
      },
      {
        id: 6,
        text: "যদি $\\alpha$ এককের একটি কাল্পনিক ঘনমূল হয়, তবে $n \\in \\mathbb{N}$-এর জন্য $\\alpha^{3n+1} + \\alpha^{3n+3} + \\alpha^{3n+5}$-এর মান কত?",
        options: [
          "$-1$",
          "$0$",
          "$1$",
          "$3$"
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        text: "যদি $\\alpha \\ne 1$ এককের যেকোনো $n$-তম মূল হয়, তবে $S = 1 + 3\\alpha + 5\\alpha^2 + \\dots$ ($n$ পদ পর্যন্ত) কার সমান?",
        options: [
          "$\\frac{2n}{1-\\alpha}$",
          "$-\\frac{2n}{1-\\alpha}$",
          "$\\frac{n}{1-\\alpha}$",
          "$-\\frac{n}{1-\\alpha}$"
        ],
        correctAnswer: 1
      },
      {
        id: 8,
        text: "$x^{12} - 1 = 0$ এবং $x^4 + x^2 + 1 = 0$ সমীকরণ দুটির সাধারণ মূলগুলি হলো:",
        options: [
          "$\\pm\\omega$",
          "$\\pm\\omega^2$",
          "$\\pm\\omega, \\pm\\omega^2$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        text: "নিচের কোনটি $-\\frac{1}{2} + \\frac{i\\sqrt{3}}{2}$-এর একটি চতুর্থ মূল?",
        options: [
          "$\\operatorname{cis}\\left(\\frac{\\pi}{2}\\right)$",
          "$\\operatorname{cis}\\left(\\frac{\\pi}{12}\\right)$",
          "$\\operatorname{cis}\\left(\\frac{\\pi}{6}\\right)$",
          "$\\operatorname{cis}\\left(\\frac{\\pi}{3}\\right)$"
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "যদি $\\omega$ এককের একটি জটিল মূল হয়, তবে নিচের কোনটি সঠিক?",
        options: [
          "$\\omega^4 = 1$",
          "$\\omega^{14} = \\omega^2$",
          "$\\omega^6 = \\omega$",
          "$\\omega^5 = 1$"
        ],
        correctAnswer: 1
      },
      {
        id: 11,
        text: "যদি $\\omega$ এককের কাল্পনিক ঘনমূল হয়, তবে $\\frac{1}{1+2\\omega} + \\frac{1}{2+\\omega} - \\frac{1}{1+\\omega}$-এর মান কত?",
        options: [
          "$-2$",
          "$-1$",
          "$1$",
          "$0$"
        ],
        correctAnswer: 3
      },
      {
        id: 12,
        text: "$\\left(\\frac{1+i\\sqrt{3}}{1-i\\sqrt{3}}\\right)^6 + \\left(\\frac{1-i\\sqrt{3}}{1+i\\sqrt{3}}\\right)^6$-এর মান কত?",
        options: [
          "$2$",
          "$-2$",
          "$1$",
          "$0$"
        ],
        correctAnswer: 0
      },
      {
        id: 13,
        text: "যদি সমীকরণ $x^3 - 1 = 0$-এর মূলগুলি $1, \\omega$ এবং $\\omega^2$ হয়, তবে $(1-\\omega)(1-\\omega^2)$-এর মান কত?",
        options: [
          "$0$",
          "$1$",
          "$2$",
          "$3$"
        ],
        correctAnswer: 3
      },
      {
        id: 14,
        text: "যদি $i = \\sqrt{-1}$ এবং $\\omega =$ এককের অবাস্তব ঘনমূল হয়, তবে $\\frac{(1+i)^{2n} - (1-i)^{2n}}{(1+\\omega^4-\\omega^2)(1-\\omega^4+\\omega^2)}$ কার সমান?",
        options: [
          "$0$, যদি $n$ জোড় সংখ্যা হয়",
          "$0$, সকল $n \\in \\mathbb{Z}$-এর জন্য",
          "$2^{n-1} - i$, সকল $n \\in \\mathbb{N}$-এর জন্য",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "যদি $z + z^{-1} = 1$ হয়, তবে $z^{100} + z^{-100}$ কার সমান?",
        options: [
          "$i$",
          "$-i$",
          "$1$",
          "$-1$"
        ],
        correctAnswer: 3
      },
      {
        id: 16,
        text: "যদি $\\alpha$ অবাস্তব হয় এবং $\\alpha = \\sqrt[5]{1}$ হয়, তবে $2^{|1-\\alpha+\\alpha^2+\\alpha^3-\\alpha^4|}$-এর মান কার সমান?",
        options: [
          "$4$",
          "$2$",
          "$1$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "নিচের কোন বিবৃতিগুলি সত্য?\n(1) জটিল সংখ্যাগুলির গুণফলের অ্যামপ্লিচিউড তাদের অ্যামপ্লিচিউডের গুণফলের সমান।\n(2) বাস্তব সহগবিশিষ্ট যেকোনো বহুপদী $f(x) = 0$-এর ক্ষেত্রে কাল্পনিক মূলগুলি অনুবন্ধী যুগল হিসেবে আসে।\n(3) জটিল সংখ্যায় ক্রম সম্পর্ক (order relation) বিদ্যমান কিন্তু বাস্তব সংখ্যায় নেই।\n(4) এককের ঘনমূল এবং চতুর্থ মূল হিসেবে ব্যবহৃত $\\omega$-এর মান ভিন্ন।",
        options: [
          "(1) এবং (2) শুধুমাত্র",
          "(2) এবং (4) শুধুমাত্র",
          "(3) এবং (4) শুধুমাত্র",
          "(1), (2) এবং (4) শুধুমাত্র"
        ],
        correctAnswer: 1
      },
      {
        id: 18,
        text: "যদি $x = a+b, y = a\\alpha+b\\beta$ এবং $z = a\\beta+b\\alpha$ হয়, যেখানে $\\alpha, \\beta$ এককের জটিল ঘনমূল, তবে $xyz = $ কত?",
        options: [
          "$a^2+b^2$",
          "$a^3+b^3$",
          "$a^3b^3$",
          "$a^3-b^3$"
        ],
        correctAnswer: 1
      },
      {
        id: 19,
        text: "$\\frac{(-1+i\\sqrt{3})^{15}}{(1-i)^{20}} + \\frac{(-1-i\\sqrt{3})^{15}}{(1+i)^{20}}$ কার সমান?",
        options: [
          "$-64$",
          "$-32$",
          "$-16$",
          "$\\frac{1}{16}$"
        ],
        correctAnswer: 0
      },
      {
        id: 20,
        text: "$(1-\\omega+\\omega^2)(1-\\omega^2+\\omega^4)(1-\\omega^4+\\omega^8)\\dots$ $2n$ সংখ্যক উৎপাদক পর্যন্ত গুণফল হলো:",
        options: [
          "$2^n$",
          "$2^{2n}$",
          "$0$",
          "$1$"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'complex_jee_mock_10',
    title: '৪.২০ জটিল রাশি JEE মক টেস্ট ১০ (Complex Numbers JEE Mock 10)',
    topic: '৪. জটিল রাশি',
    exam: 'WB Class-XI First Semester',
    duration: 20,
    questions: [
      {
        id: 1,
        text: "যদি $1, \\omega, \\omega^2, \\dots, \\omega^{n-1}$ এককের $n$ সংখ্যক $n$-তম মূল হয়, তবে $(1-\\omega)(1-\\omega^2)\\dots(1-\\omega^{n-1})$ কার সমান?",
        options: [
          "$0$",
          "$1$",
          "$n$",
          "$n^2$"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "$1.(2-\\omega)(2-\\omega^2) + 2.(3-\\omega)(3-\\omega^2) + \\dots + (n-1).(n-\\omega)(n-\\omega^2)$-এর মান কত, যেখানে $\\omega$ এককের কাল্পনিক ঘনমূল?",
        options: [
          "$\\frac{1}{2}(n-1)n(n^2+3n+4)$",
          "$\\frac{1}{4}(n-1)n(n^2+3n+4)$",
          "$\\frac{1}{2}(n+1)n(n^2+3n+4)$",
          "$\\frac{1}{4}(n+1)n(n^2+3n+4)$"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "যদি $\\alpha, \\beta, \\gamma$ সংখ্যা $p$ ($p < 0$)-এর ঘনমূল হয়, তবে যেকোনো $x, y$ এবং $z$-এর জন্য $\\frac{x\\alpha+y\\beta+z\\gamma}{x\\beta+y\\gamma+z\\alpha} = $ কত?",
        options: [
          "$\\frac{1}{2}(-1+i\\sqrt{3})$",
          "$\\frac{1}{2}(1+i\\sqrt{3})$",
          "$\\frac{1}{2}(1-i\\sqrt{3})$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "$z^3 + 2z^2 + 2z + 1 = 0$ এবং $z^{1985} + z^{100} + 1 = 0$ সমীকরণ দুটির সাধারণ মূলগুলি হলো:",
        options: [
          "$\\omega, \\omega^2$",
          "$\\omega, \\omega^3$",
          "$\\omega^2, \\omega^3$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "যদি $z_1, z_2, z_3, \\dots, z_n$ এককের $n$ সংখ্যক $n$-তম মূল হয়, তবে $k = 1, 2, \\dots, n$-এর জন্য:",
        options: [
          "$|z_k| = k|z_{k+1}|$",
          "$|z_{k+1}| = k|z_k|$",
          "$|z_{k+1}| = |z_k| + |z_{k+1}|$",
          "$|z_k| = |z_{k+1}|$"
        ],
        correctAnswer: 3
      },
      {
        id: 6,
        text: "ধরা যাক $z_1$ এবং $z_2$ হলো এককের $n$-তম মূল যা একটি রেখাংশের প্রান্তবিন্দু এবং তা মূলবিন্দুতে সমকোণ উৎপন্ন করে। তবে $n$ অবশ্যই কোন আকারের হতে হবে?",
        options: [
          "$4k + 1$",
          "$4k + 2$",
          "$4k + 3$",
          "$4k$"
        ],
        correctAnswer: 3
      },
      {
        id: 7,
        text: "আর্গন্ড সমতলে এককের ঘনমূলগুলি যে শীর্ষবিন্দু গঠন করে তা হলো:",
        options: [
          "সমবাহু ত্রিভুজ",
          "সমদ্বিবাহু ত্রিভুজ",
          "সমকোণী ত্রিভুজ",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "যদি $\\frac{1}{a+\\omega} + \\frac{1}{b+\\omega} + \\frac{1}{c+\\omega} + \\frac{1}{d+\\omega} = \\frac{2}{\\omega}$ হয় (যেখানে $a, b, c$ বাস্তব এবং $\\omega$ এককের অবাস্তব ঘনমূল), তবে:",
        options: [
          "$\\frac{1}{a+\\omega^2} + \\frac{1}{b+\\omega^2} + \\frac{1}{c+\\omega^2} + \\frac{1}{d+\\omega^2} = -\\frac{2}{\\omega^2}$",
          "$abc + bcd + abd + acd = 4$",
          "$a + b + c + d = -2abcd$",
          "$\\frac{1}{1+a} + \\frac{1}{1+b} + \\frac{1}{1+c} + \\frac{1}{1+d} = 2$"
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        text: "যদি $z$ এমন একটি জটিল সংখ্যা হয় যেন $z + z^{-1} = 1$, তবে $z^n + z^{-n}$ ($n \\in \\mathbb{N}$)-এর মান কত?",
        options: [
          "$2(-1)^n$, যখন $n$ সংখ্যাটি $3$-এর গুণিতক",
          "$(-1)^{n-1}$, যখন $n$ সংখ্যাটি $3$-এর গুণিতক নয়",
          "$(-1)^{n+1}$, যখন $n$ সংখ্যাটি $3$-এর গুণিতক",
          "$0$, যখন $n$ সংখ্যাটি $3$-এর গুণিতক নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 10,
        text: "যদি $z$ একটি জটিল সংখ্যা হয় যা $z^4 + z^3 + 2z^2 + z + 1 = 0$ সিদ্ধ করে, তবে $|z|$-এর মান কত?",
        options: [
          "$1/2$",
          "$3/4$",
          "$1$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 2
      },
      {
        id: 11,
        text: "যদি এককের চতুর্থ মূলগুলি $z_1, z_2, z_3, z_4$ হয়, তবে $z_1^2 + z_2^2 + z_3^2 + z_4^2$-এর মান কার সমান?",
        options: [
          "$1$",
          "$0$",
          "$i$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 12,
        text: "যদি $1, \\alpha, \\alpha^2, \\dots, \\alpha^{n-1}$ এককের $n$-তম মূল হয়, তবে $\\sum_{i=1}^{n-1}\\frac{1}{2-\\alpha^i}$-এর মান কার সমান?",
        options: [
          "$(n-2)2^n$",
          "$\\frac{(n-2)2^{n-1}+1}{2^n-1}$",
          "$\\frac{(n-2)2^{n-1}}{2^n-1}$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 1
      },
      {
        id: 13,
        text: "যদি $z_1+z_2+z_3 = A, z_1+z_2\\omega+z_3\\omega^2 = B, z_1+z_2\\omega^2+z_3\\omega = C$ হয় (যেখানে $1, \\omega, \\omega^2$ এককের ঘনমূল), তবে $|A|^2 + |B|^2 + |C|^2 = $ কত?",
        options: [
          "$3(|z_1|^2 + |z_2|^2 + |z_3|^2)$",
          "$2(|z_1|^2 + |z_2|^2 + |z_3|^2)$",
          "$|z_1|^2 + |z_2|^2 + |z_3|^2$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 14,
        text: "জটিল সংখ্যা $z_1 = x_1 + iy_1$ এবং $z_2 = x_2 + iy_2$-এর জন্য, যদি $\\sin\\theta = \\frac{x_1y_2 - x_2y_1}{\\sqrt{x_1^2+y_1^2}\\sqrt{x_2^2+y_2^2}}$ হয় (যেখানে $\\theta$ হলো $z_1$ ও $z_2$-এর মধ্যবর্তী কোণ), তবে $z^2 + 2z + 3 = 0$ সমীকরণের মূলদ্বয়ের মধ্যবর্তী কোণ কত?",
        options: [
          "$\\sin^{-1}\\left(\\frac{2\\sqrt{2}}{3}\\right)$",
          "$\\sin^{-1}\\left(\\frac{2}{3}\\right)$",
          "$\\sin^{-1}\\left(\\frac{1}{3}\\right)$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "$\\sinh(ix)$-এর মান কত?",
        options: [
          "$i\\sin(ix)$",
          "$i\\sin x$",
          "$-i\\sin x$",
          "$\\sin(ix)$"
        ],
        correctAnswer: 1
      },
      {
        id: 16,
        text: "$\\operatorname{sech}(i\\pi)$-এর মান কত?",
        options: [
          "$-1$",
          "$i$",
          "$0$",
          "$1$"
        ],
        correctAnswer: 0
      },
      {
        id: 17,
        text: "$\\cosh(\\alpha + i\\beta)$-এর কাল্পনিক অংশ কত?",
        options: [
          "$\\cosh\\alpha \\cos\\beta$",
          "$\\sinh\\alpha \\sin\\beta$",
          "$\\cos\\alpha \\cosh\\beta$",
          "$\\cos\\alpha \\cos\\beta$"
        ],
        correctAnswer: 1
      },
      {
        id: 18,
        text: "$\\cosh(\\alpha + i\\beta) - \\cosh(\\alpha - i\\beta)$-এর মান কার সমান?",
        options: [
          "$2\\sinh\\alpha \\sinh\\beta$",
          "$2\\cosh\\alpha \\cosh\\beta$",
          "$2i\\sinh\\alpha \\sin\\beta$",
          "$2\\cosh\\alpha \\cos\\beta$"
        ],
        correctAnswer: 2
      },
      {
        id: 19,
        text: "যদি $\\cos(u + iv) = \\alpha + i\\beta$ হয়, তবে $\\alpha^2 + \\beta^2 + 1$ কার সমান?",
        options: [
          "$\\cos^2 u + \\sinh^2 v$",
          "$\\sin^2 u + \\cosh^2 v$",
          "$\\cos^2 u + \\cosh^2 v$",
          "$\\sin^2 u + \\sinh^2 v$"
        ],
        correctAnswer: 2
      },
      {
        id: 20,
        text: "যদি $\\tan^{-1}(\\alpha + i\\beta) = x + iy$ হয়, তবে $x = $ কত?",
        options: [
          "$\\frac{1}{2}\\tan^{-1}\\left(\\frac{2\\alpha}{1-\\alpha^2-\\beta^2}\\right)$",
          "$\\frac{1}{2}\\tan^{-1}\\left(\\frac{2\\alpha}{1+\\alpha^2+\\beta^2}\\right)$",
          "$\\tan^{-1}\\left(\\frac{2\\alpha}{1-\\alpha^2-\\beta^2}\\right)$",
          "এগুলোর কোনোটিই নয়"
        ],
        correctAnswer: 0
      }
    ]
  }
];
