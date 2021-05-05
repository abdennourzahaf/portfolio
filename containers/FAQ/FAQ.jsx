import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import BackgroundPattern from '../../components/BackgroundPattern/BackgroundPattern';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import styles from './styles.module.scss';

const FAQ = () => {
  return (
    <section className={styles.section}>
      <SectionHeader
        title='ASk ME'
        primary='Frequently asked questions'
        secondary='I am always happy to help you any ways possible. You can ask me if anything bothering you!'
      />
      <div className={styles.accordionContainer + ' container'}>
        <Accordion />
      </div>
      <BackgroundPattern position='left' />
    </section>
  );
};

export default FAQ;
