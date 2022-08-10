import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 768px) {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: 100vh;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    max-width: 540px;
    height: auto;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 73px 60px;
    border-radius: 20px;
  }
`;

export const CloseButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    right: 40px;
    top: 40px;
    width: 26px;
    outline: 1px solid #a6a6a6;
    background-color: #ffffff;
    border: 0px;
    margin-left: auto;
    cursor: pointer;
    padding: 7px;
    border-radius: 50%;

    :hover {
      box-shadow: rgb(0 0 0 / 60%) 0px 1px 5px;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 40px 0;
  font-weight: 700;
`;

export const SwitchContainer = styled.div`
  padding: 0px 20px;

  @media screen and (min-width: 768px) {
    padding: 0px 16px;
  }
`;

export const IncomeTrigger = styled.span`
  color: ${props => (props.checked ? '#E0E0E0' : '#24cca7')};
`;

export const ExpenseTrigger = styled.span`
  color: ${props => (props.checked ? '#FF6596' : '#E0E0E0')};
`;

export const FormContainer = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 394px;
  }
`;
