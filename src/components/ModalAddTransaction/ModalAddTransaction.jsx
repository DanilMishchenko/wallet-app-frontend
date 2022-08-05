import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import Switch from 'react-switch';

import {
  Overlay,
  Container,
  Title,
  IncomeTrigger,
  ExpenseTrigger,
  FormContainer,
  SwitchContainer,
} from './ModalAddTransition.styled';
import plusIcon from '../../images/plusIcon.svg';
import minusIcon from '../../images/minusIcon.svg';
import { IncomeForm } from './IncomeForm/IncomeForm';
import { ExpenceForm } from './ExpenceForm/ExpenseForm';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';

const modalRoot = document.querySelector('#modal-transaction');

export const ModalAddTransaction = ({ onModal }) => {
  const [checked, setChecked] = useState(false);

  //Работа модалки
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onModal();
    }
  };

  //Работа свитча
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
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
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="10px 10px 15px rgba(255, 101, 150, 0.5)"
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
        {!checked ? <IncomeForm /> : <ExpenceForm />}
      </FormContainer>
      <SecondaryButton textBtn="cancel" />
      <button onClick={() => onModal()}>exit</button>
    </Overlay>,
    modalRoot,
  );
};
