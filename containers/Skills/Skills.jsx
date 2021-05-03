import React from 'react';
import styles from './styles.module.scss';

const Skills = () => {
  return (
    <div className={styles.section}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Which is why we Never Stop Learning.</h1>
        <p className={styles.subTitle}>
          I believe that I succeed when my clients succeed.
        </p>
        <p className={styles.description}>
          I’m Reda Alhourani, a Full Stack Developer. Over the years of my
          career, my portfolio includes different types of Single Page
          Application and APIs.
        </p>
      </div>
    </div>
  );
};

export default Skills;
