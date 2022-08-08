export const chartColor = [
  { color: '#FED057', category: 'Basic expenses', type: false },
  { color: '#4A56E2', category: 'Regular Income', type: true },
  { color: '#4A56E2', category: 'Irregular Income', type: true },
  { color: '#FFD8D0', category: 'Products', type: false },
  { color: '#FD9498', category: 'Car', type: false },
  { color: '#C5BAFF', category: 'Self care', type: false },
  { color: '#6E78E8', category: 'Child care', type: false },
  { color: '#24cca7', category: 'Household products', type: false },
  { color: '#81E1FF', category: 'Education', type: false },
  { color: '#24CCA7', category: 'Leisure', type: false },
  { color: '#00AD84', category: 'Other expenses', type: false },
];

export const defaultColor = '#24cca7';

export const getColor = queryCategory =>
  chartColor.find(({ category }) => queryCategory === category)?.color ||
  defaultColor;

export const expenses = chartColor
  .filter(({ type }) => type !== true)
  .map(({ category }) => category);
