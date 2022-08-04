import { LoginForm } from '../components/LoginForm/LoginForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPages() {
  return (
    <>
      <ToastContainer />
      <LoginForm />
    </>
  );
}
