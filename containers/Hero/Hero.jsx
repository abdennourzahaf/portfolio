import React from 'react';
import Avatar from '../../components/Avatar/َAvatar';
import Button from '../../components/Button/Button';

import { useSpring, animated } from 'react-spring';

const Hero = () => {
  const h3Props = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    delay: 1000,
  });
  const h1Props = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    delay: 1200,
  });
  const h2Props = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    delay: 1400,
  });
  const pProps = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    delay: 1600,
  });
  const divProps = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    delay: 1800,
  });
  const avatatProps = useSpring({
    to: { scale: 1 },
    from: { scale: 0 },
  });
  // const trail = useTrail(4, { to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <section className='flex items-center mb-28 2xl:px-screen-12' id='about'>
      <div id='reference' className='absolute top-0'></div>
      <div className='font-raleway bg-primary-light inline-flex w-full justify-center items-center relative px-4 pb-12 pt-34 rounded-br-xl md:px-10 2xl:w-fit 2xl:pt-48 2xl:pr-32 2xl:pb-40 2xl:pl-32 2xl:ml-16 2xl:rounded-br-full 2xl:rounded-bl-full'>
        <div className='inline-flex flex-col'>
          <animated.h1
            style={h1Props}
            className='text-primary-dark font-size-2-7 font-extrabold leading-tight mb-3 2xl:text-6xl'>
            Abdennour Zahaf
          </animated.h1>
          <animated.h2
            style={h2Props}
            className='text-gray-dark font-size-1-4 font-semibold leading-tight mb-5 2xl:text-2xl'>
            Front-end web developer
          </animated.h2>
          <animated.h3
            style={h3Props}
            className='text-gray-dark font-size-1-3 font-semibold mb-1 order-first 2xl:text-2xl'>
            Hello, I’m
          </animated.h3>
          <animated.p
            style={pProps}
            className='font-roboto text-text text-base font-normal mb-2 max-w-md'>
            I develop and manage high quality Web pages and User Interfaces
            using various modern tools and technologies. I specialize in Single
            page applications and static websites. Over the last two years, I
            have worked on many Front-end projects and delivered the best
            results, in terms of pages speed, code quality and client
            satisfaction.
          </animated.p>
          <animated.div
            style={divProps}
            className='font-roboto inline-flex flex-col sm:flex-row'>
            <a href='#contact'>
              <Button
                label='Say Hello'
                href='#contact'
                className='my-1 sm:mb-0 sm:mt-8 sm:mr-4'
              />
            </a>
            <a href='#projects'>
              <Button
                secondary
                label='View Portfolio'
                className='my-1 sm:mb-0 sm:mt-8 sm:mr-4'
              />
            </a>
          </animated.div>
        </div>

        <div className='hidden w-6/12 md:block lg:w-5/12 2xl:absolute 2xl:right-0 2xl:top-1/2 2xl:transform-avatar 2xl:w-screen-30'>
          <animated.div style={avatatProps}>
            <Avatar />
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
