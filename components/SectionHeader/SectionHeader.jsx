import React from 'react';

const SectionHeader = ({ title, primary, secondary }) => {
  return (
    <div className='text-center px-6'>
      <h2 className='text-[1.2rem] font-bold uppercase text-primary mb-4 tracking-[4px]'>
        {title}
      </h2>
      <h3 className='text-text-dark capitalize font-bold text-[2.2rem] max-w-[480px] mx-auto mb-4'>
        {primary}
      </h3>
      <p className='text-text max-w-[520px] mx-auto'>{secondary}</p>
    </div>
  );
};

export default SectionHeader;
