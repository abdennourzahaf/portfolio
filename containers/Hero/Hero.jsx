import React from 'react';
import Avatar from '../../components/Avatar/َAvatar';
import Button from '../../components/Button/Button';

const Hero = () => {
  return (
    <section className='flex items-center mb-28 2xl:px-screen-12' id='about'>
      <div className='font-raleway bg-primary-light inline-flex w-full justify-center items-center relative px-4 pb-12 pt-32 rounded-br-xl md:px-10 2xl:w-fit 2xl:pt-48 2xl:pr-32 2xl:pb-40 2xl:pl-32 2xl:ml-16 2xl:rounded-br-full 2xl:rounded-bl-full'>
        <div className='inline-flex flex-col'>
          <h1 className='text-primary-dark text-5xl font-extrabold mb-3 2xl:text-6xl'>
            Abdennour Zahaf
          </h1>
          <h2 className='text-gray-dark text-2xl font-semibold mb-6 2xl:text-2xl'>
            Front-end web developer
          </h2>
          <h3 className='text-gray-dark text-xl font-semibold mb-2 order-first 2xl:text-2xl'>
            Hello, I’m
          </h3>
          <p className='font-roboto text-text text-base font-normal mb-2 max-w-md'>
            I develop and manage high quality Web pages and User Interfaces
            using various modern tools and technologies. I specialize in Single
            page applications and static websites. Over the last two years, I
            have worked on many Front-end projects and delivered the best
            results, in terms of pages speed, code quality and client
            satisfaction.
          </p>
          <div className='font-roboto inline-flex flex-col sm:flex-row'>
            <Button
              label='Say Hello'
              href='#contact'
              className='my-1 sm:mb-0 sm:mt-8 sm:mr-4'
            />
            <Button
              secondary
              label='View Portfolio'
              href='#projects'
              className='my-1 sm:mb-0 sm:mt-8 sm:mr-4'
            />
          </div>
        </div>
        <div className='hidden w-6/12 md:block lg:w-5/12 2xl:absolute 2xl:right-0 2xl:top-1/2 2xl:transform-avatar 2xl:w-screen-30'>
          <Avatar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
