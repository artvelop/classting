import { useEffect } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useResultChart } from './ResultChartItem.hook';
import { useSetRecoilState } from 'recoil';
import { userAnswerList as userRecoilAnswerList } from '@recoil/atom/userAnswerList';
import { answerColor } from '@constants/answerColor';
import { testRenderHookWrapper } from '@utils/testRenderHookWrapper';
import {
  DUMMY_CORRECT_ANSWER_COUNT,
  DUMMY_WRONG_ANSWER_COUNT,
  userDummyAnswerList,
} from '@dummy/userAnswerList.dummy';

describe('Chart Data Hooks Test', () => {
  it('useResultChart 함수를 통해 데이터가 알맞게 치환되는지 테스트', () => {
    const { result } = renderHook(
      () => {
        const setUserAnswerList = useSetRecoilState(userRecoilAnswerList);

        useEffect(() => {
          setUserAnswerList(userDummyAnswerList);
        }, [setUserAnswerList]);

        return useResultChart();
      },
      {
        wrapper: testRenderHookWrapper,
      },
    );

    expect(result.current.getChartData()).toEqual({
      labels: ['정답', '오답'],
      datasets: [
        {
          label: '풀이 결과',
          data: [DUMMY_CORRECT_ANSWER_COUNT, DUMMY_WRONG_ANSWER_COUNT],
          backgroundColor: [answerColor.correct, answerColor.wrong],
          borderColor: [answerColor.correct, answerColor.wrong],
          borderWidth: 1,
        },
      ],
    });
  });
});
