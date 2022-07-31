import { Route, Routes } from 'react-router-dom';

import HomePages from './pages/HomePages';
import RegisterPages from './pages/RegisterPages';
import LoginPages from './pages/LoginPages';
import LogoutPages from './pages/LogoutPages';
import StatisticsPages from './pages/StatisticsPages';
import NotFoundPages from './pages/NotFoundPages';
import Dashboard from './components/layout/dashboard/Dashboard';

export const App = () => {
  return (
      <Dashboard>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="register" element={<RegisterPages />} />
          <Route path="login" element={<LoginPages />} />
          <Route path="logout" element={<LogoutPages />} />
          <Route path="statistics" element={<StatisticsPages />} />
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </Dashboard>
   
  );
};
