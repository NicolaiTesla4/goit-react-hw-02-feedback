import React from 'react';
import css from './FeddbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.buttons}>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
      ))}
    </ul>
  );
};


export default FeedbackOptions;  