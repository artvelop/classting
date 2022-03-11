import { useRecoilValue } from 'recoil';
import { questionList } from '@recoil/atom/questionList';
import { useKeenSlider } from 'keen-slider/react';

export const useQuestionItemSlider = () => {
  const questionItemList = useRecoilValue(questionList);
  const [slideRef, instanceRef] = useKeenSlider({ drag: false });

  const handleNextStep = () => instanceRef.current?.next();

  return {
    questionItemList,
    handleNextStep,
    slideRef,
  };
};
