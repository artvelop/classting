import { Answer } from './question.type';

export type UserAnswerType = {
  id: string;
  question: string;
  userAnswer: Answer;
  correctAnswer: Answer;
};
