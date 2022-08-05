import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({
  title = 'title',
  typeButton = 'primary',
  onClick,
  className,
  ...props
}) => (
  <button
    className={
      typeButton.includes('primary')
        ? `${s.primary} ${className ? className : ''}`
        : `${s.secondary} ${className ? className : ''}`
    }
    onClick={onClick}
    {...props}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  typeButton: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
};

export default Button;
