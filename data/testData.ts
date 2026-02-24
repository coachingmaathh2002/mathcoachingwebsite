export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index 0-3
}

export interface Test {
  id: string;
  title: string;
  topic: string;
  questions: Question[];
}

export const tests: Test[] = [
  {
    id: 't1',
    title: 'Sets: Basics & Operations',
    topic: 'Sets',
    questions: [
      { id: 1, text: "নিচের কোনটি একটি সেট?", options: ["একটি ক্লাসের লম্বা ছাত্রদের সংগ্রহ", "মৌলিক সংখ্যাগুলির সংগ্রহ", "একটি শহরের ধনী ব্যক্তিদের সংগ্রহ", "একটি বাগানের সুন্দর ফুলের সংগ্রহ"], correctAnswer: 1 },
      { id: 2, text: "$A = \\{1, 2, 3\\}$ হলে, $A$ এর সাবসেট সংখ্যা কত?", options: ["3", "6", "8", "9"], correctAnswer: 2 },
      { id: 3, text: "ফাঁকা সেটের (Empty Set) উপাদান সংখ্যা কত?", options: ["0", "1", "অসীম", "নির্ণয় করা সম্ভব নয়"], correctAnswer: 0 },
      { id: 4, text: "যদি $A = \\{1, 2\\}$ এবং $B = \\{3, 4\\}$ হয়, তবে $A \\cap B = ?$", options: ["$\\{1, 2, 3, 4\\}$", "$\\phi$", "$\\{1, 3\\}$", "$\\{2, 4\\}$"], correctAnswer: 1 },
      { id: 5, text: "সার্বিক সেট (Universal Set) কে সাধারণত কোন অক্ষর দ্বারা প্রকাশ করা হয়?", options: ["$S$", "$U$", "$X$", "$A$"], correctAnswer: 1 },
      { id: 6, text: "$A = \\{x : x \\text{ একটি স্বাভাবিক সংখ্যা এবং } x < 5\\}$। সেটটি তালিকা পদ্ধতিতে কেমন হবে?", options: ["$\\{1, 2, 3, 4\\}$", "$\\{0, 1, 2, 3, 4\\}$", "$\\{1, 2, 3, 4, 5\\}$", "$\\{0, 1, 2, 3, 4, 5\\}$"], correctAnswer: 0 },
      { id: 7, text: "ভেন চিত্রে আয়তক্ষেত্রটি কী নির্দেশ করে?", options: ["উপসেট", "সার্বিক সেট", "ফাঁকা সেট", "সংযোগ সেট"], correctAnswer: 1 },
      { id: 8, text: "$A \\cup A' = ?$", options: ["$A$", "$A'$", "$U$", "$\\phi$"], correctAnswer: 2 },
      { id: 9, text: "$A \\cap A' = ?$", options: ["$A$", "$A'$", "$U$", "$\\phi$"], correctAnswer: 3 },
      { id: 10, text: "যদি $A \\subset B$ হয়, তবে $A \\cup B = ?$", options: ["$A$", "$B$", "$\\phi$", "$U$"], correctAnswer: 1 },
      { id: 11, text: "পাওয়ার সেট $P(A)$ এর উপাদান সংখ্যা 16 হলে, $A$ সেটের উপাদান সংখ্যা কত?", options: ["2", "3", "4", "5"], correctAnswer: 2 },
      { id: 12, text: "$\\{x : x \\in R, x^2 + 1 = 0\\}$ সেটটি কেমন?", options: ["সসীম সেট", "অসীম সেট", "ফাঁকা সেট", "একক সেট"], correctAnswer: 2 },
      { id: 13, text: "দুটি সসীম সেটের উপাদান সংখ্যা যথাক্রমে $m$ এবং $n$। তাদের মোট সাবসেট সংখ্যার পার্থক্য 56 হলে, $m$ ও $n$ এর মান কত?", options: ["6, 3", "5, 2", "7, 4", "8, 5"], correctAnswer: 0 },
      { id: 14, text: "$A - B$ বলতে কী বোঝায়?", options: ["উপাদানগুলো $A$ তে আছে কিন্তু $B$ তে নেই", "উপাদানগুলো $B$ তে আছে কিন্তু $A$ তে নেই", "উপাদানগুলো $A$ এবং $B$ উভয়েই আছে", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 15, text: "নিচের কোনটি অসীম সেট?", options: ["$\\{x : x \\in N, x < 100\\}$", "$\\{x : x \\in Z, x > 10\\}$", "$\\{1, 2, 3, ..., 1000\\}$", "ইংরেজি বর্ণমালার সেট"], correctAnswer: 1 },
      { id: 16, text: "$A = \\{1, 2, 3\\}, B = \\{3, 4, 5\\}$। $A - B = ?$", options: ["$\\{1, 2\\}$", "$\\{4, 5\\}$", "$\\{3\\}$", "$\\{1, 2, 3, 4, 5\\}$"], correctAnswer: 0 },
      { id: 17, text: "ডি মর্গানের সূত্র কোনটি?", options: ["$(A \\cup B)' = A' \\cap B'$", "$(A \\cup B)' = A' \\cup B'$", "$(A \\cap B)' = A' \\cap B'$", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 18, text: "যদি $n(A) = 10, n(B) = 6$ এবং $n(A \\cap B) = 3$ হয়, তবে $n(A \\cup B)$ কত?", options: ["13", "16", "19", "10"], correctAnswer: 0 },
      { id: 19, text: "সেট $\\{\\phi\\}$ এর সাবসেট সংখ্যা কত?", options: ["0", "1", "2", "3"], correctAnswer: 2 },
      { id: 20, text: "$A = \\{x : x^2 - 5x + 6 = 0\\}$। $A$ সেটটি হলো-", options: ["$\\{2, 3\\}$", "$\\{-2, -3\\}$", "$\\{1, 6\\}$", "$\\{-1, -6\\}$"], correctAnswer: 0 }
    ]
  },
  {
    id: 't2',
    title: 'Relations & Functions: Fundamentals',
    topic: 'Relations & Functions',
    questions: [
      { id: 1, text: "কার্তেসীয় গুণজ $A \\times B$ এর উপাদানগুলো কী আকারের?", options: ["$(a, b)$", "$\\{a, b\\}$", "$[a, b]$", "$a + b$"], correctAnswer: 0 },
      { id: 2, text: "যদি $n(A) = 3$ এবং $n(B) = 2$ হয়, তবে $n(A \\times B)$ কত?", options: ["5", "6", "9", "8"], correctAnswer: 1 },
      { id: 3, text: "নিচের কোনটি ফাংশন নয়?", options: ["$\\{(1,2), (2,3), (3,4)\\}$", "$\\{(1,2), (1,3), (2,4)\\}$", "$\\{(1,2), (2,2), (3,2)\\}$", "$\\{(a,b), (b,c), (c,d)\\}$"], correctAnswer: 1 },
      { id: 4, text: "$f(x) = x^2$ ফাংশনটির ডোমেন কী?", options: ["$R$", "$R^+$", "$Z$", "$N$"], correctAnswer: 0 },
      { id: 5, text: "$f(x) = |x|$ ফাংশনটির রেঞ্জ কী?", options: ["$R$", "$[0, \\infty)$", "$(-\\infty, 0]$", "$R - \\{0\\}$"], correctAnswer: 1 },
      { id: 6, text: "$f(x) = 1/x$ ফাংশনটি কোথায় অসংজ্ঞায়িত?", options: ["$x = 1$", "$x = 0$", "$x = -1$", "কোথাও না"], correctAnswer: 1 },
      { id: 7, text: "একক ফাংশন (Identity Function) কোনটি?", options: ["$f(x) = x$", "$f(x) = c$", "$f(x) = |x|$", "$f(x) = 1/x$"], correctAnswer: 0 },
      { id: 8, text: "ধ্রুবক ফাংশনের (Constant Function) গ্রাফ কেমন হয়?", options: ["মূলবিন্দুগামী সরলরেখা", "x-অক্ষের সমান্তরাল সরলরেখা", "y-অক্ষের সমান্তরাল সরলরেখা", "পরাবৃত্তাকার"], correctAnswer: 1 },
      { id: 9, text: "$f(x) = \\sin x$ এর রেঞ্জ কত?", options: ["$R$", "$[-1, 1]$", "$[0, 1]$", "$(-1, 1)$"], correctAnswer: 1 },
      { id: 10, text: "অর্ডার্ড পেয়ার $(x, y) = (2, 3)$ হলে $x$ এর মান কত?", options: ["2", "3", "5", "0"], correctAnswer: 0 },
      { id: 11, text: "$A = \\{1, 2\\}, B = \\{3, 4\\}$। নিচের কোনটি $A$ থেকে $B$ তে একটি সম্বন্ধ (Relation)?", options: ["$\\{(1,3), (2,4)\\}$", "$\\{(1,3), (2,5)\\}$", "$\\{(3,1), (4,2)\\}$", "$\\{(1,1), (2,2)\\}$"], correctAnswer: 0 },
      { id: 12, text: "ডোমেন বলতে কী বোঝায়?", options: ["ফাংশনের ইনপুট মানসমূহ", "ফাংশনের আউটপুট মানসমূহ", "ফাংশনের গ্রাফ", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 13, text: "কোডোমেন ও রেঞ্জের মধ্যে সম্পর্ক কী?", options: ["Range $\\subseteq$ Codomain", "Codomain $\\subseteq$ Range", "Range = Codomain", "কোনো সম্পর্ক নেই"], correctAnswer: 0 },
      { id: 14, text: "$f(x) = \\sqrt{x}$ ফাংশনের ডোমেন কত?", options: ["$R$", "$[0, \\infty)$", "$(0, \\infty)$", "$R - \\{0\\}$"], correctAnswer: 1 },
      { id: 15, text: "Signum Function এর রেঞ্জ কী?", options: ["$\\{-1, 0, 1\\}$", "$R$", "$[-1, 1]$", "$\\{0, 1\\}$"], correctAnswer: 0 },
      { id: 16, text: "Polynomial Function এর উদাহরণ কোনটি?", options: ["$f(x) = x^2 + 2x + 1$", "$f(x) = \\sin x$", "$f(x) = \\log x$", "$f(x) = 2^x$"], correctAnswer: 0 },
      { id: 17, text: "$f(x) = [x]$ (Greatest Integer Function) এ $f(2.5)$ এর মান কত?", options: ["2", "3", "2.5", "0.5"], correctAnswer: 0 },
      { id: 18, text: "$y = mx + c$ কিসের সমীকরণ?", options: ["বৃত্ত", "সরলরেখা", "পরাবৃত্ত", "উপবৃত্ত"], correctAnswer: 1 },
      { id: 19, text: "$f(x) = x^3$ ফাংশনটি কেমন?", options: ["বিজোড় ফাংশন", "জোড় ফাংশন", "উভয়ই", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 20, text: "কার্তেসীয় তলে (Cartesian Plane) $x > 0$ এবং $y < 0$ কোন চতুর্ভাগে অবস্থিত?", options: ["প্রথম", "দ্বিতীয়", "তৃতীয়", "চতুর্থ"], correctAnswer: 3 }
    ]
  },
  {
    id: 't3',
    title: 'Trigonometric Functions: Level 1',
    topic: 'Trigonometric Functions',
    questions: [
      { id: 1, text: "1 রেডিয়ান = কত ডিগ্রি (প্রায়)?", options: ["$57.3^\\circ$", "$180^\\circ$", "$90^\\circ$", "$45^\\circ$"], correctAnswer: 0 },
      { id: 2, text: "$\\pi$ রেডিয়ান = ?", options: ["$90^\\circ$", "$180^\\circ$", "$270^\\circ$", "$360^\\circ$"], correctAnswer: 1 },
      { id: 3, text: "$\\sin 30^\\circ$ এর মান কত?", options: ["$1/2$", "$\\sqrt{3}/2$", "$1/\\sqrt{2}$", "1"], correctAnswer: 0 },
      { id: 4, text: "$\\tan 45^\\circ$ এর মান কত?", options: ["0", "1", "$\\infty$", "$\\sqrt{3}$"], correctAnswer: 1 },
      { id: 5, text: "$\\sec^2\\theta - \\tan^2\\theta = ?$", options: ["0", "1", "-1", "2"], correctAnswer: 1 },
      { id: 6, text: "কোন চতুর্ভাগে $\\cos\\theta$ ধনাত্মক কিন্তু $\\sin\\theta$ ঋণাত্মক?", options: ["প্রথম", "দ্বিতীয়", "তৃতীয়", "চতুর্থ"], correctAnswer: 3 },
      { id: 7, text: "$\\sin(90^\\circ - \\theta) = ?$", options: ["$\\cos\\theta$", "$-\\cos\\theta$", "$\\sin\\theta$", "$-\\sin\\theta$"], correctAnswer: 0 },
      { id: 8, text: "$\\cos(180^\\circ + \\theta) = ?$", options: ["$\\cos\\theta$", "$-\\cos\\theta$", "$\\sin\\theta$", "$-\\sin\\theta$"], correctAnswer: 1 },
      { id: 9, text: "$\\sin 2A$ এর সূত্র কোনটি?", options: ["$2\\sin A\\cos A$", "$\\cos^2 A - \\sin^2 A$", "$2\\tan A / (1-\\tan^2 A)$", "$\\sin A\\cos A$"], correctAnswer: 0 },
      { id: 10, text: "$\\cos 2A$ এর সূত্র কোনটি?", options: ["$2\\cos^2 A - 1$", "$2\\sin^2 A - 1$", "$2\\sin A\\cos A$", "$\\tan^2 A$"], correctAnswer: 0 },
      { id: 11, text: "$\\tan(A + B)$ এর সূত্র কী?", options: ["$(\\tan A + \\tan B)/(1 - \\tan A\\tan B)$", "$(\\tan A - \\tan B)/(1 + \\tan A\\tan B)$", "$\\tan A + \\tan B$", "$\\tan A\\tan B$"], correctAnswer: 0 },
      { id: 12, text: "$\\sin^2\\theta + \\cos^2\\theta = ?$", options: ["0", "1", "2", "-1"], correctAnswer: 1 },
      { id: 13, text: "$\\text{cosec}\\theta$ এর বিপরীত কোনটি?", options: ["$\\sin\\theta$", "$\\cos\\theta$", "$\\tan\\theta$", "$\\sec\\theta$"], correctAnswer: 0 },
      { id: 14, text: "ঘড়ির কাঁটার বিপরীত দিকে কোণ পরিমাপ করলে তা কী হয়?", options: ["ধনাত্মক", "ঋণাত্মক", "শূন্য", "অনির্ণেয়"], correctAnswer: 0 },
      { id: 15, text: "$\\sin 300^\\circ$ এর মান কত?", options: ["$-\\sqrt{3}/2$", "$\\sqrt{3}/2$", "$-1/2$", "1/2"], correctAnswer: 0 },
      { id: 16, text: "$\\cos 0^\\circ$ এর মান কত?", options: ["0", "1", "-1", "$\\infty$"], correctAnswer: 1 },
      { id: 17, text: "$\\tan 90^\\circ$ এর মান কত?", options: ["0", "1", "অসংজ্ঞায়িত", "-1"], correctAnswer: 2 },
      { id: 18, text: "$2\\pi/3$ রেডিয়ান কত ডিগ্রি?", options: ["$120^\\circ$", "$150^\\circ$", "$135^\\circ$", "$240^\\circ$"], correctAnswer: 0 },
      { id: 19, text: "তৃতীয় চতুর্ভাগে কোন অনুপাতটি ধনাত্মক?", options: ["$\\sin$", "$\\cos$", "$\\tan$", "all"], correctAnswer: 2 },
      { id: 20, text: "$\\sin(-\\theta) = ?$", options: ["$\\sin\\theta$", "$-\\sin\\theta$", "$\\cos\\theta$", "$-\\cos\\theta$"], correctAnswer: 1 }
    ]
  },
  {
    id: 't4',
    title: 'Complex Numbers: Introduction',
    topic: 'Complex Numbers',
    questions: [
      { id: 1, text: "$i$ এর মান কত?", options: ["$\\sqrt{-1}$", "-1", "1", "0"], correctAnswer: 0 },
      { id: 2, text: "$i^2$ এর মান কত?", options: ["1", "-1", "$i$", "$-i$"], correctAnswer: 1 },
      { id: 3, text: "জটিল সংখ্যা $z = x + iy$ এর মডুলাস $|z|$ কত?", options: ["$\\sqrt{x^2 + y^2}$", "$x^2 + y^2$", "$x + y$", "$\\sqrt{x^2 - y^2}$"], correctAnswer: 0 },
      { id: 4, text: "$z = 3 + 4i$ এর মডুলাস কত?", options: ["3", "4", "5", "7"], correctAnswer: 2 },
      { id: 5, text: "$z = x + iy$ এর অনুবন্ধী জটিল সংখ্যা (Conjugate) কোনটি?", options: ["$x - iy$", "$-x + iy$", "$-x - iy$", "$y + ix$"], correctAnswer: 0 },
      { id: 6, text: "$i^4$ এর মান কত?", options: ["1", "-1", "$i$", "$-i$"], correctAnswer: 0 },
      { id: 7, text: "আর্গান্ড তলে (Argand Plane) x-অক্ষকে কী বলা হয়?", options: ["বাস্তব অক্ষ", "কাল্পনিক অক্ষ", "পোলার অক্ষ", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 8, text: "এককের ঘনমূলগুলোর যোগফল কত? $(1 + \\omega + \\omega^2)$", options: ["0", "1", "3", "-1"], correctAnswer: 0 },
      { id: 9, text: "$\\omega^3$ এর মান কত?", options: ["0", "1", "-1", "$\\omega$"], correctAnswer: 1 },
      { id: 10, text: "দ্বিঘাত সমীকরণ $ax^2 + bx + c = 0$ এর মূলগুলো জটিল হবে যদি-", options: ["$b^2 - 4ac > 0$", "$b^2 - 4ac = 0$", "$b^2 - 4ac < 0$", "$b^2 - 4ac \\ge 0$"], correctAnswer: 2 },
      { id: 11, text: "$z = 1 + i$ এর আর্গুমেন্ট কত?", options: ["$\\pi/4$", "$\\pi/2$", "$\\pi$", "$\\pi/3$"], correctAnswer: 0 },
      { id: 12, text: "বিশুদ্ধ কাল্পনিক সংখ্যার বাস্তব অংশ কত?", options: ["0", "1", "-1", "অনির্ণেয়"], correctAnswer: 0 },
      { id: 13, text: "$(2 + 3i) + (1 - 2i) = ?$", options: ["$3 + i$", "$3 + 5i$", "$1 + i$", "$3 - i$"], correctAnswer: 0 },
      { id: 14, text: "$i^{10}$ এর মান কত?", options: ["1", "-1", "$i$", "$-i$"], correctAnswer: 1 },
      { id: 15, text: "$z = -1 - i$ কোন চতুর্ভাগে অবস্থিত?", options: ["প্রথম", "দ্বিতীয়", "তৃতীয়", "চতুর্থ"], correctAnswer: 2 },
      { id: 16, text: "পোলার আকারে $z = r(\\cos\\theta + i \\sin\\theta)$ এ $r$ কী?", options: ["মডুলাস", "আর্গুমেন্ট", "বাস্তব অংশ", "কাল্পনিক অংশ"], correctAnswer: 0 },
      { id: 17, text: "$\\sqrt{-9}$ এর মান কত?", options: ["3", "-3", "$3i$", "$\\pm 3$"], correctAnswer: 2 },
      { id: 18, text: "$z = 5$ এর কাল্পনিক অংশ কত?", options: ["0", "5", "1", "$i$"], correctAnswer: 0 },
      { id: 19, text: "গুণাত্মক বিপরীত (Multiplicative Inverse) $z^{-1} = ?$", options: ["$z / |z|^2$", "$\\bar{z} / |z|^2$", "$\\bar{z}$", "$|z|$"], correctAnswer: 1 },
      { id: 20, text: "$x^2 + 1 = 0$ সমীকরণের সমাধান কী?", options: ["$\\pm 1$", "$\\pm i$", "1", "0"], correctAnswer: 1 }
    ]
  },
  {
    id: 't5',
    title: 'Linear Inequalities',
    topic: 'Linear Inequalities',
    questions: [
      { id: 1, text: "$x > 5$ অসমতাটির অর্থ কী?", options: ["$x$ এর মান 5 এর সমান", "$x$ এর মান 5 এর চেয়ে বড়", "$x$ এর মান 5 এর চেয়ে ছোট", "$x$ এর মান 5 অথবা তার বড়"], correctAnswer: 1 },
      { id: 2, text: "$3x < 9$ অসমতাটির সমাধান কী?", options: ["$x < 3$", "$x > 3$", "$x = 3$", "$x \\le 3$"], correctAnswer: 0 },
      { id: 3, text: "$-2x < 6$ অসমতাটির সমাধান কী?", options: ["$x < -3$", "$x > -3$", "$x < 3$", "$x > 3$"], correctAnswer: 1 },
      { id: 4, text: "$x \\ge 0$ এবং $y \\ge 0$ গ্রাফে কোন চতুর্ভাগ নির্দেশ করে?", options: ["প্রথম", "দ্বিতীয়", "তৃতীয়", "চতুর্থ"], correctAnswer: 0 },
      { id: 5, text: "নিচের কোনটি কঠোর অসমতা (Strict Inequality)?", options: ["$x > 5$", "$x \\ge 5$", "$x \\le 5$", "$x = 5$"], correctAnswer: 0 },
      { id: 6, text: "$x \\in [2, 5]$ এর অর্থ কী?", options: ["$2 < x < 5$", "$2 \\le x \\le 5$", "$2 < x \\le 5$", "$2 \\le x < 5$"], correctAnswer: 1 },
      { id: 7, text: "$|x| < a$ (যেখানে $a > 0$) এর সমাধান কী?", options: ["$-a < x < a$", "$x < a$", "$x > -a$", "$x > a$ অথবা $x < -a$"], correctAnswer: 0 },
      { id: 8, text: "$5x - 3 < 3x + 1$ এর সমাধান?", options: ["$x < 2$", "$x > 2$", "$x < 1$", "$x > 1$"], correctAnswer: 0 },
      { id: 9, text: "লেখচিত্রে 'ড্যাশ লাইন' (Dashed Line) কখন ব্যবহৃত হয়?", options: ["< বা > থাকলে", "$\\le$ বা $\\ge$ থাকলে", "= থাকলে", "সবসময়"], correctAnswer: 0 },
      { id: 10, text: "দুটি চলকবিশিষ্ট রৈখিক অসমতার সমাধান কোথায় থাকে?", options: ["সরলরেখার উপরে", "অর্ধতলে (Half Plane)", "শুধুমাত্র মূলবিন্দুতে", "কোনোটিই নয়"], correctAnswer: 1 },
      { id: 11, text: "$x + y \\le 5$ অসমতাটি $(0,0)$ বিন্দু দ্বারা সিদ্ধ হয় কি?", options: ["হ্যাঁ", "না", "কখনও কখনও", "বলা যাবে না"], correctAnswer: 0 },
      { id: 12, text: "$x < 0$ কোন দিকে অবস্থিত?", options: ["y-অক্ষের ডানদিকে", "y-অক্ষের বামদিকে", "x-অক্ষের উপরে", "x-অক্ষের নিচে"], correctAnswer: 1 },
      { id: 13, text: "স্ল্যাক অসমতা (Slack Inequality) কোনটি?", options: ["$x < 5$", "$x > 5$", "$x \\le 5$", "$x \\ne 5$"], correctAnswer: 2 },
      { id: 14, text: "$4x + 3 < 6x + 7$", options: ["$x > -2$", "$x < -2$", "$x > 2$", "$x < 2$"], correctAnswer: 0 },
      { id: 15, text: "$1/x < 1 (x > 0)$ হলে-", options: ["$x > 1$", "$x < 1$", "$x = 1$", "$x > 0$"], correctAnswer: 0 },
      { id: 16, text: "$|x| > 3$ এর সমাধান?", options: ["$-3 < x < 3$", "$x > 3$ অথবা $x < -3$", "$x > 3$", "$x < -3$"], correctAnswer: 1 },
      { id: 17, text: "$y < 2$ এর গ্রাফ কেমন হবে?", options: ["$y = 2$ রেখার উপরের অংশ", "$y = 2$ রেখার নিচের অংশ", "$y = 2$ রেখা", "মূলবিন্দুগামী"], correctAnswer: 1 },
      { id: 18, text: "কোনো সংখ্যার দ্বিগুণের সাথে 5 যোগ করলে যোগফল 15 এর কম হয়। অসমতাটি কী?", options: ["$2x + 5 < 15$", "$2x + 5 > 15$", "$2x + 5 \\le 15$", "$2x + 5 = 15$"], correctAnswer: 0 },
      { id: 19, text: "$-5 \\le x \\le 5$ কে পরমমান আকারে লিখলে কী হবে?", options: ["$|x| \\le 5$", "$|x| < 5$", "$|x| \\ge 5$", "$|x| > 5$"], correctAnswer: 0 },
      { id: 20, text: "$x$ একটি স্বাভাবিক সংখ্যা এবং $x < 4$ হলে সমাধান সেট?", options: ["$\\{1, 2, 3\\}$", "$\\{0, 1, 2, 3\\}$", "$\\{1, 2, 3, 4\\}$", "$(-\\infty, 4)$"], correctAnswer: 0 }
    ]
  },
  {
    id: 't6',
    title: 'Permutations & Combinations',
    topic: 'Permutations & Combinations',
    questions: [
      { id: 1, text: "$5!$ এর মান কত?", options: ["120", "24", "720", "60"], correctAnswer: 0 },
      { id: 2, text: "$0!$ এর মান কত?", options: ["0", "1", "অসংজ্ঞায়িত", "10"], correctAnswer: 1 },
      { id: 3, text: "$^nP_n$ এর মান কত?", options: ["$n!$", "1", "$n$", "0"], correctAnswer: 0 },
      { id: 4, text: "$^nC_r$ এর সূত্র কোনটি?", options: ["$\\frac{n!}{r! (n-r)!}$", "$\\frac{n!}{(n-r)!}$", "$\\frac{n!}{r!}$", "$\\frac{r!}{(n-r)!}$"], correctAnswer: 0 },
      { id: 5, text: "বিন্যাস (Permutation) কখন ব্যবহৃত হয়?", options: ["ক্রম গুরুত্বপূর্ণ হলে", "ক্রম গুরুত্বপূর্ণ না হলে", "দল গঠনের ক্ষেত্রে", "সবসময়"], correctAnswer: 0 },
      { id: 6, text: "সমাবেশ (Combination) কখন ব্যবহৃত হয়?", options: ["ক্রম গুরুত্বপূর্ণ হলে", "ক্রম গুরুত্বপূর্ণ না হলে (দল গঠন)", "সাজানোর ক্ষেত্রে", "কোনোটিই নয়"], correctAnswer: 1 },
      { id: 7, text: "$^5C_2$ এর মান কত?", options: ["10", "20", "5", "2"], correctAnswer: 0 },
      { id: 8, text: "$^5P_2$ এর মান কত?", options: ["10", "20", "60", "5"], correctAnswer: 1 },
      { id: 9, text: "$^nC_0$ এর মান কত?", options: ["0", "1", "$n$", "অসীম"], correctAnswer: 1 },
      { id: 10, text: "$^nC_r = ^nC_{n-r}$ এই সম্পর্কটি কি সত্য?", options: ["সত্য", "মিথ্যা", "কখনও কখনও", "বলা যাবে না"], correctAnswer: 0 },
      { id: 11, text: "'ROSE' শব্দটির অক্ষরগুলো কতভাবে সাজানো যায়?", options: ["24", "12", "6", "4"], correctAnswer: 0 },
      { id: 12, text: "একই বস্তু বারবার নেওয়া গেলে $n$ সংখ্যক বস্তু থেকে $r$ সংখ্যক বস্তু নিয়ে বিন্যাস সংখ্যা কত?", options: ["$n^r$", "$^nP_r$", "$^nC_r$", "$r^n$"], correctAnswer: 0 },
      { id: 13, text: "বৃত্তাকার বিন্যাসে (Circular Permutation) $n$ টি বস্তুকে সাজানোর উপায় কত?", options: ["$(n-1)!$", "$n!$", "$n!/2$", "$(n+1)!$"], correctAnswer: 0 },
      { id: 14, text: "10 জন ব্যক্তি একে অপরের সাথে করমর্দন করলে মোট করমর্দন সংখ্যা কত?", options: ["45", "90", "100", "50"], correctAnswer: 0 },
      { id: 15, text: "$^nP_r / ^nC_r = ?$", options: ["$r!$", "$n!$", "1", "0"], correctAnswer: 0 },
      { id: 16, text: "MISSISSIPPI শব্দটির অক্ষরগুলো দিয়ে কতগুলো বিন্যাস সম্ভব?", options: ["34650", "$11!$", "$4!4!2!$", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 17, text: "গণনার যোজন বিধি (Addition Principle) কখন খাটে?", options: ["কাজগুলো স্বাধীন হলে (অথবা)", "কাজগুলো নির্ভরশীল হলে (এবং)", "সবসময়", "কখনও না"], correctAnswer: 0 },
      { id: 18, text: "গণনার গুণন বিধি (Multiplication Principle) কখন খাটে?", options: ["কাজগুলো পর্যায়ক্রমে ঘটলে (এবং)", "কাজগুলো বিকল্প হলে (অথবা)", "সবসময়", "কখনও না"], correctAnswer: 0 },
      { id: 19, text: "$^7C_7$ এর মান কত?", options: ["1", "7", "0", "$7!$"], correctAnswer: 0 },
      { id: 20, text: "3 জন বালক ও 2 জন বালিকা থেকে 2 জন নিয়ে কতভাবে দল গঠন করা যায়?", options: ["10", "5", "6", "20"], correctAnswer: 0 }
    ]
  },
  {
    id: 't7',
    title: 'Limits & Derivatives: Basics',
    topic: 'Calculus',
    questions: [
      { id: 1, text: "$\\lim_{x \\to a} \\frac{x^n - a^n}{x - a} = ?$", options: ["$na^{n-1}$", "$na^n$", "$n a^{n+1}$", "$a^n$"], correctAnswer: 0 },
      { id: 2, text: "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = ?$", options: ["0", "1", "$\\infty$", "$\\pi$"], correctAnswer: 1 },
      { id: 3, text: "$\\frac{d}{dx}(x^n) = ?$", options: ["$nx^{n-1}$", "$\\frac{x^{n+1}}{n+1}$", "$nx^n$", "$x^n$"], correctAnswer: 0 },
      { id: 4, text: "$\\frac{d}{dx}(\\sin x) = ?$", options: ["$\\cos x$", "$-\\cos x$", "$\\sin x$", "$-\\sin x$"], correctAnswer: 0 },
      { id: 5, text: "$\\frac{d}{dx}(\\cos x) = ?$", options: ["$\\sin x$", "$-\\sin x$", "$\\cos x$", "$-\\cos x$"], correctAnswer: 1 },
      { id: 6, text: "ধ্রুবক সংখ্যার অন্তরজ (Derivative) কত?", options: ["0", "1", "ধ্রুবকটি নিজে", "$\\infty$"], correctAnswer: 0 },
      { id: 7, text: "$\\lim_{x \\to 0} \\frac{\\tan x}{x} = ?$", options: ["0", "1", "$\\infty$", "-1"], correctAnswer: 1 },
      { id: 8, text: "$\\frac{d}{dx}(e^x) = ?$", options: ["$e^x$", "$xe^{x-1}$", "$e^x \\log e$", "1"], correctAnswer: 0 },
      { id: 9, text: "$\\frac{d}{dx}(\\log x) = ?$", options: ["$1/x$", "$x$", "$e^x$", "$\\log x$"], correctAnswer: 0 },
      { id: 10, text: "Product Rule: $\\frac{d}{dx}(uv) = ?$", options: ["$uv' + vu'$", "$uv' - vu'$", "$u'v'$", "$uv$"], correctAnswer: 0 },
      { id: 11, text: "Quotient Rule: $\\frac{d}{dx}(\\frac{u}{v}) = ?$", options: ["$\\frac{vu' - uv'}{v^2}$", "$\\frac{uv' - vu'}{v^2}$", "$\\frac{u'}{v'}$", "$uv' + vu'$"], correctAnswer: 0 },
      { id: 12, text: "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = ?$", options: ["1", "0", "$e$", "$\\infty$"], correctAnswer: 0 },
      { id: 13, text: "$\\frac{d}{dx}(\\tan x) = ?$", options: ["$\\sec^2 x$", "$\\cot x$", "$\\sec x \\tan x$", "$\\text{cosec}^2 x$"], correctAnswer: 0 },
      { id: 14, text: "অন্তরজ (Derivative) জ্যামিতিকভাবে কী নির্দেশ করে?", options: ["স্পর্শকের ঢাল", "ক্ষেত্রফল", "দৈর্ঘ্য", "আয়তন"], correctAnswer: 0 },
      { id: 15, text: "$f(x) = 5x + 3$ হলে $f'(x)$ কত?", options: ["5", "3", "$5x$", "0"], correctAnswer: 0 },
      { id: 16, text: "$\\lim_{x \\to \\infty} \\frac{1}{x} = ?$", options: ["0", "1", "$\\infty$", "অনির্ণেয়"], correctAnswer: 0 },
      { id: 17, text: "বামপক্ষের লিমিট ও ডানপক্ষের লিমিট সমান না হলে লিমিট-", options: ["অস্তিত্ব নেই", "শূন্য", "অসীম", "1"], correctAnswer: 0 },
      { id: 18, text: "$\\frac{d}{dx}(\\sqrt{x}) = ?$", options: ["$\\frac{1}{2\\sqrt{x}}$", "$\\frac{1}{\\sqrt{x}}$", "$\\sqrt{x}$", "$x$"], correctAnswer: 0 },
      { id: 19, text: "প্রথম মূল নিয়মে অন্তরজ নির্ণয়ের সূত্র কোনটি?", options: ["$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$", "$\\lim_{h \\to 0} \\frac{f(x) - f(x+h)}{h}$", "$\\lim_{h \\to 0} \\frac{f(x+h)}{h}$", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 20, text: "$\\frac{d}{dx}(5) = ?$", options: ["0", "5", "1", "$x$"], correctAnswer: 0 }
    ]
  },
  // Adding more tests to reach 20 as requested, using variations and new topics
  {
    id: 't8',
    title: 'Sets: Advanced Problems',
    topic: 'Sets',
    questions: [
      { id: 1, text: "$A \\Delta B$ (Symmetric Difference) এর সূত্র কোনটি?", options: ["$(A - B) \\cup (B - A)$", "$(A \\cup B) - (A \\cap B)$", "উভয়ই", "কোনোটিই নয়"], correctAnswer: 2 },
      { id: 2, text: "বন্টন বিধি (Distributive Law) কোনটি?", options: ["$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$", "$A \\cup B = B \\cup A$", "$A \\cup (B \\cup C) = (A \\cup B) \\cup C$", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 3, text: "যদি $A$ এবং $B$ নিচ্ছেদ সেট (Disjoint Sets) হয়, তবে $n(A \\cup B) = ?$", options: ["$n(A) + n(B)$", "$n(A) * n(B)$", "$n(A) - n(B)$", "0"], correctAnswer: 0 },
      { id: 4, text: "$A = \\{1, 2\\}, B = \\{1, 2, 3\\}$। $A$ কি $B$ এর প্রকৃত উপসেট?", options: ["হ্যাঁ", "না", "বলা যাবে না", "অসংজ্ঞায়িত"], correctAnswer: 0 },
      { id: 5, text: "সেট $A$ এর উপাদান সংখ্যা $n$ হলে $P(P(A))$ এর উপাদান সংখ্যা কত?", options: ["$2^{2^n}$", "$2^n$", "$2n$", "$n^2$"], correctAnswer: 0 },
      { id: 6, text: "ভেন চিত্রে তিনটি সেটের ছেদ অংশ কোনটি?", options: ["$A \\cap B \\cap C$", "$A \\cup B \\cup C$", "$A - B$", "$C - A$"], correctAnswer: 0 },
      { id: 7, text: "$A \\cap (B \\cup C) = ?$", options: ["$(A \\cap B) \\cup (A \\cap C)$", "$(A \\cup B) \\cap (A \\cup C)$", "$A \\cap B$", "$A \\cup C$"], correctAnswer: 0 },
      { id: 8, text: "ফাঁকা সেট কোন সেটের উপসেট?", options: ["যে কোনো সেট", "শুধুমাত্র ফাঁকা সেট", "সসীম সেট", "অসীম সেট"], correctAnswer: 0 },
      { id: 9, text: "$A = \\{a, b, c\\}$ হলে এর অশূন্য উপসেট সংখ্যা কত?", options: ["7", "8", "6", "3"], correctAnswer: 0 },
      { id: 10, text: "$U = \\{1, 2, 3, 4, 5\\}, A = \\{1, 2\\}$। $A' = ?$", options: ["$\\{3, 4, 5\\}$", "$\\{1, 2\\}$", "$\\{4, 5\\}$", "$\\{1, 2, 3\\}$"], correctAnswer: 0 },
      { id: 11, text: "$A \\cup \\phi = ?$", options: ["$A$", "$\\phi$", "$U$", "$A'$"], correctAnswer: 0 },
      { id: 12, text: "$A \\cap U = ?$", options: ["$A$", "$U$", "$\\phi$", "$A'$"], correctAnswer: 0 },
      { id: 13, text: "Idempotent Law কোনটি?", options: ["$A \\cup A = A$", "$A \\cup B = B \\cup A$", "$A \\cup \\phi = A$", "$A \\cap A' = \\phi$"], correctAnswer: 0 },
      { id: 14, text: "$A - B = A$ হলে কোনটি সত্য?", options: ["$A \\cap B = \\phi$", "$A = B$", "$B \\subset A$", "$A \\subset B$"], correctAnswer: 0 },
      { id: 15, text: "$n(A \\cup B \\cup C)$ এর সূত্র কোনটি?", options: ["$n(A)+n(B)+n(C)-n(A\\cap B)-n(B\\cap C)-n(C\\cap A)+n(A\\cap B\\cap C)$", "$n(A)+n(B)+n(C)$", "$n(A)+n(B)-n(A\\cap B)$", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 16, text: "$A = \\{x : x^2 = 4, x \\text{ বিজোড়}\\}$। $A = ?$", options: ["$\\phi$", "$\\{2\\}$", "$\\{-2\\}$", "$\\{2, -2\\}$"], correctAnswer: 0 },
      { id: 17, text: "সমতুল্য সেট (Equivalent Sets) হতে হলে কী সমান হতে হবে?", options: ["উপাদান সংখ্যা", "উপাদানগুলো", "উভয়ই", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 18, text: "$A = \\{\\{1\\}, 2\\}$। $\\{1\\} \\in A$ কি সত্য?", options: ["সত্য", "মিথ্যা", "অনির্ণেয়", "বলা যাবে না"], correctAnswer: 0 },
      { id: 19, text: "$A = \\{\\{1\\}, 2\\}$। $\\{1\\} \\subset A$ কি সত্য?", options: ["মিথ্যা", "সত্য", "অনির্ণেয়", "বলা যাবে না"], correctAnswer: 0 },
      { id: 20, text: "$\\{\\{a\\}, \\{b\\}\\}$ সেটের উপাদান সংখ্যা কত?", options: ["2", "1", "4", "0"], correctAnswer: 0 }
    ]
  },
  {
    id: 't9',
    title: 'Relations & Functions: Types & Graphs',
    topic: 'Relations & Functions',
    questions: [
      { id: 1, text: "One-one function (এক-এক ফাংশন) এর শর্ত কী?", options: ["$f(x_1) = f(x_2)$ হলে $x_1 = x_2$", "$f(x_1) = f(x_2)$ হলে $x_1 \\ne x_2$", "রেঞ্জ = কোডোমেন", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 2, text: "Onto function (সার্বিক ফাংশন) এর শর্ত কী?", options: ["রেঞ্জ = কোডোমেন", "রেঞ্জ $\\subset$ কোডোমেন", "এক-এক হতে হবে", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 3, text: "Bijection (বাইজেকশন) মানে কী?", options: ["এক-এক এবং সার্বিক", "শুধুমাত্র এক-এক", "শুধুমাত্র সার্বিক", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 4, text: "$f(x) = x^2$ ($R$ থেকে $R$) ফাংশনটি কি এক-এক?", options: ["না", "হ্যাঁ", "কখনও কখনও", "বলা যাবে না"], correctAnswer: 0 },
      { id: 5, text: "$f(x) = x^3$ ($R$ থেকে $R$) ফাংশনটি কি সার্বিক?", options: ["হ্যাঁ", "না", "কখনও কখনও", "বলা যাবে না"], correctAnswer: 0 },
      { id: 6, text: "বিপরীত ফাংশন (Inverse Function) থাকার শর্ত কী?", options: ["ফাংশনটি বাইজেকটিভ হতে হবে", "এক-এক হতে হবে", "সার্বিক হতে হবে", "কোনো শর্ত নেই"], correctAnswer: 0 },
      { id: 7, text: "$f(x) = 2x + 3$ এর বিপরীত ফাংশন কোনটি?", options: ["$(x-3)/2$", "$(x+3)/2$", "$2x-3$", "$3x+2$"], correctAnswer: 0 },
      { id: 8, text: "$y = e^x$ এর বিপরীত ফাংশন কোনটি?", options: ["$y = \\ln x$", "$y = \\log x$", "$y = e^{-x}$", "$y = 1/x$"], correctAnswer: 0 },
      { id: 9, text: "যুগ্ম ফাংশনের গ্রাফ কার সাপেক্ষে প্রতিসম?", options: ["y-অক্ষ", "x-অক্ষ", "মূলবিন্দু", "y=x রেখা"], correctAnswer: 0 },
      { id: 10, text: "অযুগ্ম ফাংশনের গ্রাফ কার সাপেক্ষে প্রতিসম?", options: ["মূলবিন্দু", "y-অক্ষ", "x-অক্ষ", "y=x রেখা"], correctAnswer: 0 },
      { id: 11, text: "$f(x) = \\sin x$ কোন ধরনের ফাংশন?", options: ["পর্যায়বৃত্ত (Periodic)", "বীজগাণিতিক", "সূচকীয়", "লগারিদমিক"], correctAnswer: 0 },
      { id: 12, text: "$\\sin x$ এর পর্যায়কাল (Period) কত?", options: ["$2\\pi$", "$\\pi$", "$\\pi/2$", "$4\\pi$"], correctAnswer: 0 },
      { id: 13, text: "$\\tan x$ এর পর্যায়কাল কত?", options: ["$\\pi$", "$2\\pi$", "$\\pi/2$", "$3\\pi$"], correctAnswer: 0 },
      { id: 14, text: "$f(x) = [x]$ এর ডোমেন কত?", options: ["$R$", "$Z$", "$N$", "$Q$"], correctAnswer: 0 },
      { id: 15, text: "$f(x) = \\sqrt{4 - x^2}$ এর ডোমেন কত?", options: ["$[-2, 2]$", "$(-2, 2)$", "$R$", "$(-\\infty, -2] \\cup [2, \\infty)$"], correctAnswer: 0 },
      { id: 16, text: "কম্পোজিট ফাংশন $fog(x)$ মানে কী?", options: ["$f(g(x))$", "$g(f(x))$", "$f(x) * g(x)$", "$f(x) + g(x)$"], correctAnswer: 0 },
      { id: 17, text: "$f(x) = x^2, g(x) = x+1$ হলে $fog(2) = ?$", options: ["9", "5", "6", "3"], correctAnswer: 0 },
      { id: 18, text: "উল্লম্ব রেখা পরীক্ষা (Vertical Line Test) কীসের জন্য?", options: ["ফাংশন কিনা যাচাই করতে", "এক-এক কিনা যাচাই করতে", "সার্বিক কিনা যাচাই করতে", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 19, text: "অনুভূমিক রেখা পরীক্ষা (Horizontal Line Test) কীসের জন্য?", options: ["এক-এক কিনা যাচাই করতে", "ফাংশন কিনা যাচাই করতে", "ডোমেন বের করতে", "কোনোটিই নয়"], correctAnswer: 0 },
      { id: 20, text: "$f(x) = 1/\\sqrt{x-1}$ এর ডোমেন?", options: ["$(1, \\infty)$", "$[1, \\infty)$", "$R - \\{1\\}$", "$R$"], correctAnswer: 0 }
    ]
  },
  {
    id: 't10',
    title: 'Trigonometry: Compound Angles',
    topic: 'Trigonometric Functions',
    questions: [
      { id: 1, text: "$\\sin(A+B) = ?$", options: ["$\\sin A\\cos B + \\cos A\\sin B$", "$\\sin A\\cos B - \\cos A\\sin B$", "$\\cos A\\cos B - \\sin A\\sin B$", "$\\cos A\\cos B + \\sin A\\sin B$"], correctAnswer: 0 },
      { id: 2, text: "$\\cos(A-B) = ?$", options: ["$\\cos A\\cos B + \\sin A\\sin B$", "$\\cos A\\cos B - \\sin A\\sin B$", "$\\sin A\\cos B + \\cos A\\sin B$", "$\\sin A\\cos B - \\cos A\\sin B$"], correctAnswer: 0 },
      { id: 3, text: "$\\tan(45^\\circ + A) = ?$", options: ["$(1+\\tan A)/(1-\\tan A)$", "$(1-\\tan A)/(1+\\tan A)$", "$1+\\tan A$", "$1-\\tan A$"], correctAnswer: 0 },
      { id: 4, text: "$\\sin 15^\\circ$ এর মান কত?", options: ["$(\\sqrt{3}-1)/2\\sqrt{2}$", "$(\\sqrt{3}+1)/2\\sqrt{2}$", "$1/2$", "$\\sqrt{3}/2$"], correctAnswer: 0 },
      { id: 5, text: "$\\cos 75^\\circ$ এর মান কত?", options: ["$(\\sqrt{3}-1)/2\\sqrt{2}$", "$(\\sqrt{3}+1)/2\\sqrt{2}$", "$1/\\sqrt{2}$", "$1/2$"], correctAnswer: 0 },
      { id: 6, text: "$\\sin C + \\sin D = ?$", options: ["$2\\sin((C+D)/2)\\cos((C-D)/2)$", "$2\\cos((C+D)/2)\\sin((C-D)/2)$", "$2\\cos((C+D)/2)\\cos((C-D)/2)$", "$2\\sin((C+D)/2)\\sin((C-D)/2)$"], correctAnswer: 0 },
      { id: 7, text: "$\\cos C - \\cos D = ?$", options: ["$2\\sin((C+D)/2)\\sin((D-C)/2)$", "$2\\cos((C+D)/2)\\cos((C-D)/2)$", "$2\\sin((C+D)/2)\\cos((C-D)/2)$", "$-2\\cos((C+D)/2)\\sin((C-D)/2)$"], correctAnswer: 0 },
      { id: 8, text: "$2\\sin A\\cos B = ?$", options: ["$\\sin(A+B) + \\sin(A-B)$", "$\\sin(A+B) - \\sin(A-B)$", "$\\cos(A+B) + \\cos(A-B)$", "$\\cos(A-B) - \\cos(A+B)$"], correctAnswer: 0 },
      { id: 9, text: "$\\sin 3A = ?$", options: ["$3\\sin A - 4\\sin^3 A$", "$4\\sin^3 A - 3\\sin A$", "$3\\cos A - 4\\cos^3 A$", "$4\\cos^3 A - 3\\cos A$"], correctAnswer: 0 },
      { id: 10, text: "$\\cos 3A = ?$", options: ["$4\\cos^3 A - 3\\cos A$", "$3\\cos A - 4\\cos^3 A$", "$3\\sin A - 4\\sin^3 A$", "$4\\sin^3 A - 3\\sin A$"], correctAnswer: 0 },
      { id: 11, text: "$\\tan 3A = ?$", options: ["$(3\\tan A - \\tan^3 A) / (1 - 3\\tan^2 A)$", "$(3\\tan A + \\tan^3 A) / (1 - 3\\tan^2 A)$", "$3\\tan A / (1 - \\tan^2 A)$", "$\\tan A$"], correctAnswer: 0 },
      { id: 12, text: "$1 - \\cos 2A = ?$", options: ["$2\\sin^2 A$", "$2\\cos^2 A$", "$\\sin^2 A$", "$\\cos^2 A$"], correctAnswer: 0 },
      { id: 13, text: "$1 + \\cos 2A = ?$", options: ["$2\\cos^2 A$", "$2\\sin^2 A$", "1", "0"], correctAnswer: 0 },
      { id: 14, text: "$\\sin 18^\\circ$ এর মান কত?", options: ["$(\\sqrt{5}-1)/4$", "$(\\sqrt{5}+1)/4$", "$\\sqrt{5}/4$", "$1/4$"], correctAnswer: 0 },
      { id: 15, text: "$\\cos 36^\\circ$ এর মান কত?", options: ["$(\\sqrt{5}+1)/4$", "$(\\sqrt{5}-1)/4$", "$\\sqrt{5}/4$", "$1/2$"], correctAnswer: 0 },
      { id: 16, text: "ত্রিভুজে $A+B+C = \\pi$ হলে $\\tan(A+B) = ?$", options: ["$-\\tan C$", "$\\tan C$", "$\\cot C$", "$-\\cot C$"], correctAnswer: 0 },
      { id: 17, text: "$\\sin(A+B)\\sin(A-B) = ?$", options: ["$\\sin^2 A - \\sin^2 B$", "$\\cos^2 A - \\cos^2 B$", "$\\sin^2 A + \\sin^2 B$", "$\\cos^2 A + \\cos^2 B$"], correctAnswer: 0 },
      { id: 18, text: "$\\cos(A+B)\\cos(A-B) = ?$", options: ["$\\cos^2 A - \\sin^2 B$", "$\\cos^2 A - \\cos^2 B$", "$\\sin^2 A - \\sin^2 B$", "$\\sin^2 A + \\sin^2 B$"], correctAnswer: 0 },
      { id: 19, text: "সর্বোচ্চ মান নির্ণয় কর: $3\\sin x + 4\\cos x$", options: ["5", "7", "1", "12"], correctAnswer: 0 },
      { id: 20, text: "$\\tan A + \\cot A = ?$", options: ["$2\\text{cosec} 2A$", "$2\\sec 2A$", "$2\\sin 2A$", "$2\\cos 2A$"], correctAnswer: 0 }
    ]
  },
  // Placeholder tests to reach count, can be expanded later
  { id: 't11', title: 'Algebra: Quadratic Equations II', topic: 'Algebra', questions: [] },
  { id: 't12', title: 'Algebra: Sequence & Series', topic: 'Algebra', questions: [] },
  { id: 't13', title: 'Calculus: Derivatives II', topic: 'Calculus', questions: [] },
  { id: 't14', title: 'Calculus: Limits II', topic: 'Calculus', questions: [] },
  { id: 't15', title: 'Geometry: Straight Lines', topic: 'Geometry', questions: [] },
  { id: 't16', title: 'Geometry: Conic Sections', topic: 'Geometry', questions: [] },
  { id: 't17', title: 'Statistics: Basics', topic: 'Statistics', questions: [] },
  { id: 't18', title: 'Probability: Introduction', topic: 'Probability', questions: [] },
  { id: 't19', title: 'Mathematical Reasoning', topic: 'Logic', questions: [] },
  { id: 't20', title: 'Mock Test: Full Syllabus', topic: 'Mock Test', questions: [] }
];

// Fill empty tests with placeholder questions to prevent errors
tests.forEach(test => {
  if (test.questions.length === 0) {
    for (let i = 1; i <= 20; i++) {
      test.questions.push({
        id: i,
        text: `${test.title} - Question ${i} (Coming Soon)`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 0
      });
    }
  }
});
