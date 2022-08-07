import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Mod = styled.div`
  background-color: white;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
`;

export const Title = styled.h3`
  margin: 0;
  margin-left: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 30px;
    margin-left: 20px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const H = styled.h3`
  margin: 28px 0;
  text-align: center;
`;

export const Div = styled.div`
  margin-top: 20px;
`;
