const getUserName = state => state.auth.user.name;
const getBalance = state => state.auth.user.balance;
const getError = state => state.auth.session.error;
const getIsAuth = state => state.auth.session.isAuth;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getUserName,
  getBalance,
  getError,
  getIsAuth,
  getIsFetchingCurrent,
};

export default authSelectors;
