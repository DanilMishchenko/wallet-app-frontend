import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
//import { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';

import { PrimaryButton } from '../../PrimaryButton/PrimaryButton';

import 'react-datepicker/dist/react-datepicker.css';
import { addTransaction } from '../../../redux/transactions/transactions-operations';

import {
  SelectContainer,
  ArrowSvg,
  FieldSelect,
  InputContainer,
  Wrapper,
  InputSum,
  DataContainer,
  TextAreaComment,
  CommentContainer,
} from './IncomeForm.styled';
import arrow from '../../../images/arrow.svg';
import calendarIcon from '../../../images/calendarIcon.svg';

const schema = yup.object().shape({
  sum: yup.number().required('this field is required'),
  date: yup.string().required('this field is required'),
  comment: yup.string().max(50, '50 symbols maximum'),
});

const initialValues = {
  type: true,
  category: 'Regular Income',
  sum: '',
  date: new Date(),
  comment: '',
};

export const IncomeForm = () => {
  //const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={({ type, category, sum, date, comment }) => {
          dispatch(addTransaction({ type, category, sum, date, comment }));
          console.log(type, category, sum, date, comment);
        }}
      >
        {({ handleSubmit, values, handleChange, setFieldValue, dirty }) => (
          <Form onSubmit={handleSubmit}>
            <SelectContainer>
              <FieldSelect
                as="select"
                name="category"
                onChange={handleChange}
                value={values.category}
              >
                <option value="Regular Income">Regular Income</option>
                <option value="Irregular Income">Irregular Income</option>
              </FieldSelect>
              <ArrowSvg src={arrow} alt="arrow" />
            </SelectContainer>
            <Wrapper>
              <InputContainer>
                <InputSum
                  type="number"
                  name="sum"
                  min="0.00"
                  step="0.01"
                  placeholder="0.00"
                  onChange={handleChange}
                  value={values.sum}
                />
                <ErrorMessage
                  name="sum"
                  component="div"
                  style={{
                    color: '#FF6596',
                    position: 'absolute',
                    top: '100%',
                  }}
                />
              </InputContainer>
              <DataContainer>
                <DatePicker
                  selected={values.date}
                  name="date"
                  onChange={date => setFieldValue('date', date)}
                  dateFormat="dd MM.yyyy"
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
                <ErrorMessage
                  name="date"
                  component="div"
                  style={{
                    color: '#FF6596',
                    position: 'absolute',
                    top: '100%',
                  }}
                />
              </DataContainer>
            </Wrapper>
            <CommentContainer>
              <TextAreaComment
                rows={2}
                maxLength="51"
                name="comment"
                placeholder="Comment"
                onChange={handleChange}
              ></TextAreaComment>
              <ErrorMessage
                name="comment"
                component="div"
                style={{ color: '#FF6596', position: 'absolute', top: '100%' }}
              />
            </CommentContainer>
            <PrimaryButton textBtn="add" disabled={!dirty} type="submit" />
          </Form>
        )}
      </Formik>
    </>
  );
};
