import { useEffect } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useSetRecoilState } from 'recoil';
import { userAnswerList as userRecoilAnswerList } from '@recoil/atom/userAnswerList';
import { useNoteItemList } from './NoteItemList.hook';
import { testRenderHookWrapper } from '@utils/testRenderHookWrapper';
import { act } from 'react-dom/test-utils';
import {
  DUMMY_WRONG_ANSWER_COUNT,
  userDummyAnswerList,
} from '@dummy/userAnswerList.dummy';

describe('NoteItemList Hook Test', () => {
  it('틀린 정답갯수와 오답노트 리스트 갯수가 같은지 체크', () => {
    const { result } = renderHook(
      () => {
        const setUserAnswerList = useSetRecoilState(userRecoilAnswerList);

        useEffect(() => {
          setUserAnswerList(userDummyAnswerList);
        }, [setUserAnswerList]);

        return useNoteItemList();
      },
      {
        wrapper: testRenderHookWrapper,
      },
    );

    act(() => result.current.noteAnswerInit());

    expect(result.current.noteList.length).toEqual(DUMMY_WRONG_ANSWER_COUNT);
  });
});
