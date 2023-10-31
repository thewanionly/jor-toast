import React, { useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toasts, setToasts] = useState([]);
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleVariantChange = (event) => {
    setVariant(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setToasts((prevState) => [
      ...prevState,
      {
        id: crypto.randomUUID(),
        message,
        variant
      }
    ]);

    // Reset to default
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && <ToastShelf toasts={toasts} setToasts={setToasts} />}

      <form className={styles.controlsWrapper} onSubmit={handleFormSubmit}>
        <div className={styles.row}>
          <label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              className={styles.messageInput}
              value={message}
              onChange={handleMessageChange}
              required={true}
            />
          </div>
        </div>

        <div className={styles.row}>
          <legend className={styles.label}>Variant</legend>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variantOption) => (
              <label key={variantOption} htmlFor={variantOption}>
                <input
                  id={variantOption}
                  type='radio'
                  name='variant'
                  value={variantOption}
                  checked={variantOption === variant}
                  onChange={handleVariantChange}
                />
                {variantOption}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
