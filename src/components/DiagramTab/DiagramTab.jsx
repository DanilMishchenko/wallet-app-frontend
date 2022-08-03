import { Chart } from '../Chart/Chart';
import { Table } from '../Table/Table';

export const DiagramTab = () => {
  const data = [
    {
      color: '#FED057',
      category: 'Basic expenses',
      sum: '8700.00',
    },
    {
      color: '#FFD8D0',
      category: 'Products',
      sum: '3800.74',
    },
    {
      color: '#FD9498',
      category: 'Car',
      sum: '1500.00',
    },
    {
      color: '#C5BAFF',
      category: 'Self care',
      sum: '800.0',
    },
    {
      color: '#6E78E8',
      category: 'Child care',
      sum: '2208.50',
    },
    {
      color: '#4A56E2',
      category: 'Household products',
      sum: '300',
    },
    {
      color: '#81E1FF',
      category: 'Education',
      sum: '3400.00',
    },
    {
      color: '#24CCA7',
      category: 'Leisure',
      sum: '1230.00',
    },
    {
      color: '#00AD84',
      category: 'Other expenses',
      sum: '610.00',
    },
  ];

  return (
    <>
      <h1>DiagramTab</h1>
      <Chart />
      <Table tableData={data} />
    </>
  );
};
