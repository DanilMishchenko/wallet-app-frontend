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
  /* z-index: 1200; */

  @media screen and (min-width: 768px) {
    background-color: rgba(0, 0, 0, 0.25);
  }
  // z-index: 1200;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  max-width: 320px;
  padding: 20px 20px 37px 20px;
  background-color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.h2`
  /* text-align: center;
  margin-bottom: 40px; */
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
  width: 24px;
  outline: 1px solid #a6a6a6;
  border: 0px;
  margin-left: auto;
  cursor: pointer;
  padding: 7px;
  border-radius: 50%;
`;
