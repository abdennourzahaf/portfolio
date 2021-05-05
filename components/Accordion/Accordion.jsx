import React, { useState } from 'react';
import { FAQ } from '../../lib/data';
import AccordionItem from './AccordionItem/AccordionItem';
import styles from './styles.module.scss';

const Accordion = () => {
  return (
    <div className={styles.container}>
      {FAQ.map((item, index) => (
        <AccordionItem {...item} key={index} />
      ))}
    </div>
  );
};

export default Accordion;
