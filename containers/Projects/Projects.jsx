import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { PROJECTS } from '../../lib/data';
import '@glidejs/glide/dist/css/glide.core.min.css';
import styles from './styles.module.scss';
import SliderButton from '../../components/SliderButton/SliderButton';

const Projects = () => {
  useEffect(() => {
    const glide = new Glide('#projects-slider', {
      type: 'slider',
      perView: 3,
      gap: 30,
      bound: true,
      breakpoints: {
        767: {
          perView: 1,
        },
        1023: {
          perView: 2,
        },
      },
    });
    glide.mount();
  });
  return (
    <section className={styles.section} id='projects'>
      <SectionHeader
        title='projects'
        primary='Making Designs Come to Life!'
        secondary="Here are a some of the projects I've worked on"
      />
      <div className={styles.sliderContainer + ' container'}>
        <div className='glide' id='projects-slider'>
          <div className='glide__track' data-glide-el='track'>
            <ul className='glide__slides'>
              {PROJECTS.map((project, index) => (
                <li className='glide__slide' key={index}>
                  <ProjectCard {...project} />
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
    </section>
  );
};

export default Projects;
