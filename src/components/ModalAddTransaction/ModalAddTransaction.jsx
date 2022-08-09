import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import Switch from 'react-switch';
import { useDispatch } from 'react-redux';
import {
  Overlay,
  Container,
  Title,
  IncomeTrigger,
  ExpenseTrigger,
  FormContainer,
  SwitchContainer,
  Wrapper,
  CloseButton,
} from './ModalAddTransition.styled';
import plusIcon from '../../images/plusIcon.svg';
import minusIcon from '../../images/minusIcon.svg';
import { TransactionForm } from './TransactionForm/TransactionForm';
//import { ExpenseForm } from './ExpenceForm/ExpenseForm';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';
import {
  addTransaction,
  fetchTransactions,
} from '../../redux/transactions/transactions-operations';
import closeModal from '../../images/closeModal.svg';
import { fetchBalance } from '../../redux/balance';

const modalRoot = document.querySelector('#modal-transaction');

export const ModalAddTransaction = ({ onModal }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  const IncomeOptions = [
    { value: 'Regular Income', label: 'Regular Income' },
    { value: 'Irregular Income', label: 'Irregular Income' },
  ];

  const ExpenseOptions = [
    { value: 'Basic expenses', label: 'Basic expenses' },
    { value: 'Products', label: 'Products' },
    { value: 'Car', label: 'Car' },
    { value: 'Self care', label: 'Self care' },
    { value: 'Child care', label: 'Child care' },
    { value: 'Household products', label: 'Household products' },
    { value: 'Education', label: 'Education' },
    { value: 'Other expenses', label: 'Other expenses' },
    { value: 'Leisure', label: 'Leisure' },
  ];

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      dispatch(fetchTransactions());
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, onModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onModal();
    }
  };

  const handleChange = () => setChecked(!checked);

  const handleTransactionSubmit = async values => {
    dispatch(addTransaction({ ...values, type: !checked }));

    await dispatch(fetchTransactions());
    await dispatch(fetchBalance());
    onModal();
    // toast.success(`transaction amount ${values.sum} was saved`);
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Wrapper>
        <CloseButton type="button" onClick={() => onModal()}>
          <img src={closeModal} alt="closeModal" />
        </CloseButton>
        <Title>Add transaction</Title>
        <Container>
          <IncomeTrigger checked={checked}>Income</IncomeTrigger>
          <SwitchContainer>
            <Switch
              checked={checked}
              onChange={handleChange}
              handleDiameter={44}
              offColor="#E0E0E0"
              onColor="#E0E0E0"
              offHandleColor="#24CCA7"
              onHandleColor="#FF6596"
              activeBoxShadow="none"
              height={40}
              width={80}
              borderRadius={30}
              uncheckedIcon={false}
              checkedIcon={false}
              uncheckedHandleIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    backgroundColor: 'transparent',
                    borderRadius: '30px',
                    boxShadow: '0px 6px 15px rgba(36, 204, 167, 0.5)',
                  }}
                >
                  <img src={plusIcon} alt="plus" />
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    backgroundColor: 'transparent',
                    borderRadius: '30px',
                    boxShadow: '0px 6px 15px rgba(255, 101, 150, 0.5)',
                  }}
                >
                  <img src={minusIcon} alt="minus" />
                </div>
              }
            />
          </SwitchContainer>
          <ExpenseTrigger checked={checked}>Expense</ExpenseTrigger>
        </Container>
        <FormContainer>
          <TransactionForm
            initialValues={{
              type: !checked ? true : false,
              category: '',
              sum: '',
              date: new Date(),
            }}
            onSubmit={handleTransactionSubmit}
            options={!checked ? IncomeOptions : ExpenseOptions}
          />
        </FormContainer>
        <SecondaryButton textBtn="cancel" onClick={() => onModal()} />
      </Wrapper>
    </Overlay>,
    modalRoot,
  );
};

// import { createPortal } from 'react-dom';
// import { useEffect, useState } from 'react';
// import Switch from 'react-switch';
// import { useDispatch } from 'react-redux';
// import {
//   Overlay,
//   Container,
//   Title,
//   IncomeTrigger,
//   ExpenseTrigger,
//   FormContainer,
//   SwitchContainer,
//   Wrapper,
//   CloseButton,
// } from './ModalAddTransition.styled';
// import plusIcon from '../../images/plusIcon.svg';
// import minusIcon from '../../images/minusIcon.svg';
// import { IncomeForm } from './IncomeForm/IncomeForm';
// import { ExpenseForm } from './ExpenceForm/ExpenseForm';
// import { SecondaryButton } from '../SecondaryButton/SecondaryButton';
// import { fetchTransactions } from '../../redux/transactions/transactions-operations';
// import closeModal from '../../images/closeModal.svg';

// const modalRoot = document.querySelector('#modal-transaction');

// export const ModalAddTransaction = ({ onModal }) => {
//   const dispatch = useDispatch();
//   const [checked, setChecked] = useState(true);

//   useEffect(() => {
//     const handleKeyDown = e => {
//       if (e.code === 'Escape') {
//         onModal();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       dispatch(fetchTransactions());
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [dispatch, onModal]);

//   const handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       onModal();
//     }
//   };

//   const handleChange = nextChecked => {
//     setChecked(nextChecked);
//   };

//   return createPortal(
//     <Overlay onClick={handleBackdropClick}>
//       <Wrapper>
//         <CloseButton type="button" onClick={() => onModal()}>
//           <img src={closeModal} alt="closeModal" />
//         </CloseButton>
//         <Title>Add transaction</Title>
//         <Container>
//           <IncomeTrigger checked={checked}>Income</IncomeTrigger>
//           <SwitchContainer>
//             <Switch
//               checked={checked}
//               onChange={handleChange}
//               handleDiameter={44}
//               offColor="#E0E0E0"
//               onColor="#E0E0E0"
//               offHandleColor="#24CCA7"
//               onHandleColor="#FF6596"
//               activeBoxShadow="none"
//               height={40}
//               width={80}
//               borderRadius={30}
//               uncheckedIcon={false}
//               checkedIcon={false}
//               uncheckedHandleIcon={
//                 <div
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     height: '100%',
//                     backgroundColor: 'transparent',
//                     borderRadius: '30px',
//                     boxShadow: '0px 6px 15px rgba(36, 204, 167, 0.5)',
//                   }}
//                 >
//                   <img src={plusIcon} alt="plus" />
//                 </div>
//               }
//               checkedHandleIcon={
//                 <div
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     height: '100%',
//                     backgroundColor: 'transparent',
//                     borderRadius: '30px',
//                     boxShadow: '0px 6px 15px rgba(255, 101, 150, 0.5)',
//                   }}
//                 >
//                   <img src={minusIcon} alt="minus" />
//                 </div>
//               }
//             />
//           </SwitchContainer>
//           <ExpenseTrigger checked={checked}>Expense</ExpenseTrigger>
//         </Container>
//         <FormContainer>
//           {!checked ? (
//             <IncomeForm onClose={onModal} />
//           ) : (
//             <ExpenseForm onClose={onModal} />
//           )}
//         </FormContainer>
//         <SecondaryButton textBtn="cancel" onClick={() => onModal()} />
//       </Wrapper>
//     </Overlay>,
//     modalRoot,
//   );
// };
