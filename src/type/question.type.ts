export type QuestionItemType = {
  id: string;
  difficulty: number;
  question: string;
  answerList: Array<Answer>;
};

export type QuestionCommentary = {
  questionId: string;
  question: string;
  answer: string;
};

export type Answer = {
  id: string;
  content: string;
  correctStatus: boolean;
};
