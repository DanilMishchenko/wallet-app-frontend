export const currentYear = new Date().getFullYear();
export const currentMonth = new Date().getMonth() + 1;
const previousYear = currentYear - 1;
const prevPreviousYear = currentYear - 2;

export const months = [
  { label: 'January', value: '1' },
  { label: 'February', value: '2' },
  { label: 'March', value: '3' },
  { label: 'April', value: '4' },
  { label: 'May', value: '5' },
  { label: 'June', value: '6' },
  { label: 'July', value: '7' },
  { label: 'August', value: '8' },
  { label: 'September', value: '9' },
  { label: 'October', value: '10' },
  { label: 'November', value: '11' },
  { label: 'December', value: '12' },
];

export const years = [
  { label: currentYear, value: currentYear },
  { label: previousYear, value: previousYear },
  { label: prevPreviousYear, value: prevPreviousYear },
];

export const defaultCategories = [
  { category: 'Irregular Income', totalSum: 1000 },
];

export const getMonthConfig = () =>
  months.find(m => Number(m.value) === currentMonth);
export const getYearConfig = () => years.find(m => m.value === currentYear);
