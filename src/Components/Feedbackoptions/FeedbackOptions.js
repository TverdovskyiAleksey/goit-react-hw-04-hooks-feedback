import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback, feedbackKeys }) {
  return (
    <ul className={styles.list}>
      {feedbackKeys.map(feedback => (
        <li key={feedback}>
          <button
            type="button"
            name={feedback}
            className={styles.btn}
            onClick={onLeaveFeedback}
          >
            {feedback}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  feedbackKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};
