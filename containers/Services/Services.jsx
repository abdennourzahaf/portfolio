import React from 'react';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServicesCard from '../../components/ServicesCard/ServicesCard';
import { SERVICES_CARDS } from '../../lib/data';
import styles from './styles.module.scss';

const Services = () => {
  return (
    <section className={styles.section}>
      <SectionHeader
        title='services'
        primary='Ways I can help you'
        secondary='Have a look, some could be interesting to help you achieve your business goals or start that project you always wanted to do... Yes, that one!'
      />
      <div className={styles.cardsContainer + ' container'}>
        {SERVICES_CARDS.map((card, index) => (
          <ServicesCard {...card} key={index} />
        ))}
        <div className={styles.redDots}>
          <OptimizedImage src='bg-red-dots.png' alt='background' />
        </div>
      </div>
    </section>
  );
};

export default Services;
