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
  DataContainer,
} from './IncomeForm.styled';
import arrow from '../../../images/arrow.svg';
import calendarIcon from '../../../images/calendarIcon.svg';

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
            <DataContainer>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat="dd.MM.yyyy"
                maxDate={new Date()}
                customInput={<InputSum />}
              />
              <img
                style={{
                  position: 'absolute',
                  pointerEvents: 'none',
                  right: '10px',
                  bottom: '10px',
                }}
                src={calendarIcon}
                alt="calendarIcon"
              />
            </DataContainer>
            <InputContainer>
              <TextAreaComment
                rows={5}
                name="comment"
                placeholder="Comment"
              ></TextAreaComment>
            </InputContainer>

            <PrimaryButton textBtn="add" />
          </Form>
        )}
      </Formik>
    </>
  );
};
