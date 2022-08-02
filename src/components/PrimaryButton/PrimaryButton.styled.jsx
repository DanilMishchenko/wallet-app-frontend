import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  min-width: 280px;
  height: 50px;
  background-color: var(--green);
  border: 0;
  border-radius: 20px;
  color: var(--primary-text);
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  :hover,
  :focus {
    box-shadow: 0px 6px 15px rgba(36, 200, 165, 0.5);
  }

  :disabled {
    background-color: #21b897;
    box-shadow: none;
  }

  @media screen and (min-width: 760px) {
    min-width: 300px;
  }
`;
