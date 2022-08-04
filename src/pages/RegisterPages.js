import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export default function RegisterPages() {
  return (
    <>
      <ToastContainer />
      <RegisterForm />;
    </>
  );
}
