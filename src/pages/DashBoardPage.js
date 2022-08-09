import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { isOpen } from '../redux/currency/currency-selectors';
import { Balance } from '../components/Balance/Balance';
import { Currency } from '../components/Currency/Currency';
import { Navigation } from '../components/Navigation/Navigation';
import { Header } from '../components/Header/Header';
import {
  ContainerPages,
  BlurContainer,
  NavigationSection,
  MainContainer,
  NavigationContainer,
} from '../stylesheet/WrapperPages.styled';
import useMediaQuery from '../hooks/useMediaQuery';

export default function DashBoardPage() {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isCurrencyOpen = useSelector(isOpen);
  const isCurrencyShow = isMobile ? isCurrencyOpen : true;
  const isBalanceShow = isMobile ? pathname === '/home' : true;

  return (
    <BlurContainer>
      <ToastContainer />
      <Header />
      <ContainerPages>
        <NavigationContainer>
          <NavigationSection>
            <Navigation />
            {isBalanceShow && <Balance />}
          </NavigationSection>
          {isCurrencyShow && <Currency />}
        </NavigationContainer>
        {(!isCurrencyOpen || !isMobile) && (
          <MainContainer>
            <Outlet />
          </MainContainer>
        )}
      </ContainerPages>
    </BlurContainer>
  );
}
