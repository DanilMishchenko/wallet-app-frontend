import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 20px;
  background-color: var(--primary-text);
  z-index: 5;

  @media (min-width: 768px) {
    position: static;
    padding: 20px 32px;
  }

  @media (min-width: 1200px) {
    padding: 20px 16px;
  } ;
`;
