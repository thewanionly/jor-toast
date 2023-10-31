import React, { useState } from 'react';

import Button from '../Button';
import Toast from '../Toast';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleVariantChange = (event) => {
    setVariant(event.target.value);
  };

  const handleDismissToast = () => {
    setShowToast(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setShowToast(true);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
        <Toast variant={variant} onDismiss={handleDismissToast}>
          {message}
        </Toast>
      )}

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
