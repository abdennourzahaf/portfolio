import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useSpring } from '@react-spring/core';

import SpringContext from '../contexts/Spring';
import AvatarCenterContext from '../contexts/AvatarCenter';

import Hero from '../containers/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';

const Contact = dynamic(() => import('../containers/Contact/Contact'));
const Footer = dynamic(() => import('../containers/Footer/Footer'));
const Projects = dynamic(() => import('../containers/Projects/Projects'));
const Services = dynamic(() => import('../containers/Services/Services'));
const Testimonials = dynamic(() =>
  import('../containers/Testimonials/Testimonials'),
);

export default function Home() {
  const [spring, setSpring] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const [centerX, setCenterX] = useState(0);

  const calc = (x, y) => [
    (7 * x) / centerX - 7,
    (14 * y) / window.innerHeight - 7,
  ];

  const mouseMoveHandler = ({ clientX, clientY }) => {
    let xy = calc(clientX, clientY);
    if (Number.isFinite(xy[0])) return setSpring.start({ xy });
    else return setSpring.start({ xy: [0, 0] });
  };

  return (
    <div
      onMouseMove={mouseMoveHandler}
      onMouseLeave={() => setSpring.start({ xy: [0, 0] })}>
      <AvatarCenterContext.Provider value={{ centerX, setCenterX }}>
        <SpringContext.Provider value={spring}>
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
