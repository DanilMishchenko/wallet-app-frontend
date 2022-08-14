import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { getPage } from '../../../redux/transactions/transactions-selectors';
import {
  addTransaction,
  fetchTransactions,
} from '../../../redux/transactions/transactions-operations';
import { fetchBalance } from '../../../redux/balance';
import { PrimaryButton } from '../../PrimaryButton/PrimaryButton';
import 'react-datepicker/dist/react-datepicker.css';
import {
  SelectContainer,
  InputSum,
  InputContainer,
  TextAreaComment,
  DataContainer,
  Wrapper,
} from './ExpenseForm.styled';
import calendarIcon from '../../../assets/images/calendarIcon.svg';

const schema = yup.object().shape({
  category: yup.string().required('this field is required'),
  sum: yup.number().positive().required('this field is required'),
  date: yup.string().required('this field is required'),
  comment: yup.string().max(50, '50 symbols maximum'),
});

const initialValues = {
  type: false,
  category: '',
  sum: '',
  date: new Date(),
};

const options = [
  { value: 'Basic expenses', label: 'Basic expenses' },
  { value: 'Products', label: 'Products' },
  { value: 'Car', label: 'Car' },
  { value: 'Self care', label: 'Self care' },
  { value: 'Child care', label: 'Child care' },
  { value: 'Household products', label: 'Household products' },
  { value: 'Education', label: 'Education' },
  { value: 'Other expenses', label: 'Other expenses' },
  { value: 'Leisure', label: 'Leisure' },
];

export const ExpenseForm = ({ onClose }) => {
  const page = useSelector(getPage);
  const dispatch = useDispatch();

  const handleTransactionSubmit = async values => {
    dispatch(addTransaction(values));
    await dispatch(fetchTransactions(page));
    await dispatch(fetchBalance());
    onClose();
    toast.success(`transaction amount ${values.sum} was saved`);
  };

  const selectStyles = {
    control: styles => ({
      ...styles,
      fontFamily: 'Circe',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '1.5',
      color: '#BDBDBD',
      outline: 'none',
      border: 'none',
      borderBottom: '1px solid #E0E0E0',
    }),
    options: (styles, state) => ({
      ...styles,
      fontFamily: 'Circe',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '1.5',
      height: '44px',

      color: state.isSelected ? '#FF6596' : 'black',

      '&:hover': {
        backgroundColor: 'white',
        color: '#FF6596',
      },
    }),
    menu: (base, state) => ({
      ...base,
      padding: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      borderRadius: '20px',
    }),

    menuList: (base, state) => ({
      ...base,
      cursor: 'pointer',
    }),
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleTransactionSubmit}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          setFieldValue,
          setFieldTouched,
          touched,
          dirty,
        }) => (
          <Form onSubmit={handleSubmit}>
            <SelectContainer>
              <Select
                placeholder="Select a category"
                name="category"
                options={options}
                onChange={category => setFieldValue('category', category.value)}
                onBlur={setFieldTouched}
                value={values.options}
                touched={touched.options}
                styles={selectStyles}
              />
              <ErrorMessage
                name="category"
                component="div"
                style={{
                  color: '#FF6596',
                  position: 'absolute',
                  top: '130%',
                }}
              />
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
                    top: '130%',
                  }}
                />
              </InputContainer>
              <DataContainer>
                <DatePicker
                  selected={values.date}
                  name="date"
                  onChange={date => setFieldValue('date', date)}
                  dateFormat="dd.MM.yyyy"
                  minDate={new Date()}
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
                <ErrorMessage
                  name="date"
                  component="div"
                  style={{
                    color: '#FF6596',
                    position: 'absolute',
                    top: '130%',
                  }}
                />
              </DataContainer>
            </Wrapper>
            <InputContainer>
              <TextAreaComment
                rows={2}
                maxLength="50"
                name="comment"
                placeholder="Comment"
                onChange={handleChange}
              ></TextAreaComment>
              <ErrorMessage
                name="comment"
                component="div"
                style={{ color: '#FF6596', position: 'absolute', top: '100%' }}
              />
            </InputContainer>

            <PrimaryButton textBtn="add" disabled={!dirty} type="submit" />
          </Form>
        )}
      </Formik>
    </>
  );
};
