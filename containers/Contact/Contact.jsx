import React, { useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import EmailIcon from '../../components/SVG/EmailIcon';
import LinkIcon from '../../components/SVG/LinkIcon';
import styles from './styles.module.scss';

const Contact = () => {
  const inputRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className='px-4 pt-24 pb-24' id='contact'>
      <div className='container flex flex-col lg:flex-row lg:w-full'>
        <div className='lg:w-1/2'>
          <h2 className='text-[2rem] font-bold mb-4 leading-none text-text-dark md:text-5xl'>
            Let’s Talk!
          </h2>
          <h3 className='text-[1.3rem] font-normal mb-6 text-text-light md:text-3xl'>
            Interested in working together?
          </h3>
          <p className='mb-8 text-text md:pr-28'>
            If you have a design to build, a page to modify, or you need some
            advice about anything related to front-end development, feel free to
            contact me.
          </p>
          <div className='flex items-center mb-8 w-[fit-content] md:mx-auto lg:mx-0'>
            <div className='w-per-[38%] mr-3 md:w-[30%]'>
              <OptimizedImage src='avatar.svg' alt='form-image' />
            </div>
            <div className='text-text-light'>
              <p className='font-bold'>REPLY TIME</p>
              <p className='mb-1 text-xl font-bold'>Within 24 hours</p>
              <a
                className='flex items-center transition-color hover:text-primary'
                href='mailto:zfnori@gmail.com'
              >
                <span className='flex items-center mr-1 text-primary'>
                  <EmailIcon />
                </span>
                <span>zfnori@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className='max-w-xl lg:w-1/2'>
          <form
            name='contact'
            method='POST'
            encType='application/x-www-form-urlencoded'
            data-netlify='true'
            className='relative w-full'
          >
            <input type='hidden' name='form-name' value='contact' />
            <div
              className={`${styles.formGroup + (name && ' ' + styles.active)}`}
            >
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={({ target }) => setName(target.value)}
                ref={inputRef}
                required
              />
              <span></span>
              <label htmlFor='name'>Name</label>
            </div>
            <div
              className={`${styles.formGroup + (email && ' ' + styles.active)}`}
            >
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                required
              />
              <span></span>
              <label htmlFor='email'>Email</label>
            </div>
            <div
              className={`${
                styles.formGroup + (message && ' ' + styles.active)
              }`}
            >
              <textarea
                id='message'
                name='message'
                value={message}
                onChange={({ target }) => setMessage(target.value)}
                rows='5'
                required
              />
              <span></span>
              <label htmlFor='message'>Message</label>
            </div>
            <div className='flex flex-col items-center justify-between md:flex-row'>
              <Button label='Submit' />
              <a
                href='https://www.upwork.com/freelancers/~013e5420f61f88d376'
                className='inline-flex items-center mt-4 group text-primary md:mt-0'
                target='_blank'
                rel='noreferrer'
              >
                You can also find me on Upwork
                <span className='flex items-center ml-2 transform transition-trans group-hover:translate-x-1'>
                  <LinkIcon />
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
