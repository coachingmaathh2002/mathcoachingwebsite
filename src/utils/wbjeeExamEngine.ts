import { Question } from '../data/testData';

export type WBJEECategory = 1 | 2 | 3;

export interface CategoryRule {
  category: WBJEECategory;
  title: string;
  marksPerQuestion: number;
  negativeMark: number;
  isMultiCorrect: boolean;
  description: string;
}

export const WBJEE_CATEGORY_RULES: Record<WBJEECategory, CategoryRule> = {
  1: {
    category: 1,
    title: 'Category 1',
    marksPerQuestion: 1.0,
    negativeMark: 0.25,
    isMultiCorrect: false,
    description: 'Only one option correct. +1.00 Mark, -0.25 Penalty for incorrect answer.'
  },
  2: {
    category: 2,
    title: 'Category 2',
    marksPerQuestion: 2.0,
    negativeMark: 0.50,
    isMultiCorrect: false,
    description: 'Only one option correct. +2.00 Marks, -0.50 Penalty for incorrect answer.'
  },
  3: {
    category: 3,
    title: 'Category 3',
    marksPerQuestion: 2.0,
    negativeMark: 0.0,
    isMultiCorrect: true,
    description: 'One or more options correct. +2.00 Marks if all correct, partial marks apply, NO negative marking.'
  }
};

/**
 * Determines question category.
 * If explicitly provided on the question, uses it.
 * Otherwise, divides the test systematically according to WBJEE standards:
 * - First 50% of questions: Category 1 (+1 / -0.25)
 * - Next 30% of questions: Category 2 (+2 / -0.50)
 * - Final 20% of questions: Category 3 (+2 / 0 multi-correct)
 */
export function getQuestionCategory(q: Question, index: number, totalQuestions: number): WBJEECategory {
  if (q.category === 1 || q.category === 2 || q.category === 3) {
    return q.category;
  }

  if (totalQuestions <= 5) {
    return index < 3 ? 1 : 2;
  }

  const cat1Cutoff = Math.floor(totalQuestions * 0.5); // e.g. 10 for 20 questions
  const cat2Cutoff = Math.floor(totalQuestions * 0.8); // e.g. 16 for 20 questions

  if (index < cat1Cutoff) return 1;
  if (index < cat2Cutoff) return 2;
  return 3;
}

export interface QuestionScoreResult {
  questionId: number;
  category: WBJEECategory;
  selectedOptions: number[];
  correctOptions: number[];
  marks: number;
  maxMarks: number;
  status: 'correct' | 'incorrect' | 'partial' | 'unanswered';
  timeSpent: number;
  timeSpentSeconds: number;
}

export interface CategorySummary {
  category: WBJEECategory;
  name: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  partial: number;
  unanswered: number;
  marksSecured: number;
  maxMarks: number;
  accuracy: number;
  timeSpentSeconds: number;
}

export interface TimeAnalyticsSummary {
  fastestQuestion: { index: number; timeSeconds: number };
  slowestQuestion: { index: number; timeSeconds: number };
  timeOnCorrectSeconds: number;
  timeOnIncorrectSeconds: number;
  timeOnUnansweredSeconds: number;
}

export interface ExamEvaluationResult {
  totalQuestions: number;
  totalAttempted: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalPartial: number;
  totalUnanswered: number;
  netScore: number;
  maxTotalScore: number;
  percentage: number;
  percentileEstimate: string;
  accuracyRate: number;
  totalTimeSeconds: number;
  averageTimePerQuestion: number;
  questionResults: QuestionScoreResult[];
  categorySummaries: Record<WBJEECategory, CategorySummary>;
  categoryBreakdown: {
    cat1: CategorySummary;
    cat2: CategorySummary;
    cat3: CategorySummary;
  };
  timeAnalytics: TimeAnalyticsSummary;
  fastestQuestionId?: number;
  fastestTimeSeconds?: number;
  slowestQuestionId?: number;
  slowestTimeSeconds?: number;
  timeSpentOnCorrect: number;
  timeSpentOnIncorrect: number;
  timeSpentOnUnanswered: number;
}

export function evaluateWBJEEExam(
  questions: Question[],
  answers: Record<number, number[]>,
  timeSpentPerQuestion: Record<number, number>,
  totalDurationSeconds: number,
  timeLeftSeconds: number
): ExamEvaluationResult {
  const totalQuestions = questions.length;
  const questionResults: QuestionScoreResult[] = [];

  const categoryBuckets: Record<WBJEECategory, {
    totalQuestions: number;
    attempted: number;
    correct: number;
    incorrect: number;
    partial: number;
    unanswered: number;
    marksSecured: number;
    maxMarks: number;
    timeSpentSeconds: number;
  }> = {
    1: { totalQuestions: 0, attempted: 0, correct: 0, incorrect: 0, partial: 0, unanswered: 0, marksSecured: 0, maxMarks: 0, timeSpentSeconds: 0 },
    2: { totalQuestions: 0, attempted: 0, correct: 0, incorrect: 0, partial: 0, unanswered: 0, marksSecured: 0, maxMarks: 0, timeSpentSeconds: 0 },
    3: { totalQuestions: 0, attempted: 0, correct: 0, incorrect: 0, partial: 0, unanswered: 0, marksSecured: 0, maxMarks: 0, timeSpentSeconds: 0 }
  };

  let fastestTime = Infinity;
  let fastestId: number | undefined;
  let slowestTime = -1;
  let slowestId: number | undefined;

  let timeSpentOnCorrect = 0;
  let timeSpentOnIncorrect = 0;
  let timeSpentOnUnanswered = 0;

  questions.forEach((q, idx) => {
    const cat = getQuestionCategory(q, idx, totalQuestions);
    const selected = answers[q.id] || [];
    const timeSpent = timeSpentPerQuestion[q.id] || 0;

    // Track fastest / slowest
    if (selected.length > 0) {
      if (timeSpent < fastestTime && timeSpent > 0) {
        fastestTime = timeSpent;
        fastestId = q.id;
      }
      if (timeSpent > slowestTime) {
        slowestTime = timeSpent;
        slowestId = q.id;
      }
    }

    // Determine correct options
    const correctOptions: number[] = q.correctAnswers && q.correctAnswers.length > 0
      ? [...q.correctAnswers].sort((a, b) => a - b)
      : [q.correctAnswer];

    categoryBuckets[cat].totalQuestions++;
    categoryBuckets[cat].timeSpentSeconds += timeSpent;

    const rule = WBJEE_CATEGORY_RULES[cat];
    categoryBuckets[cat].maxMarks += rule.marksPerQuestion;

    if (selected.length === 0) {
      // Unanswered
      categoryBuckets[cat].unanswered++;
      timeSpentOnUnanswered += timeSpent;
      questionResults.push({
        questionId: q.id,
        category: cat,
        selectedOptions: [],
        correctOptions,
        marks: 0,
        maxMarks: rule.marksPerQuestion,
        status: 'unanswered',
        timeSpent,
        timeSpentSeconds: timeSpent
      });
      return;
    }

    // Attempted
    categoryBuckets[cat].attempted++;

    if (cat === 1 || cat === 2) {
      const isCorrect = selected.length === 1 && selected[0] === q.correctAnswer;
      if (isCorrect) {
        const marks = rule.marksPerQuestion;
        categoryBuckets[cat].correct++;
        categoryBuckets[cat].marksSecured += marks;
        timeSpentOnCorrect += timeSpent;
        questionResults.push({
          questionId: q.id,
          category: cat,
          selectedOptions: selected,
          correctOptions,
          marks,
          maxMarks: rule.marksPerQuestion,
          status: 'correct',
          timeSpent,
          timeSpentSeconds: timeSpent
        });
      } else {
        const penalty = -rule.negativeMark;
        categoryBuckets[cat].incorrect++;
        categoryBuckets[cat].marksSecured += penalty;
        timeSpentOnIncorrect += timeSpent;
        questionResults.push({
          questionId: q.id,
          category: cat,
          selectedOptions: selected,
          correctOptions,
          marks: penalty,
          maxMarks: rule.marksPerQuestion,
          status: 'incorrect',
          timeSpent,
          timeSpentSeconds: timeSpent
        });
      }
    } else {
      // Category 3: Multi-Correct
      // WBJEE Rule:
      // 1. All correct marked and no wrong: +2 marks
      // 2. Any wrong marked: 0 marks (no negative)
      // 3. Some correct marked and no wrong: 2 * (no. of correct marked) / (total correct options)
      const correctSet = new Set(correctOptions);
      const hasAnyWrong = selected.some(opt => !correctSet.has(opt));

      if (hasAnyWrong) {
        categoryBuckets[cat].incorrect++;
        timeSpentOnIncorrect += timeSpent;
        questionResults.push({
          questionId: q.id,
          category: cat,
          selectedOptions: selected,
          correctOptions,
          marks: 0,
          maxMarks: 2.0,
          status: 'incorrect',
          timeSpent,
          timeSpentSeconds: timeSpent
        });
      } else {
        // No wrong option marked
        const markedCorrectCount = selected.filter(opt => correctSet.has(opt)).length;
        if (markedCorrectCount === correctOptions.length) {
          // Fully correct
          categoryBuckets[cat].correct++;
          categoryBuckets[cat].marksSecured += 2.0;
          timeSpentOnCorrect += timeSpent;
          questionResults.push({
            questionId: q.id,
            category: cat,
            selectedOptions: selected,
            correctOptions,
            marks: 2.0,
            maxMarks: 2.0,
            status: 'correct',
            timeSpent,
            timeSpentSeconds: timeSpent
          });
        } else if (markedCorrectCount > 0) {
          // Partially correct
          const partialMarks = Number(((2.0 * markedCorrectCount) / correctOptions.length).toFixed(2));
          categoryBuckets[cat].partial++;
          categoryBuckets[cat].marksSecured += partialMarks;
          timeSpentOnCorrect += timeSpent;
          questionResults.push({
            questionId: q.id,
            category: cat,
            selectedOptions: selected,
            correctOptions,
            marks: partialMarks,
            maxMarks: 2.0,
            status: 'partial',
            timeSpent,
            timeSpentSeconds: timeSpent
          });
        } else {
          categoryBuckets[cat].unanswered++;
          timeSpentOnUnanswered += timeSpent;
          questionResults.push({
            questionId: q.id,
            category: cat,
            selectedOptions: [],
            correctOptions,
            marks: 0,
            maxMarks: 2.0,
            status: 'unanswered',
            timeSpent,
            timeSpentSeconds: timeSpent
          });
        }
      }
    }
  });

  const categorySummaries: Record<WBJEECategory, CategorySummary> = {
    1: {
      category: 1,
      name: 'Category 1 (+1.00 / -0.25)',
      ...categoryBuckets[1],
      marksSecured: Number(categoryBuckets[1].marksSecured.toFixed(2)),
      accuracy: categoryBuckets[1].attempted > 0
        ? Math.round((categoryBuckets[1].correct / categoryBuckets[1].attempted) * 100)
        : 0
    },
    2: {
      category: 2,
      name: 'Category 2 (+2.00 / -0.50)',
      ...categoryBuckets[2],
      marksSecured: Number(categoryBuckets[2].marksSecured.toFixed(2)),
      accuracy: categoryBuckets[2].attempted > 0
        ? Math.round((categoryBuckets[2].correct / categoryBuckets[2].attempted) * 100)
        : 0
    },
    3: {
      category: 3,
      name: 'Category 3 (+2.00 / 0.00 Multi-Correct)',
      ...categoryBuckets[3],
      marksSecured: Number(categoryBuckets[3].marksSecured.toFixed(2)),
      accuracy: categoryBuckets[3].attempted > 0
        ? Math.round(((categoryBuckets[3].correct + categoryBuckets[3].partial * 0.5) / categoryBuckets[3].attempted) * 100)
        : 0
    }
  };

  const totalAttempted = categoryBuckets[1].attempted + categoryBuckets[2].attempted + categoryBuckets[3].attempted;
  const totalCorrect = categoryBuckets[1].correct + categoryBuckets[2].correct + categoryBuckets[3].correct;
  const totalIncorrect = categoryBuckets[1].incorrect + categoryBuckets[2].incorrect + categoryBuckets[3].incorrect;
  const totalPartial = categoryBuckets[3].partial;
  const totalUnanswered = categoryBuckets[1].unanswered + categoryBuckets[2].unanswered + categoryBuckets[3].unanswered;

  const rawNetScore = categoryBuckets[1].marksSecured + categoryBuckets[2].marksSecured + categoryBuckets[3].marksSecured;
  const maxTotalScore = categoryBuckets[1].maxMarks + categoryBuckets[2].maxMarks + categoryBuckets[3].maxMarks;

  const netScore = Number(Math.max(0, rawNetScore).toFixed(2));
  const percentage = maxTotalScore > 0 ? Number(((netScore / maxTotalScore) * 100).toFixed(1)) : 0;
  const accuracyRate = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  const totalTimeSeconds = Math.max(1, totalDurationSeconds - timeLeftSeconds);
  const averageTimePerQuestion = Math.round(totalTimeSeconds / Math.max(1, totalQuestions));

  const percentileEstimate = maxTotalScore > 0 
    ? Math.min(99.9, Math.max(50.0, 50 + (percentage * 0.495))).toFixed(1) + 'th'
    : '50.0th';

  let fastestIndex = 1;
  let slowestIndex = 1;
  if (fastestId !== undefined) {
    const idx = questions.findIndex(q => q.id === fastestId);
    if (idx !== -1) fastestIndex = idx + 1;
  }
  if (slowestId !== undefined) {
    const idx = questions.findIndex(q => q.id === slowestId);
    if (idx !== -1) slowestIndex = idx + 1;
  }

  const timeAnalytics: TimeAnalyticsSummary = {
    fastestQuestion: {
      index: fastestIndex,
      timeSeconds: fastestTime === Infinity ? 0 : fastestTime
    },
    slowestQuestion: {
      index: slowestIndex,
      timeSeconds: slowestTime === -1 ? 0 : slowestTime
    },
    timeOnCorrectSeconds: timeSpentOnCorrect,
    timeOnIncorrectSeconds: timeSpentOnIncorrect,
    timeOnUnansweredSeconds: timeSpentOnUnanswered
  };

  const categoryBreakdown = {
    cat1: categorySummaries[1],
    cat2: categorySummaries[2],
    cat3: categorySummaries[3]
  };

  return {
    totalQuestions,
    totalAttempted,
    totalCorrect,
    totalIncorrect,
    totalPartial,
    totalUnanswered,
    netScore,
    maxTotalScore,
    percentage,
    percentileEstimate,
    accuracyRate,
    totalTimeSeconds,
    averageTimePerQuestion,
    questionResults,
    categorySummaries,
    categoryBreakdown,
    timeAnalytics,
    fastestQuestionId: fastestId,
    fastestTimeSeconds: fastestTime === Infinity ? undefined : fastestTime,
    slowestQuestionId: slowestId,
    slowestTimeSeconds: slowestTime === -1 ? undefined : slowestTime,
    timeSpentOnCorrect,
    timeSpentOnIncorrect,
    timeSpentOnUnanswered
  };
}
