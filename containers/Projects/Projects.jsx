import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { PROJECTS } from '../../lib/data';
import '@glidejs/glide/dist/css/glide.core.min.css';
// import '@glidejs/glide/dist/css/glide.theme.min.css';
import styles from './styles.module.scss';
import SliderArrow from '../../components/SVG/SliderArrow';

const Projects = () => {
  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'slider',
      startAt: 0,
      perView: 2,
      gap: 30,
      bound: true,
      peek: 300,
      breakpoints: {
        580: {
          peek: 0,
          perView: 1,
        },
        767: {
          peek: 0,
          perView: 2,
        },
        1023: {
          peek: 20,
          perView: 2,
        },
        1199: {
          peek: 200,
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
        primary='Making Ideas Come to Life!'
        secondary='Some Of the best projects I have Developed'
      />
      <div className={styles.sliderContainer}>
        <div className='glide'>
          <div className={styles.leftOverlay}></div>
          <div className={styles.rightOverlay}></div>
          <div className='glide__track' data-glide-el='track'>
            <ul className='glide__slides'>
              {PROJECTS.map((project, index) => (
                <li className='glide__slide' key={index}>
                  <ProjectCard {...project} />
                </li>
              ))}
            </ul>
          </div>
          <div class='glide__arrows' data-glide-el='controls'>
            <button class='glide__arrow glide__arrow--left' data-glide-dir='<'>
              <SliderArrow />
            </button>
            <button class='glide__arrow glide__arrow--right' data-glide-dir='>'>
              <SliderArrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
