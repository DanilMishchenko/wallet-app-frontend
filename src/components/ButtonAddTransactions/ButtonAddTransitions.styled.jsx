import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background-color: var(--green);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: 768px) {
    bottom: 40px;
    right: 40px;
  }
  :hover,
  :focus {
    box-shadow: 0px 6px 15px rgba(36, 200, 165, 0.5);
  }
`;
