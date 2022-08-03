import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Layout } from './components/Layout/Layout';

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
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<DashBoardPage />}>
              <Route index element={<HomePages />} />
              <Route path="home" element={<HomePages />} />
              <Route path="diagram" element={<StatisticsPages />} />
            </Route>
            <Route path="login" element={<LoginPages />} />
            <Route path="register" element={<RegisterPages />} />
            <Route path="*" element={<NotFoundPages />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
