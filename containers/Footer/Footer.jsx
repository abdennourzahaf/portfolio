import React from 'react';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import SliderButton from '../../components/SliderButton/SliderButton';
import { MENU_ITEMS } from '../../lib/data';

const Footer = () => {
  return (
    <footer className='bg-text-light'>
      <div className='container'>
        <div className='flex flex-col items-center p-10 border-footer md:py-14 md:px-0 lg:flex-row lg:justify-between lg:border-footer-lg'>
          <ul className='flex items-center flex-col font-medium text-gray-light mb-4 md:flex-row md:mb-8 lg:mb-0'>
            {MENU_ITEMS.map(({ label, href }, index) => (
              <li
                className='mb-3 transition-color hover:text-primary md:mr-8 md:mb-0'
                key={index}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <a href='#about'>
            <SliderButton dark aria-label='go to top' />
          </a>
        </div>
        <div className='flex flex-col items-center text-gray py-5'>
          <div className='w-10 mb-5'>
            <OptimizedImage src='logo.svg' alt='logo' />
          </div>
          <p className='text-[0.92rem] mb-2 md:mb-0'>
            © {new Date().getFullYear()} All rights reserved. abdennourzahaf.me
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
