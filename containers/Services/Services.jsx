import React from 'react';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServicesCard from '../../components/ServicesCard/ServicesCard';
import { SERVICES_CARDS } from '../../lib/data';
import styles from './styles.module.scss';

const Services = () => {
  return (
    <section className={styles.section} id='services'>
      <SectionHeader
        title='services'
        primary='Ways I can help you'
        secondary='Have a look at some of the many services I offer.'
      />
      <div className={styles.cardsContainer + ' container'}>
        {SERVICES_CARDS.map((card, index) => (
          <ServicesCard {...card} key={index} />
        ))}
        <div className={styles.dots}>
          <OptimizedImage src='bg-dots.png' alt='background' />
        </div>
      </div>
    </section>
  );
};

export default Services;
