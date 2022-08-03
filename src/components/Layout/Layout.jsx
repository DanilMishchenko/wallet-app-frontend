import { Outlet } from 'react-router-dom';

import { MainBackground } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <MainBackground />
      <Outlet />
    </>
  );
};
