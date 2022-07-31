import styled from 'styled-components';
import beigeShape1 from '../images/beigeShape1.svg';
import beigeShape2 from '../images/beigeShape.svg';
import purpleShape from '../images/purpleShape.svg';

export const Section = styled.div`
  @media screen and (min-width: 768px) {
    height: calc(100vh - 70px);
    background-color: var(--background-color);
    background-repeat: no-repeat;
    background-image: url(${beigeShape2});
    background-position: top 0px right 0px;

    ::before {
      content: '';
      position: absolute;
      display: block;
      top: 1px;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-image: url(${purpleShape});
      background-position: bottom 0px left 0px;
    }
  }

  @media screen and (min-width: 1280px) {
    height: calc(100vh - 85px);
    background-image: url(${beigeShape1});

    ::before {
      background-image: url(${purpleShape});
    }
  }
`;
