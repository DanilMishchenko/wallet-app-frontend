import { BalanceBoard, HeadText, Content, Symbol } from './Balance.styled';

export const Balance = () => {
  return (
    <BalanceBoard>
      <HeadText>Your balance</HeadText>
      <Content>
        <Symbol>₴</Symbol>
        <p>24 000.00</p>
      </Content>
    </BalanceBoard>
  );
};
