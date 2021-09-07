import React from 'react';
import LinkIcon from '../SVG/LinkIcon';

const Button = React.forwardRef((props, ref) => {
  const { className, label, block, link, secondary, ...restProps } = props;
  const Tag = link ? 'a' : 'button';
  const buttonClasses = [
    'group',
    'w-[fit-content]',
    'py-3',
    'px-10',
    'rounded-full',
    'inline-flex',
    'items-center',
    'transition-bgc-color',
    'font-medium',
    'whitespace-nowrap',
    'border-2',
    'border-primary',
    'md:py-3',
    'md:px-6',
  ];
  if (block) buttonClasses.push('w-full');
  if (secondary)
    buttonClasses.push(
      'text-primary',
      'bg-gray-light',
      'hover:text-gray-light',
      'hover:bg-primary',
      'focus:text-gray-light',
      'focus:bg-primary'
    );
  else
    buttonClasses.push(
      'text-gray-light',
      'bg-primary',
      'hover:text-primary',
      'hover:bg-gray-light',
      'focus:text-primary',
      'focus:bg-gray-light'
    );

  if (!link) buttonClasses.push('focus:outline-none');

  return (
    <Tag className={`${buttonClasses.join(' ')} ${className}`} {...restProps}>
      {label}
      <span className='flex items-center ml-3'>
        <LinkIcon className='transition-trans transform group-hover:translate-x-2' />
      </span>
    </Tag>
  );
});

Button.displayName = 'Button';

export default Button;
