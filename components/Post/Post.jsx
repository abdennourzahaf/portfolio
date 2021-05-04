import React from 'react';
import LinkIcon from '../SVG/LinkIcon';
import styles from './styles.module.scss';

const Post = ({ title, excerpt, imgSrc, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.bg}></div>
        <div className={styles.orangeDots}>
          <img src='/assets/bg-orange-dots.png' alt='background' />
        </div>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
        <a href={link} className={styles.link}>
          Read More
          <span className={styles.icon}>
            <LinkIcon />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Post;
