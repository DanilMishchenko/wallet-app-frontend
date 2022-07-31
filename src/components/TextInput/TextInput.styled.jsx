import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  // justify-content: center;

  padding-left: 25px;
  border-bottom: 1px solid #e0e0e0;

  color: #bdbdbd;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  border: none;
  outline-style: none;
  padding-left: 25px;
  width: 250px;
  height: 35px;

  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  @media screen and (min-width: $TabletWidth) {
    width: 409px;
  }
`;
