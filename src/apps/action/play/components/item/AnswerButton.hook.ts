import { Answer } from '@type/question.type';

type Params = {
  questionId: string;
  answerItem: Answer;
  handleClickUserAnswer: (questionId: string, answerItem: Answer) => void;
};

export const useAnswerButton = ({
  questionId,
  answerItem,
  handleClickUserAnswer,
}: Params) => {
  const onClickUserAnswer = () => handleClickUserAnswer(questionId, answerItem);

  return {
    onClickUserAnswer,
  };
};
