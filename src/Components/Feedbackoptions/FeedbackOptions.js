import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button
        type="button"
        className={styles.btn}
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.btn}
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.btn}
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.prototype = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
