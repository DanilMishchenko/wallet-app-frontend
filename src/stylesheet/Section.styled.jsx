import styled from 'styled-components';
import beigeShape1 from '../images/beigeShape1.svg';
import purpleShape from '../images/purpleShape.svg';

export const Section = styled.div`
  background-color: var(--background-color);
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    height: 100vh;

      ::before {
        content: '';
        position: absolute;
        display: block;
        top: 1px;
        width: 100%;
        height: 100%;
        background-image: url(${purpleShape}), url(${beigeShape1});
        background-position: bottom -50px left 0px, top -150px right -50px;
        background-repeat: no-repeat, no-repeat;
        filter: blur(50px)
      }
  };

  @media screen and (min-width: 1080px) {
    ::before {
      background-position: bottom 0px left 0px, top 0px right 0px;
    }
  }
`;
