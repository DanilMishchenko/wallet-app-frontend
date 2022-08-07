import React from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { Container, Text } from './Chart.styled';
import { getColor } from '../../stylesheet/chartColor';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ categories }) => {
  const values = categories.map(category => category.totalSum);
  const colorMap = categories.map(({ category }) => getColor(category));

  const data = {
    datasets: [
      {
        data: values,
        backgroundColor: colorMap,
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
        {'\u20B4'} {0}
      </Text>
    </Container>
  );
};

Chart.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      totalSum: PropTypes.number,
    }),
  ).isRequired,
};
