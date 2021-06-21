import React from 'react';
import OptimizedImage from '../OptimizedImage/OptimizedImage';

const TestimonialCard = ({ quote }) => {
  return (
    <div className='relative bg-gray-light rounded-[30px] p-8 shadow-testimonial'>
      <div className='absolute block right-8 bottom-8 w-40 opacity-5'>
        <OptimizedImage src='quote.png' alt='quote' />
      </div>
      <p className='relative italic mb-8 text-text'>{quote}</p>
    </div>
  );
};

export default TestimonialCard;
