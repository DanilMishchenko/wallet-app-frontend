import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  &:hover {
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25),
      0px 3px 3px rgba(0, 0, 0, 0.25);
    img {
      box-shadow: 0px 6px 15px rgba(118, 138, 225, 0.3);
    }
  }
`;

export const LogoIcon = styled.img`
  margin-right: 16px;
  height: 30px;
  width: 30px;
  border: none;

  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

export const Title = styled.h1`
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.45;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
