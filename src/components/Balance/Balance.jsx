import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';
import { BalanceBoard, HeadText, Content, Symbol } from './Balance.styled';

export const Balance = () => {
  const balance = useSelector(authSelectors.getBalance);

  return (
    <BalanceBoard>
      <HeadText>Your balance</HeadText>
      <Content>
        <Symbol>₴</Symbol>
        <p>{balance.toFixed(2)}</p>
      </Content>
    </BalanceBoard>
  );
};
