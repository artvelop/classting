import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useResultChart } from './ResultChartItem.hook';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. 정답 카운트와 오답 카운트가 정확하게 표기되는지 확인
// 3. 차트 클릭시 정확한 수치가 올바르게 나타나는지 확인
// 4. 새로고침 이후에도 데이터가 유지되는지 확인

export const ResultChartItem = () => {
  const { getChartData } = useResultChart();

  return <Pie data={getChartData()} />;
};
