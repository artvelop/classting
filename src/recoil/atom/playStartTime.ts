import { atom } from 'recoil';
import { Moment } from 'moment';

export const playStartTime = atom<Moment | null>({
  key: 'playStartTime',
  default: null,
});
