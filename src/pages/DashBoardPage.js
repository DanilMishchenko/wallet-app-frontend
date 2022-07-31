import { Outlet } from 'react-router-dom';
import { Balance } from '../components/Balance/Balance';
import { Currency } from '../components/Currency/Currency';
import { Header } from '../components/Header/Header';
import { Navigation } from '../components/Navigation/Navigation';

export default function DashBoardPage() {
  return (
    <>
      <Header />
      <Navigation />
      <Balance />
      <Currency />
      <Outlet />
    </>
  );
}
