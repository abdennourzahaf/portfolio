import React from 'react';
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
          <a href='tel:+49-178-188-0278' className={styles.phone}>
            +49-178-188-0278
          </a>
        </div>
        <div className={styles.subFooter}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} All rights reserved. Reda-Alhourani.com
          </p>
          <div className={styles.subFooterLinks}>
            <a href='/' className={styles.imprintLink}>
              Imprint
            </a>
            <a href='/' className={styles.linkedin}>
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
