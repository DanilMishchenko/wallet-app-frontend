import styled from 'styled-components';

const BalanceBoard = styled.div`
  width: 280px;
  height: 80px;
  padding: 10px 40px;
  margin-bottom: 32px;
  background: var(--primary-text);
  border-radius: 30px;
  line-height: 1.5;

    @media screen and (min-width: 768px) {
      width: 336px;
    }

    @media screen and (min-width: 1080px) {
      width: 395px;
    }
`

const HeadText =  styled.h3`
  color: var(--grey-balance);
  font-family: 'Circe';
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.47;
  text-transform: uppercase;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 30px;
`

const Symbol = styled.p`
  font-family: 'Circe';
  margin-right: 15px;
`

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
