import React, { useEffect, useState } from 'react';
import Glide from '@glidejs/glide';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import styles from './styles.module.scss';
import { TESTIMONIALS } from '../../lib/data';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import SliderButton from '../../components/SliderButton/SliderButton';

const brandsArray = [1, 2, 3, 4, 5];

const Testimonials = () => {
  const [activeBullet, setActiveBullet] = useState(0);

  useEffect(() => {
    const testimonialsGlide = new Glide('#testimonials-slider', {
      type: 'slider',
      startAt: 0,
      perView: 2,
      gap: 0,
      breakpoints: {
        767: {
          perView: 1,
        },
      },
    });
    testimonialsGlide.mount();

    const brandsGlide = new Glide('#brands-slider', {
      type: 'slider',
      startAt: 0,
      perView: 1,
      gap: 0,
    });

    brandsGlide.on(['run', 'swipe.end'], function () {
      setActiveBullet(brandsGlide.index);
    });

    brandsGlide.mount();
  }, []);
  return (
    <div className={styles.section}>
      <SectionHeader
        title='good words'
        primary='What My Clients Say?'
        secondary="Some of My Client's 5 Starts Feedback On different platforms"
      />
      <div className={styles.testimonialsSlider + ' container'}>
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
            />
            <SliderButton
              className='glide__arrow glide__arrow--right'
              data-glide-dir='>'
            />
          </div>
        </div>
      </div>
      <div className={styles.brandsSlider + ' container'}>
        <div className='glide' id='brands-slider'>
          <div className='glide__track' data-glide-el='track'>
            <ul className='glide__slides'>
              {brandsArray.map(n => (
                <li className='glide__slide' key={n}>
                  <img
                    src={`/assets/testimonial-brand-${n}.png`}
                    alt='testimonial-brand'
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className='glide__bullets' data-glide-el='controls[nav]'>
            {brandsArray.map((_, index) => (
              <button
                className={
                  'glide__bullet' +
                  (index === activeBullet ? ' glide__bullet--current' : '') +
                  (index === activeBullet + 1 || index === activeBullet - 1
                    ? ' glide__bullet--adjacent'
                    : '')
                }
                data-glide-dir={`=${index}`}></button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.brandsContainer + ' container'}>
        {brandsArray.map(n => (
          <div className={styles.brand}>
            <img
              src={`/assets/testimonial-brand-${n}.png`}
              alt='testimonial-brand'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
