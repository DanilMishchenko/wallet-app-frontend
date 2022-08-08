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
import logo from '../../images/logoApp.svg';
import girl from '../../images/registerMiniature.svg';
import eye from '../../images/eye.svg';
import eyeSlash from '../../images/eye-slash.svg';

import {
  MainContainer,
  ImagineBox,
  Img,
  Title,
  FormBackgraund,
  LogoTitle,
  FormWrapper,
  InputForm,
  ButtonDiv,
  Wrapper,
  PasswordEye,
} from './RegistrationForm.styled';

export const RegisterForm = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
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
  const toggleClick = () => {
    setShowPassword(!showPassword);
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
    marginTop: '10px',
    marginBottom: '-20px',
    backgroundColor: '#E5F1EF',
  });

  const validationForm = Yup.object({
    email: Yup.string()
      .email('No valid email')
      .min(10, 'Too short')
      .max(30, 'Too long')
      .required('This field is required')
      .test('isValid', 'No valid', email => {
        if (email === undefined) {
          email = ' ';
        }
        if (
          email[0] === '-' ||
          email.indexOf('@') < 2 ||
          /[а-яА-ЯЁёІіЇїҐґ]/.test(email) ||
          email[0] === ' '
        ) {
          return false;
        }
        return true;
      }),

    password: Yup.string()
      .min(6, '6 symbols minimum')
      .max(16, '16 symbols maximum')
      .required('This field is required')
      .test('isValid', 'Has to contain letters and numbers', password => {
        if (/[A-Za-zА-Яа-я]/.test(password) && /[0-9]/.test(password)) {
          return true;
        } else return false;
      })
      .matches(/^$/, 'Space is not allowed'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('This field is required'),
    name: Yup.string()
      .typeError()
      .min(1, '1 symbol minimum')
      .max(12, '12 symbols maximum')
      .matches(
        /^[A-Za-zА-Яа-я0-9ІіЇїҐґ]*$/,
        'Only letters and numbers are allowed',
      )
      .required('This field is required'),
  });
  return (
    <MainContainer>
      <ImagineBox>
        <Img src={girl} alt="girl" />
        <Title>Finance App</Title>
      </ImagineBox>
      <FormBackgraund>
        <FormWrapper>
          <Wrapper>
            <img src={logo} alt="girl" />
            <LogoTitle>Wallet</LogoTitle>
          </Wrapper>
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
              navigate('/');
            }}
          >
            {({ dirty, isValid }) => (
              <Form>
                <InputForm>
                  <TextInput
                    required
                    label={<EmailIcon />}
                    name="email"
                    placeholder="E-mail"
                    type="email"
                  />
                  <div style={{ position: 'relative' }}>
                    <TextInput
                      required
                      label={<PasswordIcon />}
                      name="password"
                      placeholder="Password"
                      type={showPassword ? 'password' : 'text'}
                      onInput={e => setPassword(e.target.value)}
                    />

                    <PasswordEye onClick={toggleClick}>
                      {showPassword ? (
                        <img
                          src={eyeSlash}
                          width="21px"
                          heigth="21px"
                          alt="hidden"
                        />
                      ) : (
                        <img
                          src={eye}
                          width="21px"
                          heigth="21px"
                          alt="visibility"
                        />
                      )}
                    </PasswordEye>
                  </div>

                  <TextInput
                    required
                    label={<PasswordIcon />}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    type={showPassword ? 'password' : 'text'}
                  />

                  <div style={changeProgressStyle()}>
                    <div style={changePasswordColor()}></div>
                  </div>

                  <TextInput
                    required
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
              <SecondaryButton textBtn="LOG IN" />
            </NavLink>
          </ButtonDiv>
        </FormWrapper>
      </FormBackgraund>
    </MainContainer>
  );
};
