const getTotalBalance = state => state.finance.totalBalance;

const getAllTransactions = state => state.finance.transactions;

const getStatistics = state => state.finance.statistics;

const getCategories = state => state.finance.categories;

const getError = state => state.finance.error;

export {
  getTotalBalance,
  getAllTransactions,
  getStatistics,
  getCategories,
  getError,
};
