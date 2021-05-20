import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { attributes } from '../../content/home.md';
import '@glidejs/glide/dist/css/glide.core.min.css';
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
    <section
      className='bg-primary-light py-16 rounded-tr-xl rounded-br-xl lg:rounded-tr-2xl lg:rounded-br-2xl'
      id='projects'>
      <SectionHeader
        title='projects'
        primary='Making Designs Come to Life!'
        secondary="Here are a some of the projects I've worked on"
      />
      <div className='container mt-16'>
        <div className='glide' id='projects-slider'>
          <div className='glide__track' data-glide-el='track'>
            <ul className='glide__slides'>
              {attributes.projects.map((project, index) => (
                <li className='glide__slide px-3' key={index}>
                  <ProjectCard {...project} />
                </li>
              ))}
            </ul>
          </div>
          <div
            className='glide__arrows flex justify-center pt-10'
            data-glide-el='controls'>
            <SliderButton
              className='glide__arrow glide__arrow--left mx-2'
              data-glide-dir='<'
              aria-label='previous slide'
            />
            <SliderButton
              className='glide__arrow glide__arrow--right mx-2 transform rotate-180'
              data-glide-dir='>'
              aria-label='next slide'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
