import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

import { ReactComponent as EmailIcon } from '../../images/email.svg';
import { ReactComponent as PasswordIcon } from '../../images/passwordLock.svg';
import { ReactComponent as NameIcon } from '../../images/nameIcon.svg';

import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';

import { TextInput } from '../TextInput/TextInput';

import { Div, InputForm, ButtonDiv } from './RegistrationForm.styled';

export const RegisterForm = () => {
  const validationForm = Yup.object({
    email: Yup.string().email('no valid email').required('Required'),
    password: Yup.string()
      .min(6, '6 symbols minimum')
      .max(14, '14 symbols maximum')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('Required'),
    name: Yup.string()
      .typeError()
      .min(1, '1 symbol minimum')
      .max(12, '12 symbols maximum')
      .required('Required'),
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
          onSubmit={values => console.log(values)}
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
                />

                <TextInput
                  label={<PasswordIcon />}
                  name="confirmPassword"
                  placeholder="Confirm password"
                />

                <TextInput
                  label={<NameIcon />}
                  name="name"
                  placeholder="First name"
                />
              </InputForm>
              <ButtonDiv>
                <PrimaryButton
                  //    disabled={true}
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
