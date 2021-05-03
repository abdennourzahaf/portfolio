import React from 'react';
import ProcessCard from '../../components/ProcessCard/ProcessCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { PROCESS_CARDS } from '../../lib/data';
import styles from './styles.module.scss';

const Process = () => {
  return (
    <div className={styles.section}>
      <SectionHeader
        title='process'
        primary='From Lean Design Sprints to Agile Development'
        secondary='My process is designed to give you the Software You really want.'
      />
      <div className={'container ' + styles.cardsContainer}>
        {PROCESS_CARDS.map((card, index) => (
          <ProcessCard {...card} number={'0' + (index + 1)} />
        ))}
        <img
          src='/assets/process-line.svg'
          alt='background'
          className={styles.bgLine}
        />
      </div>
      <div className={styles.bgShape1}>
        <img src='/assets/bd-element-1.png' alt='background' />
      </div>
      <div className={styles.bgShape2}>
        <img src='/assets/bd-element-2.png' alt='background' />
      </div>
    </div>
  );
};

export default Process;
