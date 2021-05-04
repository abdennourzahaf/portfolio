import React, { useRef } from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton/PrimaryButton';
import DownArrowIcon from '../../components/SVG/DownArrowIcon';
import EmailIcon from '../../components/SVG/EmailIcon';
import styles from './styles.module.scss';

const Contact = () => {
  const inputRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className={styles.section}>
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
              <img src='/assets/form-image.png' alt='form-image' />
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
            <div className={`${styles.formGroup}`}>
              <input type='text' id='name' name='name' ref={inputRef} />
              <span></span>
              <label htmlFor='name'>Name</label>
            </div>
            <div className={styles.formGroup}>
              <input type='email' id='email' name='email' />
              <span></span>
              <label htmlFor='email'>Email</label>
            </div>
            <div className={styles.formGroup}>
              <select name='budget' id='budget'>
                <option selected value='' disabled>
                  Budget
                </option>
                <option value='< 5000'>&lt; 5000€</option>
                <option value='5000€ - 10000€'>5000€ - 10000€</option>
                <option value='10000 - 30000€'>10000€ - 30000€</option>
                <option value='> 30000'>&gt; 30000€</option>
              </select>
              <span></span>
            </div>
            <div className={styles.formGroup}>
              <textarea id='content' name='content' rows='5' />
              <span></span>
              <label htmlFor='content'>Content</label>
            </div>
            <PrimaryButton label='Submit' role='button' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
