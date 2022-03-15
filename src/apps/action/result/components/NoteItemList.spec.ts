import { useEffect } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { v4 as generateUUID } from 'uuid';
import { UserAnswerType } from '@type/userAnswer.type';
import { useSetRecoilState } from 'recoil';
import { userAnswerList as userRecoilAnswerList } from '@recoil/atom/userAnswerList';
import { useNoteItemList } from './NoteItemList.hook';
import { testRenderHookWrapper } from '@utils/testRenderHookWrapper';
import { act } from 'react-dom/test-utils';

const CORRECT_ANSWER_COUNT = 7;
const WRONG_ANSWER_COUNT = 3;

const userCorrectAnswer = {
  id: generateUUID(),
  content: '정답1',
  correctStatus: true,
};

const userWrongAnswer = {
  id: generateUUID(),
  content: '정답1',
  correctStatus: false,
};

const userCorrectAnswerList: Array<UserAnswerType> = Array.from({
  length: CORRECT_ANSWER_COUNT,
}).map(() => ({
  questionId: generateUUID(),
  question: '문제1 질문',
  userAnswer: userCorrectAnswer,
  correctAnswer: userCorrectAnswer,
}));

const userWrongAnswerList: Array<UserAnswerType> = Array.from({
  length: WRONG_ANSWER_COUNT,
}).map(() => ({
  questionId: generateUUID(),
  question: '문제1 질문',
  userAnswer: userWrongAnswer,
  correctAnswer: userCorrectAnswer,
}));

const userAnswerList: Array<UserAnswerType> = [
  ...userCorrectAnswerList,
  ...userWrongAnswerList,
];

describe('NoteItemList Hook Test', () => {
  it('틀린 정답갯수와 오답노트 리스트 갯수가 같은지 체크', () => {
    const { result } = renderHook(
      () => {
        const setUserAnswerList = useSetRecoilState(userRecoilAnswerList);

        useEffect(() => {
          setUserAnswerList(userAnswerList);
        }, [setUserAnswerList]);

        return useNoteItemList();
      },
      {
        wrapper: testRenderHookWrapper,
      },
    );

    act(() => result.current.noteAnswerInit());

    expect(result.current.noteList.length).toEqual(WRONG_ANSWER_COUNT);
  });
});
