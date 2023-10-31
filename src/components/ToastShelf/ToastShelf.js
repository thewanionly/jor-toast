import React from 'react';

import Toast from '../Toast';
import { useToastContext } from '../ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, deleteToast } = useToastContext();

  return (
    toasts.length > 0 && (
      <ol className={styles.wrapper}>
        {toasts.map(({ id, message, variant }) => (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} onDismiss={() => deleteToast(id)}>
              {message}
            </Toast>
          </li>
        ))}
      </ol>
    )
  );
}

export default ToastShelf;
