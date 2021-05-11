import React from 'react';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import styles from './styles.module.scss';

const TestimonialCard = ({ quote }) => {
  return (
    <div className={styles.container}>
      <div className={styles.quoteImg}>
        <OptimizedImage src='quote.png' alt='quote' />
      </div>
      <p className={styles.quote}>{quote}</p>
    </div>
  );
};

export default TestimonialCard;
