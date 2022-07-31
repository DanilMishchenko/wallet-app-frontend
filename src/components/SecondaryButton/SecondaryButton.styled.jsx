import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  min-width: 280px;
  height: 50px;
  background-color: var(--primary-text);
  border: 1px solid var(--blue);
  border-radius: 20px;
  color: var(--blue);
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  :hover,
  :focus {
    box-shadow: 0px 6px 15px rgba(118, 138, 225, 0.5);
  }

  @media screen and (min-width: 760px) {
    min-width: 300px;
  }
`;
