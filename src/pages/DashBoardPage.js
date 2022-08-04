import { Outlet } from 'react-router-dom';
import { Balance } from '../components/Balance/Balance';
import { Currency } from '../components/Currency/Currency';
import { Navigation } from '../components/Navigation/Navigation';
import { Header } from '../components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  ContainerPages,
  BlurContainer,
} from '../stylesheet/WrapperPages.styled';

export default function DashBoardPage() {
  return (
    <BlurContainer>
      <ToastContainer />
      <Header />
      <ContainerPages>
        <div>
          <Navigation />
          <Balance />
          <Currency />
        </div>
        <div>
          <Outlet />
        </div>
      </ContainerPages>
    </BlurContainer>
  );
}
