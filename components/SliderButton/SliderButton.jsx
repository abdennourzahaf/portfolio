import React from 'react';
import SliderArrow from '../SVG/SliderArrow';

const SliderButton = ({ className, dark, ...restProps }) => {
  return (
    <button
      className={`flex justify-center items-center bg-primary  border-2 border-primary rounded-full h-8 w-8 transition-bg-color hover:text-primary ${
        dark
          ? 'text-gray-dark hover:bg-gray-dark transform rotate-90'
          : 'text-gray-light hover:bg-gray-light'
      } ${className}`}
      {...restProps}>
      <SliderArrow />
    </button>
  );
};

export default SliderButton;
