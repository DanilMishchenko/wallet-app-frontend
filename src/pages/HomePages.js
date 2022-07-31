import { ButtonAddTransactions } from '../components/ButtonAddTransactions/ButtonAddTransactions';
import { HomeTab } from '../components/HomeTab/HomeTab';
import { ModalAddTransaction } from '../components/ModalAddTransaction/ModalAddTransaction';

export default function HomePages() {
  return (
    <>
      <h1>HomePages</h1>
      <HomeTab />
      <ButtonAddTransactions />
      <ModalAddTransaction />
    </>
  );
}
