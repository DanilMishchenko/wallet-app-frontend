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

export const InputSum = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding-left: 20px;
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
  max-width: 320px;
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

export const TextAreaComment = styled.textarea`
  position: relative;
  display: block;
  padding-left: 20px;
  width: 100%;
  min-height: 74px;
  resize: none;
  border: none;
  font-size: 18px;
  font-weight: 400;
  outline: none;
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  max-width: 320px;
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
`;