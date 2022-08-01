import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

import { ReactComponent as EmailIcon } from '../../images/email.svg';
import { ReactComponent as PasswordIcon } from '../../images/passwordLock.svg';

import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';

import { TextInput } from '../TextInput/TextInput';

import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

import { Div, InputForm, ButtonDiv } from './LoginForm.styled';

const schema = Yup.object({
  email: Yup.string()
    .email('no valid email')
    .required('this field is required'),
  password: Yup.string()
    .min(6, '6 symbols minimum')
    .max(12, '12 symbols maximum')
    .required('this field is required'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (email, password) => {
    dispatch(authOperations.logIn({ email, password }));
    console.log('log in');
  };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.email, values.password);
    resetForm();
  };

  return (
    <>
      <Div>
        <Formik
          initialValues={initialValues}
          isValidating={false}
          validateOnBlur
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ dirty, isValid }) => (
            <Form>
              <InputForm>
                <TextInput
                  label={<EmailIcon />}
                  name="email"
                  placeholder="E-mail"
                  type="email"
                />

                <TextInput
                  label={<PasswordIcon />}
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </InputForm>
              <ButtonDiv>
                <PrimaryButton
                  disabled={!(isValid && dirty)}
                  type="submit"
                  textBtn="log in"
                />
              </ButtonDiv>
            </Form>
          )}
        </Formik>
        <ButtonDiv>
          <NavLink to="/register">
            <SecondaryButton textBtn="register" />
          </NavLink>
        </ButtonDiv>
      </Div>
    </>
  );
};
