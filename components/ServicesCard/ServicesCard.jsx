import React from 'react';
import OptimizedImage from '../OptimizedImage/OptimizedImage';

const ServicesCard = ({ title, description, imgSrc }) => {
  return (
    <div className='w-full h-full bg-gray-light flex flex-col items-center text-center shadow-service rounded-30 px-7 pb-8 relative mx-auto mb-4 max-w-xs'>
      <div className='relative mb-5'>
        <div className='flex justify-center items-center bg-primary pt-8 px-2 pb-3 font-size-2-4 font-medium rounded-br-full rounded-bl-full transform -translate-y-2'>
          <div className='w-2/3'>
            <OptimizedImage
              src={imgSrc}
              alt={title}
              className='inline-block align-baseline'
            />
          </div>
        </div>

        {/* <span className='absolute border-service h-0 w-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-2'></span> */}
      </div>
      <h4 className='text-xl text-text-light font-semibold mb-4'>{title}</h4>
      <p className='text-text'>{description}</p>
    </div>
  );
};

export default ServicesCard;
