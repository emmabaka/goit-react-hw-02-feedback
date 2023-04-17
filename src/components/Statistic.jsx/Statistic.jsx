import PropTypes from 'prop-types';
import css from './Statistic.module.css';

const Statistic = ({
  values: { Good, Neutral, Bad },
  countTotal,
  countPositive,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {Good}</li>
      <li className={css.item}>Neutral: {Neutral}</li>
      <li className={css.item}>Bad: {Bad}</li>
      <li className={css.item}>Total: {countTotal()}</li>
      <li className={css.item}>Positive feedback: {countPositive()}</li>
    </ul>
  );
};

export default Statistic;

Statistic.propTypes = {
  values: PropTypes.exact({
    Good: PropTypes.number.isRequired,
    Neutral: PropTypes.number.isRequired,
    Bad: PropTypes.number.isRequired,
  }).isRequired,
  countTotal: PropTypes.func.isRequired,
  countPositive: PropTypes.func.isRequired,
};
