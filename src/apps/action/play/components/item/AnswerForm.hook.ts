import { answerColor } from '@constants/answerColor';
import { userAnswerList } from '@recoil/atom/userAnswerList';
import { Answer, QuestionItemType } from '@type/question.type';
import { useCallback, useMemo, useState } from 'react';
import { useSetRecoilState } from 'recoil';

type Params = {
  item: QuestionItemType;
};

export const useAnswerForm = ({ item }: Params) => {
  const [buttonDisable, setButtonDisable] = useState(false);
  const [correctStatus, setCorrectStatus] = useState(false);
  const setUserAnswerList = useSetRecoilState(userAnswerList);

  const getCorrectStatusResult = useMemo(
    () => (correctStatus ? '정답 😀' : '오답 😢'),
    [correctStatus],
  );

  const getCorrectStatusColor = useMemo(
    () => (correctStatus ? answerColor.correct : answerColor.wrong),
    [correctStatus],
  );

  const handleClickUserAnswer = useCallback(
    (questionId: string, answerItem: Answer) => {
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
    },
    [item, correctStatus, buttonDisable],
  );

  return {
    buttonDisable,
    handleClickUserAnswer,
    getCorrectStatusResult,
    getCorrectStatusColor,
  };
};
