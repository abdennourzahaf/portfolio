import React from 'react';
import LinkIcon from '../../SVG/LinkIcon';
import styles from './styles.module.scss';

const PrimaryButton = ({ label, block, ...restProps }) => {
  return (
    <a className={`${styles.button} ${block && styles.block}`} {...restProps}>
      {label}
      <span className={styles.icon}>
        <LinkIcon />
      </span>
    </a>
  );
};

export default PrimaryButton;
