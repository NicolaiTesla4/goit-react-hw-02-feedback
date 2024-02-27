import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className={css.statistics}>
        <li><span>Good: {good}</span></li>
        <li><span>Neutral: {neutral}</span></li>
        <li><span>Bad: {bad}</span></li>
        <li><span>Total: {total}</span></li>
        <li>Positive Feedback Percentage: {positivePercentage}%</li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
