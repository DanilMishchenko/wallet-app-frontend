import s from './ButtonAddTransactions.module.css';

import Plus from '../../images/plusIcon.svg';

const ButtonAddTransactions = ({ onClick }) => {
  return (
    <button className={`${s.button} ${s.position}`} onClick={onClick}>
      <img className={s.icon} src={Plus} alt="Add transaction" />
    </button>
  );
};
export default ButtonAddTransactions;
