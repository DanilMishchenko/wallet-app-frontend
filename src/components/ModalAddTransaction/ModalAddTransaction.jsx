import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import Switch from 'react-switch';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../redux/transactions/transactions-operations';
import { getPage } from '../../redux/transactions/transactions-selectors';
import { IncomeForm } from './IncomeForm/IncomeForm';
import { ExpenseForm } from './ExpenceForm/ExpenseForm';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';
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
import plusIcon from '../../assets/images/plusIcon.svg';
import minusIcon from '../../assets/images/minusIcon.svg';
import closeModal from '../../assets/images/closeModal.svg';

const modalRoot = document.querySelector('#modal-transaction');

export const ModalAddTransaction = ({ onModal }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);
  const page = useSelector(getPage);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      dispatch(fetchTransactions(page));
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, onModal, page]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onModal();
    }
  };

  const handleChange = nextChecked => {
    setChecked(nextChecked);
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
          {!checked ? (
            <IncomeForm onClose={onModal} />
          ) : (
            <ExpenseForm onClose={onModal} />
          )}
        </FormContainer>
        <SecondaryButton textBtn="cancel" onClick={() => onModal()} />
      </Wrapper>
    </Overlay>,
    modalRoot,
  );
};
