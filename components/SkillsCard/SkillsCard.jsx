import React from 'react';
import styles from './styles.module.scss';

const SkillsCard = ({ title, bullets }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.bullets}>
        {bullets.map(bullet => (
          <li className={styles.bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
