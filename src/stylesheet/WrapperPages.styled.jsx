import styled from 'styled-components';

export const ContainerPages = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 72px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 3px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    width: 1280px;
    padding-top: 45px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const BlurContainer = styled.div`
  ::before {
    content: '';
    position: fixed;
    left: 0;
    right: 0;
    z-index: -1;

    display: block;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    filter: blur(50px);
  }
`;
