import React from 'react';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import styles from './styles.module.scss';

const BackgroundPattern = ({ position, single }) => {
  return (
    <div className={styles.container + ' ' + styles[position]}>
      {single ? (
        <OptimizedImage src='bd-element-2.png' alt='background' />
      ) : (
        <>
          <OptimizedImage src='bd-element-1.png' alt='background' />
          <OptimizedImage src='bd-element-2.png' alt='background' />
          <OptimizedImage src='bd-element-1.png' alt='background' />
          <OptimizedImage src='bd-element-2.png' alt='background' />
          <OptimizedImage src='bd-element-1.png' alt='background' />
          <OptimizedImage src='bd-element-2.png' alt='background' />
        </>
      )}
    </div>
  );
};

export default BackgroundPattern;
