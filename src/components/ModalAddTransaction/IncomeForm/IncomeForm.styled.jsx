import styled from 'styled-components';
import { Field } from 'formik';

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 40px;

  ::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: #bdbdbd;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const ArrowSvg = styled.img`
  position: absolute;
  pointer-events: none;
  right: 20px;
  width: 18px;
  height: 9px;
`;

export const FieldSelect = styled(Field)`
  width: 100%;
  height: 34px;
  appearance: none;
  border: none;
  outline: none;
  padding-left: 20px;

  option {
    border: none;
    border-radius: 5px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const InputSum = styled.input`
  display: block;
  text-align: center;
  width: 100%;
  height: 34px;
  color: #24cca7;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  border: none;
  cursor: pointer;
  outline: none;

  ::placeholder {
    color: #bdbdbd;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 40px;

  ::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: #bdbdbd;
  }

  @media screen and (min-width: 768px) {
    width: 181px;
  }
`;

export const TextAreaComment = styled.textarea`
  position: relative;
  display: block;
  padding-left: 20px;
  width: 100%;
  resize: none;
  border: none;
  font-size: 18px;
  font-weight: 400;
  outline: none;
  height: 4em;
  resize: inherit;

  ::placeholder {
    color: #bdbdbd;
  }

  @media screen and (min-width: 768px) {
    height: 2.3em;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 40px;

  ::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: #bdbdbd;
  }

  div.input {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 181px;
  }
`;

export const InputDate = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    padding-left: 8px;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 40px;

  ::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: #bdbdbd;
  }
`;
