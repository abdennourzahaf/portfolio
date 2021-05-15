import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useSpring } from '@react-spring/core';

import SpringContext from '../contexts/Spring';
import AvatarCenterContext from '../contexts/AvatarCenter';

import Hero from '../containers/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../containers/Contact/Contact';

// const Contact = dynamic(() => import('../containers/Contact/Contact'));
const Footer = dynamic(() => import('../containers/Footer/Footer'));
const Projects = dynamic(() => import('../containers/Projects/Projects'));
const Services = dynamic(() => import('../containers/Services/Services'));
const Testimonials = dynamic(() =>
  import('../containers/Testimonials/Testimonials'),
);

export default function Home() {
  const [spring, setSpring] = useSpring(() => ({
    xy: [0, 1],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const [center, setCenter] = useState({ x: 0, y: 0 });

  const calc = (x, y) => [(7 * x) / center.x - 7, (5 * y) / center.y - 5];

  return (
    <div
      onMouseMove={({ clientX, clientY }) =>
        setSpring.start({ xy: calc(clientX, clientY) })
      }
      onMouseLeave={({}) => setSpring.start({ xy: [0, 0] })}>
      <AvatarCenterContext.Provider value={{ center, setCenter }}>
        <SpringContext.Provider value={spring}>
          <Head>
            <title>Abdennour Zahaf | Front-end developer</title>
            <meta name='description' content='Front-end developer portfolio' />
            <meta
              property='og:title'
              content='Abdennour Zahaf | Front-end developer'
            />
            <meta
              property='og:description'
              content='Front-End developer portfolio'
            />
            <link rel='icon' href='/favicon.ico' />
            <meta
              property='og:image'
              content='https://i.ibb.co/VN52FvB/thumbnail.png'
            />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://abdennourzahaf.me/' />
          </Head>
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Services />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </SpringContext.Provider>
      </AvatarCenterContext.Provider>
    </div>
  );
}
