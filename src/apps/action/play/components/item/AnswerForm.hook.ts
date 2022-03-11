import { userAnswerList } from '@recoil/atom/userAnswerList';
import { Answer } from '@type/question.type';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

export const useAnswerForm = () => {
  const [buttonDisable, setButtonDisable] = useState(false);
  const [correctStatus, setCorrectStatus] = useState(false);
  const setUserAnswerList = useSetRecoilState(userAnswerList);

  const handleClickUserAnswer = (questionId: string, answerItem: Answer) => {
    setUserAnswerList((cur) => [
      ...cur,
      {
        questionId,
        userAnswer: answerItem,
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
