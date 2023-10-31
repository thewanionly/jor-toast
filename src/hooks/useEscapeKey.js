import React from 'react';

const ESCAPE_KEY = 'Escape';

const useEscapeKey = (callbackFn) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ESCAPE_KEY) {
        callbackFn?.(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callbackFn]);
};

export default useEscapeKey;
