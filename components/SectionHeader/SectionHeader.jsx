import React from 'react';
import styles from './styles.module.scss';

const SectionHeader = ({ title, primary, secondary }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.primary}>{primary}</h3>
      <p className={styles.secondary}>{secondary}</p>
    </div>
  );
};

export default SectionHeader;
