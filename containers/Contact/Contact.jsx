import React, { useRef, useState } from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton/PrimaryButton';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import DownArrowIcon from '../../components/SVG/DownArrowIcon';
import EmailIcon from '../../components/SVG/EmailIcon';
import styles from './styles.module.scss';

const Contact = () => {
  const inputRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className={styles.section} id='contact'>
      <div className={styles.container + ' container'}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Let’s Talk!</h2>
          <h3 className={styles.subTitle}>Interested in working together?</h3>
          <p className={styles.description}>
            If you have a design to build, a page to modify or you need some
            advice about anything font-end related, feel free to contact me.
          </p>
          <div className={styles.infoCard}>
            <div className={styles.imgContainer}>
              <OptimizedImage src='avatar.svg' alt='form-image' />
            </div>
            <div className={styles.InfoContainer}>
              <p className={styles.secondary}>REPLY TIME</p>
              <p className={styles.primary}>Within 24 hours</p>
              <a className={styles.email} href='mailto:zfnori@gmail.com'>
                <span className={styles.emailIcon}>
                  <EmailIcon />
                </span>
                <span className={styles.emailText}>zfnori@gmail.com</span>
              </a>
            </div>
          </div>
          <button
            className={styles.formButton}
            onClick={() => inputRef.current.focus()}>
            OR Simply fill out the form
            <span className={styles.formButtonIcon}>
              <DownArrowIcon />
            </span>
          </button>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
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
            <PrimaryButton label='Submit' role='button' />
            <div className={styles.bgImage}>
              <OptimizedImage src='logo.svg' alt='background' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
