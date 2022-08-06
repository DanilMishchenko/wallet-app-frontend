import { Formik, Form } from 'formik';
//import { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';

import { PrimaryButton } from '../../PrimaryButton/PrimaryButton';

import 'react-datepicker/dist/react-datepicker.css';
import { addTransaction } from '../../../redux/transactions/transactions-operations';

import {
  SelectContainer,
  ArrowSvg,
  InputSum,
  FieldSelect,
  InputContainer,
  TextAreaComment,
  DataContainer,
} from './ExpenseForm.styled';
import arrow from '../../../images/arrow.svg';
import calendarIcon from '../../../images/calendarIcon.svg';

const initialValues = {
  type: false,
  category: 'Select a category',
  sum: '',
  date: new Date(),
  comment: '',
};

export const ExpenseForm = () => {
  //const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={({ type, category, sum, date, comment }) => {
          dispatch(addTransaction({ type, category, sum, date, comment }));
          console.log(type, category, sum, date, comment);
        }}
      >
        {({ handleSubmit, values, handleChange, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <SelectContainer>
              <FieldSelect
                as="select"
                name="category"
                onChange={handleChange}
                value={values.category}
              >
                <option value="Select a category">Select a category</option>
                <option value="Basic expenses">Basic expenses</option>
                <option value="Products">Products</option>
                <option value="Car">Car</option>
                <option value="Self care">Self care</option>
                <option value="Child care">Child care</option>
                <option value="Household products">Household products</option>
                <option value="Education">Education</option>
                <option value="Leisure">Products</option>
                <option value="Other expenses">Other expenses</option>
              </FieldSelect>
              <ArrowSvg src={arrow} alt="arrow" />
            </SelectContainer>
            <InputContainer>
              <InputSum
                type="number"
                name="sum"
                min="0.00"
                step="0.01"
                placeholder="0.00"
                onChange={handleChange}
                value={values.sum}
                required
              />
            </InputContainer>
            <DataContainer>
              {/* <InputSum
                type="date"
                name="date"
                onChange={handleChange}
                required
              /> */}

              <DatePicker
                selected={values.date}
                name="date"
                onChange={date => setFieldValue('date', date)}
                dateFormat="dd MM.yyyy"
                maxDate={new Date()}
                customInput={<InputSum />}
                required
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
                onChange={handleChange}
              ></TextAreaComment>
            </InputContainer>

            <PrimaryButton textBtn="add" />
          </Form>
        )}
      </Formik>
    </>
  );
};
