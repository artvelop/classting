import { atom } from 'recoil';
import { Moment } from 'moment';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const playStartTime = atom<Moment | null>({
  key: 'playStartTime',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
