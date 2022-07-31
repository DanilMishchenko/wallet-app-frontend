import PropTypes from 'prop-types';
import { Button } from './PrimaryButton.styled';

export const PrimaryButton = ({ textBtn, onClick, disabled }) => {
  return (
    <Button type="submit" onClick={onClick} disabled={disabled}>
      {textBtn}
    </Button>
  );
};

PrimaryButton.propTypes = {
  textBtn: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
