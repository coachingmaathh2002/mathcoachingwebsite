import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import {
  BookOpen,
  FileText,
  ArrowLeft,
  Search,
  ChevronRight,
  ChevronUp,
  Lock,
  Clock,
  X,
  Sparkles,
  Filter,
  Folder,
  FolderOpen,
  Download,
  ChevronDown,
  LayoutGrid,
  ListTree
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import jsPDF from 'jspdf';
import { CONTACT_INFO } from '../constants';
import { MathPlot } from './MathPlot';

// ── Types ───────────────────────────────────────────────────────────────────────

interface StudyMaterialsProps {
  onBack: () => void;
}

type MaterialType = 'article' | 'guide' | 'notes';
type FilterType = 'all' | MaterialType;

interface Material {
  id: string;
  title: string;
  description: string;
  type: MaterialType;
  category: string;
  topic: string;
  isPremium: boolean;
  readTime: string;
  content: string;
  date?: string;
}

// ── Content Data ────────────────────────────────────────────────────────────────

const sampleContent = `
## Introduction

Mathematics is the language of the universe. In this guide, we will explore some of the most fundamental concepts that form the basis of advanced mathematics.

### Key Concepts

1. **Variables and Constants**: Understanding the difference between what changes and what remains the same.
2. **Equations**: The balance of mathematical statements.
3. **Functions**: The relationship between inputs and outputs.

### Important Formulas

Here are some essential formulas you should memorize:

*   **Quadratic Formula**: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$
*   **Pythagorean Theorem**: $a^2 + b^2 = c^2$
*   **Area of a Circle**: $A = \\pi r^2$

> "Pure mathematics is, in its way, the poetry of logical ideas." — Albert Einstein

### Practice Problems

Try solving these problems to test your understanding:

*   Solve for x: $2x + 5 = 15$
*   Find the area of a circle with a radius of 4 units.
*   Calculate the hypotenuse of a right triangle with sides 3 and 4.

Remember, consistent practice is the key to mastering mathematics. Do not rush through the concepts; take your time to understand the underlying principles.
`;

const setTheoryBengaliContent = `
## সেট তত্ত্ব (Set Theory) - এক নজরে

গণিতের অন্যতম গুরুত্বপূর্ণ একটি শাখা হলো সেট তত্ত্ব। এই নোটে আমরা সেটের প্রাথমিক ধারণা, প্রকারভেদ এবং বিভিন্ন প্রক্রিয়া সম্পর্কে জানব।

### ১. সেট (Set) কী?

বাস্তব বা চিন্তা জগতের সুনির্দিষ্ট, সুসংজ্ঞায়িত এবং পরস্পর ভিন্ন বস্তুর সমাবেশ বা সংগ্রহকে **সেট** বলে।
যেমন: প্রথম ৫টি স্বাভাবিক সংখ্যার সেট, $A = \\{1, 2, 3, 4, 5\\}$

### ২. সেটের প্রকাশ (Representation of Sets)

সেটকে প্রধানত দুটি পদ্ধতিতে প্রকাশ করা হয়:
*   **তালিকা পদ্ধতি (Roster Method)**: এই পদ্ধতিতে সেটের সকল উপাদান সুনির্দিষ্টভাবে উল্লেখ করে দ্বিতীয় বন্ধনী $\\{\\}$ এর মধ্যে আবদ্ধ করা হয়। যেমন: $A = \\{a, e, i, o, u\\}$
*   **সেট গঠন পদ্ধতি (Set-Builder Method)**: এই পদ্ধতিতে সেটের উপাদানগুলো সুনির্দিষ্টভাবে উল্লেখ না করে উপাদান নির্ধারণের জন্য সাধারণ ধর্মের উল্লেখ থাকে। যেমন: $A = \\{x : x \\text{ স্বাভাবিক সংখ্যা এবং } x < 6\\}$

### ৩. সেটের প্রকারভেদ (Types of Sets)

*   **সসীম সেট (Finite Set)**: যে সেটের উপাদান সংখ্যা গণনা করে নির্ধারণ করা যায়। যেমন: $A = \\{1, 2, 3, 4\\}$
*   **অসীম সেট (Infinite Set)**: যে সেটের উপাদান সংখ্যা গণনা করে শেষ করা যায় না। যেমন: স্বাভাবিক সংখ্যার সেট $N = \\{1, 2, 3, 4, \\dots\\}$
*   **ফাঁকা সেট (Empty/Null Set)**: যে সেটে কোনো উপাদান নেই। একে $\\emptyset$ বা $\\{\\}$ দ্বারা প্রকাশ করা হয়।
*   **সার্বিক সেট (Universal Set)**: আলোচনাধীন সকল সেট যে নির্দিষ্ট সেটের উপসেট, তাকে সার্বিক সেট $U$ বলে।
*   **উপসেট (Subset)**: $A$ সেটের প্রতিটি উপাদান যদি $B$ সেটেরও উপাদান হয়, তবে $A$ কে $B$ এর উপসেট বলে। প্রকাশ: $A \\subseteq B$
*   **প্রকৃত উপসেট (Proper Subset)**: $A \\subset B$ (অর্থাৎ $B$ তে অন্তত একটি উপাদান বেশি আছে)।

### ৪. সেটের প্রক্রিয়া (Set Operations)

*   **সংযোগ সেট (Union of Sets)**: $A \\cup B = \\{x : x \\in A \\text{ অথবা } x \\in B\\}$
*   **ছেদ সেট (Intersection of Sets)**: $A \\cap B = \\{x : x \\in A \\text{ এবং } x \\in B\\}$
*   **সেটের অন্তর (Difference of Sets)**: $A - B$ বা $A \\setminus B = \\{x : x \\in A \\text{ এবং } x \\notin B\\}$
*   **পূরক সেট (Complement of a Set)**: $A' = U - A$

### ৫. গুরুত্বপূর্ণ সূত্র (Important Formulas)

সেটের উপাদান সংখ্যা (Cardinality) সম্পর্কিত কিছু গুরুত্বপূর্ণ সূত্র:

*   $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$
*   $n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C)$

**ডি মরগানের সূত্র (De Morgan's Laws)**:
1.  $(A \\cup B)' = A' \\cap B'$
2.  $(A \\cap B)' = A' \\cup B'$

> "গণিতের সৌন্দর্য তার যুক্তির মধ্যে নিহিত।"
`;

const complexNumbersBengaliContent = `
## জটিল সংখ্যা (Complex Numbers) - One Shot for WBJEE

জটিল সংখ্যা WBJEE পরীক্ষার জন্য অত্যন্ত গুরুত্বপূর্ণ একটি অধ্যায়। এখান থেকে প্রতি বছর ২-৩ টি প্রশ্ন আসে।

### ১. জটিল সংখ্যার ধারণা (Concept of Complex Numbers)
কোনো সংখ্যাকে $z = x + iy$ আকারে প্রকাশ করা গেলে তাকে তাকে জটিল সংখ্যা বলে, যেখানে $x$ এবং $y$ হলো বাস্তব সংখ্যা এবং $i = \\sqrt{-1}$।
*   **বাস্তব অংশ (Real Part):** $Re(z) = x$
*   **অবাস্তব অংশ (Imaginary Part):** $Im(z) = y$

### ২. আরগ্যান্ড চিত্র (Argand Plane) ও পোলার আকার (Polar Form)
জটিল সংখ্যাকে একটি দ্বিমাত্রিক তলে বিন্দুরূপে $(x, y)$ প্রকাশ করা যায়, যাকে আরগ্যান্ড তল বলে।

![Argand Plane](data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20300%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%231e1e2f%22%20rx%3D%2215%22%2F%3E%3Cg%20stroke%3D%22%23333%22%20stroke-width%3D%221%22%3E%3Cline%20x1%3D%220%22%20y1%3D%22150%22%20x2%3D%22400%22%20y2%3D%22150%22%2F%3E%3Cline%20x1%3D%22200%22%20y1%3D%220%22%20x2%3D%22200%22%20y2%3D%22300%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%22360%22%20y%3D%22140%22%20fill%3D%22%23888%22%20font-family%3D%22sans-serif%22%20font-size%3D%2212%22%3ERe(z)%3C%2Ftext%3E%3Ctext%20x%3D%22210%22%20y%3D%2220%22%20fill%3D%22%23888%22%20font-family%3D%22sans-serif%22%20font-size%3D%2212%22%3EIm(z)%3C%2Ftext%3E%3Cline%20x1%3D%22200%22%20y1%3D%22150%22%20x2%3D%22320%22%20y2%3D%2260%22%20stroke%3D%22%23ff2a6d%22%20stroke-width%3D%223%22%20marker-end%3D%22url(%23arrow)%22%2F%3E%3Cpath%20d%3D%22M%20240%20150%20A%2040%2040%200%200%200%20232%20126%22%20fill%3D%22none%22%20stroke%3D%22%2305d9e8%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%22245%22%20y%3D%22140%22%20fill%3D%22%2305d9e8%22%20font-family%3D%22sans-serif%22%20font-size%3D%2214%22%3E%CE%B8%3C%2Ftext%3E%3Cline%20x1%3D%22320%22%20y1%3D%2260%22%20x2%3D%22320%22%20y2%3D%22150%22%20stroke%3D%22%23d1f7ff%22%20stroke-width%3D%221.5%22%20stroke-dasharray%3D%225%2C5%22%2F%3E%3Cline%20x1%3D%22320%22%20y1%3D%2260%22%20x2%3D%22200%22%20y2%3D%2260%22%20stroke%3D%22%23d1f7ff%22%20stroke-width%3D%221.5%22%20stroke-dasharray%3D%225%2C5%22%2F%3E%3Ctext%20x%3D%22330%22%20y%3D%2255%22%20fill%3D%22%23fff%22%20font-family%3D%22sans-serif%22%20font-size%3D%2214%22%20font-weight%3D%22bold%22%3Ez%20%3D%20x%20%2B%20iy%3C%2Ftext%3E%3Ctext%20x%3D%22250%22%20y%3D%2295%22%20fill%3D%22%23ff2a6d%22%20font-family%3D%22sans-serif%22%20font-size%3D%2214%22%20font-weight%3D%22bold%22%3Er%20%3D%20%7Cz%7C%3C%2Ftext%3E%3Ctext%20x%3D%22255%22%20y%3D%22165%22%20fill%3D%22%23d1f7ff%22%20font-family%3D%22sans-serif%22%20font-size%3D%2214%22%3Ex%3C%2Ftext%3E%3Ctext%20x%3D%22185%22%20y%3D%22105%22%20fill%3D%22%23d1f7ff%22%20font-family%3D%22sans-serif%22%20font-size%3D%2214%22%3Ey%3C%2Ftext%3E%3Ccircle%20cx%3D%22320%22%20cy%3D%2260%22%20r%3D%225%22%20fill%3D%22%2301c5c4%22%2F%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrow%22%20markerWidth%3D%2210%22%20markerHeight%3D%2210%22%20refX%3D%227%22%20refY%3D%223%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M0%2C0%20L0%2C6%20L9%2C3%20z%22%20fill%3D%22%23ff2a6d%22%20%2F%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fsvg%3E)

*   **মডুলাস (Modulus):** মূলবিন্দু থেকে দূরত্ত্ব, $|z| = r = \\sqrt{x^2 + y^2}$
*   **আর্গুমেন্ট (Argument):** $x$-অক্ষের ধনাত্মক দিকের সাথে উৎপন্ন কোণ, $\\theta = \\tan^{-1}(\\frac{y}{x})$
*   **পোলার আকার:** $z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$ (অয়লারের সূত্র)

### ৩. অনুবন্ধী জটিল সংখ্যা (Conjugate of a Complex Number)
$z = x + iy$ হলে, এর অনুবন্ধী জটিল সংখ্যা $\\bar{z} = x - iy$।
**বৈশিষ্ট্য:**
*   $z \\bar{z} = |z|^2$
*   $\\overline{z_1 \\pm z_2} = \\bar{z}_1 \\pm \\bar{z}_2$

### ৪. এককের ঘনমূল (Cube Roots of Unity)
সমীকরণ $x^3 = 1$ এর তিনটি মূল হলো: $1, \\omega, \\omega^2$
যেখানে $\\omega = \\frac{-1 + i\\sqrt{3}}{2}$ এবং $\\omega^2 = \\frac{-1 - i\\sqrt{3}}{2}$
**বৈশিষ্ট্য:**
*   $1 + \\omega + \\omega^2 = 0$
*   $\\omega^3 = 1$

### ৫. ডি ময়ভারের উপপাদ্য (De Moivre's Theorem)
যেকোনো মূলদ সংখ্যা $n$ এর জন্য:
$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$

**অয়লারের সূত্র (Euler's Formula) এর গ্রাফিক্যাল রূপ:**
$e^{ix} = \\cos x + i\\sin x$

নিচের গ্রাফে $\\sin(x)$ এবং $\\cos(x)$ এর তরঙ্গ দেখানো হলো, যা জটিল তলে ঘূর্ণন নির্দেশ করে:

\`\`\`mathplot
{
  "functions": [
    { "fn": "sin(x)", "color": "#ff2a6d", "name": "sin(x) [Imaginary Part]" },
    { "fn": "cos(x)", "color": "#05d9e8", "name": "cos(x) [Real Part]" }
  ],
  "domain": [-6.28, 6.28],
  "yDomain": [-1.5, 1.5],
  "step": 0.1,
  "height": 300
}
\`\`\`

### WBJEE এর জন্য গুরুত্বপূর্ণ টিপস:
1.  **Locus (সঞ্চারপথ) - সরলরেখা:** $|z - z_1| = |z - z_2|$ একটি সরলরেখা নির্দেশ করে যা $z_1$ ও $z_2$ এর লম্ব সমদ্বিখণ্ডক।
উদাহরণস্বরূপ, $|z - 2| = |z - 2i|$ এর সঞ্চারপথ হলো $y = x$ রেখা:

\`\`\`mathplot
{
  "functions": [
    { "fn": "x", "color": "#b5179e", "name": "y = x (Perpendicular Bisector)" }
  ],
  "domain": [-5, 5],
  "yDomain": [-5, 5],
  "step": 0.5,
  "height": 250
}
\`\`\`

2.  **Locus (সঞ্চারপথ) - বৃত্ত:** $|z - z_0| = r$ একটি বৃত্ত নির্দেশ করে যার কেন্দ্র $z_0$ এবং ব্যাসার্ধ $r$।
উদাহরণস্বরূপ, $|z| = 5$ একটি বৃত্ত যার কেন্দ্র মূলবিন্দুতে $(0,0)$ এবং ব্যাসার্ধ $5$:

\`\`\`mathplot
{
  "functions": [
    { "fn": "sqrt(25 - x^2)", "color": "#05d9e8", "name": "Upper Semicircle" },
    { "fn": "-sqrt(25 - x^2)", "color": "#ff2a6d", "name": "Lower Semicircle" }
  ],
  "domain": [-5.5, 5.5],
  "yDomain": [-6, 6],
  "step": 0.1,
  "height": 300
}
\`\`\`

3.  **সর্বোচ্চ ও সর্বনিম্ন মান:** ত্রিভুজ অসমতা (Triangle Inequality) ব্যবহার করো: $||z_1| - |z_2|| \\le |z_1 \\pm z_2| \\le |z_1| + |z_2|$
`;

// ── Materials Data ──────────────────────────────────────────────────────────────

const materials: Material[] = [
  {
    id: '1',
    title: 'Algebra Formulas Cheat Sheet',
    description:
      'A comprehensive list of all important algebra formulas for quick revision.',
    type: 'notes',
    category: 'General',
    topic: 'Algebra',
    isPremium: false,
    readTime: '5 min read',
    date: '2025-06-01',
    content: `# Algebra Formulas Cheat Sheet\n\n` + sampleContent,
  },
  {
    id: '2',
    title: 'Calculus Integration Techniques',
    description:
      'Detailed notes on advanced integration techniques with examples.',
    type: 'guide',
    category: 'Class XII',
    topic: 'Calculus',
    isPremium: true,
    readTime: '15 min read',
    date: '2025-05-20',
    content: `# Calculus Integration Techniques\n\n` + sampleContent,
  },
  {
    id: '3',
    title: 'Trigonometry Masterclass',
    description:
      'In-depth article covering basic to advanced trigonometry concepts.',
    type: 'article',
    category: 'Class XI',
    topic: 'Trigonometry',
    isPremium: true,
    readTime: '20 min read',
    date: '2025-05-15',
    content: `# Trigonometry Masterclass\n\n` + sampleContent,
  },
  {
    id: '4',
    title: 'Geometry Theorems Summary',
    description:
      'Quick summary of all major geometry theorems for competitive exams.',
    type: 'notes',
    category: 'General',
    topic: 'Geometry',
    isPremium: false,
    readTime: '8 min read',
    date: '2025-06-10',
    content: `# Geometry Theorems Summary\n\n` + sampleContent,
  },
  {
    id: '5',
    title: 'Probability Concepts Explained',
    description:
      'Clear explanations of probability concepts with real-world examples.',
    type: 'article',
    category: 'Class XII',
    topic: 'Probability',
    isPremium: false,
    readTime: '12 min read',
    date: '2025-06-05',
    content: `# Probability Concepts Explained\n\n` + sampleContent,
  },
  {
    id: '6',
    title: 'Coordinate Geometry Basics',
    description:
      'Foundational guide on coordinate geometry and its applications.',
    type: 'guide',
    category: 'Class XI',
    topic: 'Geometry',
    isPremium: false,
    readTime: '10 min read',
    date: '2025-05-28',
    content: `# Coordinate Geometry Basics\n\n` + sampleContent,
  },
  {
    id: '7',
    title: 'সেট তত্ত্ব (Set Theory) One Shot',
    description:
      'A complete quick revision of Set Theory concepts in Bengali.',
    type: 'notes',
    category: 'Class XI',
    topic: 'Set Theory',
    isPremium: false,
    readTime: '6 min read',
    date: '2025-06-12',
    content: setTheoryBengaliContent,
  },
  {
    id: '8',
    title: 'জটিল সংখ্যা (Complex Numbers) One Shot',
    description:
      'Complete WBJEE revision material for Complex Numbers with visual graphs.',
    type: 'guide',
    category: 'WBJEE',
    topic: 'Algebra',
    isPremium: false,
    readTime: '10 min read',
    date: '2025-06-14',
    content: complexNumbersBengaliContent,
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────────────

const getIcon = (type: MaterialType) => {
  switch (type) {
    case 'article':
      return <FileText size={22} />;
    case 'guide':
      return <BookOpen size={22} />;
    case 'notes':
      return <FileText size={22} />;
  }
};

const getTypeColor = (type: MaterialType) => {
  switch (type) {
    case 'article':
      return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    case 'guide':
      return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
    case 'notes':
      return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
  }
};

const getTypeLabel = (type: MaterialType) => {
  switch (type) {
    case 'article':
      return 'Article';
    case 'guide':
      return 'Guide';
    case 'notes':
      return 'Notes';
  }
};

// ── Unique topics from materials ────────────────────────────────────────────────

const allTopics = [...new Set(materials.map((m) => m.topic))];

// ── Sub-components ──────────────────────────────────────────────────────────────

/** Floating scroll-to-top button shown while reading */
const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 p-3 bg-brand-pink hover:bg-brand-light text-white rounded-full shadow-lg shadow-brand-pink/30 transition-colors"
      aria-label="Scroll to top"
    >
      <ChevronUp size={22} />
    </motion.button>
  );
};

/** CSS-based watermark overlay — much lighter than 150 DOM nodes */
const WatermarkOverlay: React.FC = () => (
  <div
    className="absolute inset-0 pointer-events-none z-50 overflow-hidden select-none"
    aria-hidden="true"
    style={{
      backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>
          <g transform='rotate(-30, 300, 200)'>
            <text x='50%' y='45%' dominant-baseline='middle' text-anchor='middle'
                  font-size='36' font-family='sans-serif' font-weight='900'
                  fill='#ffffff' opacity='0.06' letter-spacing='4'>
              RAJ SIR MATH ACADEMY
            </text>
            <text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle'
                  font-size='24' font-family='sans-serif' font-weight='bold'
                  fill='#db2777' opacity='0.08' letter-spacing='6'>
              ${CONTACT_INFO.phone}
            </text>
          </g>
        </svg>`
      )}")`,
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center center',
    }}
  />
);

/** Reading progress bar at the very top of the viewport */
const ReadingProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-pink via-brand-light to-brand-cyan z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

// ── Material Card ───────────────────────────────────────────────────────────────

interface MaterialCardProps {
  material: Material;
  onSelect: (m: Material) => void;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material, onSelect }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.25 }}
    onClick={() => onSelect(material)}
    className="bg-dark-900 rounded-2xl p-6 border border-white/5 hover:border-brand-pink/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-pink/5 group flex flex-col h-full relative overflow-hidden cursor-pointer"
    role="button"
    tabIndex={0}
    aria-label={`Read ${material.title}`}
    onKeyDown={(e) => e.key === 'Enter' && onSelect(material)}
  >
    {material.isPremium && (
      <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
        <Lock size={11} />
        PREMIUM
      </div>
    )}

    <div className="flex items-start gap-4 mb-4">
      <div
        className={`p-3 rounded-xl border flex-shrink-0 ${getTypeColor(material.type)}`}
      >
        {getIcon(material.type)}
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="text-[11px] font-bold text-brand-pink uppercase tracking-wider">
            {material.topic}
          </span>
          <span className="text-[11px] font-medium text-slate-600 uppercase tracking-wider hidden sm:inline">
            {getTypeLabel(material.type)}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-brand-light transition-colors leading-snug pr-12">
          {material.title}
        </h3>
      </div>
    </div>

    <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
      {material.description}
    </p>

    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
      <span className="text-xs font-mono text-slate-500 bg-dark-950 px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-1.5">
        <Clock size={13} /> {material.readTime}
      </span>

      <span
        className={`flex items-center gap-1 text-sm font-bold transition-colors ${
          material.isPremium
            ? 'text-slate-400 group-hover:text-amber-400'
            : 'text-brand-pink group-hover:text-brand-light'
        }`}
      >
        {material.isPremium ? 'Unlock' : 'Read'}
        <ChevronRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </span>
    </div>
  </motion.div>
);

// ── Material Reader ─────────────────────────────────────────────────────────────

interface MaterialReaderProps {
  material: Material;
  onClose: () => void;
}

const MaterialReader: React.FC<MaterialReaderProps> = ({
  material,
  onClose,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut: Escape to go back
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Prevent right-click on content area only
  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;
    const handler = (e: MouseEvent) => e.preventDefault();
    node.addEventListener('contextmenu', handler);
    return () => node.removeEventListener('contextmenu', handler);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 pt-24 pb-20 px-4 sm:px-6 lg:px-8 print:hidden">
      <ReadingProgressBar />
      <ScrollToTopButton />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8"
        >
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Materials</span>
          </button>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-xs font-bold text-brand-pink uppercase tracking-wider px-3 py-1 bg-brand-pink/10 rounded-full">
                {material.topic}
              </span>
              <span
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${getTypeColor(material.type)}`}
              >
                {getTypeLabel(material.type)}
              </span>
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                <Clock size={14} />
                {material.readTime}
              </span>
              {material.isPremium && (
                <span className="text-xs font-bold text-amber-500 flex items-center gap-1 px-2 py-1 bg-amber-500/10 rounded-full">
                  <Lock size={12} /> Premium
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              {material.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              {material.description}
            </p>
          </div>
        </motion.div>

        {material.isPremium ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-900 border border-brand-pink/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-brand-pink/20 to-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-amber-400" size={36} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Premium Content
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
              This study material is exclusively available to our premium
              members. Upgrade your account to access this and many other
              resources.
            </p>
            <button className="px-8 py-3.5 bg-gradient-to-r from-brand-pink to-brand-light hover:opacity-90 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-pink/20 active:scale-[0.98]">
              Unlock Premium Access
            </button>
          </motion.div>
        ) : (
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-dark-900 rounded-3xl p-6 md:p-10 border border-white/5 shadow-2xl select-none relative overflow-hidden"
          >
            <WatermarkOverlay />

            <div className="prose prose-invert prose-pink max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-brand-pink hover:prose-a:text-brand-light prose-blockquote:border-l-brand-pink prose-blockquote:bg-white/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-img:rounded-xl prose-li:marker:text-brand-pink/60 relative z-10">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  code({ className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    const isBlock =
                      typeof children === 'string' && children.includes('\n');

                    if (match?.[1] === 'mathplot') {
                      return (
                        <MathPlot
                          config={String(children).replace(/\n$/, '')}
                        />
                      );
                    }

                    if (isBlock || match) {
                      return (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    }

                    // Inline code
                    return (
                      <code
                        className="bg-white/10 text-brand-light px-1.5 py-0.5 rounded text-sm font-mono"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {material.content}
              </ReactMarkdown>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
              <p className="text-sm text-slate-500 text-center sm:text-left">
                © {new Date().getFullYear()} Raj Sir Math Academy. All rights
                reserved.
              </p>
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
                className="text-sm text-brand-pink hover:text-brand-light transition-colors flex items-center gap-1"
              >
                <ChevronUp size={16} />
                Back to top
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// ── Main Component ──────────────────────────────────────────────────────────────

// ── Folder View Components ──────────────────────────────────────────────────────

const handleDownloadPDF = (material: Material) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text(material.title, 10, 20);
  doc.setFontSize(12);
  doc.text(`Topic: ${material.topic} | Type: ${material.type}`, 10, 30);
  doc.setFontSize(10);
  
  // Very basic text extraction for PDF
  const textLines = doc.splitTextToSize(material.content.replace(/[#*`]/g, ''), 180);
  doc.text(textLines, 10, 40);
  
  doc.save(`${material.title.replace(/\s+/g, '_')}.pdf`);
};

const TopicAccordion = ({ topic, materials, onSelect }: { topic: string, materials: Material[], onSelect: (m: Material) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-3 w-full p-3 bg-dark-800/50 rounded-lg border border-white/5 hover:border-brand-cyan/30 transition-colors">
        {isOpen ? <FolderOpen size={18} className="text-brand-cyan" /> : <Folder size={18} className="text-brand-cyan" />}
        <span className="text-md font-semibold text-slate-200">{topic}</span>
        <ChevronDown size={16} className={`ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="pl-6 pr-2 py-3 space-y-3 border-l-2 border-dark-800 ml-4 mt-2">
              {materials.map(mat => (
                <div key={mat.id} className="flex items-center justify-between p-3 bg-dark-900 rounded-lg border border-white/5 hover:border-white/20 transition-colors group">
                  <div className="flex items-center gap-3 cursor-pointer flex-1" onClick={() => onSelect(mat)}>
                    <FileText size={16} className="text-slate-400 group-hover:text-brand-light" />
                    <div>
                      <h4 className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{mat.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        {mat.isPremium && <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded flex items-center gap-1"><Lock size={10} /> Premium</span>}
                        <span className="text-[10px] text-slate-500">{mat.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => onSelect(mat)} className="px-3 py-1.5 text-xs font-medium bg-brand-pink/10 text-brand-pink hover:bg-brand-pink/20 rounded-md transition-colors">
                      Read
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); handleDownloadPDF(mat); }} className="p-1.5 text-slate-400 hover:text-brand-cyan hover:bg-brand-cyan/10 rounded-md transition-colors" title="Download PDF">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const FolderAccordion = ({ category, topics, onSelect }: { category: string, topics: Record<string, Material[]>, onSelect: (m: Material) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-3 w-full p-4 bg-dark-900 rounded-xl border border-white/5 hover:border-brand-pink/30 transition-colors">
        {isOpen ? <FolderOpen className="text-brand-pink" /> : <Folder className="text-brand-pink" />}
        <span className="text-lg font-bold text-white">{category}</span>
        <ChevronDown className={`ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="pl-6 pr-2 py-4 space-y-4 border-l-2 border-dark-800 ml-6 mt-2">
              {Object.entries(topics).map(([topic, mats]) => (
                <TopicAccordion key={topic} topic={topic} materials={mats} onSelect={onSelect} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const StudyMaterials: React.FC<StudyMaterialsProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'folder' | 'grid'>('folder');
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
    null
  );
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: "/" to focus search
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === '/' && !selectedMaterial) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedMaterial]);

  const filteredMaterials = useMemo(() => {
    return materials.filter((material) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        material.title.toLowerCase().includes(query) ||
        material.topic.toLowerCase().includes(query) ||
        material.description.toLowerCase().includes(query);
      const matchesFilter =
        activeFilter === 'all' || material.type === activeFilter;
      const matchesTopic = !activeTopic || material.topic === activeTopic;
      return matchesSearch && matchesFilter && matchesTopic;
    });
  }, [searchQuery, activeFilter, activeTopic]);

  const groupedMaterials = useMemo(() => {
    const groups: Record<string, Record<string, Material[]>> = {};
    filteredMaterials.forEach(mat => {
      if (!groups[mat.category]) groups[mat.category] = {};
      if (!groups[mat.category][mat.topic]) groups[mat.category][mat.topic] = [];
      groups[mat.category][mat.topic].push(mat);
    });
    return groups;
  }, [filteredMaterials]);

  const handleSelectMaterial = useCallback((material: Material) => {
    setSelectedMaterial(material);
  }, []);

  const handleCloseMaterial = useCallback(() => {
    setSelectedMaterial(null);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    searchInputRef.current?.focus();
  }, []);

  // ── Reader View ───────────────────────────────────────────────────────────────

  if (selectedMaterial) {
    return (
      <MaterialReader
        material={selectedMaterial}
        onClose={handleCloseMaterial}
      />
    );
  }

  // ── List View ─────────────────────────────────────────────────────────────────

  const totalCount = materials.length;
  const filteredCount = filteredMaterials.length;

  return (
    <div className="min-h-screen bg-dark-950 pt-24 pb-20 px-4 sm:px-6 lg:px-8 print:hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Home</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Study{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-light">
                  Materials
                </span>
              </h1>
              <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                Access our comprehensive collection of study notes, guides, and
                articles to boost your preparation.
              </p>
            </div>
            
            <div className="flex items-center gap-2 bg-dark-900 p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setViewMode('folder')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'folder' ? 'bg-brand-pink/20 text-brand-pink' : 'text-slate-400 hover:text-white'}`}
                title="Folder View"
              >
                <ListTree size={20} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-brand-cyan/20 text-brand-cyan' : 'text-slate-400 hover:text-white'}`}
                title="Grid View"
              >
                <LayoutGrid size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4 mb-10"
        >
          {/* Search + Type filters row */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={20}
              />
              <input
                ref={searchInputRef}
                type="text"
                placeholder='Search materials... (Press "/" to focus)'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-900 border border-white/10 rounded-xl py-3 pl-12 pr-10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors p-1"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 w-full md:w-auto hide-scrollbar">
              {(['all', 'article', 'guide', 'notes'] as FilterType[]).map(
                (filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2.5 rounded-xl font-medium capitalize whitespace-nowrap transition-all text-sm ${
                      activeFilter === filter
                        ? 'bg-brand-pink text-white shadow-lg shadow-brand-pink/20'
                        : 'bg-dark-900 text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
                    }`}
                  >
                    {filter === 'all' ? (
                      <span className="flex items-center gap-1.5">
                        <Filter size={14} /> All
                      </span>
                    ) : (
                      filter
                    )}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Topic chips row */}
          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
            <button
              onClick={() => setActiveTopic(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                activeTopic === null
                  ? 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30'
                  : 'bg-dark-900 text-slate-500 border-white/5 hover:text-white hover:border-white/10'
              }`}
            >
              All Topics
            </button>
            {allTopics.map((topic) => (
              <button
                key={topic}
                onClick={() =>
                  setActiveTopic(activeTopic === topic ? null : topic)
                }
                className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                  activeTopic === topic
                    ? 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30'
                    : 'bg-dark-900 text-slate-500 border-white/5 hover:text-white hover:border-white/10'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Results count */}
          {(searchQuery || activeFilter !== 'all' || activeTopic) && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-slate-500"
            >
              Showing {filteredCount} of {totalCount} materials
              {searchQuery && (
                <>
                  {' '}
                  for &ldquo;
                  <span className="text-brand-pink">{searchQuery}</span>&rdquo;
                </>
              )}
            </motion.p>
          )}
        </motion.div>

        {/* Materials Display */}
        {viewMode === 'folder' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            {Object.entries(groupedMaterials).map(([category, topics]) => (
              <FolderAccordion key={category} category={category} topics={topics} onSelect={handleSelectMaterial} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.06 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredMaterials.map((material) => (
                <MaterialCard
                  key={material.id}
                  material={material}
                  onSelect={handleSelectMaterial}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredCount === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-dark-900 rounded-2xl border border-white/5 mt-6"
          >
            <div className="w-16 h-16 bg-dark-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen size={32} className="text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              No materials found
            </h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Try adjusting your search or filters to find what you&apos;re
              looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
                setActiveTopic(null);
              }}
              className="px-6 py-2.5 bg-brand-pink/10 text-brand-pink hover:bg-brand-pink/20 rounded-xl font-medium transition-colors text-sm"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};