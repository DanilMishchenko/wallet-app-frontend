import styled from 'styled-components';
import { Field } from 'formik';

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 320px;
  margin-top: 40px;
  background-color: #ffffff;
  border-radius: 3px;
  overflow: hidden;

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

export const FieldSelect = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 34px;
  appearance: none;
  border: none;
  outline: none;
  padding-left: 20px;
`;

export const InputSum = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 320px;
  margin-top: 40px;
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
