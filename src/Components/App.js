import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './Feedbackoptions';
import Notification from './Notification';
import Section from './Section';
import Container from './Container';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = good + bad + neutral;
  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100,
  );

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}

// class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = feedback => {
//     this.setState(prevState => ({
//       [feedback]: prevState[feedback] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     const countTotalFeedback = good + bad + neutral;
//     const countPositiveFeedbackPercentage = Math.round(
//       (good / countTotalFeedback) * 100,
//     );
//     const options = Object.keys(this.state);

//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {countTotalFeedback ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotalFeedback}
//               positivePercentage={countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
