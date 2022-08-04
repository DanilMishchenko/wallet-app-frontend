import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPages() {
  return (
    <>
      <ToastContainer />
      <RegisterForm />;
    </>
  );
}
