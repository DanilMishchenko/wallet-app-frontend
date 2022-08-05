import { Formik, Form } from 'formik';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import { PrimaryButton } from '../../PrimaryButton/PrimaryButton';

import 'react-datepicker/dist/react-datepicker.css';
import {
  InputSum,
  FieldSelect,
  SelectContainer,
  InputContainer,
  TextAreaComment,
} from './IncomeForm.styled';
import arrow from '../../../images/arrow.svg';

const initialValues = {
  sum: '',
  incomeSelect: 'Regular Income',
  comment: '',
};

export const IncomeForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={value => console.log(value)}
      >
        {({ handleSubmit, values, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <SelectContainer>
              <FieldSelect as="select" name="incomeSelect">
                <option value="Regular Income">Regular Income</option>
                <option value="Irregular Income">Irregular Income</option>
              </FieldSelect>
              <img
                style={{
                  position: 'absolute',
                  pointerEvents: 'none',
                  right: '15px',
                  width: '18px',
                  height: '9px',
                }}
                src={arrow}
                alt="arrow"
              />
            </SelectContainer>
            <InputContainer>
              <InputSum
                type="number"
                name="sum"
                required
                min="0.00"
                step="0.01"
                placeholder="0.00"
                onChange={handleChange}
                value={values.sum}
              />
            </InputContainer>
            <DatePicker
              style={{
                with: '300px',
              }}
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
            {/* <Select
              type="text"
              defaultValue={options[0]}
              options={options}
              name="select"
              onChange={handleChange}
            /> */}
            <InputContainer>
              <TextAreaComment name="comment"></TextAreaComment>
            </InputContainer>

            <PrimaryButton textBtn="add" />
          </Form>
        )}
      </Formik>
    </>
  );
};
