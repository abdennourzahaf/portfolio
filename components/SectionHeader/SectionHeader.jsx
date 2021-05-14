import React from 'react';

const SectionHeader = ({ title, primary, secondary }) => {
  return (
    <div className='text-center px-6'>
      <h2 className='font-size-1-2 font-bold uppercase text-primary mb-4 letter-spacing-1'>
        {title}
      </h2>
      <h3 className='text-text-dark capitalize font-bold font-size-2-2 max-w-480 mx-auto mb-4'>
        {primary}
      </h3>
      <p className='text-text max-w-520 mx-auto'>{secondary}</p>
    </div>
  );
};

export default SectionHeader;
