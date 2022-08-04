import plus from '../../images/plusIcon.svg';

import { Div } from './buttonAddTransition.styled';

export const ButtonAddTransactions = ({ onModal }) => {
  return (
    <>
      <Div onClick={onModal}>
        <img src={plus} alt="girl" />
      </Div>
    </>
  );
};
