export type QuestionItemType = {
  id: string;
  difficulty: number;
  question: string;
  answerList: Array<Answer>;
};

export type Answer = {
  id: string;
  content: string;
  correctStatus: boolean;
};
