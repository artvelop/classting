import { playStartTime } from '@recoil/atom/playStartTime';
import { useRecoilValue } from 'recoil';
import moment from 'moment';

export const useDurationTime = () => {
  const startTime = useRecoilValue(playStartTime);

  const getDurationTime = () =>
    moment(moment().diff(startTime)).format('m분 ss초');

  return { getDurationTime };
};
