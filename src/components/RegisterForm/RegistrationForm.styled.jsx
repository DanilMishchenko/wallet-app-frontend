import styled from 'styled-components';

export const Div = styled.div`
  @media screen and (min-width: 320px) {
    width: 320px;
    padding-top: 50px;
    padding-bottom: 110px;
    margin: 0 auto;
  }
  @media screen and (min-width: 760px) {
    position: absolute;
    bottom: 100px;
    right: 50%;
    transform: translate(50%);
    width: 540px;
    border-radius: 50px;
    padding-bottom: 50px;
    margin: auto;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
  @media screen and (min-width: 1280px) {
    bottom: 50%;
    right: 85px;
    transform: translateY(50%);
    margin: 0;
  }

  background-color: white;
`;

export const InputForm = styled.div`
  padding-bottom: 20px;
  @media screen and (min-width: 760px) {
    padding: 40px 50px 20px 65px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
