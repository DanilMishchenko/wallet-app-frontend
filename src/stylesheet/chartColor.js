export const chartColor = [
  { color: '#FED057', category: 'Basic expenses' },
  { color: '#24cca7', category: 'Regular Income' },
  { color: '#24cca7', category: 'Irregular income' },
  { color: '#FFD8D0', category: 'Products' },
  { color: '#FD9498', category: 'Car' },
  { color: '#C5BAFF', category: 'Self care' },
  { color: '#6E78E8', category: 'Child care' },
  { color: '#4A56E2', category: 'Household products' },
  { color: '#81E1FF', category: 'Education' },
  { color: '#24CCA7', category: 'Leisure' },
  { color: '#00AD84', category: 'Other expenses' },
];

const defaultColor = '#24cca7';

export const getColor = queryCategory =>
  chartColor.find(({ category }) => queryCategory === category)?.color ||
  defaultColor;
