import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.div`
  height: 30px;
  width: 30px;
  border: none;
  padding: 0;

  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

export const Title = styled.h1`
  display: inline-block;
  margin: 0 auto;
  margin-left: 16px;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  align-items: center;
  align-content: center;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
