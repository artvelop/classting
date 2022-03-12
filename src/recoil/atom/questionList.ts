import { atom } from 'recoil';
import { QuestionItemType } from '@type/question.type';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const questionList = atom<Array<QuestionItemType>>({
  key: 'questionItemList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
