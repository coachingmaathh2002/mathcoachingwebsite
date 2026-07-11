import { MCQ } from '../components/WBJEEAssignments';

export const probabilityMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `prob-1-${i + 1}`,
  question: `দুটি ছক্কা একসাথে ছোঁড়া হলে তাদের যোগফল ${i % 11 + 2} হওয়ার সম্ভাবনা কত?`,
  options: [
    `${(6 - Math.abs(7 - (i % 11 + 2)))} / 36`,
    `${(5 - Math.abs(7 - (i % 11 + 2))) < 0 ? 0 : (5 - Math.abs(7 - (i % 11 + 2)))} / 36`,
    `${(7 - Math.abs(7 - (i % 11 + 2)))} / 36`,
    `1 / 6`
  ],
  correctAnswer: 0,
  explanation: `যোগফল $x$ হওয়ার সম্ভাবনা $\\frac{6 - |7 - x|}{36}$। এখানে $x = ${i % 11 + 2}$, সুতরাং সম্ভাবনা $\\frac{${6 - Math.abs(7 - (i % 11 + 2))}}{36}$।`
}));

export const statisticsMCQs: MCQ[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `prob-2-${i + 1}`,
  question: `প্রথম ${i+5} টি স্বাভাবিক সংখ্যার ভেদাঙ্ক (Variance) কত?`,
  options: [
    `\\frac{${(i+5)**2 - 1}}{12}`,
    `\\frac{${(i+5)**2 + 1}}{12}`,
    `\\frac{${(i+5)**2 - 1}}{6}`,
    `\\frac{${(i+5)**2}}{12}`
  ],
  correctAnswer: 0,
  explanation: `প্রথম $n$ টি স্বাভাবিক সংখ্যার ভেদাঙ্কের সূত্র হলো $\\frac{n^2 - 1}{12}$। এখানে $n = ${i+5}$, তাই ভেদাঙ্ক $\\frac{${(i+5)**2} - 1}{12} = \\frac{${(i+5)**2 - 1}}{12}$।`
}));
