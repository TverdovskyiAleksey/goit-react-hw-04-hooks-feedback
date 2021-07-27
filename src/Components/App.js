import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './Feedbackoptions';
import Notification from './Notification';
import Section from './Section';
import Container from './Container';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = good + bad + neutral;
    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100,
    );
    const options = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
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
}

export default App;
