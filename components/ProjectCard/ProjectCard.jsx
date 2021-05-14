import React from 'react';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import LinkIcon from '../SVG/LinkIcon';

const ProjectCard = ({ title, description, link, imgSrc }) => {
  return (
    <div className='w-full'>
      <div className='w-full'>
        <OptimizedImage src={imgSrc} alt={title} className='block' />
      </div>
      <div className='px-3 my-5'>
        <h4 className='font-medium text-2xl text-text-light mb-3'>{title}</h4>
        <p className='leading-snug text-text mb-5'>{description}</p>
        <a
          href={link}
          className='group text-primary inline-flex items-center'
          target='_blank'
          rel='noreferrer'>
          Visit Live Site
          <span className='flex items-center ml-2 transition-trans transform group-hover:translate-x-1'>
            <LinkIcon />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
