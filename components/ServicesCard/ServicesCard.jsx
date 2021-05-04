import React from 'react';
import styles from './styles.module.scss';

const ServicesCard = ({ title, description, imgSrc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.badgeContainer}>
        <div className={styles.badge}>
          <div className={styles.imgContainer}>
            <img src={imgSrc} alt={title} />
          </div>
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServicesCard;
