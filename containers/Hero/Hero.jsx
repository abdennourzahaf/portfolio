import React from 'react';
import Avatar from '../../components/Avatar/َAvatar';
import Button from '../../components/Button/Button';

const Hero = () => {
  return (
    <section className='flex items-center mb-28 2xl:px-[12vw]' id='about'>
      <div id='reference' className='absolute top-0'></div>
      <div className='font-raleway bg-primary-light inline-flex w-full justify-center items-center relative px-4 pb-12 pt-[8.5rem] rounded-br-[120px] md:px-10 2xl:w-[fit-content] 2xl:pt-48 2xl:pr-32 2xl:pb-40 2xl:pl-32 2xl:ml-16 2xl:rounded-br-full 2xl:rounded-bl-full'>
        <div className='inline-flex flex-col'>
          <h1 className='block text-gray-dark text-[1.3rem] font-semibold mb-1 order-first 2xl:text-2xl'>
            Hi, I’m
          </h1>
          <h2 className='block text-primary-dark text-[2.7rem] font-extrabold leading-tight mb-3 2xl:text-6xl'>
            Abdennour Zahaf
          </h2>
          <h3 className='block text-gray-dark text-[1.4rem] font-semibold leading-tight mb-5 2xl:text-2xl'>
            Front-end web developer
          </h3>
          <p className='max-w-md mb-2 text-base font-normal font-roboto text-text'>
            I develop and manage high-quality Web pages and User Interfaces
            using various modern tools and technologies. I specialize in Single
            page applications and static websites. Over the last two years, I
            have worked on many Front-end projects and delivered the best
            results regarding page speed, code quality, and client satisfaction.
          </p>
          <div className='inline-flex flex-col font-roboto sm:flex-row'>
            <Button
              link
              label='Say Hello'
              href='#contact'
              className='my-1 sm:mb-0 sm:mt-8 sm:mr-4'
            />
            <Button
              link
              href='#projects'
              secondary
              label='View Portfolio'
              className='my-1 sm:mb-0 sm:mt-8 sm:mr-4'
            />
          </div>
        </div>

        <div className='hidden w-6/12 md:block lg:w-5/12 2xl:absolute 2xl:right-0 2xl:top-1/2 2xl:transform-avatar 2xl:w-[30vw]'>
          <div>
            <Avatar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
