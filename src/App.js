import { Route, Routes } from 'react-router-dom';
import { /*useEffect,*/ lazy, Suspense } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { authOperations, authSelectors } from './redux/auth';

import { Layout } from './components/Layout/Layout';
import { Loader } from './components/Loader/Loader';
// import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
// import { PublicRoute } from './components/PublicRoute/PublicRoute';

const HomePages = lazy(() =>
  import('./pages/HomePages' /* webpackChunkName: "home-page" */),
);
const DashBoardPage = lazy(() =>
  import('./pages/DashBoardPage' /* webpackChunkName: "dash-board-page" */),
);
const RegisterPages = lazy(() =>
  import('./pages/RegisterPages' /* webpackChunkName: "register-page" */),
);
const LoginPages = lazy(() =>
  import('./pages/LoginPages' /* webpackChunkName: "login-page" */),
);
const StatisticsPages = lazy(() =>
  import('./pages/StatisticsPages' /* webpackChunkName: "statistics-page" */),
);
const NotFoundPages = lazy(() =>
  import('./pages/NotFoundPages' /* webpackChunkName: "not-found-page" */),
);

export const App = () => {
  // const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <>
      {/* {isFetchingCurrentUser ? (
        <Loader />
      ) : ( */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                // <PrivateRoute>
                <DashBoardPage />
                // </PrivateRoute>
              }
            >
              <Route index element={<HomePages />} />
              <Route path="home" element={<HomePages />} />
              <Route path="diagram" element={<StatisticsPages />} />
            </Route>
            <Route
              path="login"
              element={
                // <PublicRoute>
                <LoginPages />
                // </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                // <PublicRoute>
                <RegisterPages />
                // </PublicRoute>
              }
            />
            <Route path="*" element={<NotFoundPages />} />
          </Route>
        </Routes>
      </Suspense>
      {/* )} */}
    </>
  );
};
