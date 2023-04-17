import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={css.button} onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={css.button} onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
