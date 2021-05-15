import React, { useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import DownArrowIcon from '../../components/SVG/DownArrowIcon';
import EmailIcon from '../../components/SVG/EmailIcon';
import styles from './styles.module.scss';

const Contact = () => {
  const inputRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  return (
    <section className='pt-24 px-4 pb-16' id='contact'>
      <div className='container flex flex-col lg:flex-row lg:w-full'>
        <div className='lg:w-1/2'>
          <h2 className='font-size-2 font-bold mb-4 leading-none text-text-dark md:text-5xl'>
            Let’s Talk!
          </h2>
          <h3 className='font-size-1-3 font-normal mb-6 text-text-light md:text-3xl'>
            Interested in working together?
          </h3>
          <p className='mb-8 text-text md:pr-28'>
            If you have a design to build, a page to modify or you need some
            advice about anything font-end related, feel free to contact me.
          </p>
          <div className='flex items-center mb-8 w-fit md:mx-auto lg:mx-0'>
            <div className='w-per-38 mr-3 md:w-per-30'>
              <OptimizedImage src='avatar.svg' alt='form-image' />
            </div>
            <div className='text-text-light'>
              <p className='font-bold'>REPLY TIME</p>
              <p className='font-bold text-xl mb-1'>Within 24 hours</p>
              <a
                className='flex items-center transition-color hover:text-primary'
                href='mailto:zfnori@gmail.com'>
                <span className='text-primary mr-1 flex items-center'>
                  <EmailIcon />
                </span>
                <span>zfnori@gmail.com</span>
              </a>
            </div>
          </div>
          <button
            className='flex items-center text-text-light mb-2 md:mx-auto lg:mx-0'
            onClick={() => inputRef.current.focus()}>
            OR Simply fill out the form
            <span className='flex items-center ml-2 transform lg:-rotate-90'>
              <DownArrowIcon />
            </span>
          </button>
        </div>
        <div className='max-w-xl lg:w-1/2'>
          <form
            name='contact'
            method='POST'
            enctype='application/x-www-form-urlencoded'
            data-netlify='true'
            className='w-full relative'>
            <input type='hidden' name='form-name' value='contact' />
            <div
              className={`${styles.formGroup + (name && ' ' + styles.active)}`}>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={({ target }) => setName(target.value)}
                ref={inputRef}
              />
              <span></span>
              <label htmlFor='name'>Name</label>
            </div>
            <div
              className={`${
                styles.formGroup + (email && ' ' + styles.active)
              }`}>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <span></span>
              <label htmlFor='email'>Email</label>
            </div>
            <div
              className={`${
                styles.formGroup + (content && ' ' + styles.active)
              }`}>
              <textarea
                id='content'
                name='content'
                value={content}
                onChange={({ target }) => setContent(target.value)}
                rows='5'
              />
              <span></span>
              <label htmlFor='content'>Content</label>
            </div>
            <Button label='Submit' role='button' />
            <div className='hidden absolute h-60 top-1/2 right-0 -z-1 opacity-10 transform translate-x-3/4 -translate-y-3/4 md:block'>
              <OptimizedImage
                src='logo.svg'
                alt='background'
                className='h-full'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
