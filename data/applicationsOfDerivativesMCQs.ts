import { MCQ } from '../components/WBJEEAssignments';

export const applicationsOfDerivativesMCQs: MCQ[] = [
  {
    id: 'calc-4-1',
    question: "$y^2 = 4ax$ এবং $x^2 = 4ay$ বক্ররেখাদুটির ছেদবিন্দুতে (মূলবিন্দু ব্যতীত) তাদের মধ্যবর্তী কোণ কত?",
    options: ["$\\tan^{-1}(3/4)$", "$\\tan^{-1}(4/3)$", "$\\pi/2$", "$\\pi/4$"],
    correctAnswer: 0,
    explanation: "ছেদবিন্দু $(4a, 4a)$। $y^2 = 4ax \\implies 2y y' = 4a \\implies y' = 2a/y$। $(4a, 4a)$ বিন্দুতে $m_1 = 2a/4a = 1/2$। $x^2 = 4ay \\implies 2x = 4a y' \\implies y' = x/2a$। $(4a, 4a)$ বিন্দুতে $m_2 = 4a/2a = 2$। $\\tan \\theta = |\\frac{m_1 - m_2}{1 + m_1 m_2}| = |\\frac{1/2 - 2}{1 + 1}| = |\\frac{-3/2}{2}| = 3/4$। $\\theta = \\tan^{-1}(3/4)$।"
  },
  {
    id: 'calc-4-2',
    question: "$y = a^x$ বক্ররেখার যেকোনো বিন্দুতে উপস্পর্শক (subtangent) এর দৈর্ঘ্য কত?",
    options: ["ধ্রুবক", "$x$ এর সমানুপাতিক", "$y$ এর সমানুপাতিক", "$y^2$ এর সমানুপাতিক"],
    correctAnswer: 0,
    explanation: "উপস্পর্শকের দৈর্ঘ্য = $|y / y'|$। $y = a^x \\implies y' = a^x \\ln a$। উপস্পর্শক = $|\\frac{a^x}{a^x \\ln a}| = \\frac{1}{\\ln a}$, যা একটি ধ্রুবক।"
  },
  {
    id: 'calc-4-3',
    question: "একটি প্রদত্ত বৃত্তের অন্তর্লিখিত আয়তক্ষেত্রগুলির মধ্যে কোনটির ক্ষেত্রফল সর্বোচ্চ?",
    options: ["বর্গক্ষেত্র", "যার দৈর্ঘ্য = 2 $\\times$ প্রস্থ", "যার দৈর্ঘ্য = $\\sqrt{2} \\times$ প্রস্থ", "বলা সম্ভব নয়"],
    correctAnswer: 0,
    explanation: "ধরি বৃত্তের ব্যাসার্ধ $r$ এবং আয়তক্ষেত্রের বাহু $2x, 2y$। $x^2+y^2=r^2$। ক্ষেত্রফল $A = 4xy$। $A^2 = 16x^2y^2 = 16x^2(r^2-x^2)$। এটি সর্বোচ্চ হবে যখন $x^2 = r^2/2$, অর্থাৎ $x = r/\\sqrt{2}$। তখন $y = r/\\sqrt{2}$। যেহেতু $x=y$, আয়তক্ষেত্রটি একটি বর্গক্ষেত্র।"
  },
  {
    id: 'calc-4-4',
    question: "$y = x^2$ এবং $y = x - 1$ এর মধ্যে ন্যূনতম দূরত্ব কত?",
    options: ["$\\frac{3}{4\\sqrt{2}}$", "$\\frac{3}{4}$", "$\\frac{1}{2\\sqrt{2}}$", "$\\frac{1}{\\sqrt{2}}$"],
    correctAnswer: 0,
    explanation: "$y = x^2$ এর যে বিন্দুতে স্পর্শক $y = x - 1$ এর সমান্তরাল, সেই বিন্দু থেকে দূরত্ব ন্যূনতম হবে। স্পর্শকের নতি $y' = 2x = 1 \\implies x = 1/2$। বিন্দুটি $(1/2, 1/4)$। এই বিন্দু থেকে $x - y - 1 = 0$ রেখার দূরত্ব = $\\frac{|1/2 - 1/4 - 1|}{\\sqrt{1^2+(-1)^2}} = \\frac{|-3/4|}{\\sqrt{2}} = \\frac{3}{4\\sqrt{2}}$।"
  },
  {
    id: 'calc-4-5',
    question: "$f(x) = x - \\sin x$ অপেক্ষকটি সর্বদা:",
    options: ["ক্রমবর্ধমান (Increasing)", "ক্রমহ্রাসমান (Decreasing)", "ধ্রুবক", "পর্যায়বৃত্ত (Periodic)"],
    correctAnswer: 0,
    explanation: "$f'(x) = 1 - \\cos x$। যেহেতু $-1 \\le \\cos x \\le 1$, তাই $1 - \\cos x \\ge 0$ সকল $x$ এর জন্য। $f'(x) = 0$ শুধুমাত্র বিচ্ছিন্ন বিন্দুতে ($x = 2n\\pi$) ঘটে। তাই অপেক্ষকটি সর্বদা ক্রমবর্ধমান।"
  },
  {
    id: 'calc-4-6',
    question: "$f(x) = x^x$ ($x > 0$) এর ন্যূনতম মান কত?",
    options: ["$e^{-1/e}$", "$e^{1/e}$", "$1/e$", "$e$"],
    correctAnswer: 0,
    explanation: "$f'(x) = x^x(1+\\ln x)$। $f'(x) = 0 \\implies 1+\\ln x = 0 \\implies \\ln x = -1 \\implies x = 1/e$। $x = 1/e$ বিন্দুতে $f''(x) > 0$, তাই এটি ন্যূনতম মান। ন্যূনতম মান = $(1/e)^{1/e} = e^{-1/e}$।"
  },
  {
    id: 'calc-4-7',
    question: "$y = x^3 - 3x^2 + 2x$ বক্ররেখার মূলবিন্দুতে স্পর্শকের সমীকরণ কী?",
    options: ["$y = 2x$", "$y = -2x$", "$y = x$", "$y = -x$"],
    correctAnswer: 0,
    explanation: "$y' = 3x^2 - 6x + 2$। মূলবিন্দুতে $(0,0)$, $y' = 2$। স্পর্শকের সমীকরণ: $y - 0 = 2(x - 0) \\implies y = 2x$।"
  },
  {
    id: 'calc-4-8',
    question: "$y^2 = 4x$ বক্ররেখার উপর কোন বিন্দুতে অভিলম্ব (normal) $(1, 0)$ বিন্দুগামী হবে?",
    options: ["$(0, 0)$", "$(1, 2)$", "$(1, -2)$", "সবগুলো"],
    correctAnswer: 0,
    explanation: "বক্ররেখার উপর যেকোনো বিন্দু $(t^2, 2t)$। অভিলম্বের সমীকরণ: $y - 2t = -t(x - t^2) \\implies y = -tx + 2t + t^3$। এটি $(1, 0)$ বিন্দুগামী হলে: $0 = -t + 2t + t^3 \\implies t^3 + t = 0 \\implies t(t^2+1) = 0 \\implies t=0$। বিন্দুটি $(0, 0)$।"
  },
  {
    id: 'calc-4-9',
    question: "একটি গোলকের ব্যাসার্ধ 2 সেমি/সেকেন্ড হারে বৃদ্ধি পাচ্ছে। যখন ব্যাসার্ধ 5 সেমি, তখন তার আয়তন বৃদ্ধির হার কত?",
    options: ["$200\\pi$ ঘন সেমি/সেকেন্ড", "$100\\pi$ ঘন সেমি/সেকেন্ড", "$50\\pi$ ঘন সেমি/সেকেন্ড", "$400\\pi$ ঘন সেমি/সেকেন্ড"],
    correctAnswer: 0,
    explanation: "$V = \\frac{4}{3}\\pi r^3 \\implies \\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$। $r=5, \\frac{dr}{dt}=2$ বসালে $\\frac{dV}{dt} = 4\\pi (25) (2) = 200\\pi$।"
  },
  {
    id: 'calc-4-10',
    question: "$f(x) = 2x^3 - 15x^2 + 36x + 1$ অপেক্ষকটি কোন অন্তরালে ক্রমহ্রাসমান (decreasing)?",
    options: ["$(2, 3)$", "$(-\\infty, 2)$", "$(3, \\infty)$", "$[2, 3]$"],
    correctAnswer: 0,
    explanation: "$f'(x) = 6x^2 - 30x + 36 = 6(x^2 - 5x + 6) = 6(x-2)(x-3)$। ক্রমহ্রাসমান হওয়ার জন্য $f'(x) < 0 \\implies (x-2)(x-3) < 0 \\implies 2 < x < 3$।"
  },
  {
    id: 'calc-4-11',
    question: "$f(x) = \\frac{\\ln x}{x}$ এর সর্বোচ্চ মান কত?",
    options: ["$1/e$", "$e$", "$1$", "$e^{1/e}$"],
    correctAnswer: 0,
    explanation: "$f'(x) = \\frac{x(1/x) - \\ln x}{x^2} = \\frac{1 - \\ln x}{x^2}$। $f'(x) = 0 \\implies \\ln x = 1 \\implies x = e$। $x=e$ তে $f''(x) < 0$, তাই সর্বোচ্চ মান $f(e) = \\frac{\\ln e}{e} = 1/e$।"
  },
  {
    id: 'calc-4-12',
    question: "Rolle-এর উপপাদ্য অনুযায়ী $f(x) = x(x-3)^2$ অপেক্ষকের জন্য $[0, 3]$ অন্তরালে $c$ এর মান কত?",
    options: ["1", "2", "1.5", "0.5"],
    correctAnswer: 0,
    explanation: "$f(0) = 0, f(3) = 0$। $f'(x) = 1(x-3)^2 + x \\cdot 2(x-3) = (x-3)(x-3+2x) = (x-3)(3x-3) = 3(x-1)(x-3)$। $f'(c) = 0 \\implies c=1, 3$। অন্তরাল $(0, 3)$ এর মধ্যে $c=1$ অবস্থিত।"
  },
  {
    id: 'calc-4-13',
    question: "Lagrange-এর মধ্যমান উপপাদ্য অনুযায়ী $f(x) = \\sqrt{x-1}$ অপেক্ষকের জন্য $[1, 3]$ অন্তরালে $c$ এর মান কত?",
    options: ["3/2", "2", "5/4", "7/4"],
    correctAnswer: 0,
    explanation: "$f'(c) = \\frac{f(3)-f(1)}{3-1} \\implies \\frac{1}{2\\sqrt{c-1}} = \\frac{\\sqrt{2}-0}{2} = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$। $\\sqrt{c-1} = \\sqrt{2}/2 \\implies c-1 = 1/2 \\implies c = 3/2$।"
  },
  {
    id: 'calc-4-14',
    question: "$y = x^3$ বক্ররেখার উপর কোন বিন্দুতে স্পর্শকের নতি বিন্দুটির $y$-স্থানাঙ্কের সমান?",
    options: ["$(0,0)$ এবং $(3,27)$", "$(0,0)$ এবং $(2,8)$", "$(1,1)$ এবং $(-1,-1)$", "$(0,0)$ এবং $(\\sqrt{3}, 3\\sqrt{3})$"],
    correctAnswer: 0,
    explanation: "$y' = 3x^2$। প্রশ্নমতে $3x^2 = y$। আবার $y = x^3$। সুতরাং $3x^2 = x^3 \\implies x^2(x-3) = 0 \\implies x=0, 3$। বিন্দুগুলো হলো $(0,0)$ এবং $(3,27)$।"
  },
  {
    id: 'calc-4-15',
    question: "একটি কণার সরণ $s = t^3 - 6t^2 + 3t + 4$। কণাটির ত্বরণ যখন শূন্য, তখন তার বেগ কত?",
    options: ["-9", "3", "-3", "9"],
    correctAnswer: 0,
    explanation: "বেগ $v = ds/dt = 3t^2 - 12t + 3$। ত্বরণ $a = dv/dt = 6t - 12$। $a=0 \\implies 6t = 12 \\implies t=2$। $t=2$ তে বেগ $v = 3(4) - 12(2) + 3 = 12 - 24 + 3 = -9$।"
  },
  {
    id: 'calc-4-16',
    question: "$f(x) = |x \\ln x|$ ($x > 0$) অপেক্ষকটি কোথায় অবকলনযোগ্য নয়?",
    options: ["$x=1$", "$x=e$", "$x=1/e$", "কোথাও নয়"],
    correctAnswer: 0,
    explanation: "$x \\ln x$ এর মান $x=1$ বিন্দুতে 0 হয় এবং চিহ্ন পরিবর্তন করে। পরম মান অপেক্ষক $|g(x)|$ সাধারণত $g(x)=0$ বিন্দুতে অবকলনযোগ্য হয় না যদি $g'(x) \\neq 0$ হয়। $g'(1) = 1+\\ln 1 = 1 \\neq 0$। তাই $x=1$ তে অবকলনযোগ্য নয়।"
  },
  {
    id: 'calc-4-17',
    question: "$y = e^x$ এবং $y = e^{-x}$ বক্ররেখাদুটির ছেদবিন্দুতে মধ্যবর্তী কোণ কত?",
    options: ["$\\pi/2$", "$\\tan^{-1}(2)$", "$\\pi/4$", "$\\tan^{-1}(1/2)$"],
    correctAnswer: 0,
    explanation: "ছেদবিন্দু: $e^x = e^{-x} \\implies e^{2x} = 1 \\implies x=0, y=1$। $(0,1)$ বিন্দুতে $y_1' = e^x = 1$ এবং $y_2' = -e^{-x} = -1$। $m_1 m_2 = (1)(-1) = -1$। তাই কোণ $\\pi/2$।"
  },
  {
    id: 'calc-4-18',
    question: "একটি উল্টানো শঙ্কু আকৃতির পাত্রে জল ঢালা হচ্ছে। জলের গভীরতা ও ব্যাসার্ধ সর্বদা সমান। জলের আয়তন বৃদ্ধির হার $3\\pi$ ঘন সেমি/মিনিট হলে, যখন গভীরতা 3 সেমি, তখন গভীরতা বৃদ্ধির হার কত?",
    options: ["1 সেমি/মিনিট", "1/3 সেমি/মিনিট", "3 সেমি/মিনিট", "$\\pi$ সেমি/মিনিট"],
    correctAnswer: 1,
    explanation: "$V = \\frac{1}{3}\\pi r^2 h$। যেহেতু $r=h$, $V = \\frac{1}{3}\\pi h^3$। $\\frac{dV}{dt} = \\pi h^2 \\frac{dh}{dt}$। $3\\pi = \\pi (3)^2 \\frac{dh}{dt} \\implies 3\\pi = 9\\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = 1/3$।"
  },
  {
    id: 'calc-4-19',
    question: "$f(x) = x + \\frac{1}{x}$ ($x \\neq 0$) এর স্থানীয় চরম মানগুলো (local extrema) কী কী?",
    options: ["স্থানীয় লঘিষ্ঠ মান 2, স্থানীয় গরিষ্ঠ মান -2", "স্থানীয় লঘিষ্ঠ মান -2, স্থানীয় গরিষ্ঠ মান 2", "শুধুমাত্র লঘিষ্ঠ মান 2", "শুধুমাত্র গরিষ্ঠ মান -2"],
    correctAnswer: 0,
    explanation: "$f'(x) = 1 - 1/x^2 = 0 \\implies x = \\pm 1$। $f''(x) = 2/x^3$। $x=1$ এ $f''(1) = 2 > 0$ (লঘিষ্ঠ), মান $1+1=2$। $x=-1$ এ $f''(-1) = -2 < 0$ (গরিষ্ঠ), মান $-1-1=-2$। (লঘিষ্ঠ মান গরিষ্ঠ মানের চেয়ে বড় হতে পারে, কারণ তারা ভিন্ন শাখায় অবস্থিত)।"
  },
  {
    id: 'calc-4-20',
    question: "$y = c \\cosh(x/c)$ (Catenary) বক্ররেখার উপঅভিলম্ব (subnormal) এর দৈর্ঘ্য কত?",
    options: ["$c \\sinh(x/c) \\cosh(x/c)$", "$c \\sinh^2(x/c)$", "$c \\cosh^2(x/c)$", "$c$"],
    correctAnswer: 0,
    explanation: "উপঅভিলম্ব = $|y y'|$। $y' = c \\sinh(x/c) \\cdot (1/c) = \\sinh(x/c)$। উপঅভিলম্ব = $|c \\cosh(x/c) \\sinh(x/c)|$।"
  },
  {
    id: 'calc-4-21',
    question: "$f(x) = \\sin x + \\cos x$ এর $[0, \\pi]$ অন্তরালে চরম মান (absolute extrema) কত?",
    options: ["সর্বোচ্চ $\\sqrt{2}$, সর্বনিম্ন -1", "সর্বোচ্চ $\\sqrt{2}$, সর্বনিম্ন $-\\sqrt{2}$", "সর্বোচ্চ 1, সর্বনিম্ন -1", "সর্বোচ্চ $\\sqrt{2}$, সর্বনিম্ন 0"],
    correctAnswer: 0,
    explanation: "$f'(x) = \\cos x - \\sin x = 0 \\implies \\tan x = 1 \\implies x = \\pi/4$। প্রান্তিক বিন্দু $x=0, \\pi$। $f(0) = 1$, $f(\\pi/4) = \\sqrt{2}$, $f(\\pi) = -1$। সর্বোচ্চ $\\sqrt{2}$, সর্বনিম্ন -1।"
  },
  {
    id: 'calc-4-22',
    question: "কোন বক্ররেখার যেকোনো বিন্দুতে স্পর্শকের $x$-অক্ষ ও $y$-অক্ষের মধ্যবর্তী ছিন্ন অংশের মধ্যবিন্দু ঐ স্পর্শবিন্দুটি হলে, বক্ররেখার সমীকরণ কী?",
    options: ["$xy = c$", "$x^2+y^2 = c$", "$y^2 = 4ax$", "$x/a + y/b = 1$"],
    correctAnswer: 0,
    explanation: "ধরি বিন্দুটি $(x,y)$। স্পর্শকের সমীকরণ $Y - y = y'(X - x)$। $X$-ছেদিতা $X_0 = x - y/y'$ এবং $Y$-ছেদিতা $Y_0 = y - x y'$। মধ্যবিন্দু $(x,y)$ হলে $X_0/2 = x \\implies (x - y/y')/2 = x \\implies x - y/y' = 2x \\implies -y/y' = x \\implies y' = -y/x \\implies \\frac{dy}{y} = -\\frac{dx}{x} \\implies \\ln y = -\\ln x + \\ln c \\implies xy = c$।"
  },
  {
    id: 'calc-4-23',
    question: "$f(x) = \\int_0^x (t^2-5t+4) dt$ অপেক্ষকটি কোন অন্তরালে ক্রমবর্ধমান?",
    options: ["$(-\\infty, 1) \\cup (4, \\infty)$", "$(1, 4)$", "$(0, 4)$", "$(1, 5)$"],
    correctAnswer: 0,
    explanation: "$f'(x) = x^2 - 5x + 4 = (x-1)(x-4)$। ক্রমবর্ধমান হওয়ার জন্য $f'(x) > 0 \\implies (x-1)(x-4) > 0 \\implies x < 1$ অথবা $x > 4$।"
  },
  {
    id: 'calc-4-24',
    question: "একটি সমবাহু ত্রিভুজের বাহুর দৈর্ঘ্য $\\sqrt{3}$ সেমি/সেকেন্ড হারে বৃদ্ধি পাচ্ছে। যখন বাহুর দৈর্ঘ্য 10 সেমি, তখন তার ক্ষেত্রফল বৃদ্ধির হার কত?",
    options: ["15 বর্গ সেমি/সেকেন্ড", "10 বর্গ সেমি/সেকেন্ড", "$15\\sqrt{3}$ বর্গ সেমি/সেকেন্ড", "30 বর্গ সেমি/সেকেন্ড"],
    correctAnswer: 0,
    explanation: "$A = \\frac{\\sqrt{3}}{4} a^2 \\implies \\frac{dA}{dt} = \\frac{\\sqrt{3}}{2} a \\frac{da}{dt}$। $a=10, \\frac{da}{dt}=\\sqrt{3}$ বসালে $\\frac{dA}{dt} = \\frac{\\sqrt{3}}{2} (10) (\\sqrt{3}) = 5 \\times 3 = 15$।"
  },
  {
    id: 'calc-4-25',
    question: "$y = x^3 - 12x$ বক্ররেখার কোন বিন্দুতে স্পর্শক $x$-অক্ষের সমান্তরাল?",
    options: ["$(2, -16)$ এবং $(-2, 16)$", "$(2, 16)$ এবং $(-2, -16)$", "$(0, 0)$", "$(1, -11)$"],
    correctAnswer: 0,
    explanation: "$y' = 3x^2 - 12 = 0 \\implies x^2 = 4 \\implies x = \\pm 2$। $x=2$ হলে $y = 8 - 24 = -16$। $x=-2$ হলে $y = -8 + 24 = 16$।"
  },
  {
    id: 'calc-4-26',
    question: "$f(x) = \\frac{x}{1+x^2}$ এর সর্বোচ্চ মান কত?",
    options: ["1/2", "1", "2", "1/4"],
    correctAnswer: 0,
    explanation: "$f'(x) = \\frac{1(1+x^2) - x(2x)}{(1+x^2)^2} = \\frac{1-x^2}{(1+x^2)^2}$। $f'(x) = 0 \\implies x = \\pm 1$। $x=1$ এ $f''(x) < 0$, তাই সর্বোচ্চ মান $f(1) = 1/2$।"
  },
  {
    id: 'calc-4-27',
    question: "যদি $x+y = 8$ হয়, তবে $xy^3$ এর সর্বোচ্চ মান কত?",
    options: ["$2 \\times 6^3$", "$4 \\times 4^3$", "$3 \\times 5^3$", "$1 \\times 7^3$"],
    correctAnswer: 0,
    explanation: "$P = x(8-x)^3$। $P' = 1(8-x)^3 + x \\cdot 3(8-x)^2(-1) = (8-x)^2(8-x-3x) = (8-x)^2(8-4x)$। $P'=0 \\implies x=8, 2$। $x=2$ তে সর্বোচ্চ মান পাওয়া যাবে। তখন $y=6$। সর্বোচ্চ মান $2 \\times 6^3 = 432$।"
  },
  {
    id: 'calc-4-28',
    question: "$y = e^{-x^2}$ বক্ররেখার ইনফ্লেকশন বিন্দু (points of inflection) কী কী?",
    options: ["$x = \\pm 1/\\sqrt{2}$", "$x = \\pm 1$", "$x = 0$", "$x = \\pm \\sqrt{2}$"],
    correctAnswer: 0,
    explanation: "$y' = -2x e^{-x^2}$। $y'' = -2e^{-x^2} + 4x^2 e^{-x^2} = 2e^{-x^2}(2x^2-1)$। $y'' = 0 \\implies 2x^2-1 = 0 \\implies x = \\pm 1/\\sqrt{2}$।"
  },
  {
    id: 'calc-4-29',
    question: "একটি বৃত্তাকার ধাতব পাতের ব্যাসার্ধ তাপে প্রসারিত হচ্ছে। ব্যাসার্ধ বৃদ্ধির হার 2% হলে, ক্ষেত্রফল বৃদ্ধির হার প্রায় কত?",
    options: ["4%", "2%", "8%", "1%"],
    correctAnswer: 0,
    explanation: "$A = \\pi r^2 \\implies dA = 2\\pi r dr$। $\\frac{dA}{A} = \\frac{2\\pi r dr}{\\pi r^2} = 2 \\frac{dr}{r}$। যেহেতু $\\frac{dr}{r} = 2\\%$, তাই $\\frac{dA}{A} = 2 \\times 2\\% = 4\\%$।"
  },
  {
    id: 'calc-4-30',
    question: "$y = \\sin x$ এবং $y = \\cos x$ বক্ররেখাদুটি $x \\in (0, \\pi)$ অন্তরালে যে বিন্দুতে ছেদ করে, সেখানে তাদের মধ্যবর্তী কোণ কত?",
    options: ["$\\tan^{-1}(2\\sqrt{2})$", "$\\pi/2$", "$\\pi/4$", "$\\tan^{-1}(2)$"],
    correctAnswer: 0,
    explanation: "ছেদবিন্দু $\\sin x = \\cos x \\implies \\tan x = 1 \\implies x = \\pi/4$। $y_1' = \\cos x$, $y_2' = -\\sin x$। $x=\\pi/4$ বিন্দুতে $m_1 = 1/\\sqrt{2}, m_2 = -1/\\sqrt{2}$। $\\tan \\theta = |\\frac{1/\\sqrt{2} - (-1/\\sqrt{2})}{1 + (1/\\sqrt{2})(-1/\\sqrt{2})}| = |\\frac{\\sqrt{2}}{1 - 1/2}| = 2\\sqrt{2}$। $\\theta = \\tan^{-1}(2\\sqrt{2})$।"
  }
];