import React, { useState } from 'react';
import styles from './styles.module.scss';

const AccordionItem = ({ header, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container + (isOpen ? ' ' + styles.open : '')}>
      <div
        className={styles.header}
        onClick={() => setIsOpen(current => !current)}>
        <div className={styles.icon}>
          <div className={styles.horizontal}></div>
          <div className={styles.vertical}></div>
        </div>
        <h3 className={styles.title}>{header}</h3>
      </div>
      <p className={styles.body}>{body}</p>
    </div>
  );
};

export default AccordionItem;
