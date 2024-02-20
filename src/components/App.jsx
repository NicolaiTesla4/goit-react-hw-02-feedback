/* export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
}; 
 */

import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions.jsx';
import Statistics from './Statistics.jsx';
import Section from './Section.jsx';
import Notification from './Notification.jsx';

export const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (type) => {
    setFeedbackCounts(prevCounts => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedbackCounts).reduce((total, count) => total + count, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) return 0;
    return Math.round((feedbackCounts.good / total) * 100);
  };

  const hasFeedback = countTotalFeedback() > 0;

  return (
    <div
      style={{/* 
        height: '100vh', */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'column',
        fontSize: 40,
        }} 
      > 
      <Section title="Please leave feedback">
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {hasFeedback ? (
          <Statistics
            good={feedbackCounts.good}
            neutral={feedbackCounts.neutral}
            bad={feedbackCounts.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;