import React from 'react';
import styles from './styles.module.scss';

const BackgroundPattern = ({ position, single }) => {
  return (
    <div className={styles.container + ' ' + styles[position]}>
      {single ? (
        <img src='/assets/bd-element-2.png' alt='' />
      ) : (
        <>
          <img src='/assets/bd-element-1.png' alt='' />
          <img src='/assets/bd-element-2.png' alt='' />
          <img src='/assets/bd-element-1.png' alt='' />
          <img src='/assets/bd-element-2.png' alt='' />
          <img src='/assets/bd-element-1.png' alt='' />
          <img src='/assets/bd-element-2.png' alt='' />
        </>
      )}
    </div>
  );
};

export default BackgroundPattern;
