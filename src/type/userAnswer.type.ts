import { Answer } from './question.type';

export type UserAnswerType = {
  questionId: string;
  question: string;
  userAnswer: Answer;
  correctAnswer: Answer;
};
