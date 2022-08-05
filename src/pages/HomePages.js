import ButtonAddTransactions from '../components/ButtonAddTransactions/ButtonAddTransactions';
import { HomeTab } from '../components/HomeTab/HomeTab';
//import  ModalAddTransaction  from '../components/ModalAddTransaction/ModalAddTransaction';
import { globalActions } from '../redux/global';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../components/Modal';
import globalSelectors from '../redux/global/global-selectors';
// import { modalTransition } from '../redux/global/global-slice';
//import { getIsModalTransitionOpen } from '../redux/global/global-slice';
export default function HomePages() {
  const dispatch = useDispatch();
  //const isModalLogoutOpen = useSelector(globalSelectors.getModalLogoutOpen)
  //  const isModalAddTransactionOpen = useSelector(
  //     globalSelectors.getIsModalAddTransactionOpen,
  //   )
  //const isModalLogoutOpen = useSelector(globalSelectors.getModalLogoutOpen)
  //const isModalAddTransactionOpen = useSelector(
  //globalSelectors.getIsModalAddTransactionOpen,
  //)
  // const ModalTransitionOpen = useSelector(getIsModalTransitionOpen);
  // const onModal = () => {
  //   dispatch(modalTransition(true));
  // };
  // const onModalClose = () => {
  //   dispatch(modalTransition(false));
  // };
  return (
    <>
      <h1>HomePages</h1>
      <HomeTab />

      <ButtonAddTransactions
        onClick={() => dispatch(globalActions.openModalAddTransaction())}
      />
    </>
  );
}
