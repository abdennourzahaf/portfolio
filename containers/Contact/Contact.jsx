import React, { useState } from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton/PrimaryButton';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage';
import DownArrowIcon from '../../components/SVG/DownArrowIcon';
import EmailIcon from '../../components/SVG/EmailIcon';
import styles from './styles.module.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className={styles.section} id='contact'>
      <div className={styles.container + ' container'}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Let’s Talk!</h2>
          <h3 className={styles.subTitle}>So, Do we work together?</h3>
          <p className={styles.description}>
            If you have a Application, Saas or mobile app idea in mind or you
            need some advice about product development, feel free to contact me.
          </p>
          <div className={styles.infoCard}>
            <div className={styles.imgContainer}>
              <OptimizedImage src='form-image.png' alt='form-image' />
            </div>
            <div className={styles.InfoContainer}>
              <p className={styles.secondary}>REPLY TIME</p>
              <p className={styles.primary}>Within 24 hours</p>
              <a className={styles.email} href='mailto:reda@reda-alhourani.com'>
                <span className={styles.emailIcon}>
                  <EmailIcon />
                </span>
                <span className={styles.emailText}>
                  reda@reda-alhourani.com
                </span>
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
                styles.formGroup + (budget && ' ' + styles.active)
              }`}>
              <select
                name='budget'
                value={budget}
                onChange={({ target }) => setBudget(target.value)}
                id='budget'
                defaultValue=''>
                <option value='' disabled>
                  Budget
                </option>
                <option value='< 5000'>&lt; 5000€</option>
                <option value='5000€ - 10000€'>5000€ - 10000€</option>
                <option value='10000 - 30000€'>10000€ - 30000€</option>
                <option value='> 30000'>&gt; 30000€</option>
              </select>
              <span></span>
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
          </form>
        </div>
      </div>
      <div className={styles.bgImage}>
        <OptimizedImage src='r-3.png' alt='background' />
      </div>
    </section>
  );
};

export default Contact;
