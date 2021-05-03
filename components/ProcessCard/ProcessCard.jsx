import React from 'react';
import styles from './styles.module.scss';

const ProcessCard = ({ title, description, imgSrc, number }) => {
  return (
    <div className={styles.container}>
      <span className={styles.number}>{number}</span>
      <div className={styles.imgContainer}>
        <img src={imgSrc} alt={title} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProcessCard;
