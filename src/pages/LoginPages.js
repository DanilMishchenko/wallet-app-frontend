import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoginForm } from '../components/LoginForm/LoginForm';

export default function LoginPages() {
  return (
    <>
      <ToastContainer />
      <LoginForm />
    </>
  );
}
