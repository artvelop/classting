import { UserAnswerType } from '@type/userAnswer.type';
import { v4 as generateUUID } from 'uuid';

export const DUMMY_CORRECT_ANSWER_COUNT = 7;
export const DUMMY_WRONG_ANSWER_COUNT = 3;

const userCorrectAnswer = {
  id: generateUUID(),
  content: '정답1',
  correctStatus: true,
};

const userWrongAnswer = {
  id: generateUUID(),
  content: '정답1',
  correctStatus: false,
};

const userCorrectAnswerList: Array<UserAnswerType> = Array.from({
  length: DUMMY_CORRECT_ANSWER_COUNT,
}).map(() => ({
  questionId: generateUUID(),
  question: '문제1 질문',
  userAnswer: userCorrectAnswer,
  correctAnswer: userCorrectAnswer,
}));

const userWrongAnswerList: Array<UserAnswerType> = Array.from({
  length: DUMMY_WRONG_ANSWER_COUNT,
}).map(() => ({
  questionId: generateUUID(),
  question: '문제1 질문',
  userAnswer: userWrongAnswer,
  correctAnswer: userCorrectAnswer,
}));

export const userDummyAnswerList: Array<UserAnswerType> = [
  ...userCorrectAnswerList,
  ...userWrongAnswerList,
];
