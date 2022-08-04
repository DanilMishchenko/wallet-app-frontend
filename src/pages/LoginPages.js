import { LoginForm } from '../components/LoginForm/LoginForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPages() {
  return (
    <>
      <ToastContainer />
      <LoginForm />
    </>
  );
}
