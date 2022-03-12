import { playStartTime } from '@recoil/atom/playStartTime';
import { userAnswerList } from '@recoil/atom/userAnswerList';
import moment from 'moment';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

export const usePlayScreen = () => {
  const setPlayStartTime = useSetRecoilState(playStartTime);
  const setUserAnswerList = useSetRecoilState(userAnswerList);

  useEffect(() => {
    setPlayStartTime(moment());
    setUserAnswerList([]);
  }, []);
};
