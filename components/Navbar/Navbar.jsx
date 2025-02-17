import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import MenuBurger from '../SVG/MenuBurger';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import Button from '../Button/Button';
import { MENU_ITEMS } from '../../lib/data';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrolledEnough, setScrolledEnough] = useState(false);

  useEffect(() => {
    const reference = document.querySelector('#reference');

    const sectionObserver = new IntersectionObserver(
      entries =>
        entries.forEach(entry => setScrolledEnough(!entry.isIntersecting)),
      {
        threshold: 1,
      },
    );

    sectionObserver.observe(reference);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-bgc ${
        scrolledEnough ? 'bg-gray-light shadow-bottom' : ''
      }`}>
      <div
        className={`fixed inset-0 opacity-0 pointer-events-none bg-gray-dark transition-opacity lg:hidden ${
          isMobileNavOpen ? 'opacity-50 pointer-events-auto ' : ''
        }`}
        onClick={() => setIsMobileNavOpen(false)}></div>
      <nav
        className={`flex flex-col z-10 absolute right-0 h-screen bg-gray-light py-8 px-5 transform transition-transform w-[80vw] sm:w-[65vw] md:w-[40vw] lg:hidden ${
          isMobileNavOpen ? 'translate-x-0 ' : 'translate-x-full '
        }`}>
        <ul className='flex flex-col items-center font-semibold m-auto text-[1.2rem]'>
          {MENU_ITEMS.map(({ label, href }, index) => (
            <li
              className='my-4 transition-color hover:text-primary'
              key={index}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <div className='flex justify-center'>
          <Button link href='/resume.pdf' label='Resume' />
        </div>
      </nav>
      <nav
        className={`flex w-full items-center transition-padding ${
          scrolledEnough ? 'py-4 px-8 lg:px-12' : 'p-6 lg:py-10 lg:px-16'
        }`}>
        <Link href='/'>
          <a className='w-10 mr-auto lg:mr-48 2xl:mr-[17vw]'>
            <OptimizedImage src='logo.svg' alt='logo' />
          </a>
        </Link>
        <div className='hidden items-center justify-between flex-1 lg:flex'>
          <ul className='flex items-center font-semibold'>
            {MENU_ITEMS.map(({ label, href }, index) => (
              <li
                className='mx-4 transition-color hover:text-primary'
                key={index}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <div className='flex items-center'>
            <Button link href='/resume.pdf' label='Resume' />
          </div>
        </div>
        <button
          className='lg:hidden'
          onClick={() => setIsMobileNavOpen(true)}
          aria-label='open navigation'>
          <MenuBurger />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
