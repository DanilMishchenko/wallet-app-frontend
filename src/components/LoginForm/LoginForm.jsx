import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { ReactComponent as EmailIcon } from '../../images/email.svg';
import { ReactComponent as PasswordIcon } from '../../images/passwordLock.svg';

import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';

import { TextInput } from '../TextInput/TextInput';

import authOperations from '../../redux/auth/auth-operations';

import loginImage from '../../images/loginMiniature.svg';
import eye from '../../images/eye.svg';
import eyeSlash from '../../images/eye-slash.svg';
import logo from '../../images/logoApp.svg';

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
  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = (email, password) => {
    dispatch(authOperations.logIn({ email, password }));
    console.log('log in');
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
