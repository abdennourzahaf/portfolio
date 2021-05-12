import React from 'react';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import styles from './styles.module.scss';

const ServicesCard = ({ title, description, imgSrc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.badgeContainer}>
        <div className={styles.badge}>
          <div className={styles.imgContainer}>
            <OptimizedImage src={imgSrc} alt={title} />
          </div>
        </div>
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServicesCard;
