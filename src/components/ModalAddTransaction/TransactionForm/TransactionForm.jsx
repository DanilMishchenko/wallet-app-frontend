import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';

import { CategorySelect } from '../ExpenceForm/CategorySelect/CategorySelect';
import { PrimaryButton } from '../../PrimaryButton/PrimaryButton';

import 'react-datepicker/dist/react-datepicker.css';
import {
  addTransaction,
  fetchTransactions,
} from '../../../redux/transactions/transactions-operations';
import { fetchBalance } from '../../../redux/balance';

import {
  SelectContainer,
  //ArrowSvg,
  //FieldSelect,
  Error,
  InputContainer,
  Wrapper,
  InputSum,
  DataContainer,
  TextAreaComment,
  CommentContainer,
} from './TransactionForm.styled';
//import arrow from '../../../images/arrow.svg';
import calendarIcon from '../../../images/calendarIcon.svg';

const schema = yup.object().shape({
  category: yup.string().required('this field is required'),
  sum: yup.number().required('this field is required'),
  date: yup.string().required('this field is required'),
  comment: yup.string().max(50, '50 symbols maximum'),
});

// const initialValues = {
//   type: true,
// category: '',
// sum: '',
// date: new Date(),
// };

// const options = [
//   { value: 'Regular Income', label: 'Regular Income' },
//   { value: 'Irregular Income', label: 'Irregular Income' },
// ];

export const TransactionForm = ({ initialValues, options, onSubmit }) => {
  //const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
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
              <CategorySelect
                options={options}
                onChange={category => setFieldValue('category', category.value)}
                onBlur={setFieldTouched}
                value={values.options}
                touched={touched.options}
              />
              <Error name="category" component="div" />
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
                <Error name="sum" component="div" />
              </InputContainer>
              <DataContainer>
                <DatePicker
                  selected={values.date}
                  name="date"
                  onChange={date => setFieldValue('date', date)}
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
                <Error name="date" component="div" />
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
              <Error name="comment" component="div" />
            </CommentContainer>
            <PrimaryButton textBtn="add" disabled={!dirty} type="submit" />
          </Form>
        )}
      </Formik>
    </>
  );
};

// import { Formik, Form, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import Select from 'react-select';
// import { toast } from 'react-toastify';
// //import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import DatePicker from 'react-datepicker';

// import { PrimaryButton } from '../../PrimaryButton/PrimaryButton';

// import 'react-datepicker/dist/react-datepicker.css';
// import {
//   addTransaction,
//   fetchTransactions,
// } from '../../../redux/transactions/transactions-operations';
// import { fetchBalance } from '../../../redux/balance';

// import {
//   SelectContainer,
//   //ArrowSvg,
//   //FieldSelect,
//   InputContainer,
//   Wrapper,
//   InputSum,
//   DataContainer,
//   TextAreaComment,
//   CommentContainer,
// } from './IncomeForm.styled';
// //import arrow from '../../../images/arrow.svg';
// import calendarIcon from '../../../images/calendarIcon.svg';
// import { FieldSelect } from '../ExpenceForm/ExpenseForm.styled';

// const schema = yup.object().shape({
//   category: yup.string().required('this field is required'),
//   sum: yup.number().required('this field is required'),
//   date: yup.string().required('this field is required'),
//   comment: yup.string().max(50, '50 symbols maximum'),
// });

// const initialValues = {
//   type: true,
//   category: '',
//   sum: '',
//   date: new Date(),
// };

// const options = [
//   { value: 'Regular Income', label: 'Regular Income' },
//   { value: 'Irregular Income', label: 'Irregular Income' },
// ];

// export const IncomeForm = ({ onClose }) => {
//   //const [startDate, setStartDate] = useState(new Date());
//   const dispatch = useDispatch();

//   const handleTransactionSubmit = async values => {
//     dispatch(addTransaction(values));
//     await dispatch(fetchTransactions());
//     await dispatch(fetchBalance());
//     onClose();
//     toast.success(`transaction amount ${values.sum} was saved`);
//   };

//   const selectStyles = {
//     control: styles => ({
//       ...styles,
//       fontFamily: 'Circe',
//       fontWeight: '400',
//       fontSize: '18px',
//       lineHeight: '1.5',
//       color: '#BDBDBD',
//       outline: 'none',
//       border: 'none',
//       borderBottom: '1px solid #E0E0E0',
//     }),
//     options: (styles, state) => ({
//       ...styles,
//       fontFamily: 'Circe',
//       fontStyle: 'normal',
//       fontWeight: '400',
//       fontSize: '18px',
//       lineHeight: '1.5',
//       height: '44px',

//       color: state.isSelected ? '#FF6596' : 'black',

//       '&:hover': {
//         backgroundColor: 'white',
//         color: '#FF6596',
//       },
//     }),
//     menu: (base, state) => ({
//       ...base,
//       padding: '10px',
//       backgroundColor: 'rgba(255, 255, 255, 0.9)',
//       boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
//       //backdropFilter:' blur(50px)',
//       borderRadius: '20px',
//     }),

//     menuList: (base, state) => ({
//       ...base,
//       cursor: 'pointer',
//     }),
//   };

//   return (
//     <>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={schema}
//         onSubmit={handleTransactionSubmit}
//       >
//         {({
//           handleSubmit,
//           values,
//           handleChange,
//           setFieldValue,
//           setFieldTouched,
//           touched,
//           dirty,
//         }) => (
//           <Form onSubmit={handleSubmit}>
//             {/* <SelectContainer>
//               <FieldSelect
//                 as="select"
//                 name="category"
//                 onChange={handleChange}
//                 value={values.category}
//               >
//                 <option value="Regular Income">Regular Income</option>
//                 <option value="Irregular Income">Irregular Income</option>
//               </FieldSelect>
//               <ArrowSvg src={arrow} alt="arrow" />
//             </SelectContainer> */}
//             <SelectContainer>
//               <Select
//                 placeholder="Select a category"
//                 name="category"
//                 options={options}
//                 onChange={category => setFieldValue('category', category.value)}
//                 onBlur={setFieldTouched}
//                 value={values.options}
//                 touched={touched.options}
//                 styles={selectStyles}
//               />
//               <ErrorMessage
//                 name="category"
//                 component="div"
//                 style={{
//                   color: '#FF6596',
//                   position: 'absolute',
//                   top: '130%',
//                 }}
//               />
//             </SelectContainer>
//             <Wrapper>
//               <InputContainer>
//                 <InputSum
//                   type="number"
//                   name="sum"
//                   min="0.00"
//                   step="0.01"
//                   placeholder="0.00"
//                   onChange={handleChange}
//                   value={values.sum}
//                 />
//                 <ErrorMessage
//                   name="sum"
//                   component="div"
//                   style={{
//                     color: '#FF6596',
//                     position: 'absolute',
//                     top: '130%',
//                   }}
//                 />
//               </InputContainer>
//               <DataContainer>
//                 <DatePicker
//                   selected={values.date}
//                   name="date"
//                   onChange={date => setFieldValue('date', date)}
//                   dateFormat="dd.MM.yyyy"
//                   maxDate={new Date()}
//                   customInput={<InputSum />}
//                 />
//                 <img
//                   style={{
//                     position: 'absolute',
//                     pointerEvents: 'none',
//                     right: '10px',
//                     bottom: '10px',
//                   }}
//                   src={calendarIcon}
//                   alt="calendarIcon"
//                 />
//                 <ErrorMessage
//                   name="date"
//                   component="div"
//                   style={{
//                     color: '#FF6596',
//                     position: 'absolute',
//                     top: '130%',
//                   }}
//                 />
//               </DataContainer>
//             </Wrapper>
//             <CommentContainer>
//               <TextAreaComment
//                 rows={2}
//                 maxLength="51"
//                 name="comment"
//                 placeholder="Comment"
//                 onChange={handleChange}
//               ></TextAreaComment>
//               <ErrorMessage
//                 name="comment"
//                 component="div"
//                 style={{ color: '#FF6596', position: 'absolute', top: '100%' }}
//               />
//             </CommentContainer>
//             <PrimaryButton textBtn="add" disabled={!dirty} type="submit" />
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };
