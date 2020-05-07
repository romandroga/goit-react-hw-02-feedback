import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [good, neutral, bad] = Object.keys(options);
  const { button } = styles;
  return (
    <>
      <button type="button" className={button} onClick={onLeaveFeedback} option={good}>Good</button>
      <button type="button" className={button} onClick={onLeaveFeedback} option={neutral}>Neutral</button>
      <button type="button" className={button} onClick={onLeaveFeedback} option={bad}>Bad</button>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
