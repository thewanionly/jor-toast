import React from 'react';

const useKeydown = (keyCode, callbackFn) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === keyCode) {
        callbackFn?.(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyCode, callbackFn]);
};

export default useKeydown;
