export const getTransactions = state => state.transactions.items;
export const getCategories = state =>
  state.transactions.category.filter(item => item.category);
export const getIsLoading = state => state.transactions.isLoading;
export const getSumExpenses = state =>
  state.transactions.summaryExpenses?.toString();
export const getSumIncome = state =>
  state.transactions.summaryIncome?.toString();
