import { useSelector, useDispatch } from 'react-redux';

import {
  getIsModalTransitionOpen,
  modalTransition,
} from '../redux/global/globalSlice';

import { ButtonAddTransactions } from '../components/ButtonAddTransactions/ButtonAddTransactions';
import { ModalAddTransaction } from '../components/ModalAddTransaction/ModalAddTransaction';
import { HomeTab } from '../components/HomeTab/HomeTab';

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
      <HomeTab />
      <ButtonAddTransactions onModal={onModal} />
      {ModalTransitionOpen && <ModalAddTransaction onModal={onModalClose} />}
    </>
  );
}
