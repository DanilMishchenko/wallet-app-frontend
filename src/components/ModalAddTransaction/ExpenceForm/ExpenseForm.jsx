import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Select from 'react-select';
import { toast } from 'react-toastify';
//import { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';

import { PrimaryButton } from '../../PrimaryButton/PrimaryButton';

import 'react-datepicker/dist/react-datepicker.css';
import { addTransaction } from '../../../redux/transactions/transactions-operations';

import {
  SelectContainer,
  //ArrowSvg,
  InputSum,
  //FieldSelect,
  InputContainer,
  TextAreaComment,
  DataContainer,
  Wrapper,
  CategorySelect,
} from './ExpenseForm.styled';
//import arrow from '../../../images/arrow.svg';
import calendarIcon from '../../../images/calendarIcon.svg';

const schema = yup.object().shape({
  sum: yup.number().required('this field is required'),
  date: yup.string().required('this field is required'),
  comment: yup.string().max(50, '50 symbols maximum'),
});

const initialValues = {
  type: false,
  category: 'Select a category',
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
  //const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const handleTransactionSubmit = values => {
    dispatch(addTransaction(values));
    toast.success(`transaction amount ${values.sum} was saved`);
    onClose();
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
      //backdropFilter:' blur(50px)',
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
            {/* <SelectContainer>
              <FieldSelect
                // as="select"
                // name="category"
                // onChange={handleChange}
                // value={values.category}
              >
              </FieldSelect>
              <ArrowSvg src={arrow} alt="arrow" />
            </SelectContainer> */}
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
                  dateFormat="dd.MM.yyyy"
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
                    top: '100%',
                  }}
                />
              </DataContainer>
            </Wrapper>
            <InputContainer>
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
            </InputContainer>

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
// import { addTransaction } from '../../../redux/transactions/transactions-operations';

// import {
//   SelectContainer,
//   ArrowSvg,
//   InputSum,
//   FieldSelect,
//   InputContainer,
//   TextAreaComment,
//   DataContainer,
//   Wrapper,
// } from './ExpenseForm.styled';
// import arrow from '../../../images/arrow.svg';
// import calendarIcon from '../../../images/calendarIcon.svg';

// const schema = yup.object().shape({
//   sum: yup.number().required('this field is required'),
//   date: yup.string().required('this field is required'),
//   comment: yup.string().max(50, '50 symbols maximum'),
// });

// const initialValues = {
//   type: false,
//   category: 'Select a category',
//   sum: '',
//   date: new Date(),
// };

// const options = [
//   { value: '', label: '' },
// ];

// export const ExpenseForm = ({ onClose }) => {
//   //const [startDate, setStartDate] = useState(new Date());
//   const dispatch = useDispatch();

//   const handleTransactionSubmit = values => {
//     dispatch(addTransaction(values));
//     toast.success(`transaction amount ${values.sum} was saved`);
//     onClose();

//     console.log(values);
//   };

//   return (
//     <>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={schema}
//         onSubmit={handleTransactionSubmit}
//       >
//         {({ handleSubmit, values, handleChange, setFieldValue, dirty }) => (
//           <Form onSubmit={handleSubmit}>
//             <SelectContainer>
//               <FieldSelect
//                 as="select"
//                 name="category"
//                 onChange={handleChange}
//                 value={values.category}
//               >
//                 <option value="Select a category">Select a category</option>
//                 <option value="Basic expenses">Basic expenses</option>
//                 <option value="Products">Products</option>
//                 <option value="Car">Car</option>
//                 <option value="Self care">Self care</option>
//                 <option value="Child care">Child care</option>
//                 <option value="Household products">Household products</option>
//                 <option value="Education">Education</option>
//                 <option value="Leisure">Products</option>
//                 <option value="Other expenses">Other expenses</option>
//               </FieldSelect>
//               <ArrowSvg src={arrow} alt="arrow" />
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
//                     top: '100%',
//                   }}
//                 />
//               </InputContainer>
//               <DataContainer>
//                 <DatePicker
//                   selected={values.date}
//                   name="date"
//                   onChange={date => setFieldValue('date', date)}
//                   dateFormat="dd MM.yyyy"
//                   maxDate={new Date()}
//                   customInput={<InputSum />}
//                   required
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
//                     top: '100%',
//                   }}
//                 />
//               </DataContainer>
//             </Wrapper>
//             <InputContainer>
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
//             </InputContainer>

//             <PrimaryButton textBtn="add" disabled={!dirty} type="submit" />
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };
