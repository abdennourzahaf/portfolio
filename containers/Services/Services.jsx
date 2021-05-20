import React from 'react';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServicesCard from '../../components/ServicesCard/ServicesCard';
import { attributes } from '../../content/home.md';

const Services = () => {
  return (
    <section className='pt-32 px-5 pb-24' id='services'>
      <SectionHeader
        title='services'
        primary='Ways I can help you'
        secondary='Have a look at some of the many services I offer.'
      />
      <div className='container relative mt-20 grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12 lg:gap-x-6'>
        {attributes.services.map((card, index) => (
          <ServicesCard {...card} key={index} />
        ))}
        <div className='absolute top-1/2 left-1/2 w-20 -z-1 transform-dots lg:transform-dots-lg lg:w-24 lg:left-1/3'>
          <OptimizedImage src='bg-dots.png' alt='background' />
        </div>
      </div>
    </section>
  );
};

export default Services;
