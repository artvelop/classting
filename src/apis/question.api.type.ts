export type QuestionListResponse = {
  response_code: number;
  results: Array<{
    category: string;
    correct_answer: string;
    difficulty: 'easy' | 'medium' | 'hard';
    question: string;
    incorrect_answers: Array<string>;
  }>;
};
