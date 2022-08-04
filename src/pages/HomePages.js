import { ButtonAddTransactions } from '../components/ButtonAddTransactions/ButtonAddTransactions';
import { HomeTab } from '../components/HomeTab/HomeTab';
import { ModalAddTransaction } from '../components/ModalAddTransaction/ModalAddTransaction';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { modalTransition } from '../redux/global/globalSlice';
import { getIsModalTransitionOpen } from '../redux/global/globalSlice';
export default function HomePages() {
  const dispatch = useDispatch();

  const ModalTransitionOpen = useSelector(getIsModalTransitionOpen);
  const onModal = () => {
    dispatch(modalTransition(true));
  };
  const onModalClose = () => {
    dispatch(modalTransition(false));
  };
  return (
    <>
      <h1>HomePages</h1>
      <HomeTab />
      <ButtonAddTransactions onModal={onModal} />
      {ModalTransitionOpen && <ModalAddTransaction onModal={onModalClose} />}
    </>
  );
}
