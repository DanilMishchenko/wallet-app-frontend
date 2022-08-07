import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Container, Text } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ chartData }) => {
  const expenseCategory = chartData
    .filter(item => {
      return item.type === false;
    })
    .reduce((total, item) => {
      return total + item.sum;
    }, 0);

  const dataChart = chartData.map(({ sum }) => {
    return { sum };
  });

  const data = {
    datasets: [
      {
        data: dataChart,
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 0,
        cutout: '70%',
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        intersect: true,
      },
    },
  };

  return (
    <Container>
      <Doughnut data={data} options={options} />
      <Text>
        {'\u20B4'} {expenseCategory}
      </Text>
    </Container>
  );
};
