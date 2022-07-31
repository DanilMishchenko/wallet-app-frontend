import PropTypes from 'prop-types';
import { Button } from './SecondaryButton.styled';

export const SecondaryButton = ({ textBtn, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {textBtn}
    </Button>
  );
};

SecondaryButton.propTypes = {
  textBtn: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
