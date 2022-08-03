import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) => {
  const isAuth = useSelector(state => state.auth.session.isAuth);
  const shouldRedirect = isAuth && restricted;

  return shouldRedirect ? <Navigate to="/home" /> : children;
};
