import React from 'react';
import LinkIcon from '../SVG/LinkIcon';

const Button = React.forwardRef((props, ref) => {
  const { className, label, block, secondary, ...restProps } = props;
  return (
    <button
      className={`group w-fit  py-3 px-10 rounded-full inline-flex items-center transition-bg-color font-medium whitespace-nowrap border-2 border-primary md:py-3 md:px-6 focus:outline-none ${
        block ? 'w-full' : ''
      } ${
        secondary
          ? 'text-primary bg-gray-light hover:text-gray-light hover:bg-primary focus:text-gray-light focus:bg-primary'
          : 'text-gray-light bg-primary hover:text-primary hover:bg-gray-light focus:text-primary focus:bg-gray-light'
      } ${className}`}
      {...restProps}>
      {label}
      <span className='flex items-center ml-3'>
        <LinkIcon className='transition-trans transform group-hover:translate-x-2' />
      </span>
    </button>
  );
});

export default Button;
