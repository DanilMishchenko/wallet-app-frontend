import { Outlet } from 'react-router-dom';
import { Balance } from '../components/Balance/Balance';
import { Currency } from '../components/Currency/Currency';
import { Navigation } from '../components/Navigation/Navigation';
import { Container } from '../stylesheet/Container.styled';

export default function DashBoardPage() {
  return (
    <Container>
      <Navigation />
      <Balance />
      <Currency />
      <Outlet />
    </Container>
  );
}
