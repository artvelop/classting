import { playStartTime } from '@recoil/atom/playStartTime';
import moment from 'moment';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

export const usePlayScreen = () => {
  const setPlayStartTime = useSetRecoilState(playStartTime);

  useEffect(() => {
    setPlayStartTime(moment());
  }, []);
};
