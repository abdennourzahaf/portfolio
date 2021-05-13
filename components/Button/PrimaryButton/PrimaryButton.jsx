import React from 'react';
import LinkIcon from '../../SVG/LinkIcon';
import styles from './styles.module.scss';

const PrimaryButton = React.forwardRef((props, ref) => {
  const { className, label, block, ...restProps } = props;
  return (
    <a
      className={`${styles.button} ${block && styles.block} ${className}`}
      {...restProps}>
      {label}
      <span className={styles.icon}>
        <LinkIcon />
      </span>
    </a>
  );
});

export default PrimaryButton;
