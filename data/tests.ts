export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Test {
  id: string;
  title: string;
  topic: string;
  description: string;
  questions: Question[];
}

export const freeTests: Test[] = [
  {
    id: "test-1",
    title: "মক টেস্ট ১: সেট, অপেক্ষক ও ত্রিকোণমিতি",
    topic: "Sets, Relations & Trigonometry",
    description: "একাদশ শ্রেণির সেট তত্ত্ব, সম্বন্ধ ও অপেক্ষক এবং ত্রিকোণমিতির প্রাথমিক ধারণার উপর ভিত্তি করে ২০টি প্রশ্নের মক টেস্ট।",
    questions: [
      { id: 1, text: "A = {1, 2, 3} সেটের উপসেটের সংখ্যা কত?", options: ["3", "6", "8", "9"], correctAnswerIndex: 2 },
      { id: 2, text: "A ∪ A' = ? (যেখানে A' হলো A এর পূরক সেট এবং U সার্বিক সেট)", options: ["A", "∅", "U", "A'"], correctAnswerIndex: 2 },
      { id: 3, text: "f(x) = |x| অপেক্ষকের প্রসার (Range) কত?", options: ["R", "[0, ∞)", "(0, ∞)", "R - {0}"], correctAnswerIndex: 1 },
      { id: 4, text: "A = {a, b}, B = {1, 2, 3} হলে A × B সেটে কতগুলি পদ থাকবে?", options: ["5", "6", "8", "9"], correctAnswerIndex: 1 },
      { id: 5, text: "f(x) = 1/x অপেক্ষকের ক্ষেত্র (Domain) কী?", options: ["R", "R - {0}", "(0, ∞)", "[0, ∞)"], correctAnswerIndex: 1 },
      { id: 6, text: "sin(π/6) এর মান কত?", options: ["1/2", "√3/2", "1/√2", "1"], correctAnswerIndex: 0 },
      { id: 7, text: "tan x = 1 হলে x এর মান কত? (0 < x < π/2)", options: ["π/6", "π/4", "π/3", "π/2"], correctAnswerIndex: 1 },
      { id: 8, text: "sin²θ + cos²θ = ?", options: ["0", "1", "-1", "2"], correctAnswerIndex: 1 },
      { id: 9, text: "1 রেডিয়ান সমান কত ডিগ্রি? (প্রায়)", options: ["57.3°", "60°", "90°", "180°"], correctAnswerIndex: 0 },
      { id: 10, text: "cos(π/2 - θ) = ?", options: ["cos θ", "-cos θ", "sin θ", "-sin θ"], correctAnswerIndex: 2 },
      { id: 11, text: "A ∩ A' = ?", options: ["A", "∅", "U", "A'"], correctAnswerIndex: 1 },
      { id: 12, text: "যদি A ⊆ B হয়, তবে A ∪ B = ?", options: ["A", "B", "∅", "U"], correctAnswerIndex: 1 },
      { id: 13, text: "f(x) = x² অপেক্ষকটি কী ধরনের অপেক্ষক?", options: ["এক-এক (One-one)", "বহু-এক (Many-one)", "ধ্রুবক (Constant)", "অভেদ (Identity)"], correctAnswerIndex: 1 },
      { id: 14, text: "sin(π + θ) = ?", options: ["sin θ", "-sin θ", "cos θ", "-cos θ"], correctAnswerIndex: 1 },
      { id: 15, text: "cos(2π - θ) = ?", options: ["cos θ", "-cos θ", "sin θ", "-sin θ"], correctAnswerIndex: 0 },
      { id: 16, text: "A = {x : x একটি মৌলিক সংখ্যা এবং x < 10} সেটটি তালিকা পদ্ধতিতে লিখলে কী হবে?", options: ["{2, 3, 5, 7}", "{1, 2, 3, 5, 7}", "{3, 5, 7, 9}", "{2, 4, 6, 8}"], correctAnswerIndex: 0 },
      { id: 17, text: "দুটি সেট A এবং B এর ক্ষেত্রে n(A) = 3, n(B) = 4 এবং n(A ∩ B) = 2 হলে n(A ∪ B) = ?", options: ["5", "7", "9", "1"], correctAnswerIndex: 0 },
      { id: 18, text: "f(x) = 2x + 3 হলে f(-1) এর মান কত?", options: ["1", "5", "-1", "-5"], correctAnswerIndex: 0 },
      { id: 19, text: "tan(π/3) এর মান কত?", options: ["1/√3", "1", "√3", "অসংজ্ঞাত"], correctAnswerIndex: 2 },
      { id: 20, text: "sec²θ - tan²θ = ?", options: ["0", "1", "-1", "2"], correctAnswerIndex: 1 }
    ]
  },
  {
    id: "test-2",
    title: "মক টেস্ট ২: বীজগণিত ও কলনবিদ্যা",
    topic: "Algebra & Calculus",
    description: "জটিল রাশি, বিন্যাস ও সমবায় এবং সীমা ও অবকলনের উপর ২০টি প্রশ্নের মক টেস্ট।",
    questions: [
      { id: 1, text: "i² এর মান কত?", options: ["1", "-1", "i", "-i"], correctAnswerIndex: 1 },
      { id: 2, text: "5! এর মান কত?", options: ["20", "60", "120", "24"], correctAnswerIndex: 2 },
      { id: 3, text: "z = 3 + 4i জটিল রাশির মডিউলাস (Modulus) কত?", options: ["3", "4", "5", "7"], correctAnswerIndex: 2 },
      { id: 4, text: "nC0 এর মান কত?", options: ["0", "1", "n", "n!"], correctAnswerIndex: 1 },
      { id: 5, text: "x² + 1 = 0 সমীকরণের বীজগুলি কী কী?", options: ["1, -1", "i, -i", "1, i", "-1, -i"], correctAnswerIndex: 1 },
      { id: 6, text: "lim (x→0) (sin x)/x এর মান কত?", options: ["0", "1", "∞", "অনির্ণেয়"], correctAnswerIndex: 1 },
      { id: 7, text: "d/dx (x³) = ?", options: ["3x²", "x²", "3x", "x³/3"], correctAnswerIndex: 0 },
      { id: 8, text: "d/dx (sin x) = ?", options: ["cos x", "-cos x", "sin x", "-sin x"], correctAnswerIndex: 0 },
      { id: 9, text: "lim (x→2) (x² - 4)/(x - 2) এর মান কত?", options: ["0", "2", "4", "∞"], correctAnswerIndex: 2 },
      { id: 10, text: "ধ্রুবক (constant) পদের ডেরিভেটিভ কত?", options: ["1", "0", "x", "∞"], correctAnswerIndex: 1 },
      { id: 11, text: "i^4 এর মান কত?", options: ["1", "-1", "i", "-i"], correctAnswerIndex: 0 },
      { id: 12, text: "nPn এর মান কত?", options: ["1", "n", "n!", "0"], correctAnswerIndex: 2 },
      { id: 13, text: "z = x + iy হলে z এর অনুবন্ধী (conjugate) জটিল রাশি কী?", options: ["x - iy", "-x + iy", "-x - iy", "y + ix"], correctAnswerIndex: 0 },
      { id: 14, text: "d/dx (e^x) = ?", options: ["e^x", "x e^(x-1)", "e^x / x", "1"], correctAnswerIndex: 0 },
      { id: 15, text: "lim (x→0) (e^x - 1)/x = ?", options: ["0", "1", "e", "∞"], correctAnswerIndex: 1 },
      { id: 16, text: "d/dx (ln x) = ?", options: ["1/x", "x", "e^x", "1"], correctAnswerIndex: 0 },
      { id: 17, text: "3x - 5 < x + 7 অসমীকরণটির সমাধান কী?", options: ["x < 6", "x > 6", "x < 12", "x > 12"], correctAnswerIndex: 0 },
      { id: 18, text: "nCr = nC(n-r) সূত্রটি কি সত্য?", options: ["হ্যাঁ", "না", "শুধুমাত্র n জোড় হলে", "শুধুমাত্র n বিজোড় হলে"], correctAnswerIndex: 0 },
      { id: 19, text: "d/dx (cos x) = ?", options: ["sin x", "-sin x", "cos x", "-cos x"], correctAnswerIndex: 1 },
      { id: 20, text: "lim (x→a) (x^n - a^n)/(x - a) = ?", options: ["n a^(n-1)", "a^n", "n x^(n-1)", "0"], correctAnswerIndex: 0 }
    ]
  },
  {
    id: "test-3",
    title: "মক টেস্ট ৩: সম্পূর্ণ একাদশ শ্রেণি (পার্ট ১)",
    topic: "Full Syllabus Mock",
    description: "একাদশ শ্রেণির সম্পূর্ণ সিলেবাসের উপর ভিত্তি করে মিশ্রিত ২০টি প্রশ্নের মক টেস্ট।",
    questions: [
      { id: 1, text: "A = {1, 2, 3} সেটের উপসেটের সংখ্যা কত?", options: ["3", "6", "8", "9"], correctAnswerIndex: 2 },
      { id: 2, text: "i² এর মান কত?", options: ["1", "-1", "i", "-i"], correctAnswerIndex: 1 },
      { id: 3, text: "f(x) = |x| অপেক্ষকের প্রসার (Range) কত?", options: ["R", "[0, ∞)", "(0, ∞)", "R - {0}"], correctAnswerIndex: 1 },
      { id: 4, text: "nC0 এর মান কত?", options: ["0", "1", "n", "n!"], correctAnswerIndex: 1 },
      { id: 5, text: "sin(π/6) এর মান কত?", options: ["1/2", "√3/2", "1/√2", "1"], correctAnswerIndex: 0 },
      { id: 6, text: "lim (x→0) (sin x)/x এর মান কত?", options: ["0", "1", "∞", "অনির্ণেয়"], correctAnswerIndex: 1 },
      { id: 7, text: "tan x = 1 হলে x এর মান কত? (0 < x < π/2)", options: ["π/6", "π/4", "π/3", "π/2"], correctAnswerIndex: 1 },
      { id: 8, text: "d/dx (x³) = ?", options: ["3x²", "x²", "3x", "x³/3"], correctAnswerIndex: 0 },
      { id: 9, text: "1 রেডিয়ান সমান কত ডিগ্রি? (প্রায়)", options: ["57.3°", "60°", "90°", "180°"], correctAnswerIndex: 0 },
      { id: 10, text: "lim (x→2) (x² - 4)/(x - 2) এর মান কত?", options: ["0", "2", "4", "∞"], correctAnswerIndex: 2 },
      { id: 11, text: "A ∩ A' = ?", options: ["A", "∅", "U", "A'"], correctAnswerIndex: 1 },
      { id: 12, text: "nPn এর মান কত?", options: ["1", "n", "n!", "0"], correctAnswerIndex: 2 },
      { id: 13, text: "f(x) = x² অপেক্ষকটি কী ধরনের অপেক্ষক?", options: ["এক-এক (One-one)", "বহু-এক (Many-one)", "ধ্রুবক (Constant)", "অভেদ (Identity)"], correctAnswerIndex: 1 },
      { id: 14, text: "d/dx (e^x) = ?", options: ["e^x", "x e^(x-1)", "e^x / x", "1"], correctAnswerIndex: 0 },
      { id: 15, text: "cos(2π - θ) = ?", options: ["cos θ", "-cos θ", "sin θ", "-sin θ"], correctAnswerIndex: 0 },
      { id: 16, text: "d/dx (ln x) = ?", options: ["1/x", "x", "e^x", "1"], correctAnswerIndex: 0 },
      { id: 17, text: "দুটি সেট A এবং B এর ক্ষেত্রে n(A) = 3, n(B) = 4 এবং n(A ∩ B) = 2 হলে n(A ∪ B) = ?", options: ["5", "7", "9", "1"], correctAnswerIndex: 0 },
      { id: 18, text: "nCr = nC(n-r) সূত্রটি কি সত্য?", options: ["হ্যাঁ", "না", "শুধুমাত্র n জোড় হলে", "শুধুমাত্র n বিজোড় হলে"], correctAnswerIndex: 0 },
      { id: 19, text: "tan(π/3) এর মান কত?", options: ["1/√3", "1", "√3", "অসংজ্ঞাত"], correctAnswerIndex: 2 },
      { id: 20, text: "lim (x→a) (x^n - a^n)/(x - a) = ?", options: ["n a^(n-1)", "a^n", "n x^(n-1)", "0"], correctAnswerIndex: 0 }
    ]
  },
  {
    id: "test-4",
    title: "মক টেস্ট ৪: সম্পূর্ণ একাদশ শ্রেণি (পার্ট ২)",
    topic: "Full Syllabus Mock",
    description: "একাদশ শ্রেণির সম্পূর্ণ সিলেবাসের উপর ভিত্তি করে আরও ২০টি গুরুত্বপূর্ণ প্রশ্নের মক টেস্ট।",
    questions: [
      { id: 1, text: "A = {a, b}, B = {1, 2, 3} হলে A × B সেটে কতগুলি পদ থাকবে?", options: ["5", "6", "8", "9"], correctAnswerIndex: 1 },
      { id: 2, text: "5! এর মান কত?", options: ["20", "60", "120", "24"], correctAnswerIndex: 2 },
      { id: 3, text: "f(x) = 1/x অপেক্ষকের ক্ষেত্র (Domain) কী?", options: ["R", "R - {0}", "(0, ∞)", "[0, ∞)"], correctAnswerIndex: 1 },
      { id: 4, text: "x² + 1 = 0 সমীকরণের বীজগুলি কী কী?", options: ["1, -1", "i, -i", "1, i", "-1, -i"], correctAnswerIndex: 1 },
      { id: 5, text: "sin²θ + cos²θ = ?", options: ["0", "1", "-1", "2"], correctAnswerIndex: 1 },
      { id: 6, text: "d/dx (sin x) = ?", options: ["cos x", "-cos x", "sin x", "-sin x"], correctAnswerIndex: 0 },
      { id: 7, text: "cos(π/2 - θ) = ?", options: ["cos θ", "-cos θ", "sin θ", "-sin θ"], correctAnswerIndex: 2 },
      { id: 8, text: "ধ্রুবক (constant) পদের ডেরিভেটিভ কত?", options: ["1", "0", "x", "∞"], correctAnswerIndex: 1 },
      { id: 9, text: "যদি A ⊆ B হয়, তবে A ∪ B = ?", options: ["A", "B", "∅", "U"], correctAnswerIndex: 1 },
      { id: 10, text: "i^4 এর মান কত?", options: ["1", "-1", "i", "-i"], correctAnswerIndex: 0 },
      { id: 11, text: "sin(π + θ) = ?", options: ["sin θ", "-sin θ", "cos θ", "-cos θ"], correctAnswerIndex: 1 },
      { id: 12, text: "z = x + iy হলে z এর অনুবন্ধী (conjugate) জটিল রাশি কী?", options: ["x - iy", "-x + iy", "-x - iy", "y + ix"], correctAnswerIndex: 0 },
      { id: 13, text: "A = {x : x একটি মৌলিক সংখ্যা এবং x < 10} সেটটি তালিকা পদ্ধতিতে লিখলে কী হবে?", options: ["{2, 3, 5, 7}", "{1, 2, 3, 5, 7}", "{3, 5, 7, 9}", "{2, 4, 6, 8}"], correctAnswerIndex: 0 },
      { id: 14, text: "lim (x→0) (e^x - 1)/x = ?", options: ["0", "1", "e", "∞"], correctAnswerIndex: 1 },
      { id: 15, text: "f(x) = 2x + 3 হলে f(-1) এর মান কত?", options: ["1", "5", "-1", "-5"], correctAnswerIndex: 0 },
      { id: 16, text: "3x - 5 < x + 7 অসমীকরণটির সমাধান কী?", options: ["x < 6", "x > 6", "x < 12", "x > 12"], correctAnswerIndex: 0 },
      { id: 17, text: "sec²θ - tan²θ = ?", options: ["0", "1", "-1", "2"], correctAnswerIndex: 1 },
      { id: 18, text: "d/dx (cos x) = ?", options: ["sin x", "-sin x", "cos x", "-cos x"], correctAnswerIndex: 1 },
      { id: 19, text: "A ∪ A' = ? (যেখানে A' হলো A এর পূরক সেট এবং U সার্বিক সেট)", options: ["A", "∅", "U", "A'"], correctAnswerIndex: 2 },
      { id: 20, text: "z = 3 + 4i জটিল রাশির মডিউলাস (Modulus) কত?", options: ["3", "4", "5", "7"], correctAnswerIndex: 2 }
    ]
  }
];
