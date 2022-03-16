import { useRecoilValue } from 'recoil';
import { useStep } from '@hooks/useStep';
import { currentQuestionItem } from '@recoil/selector/currentQuestionItem';

export const useQuestionItem = () => {
  const item = useRecoilValue(currentQuestionItem);
  const { sequence } = useStep();

  return {
    item,
    sequence,
  };
};
