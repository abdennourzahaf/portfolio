import React from 'react';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import styles from './styles.module.scss';

const TestimonialCard = ({ quote, authorName, authorTitle, authorPicture }) => {
  return (
    <div className={styles.container}>
      <p className={styles.quote}>{quote}</p>
      <div className={styles.author}>
        <div className={styles.authorPicture}>
          <OptimizedImage src={authorPicture} alt={authorName} />
        </div>
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>{authorName}</p>
          <p className={styles.authorTitle}>{authorTitle}</p>
        </div>
      </div>
      <div className={styles.quoteImg}>
        <OptimizedImage src='quote.png' alt='quote' />
      </div>
    </div>
  );
};

export default TestimonialCard;
