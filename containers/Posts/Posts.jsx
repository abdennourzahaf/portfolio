import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import SliderButton from '../../components/SliderButton/SliderButton';
import { POSTS } from '../../lib/data';

import styles from './styles.module.scss';
import Post from '../../components/Post/Post';

const Posts = () => {
  useEffect(() => {
    const postsGlide = new Glide('#posts-slider', {
      type: 'slider',
      startAt: 0,
      perView: 1,
      gap: 10,
    });
    postsGlide.mount();
  }, []);

  return (
    <section className={styles.section} id='blog'>
      <SectionHeader
        title='RECENT POSTS'
        primary='Check what’s trending'
        secondary='Are you thinking of starting a new website or updating an existing one?'
      />
      <div className={styles.postsSlider + ' container'}>
        <div className='glide' id='posts-slider'>
          <div className='glide__track' data-glide-el='track'>
            <ul className='glide__slides'>
              {POSTS.map((post, index) => (
                <li className='glide__slide' key={index}>
                  <Post {...post} />
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

export default Posts;
