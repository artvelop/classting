import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useResultChart } from './ResultChartItem.hook';

export const ResultChartItem = () => {
  const { getChartData } = useResultChart();

  return <Pie data={getChartData()} />;
};
