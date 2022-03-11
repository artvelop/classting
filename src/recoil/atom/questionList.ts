import { atom } from 'recoil';
import { QuestionItemType } from '@type/question.type';

export const questionList = atom<Array<QuestionItemType>>({
  key: 'questionItemList',
  default: [],
});
