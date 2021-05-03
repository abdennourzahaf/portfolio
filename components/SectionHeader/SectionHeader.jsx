import React from 'react';
import styles from './styles.module.scss';

const SectionHeader = ({ title, primary, secondary }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <h1 className={styles.primary}>{primary}</h1>
      <p className={styles.secondary}>{secondary}</p>
    </div>
  );
};

export default SectionHeader;
