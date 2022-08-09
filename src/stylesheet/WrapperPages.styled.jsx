import styled from 'styled-components';

export const ContainerPages = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 72px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 35px;

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

export const NavigationContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    position: relative;

    ::after {
      content: '';
      position: absolute;
      top: -45px;
      left: 100%;
      margin-left: 70px;

      display: block;
      width: 1px;
      height: calc(100% + 90px);
      background: var(--outline);
      box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
        1px 0px 0px rgba(255, 255, 255, 0.6);
    }
  }
`;

export const NavigationSection = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-right: 32px;
  }
`;

export const MainContainer = styled.div`
  @media screen and (min-width: 1280px) {
    margin-left: 140px;
  }
`;
