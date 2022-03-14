import { useRecoilValue } from 'recoil';
import { questionList } from '@recoil/atom/questionList';
import { useStep } from '@hooks/useStep';

export const useQuestionItemContainer = () => {
  const questionItemList = useRecoilValue(questionList);
  const { step } = useStep();

  const currentQuestionItem = questionItemList[step];

  return {
    currentQuestionItem,
  };
};
