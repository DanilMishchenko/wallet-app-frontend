import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';

import { MainBackground } from './stylesheet/MainBackground';

import HomePages from './pages/HomePages';
import DashBoardPage from './pages/DashBoardPage';
import RegisterPages from './pages/RegisterPages';
import LoginPages from './pages/LoginPages';
import StatisticsPages from './pages/StatisticsPages';
import NotFoundPages from './pages/NotFoundPages';

export const App = () => {
  return (
    <>
      <MainBackground blurAll/>
      {/* Будет рендериться по условию если пользователь залогинен */}
      <Header />

      <Routes>
        <Route path="/" element={<DashBoardPage />}>
          <Route index path="home" element={<HomePages />} />
          <Route path="diagram" element={<StatisticsPages />} />
        </Route>
        <Route path="login" element={<LoginPages />} />
        <Route path="register" element={<RegisterPages />} />
        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </>
  );
};
