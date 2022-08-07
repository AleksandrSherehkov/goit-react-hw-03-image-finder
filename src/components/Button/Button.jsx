import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ cbOnClick }) => {
  return (
    <button className={s.Button} type="button" onClick={cbOnClick}>
      Load more
    </button>
  );
};

Button.prototype = {
  onNextFetch: PropTypes.func.isRequired,
};

export default Button;
