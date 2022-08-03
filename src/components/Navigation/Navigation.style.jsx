import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;

  @media screen and (min-width: 768px) {
    display: block;
    padding-bottom: 30px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;

  &:not(:first-child) {
    margin-left: 40px;
  }

  &:hover,
  &:focus {
    font-weight: 700;

    img {
      box-shadow: 0px 6px 15px rgba(118, 138, 225, 0.5);
    }
  }

  @media screen and (min-width: 768px) {
    display: ${props => (props.onlyMobile ? 'none' : 'flex')};
    align-items: center;

    &:not(:first-child) {
      margin-left: 0px;
      margin-top: 20px;
    }
  }

  img {
    width: 18px;
    height: 18px;
    border-radius: 2px;
  }
`;

export const NavText = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-size: 18px;
    line-height: 1.5;
    text-transform: capitalize;
    padding-left: 25px;
  }
`;