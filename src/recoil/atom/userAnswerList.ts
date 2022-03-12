import { atom } from 'recoil';
import { UserAnswerType } from '@type/userAnswer.type';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userAnswerList = atom<Array<UserAnswerType>>({
  key: 'userAnswerList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
