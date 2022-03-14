import { questionList } from '@recoil/atom/questionList';
import { questionStep } from '@recoil/atom/questionStep';
import { userAnswerList } from '@recoil/atom/userAnswerList';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

export const useStep = () => {
  const [step, setStep] = useRecoilState(questionStep);
  const questionItemList = useRecoilValue(questionList);
  const userAnswerItemList = useRecoilValue(userAnswerList);
  const navigate = useNavigate();

  const nextStep = useCallback(() => {
    if (questionItemList.length === userAnswerItemList.length) {
      navigate('/action/result');
      setStep(0);
    } else {
      setStep((cur) => cur + 1);
    }
  }, [questionItemList, userAnswerItemList, setStep]);

  const prevStep = useCallback(
    () => step > 0 && setStep((cur) => cur - 1),
    [step, setStep],
  );

  const sequence = useMemo(() => step + 1, [step]);

  return {
    nextStep,
    prevStep,
    sequence,
    step,
  };
};
