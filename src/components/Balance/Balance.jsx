import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BalanceBoard, HeadText, Content, Symbol } from './Balance.styled';
import useMediaQuery from '../../hooks/useMediaQuery';

export const Balance = () => {
  const { pathname } = useLocation();
  const balance = useSelector(state => state.balance.value);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isBalanceShow = isMobile ? pathname === '/home' : true;

  return (
    <>
      {isBalanceShow && (
        <BalanceBoard>
          <HeadText>Your balance</HeadText>
          <Content>
            <Symbol>₴</Symbol>
            <p>{balance}</p>
          </Content>
        </BalanceBoard>
      )}
    </>
  );
};
