import styled from 'styled-components';

export const BalanceBoard = styled.div`
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

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const HeadText = styled.h3`
  color: var(--grey-balance);
  font-family: 'Circe';
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.47;
  text-transform: uppercase;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 30px;
`;

export const Symbol = styled.p`
  font-family: 'Circe';
  margin-right: 15px;
`;
