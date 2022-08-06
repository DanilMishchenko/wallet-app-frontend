const getUserName = state => state.auth.user.name;
const getError = state => state.auth.session.error;
const getIsAuth = state => state.auth.session.isAuth;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getUserName,
  getError,
  getIsAuth,
  getIsFetchingCurrent,
};

export default authSelectors;
