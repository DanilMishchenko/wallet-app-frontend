import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

import { ReactComponent as EmailIcon } from '../../images/email.svg';
import { ReactComponent as PasswordIcon } from '../../images/passwordLock.svg';
import { ReactComponent as NameIcon } from '../../images/nameIcon.svg';

import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';

import { TextInput } from '../TextInput/TextInput';

import { Div, InputForm, ButtonDiv } from './RegistrationForm.styled';

export const RegisterForm = () => {
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const number = password.length;

  const progressColor = () => {
    if (number < 6) {
      return '#FF6596';
    } else {
      return '#24CCA7';
    }
  };

  const changePasswordColor = () => ({
    width: `${number * 8.5}%`,
    maxWidth: '100%',
    height: '4px',
    background: progressColor(),
    boxShadow: '0px 1px 8px rgba(36, 204, 167, 0.5)',
    borderRadius: '4px',
  });

  const changeProgressStyle = () => ({
    maxWidth: '100%',
    height: '4px',
    marginTop: '-20px',
    marginBottom: '20px',
    backgroundColor: '#E5F1EF',
  });

  const validationForm = Yup.object({
    email: Yup.string()
      .email('no valid email')
      .required('This field is required'),
    password: Yup.string()
      .min(6, '6 symbols minimum')
      .max(12, '12 symbols maximum')
      .required('This field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('This field is required'),
    name: Yup.string()
      .typeError()
      .min(1, '1 symbol minimum')
      .max(12, '12 symbols maximum')
      .required('This field is required'),
  });
  return (
    <>
      <Div>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
          }}
          isValidating={false}
          validateOnBlur
          validationSchema={validationForm}
          onSubmit={({ email, password, name }) => {
            dispatch(authOperations.register({ email, password, name }));
            navigate('/login');
          }}
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
                  onInput={e => setPassword(e.target.value)}
                />

                <TextInput
                  label={<PasswordIcon />}
                  name="confirmPassword"
                  placeholder="Confirm password"
                />
                <div style={changeProgressStyle()}>
                  <div style={changePasswordColor()}></div>
                </div>

                <TextInput
                  label={<NameIcon />}
                  name="name"
                  placeholder="First name"
                />
              </InputForm>
              <ButtonDiv>
                <PrimaryButton
                  disabled={!(isValid && dirty)}
                  type="submit"
                  textBtn="REGISTER"
                />
              </ButtonDiv>
            </Form>
          )}
        </Formik>
        <ButtonDiv>
          <NavLink to="/Login">
            <SecondaryButton
              textBtn="LOG IN"
              onClick={() => console.log('hi')}
            />
          </NavLink>
        </ButtonDiv>
      </Div>
    </>
  );
};
