import { userAnswerList as userRecoilAnswerList } from '@recoil/atom/userAnswerList';
import { useRecoilValue } from 'recoil';
import { ChartData } from 'chart.js';
import { answerColor } from '@constants/answerColor';

export const useResultChart = () => {
  const userAnswerList = useRecoilValue(userRecoilAnswerList);

  const getChartData = (): ChartData<'pie', number[], unknown> => {
    const correctCount = userAnswerList.filter(
      ({ userAnswer }) => userAnswer.correctStatus,
    ).length;
    const wrongCount = userAnswerList.length - correctCount;

    return {
      labels: ['정답', '오답'],
      datasets: [
        {
          label: '풀이 결과',
          data: [correctCount, wrongCount],
          backgroundColor: [answerColor.correct, answerColor.wrong],
          borderColor: [answerColor.correct, answerColor.wrong],
          borderWidth: 1,
        },
      ],
    };
  };

  return {
    getChartData,
  };
};
