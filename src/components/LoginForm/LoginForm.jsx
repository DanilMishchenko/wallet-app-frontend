import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import authOperations from '../../redux/auth/auth-operations';

import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';
import { TextInput } from '../TextInput/TextInput';

import { ReactComponent as EmailIcon } from '../../assets/images/email.svg';
import { ReactComponent as PasswordIcon } from '../../assets/images/passwordLock.svg';
import loginImage from '../../assets/images/loginMiniature.svg';
import eye from '../../assets/images/eye.svg';
import eyeSlash from '../../assets/images/eye-slash.svg';
import logo from '../../assets/images/logoApp.svg';

import {
  Wrapper,
  ImageBox,
  Img,
  Title,
  FormBackgraund,
  FormWrapper,
  InputForm,
  ButtonDiv,
  PasswordEye,
  LogoWrapper,
  Logo,
  LogoTitle,
} from './LoginForm.styled';

const schema = Yup.object({
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
        /[а-яА-ЯЁёІі]/.test(email)
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
    }),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = (email, password) => {
    dispatch(authOperations.logIn({ email, password }));
  };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.email, values.password);
    resetForm();
  };

  const toggleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Wrapper>
      <ImageBox>
        <Img src={loginImage} alt="boy and phone" />
        <Title>Finance App</Title>
      </ImageBox>
      <FormBackgraund>
        <FormWrapper>
          <LogoWrapper>
            <Logo src={logo} alt="logo" />
            <LogoTitle>Wallet</LogoTitle>
          </LogoWrapper>
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
                  <div style={{ position: 'relative', marginBottom: '40px' }}>
                    <TextInput
                      label={<PasswordIcon />}
                      name="password"
                      placeholder="Password"
                      type={showPassword ? 'password' : 'text'}
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
        </FormWrapper>
      </FormBackgraund>
    </Wrapper>
  );
};
