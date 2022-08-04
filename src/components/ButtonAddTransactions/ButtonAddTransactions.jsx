import plus from '../../images/plusIcon.svg';
import { Container } from './ButtonAddTransition.styled';

export const ButtonAddTransactions = ({ onModal }) => {
  return (
    <>
      <Container onClick={onModal}>
        <img src={plus} alt="girl" />
      </Container>
    </>
  );
};
