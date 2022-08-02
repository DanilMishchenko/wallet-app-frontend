import { Route, Routes } from 'react-router-dom';

import { BackgroundBlur } from './stylesheet/BackgroundBlur';
import { Container } from './stylesheet/Container.styled';

import HomePages from './pages/HomePages';
import DashBoardPage from './pages/DashBoardPage';
import RegisterPages from './pages/RegisterPages';
import LoginPages from './pages/LoginPages';
import LogoutPages from './pages/LogoutPages';
import StatisticsPages from './pages/StatisticsPages';
import NotFoundPages from './pages/NotFoundPages';

export const App = () => {
  return (
    <>
      {/* Будет рендер если пользователь залогинен */}
      <BackgroundBlur />
      <Container>
        <Routes>
          <Route path="/" element={<DashBoardPage />}>
            <Route index path="home" element={<HomePages />} />
            <Route path="diagram" element={<StatisticsPages />} />
          </Route>
          <Route path="login" element={<LoginPages />} />
          <Route path="register" element={<RegisterPages />} />
          <Route path="logout" element={<LogoutPages />} />
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </Container>
    </>
  );
};
