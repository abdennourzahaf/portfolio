import React from 'react';

const SectionHeader = ({ title, primary, secondary }) => {
  return (
    <div className='text-center px-6'>
      <h2 className='text-xl uppercase text-primary mb-4 letter-spacing-1'>
        {title}
      </h2>
      <h3 className='text-text-dark capitalize font-bold text-4xl max-w-md mx-auto mb-4'>
        {primary}
      </h3>
      <p className='text-text max-w-lg mx-auto'>{secondary}</p>
    </div>
  );
};

export default SectionHeader;
