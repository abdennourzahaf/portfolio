import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';
import { MENU_ITEMS } from '../../lib/data';
import PrimaryButton from '../Button/PrimaryButton/PrimaryButton';
import MenuBurger from '../SVG/MenuBurger';
import OptimizedImage from '../OptimizedImage/OptimizedImage';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  let listener = null;
  const [scrolledEnough, setScrolledEnough] = useState(false);

  useEffect(() => {
    listener = document.addEventListener('scroll', e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 20) {
        if (!scrolledEnough) {
          setScrolledEnough(true);
        }
      } else {
        if (scrolledEnough) {
          setScrolledEnough(false);
        }
      }
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [scrolledEnough]);

  const headerClasses = [styles.header];
  if (isMobileNavOpen) headerClasses.push(styles.mobileActive);
  if (scrolledEnough) headerClasses.push(styles.scrolled);

  return (
    <header className={headerClasses.join(' ')}>
      <div
        className={styles.overlay}
        onClick={() => setIsMobileNavOpen(false)}></div>
      <nav className={styles.mobileNav}>
        <ul className={styles.mobileNavList}>
          {MENU_ITEMS.map(({ label, href }, index) => (
            <li className={styles.mobileNavListItem} key={index}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileSecondaryLiksContainer}>
          <a href='/' className={styles.linkedin}>
            in
          </a>
          <Link href='/' passHref>
            <PrimaryButton label='Contact Us' />
          </Link>
        </div>
      </nav>
      <nav className={styles.nav}>
        <Link href='/'>
          <a className={styles.logo}>
            <OptimizedImage src='navbar-logo.png' alt='logo' />
          </a>
        </Link>
        <div className={styles.linksContainer}>
          <ul className={styles.navList}>
            {MENU_ITEMS.map(({ label, href }, index) => (
              <li className={styles.navListItem} key={index}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <div className={styles.secondaryLiksContainer}>
            <a href='/' className={styles.linkedin}>
              in
            </a>
            <Link href='/' passHref>
              <PrimaryButton label='Contact Us' />
            </Link>
          </div>
        </div>
        <button
          className={styles.burger}
          onClick={() => setIsMobileNavOpen(true)}>
          <MenuBurger />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
