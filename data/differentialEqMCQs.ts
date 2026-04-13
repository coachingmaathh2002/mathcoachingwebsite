import { MCQ } from '../components/WBJEEAssignments';

export const differentialEqMCQs: MCQ[] = [
  {
    id: 'calc-7-1',
    question: '$\\frac{d^2y}{dx^2} + \\left(\\frac{dy}{dx}\\right)^3 + y = 0$ অবকল সমীকরণের মাত্রা (degree) এবং ক্রম (order) কত?',
    options: ['মাত্রা 1, ক্রম 2', 'মাত্রা 3, ক্রম 2', 'মাত্রা 2, ক্রম 1', 'মাত্রা 2, ক্রম 3'],
    correctAnswer: 0,
    explanation: "সমীকরণটির সর্বোচ্চ ক্রমের অন্তরকলজ (highest order derivative) হলো $\\frac{d^2y}{dx^2}$, তাই ক্রম (order) = 2। এই সর্বোচ্চ ক্রমের অন্তরকলজের ঘাত (power) হলো 1, তাই মাত্রা (degree) = 1।"
  },
  {
    id: 'calc-7-2',
    question: '$\\left[1 + \\left(\\frac{dy}{dx}\\right)^2\\right]^{3/2} = k \\frac{d^2y}{dx^2}$ সমীকরণের মাত্রা (degree) কত?',
    options: ['1', '2', '3', '3/2'],
    correctAnswer: 1,
    explanation: "ভগ্নাংশ ঘাত দূর করতে উভয়দিকে বর্গ করলে: $\\left[1 + \\left(\\frac{dy}{dx}\\right)^2\\right]^3 = k^2 \\left(\\frac{d^2y}{dx^2}\\right)^2$। সর্বোচ্চ ক্রম 2 এবং তার ঘাত 2, তাই মাত্রা 2।"
  },
  {
    id: 'calc-7-3',
    question: '$y = A e^{2x} + B e^{-2x}$ সমীকরণ থেকে $A$ এবং $B$ অপনয়ন করে প্রাপ্ত অবকল সমীকরণ কোনটি?',
    options: ['$\\frac{d^2y}{dx^2} + 4y = 0$', '$\\frac{d^2y}{dx^2} - 4y = 0$', '$\\frac{dy}{dx} - 2y = 0$', '$\\frac{d^2y}{dx^2} - 2y = 0$'],
    correctAnswer: 1,
    explanation: "$y = A e^{2x} + B e^{-2x} \\implies \\frac{dy}{dx} = 2A e^{2x} - 2B e^{-2x} \\implies \\frac{d^2y}{dx^2} = 4A e^{2x} + 4B e^{-2x} = 4(A e^{2x} + B e^{-2x}) = 4y$। সুতরাং $\\frac{d^2y}{dx^2} - 4y = 0$।"
  },
  {
    id: 'calc-7-4',
    question: '$y = cx + c^2 - 3c$ সমীকরণ থেকে $c$ অপনয়ন করে প্রাপ্ত অবকল সমীকরণ কোনটি?',
    options: ['$y = x \\frac{dy}{dx} + \\left(\\frac{dy}{dx}\\right)^2 - 3\\frac{dy}{dx}$', '$y = x \\frac{dy}{dx} + c^2$', '$\\frac{d^2y}{dx^2} = 0$', '$\\frac{dy}{dx} = c$'],
    correctAnswer: 0,
    explanation: "অবকলন করলে $\\frac{dy}{dx} = c$। মূল সমীকরণে $c$ এর মান বসালে $y = x \\frac{dy}{dx} + \\left(\\frac{dy}{dx}\\right)^2 - 3\\frac{dy}{dx}$।"
  },
  {
    id: 'calc-7-5',
    question: '$\\frac{dy}{dx} = e^{x-y} + x^2 e^{-y}$ সমীকরণের সমাধান কোনটি?',
    options: ['$e^y = e^x + \\frac{x^3}{3} + c$', '$e^{-y} = e^x + \\frac{x^3}{3} + c$', '$e^y = e^{-x} + \\frac{x^3}{3} + c$', '$e^y = e^x + x^3 + c$'],
    correctAnswer: 0,
    explanation: "$\\frac{dy}{dx} = e^{-y}(e^x + x^2) \\implies e^y dy = (e^x + x^2) dx$। সমাকলন করলে $\\int e^y dy = \\int (e^x + x^2) dx \\implies e^y = e^x + \\frac{x^3}{3} + c$।"
  },
  {
    id: 'calc-7-6',
    question: '$\\frac{dy}{dx} = \\frac{y}{x} + \\tan\\left(\\frac{y}{x}\\right)$ সমীকরণের সমাধান কোনটি?',
    options: ['$\\sin(y/x) = cx$', '$\\cos(y/x) = cx$', '$\\tan(y/x) = cx$', '$\\sin(x/y) = cy$'],
    correctAnswer: 0,
    explanation: "এটি সমমাত্রিক (homogeneous) সমীকরণ। $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$। $v + x\\frac{dv}{dx} = v + \\tan v \\implies x\\frac{dv}{dx} = \\tan v \\implies \\cot v dv = \\frac{dx}{x}$। সমাকলন করলে $\\ln|\\sin v| = \\ln|x| + \\ln c \\implies \\sin(y/x) = cx$।"
  },
  {
    id: 'calc-7-7',
    question: '$\\frac{dy}{dx} + y \\tan x = \\sec x$ সমীকরণের সমাকল গুণক (Integrating Factor) কোনটি?',
    options: ['$\\cos x$', '$\\sin x$', '$\\sec x$', '$\\tan x$'],
    correctAnswer: 2,
    explanation: "এটি রৈখিক অবকল সমীকরণ (Linear Differential Equation) $\\frac{dy}{dx} + Py = Q$ আকারের, যেখানে $P = \\tan x$। I.F. = $e^{\\int P dx} = e^{\\int \\tan x dx} = e^{\\ln|\\sec x|} = \\sec x$।"
  },
  {
    id: 'calc-7-8',
    question: '$x \\frac{dy}{dx} + 2y = x^2$ সমীকরণের সমাকল গুণক (Integrating Factor) কোনটি?',
    options: ['$x$', '$x^2$', '$1/x$', '$1/x^2$'],
    correctAnswer: 1,
    explanation: "$x$ দিয়ে ভাগ করলে $\\frac{dy}{dx} + \\frac{2}{x}y = x$। এখানে $P = 2/x$। I.F. = $e^{\\int (2/x) dx} = e^{2\\ln x} = e^{\\ln x^2} = x^2$।"
  },
  {
    id: 'calc-7-9',
    question: '$(1+x^2)\\frac{dy}{dx} + 2xy = \\cos x$ সমীকরণের সমাধান কোনটি?',
    options: ['$y(1+x^2) = \\sin x + c$', '$y(1+x^2) = \\cos x + c$', '$y = (1+x^2)\\sin x + c$', '$y = \\sin x + c(1+x^2)$'],
    correctAnswer: 0,
    explanation: "$\\frac{dy}{dx} + \\frac{2x}{1+x^2}y = \\frac{\\cos x}{1+x^2}$। I.F. = $e^{\\int \\frac{2x}{1+x^2} dx} = e^{\\ln(1+x^2)} = 1+x^2$। সমাধান: $y(1+x^2) = \\int \\frac{\\cos x}{1+x^2} (1+x^2) dx = \\int \\cos x dx = \\sin x + c$।"
  },
  {
    id: 'calc-7-10',
    question: '$\\frac{dy}{dx} = \\frac{x+y}{x-y}$ সমীকরণের সমাধান কোনটি?',
    options: ['$\\tan^{-1}(y/x) = \\ln\\sqrt{x^2+y^2} + c$', '$\\tan^{-1}(x/y) = \\ln\\sqrt{x^2+y^2} + c$', '$\\sin^{-1}(y/x) = \\ln(x^2+y^2) + c$', '$\\cos^{-1}(y/x) = \\ln(x^2+y^2) + c$'],
    correctAnswer: 0,
    explanation: "$y = vx \\implies v + x\\frac{dv}{dx} = \\frac{1+v}{1-v} \\implies x\\frac{dv}{dx} = \\frac{1+v-v+v^2}{1-v} = \\frac{1+v^2}{1-v}$। $\\frac{1-v}{1+v^2} dv = \\frac{dx}{x} \\implies \\int \\frac{1}{1+v^2} dv - \\frac{1}{2} \\int \\frac{2v}{1+v^2} dv = \\int \\frac{dx}{x}$। $\\tan^{-1} v - \\frac{1}{2} \\ln(1+v^2) = \\ln x + c \\implies \\tan^{-1}(y/x) = \\ln\\sqrt{1+(y/x)^2} + \\ln x + c = \\ln\\sqrt{x^2+y^2} + c$।"
  },
  {
    id: 'calc-7-11',
    question: '$\\frac{dy}{dx} = \\sin(x+y)$ সমীকরণের সমাধান করতে কোন প্রতিস্থাপন (substitution) ব্যবহার করা হয়?',
    options: ['$x+y = v$', '$x-y = v$', '$y/x = v$', '$xy = v$'],
    correctAnswer: 0,
    explanation: "$x+y = v$ ধরলে $1 + \\frac{dy}{dx} = \\frac{dv}{dx} \\implies \\frac{dy}{dx} = \\frac{dv}{dx} - 1$। সমীকরণটি হবে $\\frac{dv}{dx} - 1 = \\sin v \\implies \\frac{dv}{dx} = 1 + \\sin v$, যা চলরাশি পৃথকীকরণ (variable separable) পদ্ধতিতে সমাধানযোগ্য।"
  },
  {
    id: 'calc-7-12',
    question: '$\\frac{dy}{dx} + y = e^{-x}$ সমীকরণের সমাধান কোনটি?',
    options: ['$y = (x+c)e^{-x}$', '$y = ce^{-x}$', '$y = (x+c)e^x$', '$y = x e^{-x} + c$'],
    correctAnswer: 0,
    explanation: "$P = 1, Q = e^{-x}$। I.F. = $e^{\\int 1 dx} = e^x$। সমাধান: $y e^x = \\int e^{-x} e^x dx = \\int 1 dx = x + c$। সুতরাং $y = (x+c)e^{-x}$।"
  },
  {
    id: 'calc-7-13',
    question: '$\\frac{dy}{dx} = \\frac{y}{x} - \\frac{y^2}{x^2}$ সমীকরণটি কোন ধরনের?',
    options: ['রৈখিক (Linear)', 'সমমাত্রিক (Homogeneous)', 'বার্নোলি (Bernoulli)', 'উভয় B এবং C'],
    correctAnswer: 3,
    explanation: "এটি সমমাত্রিক কারণ ডানদিকটি $y/x$ এর অপেক্ষক। আবার এটি $\\frac{dy}{dx} - \\frac{1}{x}y = -\\frac{1}{x^2}y^2$ আকারে লেখা যায়, যা বার্নোলি সমীকরণ। তাই উভয়ই সঠিক।"
  },
  {
    id: 'calc-7-14',
    question: '$\\frac{dy}{dx} + \\frac{y}{x} = y^2$ সমীকরণটি সমাধান করতে কোন প্রতিস্থাপন ব্যবহার করা হয়?',
    options: ['$v = y$', '$v = 1/y$', '$v = y^2$', '$v = 1/y^2$'],
    correctAnswer: 1,
    explanation: "এটি বার্নোলি সমীকরণ। $y^2$ দিয়ে ভাগ করলে $y^{-2} \\frac{dy}{dx} + \\frac{1}{x} y^{-1} = 1$। $v = y^{-1} = 1/y$ ধরলে $\\frac{dv}{dx} = -y^{-2} \\frac{dy}{dx}$, যা সমীকরণটিকে রৈখিক সমীকরণে পরিণত করে।"
  },
  {
    id: 'calc-7-15',
    question: 'একটি বক্ররেখার যেকোনো বিন্দু $(x, y)$ তে স্পর্শকের নতি (slope) $\\frac{y}{x}$ এর সমান। বক্ররেখাটি $(1, 2)$ বিন্দুগামী হলে তার সমীকরণ কী?',
    options: ['$y = 2x$', '$y = x+1$', '$y^2 = 4x$', '$xy = 2$'],
    correctAnswer: 0,
    explanation: "$\\frac{dy}{dx} = \\frac{y}{x} \\implies \\frac{dy}{y} = \\frac{dx}{x} \\implies \\ln y = \\ln x + \\ln c \\implies y = cx$। $(1, 2)$ বিন্দুগামী হওয়ায় $2 = c(1) \\implies c = 2$। সুতরাং সমীকরণ $y = 2x$।"
  },
  {
    id: 'calc-7-16',
    question: '$\\frac{d^2y}{dx^2} = 0$ সমীকরণের সাধারণ সমাধান (general solution) কী নির্দেশ করে?',
    options: ['বৃত্তের সমীকরণ', 'অধিবৃত্তের সমীকরণ', 'সরলরেখার সমীকরণ', 'উপবৃত্তের সমীকরণ'],
    correctAnswer: 2,
    explanation: "$\\frac{d^2y}{dx^2} = 0 \\implies \\frac{dy}{dx} = m$ (ধ্রুবক) $\\implies y = mx + c$। এটি একটি সরলরেখার সমীকরণ নির্দেশ করে।"
  },
  {
    id: 'calc-7-17',
    question: '$x dy - y dx = 0$ সমীকরণের সমাধান কোনটি?',
    options: ['$y = cx$', '$xy = c$', '$x^2+y^2 = c$', '$x+y = c$'],
    correctAnswer: 0,
    explanation: "$x dy = y dx \\implies \\frac{dy}{y} = \\frac{dx}{x} \\implies \\ln y = \\ln x + \\ln c \\implies y = cx$।"
  },
  {
    id: 'calc-7-18',
    question: '$x dx + y dy = 0$ সমীকরণের সমাধান কী নির্দেশ করে?',
    options: ['মূলবিন্দুগামী সরলরেখা', 'মূলবিন্দুতে কেন্দ্রবিশিষ্ট বৃত্ত', 'অধিবৃত্ত', 'পরাবৃত্ত'],
    correctAnswer: 1,
    explanation: "সমাকলন করলে $\\frac{x^2}{2} + \\frac{y^2}{2} = c \\implies x^2 + y^2 = 2c = a^2$। এটি একটি বৃত্তের সমীকরণ যার কেন্দ্র মূলবিন্দুতে $(0,0)$।"
  },
  {
    id: 'calc-7-19',
    question: '$\\frac{dy}{dx} = \\frac{2xy}{x^2-y^2}$ সমীকরণের সমাধান কোনটি?',
    options: ['$x^2+y^2 = cx$', '$x^2-y^2 = cy$', '$x^2+y^2 = cy$', '$x^2-y^2 = cx$'],
    correctAnswer: 2,
    explanation: "$y = vx$ ধরলে $v + x\\frac{dv}{dx} = \\frac{2v}{1-v^2} \\implies x\\frac{dv}{dx} = \\frac{2v - v + v^3}{1-v^2} = \\frac{v+v^3}{1-v^2}$। $\\frac{1-v^2}{v(1+v^2)} dv = \\frac{dx}{x} \\implies \\left(\\frac{1}{v} - \\frac{2v}{1+v^2}\\right) dv = \\frac{dx}{x}$। সমাকলন করলে $\\ln v - \\ln(1+v^2) = \\ln x + \\ln c \\implies \\frac{v}{1+v^2} = cx \\implies \\frac{y/x}{1+y^2/x^2} = cx \\implies \\frac{xy}{x^2+y^2} = cx \\implies y = c(x^2+y^2)$। অর্থাৎ $x^2+y^2 = c_1 y$।"
  },
  {
    id: 'calc-7-20',
    question: '$\\frac{dy}{dx} + y \\cos x = \\sin x \\cos x$ সমীকরণের সমাকল গুণক কোনটি?',
    options: ['$e^{\\sin x}$', '$e^{\\cos x}$', '$\\sin x$', '$\\cos x$'],
    correctAnswer: 0,
    explanation: "$P = \\cos x$। I.F. = $e^{\\int \\cos x dx} = e^{\\sin x}$।"
  },
  {
    id: 'calc-7-21',
    question: '$\\frac{dy}{dx} = e^x + e^y$ সমীকরণটি কি চলরাশি পৃথকীকরণ (variable separable) পদ্ধতিতে সমাধানযোগ্য?',
    options: ['হ্যাঁ', 'না', 'শুধুমাত্র $x=y$ হলে', 'বলা সম্ভব নয়'],
    correctAnswer: 1,
    explanation: "$e^x + e^y$ কে $f(x)g(y)$ আকারে লেখা যায় না। তাই এটি চলরাশি পৃথকীকরণ পদ্ধতিতে সমাধানযোগ্য নয়।"
  },
  {
    id: 'calc-7-22',
    question: '$\\frac{dy}{dx} = \\frac{x-y+1}{x+y-3}$ সমীকরণটি সমাধান করতে কোন প্রতিস্থাপন ব্যবহার করা হয়?',
    options: ['$x = X+h, y = Y+k$', '$x-y = v$', '$x+y = v$', '$y = vx$'],
    correctAnswer: 0,
    explanation: "এটি $\\frac{dy}{dx} = \\frac{a_1 x + b_1 y + c_1}{a_2 x + b_2 y + c_2}$ আকারের সমীকরণ যেখানে $a_1/a_2 \\neq b_1/b_2$। এটি সমাধান করতে $x = X+h, y = Y+k$ প্রতিস্থাপন করে ধ্রুবক পদগুলো অপসারণ করা হয়।"
  },
  {
    id: 'calc-7-23',
    question: '$\\frac{dy}{dx} = \\frac{x+y+1}{2x+2y+3}$ সমীকরণটি সমাধান করতে কোন প্রতিস্থাপন ব্যবহার করা হয়?',
    options: ['$x+y = v$', '$x-y = v$', '$y = vx$', '$x = X+h, y = Y+k$'],
    correctAnswer: 0,
    explanation: "এখানে $a_1/a_2 = b_1/b_2 = 1/2$। তাই $x+y = v$ প্রতিস্থাপন ব্যবহার করলে সমীকরণটি চলরাশি পৃথকীকরণ আকারে চলে আসে।"
  },
  {
    id: 'calc-7-24',
    question: '$\\frac{d^2y}{dx^2} + y = 0$ সমীকরণের সমাধান কোনটি?',
    options: ['$y = A \\sin x + B \\cos x$', '$y = A e^x + B e^{-x}$', '$y = A x + B$', '$y = A \\sinh x + B \\cosh x$'],
    correctAnswer: 0,
    explanation: "এটি একটি দ্বিতীয় ক্রমের রৈখিক অবকল সমীকরণ। এর সহায়ক সমীকরণ (auxiliary equation) $m^2 + 1 = 0 \\implies m = \\pm i$। তাই সমাধান $y = A \\cos x + B \\sin x$।"
  },
  {
    id: 'calc-7-25',
    question: '$\\frac{dy}{dx} = \\frac{y^2 - x^2}{2xy}$ সমীকরণের সমাধান কোনটি?',
    options: ['$x^2+y^2 = cx$', '$x^2-y^2 = cx$', '$x^2+y^2 = cy$', '$x^2-y^2 = cy$'],
    correctAnswer: 0,
    explanation: "$y = vx$ ধরলে $v + x\\frac{dv}{dx} = \\frac{v^2-1}{2v} \\implies x\\frac{dv}{dx} = \\frac{v^2-1-2v^2}{2v} = \\frac{-1-v^2}{2v}$। $\\frac{2v}{1+v^2} dv = -\\frac{dx}{x} \\implies \\ln(1+v^2) = -\\ln x + \\ln c \\implies 1+v^2 = c/x \\implies 1+y^2/x^2 = c/x \\implies x^2+y^2 = cx$।"
  },
  {
    id: 'calc-7-26',
    question: "একটি বস্তুর শীতল হওয়ার হার তার এবং চারপাশের তাপমাত্রার পার্থক্যের সমানুপাতিক (Newton's Law of Cooling)। অবকল সমীকরণটি কী হবে?",
    options: ['$\\frac{dT}{dt} = -k(T - T_s)$', '$\\frac{dT}{dt} = k(T - T_s)$', '$\\frac{dT}{dt} = -kT$', '$\\frac{dT}{dt} = -kT_s$'],
    correctAnswer: 0,
    explanation: "শীতল হওয়ার হার $\\frac{dT}{dt}$। এটি তাপমাত্রার পার্থক্য $(T - T_s)$ এর সমানুপাতিক এবং যেহেতু তাপমাত্রা কমছে, তাই একটি ঋণাত্মক চিহ্ন আসবে। $\\frac{dT}{dt} = -k(T - T_s)$।"
  },
  {
    id: 'calc-7-27',
    question: '$\\frac{dy}{dx} + y = 1$ এবং $y(0) = 2$ হলে, $y(x)$ এর মান কত?',
    options: ['$1 + e^{-x}$', '$1 - e^{-x}$', '$2e^{-x}$', '$e^{-x}$'],
    correctAnswer: 0,
    explanation: "I.F. = $e^x$। $y e^x = \\int e^x dx = e^x + c \\implies y = 1 + c e^{-x}$। $x=0, y=2$ বসালে $2 = 1 + c \\implies c = 1$। সুতরাং $y = 1 + e^{-x}$।"
  },
  {
    id: 'calc-7-28',
    question: '$\\frac{dy}{dx} = \\sqrt{1-y^2}$ সমীকরণের সমাধান কোনটি?',
    options: ['$y = \\sin(x+c)$', '$y = \\cos(x+c)$', '$y = \\tan(x+c)$', '$y = \\sin^{-1}(x+c)$'],
    correctAnswer: 0,
    explanation: "$\\frac{dy}{\\sqrt{1-y^2}} = dx \\implies \\sin^{-1} y = x + c \\implies y = \\sin(x+c)$।"
  },
  {
    id: 'calc-7-29',
    question: '$\\frac{d}{dx}\\left(x \\frac{dy}{dx}\\right) = 0$ সমীকরণের সমাধান কোনটি?',
    options: ['$y = A \\ln x + B$', '$y = A x + B$', '$y = A e^x + B$', '$y = A/x + B$'],
    correctAnswer: 0,
    explanation: "সমাকলন করলে $x \\frac{dy}{dx} = A \\implies \\frac{dy}{dx} = A/x$। আবার সমাকলন করলে $y = A \\ln x + B$।"
  },
  {
    id: 'calc-7-30',
    question: '$\\frac{dy}{dx} = \\frac{x^2+y^2}{xy}$ সমীকরণের সমাধান কোনটি?',
    options: ['$y^2 = x^2(2\\ln x + c)$', '$y^2 = x^2(\\ln x + c)$', '$y = x(\\ln x + c)$', '$y^2 = 2x^2\\ln x + c$'],
    correctAnswer: 0,
    explanation: "$y = vx$ ধরলে $v + x\\frac{dv}{dx} = \\frac{1+v^2}{v} = \\frac{1}{v} + v \\implies x\\frac{dv}{dx} = \\frac{1}{v} \\implies v dv = \\frac{dx}{x}$। সমাকলন করলে $v^2/2 = \\ln x + c_1 \\implies y^2/x^2 = 2\\ln x + 2c_1 \\implies y^2 = x^2(2\\ln x + c)$।"
  }
];
