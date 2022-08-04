import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.session.isAuth);

  if (isAuth) {
    return <Navigate to="/home" />;
  }

  return <>{children}</>;
};
