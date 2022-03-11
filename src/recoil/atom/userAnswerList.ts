import { atom } from 'recoil';
import { UserAnswerType } from '@type/userAnswer.type';

export const userAnswerList = atom<Array<UserAnswerType>>({
  key: 'userAnswerList',
  default: [],
});
