import PropTypes from 'prop-types';
import { Button } from './PrimaryButton.styled';

export const PrimaryButton = ({ textBtn, onClick }) => {
  return (
    <Button type="submit" onClick={onClick}>
      {textBtn}
    </Button>
  );
};

PrimaryButton.propTypes = {
  textBtn: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
