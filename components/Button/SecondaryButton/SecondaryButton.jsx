import React from 'react';
import LinkIcon from '../../SVG/LinkIcon';
import styles from './styles.module.scss';

const SecondaryButton = React.forwardRef((props, ref) => {
  const { label, block, ...restProps } = props;
  return (
    <a className={`${styles.button} ${block && styles.block}`} {...restProps}>
      {label}
      <span className={styles.icon}>
        <LinkIcon />
      </span>
    </a>
  );
});

export default SecondaryButton;
