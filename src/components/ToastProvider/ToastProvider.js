import React from 'react';

import useKeydown from '../../hooks/useKeydown';

export const ToastContext = React.createContext();

export const useToastContext = () => React.useContext(ToastContext);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = React.useCallback((message, variant) => {
    setToasts((currentToasts) => [
      ...currentToasts,
      {
        id: crypto.randomUUID(),
        message,
        variant
      }
    ]);
  }, []);

  const deleteToast = React.useCallback((toastId) => {
    setToasts((currentToasts) => currentToasts.filter(({ id }) => id !== toastId));
  }, []);

  const deleteAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown('Escape', deleteAllToasts);

  const value = React.useMemo(
    () => ({
      toasts,
      createToast,
      deleteToast
    }),
    [toasts, createToast, deleteToast]
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
