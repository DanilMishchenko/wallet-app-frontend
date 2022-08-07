export const currentYear = new Date().getFullYear();
const previousYear = currentYear - 1;
const prevPreviousYear = currentYear - 2;

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const years = [currentYear, previousYear, prevPreviousYear];
