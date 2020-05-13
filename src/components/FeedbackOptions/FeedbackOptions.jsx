import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  const { button } = styles;
  return (
    <>
      <button type="button" className={button} onClick={onLeaveFeedback} name="good">Good</button>
      <button type="button" className={button} onClick={onLeaveFeedback} name="neutral">Neutral</button>
      <button type="button" className={button} onClick={onLeaveFeedback} name="bad">Bad</button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
