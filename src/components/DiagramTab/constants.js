export const currentYear = new Date().getFullYear();
export const currentMonth = new Date().getMonth() + 1;
const previousYear = currentYear - 1;
const prevPreviousYear = currentYear - 2;

export const months = [
  { title: 'January', value: '1' },
  { title: 'February', value: '2' },
  { title: 'March', value: '3' },
  { title: 'April', value: '4' },
  { title: 'May', value: '5' },
  { title: 'June', value: '6' },
  { title: 'July', value: '7' },
  { title: 'August', value: '8' },
  { title: 'September', value: '9' },
  { title: 'October', value: '10' },
  { title: 'November', value: '11' },
  { title: 'December', value: '12' },
];

export const years = [currentYear, previousYear, prevPreviousYear];
