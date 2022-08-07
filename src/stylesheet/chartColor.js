export const chartColor = [
  { color: '#FED057', category: 'Basic expenses', type: false },
  { color: '#FFD8D0', category: 'Products', type: false },
  { color: '#FD9498', category: 'Car', type: false },
  { color: '#C5BAFF', category: 'Self care', type: false },
  { color: '#6E78E8', category: 'Child care', type: false },
  { color: '#4A56E2', category: 'Household products', type: false },
  { color: '#81E1FF', category: 'Education', type: false },
  { color: '#24CCA7', category: 'Leisure', type: false },
  { color: '#00AD84', category: 'Other expenses', type: false },
];

export const getColor = queryCategory =>
  chartColor.find(({ category }) => queryCategory === category).color;
