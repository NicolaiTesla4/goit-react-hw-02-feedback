import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions.jsx';
import Statistics from './Statistics.jsx';
import Section from './Section.jsx';
import Notification from './Notification.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackCounts: {
        good: 0,
        neutral: 0,
        bad: 0
      }
    };
  }

  handleFeedback = (type) => {
    this.setState(prevState => ({
      feedbackCounts: {
        ...prevState.feedbackCounts,
        [type]: prevState.feedbackCounts[type] + 1
      }
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.feedbackCounts;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state.feedbackCounts;
    if (total === 0) return 0;
    return Math.round((good / total) * 100);
  };

  render() {
    const { feedbackCounts } = this.state;
    const hasFeedback = this.countTotalFeedback() > 0;

    return (
      <div style={{ padding: 10 }}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {hasFeedback ? (
            <Statistics
              good={feedbackCounts.good}
              neutral={feedbackCounts.neutral}
              bad={feedbackCounts.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
