import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const questionStep = atom<number>({
  key: 'questionStep',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
