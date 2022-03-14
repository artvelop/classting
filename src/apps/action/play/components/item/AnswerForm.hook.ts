import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { answerColor } from '@constants/answerColor';
import { useStep } from '@hooks/useStep';
import { userAnswerList as userRecoilAnswerList } from '@recoil/atom/userAnswerList';
import { Answer, QuestionItemType } from '@type/question.type';

type Params = {
  item: QuestionItemType;
};

export const useAnswerForm = ({ item }: Params) => {
  const [userAnswerList, setUserAnswerList] =
    useRecoilState(userRecoilAnswerList);
  const { nextStep, step, sequence } = useStep();

  const buttonDisable = sequence === userAnswerList.length;
  const correctStatus = useMemo(
    () =>
      userAnswerList.length === sequence
        ? userAnswerList[step].userAnswer.correctStatus
        : false,
    [userAnswerList, step],
  );

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
    },
    [item, correctStatus],
  );

  return {
    buttonDisable,
    nextStep,
    handleClickUserAnswer,
    getCorrectStatusResult,
    getCorrectStatusColor,
  };
};
