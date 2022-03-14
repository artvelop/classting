export type QuestionListResponse = {
  response_code: number;
  results: Array<QuestionResultResponse>;
};

export type QuestionResultResponse = {
  category: string;
  correct_answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  incorrect_answers: Array<string>;
};
