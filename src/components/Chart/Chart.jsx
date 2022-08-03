import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Container } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = () => {
  const data = {
    datasets: [
      {
        data: [8700, 3800.74, 1500, 800, 2208.5, 300, 3400, 1230, 610],
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
      {/* <h2>₴ 24 000.00 </h2> Заглушка */}
    </Container>
  );
};
