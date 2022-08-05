import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

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
  padding: 20px 20px 37px 20px;
  background-color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 700;
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  color: #000000;
`;

export const IncomeTrigger = styled.span`
  color: ${props => (props.checked ? '#E0E0E0' : '#24cca7')};
`;

export const ExpenseTrigger = styled.span`
  color: ${props => (props.checked ? '#FF6596' : '#E0E0E0')};
`;

export const FormContainer = styled.div`
  margin-bottom: 20px;
`;

export const SwitchContainer = styled.div`
  margin: 40px 20px;
`;

export const CloseButton = styled.button`
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
`;
