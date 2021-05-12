import React from 'react';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import SliderButton from '../../components/SliderButton/SliderButton';
import { MENU_ITEMS } from '../../lib/data';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.container}>
          <ul className={styles.navList}>
            {MENU_ITEMS.map(({ label, href }, index) => (
              <li className={styles.navListItem} key={index}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <a href='#about'>
            <SliderButton dark aria-label='go to top' />
          </a>
        </div>
        <div className={styles.subFooter}>
          <div className={styles.logo}>
            <OptimizedImage src='logo.svg' alt='logo' />
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} All rights reserved. abdennourzahaf.me
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
