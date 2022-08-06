import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 75px;
  padding-bottom: 15px;

  @media screen and (min-width: 768px) {
    display: block;
    padding-top: 40px;
    padding-bottom: 30px;
  }
`;

const Link = props => <NavLink {...props}>{props.children}</NavLink>;

export const StyledLink = styled(Link)`
  display: flex;
  &:not(:first-child) {
    margin-left: 40px;
  }

  img {
    width: 38px;
    height: 38px;
    border-radius: 2px;
  }

  &:hover,
  &:focus {
    font-weight: 700;

    img {
      box-shadow: 0px 6px 15px rgba(118, 138, 225, 0.5);
    }
  }

  @media screen and (min-width: 767px) {
    align-items: center;

    &:not(:first-child) {
      margin-left: 0px;
      margin-top: 20px;
    }

    img {
      width: 18px;
      height: 18px;
    }
  }

  .activeLink {
    font-weight: 700;
    img {
      box-shadow: 0px 6px 15px rgba(118, 138, 225, 0.5);
    }
  }
`;

export const NavText = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 18px;
    line-height: 1.5;
    text-transform: capitalize;
    padding-left: 25px;
  }
`;
