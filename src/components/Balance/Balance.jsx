import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';
import useMediaQuery from '../../hooks/useMediaQuery';
import { BalanceBoard, HeadText, Content, Symbol } from './Balance.styled';

export const Balance = () => {
  const balance = useSelector(authSelectors.getBalance);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isBalanceShow = isMobile ? pathname === '/home' : true;

  return (
    <>
      {isBalanceShow && (
        <BalanceBoard>
          <HeadText>Your balance</HeadText>
          <Content>
            <Symbol>₴</Symbol>
            <p>{balance.toFixed(2)}</p>
          </Content>
        </BalanceBoard>
      )}
    </>
  );
};
