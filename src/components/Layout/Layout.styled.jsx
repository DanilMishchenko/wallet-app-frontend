import styled from 'styled-components';
import beigeShape1 from '../../images/beigeShape1.svg';
import purpleShape from '../../images/purpleShape.svg';

export const MainBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: -1;

  @media screen and (min-width: 768px) {
    background-image: url(${purpleShape});
    background-position: bottom -50px left 0px;
    background-repeat: no-repeat;

    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(${beigeShape1});
      background-position: top -150px right -50px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1280px) {
    background-position: bottom 0px left 0px, top 0px right 0px;
  }
`;
