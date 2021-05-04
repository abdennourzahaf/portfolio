import React from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton/PrimaryButton';
import SkillsCard from '../../components/SkillsCard/SkillsCard';
import { SKILLS_CARDS } from '../../lib/data';
import styles from './styles.module.scss';

const Skills = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container + ' container'}>
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
          <div className={styles.buttonsContainer}>
            <a href='/' className={styles.CTA}>
              Start Your Project ?
            </a>
            <PrimaryButton label='Contact Us' />
          </div>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.column1}>
            <SkillsCard {...SKILLS_CARDS[0]} />
            <div className={styles.blackDots}>
              <img src='/assets/bg-black-dots.png' alt='background' />
            </div>
          </div>
          <div className={styles.column2}>
            <div className={styles.card1}>
              <SkillsCard {...SKILLS_CARDS[1]} />
            </div>
            <div className={styles.card2}>
              <SkillsCard {...SKILLS_CARDS[2]} />
            </div>
            <div className={styles.redDots}>
              <img src='/assets/bg-red-dots.png' alt='background' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
