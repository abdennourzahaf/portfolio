import React from 'react';
import SliderArrow from '../SVG/SliderArrow';
import styles from './styles.module.scss';

const SliderButton = ({ className, ...restProps }) => {
  return (
    <button className={styles.button + ' ' + className} {...restProps}>
      <SliderArrow />
    </button>
  );
};

export default SliderButton;
