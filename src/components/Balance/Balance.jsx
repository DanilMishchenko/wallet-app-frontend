import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBalance, getBalance } from '../../redux/balance';

import { BalanceBoard, HeadText, Content, Symbol } from './Balance.styled';

export const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector(getBalance);

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

  return (
    <BalanceBoard>
      <HeadText>Your balance</HeadText>
      <Content>
        <Symbol>₴</Symbol>
        {balance && <p>{balance.toFixed(2)}</p>}
      </Content>
    </BalanceBoard>
  );
};
