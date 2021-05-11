import React from 'react';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import LinkIcon from '../SVG/LinkIcon';
import styles from './styles.module.scss';

const ProjectCard = ({ title, description, link, imgSrc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <OptimizedImage src={imgSrc} alt={title} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href={link} className={styles.link} target='_blank' rel='noreferrer'>
          Visit Live Site
          <span className={styles.icon}>
            <LinkIcon />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
