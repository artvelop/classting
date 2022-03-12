import { useRecoilValue } from 'recoil';
import { questionList } from '@recoil/atom/questionList';
import { useKeenSlider } from 'keen-slider/react';
import { userAnswerList } from '@recoil/atom/userAnswerList';
import { useNavigate } from 'react-router-dom';

export const useQuestionItemSlider = () => {
  const questionItemList = useRecoilValue(questionList);
  const userAnswerItemList = useRecoilValue(userAnswerList);
  const [slideRef, instanceRef] = useKeenSlider({ drag: false });
  const navigate = useNavigate();

  const handleNextStep = () => {
    userAnswerItemList.length === questionItemList.length
      ? navigate('/action/result')
      : instanceRef.current?.next();
  };

  return {
    questionItemList,
    handleNextStep,
    slideRef,
  };
};
