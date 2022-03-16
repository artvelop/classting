import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { playStartTime } from '@recoil/atom/playStartTime';
import { questionStep } from '@recoil/atom/questionStep';
import { userAnswerList } from '@recoil/atom/userAnswerList';
import moment from 'moment';

export const usePlayReset = () => {
  const setPlayStartTime = useSetRecoilState(playStartTime);
  const setUserAnswerList = useSetRecoilState(userAnswerList);
  const setStep = useSetRecoilState(questionStep);

  const resetPlay = useCallback(() => {
    setPlayStartTime(moment());
    setUserAnswerList([]);
    setStep(0);
  }, [setPlayStartTime, setUserAnswerList, setStep]);

  return {
    resetPlay,
  };
};
