import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/Button/SecondaryButton/SecondaryButton';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import styles from './styles.module.scss';

const Hero = () => {
  return (
    <section className={styles.section} id='about'>
      <div className={styles.bgLogo}>
        <OptimizedImage src='r-3.png' alt='logo' />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <h3 className={styles.greeting}>Hello, I’m</h3>
          <h1 className={styles.name}>Reda Alhourani</h1>
          <h3 className={styles.title}>Application Development Consultant</h3>
          <h4 className={styles.secondaryTitle}>
            <span className={styles.logo}>
              <OptimizedImage src='logo.png' alt='logo' />
            </span>
            Working as independent consultant
          </h4>
          <p className={styles.description}>
            I Developing and Mange high-quality Single Page Applications and
            APIs in different industries. accourding to your expectations,
            requirements. with the most modern and stable Tools and Technology.
            I will be responsible for Project Requirement Understanding, Project
            Flow, Development, Testing, Deploying, and maintenance.
          </p>
          <div className={styles.buttonsContainer}>
            <Link href='/' passHref>
              <PrimaryButton label='Get Project Estimate' />
            </Link>
            <Link href='/' passHref>
              <SecondaryButton label='View Portfolio' />
            </Link>
          </div>
        </div>
        <div className={styles.smallImageContainer}>
          <OptimizedImage src='hero-img-1.png' />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <OptimizedImage src='hero-img-1.png' />
      </div>
    </section>
  );
};

export default Hero;
