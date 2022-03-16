import { selector } from 'recoil';
import { questionList } from '@recoil/atom/questionList';
import { questionStep } from '@recoil/atom/questionStep';

export const currentQuestionItem = selector({
  key: 'currentQuestionItem',
  get: ({ get }) => {
    const questionItemList = get(questionList);
    const step = get(questionStep);

    return questionItemList[step];
  },
});
