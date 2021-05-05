import React from 'react';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import ProcessCard from '../../components/ProcessCard/ProcessCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { PROCESS_CARDS } from '../../lib/data';
import styles from './styles.module.scss';

const Process = () => {
  return (
    <section className={styles.section} id='process'>
      <SectionHeader
        title='process'
        primary='From Lean Design Sprints to Agile Development'
        secondary='My process is designed to give you the Software You really want.'
      />
      <div className={'container ' + styles.cardsContainer}>
        {PROCESS_CARDS.map((card, index) => (
          <ProcessCard {...card} number={'0' + (index + 1)} key={index} />
        ))}
        <img
          src='/assets/process-line.svg'
          alt='background'
          className={styles.bgLine}
        />
      </div>
      <div className={styles.bgShape1}>
        <OptimizedImage src='bd-element-1.png' alt='background' />
      </div>
      <div className={styles.bgShape2}>
        <OptimizedImage src='bd-element-2.png' alt='background' />
      </div>
    </section>
  );
};

export default Process;
