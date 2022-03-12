import { userAnswerList } from '@recoil/atom/userAnswerList';
import { Answer, QuestionItemType } from '@type/question.type';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type Params = {
  item: QuestionItemType;
};

export const useAnswerForm = ({ item }: Params) => {
  const [buttonDisable, setButtonDisable] = useState(false);
  const [correctStatus, setCorrectStatus] = useState(false);
  const setUserAnswerList = useSetRecoilState(userAnswerList);

  const handleClickUserAnswer = (questionId: string, answerItem: Answer) => {
    const [correctAnswer] = item.answerList.filter(
      ({ correctStatus }) => correctStatus,
    );

    setUserAnswerList((cur) => [
      ...cur,
      {
        questionId,
        question: item.question,
        userAnswer: answerItem,
        correctAnswer,
      },
    ]);

    setCorrectStatus(answerItem.correctStatus);

    setButtonDisable((cur) => !cur);
  };

  return {
    buttonDisable,
    handleClickUserAnswer,
    correctStatus,
  };
};
