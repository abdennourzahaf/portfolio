import Link from 'next/link';
import React from 'react';
import Avatar from '../../components/Avatar/َAvatar';
import PrimaryButton from '../../components/Button/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/Button/SecondaryButton/SecondaryButton';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import styles from './styles.module.scss';

const Hero = () => {
  return (
    <section className={styles.section} id='about'>
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <h3 className={styles.greeting}>Hello, I’m</h3>
          <h1 className={styles.name}>Abdennour Zahaf</h1>
          <h3 className={styles.title}>Front-end web developer</h3>
          <p className={styles.description}>
            I develop and manage high quality Web pages and User Interfaces
            using various modern tools and technologies. I specialize in Single
            page applications and static websites. Over the last two years, I
            have worked on many Front-end projects and delivered the best
            results, in terms of pages speed, code quality and client
            satisfaction.
          </p>
          <div className={styles.buttonsContainer}>
            <PrimaryButton label='Say Hello' href='#contact' />
            <SecondaryButton label='View Portfolio' href='#projects' />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Avatar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
