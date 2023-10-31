import React from 'react';

const useEscapeKey = (callbackFn) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        callbackFn?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callbackFn]);
};

export default useEscapeKey;
