import PropTypes from 'prop-types';
import css from './Statistic.module.css';

const Statistic = ({
  values: { good, neutral, bad },
  countTotal,
  countPositive,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {countTotal()}</li>
      <li className={css.item}>Positive feedback: {countPositive()}</li>
    </ul>
  );
};

export default Statistic;

Statistic.propTypes = {
  values: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  countTotal: PropTypes.func.isRequired,
  countPositive: PropTypes.func.isRequired,
};
