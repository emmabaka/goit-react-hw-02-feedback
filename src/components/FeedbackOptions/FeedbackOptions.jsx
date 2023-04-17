import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.wrapper}>
      {options.map(item => {
        return (
          <button key={item} className={css.button} onClick={onLeaveFeedback}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
