import React from 'react';
import SliderArrow from '../SVG/SliderArrow';
import styles from './styles.module.scss';

const SliderButton = ({ className, dark, ...restProps }) => {
  return (
    <button
      className={
        styles.button + ' ' + className + (dark ? ' ' + styles.dark : '')
      }
      {...restProps}>
      <SliderArrow />
    </button>
  );
};

export default SliderButton;
