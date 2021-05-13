import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { TESTIMONIALS } from '../../lib/data';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import SliderButton from '../../components/SliderButton/SliderButton';

const Testimonials = () => {
  useEffect(() => {
    const testimonialsGlide = new Glide('#testimonials-slider', {
      type: 'slider',
      startAt: 0,
      perView: 2,
      gap: 0,
      bound: true,
      breakpoints: {
        767: {
          perView: 1,
        },
      },
    });
    testimonialsGlide.mount();
  }, []);
  return (
    <section
      className='bg-primary-light py-16 rounded-tl-xl relative overflow-hidden xl:rounded-tl-full xl:rounded-bl-full'
      id='testimonials'>
      <SectionHeader
        title='good words'
        primary='What My Clients Say'
        secondary='Every client I’ve worked with has left a 5 stars review, here’s what they say'
      />
      <div className='container mt-6'>
        <div className='glide' id='testimonials-slider'>
          <div className='glide__track' data-glide-el='track'>
            <ul className='glide__slides'>
              {TESTIMONIALS.map((testimonial, index) => (
                <li className='glide__slide' key={index}>
                  <TestimonialCard {...testimonial} />
                </li>
              ))}
            </ul>
          </div>
          <div className='glide__arrows' data-glide-el='controls'>
            <SliderButton
              className='glide__arrow glide__arrow--left'
              data-glide-dir='<'
              aria-label='previous slide'
            />
            <SliderButton
              className='glide__arrow glide__arrow--right'
              data-glide-dir='>'
              aria-label='next slide'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
