import { useEffect } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { v4 as generateUUID } from 'uuid';
import { UserAnswerType } from '@type/userAnswer.type';
import { useResultChart } from './ResultChartItem.hook';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { userAnswerList as userRecoilAnswerList } from '@recoil/atom/userAnswerList';
import { answerColor } from '@constants/answerColor';

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

describe('Chart Data Correct', () => {
  it('차트 데이터가 알맞게 나왔는지 테스트', () => {
    const { result } = renderHook(
      () => {
        const setUserAnswerList = useSetRecoilState(userRecoilAnswerList);

        useEffect(() => {
          setUserAnswerList(userAnswerList);
        }, [setUserAnswerList]);

        return useResultChart();
      },
      {
        wrapper: RecoilRoot,
      },
    );

    expect(result.current.getChartData()).toEqual({
      labels: ['정답', '오답'],
      datasets: [
        {
          label: '풀이 결과',
          data: [CORRECT_ANSWER_COUNT, WRONG_ANSWER_COUNT],
          backgroundColor: [answerColor.correct, answerColor.wrong],
          borderColor: [answerColor.correct, answerColor.wrong],
          borderWidth: 1,
        },
      ],
    });
  });
});
