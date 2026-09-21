import { Course } from './types';
import courseSlideWbjee from './assets/images/course_slide_wbjee_1788795174986.jpg';
import courseSlideHs12 from './assets/images/course_slide_hs12_1788795197956.jpg';
import courseSlideHonours from './assets/images/course_slide_honours_1788795216971.jpg';
import courseSlideMadhyamik from './assets/images/course_slide_madhyamik_1788795232604.jpg';
import courseSlideMocktests from './assets/images/course_slide_mocktests_1788795247302.jpg';

export const COURSES: Course[] = [
  {
    id: 'wb-10',
    title: 'WB Board Class 10 Maths',
    tagline: 'Crack Madhyamik 2026 with 100/100 Strategy',
    description: 'Complete preparation for Madhyamik examination with extensive chapter-wise practice, previous year question analysis, and mock tests.',
    highlight: 'Validity up to final exam',
    pricePlaceholder: '₹4,999',
    category: 'School',
    instructor: 'Raj Sir (15+ Yrs Exp)',
    rating: 4.9,
    reviewsCount: 348,
    difficulty: 'Foundation',
    duration: 'Full Academic Year',
    badge: 'POPULAR CHOICE',
    enrolledCount: 1420,
    featured: true,
    syllabusTopics: ['Algebra & Quadratic Equations', 'Geometry & Circle Theorems', 'Trigonometry Ratios', 'Mensuration 3D & Statistics'],
    posterImage: courseSlideMadhyamik
  },
  {
    id: 'wbjee',
    title: 'WBJEE Full Maths Mastery',
    tagline: 'Target Top Engineering Colleges in West Bengal',
    description: 'Comprehensive competitive preparation for WBJEE engineering aspirants with shortcut techniques, speed drills, and 100+ mock tests.',
    highlight: 'Complete competitive preparation',
    pricePlaceholder: '₹1,999',
    category: 'Competitive',
    instructor: 'Raj Sir & WBJEE Rankers',
    rating: 5.0,
    reviewsCount: 512,
    difficulty: 'Elite Ranker',
    duration: '6 Months Intensive',
    badge: 'BESTSELLER',
    enrolledCount: 2150,
    featured: true,
    syllabusTopics: ['Calculus & Differential Equations', 'Coordinate Geometry & Conic Sections', 'Vectors & 3D Geometry', 'Algebra & Complex Numbers'],
    posterImage: courseSlideWbjee
  },
  {
    id: 'wb-12-s3',
    title: 'WB Board Class 12 (Third Semester)',
    tagline: 'সম্বন্ধ ও অপেক্ষক, বীজগণিত, কলনবিদ্যা এবং সম্ভাবনা (New Semester System)',
    description: 'Comprehensive curriculum for WB Board Class 12 Third Semester. In-depth mastery of Relations & Functions, Matrices & Determinants, Limits, Continuity, Differentiation, Second Order Derivatives, and Probability (Bayes Theorem & Conditional Probability) with step-by-step problem solving and WBCHSE board question patterns.',
    highlight: 'WBCHSE Class 12 Sem 3 Prep',
    pricePlaceholder: '₹999',
    category: 'School',
    instructor: 'Raj Sir',
    rating: 4.9,
    reviewsCount: 260,
    difficulty: 'Advanced',
    duration: 'Third Semester',
    badge: 'SEMESTER 3',
    enrolledCount: 940,
    featured: true,
    syllabusTopics: [
      'ইউনিট ১: সম্বন্ধ ও অপেক্ষক (Relations, Functions & Inverse Trig)',
      'ইউনিট ২: বীজগণিত (Matrices, Determinants & Linear Equations)',
      'ইউনিট ৩: কলনবিদ্যা (Limits, Continuity & Second Order Derivative)',
      'ইউনিট ৪: সম্ভাবনা (Conditional Probability & Bayes\' Theorem)'
    ],
    syllabusUnits: [
      {
        unitTitle: 'ইউনিট ১: সম্বন্ধ ও অপেক্ষক (Relations & Functions)',
        subtopics: [
          'সম্বন্ধ (Relations)',
          'চিত্রণ বা অপেক্ষক (Mapping or Functions)',
          'বিপরীত বৃত্তীয় অপেক্ষকসমূহ (Inverse Trigonometric Functions)'
        ]
      },
      {
        unitTitle: '📂 ইউনিট ২: বীজগণিত (Algebra)',
        subtopics: [
          'ম্যাট্রিক্সের প্রকারভেদ ও ম্যাট্রিক্স প্রক্রিয়াসমূহ (Types of Matrices and Matrix Operations)',
          'ডিটারমিন্যান্ট বা নির্ণায়ক (Determinants)',
          'ম্যাট্রিক্সের অ্যাডজয়েন্ট ও বিপরীত ম্যাট্রিক্স এবং রৈখিক সমীকরণ সমাধান (Adjoint & Inverse of a Matrix and Linear Equations)'
        ]
      },
      {
        unitTitle: '📂 ইউনিট ৩: কলনবিদ্যা (Calculus)',
        subtopics: [
          'সীমা (Limits - প্রাথমিক রিভিশন)',
          'সন্ততা ও অবকলনযোগ্যতা (Continuity and Differentiability)',
          'অবকলন বা অন্তরকলন (Differentiation)',
          'দ্বিতীয় ক্রমের অন্তরকলজ (Second Order Derivative)'
        ]
      },
      {
        unitTitle: '📂 ইউনিট ৪: সম্ভাবনা (Probability)',
        subtopics: [
          'শর্তাধীন সম্ভাবনা এবং গুণন উপপাদ্য (Conditional Probability & Multiplication Theorem)',
          'বেয়স উপপাদ্য (Bayes\' Theorem)'
        ]
      }
    ],
    posterImage: courseSlideHs12
  },
  {
    id: 'ug-honours',
    title: 'UG Maths Honours (B.Sc)',
    tagline: 'University-Level Pure & Applied Mathematics',
    description: 'University-level mathematics following CBCS pattern. In-depth analysis of Real Analysis, Abstract Algebra, and Linear Algebra.',
    highlight: 'CBCS Pattern',
    pricePlaceholder: '₹5,999',
    category: 'College',
    instructor: 'Raj Sir (M.Sc Gold Medalist)',
    rating: 4.9,
    reviewsCount: 184,
    difficulty: 'Undergraduate',
    duration: 'Full Academic Year',
    badge: 'PREMIUM HONOURS',
    enrolledCount: 640,
    featured: true,
    syllabusTopics: ['Real & Complex Analysis', 'Abstract Algebra & Group Theory', 'Differential Equations & Dynamics', 'Multivariable Calculus'],
    posterImage: courseSlideHonours
  },
  {
    id: 'wb-11-s1',
    title: 'WB Board Class 11 (Semester 1)',
    tagline: 'Solid Foundation for High School Science',
    description: 'Foundation course covering all Semester 1 topics thoroughly with step-by-step problem clearing and regular weekend assessments.',
    highlight: 'Semester-focused approach',
    pricePlaceholder: '₹999',
    category: 'School',
    instructor: 'Raj Sir',
    rating: 4.8,
    reviewsCount: 176,
    difficulty: 'Intermediate',
    duration: 'Semester-Wise',
    badge: 'TRENDING',
    enrolledCount: 780,
    featured: false,
    syllabusTopics: ['Sets, Relations & Functions', 'Trigonometric Functions', 'Principle of Mathematical Induction', 'Complex Numbers'],
    posterImage: courseSlideMadhyamik
  },
  {
    id: 'wb-11-s2',
    title: 'WB Board Class 11 (Semester 2)',
    tagline: 'Advanced Calculus & Coordinate Geometry',
    description: 'Advanced topics and complete Semester 2 preparation. Prepares students for competitive entrance exam foundations.',
    highlight: 'Semester-focused approach',
    pricePlaceholder: '₹999',
    category: 'School',
    instructor: 'Raj Sir',
    rating: 4.9,
    reviewsCount: 162,
    difficulty: 'Intermediate',
    duration: 'Semester-Wise',
    badge: 'POPULAR',
    enrolledCount: 710,
    featured: false,
    syllabusTopics: ['Linear Inequalities', 'Permutations & Combinations', 'Straight Lines & Conic Sections', 'Limits & Derivatives'],
    posterImage: courseSlideWbjee
  },
  {
    id: 'wb-12-s4',
    title: 'WB Board Class 12 (Semester 4)',
    tagline: 'Final Board Sprint & Revision Series',
    description: 'Final semester preparation for HS examination with full-length test series, answer writing techniques, and doubt resolution.',
    highlight: 'HS Part 2 preparation',
    pricePlaceholder: '₹999',
    category: 'School',
    instructor: 'Raj Sir',
    rating: 4.9,
    reviewsCount: 298,
    difficulty: 'Advanced',
    duration: 'Semester-Wise',
    badge: 'BOARD SPECIAL',
    enrolledCount: 950,
    featured: false,
    syllabusTopics: ['Integrals & Definite Integration', 'Differential Equations', 'Vector Algebra & 3D Geometry', 'Probability & Linear Programming'],
    posterImage: courseSlideHs12
  },
  {
    id: 'cbse-5-12',
    title: 'CBSE Class 5 to Class 12',
    tagline: 'NCERT Centric Excellence for All Classes',
    description: 'Dedicated batches for each class following NCERT curriculum with interactive problem solving and Olympiad level challenges.',
    highlight: 'Dedicated batches for each class',
    pricePlaceholder: '₹2,999+',
    category: 'School',
    instructor: 'Senior Math Faculty',
    rating: 4.8,
    reviewsCount: 420,
    difficulty: 'Foundation',
    duration: 'Annual / Flexible',
    badge: 'ALL BATCHES',
    enrolledCount: 1850,
    featured: false,
    syllabusTopics: ['NCERT Concept Clarity', 'Exemplar Problem Solving', 'Board Pattern Worksheets', 'Mental Math & Speed Building'],
    posterImage: courseSlideMocktests
  }
];

export const CONTACT_INFO = {
  phone: '+91 8345819377',
  email: 'coachingmaathh2002@gmail.com',
  address: 'Kolkata, West Bengal'
};